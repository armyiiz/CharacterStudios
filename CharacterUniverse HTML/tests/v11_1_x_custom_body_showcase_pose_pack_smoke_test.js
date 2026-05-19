const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const consoleErrors = [];
const sandbox = {
  console: {
    ...console,
    error(...args) {
      consoleErrors.push(args.join(' '));
      console.error(...args);
    }
  },
  window: {},
  document: { addEventListener() {} },
  localStorage: {
    getItem() { return null; },
    setItem() {},
    removeItem() {},
    key() { return null; },
    get length() { return 0; }
  },
  navigator: {},
  setTimeout,
  clearTimeout,
  requestAnimationFrame(fn) { return fn(); },
  consoleErrors
};
sandbox.window = sandbox;
vm.createContext(sandbox);

[
  'data.js',
  'data/characters/characters_core.js',
  'data/characters/characters_elysian_apex.js',
  'data/characters/characters_elysian_apex_expansion_v2_simple_items.js',
  'data/characters/characters_elysian_apex_expansion_2.js',
  'data/characters/characters_elysian_apex_expansion_3.js',
  'data/characters/characters_norse_valkyrie_dominion.js',
  'data/characters/characters_norse_valkyrie_dominion_expansion_2.js',
  'data/characters/characters_solar_necropolis_egypt.js',
  'data/characters/characters_solar_necropolis_egypt_expansion_2.js',
  'data/characters/characters_heavenly_kami_war_court.js',
  'data/characters/characters_heavenly_kami_war_court_expansion_2.js',
  'data/characters/characters_heavenly_kami_war_court_expansion_3.js',
  'data/characters/index.js',
  'pose_packs/v11_1_5_advanced_weapon_action_pose_pack.js',
  'pose_packs/v11_1_x_custom_body_showcase_pose_pack.js',
  'pose_packs/v11_1_7_weapon_family_pose_pack.js',
  'poseLibraryV9.js',
  'app.js'
].forEach(file => {
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), sandbox, { filename: file });
});

const result = JSON.parse(vm.runInContext(`
(function () {
  const assertions = [];
  const poses = activePoseLibrary();
  const packPoses = v11xCustomBodyShowcasePoses;
  const packIds = packPoses.map(p => p.id);
  const cgIds = packIds.filter(id => /^V11X-CG-\\d{2}$/.test(id));
  const bsIds = packIds.filter(id => /^V11X-BS-\\d{2}$/.test(id));
  const expectedRoleSamples = ['weapon', 'instrument_item', 'document_item', 'tool_item', 'ritual_item'];
  const style = activeStyles[0];
  const avoidRoles = ['weapon', 'large_weapon', 'dual_item', 'instrument_item', 'document_item', 'tool_item', 'ritual_item'];
  const forbiddenPlacementTerms = [
    'sheathed at the left hip',
    'scabbard physically attached',
    'firmly grips',
    'weapon at side',
    'weapon beside',
    'blade angled',
    'holding the weapon',
    'playing the instrument',
    'reading the document',
    'using the tool',
    'ritual item'
  ];

  function assert(name, condition) {
    assertions.push({ name, pass: Boolean(condition) });
  }
  function pose(id) {
    return poses.find(p => p.id === id);
  }
  function charForRole(role) {
    return allActiveCharacters().find(c => characterItemRoleForCompatibility(c) === role);
  }
  function compatibleCameraDrivenIds(character, mode) {
    state.itemMode = mode;
    state.promptMode = 'compact';
    clearPoseCaches();
    return compatiblePosesFor(character).filter(p => packIds.includes(p.id)).map(p => p.id);
  }
  function promptFor(character, poseId, mode) {
    state.itemMode = mode;
    state.promptMode = 'compact';
    clearPoseCaches();
    return buildPrompts(character, pose(poseId), style);
  }
  function includesAll(haystack, terms) {
    const lower = String(haystack || '').toLowerCase();
    return terms.every(term => lower.includes(term.toLowerCase()));
  }
  function excludesAll(haystack, terms) {
    const lower = String(haystack || '').toLowerCase();
    return terms.every(term => !lower.includes(term.toLowerCase()));
  }

  const actualPackIds = poses.filter(p => packIds.includes(p.id)).map(p => p.id);
  const duplicatePoseIds = poses
    .map(p => String(p.id))
    .filter((id, index, arr) => arr.indexOf(id) !== index);
  const noItemCharacter = allActiveCharacters().find(c => inferGender(c) === 'female') || allActiveCharacters()[0];

  assert('app loads without console errors', consoleErrors.length === 0);
  assert('pose pack exports 30 camera-driven glamour poses from data', packPoses.length === 30);
  assert('all exported camera-driven glamour poses are active', actualPackIds.length === packPoses.length && packIds.every(id => actualPackIds.includes(id)));
  assert('all 26 V11X-CG poses exist', cgIds.length === 26 && cgIds.every(id => !!pose(id)));
  assert('all 4 existing V11X-BS IDs are preserved', bsIds.length === 4 && ['V11X-BS-01', 'V11X-BS-02', 'V11X-BS-03', 'V11X-BS-04'].every(id => bsIds.includes(id)));
  assert('no duplicate pose IDs exist', duplicatePoseIds.length === 0);
  assert('female no-item character can see all 30 camera-driven glamour poses', noItemCharacter && compatibleCameraDrivenIds(noItemCharacter, 'no_item').length === packPoses.length);

  packIds.forEach(id => {
    const p = pose(id);
    assert(id + ' exists', !!p);
    assert(id + ' uses camera-driven glamour schema', p && p.category === 'glamour_showcase' && p.subcategory === 'camera_driven_body_showcase' && p.uiCategory === 'camera_driven_glamour');
    assert(id + ' has Thai title', p && typeof p.titleTH === 'string' && /[ก-๙]/.test(p.titleTH));
    assert(id + ' is no-item safe', p && p.noItemSafe === true);
    assert(id + ' does not require item', p && p.requiresItem === false);
    assert(id + ' uses none action type', p && p.itemActionType === 'none');
    assert(id + ' supports only none item role', p && JSON.stringify(p.compatibleItemRoles || []) === JSON.stringify(['none']));
    assert(id + ' avoids item/weapon roles', p && avoidRoles.every(role => (p.avoidItemRoles || []).includes(role)));
    assert(id + ' prompt starts with camera/framing first', p && /^Camera\\/framing first:/i.test(p.prompt));
    assert(id + ' noItemPrompt keeps empty-hand rule', p && includesAll(p.noItemPrompt, ['both hands empty', 'no handheld']));
    assert(id + ' is not active attack', p && !poseIsActiveAttackPose(p));
  });

  expectedRoleSamples.forEach(role => {
    const c = charForRole(role);
    assert(role + ' sample character exists', !!c);
    assert(role + ' sample does not see camera-driven glamour in with-item mode', c && compatibleCameraDrivenIds(c, 'with_item').length === 0);
    assert(role + ' sample is not forced into camera-driven glamour with personal item', c && compatibleCameraDrivenIds(c, 'with_item').length === 0);
    const prompt = c && promptFor(c, packIds[0], 'no_item');
    assert(role + ' no-item prompt avoids personal item placement text', prompt && excludesAll(prompt.positive, forbiddenPlacementTerms));
  });

  return JSON.stringify({
    assertions,
    samples: Object.fromEntries(expectedRoleSamples.map(role => {
      const c = charForRole(role);
      return [role, c && (c.n || c.name)];
    })),
    counts: {
      characters: allActiveCharacters().length,
      poses: poses.length,
      cameraDrivenGlamour: actualPackIds.length,
      cgPoses: cgIds.length,
      bsPoses: bsIds.length,
      duplicatePoseIds: duplicatePoseIds.length
    }
  });
})()
`, sandbox, { filename: 'v11_1_x_camera_driven_glamour_smoke_runner.js' }));

const failures = result.assertions.filter(row => !row.pass);

console.log('V11.1.X camera-driven glamour final 30 smoke test');
console.log('');
console.log(`Counts: ${result.counts.characters} characters, ${result.counts.poses} poses, ${result.counts.cameraDrivenGlamour} camera-driven glamour poses (${result.counts.cgPoses} CG + ${result.counts.bsPoses} BS), duplicate pose IDs ${result.counts.duplicatePoseIds}`);
console.log(`Samples: ${Object.entries(result.samples).map(([role, name]) => role + '=' + (name || 'missing')).join(', ')}`);
console.log('');
result.assertions.forEach(row => {
  console.log(`${row.pass ? 'PASS' : 'FAIL'} ${row.name}`);
});

if (failures.length) {
  process.exitCode = 1;
}
