const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
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
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), sandbox, { filename: file });
});

const result = JSON.parse(vm.runInContext(`
(() => {
  const c = allActiveCharacters().find(x => x.n === 'Maya');
  const p = activePoseLibrary().find(x => x.title === 'Universal No-Item Hero Standing') || activePoseLibrary().find(x => x.noItemSafe === true);
  const style = activeStyles[0];
  state.itemMode = 'no_item';
  state.promptMode = 'compact';
  const compact = buildPrompts(c, p, style);
  state.promptMode = 'full_debug';
  const debug = buildPrompts(c, p, style);
  const assertions = [];
  function assert(name, condition) { assertions.push({ name, pass: Boolean(condition) }); }

  assert('Maya is available', Boolean(c));
  assert('no-item pose is available', Boolean(p));
  assert('Maya is classified as wearable equipment', itemPromptClass(c) === 'wearable_equipment');
  assert('compact positive keeps gauntlets', /gauntlets/i.test(compact.positive));
  assert('compact positive keeps gauntlets as outfit equipment', /worn heavy steel brawler gauntlets as part of her combat outfit/i.test(compact.positive));
  assert('compact item mode says no handheld item', /Item mode: no handheld item/i.test(compact.positive));
  assert('compact positive keeps hands free from separate props', /hands free from separate weapons or props/i.test(compact.positive));
  assert('compact negative does not ban gauntlets', !/gauntlet/i.test(compact.negative));
  assert('compact negative does not ban wearing', !/\\bwearing\\b/i.test(compact.negative));
  assert('compact negative still blocks separate handheld clutter', /unwanted extra weapon|unwanted extra prop|item in hand/i.test(compact.negative));
  assert('full debug shows wearable_equipment', /wearable_equipment/i.test(debug.positive));
  assert('full debug uses no-handheld item mode', /Item Mode: no handheld item/i.test(debug.positive));

  return JSON.stringify({ assertions, compactPositiveLength: compact.positive.length, compactNegativeLength: compact.negative.length });
})()
`, sandbox));

console.log('V12.0.8.1 wearable no-item smoke test\n');
result.assertions.forEach(assertion => {
  console.log(`${assertion.pass ? 'PASS' : 'FAIL'} ${assertion.name}`);
});
console.log(`\nCompact positive length: ${result.compactPositiveLength}`);
console.log(`Compact negative length: ${result.compactNegativeLength}`);

const failures = result.assertions.filter(assertion => !assertion.pass);
if (failures.length) {
  process.exitCode = 1;
}
