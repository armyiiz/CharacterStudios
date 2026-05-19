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
  function pose(id) {
    const found = poses.find(p => p.id === id);
    if (!found) throw new Error('Missing pose: ' + id);
    return found;
  }
  function prompt(characterName, poseId, mode = 'with_item') {
    state.itemMode = mode;
    state.promptMode = 'compact';
    clearPoseCaches();
    return buildPrompts(char(characterName), pose(poseId), activeStyles[0]);
  }
  function compatibleIds(characterName, mode = 'with_item') {
    state.itemMode = mode;
    state.promptMode = 'compact';
    clearPoseCaches();
    return new Set(compatiblePosesFor(char(characterName)).map(p => p.id));
  }
  function includesAll(haystack, terms) {
    const lower = haystack.toLowerCase();
    return terms.every(term => lower.includes(term.toLowerCase()));
  }
  function excludesAll(haystack, terms) {
    const lower = haystack.toLowerCase();
    return terms.every(term => !lower.includes(term.toLowerCase()));
  }

  const tsukuyomiSpellNoItem = prompt('Tsukuyomi', 'CO-13', 'no_item');
  const tsukuyomiAttackWithItem = prompt('Tsukuyomi', 'V115-WA-01', 'with_item');
  const benzaitenInstrument = prompt('Benzaiten', 'V114-LI-12', 'with_item');
  const daikokutenHeavy = prompt('Daikokuten', 'V115-WA-17', 'with_item');
  const benzaitenIds = compatibleIds('Benzaiten');
  const ptahIds = compatibleIds('Ptah');

  assert('app loads without console errors', consoleErrors.length === 0);
  assert('Tsukuyomi spellcasting no-item suppresses sword aliases in positive prompt',
    excludesAll(tsukuyomiSpellNoItem.positive, ['silver crescent katana', 'katana', 'sword', 'blade', 'sheath', 'scabbard']));
  assert('Tsukuyomi spellcasting no-item adds item alias negatives',
    includesAll(tsukuyomiSpellNoItem.negative, ['floating sword', 'floating katana', 'summoned blade', 'weapon-shaped aura']));
  assert('Tsukuyomi katana attack with-item still includes katana',
    /silver crescent katana|katana/i.test(tsukuyomiAttackWithItem.positive));
  assert('Benzaiten instrument performance with-item includes biwa',
    /biwa/i.test(benzaitenInstrument.positive));
  assert('Benzaiten instrument performance does not weaponize biwa',
    !/slash|thrust|attack with biwa|swing biwa as weapon/i.test(benzaitenInstrument.positive));
  assert('Benzaiten cannot see V11.1.5 weapon active attack poses',
    v1115Ids.every(id => !benzaitenIds.has(id)));
  assert('Ptah tool_item hammer cannot see hammer smash weapon poses',
    !ptahIds.has('V114-WA-07') && !ptahIds.has('V115-WA-17') && !ptahIds.has('V115-WA-18'));
  assert('Daikokuten heavy weapon pose with-item still includes mallet',
    /giant fortune war mallet|mallet/i.test(daikokutenHeavy.positive));

  return JSON.stringify({
    assertions,
    counts: {
      characters: allCharacters.length,
      poses: poses.length,
      benzaitenCompatible: benzaitenIds.size,
      ptahCompatible: ptahIds.size
    }
  });
})()
`, sandbox, { filename: 'v11_1_6_pose_intent_item_suppression_smoke_runner.js' }));

const failures = result.assertions.filter(row => !row.pass);

console.log('V11.1.6 pose intent + item suppression smoke test');
console.log('');
console.log(`Counts: ${result.counts.characters} characters, ${result.counts.poses} poses, Benzaiten compatible ${result.counts.benzaitenCompatible}, Ptah compatible ${result.counts.ptahCompatible}`);
console.log('');
result.assertions.forEach(row => {
  console.log(`${row.pass ? 'PASS' : 'FAIL'} ${row.name}`);
});

if (failures.length) {
  process.exitCode = 1;
}
