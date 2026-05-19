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
  function includesAny(haystack, terms) {
    const lower = haystack.toLowerCase();
    return terms.some(term => lower.includes(term.toLowerCase()));
  }
  function excludesAll(haystack, terms) {
    const lower = haystack.toLowerCase();
    return terms.every(term => !lower.includes(term.toLowerCase()));
  }

  const tsukuyomiSpellWithItem = prompt('Tsukuyomi', 'CO-13', 'with_item');
  const tsukuyomiSpellNoItem = prompt('Tsukuyomi', 'CO-13', 'no_item');
  const tsukuyomiKatanaAttack = prompt('Tsukuyomi', 'V115-WA-01', 'with_item');
  const daikokutenHeavyAttack = prompt('Daikokuten', 'V115-WA-17', 'with_item');
  const benzaitenInstrument = prompt('Benzaiten', 'V114-LI-12', 'with_item');
  const tsukuyomiWithItemIds = compatibleIds('Tsukuyomi', 'with_item');

  assert('app loads without console errors', consoleErrors.length === 0);
  assert('V11.1.6.2 supersedes passive placement by hiding Tsukuyomi spellcasting with-item',
    !tsukuyomiWithItemIds.has('CO-13'));
  assert('direct Tsukuyomi spellcasting with-item prompt falls back instead of forcing passive placement',
    !/passive placement|sheathed at the left hip|scabbard physically attached/i.test(tsukuyomiSpellWithItem.positive));
  assert('Tsukuyomi spellcasting no-item still suppresses sword aliases',
    excludesAll(tsukuyomiSpellNoItem.positive, ['silver crescent katana', 'katana', 'sword', 'blade', 'sheath', 'scabbard']));
  assert('Tsukuyomi katana attack with-item keeps active katana usage',
    includesAny(tsukuyomiKatanaAttack.positive, ['draw slash', 'slash', 'attack', 'wielding silver crescent katana', 'silver crescent katana']));
  assert('Tsukuyomi katana attack with-item does not force sheathed placement',
    !/sheathed|left hip|passive placement/i.test(tsukuyomiKatanaAttack.positive));
  assert('Daikokuten heavy weapon attack remains active mallet attack',
    /giant fortune war mallet|mallet/i.test(daikokutenHeavyAttack.positive)
      && /swing|impact|attack|wielding|ground-crushing/i.test(daikokutenHeavyAttack.positive)
      && !/passive placement|strapped securely/i.test(daikokutenHeavyAttack.positive));
  assert('Benzaiten instrument behavior remains non-weapon',
    /biwa/i.test(benzaitenInstrument.positive)
      && !/passive weapon placement|sheathed|scabbard|strapped securely/i.test(benzaitenInstrument.positive)
      && !/slash|thrust|attack with biwa|swing biwa as weapon/i.test(benzaitenInstrument.positive));

  return JSON.stringify({
    assertions,
    counts: {
      characters: allCharacters.length,
      poses: poses.length
    }
  });
})()
`, sandbox, { filename: 'v11_1_6_1_with_item_passive_placement_smoke_runner.js' }));

const failures = result.assertions.filter(row => !row.pass);

console.log('V11.1.6.1 with-item passive placement smoke test');
console.log('');
console.log(`Counts: ${result.counts.characters} characters, ${result.counts.poses} poses`);
console.log('');
result.assertions.forEach(row => {
  console.log(`${row.pass ? 'PASS' : 'FAIL'} ${row.name}`);
});

if (failures.length) {
  process.exitCode = 1;
}
