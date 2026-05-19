const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const html = read('index.html');
const assertions = [];

function assert(name, condition) {
  assertions.push({ name, pass: Boolean(condition) });
}

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
  console,
  window: {
    scrollY: 0,
    scrollTo() {},
    matchMedia() { return { matches: false }; }
  },
  document,
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
sandbox.window.window = sandbox.window;
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
  vm.runInContext(read(file), sandbox, { filename: file });
});

const result = JSON.parse(vm.runInContext(`
(function () {
  function rowsForFaction(key) {
    state.faction = key;
    state.gender = 'all';
    state.role = 'all';
    state.searchChar = '';
    return filteredCharacters();
  }
  function rowsForSearch(query) {
    state.faction = 'all';
    state.gender = 'all';
    state.role = 'all';
    state.searchChar = query;
    return filteredCharacters();
  }
  renderFilters();
  const factionOptions = document.getElementById('factionFilter').innerHTML;
  const factionLabels = [...factionOptions.matchAll(/<option[^>]*>(.*?)<\\/option>/g)].map(match => match[1]);
  const firstCharacter = allActiveCharacters()[0];
  selectCharacter(firstCharacter.id);
  const firstPose = compatiblePosesFor(selectedChar())[0];
  state.selectedPoseId = firstPose && firstPose.id;
  const prompt = buildPrompts(selectedChar(), selectedPose(), activeStyles[0]);
  return JSON.stringify({
    dataCount: cU1.length + cU2.length,
    activeSourceCount: characterSchemaList().length,
    activeCount: allActiveCharacters().length,
    cU1Count: cU1.length,
    cU2Count: cU2.length,
    factionCount: allFactions().length,
    factionOptions,
    hasAllOption: /<option value="all"[^>]*>/.test(factionOptions),
    hasEmojiInOptions: /[\\u{1F300}-\\u{1FAFF}\\u2600-\\u27BF]/u.test(factionLabels.join('\\n')),
    hasEnglishFactionInLabels: /First Dawn|Arcadia|Guardians|Eden|Eclipse|Velvet|Academy|Court|Covenant|Labyrinth|Trench|Chinese|Arthurian|Aztec|Hindu|Mesopotamian|Celtic/i.test(factionLabels.join('\\n')),
    hasMojibakeInLabels: /เธ|เน€|๏ฟฝ|�/.test(factionLabels.join('\\n')),
    u1_1: rowsForFaction('u1_1').length,
    u1_2: rowsForFaction('u1_2').length,
    u2_7: rowsForFaction('u2_7').length,
    u2_20: rowsForFaction('u2_20').length,
    u2_22: rowsForFaction('u2_22').length,
    f23: rowsForFaction('f23').length,
    f24: rowsForFaction('f24').length,
    f25: rowsForFaction('f25').length,
    valkyrieVisible: allFactions().some(f => f.id === 'f23' && f.count > 0),
    egyptVisible: allFactions().some(f => f.id === 'f24' && f.count > 0),
    kamiVisible: allFactions().some(f => f.id === 'f25' && f.count > 0),
    futureNames: allFactions().filter(f => f.isFuture).map(f => f.name),
    searchOriginalFaction: rowsForSearch(originalFactionName(2, 20)).length,
    searchThaiFaction: rowsForSearch(getDisplayFactionNameTH('u2_20')).length,
    selectedStep: state.step,
    selectedHasPoseCount: compatiblePosesFor(selectedChar()).length > 0,
    promptWorks: Boolean(prompt.positive && prompt.negative),
    firstFactionKeys: allFactions().slice(0, 3).map(f => f.id),
    lastFactionKeys: allFactions().slice(-3).map(f => f.id)
  });
})()
`, sandbox));

assert('HTML no longer contains universe selector controls', !/data-action="set-universe"|aria-label="Universe"|uBtn1|uBtn2/.test(html));
assert('visible character count uses active runtime source', result.activeCount === result.activeSourceCount && result.activeCount > result.dataCount);
assert('unified list includes cU1 and cU2', result.cU1Count === 71 && result.cU2Count === 179);
assert('faction filter includes all option', result.hasAllOption);
assert('faction filter labels have no emoji', !result.hasEmojiInOptions);
assert('faction filter labels hide English faction names', !result.hasEnglishFactionInLabels);
assert('faction filter labels have no mojibake', !result.hasMojibakeInLabels);
assert('faction filters are source ordered', result.firstFactionKeys.join(',') === 'u1_1,u1_2,u1_3' && result.lastFactionKeys.join(',') === 'f23,f24,f25');
assert('u1_1 filter shows 6 characters', result.u1_1 === 6);
assert('u1_2 filter shows 3 characters', result.u1_2 === 3);
assert('u2_7 filter shows 7 characters', result.u2_7 === 7);
assert('u2_20 filter shows 22 characters', result.u2_20 === 22);
assert('u2_22 filter shows 16 characters', result.u2_22 === 16);
assert('Valkyrie modular faction appears when populated', result.valkyrieVisible && result.f23 === 100);
assert('Egypt modular faction appears when populated', result.egyptVisible && result.f24 === 100);
assert('Kami modular faction appears when populated', result.kamiVisible && result.f25 === 150);
assert('future factions stay hidden from active filter without disabled option support', result.futureNames.length === 0);
assert('search finds original faction name', result.searchOriginalFaction === 22);
assert('search finds Thai faction display name', result.searchThaiFaction === 22);
assert('selecting a character moves to Step 2', result.selectedStep === 2);
assert('selected character has compatible poses', result.selectedHasPoseCount);
assert('prompt generation still works', result.promptWorks);

const failures = assertions.filter(row => !row.pass);
console.log('Character selection unified Thai faction UI smoke test');
console.log('');
console.log(JSON.stringify(result, null, 2));
console.log('');
assertions.forEach(row => console.log(`${row.pass ? 'PASS' : 'FAIL'} ${row.name}`));

if (failures.length) {
  process.exitCode = 1;
}
