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
  'poseLibraryV11_clean.js',
  'pose_packs/post_cleanup_pose_expansion_final_79.js',
  'pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js',
  'app.js'
].forEach(file => {
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), sandbox, { filename: file });
});

const result = JSON.parse(vm.runInContext(`
(function () {
  const assertions = [];
  const allCharacters = allActiveCharacters();
  const poses = activePoseLibrary();
  const style = activeStyles[0];

  function assert(name, condition) {
    assertions.push({ name, pass: Boolean(condition) });
  }
  function char(name) {
    const found = allCharacters.find(c => c.name === name || c.n === name || (c.displayName || '').includes(name))
      || allCharacters.find(c => String(c.name || c.n || '').includes(name));
    if (!found) throw new Error('Missing character: ' + name);
    return found;
  }
  function compatible(characterOrName, mode = 'with_item') {
    const c = typeof characterOrName === 'string' ? char(characterOrName) : characterOrName;
    state.itemMode = mode;
    state.promptMode = 'compact';
    clearPoseCaches();
    return compatiblePosesFor(c);
  }
  function prompt(characterOrName, pose, mode = 'with_item') {
    const c = typeof characterOrName === 'string' ? char(characterOrName) : characterOrName;
    state.itemMode = mode;
    state.promptMode = 'compact';
    clearPoseCaches();
    return buildPrompts(c, pose, style);
  }
  function duplicateCount(values) {
    return values.filter((value, index) => values.indexOf(value) !== index).length;
  }
  function familyCounts(characterOrName, mode) {
    const list = compatible(characterOrName, mode);
    return {
      allFemaleDesigned: list.filter(p => isFemaleGlamourEditorialPose(p)).length,
      camera_driven_glamour: list.filter(p => poseUiCategory(p) === 'camera_driven_glamour').length,
      glamour_showcase: list.filter(p => poseUiCategory(p) === 'glamour_showcase' || p.category === 'glamour_showcase').length,
      sensual_editorial: list.filter(p => poseUiCategory(p) === 'sensual_editorial' || p.uiCategory === 'sensual_editorial').length,
      body_showcase: list.filter(p => p.subcategory === 'camera_driven_body_showcase' || (p.collectionTags || []).includes('body_showcase')).length
    };
  }
  function countTerm(text, term) {
    return (String(text).toLowerCase().match(new RegExp(term.toLowerCase().replace(/[.*+?^$(){ }|[\\]\\\\]/g, '\\\\$&'), 'g')) || []).length;
  }

  const poseIds = poses.map(p => String(p.id));
  const characterIds = allCharacters.map(c => String(c.id));
  const characterNames = allCharacters.map(c => String(c.name || c.n));
  const ester = char('Ester');
  const alicia = char('Alicia von Heimdall');
  const odin = char('Odin');
  const isis = char('Isis');
  const andjety = char('Andjety');
  const hatshepsut = char('Hatshepsut');
  const odinWith = compatible(odin, 'with_item');
  const odinNo = compatible(odin, 'no_item');
  const odinSpearPoseIds = odinWith
    .filter(p => String(p.id).includes('V117-WF-SPEAR') || String(p.id).startsWith('V115-WA-') || /spear|polearm|active[_\\s-]?attack/i.test([p.title, p.prompt, p.weaponPresentation, p.compatibleWeaponFamilies].join(' ')))
    .map(p => String(p.id));
  const odinNoPrompt = prompt(odin, odinNo[0], 'no_item');
  const staffCases = [isis, andjety, hatshepsut].map(c => {
    const withPoses = compatible(c, 'with_item');
    const noPoses = compatible(c, 'no_item');
    const withPrompt = prompt(c, withPoses[0], 'with_item');
    const noPrompt = prompt(c, noPoses[0], 'no_item');
    return {
      name: c.name,
      role: c.personalItem.itemRole,
      family: c.personalItem.itemFamily,
      activeAttackVisible: withPoses.filter(p => poseIsActiveAttackPose(p)).length,
      ritualVisible: withPoses.filter(p => /ritual|ceremonial|mystic|standing|portrait/i.test([p.category, p.subcategory, p.uiCategory, p.title, p.prompt].join(' '))).length,
      weaponizedPrompt: /swinging .*staff|slashing|stabbing|striking with|attack with|used as a weapon/i.test(withPrompt.positive),
      noItemLeak: /ankh staff|crook staff|ceremonial crook staff/i.test(noPrompt.positive)
    };
  });
  const aliciaNoPrompt = prompt(alicia, compatible(alicia, 'no_item')[0], 'no_item');

  const esterNo = familyCounts(ester, 'no_item');
  const esterWith = familyCounts(ester, 'with_item');
  const aliciaNo = familyCounts(alicia, 'no_item');
  const aliciaWith = familyCounts(alicia, 'with_item');

  assert('app loads without console errors', consoleErrors.length === 0);
  assert('active characters remain 685', allCharacters.length === 685);
  assert('active poses remain 279', poses.length === 279);
  assert('duplicate character IDs remain 0', duplicateCount(characterIds) === 0);
  assert('duplicate character names remain 0', duplicateCount(characterNames) === 0);
  assert('duplicate pose IDs remain 0', duplicateCount(poseIds) === 0);

  assert('Ester no-item sees no female glamour/editorial/body-showcase poses', esterNo.allFemaleDesigned === 0);
  assert('Ester with-item sees no female glamour/editorial/body-showcase poses', esterWith.allFemaleDesigned === 0);
  assert('Ester no-item camera-driven glamour count is 0', esterNo.camera_driven_glamour === 0);
  assert('Ester no-item glamour_showcase count is 0', esterNo.glamour_showcase === 0);
  assert('Ester no-item sensual_editorial count is 0', esterNo.sensual_editorial === 0);
  assert('Ester no-item body_showcase count is 0', esterNo.body_showcase === 0);

  assert('female no-item still sees female glamour/editorial/body-showcase poses', aliciaNo.allFemaleDesigned > 0);
  assert('female with-item still sees compatible female glamour/editorial/body-showcase poses', aliciaWith.allFemaleDesigned > 0);
  assert('female no-item prompt does not leak personal item terms', !/spear|katana|bow|staff|handheld prop|item in hand/i.test(aliciaNoPrompt.positive));
  assert('representative prompt guard phrase is not repeated', countTerm(aliciaNoPrompt.positive, 'Do not let') <= 1);

  assert('Odin itemRole is weapon', odin.personalItem.itemRole === 'weapon');
  assert('Odin itemFamily is spear', odin.personalItem.itemFamily === 'spear');
  assert('Odin tags include weapon and spear', odin.tags.includes('weapon') && odin.tags.includes('spear'));
  assert('Odin with-item sees spear-compatible weapon poses', odinSpearPoseIds.length > 0);
  assert('Odin with-item can see spear upright rest', odinSpearPoseIds.includes('V117-WF-SPEAR-REST-01'));
  assert('Odin with-item can see active weapon attack poses', odinSpearPoseIds.some(id => id.startsWith('V115-WA-')));
  assert('Odin no-item suppresses spear text', !/dark rune spear|spearhead|spear\\b|shaft\\b|wield/i.test(odinNoPrompt.positive));
  assert('Odin is not treated as ritual-only', combatAttackAllowedForCharacter(odin) === true && inferRole(odin) === 'combat');

  staffCases.forEach(row => {
    assert(row.name + ' remains ritual_item/staff', row.role === 'ritual_item' && row.family === 'staff');
    assert(row.name + ' does not see active weapon attack poses', row.activeAttackVisible === 0);
    assert(row.name + ' still sees ritual/ceremonial poses', row.ritualVisible > 0);
    assert(row.name + ' with-item wording does not weaponize staff', row.weaponizedPrompt === false);
    assert(row.name + ' no-item suppresses staff text', row.noItemLeak === false);
  });

  return JSON.stringify({
    assertions,
    counts: {
      characters: allCharacters.length,
      poses: poses.length,
      duplicateCharacterIds: duplicateCount(characterIds),
      duplicateCharacterNames: duplicateCount(characterNames),
      duplicatePoseIds: duplicateCount(poseIds)
    },
    visibility: { esterNo, esterWith, aliciaNo, aliciaWith },
    odin: {
      itemRole: odin.personalItem.itemRole,
      itemFamily: odin.personalItem.itemFamily,
      spearPoseSample: odinSpearPoseIds.slice(0, 8),
      noItemPromptLength: odinNoPrompt.positive.length
    },
    staffCases
  });
})()
`, sandbox, { filename: 'v12_0_3_final_policy_role_family_polish_smoke_runner.js' }));

const failures = result.assertions.filter(row => !row.pass);

console.log('V12.0.3 final policy / role-family polish smoke test');
console.log('');
console.log(`Counts: ${result.counts.characters} characters, ${result.counts.poses} poses, duplicate character IDs ${result.counts.duplicateCharacterIds}, duplicate names ${result.counts.duplicateCharacterNames}, duplicate pose IDs ${result.counts.duplicatePoseIds}`);
console.log(`Ester visibility: no_item=${result.visibility.esterNo.allFemaleDesigned}, with_item=${result.visibility.esterWith.allFemaleDesigned}`);
console.log(`Alicia visibility: no_item=${result.visibility.aliciaNo.allFemaleDesigned}, with_item=${result.visibility.aliciaWith.allFemaleDesigned}`);
console.log(`Odin: role=${result.odin.itemRole}, family=${result.odin.itemFamily}, spear sample=${result.odin.spearPoseSample.join(', ')}`);
console.log('');
result.assertions.forEach(row => {
  console.log(`${row.pass ? 'PASS' : 'FAIL'} ${row.name}`);
});

if (failures.length) {
  process.exitCode = 1;
}
