const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const consoleErrors = [];
function makeElement(id) {
  return {
    id,
    innerHTML: '',
    textContent: '',
    value: '',
    disabled: false,
    dataset: {},
    title: '',
    classList: { toggle() {}, add() {}, remove() {}, contains() { return false; } },
    setAttribute() {},
    addEventListener() {},
    remove() {},
    insertAdjacentHTML() {},
    scrollIntoView() {},
    getBoundingClientRect() { return { top: 0 }; }
  };
}

const elements = new Map();
const document = {
  addEventListener() {},
  querySelectorAll() { return []; },
  getElementById(id) {
    if (!elements.has(id)) elements.set(id, makeElement(id));
    return elements.get(id);
  }
};
const sandbox = {
  console: {
    ...console,
    error(...args) {
      consoleErrors.push(args.join(' '));
      console.error(...args);
    }
  },
  window: {},
  document,
  localStorage: {
    getItem() { return null; },
    setItem() {},
    removeItem() {},
    key() { return null; },
    get length() { return 0; }
  },
  navigator: {},
  matchMedia() { return { matches: false }; },
  scrollY: 0,
  scrollTo() {},
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
  const beforeCharacterCount = 585;
  const beforePoseCount = 259;
  const x2Ids = Array.from({ length: 20 }, (_, index) => 'V11X2-CG-' + String(index + 1).padStart(2, '0'));
  const searchNames = ['Tamamo-no-Mae', 'Yamata-no-Orochi', 'Abe no Seimei', 'Inari Okami', 'Muramasa-hime', 'Ryujin', 'Izanami-no-Mikoto', 'Minamoto no Raiko', 'Yoshitsune', 'Nurarihyon-hime'];
  const forbiddenPositive = /\\b(sword|katana|blade|sheath|scabbard|spear|bow|gun|staff)\\b|item in hand|handheld prop/i;
  const cameraIntent = /top-down|high-angle|low-angle|worm's-eye|worm|rear three-quarter|dutch-angle|close-up|foreshortening/i;

  function assert(name, condition) { assertions.push({ name, pass: Boolean(condition) }); }
  function duplicateValues(values) { return values.filter((value, index) => values.indexOf(value) !== index); }
  function idsInRange(start, end) {
    const ids = new Set(allActiveCharacters().map(c => String(c.id)));
    for (let id = start; id <= end; id += 1) if (!ids.has(String(id))) return false;
    return true;
  }
  function searchFinds(name) {
    const query = name.toLowerCase();
    return allActiveCharacters().some(c => [c.name, c.n, c.displayName, c.title, schemaCharacterPromptPreview(c)].join(' ').toLowerCase().includes(query));
  }
  function char(name) {
    const found = allActiveCharacters().find(c => [c.name, c.n, c.displayName].join(' ').includes(name));
    if (!found) throw new Error('Missing character: ' + name);
    return found;
  }
  function pose(id) { return activePoseLibrary().find(p => String(p.id) === String(id)); }
  function compatibleIds(characterOrName, mode = 'with_item') {
    const c = typeof characterOrName === 'string' ? char(characterOrName) : characterOrName;
    state.itemMode = mode;
    state.promptMode = 'compact';
    clearPoseCaches();
    return new Set(compatiblePosesFor(c).map(p => String(p.id)));
  }
  function promptFor(character, poseId, mode = 'no_item') {
    state.itemMode = mode;
    state.promptMode = 'compact';
    clearPoseCaches();
    return buildPrompts(character, pose(poseId), activeStyles[0]);
  }

  const allCharacters = allActiveCharacters();
  const poses = activePoseLibrary();
  const ids = allCharacters.map(c => String(c.id));
  const faction25 = allCharacters.filter(c => Number(c.factionId || c.f) === 25);
  const faction25Names = faction25.map(c => c.name || c.n);
  const poseIds = poses.map(p => String(p.id));
  const x2Source = v11x2CameraDrivenGlamourPosePack20;
  const skipped = v11x2CameraDrivenGlamourPosePackSkippedDuplicates;
  const x2Poses = poses.filter(p => x2Ids.includes(String(p.id)));
  const x2BadMeta = x2Poses.filter(p => p.requiresItem !== false || p.noItemSafe !== true || p.itemActionType !== 'none' || JSON.stringify(p.compatibleItemRoles || []) !== JSON.stringify(['none']));
  const weaponChar = allCharacters.find(c => characterItemRoleForCompatibility(c) === 'weapon');
  const nonWeaponItemChar = allCharacters.find(c => !['weapon', 'none'].includes(characterItemRoleForCompatibility(c)) && schemaHasToggleItem(c));
  const maleNoItemChar = allCharacters.find(c => inferGender(c) === 'male');
  const femaleNoItemChar = allCharacters.find(c => inferGender(c) === 'female');
  const noItemChar = femaleNoItemChar || allCharacters.find(c => characterItemRoleForCompatibility(c) === 'none') || allCharacters[0];
  const samplePrompt = promptFor(noItemChar, 'V11X2-CG-01', 'no_item');

  assert('app loads without console errors', consoleErrors.length === 0);
  assert('active source is charactersReworkedFinalV3', allCharacters.length === charactersReworkedFinalV3.length && charactersReworkedFinalV2 === charactersReworkedFinalV3);
  assert('active character count increased by 100', allCharacters.length === beforeCharacterCount + 100);
  assert('Kami expansion files load exactly 100 characters', heavenlyKamiWarCourtExpansion2Characters.length === 50 && heavenlyKamiWarCourtExpansion3Characters.length === 50);
  assert('IDs 2552-2651 are present', idsInRange(2552, 2651));
  assert('duplicate character IDs remain zero', duplicateValues(ids).length === 0);
  assert('duplicate character names inside faction 25 are zero', duplicateValues(faction25Names).length === 0);
  assert('faction 25 count increased by 100', faction25.length === 150);
  searchNames.forEach(name => assert('search finds ' + name, searchFinds(name)));

  const hoichi = char('Hoichi');
  const abe = char('Abe no Seimei');
  const murasaki = char('Murasaki Shikibu');
  const yamata = char('Yamata-no-Orochi');
  const hangaku = char('Hangaku Gozen');
  const muramasa = char('Muramasa-hime');
  const ryujin = char('Ryujin');
  const benkei = char('Benkei');
  assert('Hoichi is instrument_item and sees no active weapon attack poses', characterItemRoleForCompatibility(hoichi) === 'instrument_item' && !Array.from(compatibleIds(hoichi)).some(id => poseIsActiveAttackPose(pose(id))));
  assert('Abe no Seimei is ritual_item and sees no active slash/thrust poses', characterItemRoleForCompatibility(abe) === 'ritual_item' && !Array.from(compatibleIds(abe)).some(id => poseIsActiveAttackPose(pose(id))));
  assert('Murasaki Shikibu is document_item and sees no active slash/thrust poses', characterItemRoleForCompatibility(murasaki) === 'document_item' && !Array.from(compatibleIds(murasaki)).some(id => poseIsActiveAttackPose(pose(id))));
  assert('Yamata-no-Orochi large weapon sees battle poses', characterItemFamilyForCompatibility(yamata) === 'large_weapon' && Array.from(compatibleIds(yamata)).some(id => poseIsActiveAttackPose(pose(id))));
  assert('Hangaku Gozen bow sees ranged poses', characterItemFamilyForCompatibility(hangaku) === 'bow' && Array.from(compatibleIds(hangaku)).some(id => poseUiCategory(pose(id)) === 'ranged_weapon' || /bow/i.test([id, pose(id).title].join(' '))));
  assert('Muramasa-hime katana sees sword/katana poses', characterItemFamilyForCompatibility(muramasa) === 'katana' && Array.from(compatibleIds(muramasa)).some(id => /V115-WA|KATANA|sword|katana/i.test([id, pose(id).title].join(' '))));
  assert('Ryujin trident sees spear/trident-compatible poses', characterItemFamilyForCompatibility(ryujin) === 'trident' && Array.from(compatibleIds(ryujin)).some(id => /SPEAR|spear|trident|long_item|V115-WA-12|V115-WA-13/i.test([id, pose(id).title, poseUiCategory(pose(id))].join(' '))));
  assert('Benkei large naginata sees large weapon-compatible poses', characterItemFamilyForCompatibility(benkei) === 'large_weapon' && Array.from(compatibleIds(benkei)).some(id => /HEAVY|large|long_item|V115-WA-12|V115-WA-13/i.test([id, pose(id).title, poseUiCategory(pose(id))].join(' '))));

  assert('pose candidate count is 20', x2Source.length + skipped.length === 20);
  assert('all 20 camera-driven candidates were added after duplicate audit', x2Source.length === 20 && skipped.length === 0);
  assert('active pose count increased by 20', poses.length === beforePoseCount + 20);
  assert('all X2 pose IDs are present', x2Ids.every(id => poseIds.includes(id)));
  assert('duplicate pose IDs remain zero', duplicateValues(poseIds).length === 0);
  assert('all X2 poses have no-item-only metadata', x2BadMeta.length === 0);
  assert('weapon with-item mode hides X2 poses', x2Ids.filter(id => compatibleIds(weaponChar, 'with_item').has(id)).length === 0);
  assert('non-weapon with-item mode hides X2 poses', x2Ids.filter(id => compatibleIds(nonWeaponItemChar, 'with_item').has(id)).length === 0);
  assert('male no-item mode hides X2 poses', !maleNoItemChar || x2Ids.filter(id => compatibleIds(maleNoItemChar, 'no_item').has(id)).length === 0);
  assert('female no-item mode can see X2 poses', femaleNoItemChar && x2Ids.filter(id => compatibleIds(femaleNoItemChar, 'no_item').has(id)).length > 0);
  assert('X2 positive prompt avoids weapon/item-in-hand words', !forbiddenPositive.test(samplePrompt.positive));
  assert('X2 positive prompt keeps camera intent', cameraIntent.test(samplePrompt.positive));
  assert('Complexity Lock remains in X2 positive prompt', /Complexity lock: preserve the same character design/i.test(samplePrompt.positive));

  selectCharacter(heavenlyKamiWarCourtExpansion2Characters[0].id);
  const selected = selectedChar();
  const selectedCompatible = compatiblePosesFor(selected);
  const generated = buildPrompts(selected, selectedCompatible[0], activeStyles[0]);
  assert('browser-flow proxy selects a new Kami character', selected && String(selected.id) === String(heavenlyKamiWarCourtExpansion2Characters[0].id));
  assert('browser-flow proxy moves to Step 2', state.step === 2);
  assert('browser-flow proxy renders compatible pose options', selectedCompatible.length > 0);
  assert('browser-flow proxy generates prompt', Boolean(generated.positive && generated.negative));

  return JSON.stringify({
    assertions,
    counts: {
      beforeCharacterCount,
      afterCharacterCount: allCharacters.length,
      addedKamiCharacters: heavenlyKamiWarCourtExpansion2Characters.length + heavenlyKamiWarCourtExpansion3Characters.length,
      faction25: faction25.length,
      beforePoseCount,
      afterPoseCount: poses.length,
      x2Added: x2Source.length,
      x2Skipped: skipped.length,
      duplicateCharacterIds: duplicateValues(ids).length,
      duplicateFaction25Names: duplicateValues(faction25Names).length,
      duplicatePoseIds: duplicateValues(poseIds).length
    },
    activeSource: 'charactersReworkedFinalV3',
    noItemPromptCharacter: noItemChar.name || noItemChar.n
  });
})()
`, sandbox, { filename: 'v11_1_x2_kami_expansions_camera_glamour_pose_pack_smoke_runner.js' }));

const failures = result.assertions.filter(row => !row.pass);

console.log('V12 Kami expansions + camera glamour pose pack smoke test');
console.log('');
console.log(JSON.stringify(result.counts, null, 2));
console.log('Active source: ' + result.activeSource);
console.log('Prompt sample character: ' + result.noItemPromptCharacter);
console.log('');
result.assertions.forEach(row => {
  console.log(`${row.pass ? 'PASS' : 'FAIL'} ${row.name}`);
});

if (failures.length) {
  process.exitCode = 1;
}
