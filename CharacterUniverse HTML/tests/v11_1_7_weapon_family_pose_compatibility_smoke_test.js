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
  const style = activeStyles[0];
  const bodyIds = ['V11X-BS-01', 'V11X-BS-02', 'V11X-BS-03', 'V11X-BS-04'];
  const v117Ids = [
    'V117-WF-KATANA-REST-01',
    'V117-WF-KATANA-HOLD-01',
    'V117-WF-HEAVY-REST-01',
    'V117-WF-BOW-CARRY-01',
    'V117-WF-SPEAR-REST-01',
    'V117-WF-RIFLE-CARRY-01',
    'V117-WF-DAGGER-HOLD-01'
  ];

  function assert(name, condition) {
    assertions.push({ name, pass: Boolean(condition) });
  }
  function char(name) {
    const found = allCharacters.find(c => c.n === name || c.name === name || (c.displayName || '').includes(name));
    if (!found) throw new Error('Missing character: ' + name);
    return found;
  }
  function charByResolvedFamily(family) {
    return allCharacters.find(c => characterItemRoleForCompatibility(c) === 'weapon' && getWeaponFamily(c) === family);
  }
  function pose(id) {
    const found = poses.find(p => p.id === id);
    if (!found) throw new Error('Missing pose: ' + id);
    return found;
  }
  function compatibleIds(characterOrName, mode = 'with_item') {
    const c = typeof characterOrName === 'string' ? char(characterOrName) : characterOrName;
    state.itemMode = mode;
    state.promptMode = 'compact';
    clearPoseCaches();
    return new Set(compatiblePosesFor(c).map(p => p.id));
  }
  function compatibleTitles(characterName, mode = 'with_item') {
    state.itemMode = mode;
    state.promptMode = 'compact';
    clearPoseCaches();
    return compatiblePosesFor(char(characterName)).map(p => p.title);
  }
  function prompt(characterName, poseId, mode = 'with_item') {
    state.itemMode = mode;
    state.promptMode = 'compact';
    clearPoseCaches();
    return buildPrompts(char(characterName), pose(poseId), style);
  }
  function excludesAll(haystack, terms) {
    const lower = haystack.toLowerCase();
    return terms.every(term => !lower.includes(term.toLowerCase()));
  }

  const poseIds = poses.map(p => String(p.id));
  const duplicatePoseIds = poseIds.filter((id, idx) => poseIds.indexOf(id) !== idx);
  const susanooIds = compatibleIds('Susanoo');
  const susanooNoItemIds = compatibleIds('Susanoo', 'no_item');
  const tsukuyomiNoItem = prompt('Tsukuyomi', 'CO-13', 'no_item');
  const tsukuyomiAttack = prompt('Tsukuyomi', 'V115-WA-01', 'with_item');
  const susanooRestPrompt = prompt('Susanoo', 'V117-WF-KATANA-REST-01', 'with_item');
  const susanooHoldPrompt = prompt('Susanoo', 'V117-WF-KATANA-HOLD-01', 'with_item');
  const benzaitenIds = compatibleIds('Benzaiten');
  const daikokutenIds = compatibleIds('Daikokuten');
  const hachimanIds = compatibleIds('Hachiman');
  const spearChar = charByResolvedFamily('spear');
  const rifleChar = charByResolvedFamily('rifle');
  const daggerChar = charByResolvedFamily('dagger');

  assert('app loads without console errors', consoleErrors.length === 0);
  assert('no duplicate pose IDs introduced', duplicatePoseIds.length === 0);
  assert('all V11.1.7 weapon-family pose IDs exist', v117Ids.every(id => poseIds.includes(id)));
  assert('all V11X-BS body showcase poses still exist', bodyIds.every(id => poseIds.includes(id)));

  bodyIds.forEach(id => {
    const p = pose(id);
    assert(id + ' remains no-item safe', p.noItemSafe === true);
    assert(id + ' remains item-free', p.requiresItem === false);
    assert(id + ' remains non-attack', !poseIsActiveAttackPose(p));
    assert(id + ' prompt is compressed', p.prompt.length < 360);
    assert(id + ' noItemPrompt is compressed', p.noItemPrompt.length < 400);
    assert(id + ' noItemPrompt keeps empty hands', /both hands empty/i.test(p.noItemPrompt));
  });

  assert('Susanoo/tachi resolves to katana family', getWeaponFamily(char('Susanoo')) === 'katana');
  assert('Susanoo does not see generic Weapon-at-Side Rest in with-item mode', !compatibleTitles('Susanoo').includes('Weapon-at-Side Rest'));
  assert('Susanoo can see katana sheathed rest', susanooIds.has('V117-WF-KATANA-REST-01'));
  assert('Susanoo can see katana low side hold', susanooIds.has('V117-WF-KATANA-HOLD-01'));
  assert('Susanoo can still see katana active attack poses', Array.from(susanooIds).some(id => String(id).startsWith('V115-WA-')));
  assert('Susanoo no-item can still see no-item-safe body showcase', bodyIds.some(id => susanooNoItemIds.has(id)));
  assert('Susanoo rest prompt uses sheathed hip placement', /sheathed at the left hip|scabbard physically attached to the waist/i.test(susanooRestPrompt.positive));
  assert('Susanoo hold prompt uses hand-connected low hold', /one visible hand firmly grips|blade angled diagonally downward|physically connected to the hand/i.test(susanooHoldPrompt.positive));
  assert('Susanoo passive prompt avoids unsafe generic-only side rest wording', !/item stays beside the body|weapon along the outer frame/i.test(susanooRestPrompt.positive));
  assert('Susanoo negatives include katana/tachi placement failures', /katana planted in the ground|grounded katana tip|detached scabbard/i.test(susanooRestPrompt.negative));

  assert('Tsukuyomi no-item spellcasting still suppresses sword aliases', excludesAll(tsukuyomiNoItem.positive, ['silver crescent katana', 'katana', 'sword', 'blade', 'sheath', 'scabbard']));
  assert('Tsukuyomi with-item active attack still includes katana', /silver crescent katana|katana/i.test(tsukuyomiAttack.positive));

  assert('Benzaiten instrument does not see V11.1.7 weapon-family poses', v117Ids.every(id => !benzaitenIds.has(id)));
  assert('Benzaiten instrument can still see instrument-compatible poses', compatibleIds('Benzaiten').has('V114-LI-12'));
  assert('Daikokuten heavy/hammer weapon can see heavy grounded rest', daikokutenIds.has('V117-WF-HEAVY-REST-01'));
  assert('Daikokuten does not get katana sheathed rest', !daikokutenIds.has('V117-WF-KATANA-REST-01'));
  assert('Hachiman bow can see bow relaxed side carry', hachimanIds.has('V117-WF-BOW-CARRY-01'));
  assert('Hachiman bow does not get katana sheathed rest', !hachimanIds.has('V117-WF-KATANA-REST-01'));
  assert('spear-family sample exists', !!spearChar);
  assert('spear-family sample can see spear upright rest', spearChar && compatibleIds(spearChar).has('V117-WF-SPEAR-REST-01'));
  assert('spear-family sample does not get katana sheathed rest', spearChar && !compatibleIds(spearChar).has('V117-WF-KATANA-REST-01'));
  assert('rifle-family sample exists', !!rifleChar);
  assert('rifle-family sample can see rifle low carry', rifleChar && compatibleIds(rifleChar).has('V117-WF-RIFLE-CARRY-01'));
  assert('rifle-family sample does not get katana or spear rest', rifleChar && !compatibleIds(rifleChar).has('V117-WF-KATANA-REST-01') && !compatibleIds(rifleChar).has('V117-WF-SPEAR-REST-01'));
  assert('dagger-family sample exists', !!daggerChar);
  assert('dagger-family sample can see dagger low side hold', daggerChar && compatibleIds(daggerChar).has('V117-WF-DAGGER-HOLD-01'));
  assert('dagger-family sample does not get greatsword grounded rest', daggerChar && !compatibleIds(daggerChar).has('V117-WF-HEAVY-REST-01'));

  return JSON.stringify({
    assertions,
    samples: {
      spear: spearChar && (spearChar.n || spearChar.name),
      rifle: rifleChar && (rifleChar.n || rifleChar.name),
      dagger: daggerChar && (daggerChar.n || daggerChar.name)
    },
    counts: {
      characters: allCharacters.length,
      poses: poses.length,
      v117Poses: v117Ids.filter(id => poseIds.includes(id)).length,
      duplicatePoseIds: duplicatePoseIds.length,
      susanooCompatible: susanooIds.size,
      benzaitenCompatible: benzaitenIds.size
    }
  });
})()
`, sandbox, { filename: 'v11_1_7_weapon_family_pose_compatibility_smoke_runner.js' }));

const failures = result.assertions.filter(row => !row.pass);

console.log('V11.1.7 weapon family pose compatibility smoke test');
console.log('');
console.log(`Counts: ${result.counts.characters} characters, ${result.counts.poses} poses, V11.1.7 poses ${result.counts.v117Poses}, duplicate pose IDs ${result.counts.duplicatePoseIds}`);
console.log(`Samples: spear=${result.samples.spear || 'missing'}, rifle=${result.samples.rifle || 'missing'}, dagger=${result.samples.dagger || 'missing'}`);
console.log('');
result.assertions.forEach(row => {
  console.log(`${row.pass ? 'PASS' : 'FAIL'} ${row.name}`);
});

if (failures.length) {
  process.exitCode = 1;
}
