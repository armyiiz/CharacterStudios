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
  requestAnimationFrame(fn) { return fn(); }
};
sandbox.window = sandbox;
sandbox.consoleErrors = consoleErrors;
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
  const substitutions = [];
  const forbiddenNonWeaponPrompt = /slash|thrust|strike with|swing as weapon|attack with horn|attack with fan|attack with scroll|attack with teacup/i;
  const allCharacters = allActiveCharacters();
  const allSchemas = charactersReworkedFinalV3;
  const poses = activePoseLibrary();
  const style = activeStyles[0];

  function assert(name, condition) {
    assertions.push({ name, pass: Boolean(condition) });
  }
  function findChar(name, fallback) {
    const found = allCharacters.find(c => c.n === name || c.name === name);
    if (found) return found;
    const replacement = fallback && allCharacters.find(fallback);
    if (replacement) {
      substitutions.push({ requested: name, used: replacement.n || replacement.name });
      return replacement;
    }
    throw new Error('Missing character: ' + name);
  }
  function setMode(mode) {
    state.itemMode = mode;
    state.promptMode = 'compact';
    clearPoseCaches();
  }
  function compatible(c, predicate, mode = 'with_item') {
    setMode(mode);
    return compatiblePosesFor(c).filter(predicate);
  }
  function prompt(c, p, mode = 'with_item') {
    setMode(mode);
    return buildPrompts(c, p, style);
  }
  function role(c) {
    return characterItemRoleForCompatibility(c);
  }

  const activeAttackPose = poses.find(p => p.itemActionType === 'active_attack' && /slash|strike|lunge|attack/i.test([p.title, p.prompt].join(' ')));
  const combatReadyPose = poses.find(p => p.itemActionType === 'combat_ready');
  const instrumentPose = poses.find(p => (p.compatibleItemRoles || []).includes('instrument_item'));
  const documentPose = poses.find(p => (p.compatibleItemRoles || []).includes('document_item') || /book|scroll|reading|document/i.test([p.title, p.prompt].join(' ')));
  const lifestylePose = poses.find(p => (p.compatibleItemRoles || []).includes('daily_item') || /cup|teacup|tray|glamour|showcase/i.test([p.title, p.prompt].join(' ')));

  const heimdall = findChar('Heimdall');
  const bragi = findChar('Bragi');
  const hera = findChar('Hera');
  const aphrodite = findChar('Aphrodite');
  const nyx = findChar('Nyx');
  const tyche = findChar('Tyche');
  const thor = findChar('Thor');
  const athena = findChar('Athena');
  const nemesis = findChar('Nemesis');
  const mika = findChar('Mika Sparkbeat', c => /microphone|instrument|baton/i.test(schemaMainItemName(c)));

  assert('app loads without console.error', consoleErrors.length === 0);
  assert('active character count matches schema', allCharacters.length === allSchemas.length);
  assert('pose count matches active pose library', poses.length === activePoseLibrary().length && poses.length > 0);
  assert('active attack test pose exists', !!activeAttackPose);
  assert('battle presence/combat-ready test pose exists', !!combatReadyPose);
  assert('instrument-compatible test pose exists', !!instrumentPose);
  assert('document-compatible test pose exists', !!documentPose);
  assert('lifestyle-compatible test pose exists', !!lifestylePose);

  assert('Heimdall horn is not a weapon', role(heimdall) !== 'weapon');
  assert('Bragi lyre is instrument_item', role(bragi) === 'instrument_item');
  assert('Hera fan is not a weapon', role(hera) !== 'weapon');
  assert('Aphrodite apple is not a weapon', role(aphrodite) !== 'weapon');
  assert('Nyx scroll is document_item', role(nyx) === 'document_item');
  assert('Tyche cornucopia is not a weapon', role(tyche) !== 'weapon');
  assert('weapon sample remains weapon', [thor, athena, nemesis].some(c => role(c) === 'weapon'));

  assert('weapon character still sees active attack poses', compatible(nemesis, p => String(p.id) === String(activeAttackPose.id)).length > 0);
  [heimdall, bragi, hera, aphrodite, nyx, tyche, mika].forEach(c => {
    assert(c.n + ' excludes active attack poses', compatible(c, p => String(p.id) === String(activeAttackPose.id)).length === 0);
  });

  assert('no-item mode excludes item-required poses', compatible(nemesis, p => p.requiresItem === true, 'no_item').length === 0);
  assert('instrument item character sees instrument/performer-compatible poses', compatible(bragi, p => (p.compatibleItemRoles || []).includes('instrument_item') || /instrument|lyre|harp|performer|baton/i.test([p.title, p.prompt].join(' '))).length > 0);
  assert('document item character sees document-compatible poses', compatible(nyx, p => String(p.id) === String(documentPose.id)).length > 0);
  assert('daily/accessory item character sees lifestyle/glamour-compatible poses', compatible(aphrodite, p => String(p.id) === String(lifestylePose.id)).length > 0 || compatible(hera, p => String(p.id) === String(lifestylePose.id)).length > 0);
  assert('battle presence is derived from combat_ready', poseIsBattlePresencePose(combatReadyPose) === true);
  assert('non-weapon battle presence remains available when item-compatible', compatible(heimdall, p => poseIsBattlePresencePose(p)).length > 0);

  const heimdallAttackPrompt = prompt(heimdall, activeAttackPose, 'with_item');
  assert('non-weapon active attack prompt falls back away from attack wording', !forbiddenNonWeaponPrompt.test(heimdallAttackPrompt.positive));
  assert('non-weapon negative prompt suppresses weaponized item', /weaponized|non-weapon item used as weapon|using .* as a weapon/i.test(heimdallAttackPrompt.negative));
  const weaponPrompt = prompt(nemesis, activeAttackPose, 'with_item');
  assert('weapon item can retain weapon/action language', /sword|weapon|slash|strike|attack/i.test(weaponPrompt.positive));
  assert('complexity lock appears in positive prompt', /Complexity lock: preserve the same character design/i.test(weaponPrompt.positive));
  assert('complexity lock appears in negative prompt', /detail escalation|visual escalation|ornate redesign/i.test(weaponPrompt.negative));

  return JSON.stringify({
    assertions,
    substitutions,
    counts: {
      activeCharacters: allCharacters.length,
      poses: poses.length,
      activeAttackPoses: poses.filter(p => poseIsActiveAttackPose(p)).length,
      battlePresencePoses: poses.filter(p => poseIsBattlePresencePose(p)).length
    }
  });
})()
`, sandbox, { filename: 'v11_1_3_itemrole_pose_lock_smoke_runner.js' }));

const failures = result.assertions.filter(row => !row.pass);

console.log('V11.1.3 itemRole / pose lock smoke test');
console.log('');
console.log(`Counts: ${result.counts.activeCharacters} characters, ${result.counts.poses} poses, ${result.counts.activeAttackPoses} active-attack/aim poses, ${result.counts.battlePresencePoses} battle-presence poses`);
if (result.substitutions.length) {
  console.log('');
  console.log('Substitutions:');
  result.substitutions.forEach(row => console.log(`- ${row.requested} -> ${row.used}`));
}
console.log('');
result.assertions.forEach(row => {
  console.log(`${row.pass ? 'PASS' : 'FAIL'} ${row.name}`);
});

if (failures.length) {
  process.exitCode = 1;
}
