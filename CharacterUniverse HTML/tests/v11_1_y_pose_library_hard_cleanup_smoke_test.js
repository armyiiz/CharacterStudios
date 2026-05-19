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
  'poseLibraryV11_clean.js',
  'app.js'
].forEach(file => {
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), sandbox, { filename: file });
});

const result = JSON.parse(vm.runInContext(`
(function () {
  const assertions = [];
  const poses = activePoseLibrary();
  const nonWeaponRoles = ['instrument_item', 'document_item', 'daily_item', 'accessory_item', 'ritual_item', 'tool_item', 'prop', 'none'];
  const samples = {};

  function assert(name, condition) {
    assertions.push({ name, pass: Boolean(condition) });
  }
  function normalizeSkeleton(text) {
    return String(text || '')
      .toLowerCase()
      .replace(/based on [^.]+/g, 'based on <title>')
      .replace(/\\b(v\\d+[a-z-]*|st|gl|si|co|ce|sc|vi|li|exp|safe|cgl|nis|rw|uni|mn|fb)[-_]?[a-z0-9-]*\\b/g, '<id>')
      .replace(/\\s+/g, ' ')
      .trim();
  }
  function itemRole(c) {
    return c && c.personalItem && c.personalItem.itemRole;
  }
  function sampleFor(role) {
    if (!samples[role]) {
      samples[role] = allActiveCharacters().find(c => itemRole(c) === role);
    }
    return samples[role];
  }
  function compatibleForRole(role, mode = 'with_item') {
    const c = sampleFor(role);
    if (!c) return [];
    state.itemMode = mode;
    state.promptMode = 'compact';
    clearPoseCaches();
    return compatiblePosesFor(c);
  }
  function promptForRole(role, mode = 'with_item') {
    const c = sampleFor(role);
    if (!c) return '';
    state.itemMode = mode;
    state.promptMode = 'compact';
    clearPoseCaches();
    const pose = compatiblePosesFor(c)[0];
    if (!pose) return '';
    return buildPrompts(c, pose, activeStyles[0]).positive;
  }

  const ids = poses.map(p => String(p.id));
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  const skeletons = new Map();
  poses.forEach(p => {
    const key = normalizeSkeleton(p.prompt);
    if (!skeletons.has(key)) skeletons.set(key, []);
    skeletons.get(key).push(p.id);
  });
  const duplicateSkeletonGroups = Array.from(skeletons.values()).filter(group => group.length > 1);
  const duplicateSkeletonAffected = duplicateSkeletonGroups.reduce((sum, group) => sum + group.length, 0);
  const activeAttackBad = poses.filter(p => p.itemActionType === 'active_attack' && JSON.stringify(p.compatibleItemRoles || []) !== JSON.stringify(['weapon']));
  const rangedBad = poses.filter(p => p.uiCategory === 'ranged_weapon' && JSON.stringify(p.compatibleItemRoles || []) !== JSON.stringify(['weapon']));
  const attackLanguage = /\\b(slash|thrust|smash|aim|aiming|attack|strike|bow draw|gun aim)\\b/i;
  const nonWeaponAttackLeak = nonWeaponRoles.flatMap(role => compatibleForRole(role).filter(p => p.itemActionType === 'active_attack' || p.uiCategory === 'ranged_weapon' || attackLanguage.test([p.title, p.prompt, p.itemActionType].join(' '))).map(p => role + ':' + p.id));
  const noItemLeak = /\\b(sword|katana|bow|gun|rifle|spear|dagger|weapon|staff|book|scroll|cup|instrument|tool)\\b/i.test(promptForRole('weapon', 'no_item'));

  state.itemMode = 'with_item';
  state.promptMode = 'compact';
  const flowChar = sampleFor('weapon') || allActiveCharacters()[0];
  state.selectedCharId = flowChar && flowChar.id;
  clearPoseCaches();
  const flowPoses = compatiblePosesFor(flowChar);
  state.selectedPoseId = flowPoses[0] && flowPoses[0].id;
  const flowPrompt = buildPrompts(flowChar, selectedPose(), activeStyles[0]);

  assert('app loads without console errors', consoleErrors.length === 0);
  assert('clean active pose count is 120-180', poses.length >= 120 && poses.length <= 180);
  assert('no duplicate pose IDs', duplicateIds.length === 0);
  assert('duplicate skeleton affected count stays low', duplicateSkeletonAffected <= 24);
  assert('active_attack poses are weapon-only', activeAttackBad.length === 0);
  assert('ranged_weapon poses are weapon-only', rangedBad.length === 0);
  assert('non-weapon roles do not receive attack or aiming poses', nonWeaponAttackLeak.length === 0);
  assert('no-item generated prompt does not leak item terms', noItemLeak === false);
  ['weapon', 'ritual_item', 'daily_item', 'accessory_item', 'document_item', 'tool_item', 'instrument_item', 'none'].forEach(role => {
    assert(role + ' sample has compatible poses', compatibleForRole(role, role === 'none' ? 'no_item' : 'with_item').length > 0);
  });
  assert('select character -> select pose -> prompt flow generates output', Boolean(flowChar && selectedPose() && flowPrompt.positive && flowPrompt.negative));

  return JSON.stringify({
    assertions,
    poseCount: poses.length,
    duplicateSkeletonGroups: duplicateSkeletonGroups.length,
    duplicateSkeletonAffected,
    activeAttackBad: activeAttackBad.map(p => p.id),
    rangedBad: rangedBad.map(p => p.id),
    nonWeaponAttackLeak,
    sampledRoles: Object.fromEntries(Object.entries(samples).map(([role, c]) => [role, c && (c.n || c.name)]))
  });
})()
`, sandbox));

const failed = result.assertions.filter(assertion => !assertion.pass);
console.log(JSON.stringify(result, null, 2));
if (failed.length) {
  throw new Error('V11.1.Y pose hard cleanup smoke test failed: ' + failed.map(assertion => assertion.name).join('; '));
}
