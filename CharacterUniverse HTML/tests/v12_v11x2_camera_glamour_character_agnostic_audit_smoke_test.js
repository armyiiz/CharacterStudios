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
  const x2Ids = Array.from({ length: 20 }, (_, index) => 'V11X2-CG-' + String(index + 1).padStart(2, '0'));
  const poses = activePoseLibrary();
  const x2 = poses.filter(p => x2Ids.includes(String(p.id)));
  const bannedTerms = [
    'Susanoo', 'Sea Queen', 'dark navy hair', 'long dark hair', 'black teal silver samurai kimono',
    'samurai battle kimono', 'fixed kimono', 'shrine fantasy', 'dark luxury shrine', 'storm shrine',
    'thundercloud', 'thundercloud arc', 'blue lightning edge glow', 'sea queen aura', 'katana',
    'sword', 'weapon', 'item in hand', 'handheld prop'
  ];
  const leakageTerms = ['katana', 'sword', 'weapon', 'item in hand', 'handheld prop', 'personal prop', 'staff', 'bow', 'spear', 'blade', 'sheath', 'scabbard'];
  const cameraPattern = /camera|angle|view|framing|close-up|top-down|high-angle|low-angle|worm|rear three-quarter|dutch|foreshortening|overhead|portrait|crop|floor-level|side camera|three-quarter/i;
  const itemBearing = allActiveCharacters().find(c => schemaHasToggleItem(c) && characterItemRoleForCompatibility(c) !== 'none');
  const maleCharacter = allActiveCharacters().find(c => inferGender(c) === 'male');
  const femaleCharacter = allActiveCharacters().find(c => inferGender(c) === 'female');

  function assert(name, condition) { assertions.push({ name, pass: Boolean(condition) }); }
  function hasTerm(text, term) {
    const lower = String(text).toLowerCase();
    const clean = String(term).toLowerCase();
    if (/\s/.test(clean)) return lower.includes(clean);
    return new RegExp('(^|[^a-z0-9_])' + clean.replace(/[.*+?^()|[\]\\\\]/g, '\\\\$&') + '([^a-z0-9_]|$)', 'i').test(lower);
  }
  function compatibleIds(character, mode = 'with_item') {
    state.itemMode = mode;
    state.promptMode = 'compact';
    clearPoseCaches();
    return new Set(compatiblePosesFor(character).map(p => String(p.id)));
  }

  const promptTextByPose = x2.map(p => ({ id: p.id, text: [p.prompt, p.noItemPrompt].join('\\n') }));
  const bannedHits = promptTextByPose.flatMap(row => bannedTerms.filter(term => hasTerm(row.text, term)).map(term => row.id + ':' + term));
  const leakageHits = promptTextByPose.flatMap(row => leakageTerms.filter(term => hasTerm(row.text, term)).map(term => row.id + ':' + term));
  const badMeta = x2.filter(p => p.requiresItem !== false || p.noItemSafe !== true || p.itemActionType !== 'none' || p.uiCategory !== 'camera_driven_glamour' || p.uiCategoryTH !== 'หมวดตากล้อง' || JSON.stringify(p.compatibleItemRoles || []) !== JSON.stringify(['none']));
  const missingCamera = x2.filter(p => !cameraPattern.test([p.prompt, p.noItemPrompt, p.cameraAngle, p.framing].join(' '))).map(p => p.id);
  const mojibakeHits = x2.filter(p => /\\?{3,}|\u0e42\u20ac|\u0e40\u0e18|\u0e40\u0e19\u20ac|\ufffd/.test([p.title, p.titleTH, p.descriptionTH, p.uiCategoryTH].join('\\n'))).map(p => p.id);
  const withItemVisible = itemBearing ? x2Ids.filter(id => compatibleIds(itemBearing, 'with_item').has(id)) : [];
  const maleNoItemVisible = maleCharacter ? x2Ids.filter(id => compatibleIds(maleCharacter, 'no_item').has(id)) : [];
  const femaleNoItemVisible = femaleCharacter ? x2Ids.filter(id => compatibleIds(femaleCharacter, 'no_item').has(id)) : [];
  const duplicateIds = poses.map(p => String(p.id)).filter((id, index, arr) => arr.indexOf(id) !== index);

  assert('app loads without console errors', consoleErrors.length === 0);
  assert('all 20 X2 poses are active', x2.length === 20);
  assert('no X2 prompt snippet contains banned character-specific terms', bannedHits.length === 0);
  assert('no X2 prompt snippet contains weapon/item/prop leakage terms', leakageHits.length === 0);
  assert('all X2 poses remain no-item only with Thai camera label', badMeta.length === 0);
  assert('with-item mode hides X2 poses for item-bearing characters', withItemVisible.length === 0);
  assert('male no-item mode hides X2 poses', maleNoItemVisible.length === 0);
  assert('female no-item mode can still show X2 poses', femaleNoItemVisible.length > 0);
  assert('every X2 pose contains camera/framing language', missingCamera.length === 0);
  assert('Thai labels have no mojibake or question-mark fallback', mojibakeHits.length === 0);
  assert('active pose IDs remain unique', duplicateIds.length === 0);
  assert('character count remains 685', allActiveCharacters().length === 685);

  return JSON.stringify({
    assertions,
    counts: {
      characters: allActiveCharacters().length,
      activePoses: poses.length,
      x2Poses: x2.length,
      skippedDuplicates: v11x2CameraDrivenGlamourPosePackSkippedDuplicates.length,
      duplicatePoseIds: duplicateIds.length
    },
    bannedHits,
    leakageHits,
    badMeta: badMeta.map(p => p.id),
    missingCamera,
    mojibakeHits,
    itemBearingSample: itemBearing && (itemBearing.name || itemBearing.n),
    maleSample: maleCharacter && (maleCharacter.name || maleCharacter.n),
    femaleSample: femaleCharacter && (femaleCharacter.name || femaleCharacter.n),
    withItemVisible,
    maleNoItemVisible,
    femaleNoItemVisibleCount: femaleNoItemVisible.length
  });
})()
`, sandbox, { filename: 'v12_v11x2_camera_glamour_character_agnostic_audit_runner.js' }));

const failures = result.assertions.filter(row => !row.pass);
console.log('V12 V11X2 camera glamour character-agnostic audit smoke test');
console.log('');
console.log(JSON.stringify(result.counts, null, 2));
console.log('Item-bearing sample: ' + result.itemBearingSample);
console.log('');
result.assertions.forEach(row => console.log(`${row.pass ? 'PASS' : 'FAIL'} ${row.name}`));
if (failures.length) {
  console.log(JSON.stringify({
    bannedHits: result.bannedHits,
    leakageHits: result.leakageHits,
    badMeta: result.badMeta,
    missingCamera: result.missingCamera,
    mojibakeHits: result.mojibakeHits,
    withItemVisible: result.withItemVisible,
    maleNoItemVisible: result.maleNoItemVisible
  }, null, 2));
  process.exitCode = 1;
}
