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
  const v117Ids = v1117WeaponFamilyPoseCompatibilityPoses.map(p => p.id);
  const customBodyShowcaseIds = v11xCustomBodyShowcasePoses.map(p => p.id);
  const nonWeaponRoles = ['instrument_item', 'document_item', 'daily_item', 'accessory_item', 'ritual_item', 'tool_item', 'prop', 'none'];
  const forbiddenBenzaitenPrompt = /slash|thrust|swing biwa|attack with biwa|weaponized biwa/i;

  function assert(name, condition) {
    assertions.push({ name, pass: Boolean(condition) });
  }
  function char(name) {
    const found = allCharacters.find(c => c.n === name || c.name === name || (c.displayName || '').includes(name));
    if (!found) throw new Error('Missing character: ' + name);
    return found;
  }
  function pose(id) {
    return poses.find(p => p.id === id);
  }
  function hasPose(characterName, poseId, mode = 'with_item') {
    state.itemMode = mode;
    state.promptMode = 'compact';
    clearPoseCaches();
    return compatiblePosesFor(char(characterName)).some(p => p.id === poseId);
  }
  function hasAnyV1115(characterName) {
    state.itemMode = 'with_item';
    state.promptMode = 'compact';
    clearPoseCaches();
    return compatiblePosesFor(char(characterName)).some(p => v1115Ids.includes(p.id));
  }
  function prompt(characterName, poseId) {
    state.itemMode = 'with_item';
    state.promptMode = 'compact';
    clearPoseCaches();
    return buildPrompts(char(characterName), pose(poseId), activeStyles[0]);
  }
  function idsInRange(start, end) {
    const ids = new Set(allCharacters.map(c => Number(c.id)));
    for (let id = start; id <= end; id += 1) {
      if (!ids.has(id)) return false;
    }
    return true;
  }

  const duplicateIds = allCharacters
    .map(c => String(c.id))
    .filter((id, index, arr) => arr.indexOf(id) !== index);
  const duplicatePoseIds = poses
    .map(p => String(p.id))
    .filter((id, index, arr) => arr.indexOf(id) !== index);
  const faction24 = allCharacters.filter(c => Number(c.factionId || c.f) === 24);
  const faction25 = allCharacters.filter(c => Number(c.factionId || c.f) === 25);
  const baseCharacterCount = coreCharacters.length + elysianApexCharacters.length + elysianApexExpansionV2Characters.length + elysianApexExpansion2Characters.length + elysianApexExpansion3Characters.length + norseValkyrieDominionCharacters.length + norseValkyrieDominionExpansion2Characters.length;
  const basePoseCount = Math.max(
    typeof poseLibraryV9 !== 'undefined' && Array.isArray(poseLibraryV9) ? poseLibraryV9.length : 0,
    typeof window !== 'undefined' && Array.isArray(window.poseLibraryV9) ? window.poseLibraryV9.length : 0,
    typeof poseLibrary !== 'undefined' && Array.isArray(poseLibrary) ? poseLibrary.length : 0,
    typeof window !== 'undefined' && Array.isArray(window.poseLibrary) ? window.poseLibrary.length : 0
  );

  assert('app loads without console errors', consoleErrors.length === 0);
  assert('new character arrays are loaded', solarNecropolisEgyptCharacters.length === 50 && solarNecropolisEgyptExpansion2Characters.length === 50 && heavenlyKamiWarCourtCharacters.length === 50 && heavenlyKamiWarCourtExpansion2Characters.length === 50 && heavenlyKamiWarCourtExpansion3Characters.length === 50);
  assert('final character list includes all new arrays', allCharacters.length === baseCharacterCount + solarNecropolisEgyptCharacters.length + solarNecropolisEgyptExpansion2Characters.length + heavenlyKamiWarCourtCharacters.length + heavenlyKamiWarCourtExpansion2Characters.length + heavenlyKamiWarCourtExpansion3Characters.length);
  assert('all Egypt core IDs 2402-2451 exist', idsInRange(2402, 2451));
  assert('all Egypt expansion 2 IDs 2452-2501 exist', idsInRange(2452, 2501));
  assert('all Heavenly Kami IDs 2502-2551 exist', idsInRange(2502, 2551));
  assert('no duplicate character IDs exist', duplicateIds.length === 0);
  assert('faction 24 has 100 characters', faction24.length === 100);
  assert('faction 25 has 150 characters', faction25.length === 150);
  state.universe = 2;
  assert('faction dropdown source includes Egypt and Kami', allFactions().some(f => String(f.id) === 'f24' && f.count === 100) && allFactions().some(f => String(f.id) === 'f25' && f.count === 150));
  assert('character count is baseline plus 250', allCharacters.length === baseCharacterCount + 250);
  assert('all V11.1.5 pose IDs exist', v1115Ids.every(id => !!pose(id)));
  assert('no duplicate pose IDs exist', duplicatePoseIds.length === 0);
  assert('pose count includes V11.1.5 additions, camera-driven glamour poses, and V11.1.7 weapon-family poses', poses.length === basePoseCount + v1115Ids.length + customBodyShowcaseIds.length + v117Ids.length);
  assert('all camera-driven glamour pose IDs exist', customBodyShowcaseIds.every(id => !!pose(id)));

  v1115Ids.forEach(id => {
    const p = pose(id);
    assert(id + ' is weapon-only active attack', p && p.category === 'weapon_action' && p.itemActionType === 'active_attack');
    assert(id + ' requires item and is not no-item safe', p && p.requiresItem === true && p.noItemSafe === false);
    assert(id + ' compatibleItemRoles is weapon only', p && JSON.stringify(p.compatibleItemRoles || []) === JSON.stringify(['weapon']));
    assert(id + ' avoids all non-weapon roles', p && nonWeaponRoles.every(role => (p.avoidItemRoles || []).includes(role)));
  });

  assert('Benzaiten is instrument_item and cannot see V11.1.5 poses', characterItemRoleForCompatibility(char('Benzaiten')) === 'instrument_item' && !hasAnyV1115('Benzaiten'));
  assert('Amaterasu sees katana/sword active attack poses', hasPose('Amaterasu', 'V115-WA-01') || hasPose('Amaterasu', 'V115-WA-05'));
  assert('Hachiman sees bow action poses', hasPose('Hachiman', 'V115-WA-14') || hasPose('Hachiman', 'V115-WA-15'));
  assert('Daikokuten sees heavy weapon action poses', hasPose('Daikokuten', 'V115-WA-17') || hasPose('Daikokuten', 'V115-WA-18'));
  assert('Shuten-dōji sees heavy weapon action poses', hasPose('Shuten-dōji', 'V115-WA-20') || hasPose('Shuten-dōji', 'V115-WA-17'));
  assert('Egypt weapon character sees weapon action poses', hasAnyV1115('Apep') || hasAnyV1115('Pakhet') || hasAnyV1115('Scorpion King'));
  assert('Egypt instrument character does not see weapon action poses', !hasAnyV1115('Sekeret') && !hasAnyV1115('Meritamen'));
  assert('Egypt document character does not see weapon action poses', !hasAnyV1115('Thoth'));
  assert('Egypt ritual/tool characters do not see weapon action poses', !hasAnyV1115('Osiris') && !hasAnyV1115('Ptah'));

  const benzaitenPrompt = prompt('Benzaiten', 'V114-LI-12');
  const amaterasuPrompt = prompt('Amaterasu', 'V115-WA-01');
  assert('Benzaiten prompt does not weaponize biwa', !forbiddenBenzaitenPrompt.test(benzaitenPrompt.positive));
  assert('weapon character prompt may include active attack wording', /slash|attack|katana|weapon/i.test(amaterasuPrompt.positive));

  return JSON.stringify({
    assertions,
    counts: {
      finalCharacters: allCharacters.length,
      baseCharacters: baseCharacterCount,
      faction24: faction24.length,
      faction25: faction25.length,
      finalPoses: poses.length,
      basePoses: basePoseCount,
      v1115Poses: v1115Ids.filter(id => !!pose(id)).length,
      duplicateIds: duplicateIds.length,
      duplicatePoseIds: duplicatePoseIds.length
    }
  });
})()
`, sandbox, { filename: 'v11_1_5_egypt_kami_pose_integration_smoke_runner.js' }));

const failures = result.assertions.filter(row => !row.pass);

console.log('V11.1.5 Egypt + Kami + weapon pose integration smoke test');
console.log('');
console.log(`Counts: ${result.counts.baseCharacters} -> ${result.counts.finalCharacters} characters, ${result.counts.basePoses} -> ${result.counts.finalPoses} poses, faction 24 ${result.counts.faction24}, faction 25 ${result.counts.faction25}`);
console.log('');
result.assertions.forEach(row => {
  console.log(`${row.pass ? 'PASS' : 'FAIL'} ${row.name}`);
});

if (failures.length) {
  process.exitCode = 1;
}
