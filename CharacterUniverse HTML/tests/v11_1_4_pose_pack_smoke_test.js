const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const baselineReport = fs.readFileSync(path.join(root, 'docs/reports/V11_1_3_POSE_METADATA_AUDIT_REPORT.md'), 'utf8');
const baselineMatch = baselineReport.match(/\| Total poses \| (\d+) \|/);
if (!baselineMatch) throw new Error('Could not read V11.1.3 pose baseline from report.');
const v113PoseBaseline = Number(baselineMatch[1]);

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
  consoleErrors,
  v113PoseBaseline
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
  const poses = activePoseLibrary();
  const weaponIds = Array.from({ length: 12 }, (_, i) => 'V114-WA-' + String(i + 1).padStart(2, '0'));
  const lifestyleIds = Array.from({ length: 12 }, (_, i) => 'V114-LI-' + String(i + 1).padStart(2, '0'));
  const v1115Ids = Array.from({ length: 24 }, (_, i) => 'V115-WA-' + String(i + 1).padStart(2, '0'));
  const v117Ids = v1117WeaponFamilyPoseCompatibilityPoses.map(p => p.id);
  const customBodyShowcaseIds = v11xCustomBodyShowcasePoses.map(p => p.id);
  const nonWeaponRoles = ['instrument_item', 'document_item', 'daily_item', 'accessory_item', 'ritual_item', 'tool_item', 'prop', 'none'];
  const lifestyleRoles = ['daily_item', 'accessory_item', 'document_item', 'instrument_item', 'tool_item', 'prop', 'ritual_item'];
  const forbiddenNonWeaponPrompt = /attack with horn|swing fan as weapon|slash with teacup/i;

  function assert(name, condition) {
    assertions.push({ name, pass: Boolean(condition) });
  }
  function pose(id) {
    return poses.find(p => p.id === id);
  }
  function char(name) {
    const found = allActiveCharacters().find(c => c.n === name || c.name === name);
    if (!found) throw new Error('Missing character: ' + name);
    return found;
  }
  function hasPose(characterName, poseId, mode = 'with_item') {
    state.itemMode = mode;
    state.promptMode = 'compact';
    clearPoseCaches();
    return compatiblePosesFor(char(characterName)).some(p => p.id === poseId);
  }
  function makePrompt(characterName, poseId, mode = 'with_item') {
    state.itemMode = mode;
    state.promptMode = 'compact';
    clearPoseCaches();
    return buildPrompts(char(characterName), pose(poseId), activeStyles[0]);
  }

  assert('app loads without console errors', consoleErrors.length === 0);
  assert('pose count includes V11.1.4, V11.1.5, camera-driven glamour, and V11.1.7 weapon-family additions', poses.length === v113PoseBaseline + weaponIds.length + lifestyleIds.length + v1115Ids.length + customBodyShowcaseIds.length + v117Ids.length);
  assert('all 12 weapon pose IDs exist', weaponIds.every(id => !!pose(id)));
  assert('all 12 lifestyle pose IDs exist', lifestyleIds.every(id => !!pose(id)));
  assert('all 24 V11.1.5 weapon pose IDs exist', v1115Ids.every(id => !!pose(id)));
  assert('all camera-driven glamour pose IDs exist', customBodyShowcaseIds.every(id => !!pose(id)));

  weaponIds.forEach(id => {
    const p = pose(id);
    assert(id + ' requires item', p && p.requiresItem === true);
    assert(id + ' is not no-item safe', p && p.noItemSafe === false);
    assert(id + ' uses active_attack', p && p.itemActionType === 'active_attack');
    assert(id + ' includes weapon compatibility', p && (p.compatibleItemRoles || []).includes('weapon'));
    assert(id + ' avoids every non-weapon role', p && nonWeaponRoles.every(role => (p.avoidItemRoles || []).includes(role)));
  });

  lifestyleIds.forEach(id => {
    const p = pose(id);
    assert(id + ' requires item', p && p.requiresItem === true);
    assert(id + ' is not no-item safe', p && p.noItemSafe === false);
    assert(id + ' is not active_attack', p && p.itemActionType !== 'active_attack');
    assert(id + ' includes non-weapon compatibility', p && lifestyleRoles.every(role => (p.compatibleItemRoles || []).includes(role)));
    assert(id + ' avoids weapon', p && (p.avoidItemRoles || []).includes('weapon'));
  });

  assert('Thor can use Hammer Overhead Smash', hasPose('Thor', 'V114-WA-07'));
  assert('Athena can use Spear Forward Thrust', hasPose('Athena', 'V114-WA-03'));
  assert('Nemesis can use Sword Diagonal Slash', hasPose('Nemesis', 'V114-WA-01'));
  assert('Heimdall cannot use weapon active attack starter poses', !weaponIds.some(id => hasPose('Heimdall', id)));
  assert('Bragi cannot use weapon active attack starter poses', !weaponIds.some(id => hasPose('Bragi', id)));
  assert('Hera cannot use weapon active attack starter poses', !weaponIds.some(id => hasPose('Hera', id)));
  assert('Aphrodite cannot use weapon active attack starter poses', !weaponIds.some(id => hasPose('Aphrodite', id)));
  assert('Nyx cannot use weapon active attack starter poses', !weaponIds.some(id => hasPose('Nyx', id)));
  assert('Tyche cannot use weapon active attack starter poses', !weaponIds.some(id => hasPose('Tyche', id)));

  assert('fan character can see Fan Covering Smile', hasPose('Hera', 'V114-LI-03'));
  assert('document character can see Book Reading', hasPose('Nyx', 'V114-LI-07'));
  assert('document character can see Scroll Writing', hasPose('Nyx', 'V114-LI-08'));
  assert('instrument character can see Instrument Performance', hasPose('Bragi', 'V114-LI-12'));
  assert('daily cup character can see Teacup Sip', hasPose('Celeste Teacup', 'V114-LI-01'));
  assert('daily tray character can see Serving Tray Presentation', hasPose('Praline Traymore', 'V114-LI-02'));
  assert('tool character can see Broom Sweeping', hasPose('Clara Broomwell', 'V114-LI-11'));

  const heimdallPrompt = makePrompt('Heimdall', 'V114-LI-12');
  const heraPrompt = makePrompt('Hera', 'V114-LI-03');
  const celestePrompt = makePrompt('Celeste Teacup', 'V114-LI-01');
  assert('non-weapon horn prompt does not say attack with horn', !/attack with horn/i.test(heimdallPrompt.positive));
  assert('non-weapon fan prompt does not say swing fan as weapon', !/swing fan as weapon/i.test(heraPrompt.positive));
  assert('non-weapon teacup prompt does not say slash with teacup', !/slash with teacup/i.test(celestePrompt.positive));
  assert('non-weapon prompts avoid listed forbidden weaponization phrases', !forbiddenNonWeaponPrompt.test([heimdallPrompt.positive, heraPrompt.positive, celestePrompt.positive].join('\\n')));

  const nemesisPrompt = makePrompt('Nemesis', 'V114-WA-01');
  const athenaPrompt = makePrompt('Athena', 'V114-WA-03');
  const thorPrompt = makePrompt('Thor', 'V114-WA-07');
  assert('weapon slash prompt may contain slash for weapon character', /slash/i.test(nemesisPrompt.positive));
  assert('weapon thrust prompt may contain thrust for weapon character', /thrust/i.test(athenaPrompt.positive));
  assert('weapon smash prompt may contain smash for weapon character', /smash/i.test(thorPrompt.positive));

  return JSON.stringify({
    assertions,
    counts: {
      baseline: v113PoseBaseline,
      current: poses.length,
      weaponStarter: weaponIds.filter(id => !!pose(id)).length,
      lifestyleStarter: lifestyleIds.filter(id => !!pose(id)).length,
      v1115Weapon: v1115Ids.filter(id => !!pose(id)).length
    },
    weaponIds,
    lifestyleIds
  });
})()
`, sandbox, { filename: 'v11_1_4_pose_pack_smoke_runner.js' }));

const failures = result.assertions.filter(row => !row.pass);

console.log('V11.1.4 weapon action + lifestyle pose pack smoke test');
console.log('');
console.log(`Counts: baseline ${result.counts.baseline}, current ${result.counts.current}, weapon starter ${result.counts.weaponStarter}, lifestyle starter ${result.counts.lifestyleStarter}`);
console.log('');
result.assertions.forEach(row => {
  console.log(`${row.pass ? 'PASS' : 'FAIL'} ${row.name}`);
});

if (failures.length) {
  process.exitCode = 1;
}
