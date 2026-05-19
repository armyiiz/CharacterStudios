const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = __dirname;
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
  'pose_packs/v11_1_5_advanced_weapon_action_pose_pack.js',
  'pose_packs/v11_1_x_custom_body_showcase_pose_pack.js',
  'pose_packs/v11_1_7_weapon_family_pose_pack.js',
  'poseLibraryV9.js',
  'app.js'
].forEach(file => {
  const code = fs.readFileSync(path.join(root, file), 'utf8');
  vm.runInContext(code, sandbox, { filename: file });
});

const result = JSON.parse(vm.runInContext(`
(function () {
  const allCharacters = allActiveCharacters();
  const testStyles =
    (typeof activeStyles !== 'undefined' && Array.isArray(activeStyles) && activeStyles.length)
      ? activeStyles
      : ((typeof styles !== 'undefined' && Array.isArray(styles) && styles.length) ? styles : []);
  const loadedPoseLibrary = activePoseLibrary();
  const style = testStyles[0];
  const assertions = [];
  const dualBladeRe = /dual blades|twin swords|two swords|holding each blade/i;

  function assert(name, condition) {
    assertions.push({ name, pass: Boolean(condition) });
  }
  assert('prompt styles are available', testStyles.length > 0);
  assert('pose library is available', loadedPoseLibrary.length > 0);
  assert('pose count matches active pose library', loadedPoseLibrary.length === activePoseLibrary().length);
  function findChar(name) {
    const found = allCharacters.find(c => c.n === name);
    if (!found) throw new Error('Missing character: ' + name);
    return found;
  }
  function findSchema(name) {
    const found = charactersReworkedFinalV2.find(c => c.name === name);
    if (!found) throw new Error('Missing schema character: ' + name);
    return found;
  }
  function findPose(name, predicate) {
    const found = loadedPoseLibrary.find(predicate);
    if (!found) throw new Error('Missing pose: ' + name);
    return found;
  }
  function setMode(mode) {
    state.itemMode = mode;
    state.promptMode = 'compact';
    clearPoseCaches();
  }
  function allowed(c, p, mode) {
    setMode(mode);
    return compatiblePosesFor(c).some(row => String(row.id) === String(p.id));
  }
  function build(c, p, mode) {
    setMode(mode);
    return buildPrompts(c, p, style);
  }

  const gaela = findChar('Gaela Cross');
  const gaelaSchema = findSchema('Gaela Cross');
  const artemis = findChar('Artemis');
  const kai = findChar('Kai Valentino');
  const rosalind = findChar('Rosalind Sniper');
  const mika = findChar('Mika Sparkbeat');
  const brock = findChar('Brock Titan');
  const hemlock = findChar('Professor Hemlock');

  const dualPose = findPose('dual blades', p => /dual blades|holding each blade/i.test(p.prompt || ''));
  const bowPose = findPose('bow', p => p.title === 'Longbow Beside Body Heroine');
  const gunPose = findPose('gun', p => /pistol|handgun|aiming gun/i.test(p.prompt || ''));
  const riflePose = findPose('rifle', p => /sniper rifle|rifle|scope/i.test(p.prompt || ''));
  const toolPose = findPose('tool', p => p.title === 'Professional Tool Side Presentation');
  const idolPose = findPose('idol baton', p => p.title === 'Relaxed Idol Baton Pose');
  const cupPose = findPose('cup', p => /teacup|saucer|cup pose/i.test(p.prompt || ''));

  setMode('with_item');
  const gaelaCompatiblePosePrompts = compatiblePosesFor(gaela).map(p => [p.title, p.prompt].join('\\n'));
  const gaelaPrompt = build(gaela, dualPose, 'with_item');
  const gaelaPromptPositive = gaelaPrompt.positive;
  const gaelaNegative = gaelaPrompt.negative;

  const artemisNoItem = build(artemis, bowPose, 'no_item');
  const artemisBowPoseAllowed = allowed(artemis, bowPose, 'with_item');
  const artemisGunPoseAllowed = allowed(artemis, gunPose, 'with_item');
  const artemisRiflePoseAllowed = allowed(artemis, riflePose, 'with_item');
  const artemisDualPoseAllowed = allowed(artemis, dualPose, 'with_item');

  const kaiGunPoseAllowed = allowed(kai, gunPose, 'with_item');
  const kaiBowPoseAllowed = allowed(kai, bowPose, 'with_item');
  const kaiRiflePoseAllowed = allowed(kai, riflePose, 'with_item');
  const kaiDualBladesPoseAllowed = allowed(kai, dualPose, 'with_item');

  const rosalindRiflePoseAllowed = allowed(rosalind, riflePose, 'with_item');
  const rosalindGunPoseAllowed = allowed(rosalind, gunPose, 'with_item');
  const rosalindBowPoseAllowed = allowed(rosalind, bowPose, 'with_item');
  const rosalindDualPoseAllowed = allowed(rosalind, dualPose, 'with_item');

  const mikaIdolPoseAllowed = allowed(mika, idolPose, 'with_item');
  const mikaWeaponPoseAllowed = allowed(mika, dualPose, 'with_item');

  const brockNoItem = build(brock, dualPose, 'no_item');
  const hemlockPrompt = build(hemlock, toolPose, 'with_item');
  const hemlockCupPoseAllowed = allowed(hemlock, cupPose, 'with_item');

  const sampleNames = ['Gaela Cross', 'Artemis', 'Kai Valentino', 'Rosalind Sniper', 'Mika Sparkbeat', 'Brock Titan', 'Professor Hemlock'];
  const auditRows = allCharacters.filter(c => sampleNames.includes(c.n)).map(c => {
    const schema = characterSchema(c) || {};
    const mode = schemaHasToggleItem(c) ? 'with_item' : 'no_item';
    setMode(mode);
    const before = activePoseLibrary().length;
    const after = compatiblePosesFor(c).length;
    const itemHidden = countPoseItemConflictsFor(c);
    return {
      id: c.id,
      name: c.n,
      itemFamily: (schema.personalItem && schema.personalItem.itemFamily) || c.itemFamily || 'none',
      mode,
      before,
      after,
      itemHidden
    };
  });
  const audit = {
    characterCount: auditRows.length,
    poseCount: activePoseLibrary().length,
    minAfter: Math.min(...auditRows.map(row => row.after)),
    maxHidden: Math.max(...auditRows.map(row => row.itemHidden)),
    totalHiddenByItemGuard: auditRows.reduce((sum, row) => sum + row.itemHidden, 0),
    samples: auditRows.map(row => ({ name: row.name, itemFamily: row.itemFamily, mode: row.mode, before: row.before, after: row.after, itemHidden: row.itemHidden }))
  };

  assert('schema character count matches integrated V3', charactersReworkedFinalV2.length === charactersReworkedFinalV3.length);
  assert('active web character count matches schema', allCharacters.length === charactersReworkedFinalV2.length);
  assert('Rafe remains male', findSchema('Rafe').gender === 'male');
  assert('dual blade gesture is detected', detectPoseItemGesture(dualPose).includes('dual_blades'));

  assert('Gaela item family is large_weapon', gaelaSchema.personalItem.itemFamily === 'large_weapon');
  assert('Gaela compatible pose prompts exclude dual blades', !gaelaCompatiblePosePrompts.some(p => dualBladeRe.test(p)));
  assert('Gaela fallback/sanitized positive keeps cross-shaped greatsword', /cross-shaped greatsword/i.test(gaelaPromptPositive));
  assert('Gaela fallback/sanitized positive excludes dual blade wording', !dualBladeRe.test(gaelaPromptPositive));
  assert('Gaela negative suppresses extra or duplicate weapons', /extra weapon|duplicate weapon/i.test(gaelaNegative));

  assert('Artemis no-item positive has no bow/longbow/arrow/drawing bow', !/\\b(?:bow|longbow|arrow)\\b|drawing the bow/i.test(artemisNoItem.positive));
  assert('Artemis with-item bow pose is allowed', artemisBowPoseAllowed === true);
  assert('Artemis with-item gun pose is blocked', artemisGunPoseAllowed === false);
  assert('Artemis with-item rifle pose is blocked', artemisRiflePoseAllowed === false);
  assert('Artemis with-item dual blades pose is blocked', artemisDualPoseAllowed === false);

  assert('Kai gun pose is allowed', kaiGunPoseAllowed === true);
  assert('Kai bow pose is blocked', kaiBowPoseAllowed === false);
  assert('Kai rifle pose is blocked', kaiRiflePoseAllowed === false);
  assert('Kai dual blades pose is blocked', kaiDualBladesPoseAllowed === false);

  assert('Rosalind rifle pose is allowed', rosalindRiflePoseAllowed === true);
  assert('Rosalind handgun pose is blocked', rosalindGunPoseAllowed === false);
  assert('Rosalind bow pose is blocked', rosalindBowPoseAllowed === false);
  assert('Rosalind dual blades pose is blocked', rosalindDualPoseAllowed === false);

  assert('Mika matching idol/lifestyle pose is allowed', mikaIdolPoseAllowed === true);
  assert('Mika weapon pose is blocked', mikaWeaponPoseAllowed === false);

  assert('Brock no-item prompt avoids legacy No handheld wording', !/with No handheld|No handheld prompt/i.test(brockNoItem.positive));
  assert('Brock no-item prompt avoids invisible weapon gestures', !/dual blades|holding each blade|bow|longbow|arrow|pistol|handgun|rifle/i.test(brockNoItem.positive));

  assert('Professor Hemlock keeps syringe', /syringe/i.test(hemlockPrompt.positive));
  assert('Professor Hemlock positive has no cup pose', !/teacup|saucer|cup pose/i.test(hemlockPrompt.positive));
  assert('Professor Hemlock cup pose is blocked', hemlockCupPoseAllowed === false);

  assert('audit covers the named regression samples', auditRows.length === sampleNames.length);
  assert('every named regression sample keeps at least one compatible pose', audit.minAfter > 0);

  return JSON.stringify({
    assertions,
    audit,
    examples: {
      gaelaDualPoseTitle: dualPose.title,
      gaelaPositive: gaelaPromptPositive,
      gaelaNegative,
      artemisNoItemPositive: artemisNoItem.positive,
      hemlockPositive: hemlockPrompt.positive
    }
  });
})()
`, sandbox, { filename: 'v11_1_1_pose_item_conflict_smoke_runner.js' }));

const failures = result.assertions.filter(row => !row.pass);

console.log('V11.1.1 pose-item conflict smoke test');
console.log('');
console.log(`Audit: ${result.audit.characterCount} characters, ${result.audit.poseCount} poses, min compatible poses ${result.audit.minAfter}, max item-hidden poses ${result.audit.maxHidden}, total item-hidden rows ${result.audit.totalHiddenByItemGuard}`);
console.log('');
console.log('| Character | Family | Mode | Before | After | Hidden by item guard |');
console.log('| --- | --- | --- | ---: | ---: | ---: |');
result.audit.samples.forEach(row => {
  console.log(`| ${row.name} | ${row.itemFamily} | ${row.mode} | ${row.before} | ${row.after} | ${row.itemHidden} |`);
});
console.log('');
result.assertions.forEach(row => {
  console.log(`${row.pass ? 'PASS' : 'FAIL'} ${row.name}`);
});

if (failures.length) {
  process.exitCode = 1;
}
