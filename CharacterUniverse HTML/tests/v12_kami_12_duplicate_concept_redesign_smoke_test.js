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
  const targets = {
    '2552': 'Tamamo Foxfire Courtesan',
    '2554': 'Kiyohime Bell-Burning Bride',
    '2557': 'Hannya Crimson Avenger',
    '2558': 'Nure-onna Abyss Serpent',
    '2575': 'Ukanomitama Granary Warden',
    '2576': 'Sarutahiko Roadgate Vanguard',
    '2578': 'Konohanasakuya Ash Bloom',
    '2603': 'Watatsumi Tide Commandress',
    '2606': 'Takemikazuchi War Marshal',
    '2607': 'Futsunushi Blade Arbiter',
    '2611': 'Ame-no-Tajikarao Colossus',
    '2640': 'Ame-no-Habakiri Stormfang'
  };
  function assert(name, condition) { assertions.push({ name, pass: Boolean(condition) }); }
  function duplicateValues(values) { return values.filter((value, index) => values.indexOf(value) !== index); }
  const all = allActiveCharacters();
  const faction25 = all.filter(c => Number(c.factionId || c.f) === 25);
  const ids = all.map(c => String(c.id));
  const faction25Names = faction25.map(c => c.name || c.n);
  const redesigned = Object.entries(targets).map(([id, name]) => all.find(c => String(c.id) === id && c.name === name));
  const missing = Object.entries(targets).filter(([id, name]) => !all.find(c => String(c.id) === id && c.name === name));
  const emergencySuffix = redesigned.filter(c => /\\(.+\\)/.test(c.name || '')).map(c => c.id + ':' + c.name);
  const weakConcept = redesigned.filter(c => {
    const blob = [c.characterCore && c.characterCore.body, c.characterCore && c.characterCore.outfit, c.characterCore && c.characterCore.aura, c.characterCore && c.characterCore.extra].join(' ').toLowerCase();
    return !/full bust|fitted waist|curvy|hourglass|voluptuous/.test(blob) || !/aspect|commander|arbiter|vanguard|colossus|warden|courtesan|executioner|avenger|commandress|stormfang|empress|bride/.test(blob);
  }).map(c => c.id + ':' + c.name);
  const badItems = redesigned.filter(c => !c.personalItem || !c.personalItem.name || !c.personalItem.withItemPrompt || !/physically|solid|rigid/i.test([c.personalItem.name, c.personalItem.description, c.personalItem.withItemPrompt, c.personalItem.itemGuard].join(' '))).map(c => c.id + ':' + c.name);
  const badFigure = redesigned.filter(c => !c.promptProfile || c.promptProfile.figurePreset !== 'glamour_voluptuous').map(c => c.id + ':' + c.name);
  const searchMissing = Object.values(targets).filter(name => !all.some(c => [c.name, c.title, c.characterCore && c.characterCore.extra].join(' ').includes(name)));

  state.itemMode = 'with_item';
  state.promptMode = 'compact';
  clearPoseCaches();
  const compatFailures = redesigned.filter(c => compatiblePosesFor(c).length === 0).map(c => c.id + ':' + c.name);

  assert('active character count remains 685', all.length === 685);
  assert('faction 25 remains 150', faction25.length === 150);
  assert('duplicate character IDs remain zero', duplicateValues(ids).length === 0);
  assert('duplicate names inside faction 25 remain zero', duplicateValues(faction25Names).length === 0);
  assert('all 12 redesigned records are present by new names', missing.length === 0);
  assert('none of the 12 use emergency parentheses suffix names', emergencySuffix.length === 0);
  assert('all 12 have concept-level glamour redesign language', weakConcept.length === 0);
  assert('all 12 keep readable physical item prompts', badItems.length === 0);
  assert('all 12 use supported glamour figure preset', badFigure.length === 0);
  assert('all 12 new names are searchable', searchMissing.length === 0);
  assert('all 12 still have compatible with-item poses', compatFailures.length === 0);

  return JSON.stringify({ assertions, missing, emergencySuffix, weakConcept, badItems, badFigure, searchMissing, compatFailures });
})()
`, sandbox, { filename: 'v12_kami_12_duplicate_concept_redesign_runner.js' }));

const failures = result.assertions.filter(row => !row.pass);
console.log('V12 Kami 12 duplicate concept redesign smoke test');
console.log('');
result.assertions.forEach(row => console.log(`${row.pass ? 'PASS' : 'FAIL'} ${row.name}`));
if (failures.length) {
  console.log(JSON.stringify(result, null, 2));
  process.exitCode = 1;
}
