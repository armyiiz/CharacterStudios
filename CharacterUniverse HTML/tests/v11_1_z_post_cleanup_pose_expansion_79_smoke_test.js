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
  'pose_packs/post_cleanup_pose_expansion_final_79.js',
  'pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js',
  'app.js'
].forEach(file => {
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), sandbox, { filename: file });
});

const result = JSON.parse(vm.runInContext(`
(function () {
  const assertions = [];
  const poses = activePoseLibrary();
  const added = postCleanupPoseExpansionFinal79;
  const skipped = postCleanupPoseExpansionSkippedDuplicates;
  const x2CameraGlamour = typeof v11x2CameraDrivenGlamourPosePack20 !== 'undefined' && Array.isArray(v11x2CameraDrivenGlamourPosePack20)
    ? v11x2CameraDrivenGlamourPosePack20
    : [];
  const expectedGroups = {
    'PCA-CAM': 10,
    VIL: 10,
    LII2: 12,
    WFA3: 12,
    DRC: 10,
    CEX: 10,
    'V11X-CGV2': 10,
    SSE: 5
  };
  const nonWeaponRoles = ['instrument_item', 'document_item', 'daily_item', 'accessory_item', 'ritual_item', 'tool_item', 'prop', 'none'];
  const explicitPattern = /\\b(booty|cleavage crop|oily skin|wet skin|lingerie-only|clothes pulling down|explicit body-part framing)\\b/i;
  const invalidItemRoles = new Set(['large_weapon', 'dual_item']);
  const samples = {};

  function assert(name, condition) {
    assertions.push({ name, pass: Boolean(condition) });
  }
  function groupFor(id) {
    if (id.startsWith('PCA-CAM')) return 'PCA-CAM';
    if (id.startsWith('V11X-CGV2')) return 'V11X-CGV2';
    return id.split('-')[0];
  }
  function sampleFor(role) {
    if (!samples[role]) samples[role] = allActiveCharacters().find(c => c.personalItem && c.personalItem.itemRole === role);
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
  function promptForPose(character, pose, mode = 'with_item') {
    state.itemMode = mode;
    state.promptMode = 'compact';
    clearPoseCaches();
    return buildPrompts(character, pose, activeStyles[0]).positive;
  }

  const ids = poses.map(p => String(p.id));
  const addedIds = added.map(p => String(p.id));
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  const duplicateAddedIds = addedIds.filter((id, index) => addedIds.indexOf(id) !== index);
  const groupCounts = added.reduce((acc, pose) => {
    const group = groupFor(pose.id);
    acc[group] = (acc[group] || 0) + 1;
    return acc;
  }, {});
  const noItemGlamour = added.filter(p => ['PCA-CAM', 'V11X-CGV2', 'SSE'].includes(groupFor(p.id)) && p.id !== 'V11X-CGV2-07');
  const weaponPoses = added.filter(p => groupFor(p.id) === 'WFA3' || p.id === 'V11X-CGV2-07');
  const lifestylePoses = added.filter(p => groupFor(p.id) === 'LII2');
  const explicitHits = added.filter(p => explicitPattern.test(JSON.stringify(p)));
  const invalidRoleHits = added.filter(p => (p.compatibleItemRoles || []).some(role => invalidItemRoles.has(role)));
  const weaponWithItem = new Set(compatibleForRole('weapon').map(p => p.id));
  const nonWeaponVisibleWeapon = nonWeaponRoles.flatMap(role => {
    const visible = new Set(compatibleForRole(role, role === 'none' ? 'no_item' : 'with_item').map(p => p.id));
    return weaponPoses.filter(p => visible.has(p.id)).map(p => role + ':' + p.id);
  });
  const lifestyleWeaponVisible = lifestylePoses.filter(p => weaponWithItem.has(p.id)).map(p => p.id);
  const noItemGlamourWeaponVisible = noItemGlamour.filter(p => weaponWithItem.has(p.id)).map(p => p.id);
  const lifestyleBadMeta = lifestylePoses.filter(p => p.requiresItem !== true || p.noItemSafe !== false || (p.compatibleItemRoles || []).includes('weapon') || !(p.compatibleItemRoles || []).length);
  const weaponBadMeta = weaponPoses.filter(p => p.requiresItem !== true || p.noItemSafe !== false || JSON.stringify(p.compatibleItemRoles || []) !== JSON.stringify(['weapon']));
  const noItemGlamourBadMeta = noItemGlamour.filter(p => p.requiresItem !== false || p.noItemSafe !== true || p.itemActionType !== 'none' || JSON.stringify(p.compatibleItemRoles || []) !== JSON.stringify(['none']));
  const polishedMissing = ['V11X-CGV2-02','V11X-CGV2-03','V11X-CGV2-09','V11X-CGV2-10','SSE-01','SSE-02','SSE-06','SSE-08','SSE-10']
    .filter(id => !(added.find(p => p.id === id) || {}).prompt?.includes('high-end fashion editorial lighting'));
  const flowChar = sampleFor('daily_item') || allActiveCharacters()[0];
  const flowPose = added.find(p => p.id === 'LII2-01') || added[0];
  const flowPrompt = promptForPose(flowChar, flowPose, 'with_item');

  assert('app loads without console errors', consoleErrors.length === 0);
  assert('all 79 candidates were integrated or explicitly skipped', added.length + skipped.length === 79);
  assert('no candidates skipped after active-library duplicate audit', skipped.length === 0);
  assert('active pose count is clean core plus kept expansion poses and later X2 additions', poses.length === 180 + added.length + x2CameraGlamour.length);
  assert('all added IDs are unique', duplicateAddedIds.length === 0);
  assert('active pose IDs remain unique', duplicateIds.length === 0);
  Object.entries(expectedGroups).forEach(([group, count]) => assert(group + ' count is correct', groupCounts[group] === count));
  assert('no invalid itemRole values in compatibleItemRoles', invalidRoleHits.length === 0);
  assert('no explicit production wording in added poses', explicitHits.length === 0);
  assert('no-item glamour and sensual poses have no-item-only metadata', noItemGlamourBadMeta.length === 0);
  assert('no-item glamour and sensual poses are hidden from weapon with-item mode', noItemGlamourWeaponVisible.length === 0);
  assert('weapon poses are weapon-only', weaponBadMeta.length === 0);
  assert('weapon poses are hidden from non-weapon roles', nonWeaponVisibleWeapon.length === 0);
  assert('lifestyle poses require compatible non-weapon item roles', lifestyleBadMeta.length === 0);
  assert('lifestyle poses are hidden from weapon with-item mode', lifestyleWeaponVisible.length === 0);
  assert('selected glamour/sensual poses include lighting polish', polishedMissing.length === 0);
  assert('prompt flow still generates for an added lifestyle pose', flowPrompt.length > 100 && !explicitPattern.test(flowPrompt));

  return JSON.stringify({
    assertions,
    poseCount: poses.length,
    addedCount: added.length,
    skippedCount: skipped.length,
    groupCounts,
    explicitHits: explicitHits.map(p => p.id),
    invalidRoleHits: invalidRoleHits.map(p => p.id),
    noItemGlamourWeaponVisible,
    nonWeaponVisibleWeapon,
    lifestyleWeaponVisible,
    polishedMissing
  });
})()
`, sandbox));

const failed = result.assertions.filter(assertion => !assertion.pass);
console.log(JSON.stringify(result, null, 2));
if (failed.length) {
  throw new Error('V11.1.Z post-cleanup pose expansion smoke test failed: ' + failed.map(assertion => assertion.name).join('; '));
}
