const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = __dirname;
const sandbox = {
  console,
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
  requestAnimationFrame(fn) { return fn(); }
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
  const code = fs.readFileSync(path.join(root, file), 'utf8');
  vm.runInContext(code, sandbox, { filename: file });
});

const result = JSON.parse(vm.runInContext(`
(function () {
  const allCharacters = allActiveCharacters();
  const testStyles =
    (typeof activeStyles !== 'undefined' && Array.isArray(activeStyles) && activeStyles.length)
      ? activeStyles
      : ((typeof styles !== 'undefined' && Array.isArray(styles) && styles.length) ? styles : []);
  const loadedPoseLibrary = activePoseLibrary();
  const style = testStyles[0];
  const cases = [
    { key: 'gaela', char: 'Gaela Cross', pose: 'Balcony Lean with Hip Emphasis', mode: 'with_item' },
    { key: 'artemis', char: 'Artemis', pose: 'Universal Close-Up Shoulder Turn', mode: 'no_item' },
    { key: 'mika', char: 'Mika Sparkbeat', pose: 'Relaxed Idol Baton Pose', mode: 'with_item' },
    { key: 'brock', char: 'Brock Titan', pose: 'Universal No-Item Hero Standing', mode: 'no_item' },
    { key: 'hemlock', char: 'Professor Hemlock', pose: 'Professional Tool Side Presentation', mode: 'with_item' }
  ];
  function findChar(name) {
    const found = allCharacters.find(c => c.n === name);
    if (!found) throw new Error('Missing character: ' + name);
    return found;
  }
  function findSchema(name) {
    const found = charactersReworkedFinalV2.find(c => c.name === name);
    if (!found) throw new Error('Missing schema character: ' + name);
    return found;
  }
  function findPose(title) {
    const found = loadedPoseLibrary.find(p => p.title === title);
    if (!found) throw new Error('Missing pose: ' + title);
    return found;
  }
  function count(haystack, needle) {
    return haystack.toLowerCase().split(needle.toLowerCase()).length - 1;
  }
  function measure(testCase) {
    const c = findChar(testCase.char);
    const p = findPose(testCase.pose);
    state.itemMode = testCase.mode;
    state.promptMode = 'full_debug';
    const before = buildPrompts(c, p, style);
    state.promptMode = 'compact';
    const after = buildPrompts(c, p, style);
    return {
      key: testCase.key,
      character: testCase.char,
      pose: testCase.pose,
      itemMode: testCase.mode,
      before: before.positive.length,
      after: after.positive.length,
      reduction: Number((((before.positive.length - after.positive.length) / before.positive.length) * 100).toFixed(1)),
      positive: after.positive,
      negative: after.negative
    };
  }
  const measurements = cases.map(measure);
  const byKey = Object.fromEntries(measurements.map(row => [row.key, row]));
  const assertions = [];
  function assert(name, condition) {
    assertions.push({ name, pass: Boolean(condition) });
  }
  assert('prompt styles are available', testStyles.length > 0);
  assert('pose library is available', loadedPoseLibrary.length > 0);
  assert('pose count matches active pose library', loadedPoseLibrary.length === activePoseLibrary().length);
  assert('schema character count matches integrated V3', charactersReworkedFinalV2.length === charactersReworkedFinalV3.length);
  assert('active web character count matches schema', allCharacters.length === charactersReworkedFinalV2.length);
  assert('Rafe remains male', findSchema('Rafe').gender === 'male');
  assert('Gaela keeps ash-black hair with white streaks', /ash-black hair with white streaks/i.test(byKey.gaela.positive));
  assert('Gaela keeps gothic armor', /gothic armor/i.test(byKey.gaela.positive));
  assert('Gaela keeps cross-shaped greatsword', /cross-shaped greatsword/i.test(byKey.gaela.positive));
  assert('Gaela compact identity lock is present', /Identity lock:/i.test(byKey.gaela.positive));
  assert('Gaela reduction is at least 35%', byKey.gaela.reduction >= 35);
  assert('Gaela guard phrase appears once', count(byKey.gaela.positive, 'cover the face, chest silhouette, waist, or body outline') <= 1);
  assert('Artemis no-item positive has no bow/longbow/arrow', !/\\b(?:bow|longbow|arrow)\\b/i.test(byKey.artemis.positive));
  assert('Artemis keeps character core', /Character: Artemis/i.test(byKey.artemis.positive));
  assert('Artemis no-item exclusion is present', /Item mode: no item/i.test(byKey.artemis.positive));
  assert('Mika keeps core', /Character: Mika Sparkbeat/i.test(byKey.mika.positive));
  assert('Mika keeps personal item', /dance baton/i.test(byKey.mika.positive));
  assert('Brock no-item avoids legacy No handheld wording', !/with No handheld|No handheld prompt/i.test(byKey.brock.positive));
  assert('Professor Hemlock keeps syringe tool', /syringe/i.test(byKey.hemlock.positive));
  assert('Professor Hemlock positive has no cup', !/\\bcup\\b/i.test(byKey.hemlock.positive));
  return JSON.stringify({ measurements, assertions });
})()
`, sandbox, { filename: 'smoke-runner.js' }));

const failures = result.assertions.filter(row => !row.pass);

console.log('V11.1 prompt compression smoke test');
console.log('');
console.log('| Case | Before | After | Reduction |');
console.log('| --- | ---: | ---: | ---: |');
result.measurements.forEach(row => {
  console.log(`| ${row.character} / ${row.itemMode} / ${row.pose} | ${row.before} | ${row.after} | ${row.reduction}% |`);
});
console.log('');
result.assertions.forEach(row => {
  console.log(`${row.pass ? 'PASS' : 'FAIL'} ${row.name}`);
});

if (failures.length) {
  process.exitCode = 1;
}
