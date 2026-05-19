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
  const allCharacters = allActiveCharacters();
  const poses = activePoseLibrary();
  const v1115Ids = Array.from({ length: 24 }, (_, i) => 'V115-WA-' + String(i + 1).padStart(2, '0'));

  function assert(name, condition) {
    assertions.push({ name, pass: Boolean(condition) });
  }
  function char(name) {
    const found = allCharacters.find(c => c.n === name || c.name === name || (c.displayName || '').includes(name));
    if (!found) throw new Error('Missing character: ' + name);
    return found;
  }
  function compatibleIds(characterName, mode = 'with_item') {
    state.itemMode = mode;
    state.promptMode = 'compact';
    clearPoseCaches();
    return new Set(compatiblePosesFor(char(characterName)).map(p => p.id));
  }
  function hasAny(ids, candidates) {
    return candidates.some(id => ids.has(id));
  }

  const tsukuyomiWith = compatibleIds('Tsukuyomi', 'with_item');
  const tsukuyomiNo = compatibleIds('Tsukuyomi', 'no_item');
  const amaterasuWith = compatibleIds('Amaterasu', 'with_item');
  const daikokutenWith = compatibleIds('Daikokuten', 'with_item');
  const shutenWith = compatibleIds('Shuten-dōji', 'with_item');
  const benzaitenWith = compatibleIds('Benzaiten', 'with_item');
  const ptahWith = compatibleIds('Ptah', 'with_item');
  const bragiWith = compatibleIds('Bragi', 'with_item');

  assert('app loads without console errors', consoleErrors.length === 0);
  assert('Tsukuyomi with-item hides spellcasting pose', !tsukuyomiWith.has('CO-13'));
  assert('Tsukuyomi no-item keeps spellcasting pose available', tsukuyomiNo.has('CO-13'));
  assert('Tsukuyomi with-item keeps katana attack poses', hasAny(tsukuyomiWith, ['V115-WA-01', 'V115-WA-02', 'V115-WA-05']));
  assert('Amaterasu with-item hides spellcasting or hands-busy poses', !amaterasuWith.has('CO-13') && !amaterasuWith.has('ST-17') && !amaterasuWith.has('GL-02'));
  assert('Amaterasu with-item keeps katana attack poses', hasAny(amaterasuWith, ['V115-WA-01', 'V115-WA-02', 'V115-WA-05']));
  assert('Daikokuten with-item keeps heavy weapon attack poses', hasAny(daikokutenWith, ['V115-WA-17', 'V115-WA-18']));
  assert('Shuten-dōji with-item keeps kanabou attack poses', hasAny(shutenWith, ['V115-WA-20', 'V115-WA-17']));
  assert('Benzaiten with-item keeps instrument performance poses', benzaitenWith.has('V114-LI-12'));
  assert('Benzaiten with-item keeps V11.1.5 weapon attacks hidden', v1115Ids.every(id => !benzaitenWith.has(id)));
  assert('non-weapon characters do not gain weapon attack poses', v1115Ids.every(id => !ptahWith.has(id)) && v1115Ids.every(id => !bragiWith.has(id)));

  return JSON.stringify({
    assertions,
    counts: {
      characters: allCharacters.length,
      poses: poses.length,
      tsukuyomiWith: tsukuyomiWith.size,
      tsukuyomiNo: tsukuyomiNo.size,
      benzaitenWith: benzaitenWith.size
    }
  });
})()
`, sandbox, { filename: 'v11_1_6_2_weapon_with_item_pose_filter_smoke_runner.js' }));

const failures = result.assertions.filter(row => !row.pass);

console.log('V11.1.6.2 weapon with-item hands-busy pose filter smoke test');
console.log('');
console.log(`Counts: ${result.counts.characters} characters, ${result.counts.poses} poses, Tsukuyomi with-item ${result.counts.tsukuyomiWith}, Tsukuyomi no-item ${result.counts.tsukuyomiNo}, Benzaiten with-item ${result.counts.benzaitenWith}`);
console.log('');
result.assertions.forEach(row => {
  console.log(`${row.pass ? 'PASS' : 'FAIL'} ${row.name}`);
});

if (failures.length) {
  process.exitCode = 1;
}
