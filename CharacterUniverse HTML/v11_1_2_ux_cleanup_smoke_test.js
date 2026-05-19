const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = __dirname;
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const html = read('index.html');
const css = read('styles.css');
const app = read('app.js');
const assertions = [];

function assert(name, condition) {
  assertions.push({ name, pass: Boolean(condition) });
}

assert('index has no inline onclick handlers', !/\sonclick\s*=/.test(html));
assert('index has no inline onchange handlers', !/\sonchange\s*=/.test(html));
assert('index has no inline oninput handlers', !/\soninput\s*=/.test(html));
assert('static controls use data-action', /data-action="go-step"/.test(html) && /data-action="copy-positive"/.test(html));
assert('desktop floating copy panel exists', /id="desktopFloatingCopyPanel"/.test(html));
assert('floating collapsed button exists', /id="floatingCopyCollapsedButton"/.test(html));
assert('mobile sticky copy bar remains', /id="mobileCopyBar"/.test(html));

assert('static binding is idempotent', /let\s+staticControlsBound\s*=\s*false/.test(app) && /if\s*\(\s*staticControlsBound\s*\)\s*return/.test(app));
assert('single delegated document click binding', (app.match(/document\.addEventListener\('click'/g) || []).length === 1);
assert('click delegation handles step and copy actions', /function\s+handleStaticControlClick/.test(app) && /case 'go-step'/.test(app) && /case 'copy-both'/.test(app));
assert('step access guard exists', /function\s+canAccessStep/.test(app) && /function\s+updateStepPills/.test(app));
assert('floating copy panel updater exists', /function\s+updateFloatingCopyPanel/.test(app));
assert('copy functions centralize through copyPrompt', /function\s+copyPositivePrompt/.test(app) && /copyPrompt\('positive'/.test(app));
assert('debug jargon is gated behind full debug', /isFullDebugMode\(\)\s*\?\s*`[^`]*item-guard hidden/.test(app) && /isFullDebugMode\(\)\s*\?\s*'Recommended/.test(app));

assert('desktop floating panel is desktop-only', /@media\(max-width:1024px\)[\s\S]*desktop-floating-copy-panel/.test(css));
assert('desktop duplicate copy panels are hidden', /@media\(min-width:1025px\)[\s\S]*#step2QuickCopy[\s\S]*#step3 \.prompt-copy-panel[\s\S]*#step3 \.copy-actions/.test(css));
assert('step disabled visual state exists', /\.step-pill\.is-disabled/.test(css) && /cursor:not-allowed/.test(css));

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
  vm.runInContext(read(file), sandbox, { filename: file });
});

const counts = vm.runInContext(`JSON.stringify({
  characters: allActiveCharacters().length,
  dataCharacters: cU1.length + cU2.length,
  activeSourceCharacters: characterSchemaList().length,
  poses: activePoseLibrary().length,
  hasCopyPositivePrompt: typeof copyPositivePrompt === 'function',
  hasUpdateStepPills: typeof updateStepPills === 'function',
  hasUpdateFloatingCopyPanel: typeof updateFloatingCopyPanel === 'function'
})`, sandbox);
const parsedCounts = JSON.parse(counts);
assert('active character count matches runtime active source', parsedCounts.characters === parsedCounts.activeSourceCharacters && parsedCounts.characters > parsedCounts.dataCharacters);
assert('pose library remains available', parsedCounts.poses > 0);
assert('central functions are available in VM', parsedCounts.hasCopyPositivePrompt && parsedCounts.hasUpdateStepPills && parsedCounts.hasUpdateFloatingCopyPanel);

const failures = assertions.filter(row => !row.pass);
console.log('V11.1.2 UX cleanup smoke test');
console.log('');
console.log(`Audit: ${parsedCounts.characters} characters, ${parsedCounts.poses} poses`);
console.log('');
assertions.forEach(row => {
  console.log(`${row.pass ? 'PASS' : 'FAIL'} ${row.name}`);
});

if (failures.length) {
  process.exitCode = 1;
}
