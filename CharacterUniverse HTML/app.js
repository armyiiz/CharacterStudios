const V9_STORAGE_KEY = 'characterPromptStudio_v12';
const V9_HISTORY_KEY = 'characterPromptStudio_v12_prompt_history';
const UNIVERSAL_CATEGORIES = new Set(['standing', 'closeup_bust', 'portrait']);
const NO_ITEM_SHOWCASE_CATEGORIES = new Set(['standing','closeup_bust','sitting','leaning','over_shoulder','soft_motion','thigh_knee_up','glamour','camera_driven_glamour']);
const ITEM_RISK_TAGS = new Set(['ranged_weapon','aiming_weapon','large_weapon','large_ritual_item','large_tool_item','oversized_prop','oversized_item','segmented_weapon','dual_item','weapon_or_long_item','large_item','broken_weapon','energy_blade','shield_combo','hybrid_item','hybrid_telescope_staff']);
const POSE_UI_CATEGORY_ORDER = ['all','standing','closeup_bust','thigh_knee_up','sitting','leaning','over_shoulder','soft_motion','camera_driven_glamour','combat','ranged_weapon','long_item','male_neutral_weapon','glamour'];
const RECOMMENDED_LIMIT = 12;
const CHARACTER_PAGE_SIZE = 36;
const POSE_PAGE_SIZE = 48;
const COMPACT_STYLE_PROMPT = 'Masterpiece, best quality, semi-realistic anime illustration, Korean webtoon style, otome game character card art, polished digital painting, elegant detailed face, glossy eyes, smooth voluminous hair, clean readable design, cinematic dark luxury atmosphere, dramatic moody lighting, shallow depth of field.';
const COMPACT_STYLE_PROMPTS = {
  dark_luxury: COMPACT_STYLE_PROMPT,
  cinematic: 'Masterpiece, best quality, semi-realistic anime illustration, polished digital painting, elegant detailed face, glossy eyes, smooth voluminous hair, clean readable design, cinematic daylight, vivid colors, atmospheric depth of field.',
  pastel: 'Masterpiece, best quality, semi-realistic anime illustration, soft painterly rendering, elegant detailed face, glossy eyes, smooth voluminous hair, clean readable design, gentle pastel colors, dreamy atmosphere, beautiful lighting.',
  vivid_sky: 'Masterpiece, best quality, cinematic anime movie style, polished digital painting, elegant detailed face, glossy eyes, smooth voluminous hair, clean readable design, breathtaking vivid sky, clear bright lighting, vibrant blue tones.'
};
const DEFAULT_PROMPT_STYLES = [
  {
    id: 'dark_luxury',
    name: 'Dark Luxury',
    icon: '\u{1F319}',
    prompt: COMPACT_STYLE_PROMPT
  },
  {
    id: 'cinematic',
    name: 'Cinematic',
    icon: '\u{1F3AC}',
    prompt: 'Masterpiece, best quality, semi-realistic anime illustration, polished digital painting, elegant detailed face, glossy eyes, smooth voluminous hair, clean readable design, cinematic lighting, atmospheric depth of field.'
  },
  {
    id: 'pastel',
    name: 'Pastel Dream',
    icon: '\u{1F338}',
    prompt: COMPACT_STYLE_PROMPTS.pastel
  },
  {
    id: 'vivid_sky',
    name: 'Vivid Sky',
    icon: '\u2601\uFE0F',
    prompt: COMPACT_STYLE_PROMPTS.vivid_sky
  }
];
const activeStyles =
  (typeof styles !== 'undefined' && Array.isArray(styles) && styles.length)
    ? styles
    : ((typeof window !== 'undefined' && Array.isArray(window.styles) && window.styles.length)
      ? window.styles
      : DEFAULT_PROMPT_STYLES);
const PROMPT_MODES = new Set(['compact', 'full_debug']);
let characterVisibleCount = CHARACTER_PAGE_SIZE;
let poseVisibleCount = POSE_PAGE_SIZE;
let renderTimer = null;
const perfCache = { compatible: new Map(), recommended: new Map(), collection: new Map() };
function clearPoseCaches() { perfCache.compatible.clear(); perfCache.recommended.clear(); perfCache.collection.clear(); }
function resetCharacterPaging() { characterVisibleCount = CHARACTER_PAGE_SIZE; }
function resetPosePaging() { poseVisibleCount = POSE_PAGE_SIZE; }
function debounce(fn, delay = 180) { let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), delay); }; }
function scheduleRender() { clearTimeout(renderTimer); renderTimer = setTimeout(() => render(), 0); }
function poseCacheKey(c, kind) { return `${kind}|${c && c.id}|${state.itemMode}|${activePoseLibrary().length}`; }
const BASE_NEGATIVE = 'lowres, bad anatomy, bad hands, extra fingers, fused fingers, missing fingers, deformed limbs, extra limbs, cloned face, ugly, poorly drawn, blurry, out of frame, worst quality, low quality, watermark, signature, text';
const SAME_CHARACTER_COMPLEXITY_LOCK_POSITIVE = 'Complexity lock: preserve the same character design and same visual complexity level. Change only the requested pose, framing, or camera angle. Do not upgrade the outfit, do not add extra ornaments, do not add extra armor layers, do not add extra spikes, horns, chains, feathers, roots, ribbons, particles, floating shards, background structures, or decorative effects. Keep details broad, grouped, clean, and readable. Maintain a clear silhouette. Background must stay soft, simple, and secondary. No visual escalation, no detail density increase, no ornate redesign.';
const SAME_CHARACTER_COMPLEXITY_LOCK_NEGATIVE = 'detail escalation, visual escalation, ornate redesign, upgraded outfit, extra ornaments, extra armor layers, excessive decoration, excessive spikes, excessive thorns, excessive chains, excessive feathers, excessive ribbons, excessive roots, too many particles, floating shards, noisy micro-details, dense background, busy background, chaotic silhouette, cluttered costume, overdesigned armor, background merging with hair, item merging with body, unreadable silhouette';
const V12_CAMERA_GLAMOUR_PROMPT_PROFILE = {
  id: 'v12_camera_glamour_curvy_model',
  targetCategories: ['camera_driven_glamour', 'glamour_showcase', 'body_showcase'],
  genderFit: { female: 'recommended', male: 'hidden', other: 'optional', unknown: 'optional' },
  compactNegativeAdditions: ['wrong pose', 'wrong camera angle', 'broken foreshortening', 'distorted perspective', 'impossible spine bend', 'face covered', 'hair covering face', 'body hidden by arms', 'item in hand', 'handheld prop', 'weapon']
};
const POSE_ITEM_GESTURE_KEYWORDS = {
  dual_blades: [
    'dual blades', 'dual swords', 'twin blades', 'twin swords', 'two swords', 'two blades',
    'holding each blade', 'each blade out to the sides', 'blade in each hand', 'dagger in each hand',
    'two daggers', 'dual daggers', 'twin daggers'
  ],
  sword: [
    'sword', 'blade', 'katana', 'rapier', 'estoc', 'longsword', 'shortsword', 'broadsword', 'saber', 'sabre'
  ],
  large_weapon: [
    'greatsword', 'zweihander', 'large weapon', 'colossal weapon', 'massive weapon', 'war hammer',
    'battle hammer', 'hammer', 'axe', 'scythe', 'spear', 'lance', 'halberd', 'polearm', 'harpoon',
    'trident', 'anchor weapon'
  ],
  bow: [
    'bow', 'longbow', 'crossbow', 'arrow', 'drawing the bow', 'bow draw', 'archer', 'aiming an arrow',
    'pulling the string'
  ],
  gun: [
    'gun', 'handgun', 'pistol', 'revolver', 'flintlock', 'dual pistols', 'shooting stance',
    'aiming gun', 'aiming pistol'
  ],
  rifle: [
    'rifle', 'sniper', 'sniper rifle', 'long firearm', 'musket', 'aiming rifle', 'scope'
  ],
  staff: [
    'staff', 'wand', 'rod', 'magic staff', 'holy staff', 'casting staff'
  ],
  book: [
    'book', 'spellbook', 'grimoire', 'tome', 'reading', 'open book', 'prayer book', 'ledger'
  ],
  document: [
    'scroll', 'letter', 'document', 'contract', 'map', 'paper', 'parchment', 'card'
  ],
  cup: [
    'cup', 'teacup', 'saucer', 'mug', 'goblet', 'chalice', 'tray'
  ],
  instrument: [
    'violin', 'cello', 'harp', 'lyre', 'guitar', 'flute', 'piano', 'bell', 'singing',
    'playing instrument', 'playing violin', 'playing harp'
  ],
  tool: [
    'syringe', 'vial', 'medical injector', 'scalpel', 'wrench', 'hammer tool', 'chisel',
    'tool', 'multi-tool', 'compass', 'pen'
  ],
  accessory: [
    'fan', 'umbrella', 'ring', 'charm', 'mask', 'crown', 'pendant', 'necklace'
  ],
  shield: [
    'shield', 'buckler'
  ]
};
const NO_ITEM_BLOCKED_POSE_GESTURES = new Set([
  'dual_blades', 'sword', 'large_weapon', 'bow', 'gun', 'rifle', 'staff', 'book', 'document',
  'cup', 'instrument', 'tool', 'shield'
]);
const COMPATIBLE_POSE_GESTURES_BY_ITEM_FAMILY = {
  none: ['generic', 'portrait', 'glamour', 'standing', 'sitting', 'leaning'],
  sword: ['sword', 'dual_blades', 'generic_weapon', 'glamour_combat'],
  dagger: ['sword', 'dual_blades', 'generic_weapon', 'glamour_combat'],
  large_weapon: ['large_weapon', 'generic_weapon', 'glamour_combat'],
  spear: ['large_weapon', 'staff', 'generic_weapon', 'glamour_combat'],
  trident: ['large_weapon', 'staff', 'generic_weapon', 'glamour_combat'],
  hammer: ['large_weapon', 'generic_weapon', 'glamour_combat'],
  axe: ['large_weapon', 'generic_weapon', 'glamour_combat'],
  bow: ['bow', 'generic_ranged', 'glamour_combat'],
  gun: ['gun', 'generic_ranged', 'glamour_combat'],
  rifle: ['rifle', 'generic_ranged', 'glamour_combat'],
  staff: ['staff', 'generic_ritual', 'mystic', 'ceremonial'],
  wand: ['staff', 'generic_ritual', 'mystic', 'ceremonial'],
  floating_orb: ['generic_ritual', 'mystic', 'ceremonial'],
  book: ['book', 'document', 'tool', 'scholar', 'portrait', 'sitting'],
  scroll: ['document', 'book', 'tool', 'scholar', 'portrait', 'sitting'],
  letter: ['document', 'book', 'tool', 'scholar', 'portrait', 'sitting'],
  tablet: ['document', 'book', 'tool', 'scholar', 'portrait', 'sitting'],
  document: ['document', 'book', 'tool', 'scholar', 'portrait', 'sitting'],
  cup: ['cup', 'daily_item', 'lifestyle', 'sitting', 'portrait'],
  bowl: ['cup', 'daily_item', 'lifestyle', 'sitting', 'portrait'],
  chalice: ['cup', 'daily_item', 'lifestyle', 'sitting', 'portrait'],
  lantern: ['cup', 'daily_item', 'lifestyle', 'standing', 'portrait'],
  lamp: ['cup', 'daily_item', 'lifestyle', 'standing', 'portrait'],
  instrument: ['instrument', 'portrait', 'standing', 'lifestyle'],
  horn: ['instrument', 'portrait', 'standing', 'lifestyle', 'ceremonial'],
  lyre: ['instrument', 'portrait', 'standing', 'lifestyle', 'ceremonial'],
  flute: ['instrument', 'portrait', 'standing', 'lifestyle', 'ceremonial'],
  bell: ['instrument', 'portrait', 'standing', 'lifestyle', 'ceremonial'],
  microphone: ['instrument', 'portrait', 'standing', 'lifestyle'],
  baton: ['instrument', 'portrait', 'standing', 'lifestyle'],
  tool: ['tool', 'professional', 'portrait', 'standing'],
  broom: ['tool', 'professional', 'portrait', 'standing'],
  mop: ['tool', 'professional', 'portrait', 'standing'],
  duster: ['tool', 'professional', 'portrait', 'standing'],
  key: ['tool', 'professional', 'portrait', 'standing', 'daily_item'],
  accessory: ['accessory', 'cup', 'daily_item', 'glamour_showcase', 'portrait', 'standing'],
  fan: ['accessory', 'glamour_showcase', 'portrait', 'standing'],
  mirror: ['accessory', 'glamour_showcase', 'portrait', 'standing'],
  flower: ['accessory', 'glamour_showcase', 'portrait', 'standing', 'daily_item'],
  travel_bag: ['travel', 'lifestyle', 'standing'],
  shield: ['shield', 'generic_weapon', 'glamour_combat'],
  other: ['generic', 'portrait', 'standing', 'glamour_showcase', 'lifestyle', 'daily_item']
};
const POSE_PROMPT_CONFLICT_PATTERNS = [
  /\b(?:wielding|holding|gripping|brandishing)\s+(?:dual|twin|two|paired)?\s*(?:blades|swords|daggers)\b[^.;]*/gi,
  /\b(?:dual blades|dual swords|twin blades|twin swords|two swords|two blades|two daggers|dual daggers|twin daggers)\b/gi,
  /\b(?:holding each blade|each blade out to the sides|blade in each hand|dagger in each hand)\b/gi,
  /\b(?:drawing the bow|bow draw|aiming an arrow|pulling the string|longbow|crossbow|archer|arrow|bow)\b[^.;]*/gi,
  /\b(?:aiming gun|aiming pistol|shooting stance|dual pistols|handgun|pistol|revolver|flintlock|gun)\b[^.;]*/gi,
  /\b(?:aiming rifle|sniper rifle|long firearm|sniper|rifle|musket|scope)\b[^.;]*/gi,
  /\b(?:playing violin|playing harp|playing instrument|violin|cello|harp|lyre|guitar|flute|piano)\b[^.;]*/gi,
  /\b(?:reading|open book|spellbook|grimoire|prayer book|ledger|tome|book)\b[^.;]*/gi,
  /\b(?:teacup|saucer|mug|goblet|chalice|tray|cup)\b[^.;]*/gi
];
let lastPoseCompatibilityNotice = '';


// V11 Character Schema Bridge -------------------------------------------------
// Uses Character Schema Final v3 as the source of truth for prompt assembly,
// identity lock, item/no-item behavior, gender, item family, and pose profile.
function characterSchemaList() {
  if (typeof charactersReworkedFinalV3 !== 'undefined' && Array.isArray(charactersReworkedFinalV3)) return charactersReworkedFinalV3;
  if (typeof window !== 'undefined' && Array.isArray(window.charactersReworkedFinalV3)) return window.charactersReworkedFinalV3;
  if (typeof charactersReworkedFinalV2 !== 'undefined' && Array.isArray(charactersReworkedFinalV2)) return charactersReworkedFinalV2;
  if (typeof window !== 'undefined' && Array.isArray(window.charactersReworkedFinalV2)) return window.charactersReworkedFinalV2;
  return [];
}
const characterSchemaCache = new Map();
function characterSchema(c) {
  if (!c) return null;
  if (!characterSchemaCache.size) {
    characterSchemaList().forEach(ch => characterSchemaCache.set(String(ch.id), ch));
  }
  return characterSchemaCache.get(String(c.id)) || null;
}
function schemaCore(c) { return (characterSchema(c) && characterSchema(c).characterCore) || {}; }
function schemaItem(c) { return (characterSchema(c) && characterSchema(c).personalItem) || {}; }
function schemaProfile(c) { return (characterSchema(c) && characterSchema(c).promptProfile) || {}; }
function schemaGender(c) { return (characterSchema(c) && characterSchema(c).gender) || c.gender || ''; }
function schemaPresentationMode(c) { return (characterSchema(c) && characterSchema(c).presentationMode) || c.presentationMode || ''; }
function schemaItemRole(c) { return (schemaItem(c).itemRole) || c.itemRole || 'none'; }
function schemaItemFamily(c) { return (schemaItem(c).itemFamily) || ''; }
function schemaTags(c) { return (characterSchema(c) && Array.isArray(characterSchema(c).tags)) ? characterSchema(c).tags : []; }
function schemaIdentityLock(c) { return Array.isArray(schemaCore(c).identityLock) ? schemaCore(c).identityLock : []; }
function schemaHasToggleItem(c) {
  const item = schemaItem(c);
  return !!(item && item.itemRole && item.itemRole !== 'none' && item.itemFamily !== 'none' && (item.name || item.description || item.withItemPrompt));
}
function schemaMainItemName(c) {
  const item = schemaItem(c);
  return item.name || item.description || c.mainItem || c.visualAnchor || '';
}
function schemaItemPrompt(c) {
  const item = schemaItem(c);
  return item.withItemPrompt || item.description || item.name || c.mainItem || c.visualAnchor || '';
}
function schemaItemGuard(c) {
  const item = schemaItem(c);
  return item.itemGuard || 'Keep the item readable and separated from the face, hands, body, clothing, and effects.';
}
function schemaRiskTags(c) {
  const tags = new Set([...(c && c.riskTags || []), ...schemaTags(c)]);
  const fam = schemaItemFamily(c);
  const role = schemaItemRole(c);
  if (['bow','gun','rifle'].includes(fam)) tags.add('ranged_weapon');
  if (['large_weapon','shield','oversized_prop'].includes(fam)) tags.add('large_weapon');
  if (['staff'].includes(fam) && role === 'ritual_item') tags.add('large_ritual_item');
  if (['tool'].includes(fam) && role === 'tool_item') tags.add('tool_item');
  if (role === 'instrument_item' || fam === 'instrument') tags.add('instrument_item');
  if (role === 'document_item' || ['book','document'].includes(fam)) tags.add('document_item');
  return [...tags].filter(Boolean);
}
function schemaCorePrompt(c, suppressItem = false) {
  const core = schemaCore(c);
  const pieces = [
    (characterSchema(c) && characterSchema(c).name) || c.n,
    core.face,
    core.hair,
    core.outfit,
    core.body,
    core.aura,
    core.extra
  ].map(piece => suppressItem ? stripItemTermsFromSuppressedText(piece, c) : piece).filter(Boolean);
  return dedupe(pieces).join('. ');
}
function schemaIdentityPrompt(c, suppressItem = false) {
  const locks = schemaIdentityLock(c);
  const cleanLocks = suppressItem ? locks.map(lock => stripItemTermsFromSuppressedText(lock, c)).filter(Boolean) : locks;
  return cleanLocks.length ? `Identity Lock: preserve exactly these character traits across with-item and no-item modes: ${cleanLocks.join('; ')}. Removing the item must not redesign hairstyle, hair length, hair color, outfit, armor, face, body silhouette, aura, or species traits.` : '';
}

const state = {
  step: 1,
  universe: 1,
  faction: 'all',
  gender: 'all',
  role: 'all',
  searchChar: '',
  selectedCharId: null,
  selectedPoseId: null,
  poseView: 'recommended',
  poseCategory: 'all',
  searchPose: '',
  itemMode: 'with_item',
  styleId: 'dark_luxury',
  promptMode: 'compact',
  promptTab: 'positive',
  floatingCopyCollapsed: false,
};

let history = [];
let staticControlsBound = false;

function safeJsonParse(raw, fallback) {
  try { return raw ? JSON.parse(raw) : fallback; } catch { return fallback; }
}
function loadState() {
  try {
    Object.keys(localStorage).forEach(key => {
      if (/^arcadia_v9_|^arcadia_v10_/.test(key) && key !== V9_STORAGE_KEY && key !== V9_HISTORY_KEY && key !== 'arcadia_v9_favorite_poses') {
        localStorage.removeItem(key);
      }
    });
  } catch {}
  Object.assign(state, safeJsonParse(localStorage.getItem(V9_STORAGE_KEY), {}));
  state.floatingCopyCollapsed = Boolean(state.floatingCopyCollapsed);
  history = safeJsonParse(localStorage.getItem(V9_HISTORY_KEY), []).slice(0, 10);
}
function saveState() {
  try { localStorage.setItem(V9_STORAGE_KEY, JSON.stringify(state)); } catch {}
}
function saveHistory() {
  try { localStorage.setItem(V9_HISTORY_KEY, JSON.stringify(history.slice(0, 10))); } catch {}
}

function scrollToStep(step, behavior = 'smooth') {
  const target = document.getElementById(`step${step}`);
  if (!target) return;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const stickyOffset = window.matchMedia('(max-width: 900px)').matches ? 86 : 104;
      const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - stickyOffset);
      window.scrollTo({ top, behavior });
    });
  });
}
function safeScrollToStep(step) {
  try {
    scrollToStep(step);
  } catch (err) {
    if (typeof console !== 'undefined') console.warn('[Step Scroll] Failed, continuing without scroll:', err);
    const target = document.getElementById(`step${step}`);
    if (target && target.scrollIntoView) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
let activeCharacterViewCache = null;
function characterViewText(parts) {
  return parts.filter(Boolean).map(part => String(part).trim()).filter(Boolean).join('. ');
}
function schemaCharacterPromptPreview(ch) {
  const core = ch.characterCore || {};
  return characterViewText([
    ch.displayName || ch.name,
    core.face,
    core.hair,
    core.outfit,
    core.body,
    core.aura,
    core.extra
  ]);
}
const factionDisplayNameTH = {};
const reservedFutureFactions = [];

Object.assign(factionDisplayNameTH, {
  u1_1: "ผู้พิทักษ์แห่งเอเดน",
  u1_2: "ฝ่ายต่อต้านแห่งเอเดน",
  u1_3: "เก้าผู้บัญชาการเงา",
  u1_4: "หกกัปตันรุ่งอรุณ",
  u1_5: "กลุ่มรุ่งอรุณสุดท้าย",
  u1_6: "แปดธิดาแห่งดาบ",
  u1_7: "เก้าอวตารมังกรโบราณ",
  u1_8: "หกกัปตันแห่งหายนะ",
  u1_9: "สภาหอนาฬิกาดารา",
  u1_10: "ผู้คุมกฎกุหลาบเลือด",
  u1_11: "คณะอุปรากรมายา",
  u2_1: "ผู้เดินทางข้ามมิติ",
  u2_2: "ภาคีดาบเงิน",
  u2_3: "เผ่าจันทราคราม",
  u2_4: "กิลด์กรงเล็บดำ",
  u2_5: "จักรวรรดิเหล็กสนิม",
  u2_6: "วิหารดอกบัวเลือด",
  u2_7: "สมาพันธ์มังกร",
  u2_8: "คาราวานหมื่นดาว",
  u2_9: "หอคอยกลับหัว",
  u2_10: "อสูรเถ้าขาว",
  u2_11: "สภาเทพมารอวสาน",
  u2_12: "ทศผู้เฝ้ามอง",
  u2_13: "ไอดอลแห่งจันทรา",
  u2_14: "คฤหาสน์เมดแห่งพันธสัญญา",
  u2_15: "สถาบันเจ้าหญิงแห่งดวงดาว",
  u2_16: "วังหยกสวรรค์",
  u2_17: "สมาคมร้อยพรายรัตติกาล",
  u2_18: "เขาวงกตกระจกเงา",
  u2_19: "ราชสำนักห้วงอเวจี",
  u2_20: "พันธสัญญาแห่งอาร์คาน่า",
  u2_21: "สมาคมผู้ชี้นำทาง",
  u2_22: "วิหารเทพีอีลิเซียม",
  u2_23: "อาณาจักรวัลคีรีนอร์ส"
});

reservedFutureFactions.splice(0, reservedFutureFactions.length,
  { id: "future_chinese_celestial_pantheon", originalName: "Chinese Celestial Pantheon", name: "(รออัพเดต) ตำหนักฟ้าบรรพกาล" },
  { id: "future_arthurian_holy_grail_order", originalName: "Arthurian Holy Grail Order", name: "(รออัพเดต) ภาคีจอกศักดิ์สิทธิ์" },
  { id: "future_aztec_sun_sacrament", originalName: "Aztec Sun Sacrament", name: "(รออัพเดต) ลัทธิสุริยัน" },
  { id: "future_hindu_deva_shakti_court", originalName: "Hindu Deva Shakti Court", name: "(รออัพเดต) สภาเทพศักติ" },
  { id: "future_mesopotamian_star_empire", originalName: "Mesopotamian Star Empire", name: "(รออัพเดต) จักรวรรดิดารา" },
  { id: "future_celtic_wild_sovereigns", originalName: "Celtic Wild Sovereigns", name: "(รออัพเดต) ดินแดนราชันย์แห่งพงไพร" }
);

function getDisplayFactionKey(character, sourceUniverse = character && character.sourceUniverse) {
  const universe = Number(sourceUniverse || character && character.universe) || 2;
  const factionId = Number(character && character.f) || 0;
  return `u${universe}_${factionId}`;
}
function getDisplayFactionNameTH(displayFactionKey) {
  return factionDisplayNameTH[displayFactionKey] || '';
}
Object.assign(factionDisplayNameTH, {
  f22: "วิหารเทพจุติ",
  f23: "อาณาจักรวัลคีรีนอร์ส",
  f24: "นครสุสานสุริยา",
  f25: "ศาลเจ้าเทวะสวรรค์"
});

function legacyCharacterRows() {
  return [
    ...cU1.map(c => ({ row: c, sourceUniverse: 1 })),
    ...cU2.map(c => ({ row: c, sourceUniverse: 2 }))
  ];
}
function legacyCharacterLookup() {
  const lookup = new Map();
  legacyCharacterRows().forEach(entry => lookup.set(String(entry.row.id), entry));
  return lookup;
}
function activeCharacterSource() {
  const modular = characterSchemaList();
  const legacy = legacyCharacterRows().map(entry => entry.row);
  return Array.isArray(modular) && modular.length > legacy.length ? modular : legacy;
}
function modularFactionById(factionId) {
  return modularCharacterFactions().find(faction => Number(faction.id) === Number(factionId)) || null;
}
function modularFactionId(character) {
  if (!character) return 0;
  if (character.factionId != null) return Number(character.factionId) || 0;
  if (character.f != null && !legacyCharacterLookup().has(String(character.id))) return Number(character.f) || 0;
  return 0;
}
function originalFactionName(sourceUniverse, factionId) {
  const source = Number(sourceUniverse) === 1 ? fU1 : fU2;
  const found = source.find(faction => Number(faction.id) === Number(factionId));
  return (found && found.name) || '';
}
function activeCharacterViews() {
  if (activeCharacterViewCache) return activeCharacterViewCache;
  const legacyLookup = legacyCharacterLookup();
  activeCharacterViewCache = activeCharacterSource().map(row => {
    const legacy = legacyLookup.get(String(row.id));
    const schema = characterSchemaList().find(ch => String(ch.id) === String(row.id)) || row || {};
    const item = schema.personalItem || {};
    const legacyRow = legacy && legacy.row;
    const sourceUniverse = legacy && legacy.sourceUniverse;
    const factionId = legacyRow ? Number(legacyRow.f) || 0 : modularFactionId(schema || row);
    const displayFactionKey = legacyRow ? getDisplayFactionKey(legacyRow, sourceUniverse) : `f${factionId}`;
    const modularFaction = !legacyRow ? modularFactionById(factionId) : null;
    const promptPreview = schema.id ? schemaCharacterPromptPreview(schema) : '';
    return {
      ...(legacyRow || {}),
      ...schema,
      n: (legacyRow && legacyRow.n) || schema.name || schema.displayName || '',
      f: Number(factionId) || 0,
      d: (legacyRow && legacyRow.d) || promptPreview,
      shortPrompt: (legacyRow && legacyRow.shortPrompt) || promptPreview,
      mainItem: (legacyRow && legacyRow.mainItem) || item.name || '',
      itemRole: item.itemRole || (legacyRow && legacyRow.itemRole) || row.itemRole || 'none',
      itemFamily: item.itemFamily || (legacyRow && legacyRow.itemFamily) || row.itemFamily || 'none',
      universe: sourceUniverse || schema.universe || '',
      sourceUniverse: sourceUniverse || null,
      displayFactionKey,
      displayFactionTH: getDisplayFactionNameTH(displayFactionKey),
      originalFactionName: legacyRow ? originalFactionName(sourceUniverse, factionId) : ((modularFaction && modularFaction.name) || schema.faction || row.faction || '')
    };
  });
  return activeCharacterViewCache;
}
function allActiveCharacters() { return activeCharacterViews(); }
function allChars() { return activeCharacterViews(); }
function modularCharacterFactions() {
  if (typeof characterFactions !== 'undefined' && Array.isArray(characterFactions)) return characterFactions;
  if (typeof window !== 'undefined' && Array.isArray(window.characterFactions)) return window.characterFactions;
  return [];
}
function allFactions() {
  const counts = new Map();
  allActiveCharacters().forEach(character => counts.set(character.displayFactionKey, (counts.get(character.displayFactionKey) || 0) + 1));
  const legacyRows = [
    ...fU1.map(faction => ({ sourceUniverse: 1, id: Number(faction.id) })),
    ...fU2.map(faction => ({ sourceUniverse: 2, id: Number(faction.id) }))
  ];
  const activeLegacyRows = legacyRows.map(row => {
    const key = `u${row.sourceUniverse}_${row.id}`;
    return {
      id: key,
      displayFactionKey: key,
      name: getDisplayFactionNameTH(key),
      originalName: originalFactionName(row.sourceUniverse, row.id),
      count: counts.get(key) || 0,
      sourceUniverse: row.sourceUniverse
    };
  }).filter(faction => faction.name && faction.count > 0);
  const activeModularRows = modularCharacterFactions()
    .map(faction => {
      const key = `f${Number(faction.id)}`;
      return {
        id: key,
        displayFactionKey: key,
        name: getDisplayFactionNameTH(key) || faction.thaiName || faction.name,
        originalName: faction.name || '',
        count: counts.get(key) || 0,
        sourceUniverse: 2,
        factionId: Number(faction.id)
      };
    })
    .filter(faction => faction.name && faction.count > 0)
    .sort((a, b) => a.factionId - b.factionId);
  return [...activeLegacyRows, ...activeModularRows];
}
function selectedChar() { return allActiveCharacters().find(c => String(c.id) === String(state.selectedCharId)) || null; }
function selectedPose() { return activePoseLibrary().find(p => String(p.id) === String(state.selectedPoseId)) || null; }
function selectedStyle() { return activeStyles.find(s => s.id === state.styleId) || activeStyles[0]; }
function activePoseLibrary() {
  const cleanCore = typeof poseLibraryV11Clean !== 'undefined' && Array.isArray(poseLibraryV11Clean)
    ? poseLibraryV11Clean
    : (typeof window !== 'undefined' && Array.isArray(window.poseLibraryV11Clean) ? window.poseLibraryV11Clean : null);
  if (cleanCore) {
    const cleanAdditions = [];
    if (typeof postCleanupPoseExpansionFinal79 !== 'undefined' && Array.isArray(postCleanupPoseExpansionFinal79)) cleanAdditions.push(...postCleanupPoseExpansionFinal79);
    if (typeof window !== 'undefined' && Array.isArray(window.postCleanupPoseExpansionFinal79)) cleanAdditions.push(...window.postCleanupPoseExpansionFinal79);
    if (typeof v11x2CameraDrivenGlamourPosePack20 !== 'undefined' && Array.isArray(v11x2CameraDrivenGlamourPosePack20)) cleanAdditions.push(...v11x2CameraDrivenGlamourPosePack20);
    if (typeof window !== 'undefined' && Array.isArray(window.v11x2CameraDrivenGlamourPosePack20)) cleanAdditions.push(...window.v11x2CameraDrivenGlamourPosePack20);
    if (!cleanAdditions.length) return cleanCore;
    const seen = new Set();
    return [...cleanCore, ...cleanAdditions].filter(p => {
      const id = String(p && p.id);
      if (!id || seen.has(id)) return false;
      seen.add(id);
      return true;
    });
  }
  const candidates = [];
  if (typeof poseLibraryV9 !== 'undefined' && Array.isArray(poseLibraryV9)) candidates.push(poseLibraryV9);
  if (typeof window !== 'undefined' && Array.isArray(window.poseLibraryV9)) candidates.push(window.poseLibraryV9);
  if (typeof poseLibrary !== 'undefined' && Array.isArray(poseLibrary)) candidates.push(poseLibrary);
  if (typeof window !== 'undefined' && Array.isArray(window.poseLibrary)) candidates.push(window.poseLibrary);
  const base = candidates.sort((a, b) => b.length - a.length)[0] || [];
  const additions = [];
  if (typeof v1115AdvancedWeaponActionPoses !== 'undefined' && Array.isArray(v1115AdvancedWeaponActionPoses)) additions.push(...v1115AdvancedWeaponActionPoses);
  if (typeof window !== 'undefined' && Array.isArray(window.v1115AdvancedWeaponActionPoses)) additions.push(...window.v1115AdvancedWeaponActionPoses);
  if (typeof v11xCustomBodyShowcasePoses !== 'undefined' && Array.isArray(v11xCustomBodyShowcasePoses)) additions.push(...v11xCustomBodyShowcasePoses);
  if (typeof window !== 'undefined' && Array.isArray(window.v11xCustomBodyShowcasePoses)) additions.push(...window.v11xCustomBodyShowcasePoses);
  if (typeof v1117WeaponFamilyPoseCompatibilityPoses !== 'undefined' && Array.isArray(v1117WeaponFamilyPoseCompatibilityPoses)) additions.push(...v1117WeaponFamilyPoseCompatibilityPoses);
  if (typeof window !== 'undefined' && Array.isArray(window.v1117WeaponFamilyPoseCompatibilityPoses)) additions.push(...window.v1117WeaponFamilyPoseCompatibilityPoses);
  if (!additions.length) return base;
  const seen = new Set();
  return [...base, ...additions].filter(p => {
    const id = String(p && p.id);
    if (!id || seen.has(id)) return false;
    seen.add(id);
    return true;
  });
}
const NO_ITEM_BLOCKED_ACTIONS = new Set(['active_attack', 'aim', 'block_guard']);
const ACTIVE_ATTACK_POSE_ACTIONS = new Set(['active_attack', 'aim']);
const BLOCK_GUARD_POSE_ACTIONS = new Set(['block_guard']);
const BATTLE_PRESENCE_POSE_ACTIONS = new Set(['battle_presence', 'combat_ready']);
const NON_WEAPON_ATTACK_LOCK_ROLES = new Set([
  'instrument_item',
  'document_item',
  'daily_item',
  'accessory_item',
  'prop',
  'none'
]);
const RITUAL_TOOL_ATTACK_LOCK_ROLES = new Set(['ritual_item', 'tool_item']);
const POSE_ACTION_TYPE_ALIASES = {
  presenting: 'present_item',
  holding: 'hold_item',
  magical_activation: 'ritual_cast',
  combat_ready: 'battle_presence',
  active_attack: 'active_attack',
  optional: 'optional',
  none: 'none'
};
const poseTaxonomyCache = new WeakMap();
const poseActiveAttackCache = new WeakMap();
const poseBlockGuardCache = new WeakMap();
const poseBattlePresenceCache = new WeakMap();
function text(v) { return (v || '').toString(); }
function normalize(v) { return text(v).toLowerCase(); }
function dedupe(arr) { return [...new Set(arr.filter(Boolean).map(x => text(x).trim()).filter(Boolean))]; }
function normalizeSpaces(v) {
  return text(v).replace(/\s+/g, ' ').replace(/\s+([,.;:])/g, '$1').trim();
}
function normalizePromptSentence(sentence) {
  return normalizeSpaces(sentence).toLowerCase().replace(/[.!?]+$/g, '');
}
function uniqTextParts(parts) {
  const seen = new Set();
  const out = [];
  parts.flatMap(part => Array.isArray(part) ? part : [part]).forEach(part => {
    const clean = normalizeSpaces(part);
    const key = normalizePromptSentence(clean);
    if (!clean || seen.has(key)) return;
    seen.add(key);
    out.push(clean);
  });
  return out;
}
function compactJoinPromptBlocks(blocks) {
  return uniqTextParts(blocks).join('\n\n').replace(/\n{3,}/g, '\n\n').trim();
}
function uniqCommaTerms(parts) {
  const terms = parts
    .flatMap(part => Array.isArray(part) ? part : text(part).split(','))
    .map(term => normalizeSpaces(term))
    .filter(Boolean);
  return uniqTextParts(terms);
}
function escapeRegExp(value) {
  return text(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function normalizedItemModeForCompatibility(itemMode = state.itemMode) {
  const mode = normalizeSpaces(itemMode).toLowerCase();
  return ['none', 'no_item', 'without_item', 'without', 'off'].includes(mode) ? 'none' : 'with';
}
function characterItemFamilyForCompatibility(c) {
  const raw = schemaItem(c).itemFamily || (c && c.itemFamily) || 'none';
  const family = normalizeSpaces(raw).toLowerCase().replace(/\s+/g, '_');
  return family && family !== 'no_item' ? family : 'none';
}
function characterItemRoleForCompatibility(c) {
  const raw = schemaItem(c).itemRole || (c && c.itemRole) || 'none';
  const role = normalizeSpaces(raw).toLowerCase().replace(/\s+/g, '_');
  return role || 'none';
}
function normalizeWeaponFamilyToken(value) {
  return normalizeSpaces(value).toLowerCase().replace(/[\s-]+/g, '_');
}
function weaponItemBlob(c) {
  const item = schemaItem(c);
  return normalize([
    item.itemFamily,
    item.name,
    item.description,
    item.withItemPrompt,
    item.itemGuard,
    schemaMainItemName(c),
    schemaItemPrompt(c),
    ...(Array.isArray(item.noItemRemove) ? item.noItemRemove : [])
  ].join('\n'));
}
function getWeaponFamily(c) {
  const item = schemaItem(c);
  const rawFamily = normalizeWeaponFamilyToken(item.itemFamily || schemaItemFamily(c));
  const blob = weaponItemBlob(c);
  if (/\b(?:tachi|katana|nodachi|odachi|wakizashi|iaito|japanese sword|moonblade|sun katana|crescent katana)\b/.test(blob)) return 'katana';
  if (/\b(?:greatsword|zweihander|heavy blade|heavy_blade|large weapon|colossal weapon)\b/.test(blob)) return 'large_weapon';
  if (/\b(?:war mallet|mallet|hammer|axe|mace|kanabou|kanabo)\b/.test(blob)) return 'hammer';
  if (/\b(?:spear|polearm|naginata|lance|trident|halberd|harpoon)\b/.test(blob)) return 'spear';
  if (/\b(?:yumi|longbow|crossbow|bow)\b/.test(blob)) return 'bow';
  if (/\b(?:rifle|sniper|long gun|long_gun|musket|launcher)\b/.test(blob)) return 'rifle';
  if (/\b(?:pistol|handgun|revolver|gun|firearm)\b/.test(blob)) return 'gun';
  if (/\b(?:dagger|knife|knives|dirk)\b/.test(blob)) return 'dagger';
  if (/\b(?:staff|wand|rod|cane)\b/.test(blob)) return 'staff';
  if (rawFamily) return rawFamily;
  return 'weapon';
}
function getWeaponSubtype(c) {
  const blob = weaponItemBlob(c);
  if (/\btachi\b/.test(blob)) return 'tachi';
  if (/\bnodachi\b/.test(blob)) return 'nodachi';
  if (/\bodachi\b/.test(blob)) return 'odachi';
  if (/\bwakizashi\b/.test(blob)) return 'wakizashi';
  if (/\bkatana\b|moonblade|sun katana|crescent katana/.test(blob)) return 'katana';
  if (/\byumi\b/.test(blob)) return 'yumi';
  if (/\blongbow\b/.test(blob)) return 'longbow';
  if (/\blong gun\b|long_gun/.test(blob)) return 'long_gun';
  if (/\bgreatsword\b|zweihander/.test(blob)) return 'greatsword';
  if (/\bheavy blade\b|heavy_blade/.test(blob)) return 'heavy_blade';
  if (/\bwar mallet\b|\bmallet\b/.test(blob)) return 'hammer';
  if (/\bnaginata\b/.test(blob)) return 'naginata';
  if (/\btrident\b/.test(blob)) return 'trident';
  if (/\blance\b/.test(blob)) return 'lance';
  if (/\bknife\b|knives/.test(blob)) return 'knife';
  return getWeaponFamily(c);
}
function isKatanaLike(cOrFamily, subtype, itemName = '') {
  const family = typeof cOrFamily === 'string' ? cOrFamily : getWeaponFamily(cOrFamily);
  const sub = subtype || (typeof cOrFamily === 'string' ? '' : getWeaponSubtype(cOrFamily));
  const blob = normalize([family, sub, itemName, typeof cOrFamily === 'string' ? '' : weaponItemBlob(cOrFamily)].join('\n'));
  return /\b(?:katana|tachi|nodachi|odachi|wakizashi|iaito|japanese sword|moonblade|sun katana|crescent katana)\b/.test(blob);
}
function weaponFamilyAliasesFor(family, subtype = '') {
  const tokens = new Set([family, subtype].filter(Boolean).map(normalizeWeaponFamilyToken));
  if (isKatanaLike(family, subtype)) ['katana', 'tachi', 'nodachi', 'odachi', 'wakizashi', 'sword'].forEach(v => tokens.add(v));
  if (family === 'sword') ['sword', 'blade', 'rapier', 'estoc'].forEach(v => tokens.add(v));
  if (family === 'large_weapon') ['large_weapon', 'greatsword', 'heavy_blade'].forEach(v => tokens.add(v));
  if (family === 'hammer') ['hammer', 'axe', 'mace', 'mallet', 'large_weapon'].forEach(v => tokens.add(v));
  if (family === 'spear') ['spear', 'polearm', 'naginata', 'lance', 'trident'].forEach(v => tokens.add(v));
  if (family === 'bow') ['bow', 'longbow', 'yumi'].forEach(v => tokens.add(v));
  if (family === 'rifle') ['rifle', 'long_gun'].forEach(v => tokens.add(v));
  if (family === 'gun') ['gun', 'pistol', 'handgun'].forEach(v => tokens.add(v));
  if (family === 'dagger') ['dagger', 'knife'].forEach(v => tokens.add(v));
  if (family === 'staff') ['staff', 'wand', 'rod'].forEach(v => tokens.add(v));
  return tokens;
}
function normalizedWeaponFamilyList(list) {
  return Array.isArray(list) ? list.map(normalizeWeaponFamilyToken).filter(Boolean) : [];
}
function poseWeaponFamilyKeys(pose) {
  return pose && pose.familySpecificItemPrompts && typeof pose.familySpecificItemPrompts === 'object'
    ? Object.keys(pose.familySpecificItemPrompts).map(normalizeWeaponFamilyToken)
    : [];
}
function normalizedPoseActionType(p) {
  const raw = normalizeSpaces(p && p.itemActionType).toLowerCase().replace(/\s+/g, '_');
  return POSE_ACTION_TYPE_ALIASES[raw] || raw || 'none';
}
function explicitCombatAttackAllowed(c) {
  const profileValue = schemaProfile(c).combatAttackAllowed;
  if (profileValue !== undefined) return profileValue;
  if (c && c.combatAttackAllowed !== undefined) return c.combatAttackAllowed;
  return undefined;
}
function combatAttackAllowedForCharacter(c, itemRole = characterItemRoleForCompatibility(c)) {
  const explicit = explicitCombatAttackAllowed(c);
  if (explicit === true || explicit === false || explicit === 'limited') return explicit;
  if (itemRole === 'weapon') return true;
  if (itemRole === 'ritual_item' || itemRole === 'tool_item') return false;
  return false;
}
function poseTaxonomyBlob(p) {
  if (p && typeof p === 'object' && poseTaxonomyCache.has(p)) return poseTaxonomyCache.get(p);
  const blob = normalize([
    p && p.id,
    p && p.title,
    p && p.titleTH,
    p && p.category,
    p && p.subcategory,
    p && p.uiCategory,
    p && p.itemActionType,
    p && p.prompt,
    ...(Array.isArray(p && p.tags) ? p.tags : []),
    ...(Array.isArray(p && p.collectionTags) ? p.collectionTags : [])
  ].join('\n'));
  if (p && typeof p === 'object') poseTaxonomyCache.set(p, blob);
  return blob;
}
function poseHasActiveAttackLanguage(p) {
  const blob = poseTaxonomyBlob(p)
    .split(/(?<=[.!?])\s+|;\s*/)
    .filter(sentence => !/^\s*(?:no|not|never|avoid|without|do not)\b/.test(sentence))
    .join(' ');
  return /\b(active[_\s-]?attack|melee[_\s-]?attack|weapon[_\s-]?swing|slash|slashing|thrust|thrusting|duel|charging[_\s-]?attack|ranged[_\s-]?attack|bow draw|drawing the bow|shooting stance|aiming (?:a |an |the )?(?:bow|arrow|gun|pistol|rifle|firearm|weapon)|attack(?:ing)? with|swing(?:ing)? (?:as|like|with)|strik(?:e|ing) with)\b/.test(blob);
}
function poseIsBlockGuardPose(p) {
  if (p && typeof p === 'object' && poseBlockGuardCache.has(p)) return poseBlockGuardCache.get(p);
  const action = normalizedPoseActionType(p);
  const result = BLOCK_GUARD_POSE_ACTIONS.has(action) || /\b(block[_\s-]?guard|shield[_\s-]?block|guarding with|blocking with)\b/.test(poseTaxonomyBlob(p));
  if (p && typeof p === 'object') poseBlockGuardCache.set(p, result);
  return result;
}
function poseIsActiveAttackPose(p) {
  if (p && typeof p === 'object' && poseActiveAttackCache.has(p)) return poseActiveAttackCache.get(p);
  const action = normalizedPoseActionType(p);
  let result = false;
  if (ACTIVE_ATTACK_POSE_ACTIONS.has(action)) result = true;
  const uiCat = poseUiCategory(p);
  if (uiCat === 'ranged_weapon') result = true;
  if (!result) result = poseHasActiveAttackLanguage(p);
  if (p && typeof p === 'object') poseActiveAttackCache.set(p, result);
  return result;
}
function poseIsBattlePresencePose(p) {
  if (p && typeof p === 'object' && poseBattlePresenceCache.has(p)) return poseBattlePresenceCache.get(p);
  const action = normalizedPoseActionType(p);
  const result = BATTLE_PRESENCE_POSE_ACTIONS.has(action) || /\b(battle[_\s-]?presence|combat[_\s-]?ready|ceremonial[_\s-]?guardian|divine[_\s-]?herald|royal[_\s-]?guard|non[_\s-]?attack combat presence)\b/.test(poseTaxonomyBlob(p));
  if (p && typeof p === 'object') poseBattlePresenceCache.set(p, result);
  return result;
}
function nonWeaponAttackLockReason(c, p, itemRole) {
  const role = itemRole || characterItemRoleForCompatibility(c);
  const family = characterItemFamilyForCompatibility(c);
  if (role === 'weapon') return '';
  const activeAttack = poseIsActiveAttackPose(p);
  const blockGuard = poseIsBlockGuardPose(p);
  if (!activeAttack && !blockGuard) return '';
  const attackAllowed = combatAttackAllowedForCharacter(c, role);
  if (RITUAL_TOOL_ATTACK_LOCK_ROLES.has(role)) {
    if (blockGuard && (attackAllowed === true || attackAllowed === 'limited') && ['shield','staff','large_weapon'].includes(family)) return '';
    return activeAttack
      ? `${role} blocks active attack poses by default`
      : `${role} blocks guard/block poses unless explicitly combat-compatible`;
  }
  if (NON_WEAPON_ATTACK_LOCK_ROLES.has(role)) {
    return activeAttack
      ? `${role} cannot use active attack / aiming / weapon-swing poses`
      : `${role} cannot use block/guard poses as a weapon or shield`;
  }
  if (role !== 'weapon' && activeAttack) return `${role} is not marked as a weapon for active attack poses`;
  return '';
}
function poseGestureBlob(p) {
  if (!p) return '';
  return normalize([
    p.title,
    p.titleTH,
    p.prompt,
    ...(Array.isArray(p.tags) ? p.tags : []),
    ...(Array.isArray(p.collectionTags) ? p.collectionTags : []),
    p.itemFamily,
    ...(Array.isArray(p.compatibleItemRoles) ? p.compatibleItemRoles : []),
    p.requiresItem === true ? 'requiresItem' : '',
    p.noItemSafe === true ? 'noItemSafe' : ''
  ].join('\n'));
}
function poseGestureKeywordMatches(blob, keyword) {
  const clean = normalizeSpaces(keyword).toLowerCase();
  if (!clean) return false;
  if (clean === 'card') {
    return /\b(?:playing|tarot|business|greeting|magic|spell|oracle)\s+card\b|\bcard\s+(?:held|in hand|spread|fan|deck)\b/i.test(blob);
  }
  if (/\s/.test(clean)) return blob.includes(clean);
  return new RegExp(`(^|[^a-z0-9_])${escapeRegExp(clean)}([^a-z0-9_]|$)`, 'i').test(blob);
}
function detectPoseItemGesture(pose) {
  const blob = poseGestureBlob(pose);
  const detected = new Set();
  Object.entries(POSE_ITEM_GESTURE_KEYWORDS).forEach(([gesture, keywords]) => {
    if (keywords.some(keyword => poseGestureKeywordMatches(blob, keyword))) detected.add(gesture);
  });
  const explicitFamily = normalizeSpaces(pose && pose.itemFamily).toLowerCase().replace(/\s+/g, '_');
  if (explicitFamily && POSE_ITEM_GESTURE_KEYWORDS[explicitFamily]) detected.add(explicitFamily);
  return [...detected];
}
function allowedPoseGesturesForItemFamily(itemFamily) {
  const family = itemFamily && COMPATIBLE_POSE_GESTURES_BY_ITEM_FAMILY[itemFamily] ? itemFamily : (itemFamily === 'none' ? 'none' : 'other');
  return new Set([...(COMPATIBLE_POSE_GESTURES_BY_ITEM_FAMILY[family] || []), 'generic']);
}
function getPoseItemCompatibility(pose, character, itemMode = state.itemMode) {
  if (!pose || !character) return { compatible: true, reason: 'missing pose or character', gestures: [] };
  const mode = normalizedItemModeForCompatibility(itemMode);
  const gestures = detectPoseItemGesture(pose);
  const itemFamily = characterItemFamilyForCompatibility(character);
  const itemRole = mode === 'none' ? 'none' : characterItemRoleForCompatibility(character);

  const attackLockReason = nonWeaponAttackLockReason(character, pose, itemRole);
  if (attackLockReason) {
    return { compatible: false, reason: attackLockReason, gestures, itemFamily, itemRole, itemMode: mode };
  }
  if (mode === 'with' && itemRole === 'weapon' && !isPoseWeaponFamilyCompatible(character, pose)) {
    return { compatible: false, reason: `${getWeaponFamily(character)} is not compatible with this weapon-family pose`, gestures, itemFamily, itemRole, itemMode: mode };
  }
  if (shouldHideWeaponWithItemPose(character, pose, itemMode)) {
    return { compatible: false, reason: 'weapon with-item mode hides pose without family-safe weapon placement', gestures, itemFamily, itemRole, itemMode: mode };
  }

  if (mode === 'none') {
    if (pose.requiresItem === true) {
      return { compatible: false, reason: 'pose requires a handheld item in no-item mode', gestures, itemFamily, itemRole, itemMode: mode };
    }
    const blocked = gestures.filter(gesture => NO_ITEM_BLOCKED_POSE_GESTURES.has(gesture));
    if (blocked.length) {
      return { compatible: false, reason: `no-item mode blocks item gesture: ${blocked.join(', ')}`, gestures, blocked, itemFamily, itemRole, itemMode: mode };
    }
    if (gestures.includes('accessory') && pose.noItemSafe !== true) {
      return { compatible: false, reason: 'accessory pose is not marked noItemSafe', gestures, itemFamily, itemRole, itemMode: mode };
    }
    return { compatible: true, reason: 'no item gesture conflict', gestures, itemFamily, itemRole, itemMode: mode };
  }

  if (itemRole === 'none' || itemFamily === 'none') {
    if (gestures.length) {
      return { compatible: false, reason: `character has no personal item for pose gesture: ${gestures.join(', ')}`, gestures, itemFamily, itemRole, itemMode: mode };
    }
    return { compatible: true, reason: 'generic pose for character without personal item', gestures, itemFamily, itemRole, itemMode: mode };
  }

  const allowed = allowedPoseGesturesForItemFamily(itemFamily);
  const blocked = gestures.filter(gesture => !allowed.has(gesture));
  if (itemFamily === 'large_weapon' && gestures.includes('dual_blades') && !blocked.includes('dual_blades')) {
    blocked.push('dual_blades');
  }
  if (blocked.length) {
    return { compatible: false, reason: `${itemFamily} is not compatible with pose gesture: ${blocked.join(', ')}`, gestures, blocked, itemFamily, itemRole, itemMode: mode };
  }
  return { compatible: true, reason: 'pose gesture matches personal item', gestures, itemFamily, itemRole, itemMode: mode };
}
function isPoseCompatibleWithCharacterItem(pose, character, itemMode = state.itemMode) {
  return getPoseItemCompatibility(pose, character, itemMode).compatible;
}
function getPoseCompatibilityReason(pose, character, itemMode = state.itemMode) {
  return getPoseItemCompatibility(pose, character, itemMode).reason;
}
function itemSafeReplacementPhrase(c, itemMode = state.itemMode) {
  if (normalizedItemModeForCompatibility(itemMode) === 'none') {
    return 'natural item-free pose with relaxed readable hands and no implied handheld prop';
  }
  const family = getWeaponFamily(c);
  if (isKatanaLike(c)) {
    return 'katana-safe pose with one visible hand at the hilt or the scabbard physically attached to the waist';
  }
  if (['large_weapon', 'hammer'].includes(family)) {
    return 'heavy-weapon-safe pose with one or both visible hands supporting the weapon at a grounded contact point';
  }
  if (['bow', 'rifle', 'gun', 'spear', 'dagger'].includes(family)) {
    return `${family}-safe pose with the item physically connected to a visible hand and kept clear of face and torso`;
  }
  return 'generic item-safe pose with readable hands and the personal item physically held, worn, strapped, or supported clear of the face and body silhouette';
}
function sanitizePosePromptForItemConflict(posePrompt, character, itemMode = state.itemMode) {
  let out = text(posePrompt);
  POSE_PROMPT_CONFLICT_PATTERNS.forEach(pattern => {
    out = out.replace(pattern, '');
  });
  out = out
    .replace(/\b(?:holding|wielding|carrying|gripping|brandishing|aiming|drawing|reading|playing|serving)\b[^.;]*(?:[.;]|$)/gi, '')
    .replace(/\s{2,}/g, ' ')
    .replace(/\s+([,.;:])/g, '$1')
    .replace(/,\s*,/g, ',')
    .trim();
  return normalizeSpaces(uniqTextParts([out, itemSafeReplacementPhrase(character, itemMode)]).join(' '));
}
function compatibleFallbackPoseFor(c, itemMode = state.itemMode) {
  const pool = compatiblePosesFor(c);
  const noGesture = p => detectPoseItemGesture(p).length === 0;
  const priority = [
    p => noGesture(p) && isGlamourShowcasePose(p) && poseUiCategory(p) === 'standing',
    p => noGesture(p) && poseUiCategory(p) === 'standing',
    p => noGesture(p) && poseUiCategory(p) === 'closeup_bust',
    p => noGesture(p) && isGlamourShowcasePose(p),
    p => noGesture(p),
    p => isPoseCompatibleWithCharacterItem(p, c, itemMode)
  ];
  for (const predicate of priority) {
    const found = pool.find(predicate);
    if (found) return found;
  }
  return null;
}
function resolvePoseForPrompt(c, p, itemMode = state.itemMode) {
  const compatibility = getPoseItemCompatibility(p, c, itemMode);
  if (compatibility.compatible) return { pose: p, compatibility, usedFallback: false, sanitized: false };
  const fallback = compatibleFallbackPoseFor(c, itemMode);
  if (fallback) {
    if (typeof console !== 'undefined') {
      console.warn('[V11.1.1] Pose reset because of item conflict', { character: c && c.n, pose: p && p.title, reason: compatibility.reason, fallback: fallback.title });
    }
    return { pose: fallback, originalPose: p, compatibility, usedFallback: true, sanitized: false };
  }
  const sanitizedPrompt = sanitizePosePromptForItemConflict(p && p.prompt, c, itemMode);
  const safePose = {
    ...(p || {}),
    title: 'Item-Safe Fallback Pose',
    titleTH: 'Item-Safe Fallback Pose',
    prompt: sanitizedPrompt,
    noItemPrompt: sanitizedPrompt,
    itemActionType: 'item_safe_fallback'
  };
  return { pose: safePose, originalPose: p, compatibility, usedFallback: false, sanitized: true };
}
function countPoseItemConflictsFor(c, itemMode = state.itemMode) {
  return activePoseLibrary().filter(p => !isPoseCompatibleWithCharacterItem(p, c, itemMode)).length;
}
function poseResetNoticeText() {
  return 'Pose reset: the selected pose conflicted with the character personal item, so an item-safe pose was selected.';
}
function needsDetailClutterLimiter(c) {
  if (normalizedItemModeForCompatibility(state.itemMode) === 'none') return false;
  const core = schemaCore(c);
  const blob = normalize([characterItemFamilyForCompatibility(c), core.outfit, core.aura, core.extra, ...schemaIdentityLock(c), ...schemaTags(c)].join('\n'));
  return characterItemFamilyForCompatibility(c) === 'large_weapon' || /\b(?:ornate|gothic|cathedral|armor|chain|chains|halo|heavy|effects?)\b/.test(blob);
}
function detailClutterLimiterBlock(c) {
  return needsDetailClutterLimiter(c)
    ? 'Detail control: keep armor motifs broad and readable; avoid dense micro-ornaments, excessive blade fragments, duplicate weapons, and floating metal clutter.'
    : '';
}
function extraWeaponSuppressionTerms(c, p) {
  if (normalizedItemModeForCompatibility(state.itemMode) === 'none') return [];
  const itemRole = characterItemRoleForCompatibility(c);
  const itemFamily = characterItemFamilyForCompatibility(c);
  if (itemRole !== 'weapon') return [];
  const terms = ['extra weapon', 'duplicate weapon', 'second weapon', 'unrelated weapon', 'floating weapon clutter'];
  if (itemFamily === 'large_weapon') {
    terms.push('extra sword', 'twin swords', 'dual blades', 'extra blade');
  }
  if (itemFamily === 'bow') {
    terms.push('gun', 'pistol', 'rifle', 'sword', 'dual blades', 'extra weapon');
  }
  if (itemFamily === 'gun') {
    terms.push('bow', 'arrow', 'rifle', 'sword', 'dual blades', 'extra weapon');
  }
  if (itemFamily === 'rifle') {
    terms.push('bow', 'arrow', 'pistol', 'sword', 'dual blades', 'extra weapon');
  }
  return uniqCommaTerms(terms);
}
function nonWeaponItemSafetyTerms(c) {
  if (normalizedItemModeForCompatibility(state.itemMode) === 'none') return [];
  const role = characterItemRoleForCompatibility(c);
  if (role === 'weapon') return [];
  const item = schemaMainItemName(c) || 'personal item';
  const compactItem = normalizeSpaces(item).replace(/[,.].*$/g, '').slice(0, 80) || 'personal item';
  const terms = [
    `using ${compactItem} as a weapon`,
    `swinging ${compactItem}`,
    `striking with ${compactItem}`,
    `${compactItem} as sword`,
    `${compactItem} as blade`,
    'non-weapon item used as weapon',
    'item merging with hand',
    'item covering face',
    'item covering chest silhouette',
    'item replacing weapon'
  ];
  if (role === 'instrument_item') terms.push('instrument used for melee attack', 'instrument swung like weapon');
  if (role === 'document_item') terms.push('scroll used as weapon', 'book used as weapon');
  if (role === 'daily_item') terms.push('teacup attack', 'tray attack', 'apple weapon');
  if (role === 'accessory_item') terms.push('fan slash', 'mirror weapon', 'handbag weapon');
  if (role === 'ritual_item') terms.push('ritual focus used for melee striking');
  if (role === 'tool_item') terms.push('tool used as battle weapon');
  return uniqCommaTerms(terms);
}
function nonWeaponItemPositiveGuard(c) {
  if (normalizedItemModeForCompatibility(state.itemMode) === 'none') return '';
  const role = characterItemRoleForCompatibility(c);
  if (role === 'weapon') return '';
  const item = schemaMainItemName(c) || 'personal item';
  const rolePhrases = {
    instrument_item: `Non-weapon item lock: ${item} is a musical or signal instrument; hold, raise, or play it naturally, never use it for combat, blocking, aiming, or weapon-action posing.`,
    document_item: `Non-weapon item lock: ${item} is a readable document object; hold, read, write, or present it naturally, never use it for combat, blocking, aiming, or weapon-action posing.`,
    daily_item: `Non-weapon item lock: ${item} is a daily/lifestyle object; hold, carry, offer, sip, or display it naturally, never use it for combat, blocking, aiming, or weapon-action posing.`,
    accessory_item: `Non-weapon item lock: ${item} is an accessory/display item; wear, hold, or display it beside the body, never use it for combat, blocking, aiming, or weapon-action posing.`,
    ritual_item: `Ritual item lock: ${item} is a ritual focus by default; present, raise, or channel through it ceremonially, never use it for melee striking unless explicitly marked as weapon.`,
    tool_item: `Tool item lock: ${item} is a practical tool by default; use it for professional or lifestyle action, never treat it as a battle weapon unless explicitly marked weapon.`,
    prop: `Prop lock: ${item} is a symbolic prop; hold or display it clearly, never use it for combat, blocking, aiming, or weapon-action posing.`,
    none: 'No-item lock: hands stay empty; do not invent weapons, props, books, cups, staffs, accessories, instruments, documents, or tools.'
  };
  return rolePhrases[role] || `Non-weapon item lock: ${item} is not marked as a weapon; hold or display it naturally and never use it for active attack.`;
}

const POSE_UI_CATEGORY_META = {
  standing: { name: 'ท่ายืน / Standing', icon: '🧍' },
  closeup_bust: { name: 'Close-up / Portrait / ภาพครึ่งตัว', icon: '🖼️' },
  sitting: { name: 'ท่านั่ง / Sitting', icon: '🪑' },
  leaning: { name: 'ท่าเอน / Leaning', icon: '🏛️' },
  over_shoulder: { name: 'มองกลับ / Over-Shoulder', icon: '↩️' },
  soft_motion: { name: 'เคลื่อนไหวสวย / Soft Motion', icon: '🌬️' },
  thigh_knee_up: { name: 'Thigh/Knee-up / โชว์ตัว', icon: '💎' },
  combat: { name: 'ต่อสู้ / Combat', icon: '⚔️' },
  ranged_weapon: { name: 'ธนู-ปืน / Ranged Weapon', icon: '🏹' },
  male_neutral_weapon: { name: 'ชาย/กลางถืออาวุธ / Male-Neutral', icon: '🛡️' },
  long_item: { name: 'อาวุธยาว/ของใหญ่ / Long Item', icon: '🔱' },
  camera_driven_glamour: { name: 'หมวดตากล้อง / Camera-Driven Glamour', icon: '📸' },
  glamour_showcase: { name: 'ท่าโชว์เสน่ห์ / Glamour Showcase', icon: '💋' },
  glamour: { name: 'Glamour Collection / Legacy', icon: '💃' }
};
function inferPoseUiCategory(p) {
  const sub = normalize(p && p.subcategory);
  const framing = normalize(p && p.framing);
  const blob = normalize([p && p.id, p && p.title, p && p.titleTH, p && p.descriptionTH, p && p.prompt].join('\n'));
  if (sub === 'ranged_weapon' || /longbow|bow|archer|pistol|handgun|rifle|sniper|firearm|launcher|ธนู|ปืน|สไนเปอร์/.test(blob)) return 'ranged_weapon';
  if (sub === 'male_neutral_weapon') return 'male_neutral_weapon';
  if (sub === 'long_item') return 'long_item';
  if (sub === 'glamour_combat' || /combat|slash|attack|weapon|sword|blade|dagger|stance|action|ต่อสู้|ดาบ/.test(blob)) return 'combat';
  if (sub === 'bust_portrait' || sub === 'luxury_bust' || framing === 'bust' || framing === 'waist_up' || framing === 'closeup' || /close-up|closeup|portrait|พอร์ตเทรต|ครึ่งตัว/.test(blob)) return 'closeup_bust';
  if (sub === 'sitting' || sub === 'sitting_throne_couch' || framing === 'seated_full_body') return 'sitting';
  if (sub === 'leaning') return 'leaning';
  if (sub === 'over_shoulder') return 'over_shoulder';
  if (sub === 'soft_motion') return 'soft_motion';
  if (sub === 'thigh_up' || sub === 'thigh_knee_up' || framing === 'thigh_up' || framing === 'knee_up') return 'thigh_knee_up';
  if (sub === 'glamour_standing' || sub === 'standing' || framing === 'full_body') return 'standing';
  return p && (p.category || 'glamour');
}
function poseUiCategory(p) { return (p && (p.uiCategory || inferPoseUiCategory(p))) || 'glamour'; }
function poseCategoryMeta(p) { const key = poseUiCategory(p); return POSE_UI_CATEGORY_META[key] || { name: (p && (p.uiCategoryName || p.categoryName || key)) || key, icon: (p && (p.uiIcon || p.icon)) || '🎭' }; }
function poseCategoryName(p) { return poseCategoryMeta(p).name; }
function isCloseupPose(p) { return poseUiCategory(p) === 'closeup_bust' || (p && p.category === 'closeup_bust'); }
function isUniversalPose(p) { return p && (p.isUniversal === true || UNIVERSAL_CATEGORIES.has(p.category) || UNIVERSAL_CATEGORIES.has(poseUiCategory(p))); }
function hasPoseRiskHint(p, hint) { return new Set((p && p.riskHints) || []).has(hint); }

const ITEM_ROLE_COMPATIBILITY_ALIASES = {
  prop: ['prop', 'daily_item', 'accessory_item', 'tool_item', 'ritual_item'],
  instrument_item: ['instrument_item', 'prop', 'daily_item', 'accessory_item', 'ritual_item'],
  tool_item: ['tool_item', 'prop', 'daily_item', 'document_item', 'accessory_item'],
  daily_item: ['daily_item', 'prop', 'accessory_item', 'tool_item'],
  accessory_item: ['accessory_item', 'daily_item', 'prop', 'ritual_item'],
  document_item: ['document_item', 'tool_item', 'daily_item', 'prop'],
  ritual_item: ['ritual_item', 'prop', 'accessory_item', 'instrument_item'],
  travel_item: ['travel_item', 'daily_item', 'prop', 'tool_item'],
  large_tool_item: ['large_tool_item', 'tool_item', 'prop', 'large_item'],
  large_ritual_item: ['large_ritual_item', 'ritual_item', 'prop', 'large_item'],
  oversized_prop: ['oversized_prop', 'prop', 'large_item'],
  weapon: ['weapon']
};
function roleAliasesFor(itemRole) {
  const role = itemRole || 'none';
  return new Set([role, ...((ITEM_ROLE_COMPATIBILITY_ALIASES[role]) || [])]);
}
function poseSupportsItemRole(p, itemRole) {
  const compatibleRoles = p && Array.isArray(p.compatibleItemRoles) ? p.compatibleItemRoles : [];
  if (!compatibleRoles.length) return true;
  const aliases = roleAliasesFor(itemRole);
  return compatibleRoles.some(role => aliases.has(role));
}
function poseAvoidsItemRole(p, itemRole) {
  const avoidRoles = p && Array.isArray(p.avoidItemRoles) ? p.avoidItemRoles : [];
  if (!avoidRoles.length) return false;
  const aliases = roleAliasesFor(itemRole);
  return avoidRoles.some(role => aliases.has(role));
}
function relaxedRiskTagsForCompatibility(c, itemRole) {
  const tags = effectiveRiskTagsForMode(c);
  // For non-weapon stage props / instruments / tools, these are visual energy or motion notes,
  // not reasons to reduce the pool to only weapon-safe fallback poses.
  if (['prop','instrument_item','daily_item','accessory_item','tool_item','document_item','travel_item'].includes(itemRole)) {
    ['high_motion','aura_effect','floating_props','thread_effect','instrument_strings'].forEach(tag => tags.delete(tag));
  }
  return tags;
}

function effectiveRiskTagsForMode(c) {
  const tags = new Set(schemaRiskTags(c));
  if (state.itemMode === 'no_item') {
    // In no-item mode the character should be treated as a body/showcase subject,
    // not as their default weapon/item user.  Keep intrinsic aura/effect tags, but
    // remove handheld-item risks so portrait/close-up/glamour poses are not over-filtered.
    ITEM_RISK_TAGS.forEach(tag => tags.delete(tag));
  }
  return tags;
}

function charRangedKind(c) {
  const blob = normalize([c && c.n, schemaMainItemName(c), schemaItemFamily(c), schemaItemRole(c), schemaItemPrompt(c), c && c.mainItem, c && c.visualAnchor, c && c.d, c && c.p, ...schemaRiskTags(c)].join('\n'));
  if (!/ranged_weapon|\bbow\b|longbow|archer|gun|pistol|handgun|revolver|rifle|sniper|launcher|firearm|ธนู|ปืน|สไนเปอร์/.test(blob)) return '';
  if (/\bbow\b|longbow|archer|ธนู/.test(blob)) return 'bow';
  if (/sniper|rifle|scope|สไนเปอร์/.test(blob)) return 'rifle';
  if (/launcher|cannon|heavy firearm/.test(blob)) return 'launcher';
  if (/gun|pistol|handgun|revolver|firearm|ปืน/.test(blob)) return 'gun';
  return 'ranged';
}
function poseRangedKind(p) {
  const blob = normalize([p && p.id, p && p.title, p && p.titleTH, p && p.prompt].join('\n'));
  if (/\bbow\b|longbow|archer|ธนู/.test(blob)) return 'bow';
  if (/sniper|rifle|scope|สไนเปอร์/.test(blob)) return 'rifle';
  if (/launcher|heavy ranged|heavy firearm/.test(blob)) return 'launcher';
  if (/gun|pistol|handgun|firearm|ปืน/.test(blob)) return 'gun';
  return 'ranged';
}
function rangedPoseMatchesCharacter(p, c) {
  if (poseUiCategory(p) !== 'ranged_weapon') return true;
  const ck = charRangedKind(c);
  if (!ck) return false;
  const pk = poseRangedKind(p);
  if (ck === 'bow') return pk === 'bow' || pk === 'ranged';
  if (ck === 'gun') return pk === 'gun' || pk === 'ranged';
  if (ck === 'rifle') return ['rifle','gun','ranged'].includes(pk);
  if (ck === 'launcher') return ['launcher','rifle','ranged'].includes(pk);
  return true;
}

function poseItemFamily(p) {
  const blob = normalize([p && p.id, p && p.title, p && p.titleTH, p && p.descriptionTH, p && p.prompt, p && p.subcategory, p && p.uiCategory].join('\n'));
  // These families are intentionally specific.  A stage “curtain bow” should NOT be treated as archery.
  if (/longbow|archer|bow draw|draw[^.]{0,30}bow|mimic[^.]{0,30}bow|bow[^a-z]{0,12}(held|rest|ready|aim|side|beside|low|presentation|portrait|frame)|ธนู/.test(blob)) return 'bow';
  if (/sniper|rifle|scope|สไนเปอร์/.test(blob)) return 'rifle';
  if (/launcher|cannon|heavy firearm/.test(blob)) return 'launcher';
  if (/pistol|handgun|revolver|firearm|gun aim|gun or wand|\bgun\b|ปืน/.test(blob)) return 'gun';
  if (/katana|sword|blade|dagger|spear|lance|scythe|shield|greatsword|weapon|ดาบ|หอก|โล่/.test(blob)) return 'melee_weapon';
  if (/staff|wand|cane|telescope staff|คทา|ไม้เท้า/.test(blob)) return 'staff';
  if (/instrument|guitar|violin|microphone|baton|conductor|เครื่องดนตรี|ไมค์/.test(blob)) return 'instrument';
  if (/book|notebook|scroll|document|letter|diary|หนังสือ|สมุด|จดหมาย/.test(blob)) return 'document';
  if (/cup|teacup|tray|umbrella|fan|mirror|suitcase|bag|bouquet|ถ้วย|ร่ม|พัด|กระจก|กระเป๋า/.test(blob)) return 'prop_item';
  return '';
}
function characterItemFamilies(c, itemRole) {
  const blob = normalize([c && c.n, schemaMainItemName(c), schemaItemFamily(c), schemaItemRole(c), schemaItemPrompt(c), c && c.mainItem, c && c.visualAnchor, c && c.d, c && c.p, c && c.itemRole, ...schemaRiskTags(c)].join('\n'));
  const fam = new Set();
  const sf = schemaItemFamily(c);
  if (sf === 'bow') fam.add('bow');
  if (sf === 'rifle') fam.add('rifle');
  if (sf === 'gun') fam.add('gun');
  if (['sword','dagger','large_weapon','shield'].includes(sf)) fam.add('melee_weapon');
  if (['staff','wand'].includes(sf)) fam.add('staff');
  if (sf === 'instrument') fam.add('instrument');
  if (['book','document'].includes(sf)) fam.add('document');
  if (['cup','accessory','travel_bag','tool','other','floating_orb','oversized_prop'].includes(sf)) fam.add('prop_item');
  if (/longbow|archer|\bbow\b|ธนู/.test(blob)) fam.add('bow');
  if (/sniper|rifle|scope|สไนเปอร์/.test(blob)) fam.add('rifle');
  if (/launcher|cannon|heavy firearm/.test(blob)) fam.add('launcher');
  if (/pistol|handgun|revolver|firearm|\bgun\b|ปืน/.test(blob)) fam.add('gun');
  if (/katana|sword|blade|dagger|spear|lance|scythe|shield|greatsword|ดาบ|หอก|โล่/.test(blob)) fam.add('melee_weapon');
  if (/staff|wand|cane|telescope staff|คทา|ไม้เท้า/.test(blob)) fam.add('staff');
  if (/instrument|guitar|violin|microphone|baton|conductor|เครื่องดนตรี|ไมค์/.test(blob)) fam.add('instrument');
  if (/book|notebook|scroll|document|letter|diary|หนังสือ|สมุด|จดหมาย/.test(blob)) fam.add('document');
  if (/cup|teacup|tray|umbrella|fan|mirror|suitcase|bag|bouquet|ถ้วย|ร่ม|พัด|กระจก|กระเป๋า/.test(blob)) fam.add('prop_item');
  if (!fam.size && itemRole && itemRole !== 'none') {
    if (itemRole === 'weapon') fam.add('melee_weapon');
    if (['prop','daily_item','accessory_item','tool_item','travel_item','large_tool_item','oversized_prop'].includes(itemRole)) fam.add('prop_item');
    if (['ritual_item','large_ritual_item'].includes(itemRole)) fam.add('staff');
    if (itemRole === 'instrument_item') fam.add('instrument');
    if (itemRole === 'document_item') fam.add('document');
  }
  return fam;
}
function noItemPoseHasForbiddenItemGesture(p) {
  const uiCat = poseUiCategory(p);
  if (['ranged_weapon','long_item','male_neutral_weapon'].includes(uiCat)) return true;
  if (uiCat === 'camera_driven_glamour' && p && p.noItemSafe === true && p.requiresItem !== true && p.itemActionType === 'none') return false;
  const titleBlob = normalize([p && p.id, p && p.title, p && p.titleTH, p && p.subcategory, p && p.uiCategory].join('\n'));
  const noItemBlob = normalize(p && p.noItemPrompt);
  const promptBlob = normalize(p && p.prompt);
  // Block semantic weapon/item poses even when the metadata mistakenly says noItemSafe.
  if (/longbow|archer|bow draw|draw[^.]{0,30}bow|gun or wand|gun aim|pistol|handgun|rifle|sniper|launcher|firearm|katana|sword|blade|dagger|spear|lance|scythe|shield|greatsword|weapon|staff|wand|cane|instrument|guitar|violin|microphone|baton|book|notebook|scroll|cup|teacup|umbrella|fan|mirror|suitcase|ธนู|ปืน|ดาบ|หอก|โล่|คทา/.test(titleBlob)) return true;
  if (/mimic[^.]{0,40}(bow|gun|sword|staff)|drawing a bow|aiming[^.]{0,40}without any weapon|ทำท่า.*ยิง/.test(noItemBlob)) return true;
  // If there is no dedicated no-item prompt, be stricter with item/weapon wording in the base prompt.
  if (!noItemBlob && /longbow|archer|bow draw|gun or wand|pistol|handgun|rifle|sniper|launcher|katana|sword|blade|dagger|spear|shield|staff|instrument|book|cup|umbrella|fan/.test(promptBlob)) return true;
  return false;
}
function poseMatchesCharacterItemFamily(p, c, itemRole) {
  const family = poseItemFamily(p);
  if (!family) return true;
  if (itemRole === 'none') return false;
  const charFamilies = characterItemFamilies(c, itemRole);
  // Ranged families must match; this prevents sword users from seeing archer/gun poses and vice versa.
  if (['bow','gun','rifle','launcher'].includes(family)) {
    return charFamilies.has(family) || (family === 'rifle' && charFamilies.has('gun'));
  }
  // Non-weapon characters should not receive sword/spear/shield-style poses.
  if (family === 'melee_weapon') return itemRole === 'weapon' && !charFamilies.has('bow') && !charFamilies.has('gun') && !charFamilies.has('rifle') && !charFamilies.has('launcher');
  if (family === 'staff') return charFamilies.has('staff') || ['ritual_item','large_ritual_item'].includes(itemRole) || (itemRole === 'weapon' && charFamilies.has('staff'));
  if (family === 'instrument') return charFamilies.has('instrument') || itemRole === 'instrument_item';
  if (family === 'document') return charFamilies.has('document') || itemRole === 'document_item';
  if (family === 'prop_item') return ['prop','daily_item','accessory_item','tool_item','travel_item','large_tool_item','oversized_prop','instrument_item','document_item','ritual_item'].includes(itemRole) || charFamilies.has('prop_item');
  return true;
}
function charBlob(c) { return [c.n, c.d, c.p, c.visualAnchor, c.mainItem, c.secondaryEffect, c.itemRole, c.presentationMode, c.originalFactionName, c.displayFactionTH, c.displayFactionKey, schemaCorePrompt(c), schemaMainItemName(c), schemaItemFamily(c), schemaItemRole(c), schemaPresentationMode(c), ...schemaTags(c), ...schemaRiskTags(c)].join('\n'); }
const LARGE_ITEM_RISK_TAGS = new Set(['large_weapon', 'large_ritual_item', 'large_tool_item', 'oversized_prop', 'oversized_item']);
const LARGE_ITEM_AVOID_ALIASES = new Map([
  ['large_weapon', ['large_weapon', 'large_ritual_item', 'large_tool_item', 'oversized_prop', 'oversized_item']],
  ['large_item', ['large_weapon', 'large_ritual_item', 'large_tool_item', 'oversized_prop', 'oversized_item']],
  ['weapon_or_long_item', ['large_weapon', 'large_ritual_item', 'large_tool_item', 'oversized_prop', 'oversized_item']],
  ['oversized_item', ['large_weapon', 'large_ritual_item', 'large_tool_item', 'oversized_prop', 'oversized_item']]
]);
function hasLargeItemRisk(tags) {
  const values = tags instanceof Set ? [...tags] : (Array.isArray(tags) ? tags : []);
  return values.some(tag => LARGE_ITEM_RISK_TAGS.has(String(tag)));
}
function riskTagBlockedByPose(avoidRiskTags, tag) {
  const avoided = avoidRiskTags instanceof Set ? avoidRiskTags : new Set(avoidRiskTags || []);
  if (avoided.has(tag)) return true;
  const aliases = LARGE_ITEM_AVOID_ALIASES.get(tag);
  if (aliases && aliases.some(alias => avoided.has(alias))) return true;
  if (LARGE_ITEM_RISK_TAGS.has(tag) && (avoided.has('large_item') || avoided.has('weapon_or_long_item') || avoided.has('oversized_item'))) return true;
  return false;
}
function inferGender(c) {
  const explicit = normalize(schemaGender(c) || (c && (c.gender || c.sex || c.targetGender)));
  if (['female','male','other','unknown'].includes(explicit)) return explicit;
  const t = normalize(charBlob(c));
  if (/female|woman|girl|heroine|queen|princess|priestess|goddess|maid|villainess|motherly|voluptuous|swordswoman|lady\b/.test(t)) return 'female';
  if (/male|man|boy|gentleman|handsome|older gentleman|strongman|captain|king\b/.test(t)) return 'male';
  if (/twins|creature|monster|dragon|beast|spirit|mask|non-human/.test(t)) return 'other';
  return 'unknown';
}
function inferRole(c) {
  const role = schemaPresentationMode(c) || c.presentationMode || '';
  const item = schemaItemRole(c) || c.itemRole || '';
  const tags = schemaRiskTags(c).join('\n');
  if (role === 'combat' || item === 'weapon') return 'combat';
  if (['lifestyle','travel','royal','regal','glamour'].includes(role) || ['daily_item','accessory_item','travel_item','prop'].includes(item)) return 'lifestyle';
  if (['scholar','scholarly','professional'].includes(role) || ['document_item','tool_item'].includes(item)) return 'scholarly';
  if (['ceremonial','mystic','support'].includes(role) || ['ritual_item','instrument_item'].includes(item)) return 'ritual';
  if (/void|dimension|curse|blood|time|memory|aura|floating|magic/.test(tags)) return 'magic';
  return 'other';
}
function roleLabel(role) {
  return {all:'ทุก Role', combat:'Combat', lifestyle:'Lifestyle / Noble', scholarly:'Scholar / Pro', ritual:'Ritual / Mystic', magic:'Magic / Effect', other:'Other'}[role] || role;
}
function genderLabel(g) {
  return {all:'ทุกเพศ', female:'Female', male:'Male', other:'Other / Non-human', unknown:'Unknown'}[g] || g;
}
function rolePreferredCategories(role) {
  return {
    combat: ['ranged_weapon','combat','long_item','male_neutral_weapon','glamour','portrait','standing','closeup_bust','villain_boss'],
    lifestyle: ['glamour','portrait','lifestyle','glamour_beauty','sitting','leaning','standing','closeup_bust','male_neutral_weapon'],
    scholarly: ['portrait','glamour','scholarly','standing','closeup_bust','male_neutral_weapon','long_item','lifestyle'],
    ritual: ['glamour','portrait','ritual_divine','ceremonial','standing','closeup_bust','long_item','male_neutral_weapon','glamour_beauty'],
    magic: ['glamour','portrait','ritual_divine','ceremonial','standing','closeup_bust','combat'],
    other: ['glamour','portrait','standing','closeup_bust','glamour_beauty']
  }[role] || ['glamour','portrait','standing','closeup_bust'];
}
function isCollectionPose(p) {
  return p && (p.recommendedForCollection === true || p.isCollectionGlamourAddon === true || (p.collectionScore || 0) >= 90);
}
function isGlamourShowcasePose(p) {
  if (!p) return false;
  const id = text(p.id).toUpperCase();
  const tags = (p.collectionTags || []).map(x => normalize(x));
  const sub = normalize(p.subcategory);
  const framing = normalize(p.framing);
  return (
    isCollectionPose(p) ||
    p.uiCategory === 'glamour_showcase' ||
    p.uiCategory === 'camera_driven_glamour' ||
    id.startsWith('CGL-') ||
    id.startsWith('GLM-SHOW-') ||
    tags.some(t => ['glamour','allure','hourglass','waist_focus','curvy_silhouette','bust_friendly','hip_shift','over_shoulder','sitting_glamour','low_angle','collection'].includes(t)) ||
    ['thigh_up','thigh_knee_up','bust_portrait','luxury_bust','sitting_throne_couch','glamour_combat','glamour_standing'].includes(sub) ||
    ['bust','waist_up','thigh_up','knee_up','seated_full_body'].includes(framing)
  );
}
function poseMatchesCategoryFilter(p, categoryId) {
  if (!categoryId || categoryId === 'all') return true;
  if (categoryId === 'glamour_showcase') return isGlamourShowcasePose(p);
  return poseUiCategory(p) === categoryId;
}

function poseGenderFit(p, c) {
  const gender = inferGender(c);
  if (!p || !c || gender === 'unknown' || gender === 'other') return 'allow';

  const target = p.targetGender || p.targetGenders || p.genderTarget || null;
  if (Array.isArray(target) && target.length && !target.includes('all')) {
    return target.includes(gender) ? 'allow' : 'hide';
  }
  if (p.genderFit && typeof p.genderFit === 'object') {
    const fit = p.genderFit[gender];
    if (fit === 'hidden' || fit === 'hide' || fit === 'exclude') return 'hide';
    if (fit === 'optional') return 'optional';
    if (fit === 'recommended' || fit === 'allow') return 'allow';
  }

  // V12.0.1 camera glamour male gate: camera/body-showcase glamour is female-only by default.
  if (gender === 'male' && poseUiCategory(p) === 'camera_driven_glamour') {
    const fit = p.genderFit && p.genderFit.male;
    if (fit === 'allow' || fit === 'recommended') return 'allow';
    if (fit === 'optional') return 'optional';
    return 'hide';
  }

  // CGL addon poses were authored mainly for female fantasy glamour.  Without this gate,
  // male characters can receive "queen / villainess / hip-emphasis" poses, which is funny
  // but not the intended default UX.
  if (gender === 'male' && !isCollectionPose(p)) {
    const blob = normalize([p.id, p.title, p.titleTH, p.descriptionTH, p.subcategory, p.category].join('\n'));
    const hardFemalePoseSignals = [
      'villainess', 'heroine', 'goddess', 'queen sitting', 'queen pose',
      'hair touch', 'hand near hair', 'glamour close-up'
    ];
    if (hardFemalePoseSignals.some(k => blob.includes(k))) return 'hide';
  }

  if (gender === 'male' && isCollectionPose(p)) {
    const blob = normalize([
      p.id, p.title, p.titleTH, p.descriptionTH, p.subcategory, p.framing,
      ...(p.collectionTags || [])
    ].join('\n'));

    const hardFemaleSignals = [
      'female_glamour', 'heroine', 'queen', 'villainess', 'goddess',
      'hip-emphasis', 'hip emphasis', 'สะโพก', 'ต้นขา', 'thigh-up',
      'thigh_up', 'knee-up', 'knee_up', 'thigh_knee_up',
      'hair touch', 'hand near hair', 'collarbone',
      'side-sitting', 'side sitting', 'side-saddle', 'couch', 'cross-legged',
      'soft alluring', 'fashion-model', 'fashion model', 's-curve'
    ];

    // Male characters should not receive the clearly female-coded CGL collection poses by default.
    // Keep only a very small neutral subset (leaning / low-angle / portrait-like) and only when
    // it does not contain any of the female-glamour signals above.
    const maleNeutralSubcategories = new Set(['leaning', 'low_angle', 'luxury_bust']);
    const subcat = p.subcategory || '';
    if (!maleNeutralSubcategories.has(subcat)) return 'hide';
    if (hardFemaleSignals.some(k => blob.includes(k))) return 'hide';
    return 'optional';
  }

  return 'allow';
}
function isGenderCompatiblePose(p, c) {
  return poseGenderFit(p, c) !== 'hide';
}
function framingBoost(p) {
  return {
    thigh_up: 22,
    knee_up: 20,
    bust: 16,
    waist_up: 16,
    closeup: 12,
    full_body: 2
  }[p.framing] || 0;
}

const FIGURE_PRESETS = {
  glamour_voluptuous: {
    label: 'Glamour Voluptuous',
    positive: 'Figure Signature: attractive adult feminine fantasy character proportions, full bust, fitted narrow waist, soft curvy hips, elegant hourglass silhouette, glamorous mature femininity, beautiful clothed upper-body shape, premium fantasy character-card appeal.',
    guard: 'Figure Preservation: preserve the character\'s signature full-bust and hourglass silhouette even in action, combat, seated, low-angle, or torso-rotated poses. The pose may be dynamic, but it must not flatten the chest, erase the waist curve, or turn the body into a straight athletic silhouette. Keep the look tasteful, fully clothed, and elegant.',
    framing: 'Figure Framing: keep visual focus on face, hair, upper body, readable chest silhouette under clothing, fitted waist, hands, and the main item. Footwork may be implied if needed; do not let lower-body mechanics dominate the composition unless the selected pose is explicitly full-body.',
    negative: 'flattened chest, small flat bust, erased bust silhouette, boxy torso, straight masculine torso, overly slim flat athletic body, missing waist curve, shapeless waist, narrow flat hips, unglamorous practical combat body, body hidden by arms, chest completely hidden by weapon, torso flattened by rotation'
  },
  balanced_feminine: {
    label: 'Balanced Feminine',
    positive: 'Figure Signature: attractive adult feminine fantasy character proportions, graceful waist, natural curves, elegant readable silhouette, polished character-card appeal.',
    guard: 'Figure Preservation: preserve a graceful feminine silhouette and readable waist/upper-body shape even in action poses.',
    framing: 'Figure Framing: keep face, hair, upper body, waist line, hands, and main item readable with a clean elegant silhouette.',
    negative: 'boxy torso, shapeless waist, overly flat straight body, body hidden by arms, torso flattened by rotation'
  }
};
function figurePresetFor(c) {
  if (!c || inferGender(c) !== 'female') return null;
  const explicit = schemaProfile(c).figurePreset || c.figurePreset || c.bodySignature || c.bodyType || '';
  if (FIGURE_PRESETS[explicit]) return explicit;
  const blob = normalize(charBlob(c));
  const glamourSignals = /voluptuous|curvy|glamour|alluring|mature feminine|hourglass|queen|princess|goddess|villainess|siren|seductive|elegant feminine|female swordswoman|lady\b|heroine/.test(blob);
  const practicalSignals = /child|petite child|young boy|little girl/.test(blob);
  if (practicalSignals) return null;
  return glamourSignals ? 'glamour_voluptuous' : 'balanced_feminine';
}
function figurePreset(c) {
  const key = figurePresetFor(c);
  return key ? FIGURE_PRESETS[key] : null;
}
function poseTextBlob(p) {
  return normalize([p && p.id, p && p.title, p && p.titleTH, p && p.description, p && p.descriptionTH, p && p.category, p && p.uiCategory, p && p.subcategory, p && p.framing, p && p.prompt, ...((p && p.collectionTags) || [])].join('\n'));
}
function poseSilhouetteMeta(p) {
  const blob = poseTextBlob(p);
  const framing = (p && p.framing) || '';
  const sub = (p && p.subcategory) || '';
  const bustFriendly = ['bust','waist_up','thigh_up','knee_up'].includes(framing)
    || ['thigh_knee_up','luxury_bust','leaning','low_angle','over_shoulder','sitting_throne_couch'].includes(sub)
    || /bust|waist|thigh|knee|upper body|portrait|hourglass|s-curve|hip|glamour|shoulder|collarbone/.test(blob);
  const compressesBust = /side slash|slash follow|follow-through|torso rotated|extreme twist|body turned partly away|active attack|two-handed|both feet remain|full-body action|combat-ready/.test(blob)
    && !/preserving|hourglass|bust|upper-body|glamour|thigh-up|knee-up/.test(blob);
  const highTorsoRotation = /torso rotated|twisted|turning|side slash|over shoulder|back-turned/.test(blob);
  return { bustFriendly, compressesBust, highTorsoRotation };
}
function glamourActionPoseOverlay(c, p) {
  const preset = figurePreset(c);
  if (!preset) return '';
  const role = inferRole(c);
  const meta = poseSilhouetteMeta(p);
  const blob = poseTextBlob(p);
  const isAction = role === 'combat' || p.category === 'combat' || poseUiCategory(p) === 'combat' || poseUiCategory(p) === 'ranged_weapon' || /combat|slash|attack|weapon|sword|blade|dagger|stance|action/.test(blob);
  if (!isAction) return '';
  return 'Glamour Action Override: treat this as stylish fantasy glamour-combat rather than purely practical athletic combat. Use upper-body focused three-quarter action framing when possible; torso rotation must preserve a clear full-bust shape under clothing, fitted waist, and elegant hourglass line. Weapon motion stays beside or behind the silhouette and must not cover or flatten the chest/waist shape. Footwork can be implied; face, hair, upper body, hands, main item, and curvy feminine silhouette remain the visual priority.';
}
function figurePromptBlocks(c, p) {
  const preset = figurePreset(c);
  if (!preset) return [];
  return dedupe([preset.positive, preset.guard, preset.framing, glamourActionPoseOverlay(c, p)]);
}
function figureNegativeTerms(c, p) {
  const preset = figurePreset(c);
  if (!preset) return [];
  const terms = preset.negative.split(',').map(x => x.trim());
  const meta = poseSilhouetteMeta(p);
  if (meta.compressesBust || meta.highTorsoRotation) {
    terms.push('action pose flattening bust', 'torso twist erasing curves', 'weapon hiding chest silhouette', 'arms crushing chest silhouette');
  }
  return terms;
}
function figureRecommendationBoost(c, p) {
  const preset = figurePreset(c);
  if (!preset) return 0;
  const meta = poseSilhouetteMeta(p);
  let score = 0;
  if (meta.bustFriendly) score += figurePresetFor(c) === 'glamour_voluptuous' ? 18 : 10;
  if (['thigh_up','knee_up','waist_up','bust'].includes(p.framing)) score += 14;
  if (['thigh_up','bust_portrait','sitting','leaning','over_shoulder','glamour_combat','soft_motion','glamour_standing'].includes(p.subcategory)) score += 10;
  if (meta.compressesBust) score -= 24;
  if (meta.highTorsoRotation && !meta.bustFriendly) score -= 8;
  return score;
}
function collectionPosesFor(c) {
  if (!c) return [];
  const cacheKey = poseCacheKey(c, 'collection');
  if (perfCache.collection.has(cacheKey)) return perfCache.collection.get(cacheKey);
  const result = compatiblePosesFor(c)
    .filter(p => isCollectionPose(p))
    .sort((a,b) => recommendationScore(c,b) - recommendationScore(c,a));
  perfCache.collection.set(cacheKey, result);
  return result;
}
function compatiblePosesFor(c) {
  if (!c) return [];
  const cacheKey = poseCacheKey(c, 'compatible');
  if (perfCache.compatible.has(cacheKey)) return perfCache.compatible.get(cacheKey);
  const lib = activePoseLibrary();
  const allowed = Array.isArray(c.allowedPoseIds) ? new Set(c.allowedPoseIds.map(String)) : null;
  const itemRole = state.itemMode === 'no_item' ? 'none' : schemaItemRole(c);
  const role = inferRole(c);
  const preferredCats = new Set(rolePreferredCategories(role));
  const riskTags = relaxedRiskTagsForCompatibility(c, itemRole);
  const noItemMode = state.itemMode === 'no_item';

  let arr = lib.filter(p => {
    if (!isGenderCompatiblePose(p, c)) return false;
    if (!rangedPoseMatchesCharacter(p, c)) return false;
    if (!isPoseCompatibleWithCharacterItem(p, c, state.itemMode)) return false;
    const compatibleRoles = p.compatibleItemRoles || [];
    const avoidRoles = new Set(p.avoidItemRoles || []);
    const avoidRiskTags = new Set(p.avoidRiskTags || []);
    const presentationModes = p.compatiblePresentationModes || [];
    const universalOk = isUniversalPose(p);
    const allowedOk = allowed ? allowed.has(String(p.id)) || p.isUniversal === true : true;
    if (!allowedOk) return false;

    if (noItemMode) {
      if (p.requiresItem === true) return false;
      if (p.noItemSafe !== true) return false;
      if (NO_ITEM_BLOCKED_ACTIONS.has(p.itemActionType)) return false;
      if (noItemPoseHasForbiddenItemGesture(p)) return false;
      if (compatibleRoles.length && !compatibleRoles.includes('none')) return false;
    } else {
      if (!poseSupportsItemRole(p, itemRole)) return false;
      if (poseAvoidsItemRole(p, itemRole)) return false;
      if (shouldHideWeaponWithItemPose(c, p, state.itemMode)) return false;
      if (p.itemActionType === 'none_only') return false;
    }

    for (const tag of riskTags) {
      if (riskTagBlockedByPose(avoidRiskTags, tag)) return false;
    }

    const uiCat = poseUiCategory(p);
    const noItemShowcaseOk = noItemMode && p.noItemSafe === true && p.requiresItem !== true && NO_ITEM_SHOWCASE_CATEGORIES.has(uiCat);
    const presentationOk = noItemShowcaseOk || !presentationModes.length || presentationModes.includes(schemaPresentationMode(c)) || presentationModes.includes(role) || universalOk;
    const categoryOk = noItemShowcaseOk || preferredCats.has(p.category) || preferredCats.has(uiCat) || universalOk || (poseSupportsItemRole(p, itemRole) && !poseAvoidsItemRole(p, itemRole));
    if (!presentationOk && !categoryOk) return false;

    if (hasLargeItemRisk(riskTags) && isCloseupPose(p) && !hasPoseRiskHint(p, 'weapon_or_long_item') && !hasPoseRiskHint(p, 'large_item_safe')) return false;
    if (riskTags.has('ranged_weapon') && !hasPoseRiskHint(p, 'ranged_safe') && /hand.*face|near the lower face|covering face|aiming directly into camera/i.test(p.prompt || '')) return false;
    return true;
  });

  if (!arr.length) {
    arr = lib.filter(p => {
      if (!isGenderCompatiblePose(p, c)) return false;
      if (!isPoseCompatibleWithCharacterItem(p, c, state.itemMode)) return false;
      if (noItemMode) {
        return p.noItemSafe === true && p.requiresItem !== true && !noItemPoseHasForbiddenItemGesture(p) && ((p.compatibleItemRoles || []).includes('none') || NO_ITEM_SHOWCASE_CATEGORIES.has(poseUiCategory(p)));
      }
      if (shouldHideWeaponWithItemPose(c, p, state.itemMode)) return false;
      return (isUniversalPose(p) || poseSupportsItemRole(p, itemRole) || (riskTags.has('ranged_weapon') && poseUiCategory(p) === 'ranged_weapon') || (hasLargeItemRisk(riskTags) && poseUiCategory(p) === 'long_item')) && rangedPoseMatchesCharacter(p, c);
    });
  }
  perfCache.compatible.set(cacheKey, arr);
  return arr;
}
function recommendationScore(c, p) {
  const role = inferRole(c);
  const cats = rolePreferredCategories(role);
  const gender = inferGender(c);
  const riskTags = effectiveRiskTagsForMode(c);
  const highRisk = [...riskTags].some(t => ['large_weapon','large_ritual_item','large_tool_item','oversized_prop','oversized_item','segmented_weapon','ranged_weapon','dual_item','broken_weapon','high_motion'].includes(t));
  let score = 0;
  score += figureRecommendationBoost(c, p);
  const uiCat = poseUiCategory(p);
  if (cats.includes(p.category)) score += 50 - cats.indexOf(p.category) * 5;
  if (cats.includes(uiCat)) score += 46 - cats.indexOf(uiCat) * 5;
  if (riskTags.has('ranged_weapon') && uiCat === 'ranged_weapon') score += 44;
  const charItemBlob = normalize([schemaMainItemName(c), schemaItemFamily(c), schemaItemRole(c), schemaItemPrompt(c), c.mainItem, c.visualAnchor, c.d, c.p, ...schemaRiskTags(c)].join('\n'));
  const poseId = normalize(p.id || '');
  const poseBlob = poseTextBlob(p);
  if (riskTags.has('ranged_weapon')) {
    if (/\bbow\b|archer|longbow|ธนู/.test(charItemBlob) && /\bbow\b|archer|longbow|ธนู/.test(poseBlob + ' ' + poseId)) score += 28;
    if (/gun|pistol|handgun|revolver|firearm|ปืน/.test(charItemBlob) && /gun|pistol|handgun|firearm|ปืน/.test(poseBlob + ' ' + poseId)) score += 30;
    if (/rifle|sniper|scope|สไนเปอร์/.test(charItemBlob) && /rifle|sniper|scope|สไนเปอร์/.test(poseBlob + ' ' + poseId)) score += 34;
    if (/dual|paired|คู่/.test(charItemBlob) && /dual|paired|คู่/.test(poseBlob + ' ' + poseId)) score += 18;
  }
  if (/instrument|guitar|violin|microphone|baton|conductor|เครื่องดนตรี/.test(charItemBlob) && /instrument|performer|tool|เครื่องดนตรี|นักแสดง/.test(poseBlob + ' ' + poseId)) score += 34;
  if (/staff|cane|telescope|ritual|คทา|ไม้เท้า/.test(charItemBlob) && /staff|ritual|ceremonial|คทา|พิธีกรรม/.test(poseBlob + ' ' + poseId)) score += 24;
  if (/tool|professional|เครื่องมือ/.test(charItemBlob) && /tool|professional|เครื่องมือ/.test(poseBlob + ' ' + poseId)) score += 24;
  if (hasLargeItemRisk(riskTags) && uiCat === 'long_item') score += 34;
  if (gender === 'male' && uiCat === 'male_neutral_weapon') score += 38;
  if (isCollectionPose(p)) {
    score += Math.min(45, Math.max(0, (p.collectionScore || 90) - 55));
    score += framingBoost(p);
    if (gender === 'female') score += 12;
    if (gender === 'male') {
      const fit = poseGenderFit(p, c);
      if (fit === 'optional') score -= 18;
      if (/queen|villainess|heroine|goddess|thigh|hip|hair/i.test([p.title, p.subcategory, ...(p.collectionTags || [])].join('\n'))) score -= 30;
    }
    if (state.itemMode === 'no_item') score += 8;
    if (['glamour','royal','villain','mystic','ceremonial','lifestyle'].includes(schemaPresentationMode(c) || c.presentationMode || '')) score += 8;
  }
  if (p.subcategory === 'sitting') score += 14;
  if (p.subcategory === 'thigh_up') score += 16;
  if (p.subcategory === 'over_shoulder') score += 14;
  if (p.subcategory === 'bust_portrait') score += 12;
  if (p.subcategory === 'leaning') score += 10;
  if (p.subcategory === 'glamour_combat') score += highRisk ? -4 : 10;
  if (p.subcategory === 'soft_motion') score += 8;
  if (p.subcategory === 'glamour_standing') score += 6;
  if (p.subcategory === 'standing' && p.category === 'glamour') score += 5;
  if (p.intensity === 'safe') score += isCollectionPose(p) ? 2 : 8;
  if (p.intensity === 'medium') score += 4;
  if ((p.riskHints || []).includes('prop_readability')) score += 2;
  if (highRisk) {
    if ((p.riskHints || []).includes('weapon_or_long_item')) score += 10;
    if (p.intensity === 'bold' && !isCollectionPose(p)) score -= 12;
  }
  if (poseUiCategory(p) === 'standing' && !isCollectionPose(p)) score -= 8;
  if (isCloseupPose(p) && !isCollectionPose(p)) score -= 4;
  return score;
}
function recommendedPosesFor(c) {
  if (!c) return [];
  const cacheKey = poseCacheKey(c, 'recommended');
  if (perfCache.recommended.has(cacheKey)) return perfCache.recommended.get(cacheKey);
  const all = compatiblePosesFor(c);
  const collection = collectionPosesFor(c);
  if (collection.length) {
    const chosen = [];
    const seen = new Set();
    const add = (p) => { if (p && !seen.has(String(p.id))) { chosen.push(p); seen.add(String(p.id)); } };
    collection.slice(0, Math.min(9, RECOMMENDED_LIMIT)).forEach(add);
    [...all].sort((a,b) => recommendationScore(c,b) - recommendationScore(c,a)).forEach(p => {
      if (chosen.length < RECOMMENDED_LIMIT) add(p);
    });
    const result = chosen.slice(0, RECOMMENDED_LIMIT);
    perfCache.recommended.set(cacheKey, result);
    return result;
  }
  if (Array.isArray(c.recommendedPoseIds) && c.recommendedPoseIds.length) {
    const ids = new Set(c.recommendedPoseIds.map(String));
    const chosen = all.filter(p => ids.has(String(p.id)));
    if (chosen.length) {
      const result = chosen.slice(0, RECOMMENDED_LIMIT);
      perfCache.recommended.set(cacheKey, result);
      return result;
    }
  }
  const result = [...all].sort((a,b) => recommendationScore(c,b) - recommendationScore(c,a)).slice(0, RECOMMENDED_LIMIT);
  perfCache.recommended.set(cacheKey, result);
  return result;
}
function visiblePoses() {
  const c = selectedChar();
  if (!c) return [];
  let arr = state.poseView === 'recommended' ? recommendedPosesFor(c) : (state.poseView === 'collection' ? collectionPosesFor(c) : compatiblePosesFor(c));
  if (state.poseView === 'favorites') {
    const favs = new Set((safeJsonParse(localStorage.getItem('arcadia_v9_favorite_poses'), []) || []).map(String));
    arr = compatiblePosesFor(c).filter(p => favs.has(String(p.id)));
  }
  if (state.poseCategory !== 'all') arr = arr.filter(p => poseMatchesCategoryFilter(p, state.poseCategory));
  const q = normalize(state.searchPose);
  if (q) arr = arr.filter(p => normalize([p.title, p.titleTH, p.description, p.descriptionTH, p.categoryName, p.uiCategoryName, p.uiCategory, p.subcategory, p.framing, ...(p.collectionTags || []), p.prompt].join('\n')).includes(q));
  return arr;
}
function ensureValidSelection() {
  const c = selectedChar();
  if (!c) return;
  const poses = compatiblePosesFor(c);
  if (!poses.some(p => String(p.id) === String(state.selectedPoseId))) {
    const previousPose = selectedPose();
    if (previousPose) {
      const compatibility = getPoseItemCompatibility(previousPose, c, state.itemMode);
      if (!compatibility.compatible) {
        lastPoseCompatibilityNotice = poseResetNoticeText();
        if (typeof console !== 'undefined') {
          console.warn('[V11.1.1] Reset incompatible selected pose', { character: c.n, pose: previousPose.title, reason: compatibility.reason });
        }
      }
    }
    state.selectedPoseId = null;
  } else {
    lastPoseCompatibilityNotice = '';
  }
  const role = c.itemRole || 'none';
  const hasItem = schemaHasToggleItem(c) || c.mainItem || c.visualAnchor;
  if (!hasItem || role === 'none') state.itemMode = 'no_item';
}
function setUniverse(u) {
  state.universe = u;
  state.faction = 'all';
  state.selectedCharId = null;
  state.selectedPoseId = null;
  state.step = 1;
  render();
}
function setFilter(key, value) {
  state[key] = value;
  if (['faction','gender','role','searchChar'].includes(key)) resetCharacterPaging();
  if (['poseCategory','searchPose'].includes(key)) resetPosePaging();
  if (key === 'poseCategory' || key === 'searchPose') { renderPoses(); renderMobileStickyCopyBar(); updateFloatingCopyPanel(); saveState(); } else render();
}
const debouncedSetFilter = debounce((key, value) => setFilter(key, value), 180);
function setFilterDebounced(key, value) {
  state[key] = value;
  if (key === 'searchChar') document.getElementById('charCountLabel').textContent = 'กำลังค้นหา...';
  if (key === 'searchPose') document.getElementById('poseCountLabel').textContent = 'กำลังค้นหา...';
  debouncedSetFilter(key, value);
}
function clearCharacterFilters() {
  state.faction = 'all'; state.gender = 'all'; state.role = 'all'; state.searchChar = '';
  resetCharacterPaging();
  render();
}
function selectCharacter(id) {
  const target = allActiveCharacters().find(c => String(c.id) === String(id));
  if (!target) {
    if (typeof console !== 'undefined') console.warn('[Character Select] Character not found:', id);
    showToast('ไม่พบตัวละครนี้');
    return;
  }
  state.gender = 'all';
  state.role = 'all';
  state.searchChar = '';
  state.selectedCharId = String(id);
  resetPosePaging();
  state.poseView = 'recommended';
  state.poseCategory = 'all';
  state.searchPose = '';
  ensureValidSelection();
  if (!selectedChar()) {
    if (typeof console !== 'undefined') {
      console.error('[Character Select] Selection failed after state update:', {
        id,
        universe: state.universe,
        selectedCharId: state.selectedCharId
      });
    }
    showToast('เลือกตัวละครไม่สำเร็จ');
    return;
  }
  state.step = 2;
  render();
  safeScrollToStep(2);
}
function selectPose(id) {
  state.selectedPoseId = id;
  ensureValidSelection();
  renderPoses();
  renderStep3();
  renderMobileStickyCopyBar();
  renderQuickCopyPanel();
  updateStepPills();
  updateFloatingCopyPanel();
  saveState();
}
function setPoseView(view) {
  state.poseView = view;
  state.poseCategory = 'all';
  resetPosePaging();
  renderPoses();
  updateFloatingCopyPanel();
  saveState();
}
function setItemMode(mode) {
  state.itemMode = mode;
  clearPoseCaches();
  resetPosePaging();
  ensureValidSelection();
  renderStep2();
  renderStep3();
  renderMobileStickyCopyBar();
  renderQuickCopyPanel();
  updateStepPills();
  updateFloatingCopyPanel();
  saveState();
}
function setStyle(id) {
  state.styleId = id;
  renderStep3(); renderMobileStickyCopyBar(); updateFloatingCopyPanel(); saveState();
}
function setPromptMode(mode) {
  state.promptMode = PROMPT_MODES.has(mode) ? mode : 'compact';
  renderStep3(); renderMobileStickyCopyBar(); updateFloatingCopyPanel(); saveState();
}
function setPromptTab(tab) {
  state.promptTab = tab;
  document.getElementById('tabPositive').classList.toggle('active', tab === 'positive');
  document.getElementById('tabNegative').classList.toggle('active', tab === 'negative');
  document.getElementById('positivePrompt').classList.toggle('hidden', tab !== 'positive');
  document.getElementById('negativePrompt').classList.toggle('hidden', tab !== 'negative');
  saveState();
}
function canAccessStep(step) {
  if (step === 1) return true;
  if (step === 2) return Boolean(selectedChar());
  if (step === 3) return Boolean(selectedChar() && selectedPose());
  return false;
}
function updateStepPills() {
  document.querySelectorAll('[data-action="go-step"]').forEach(btn => {
    const step = Number(btn.dataset.step);
    const allowed = canAccessStep(step);
    btn.disabled = !allowed;
    btn.setAttribute('aria-disabled', String(!allowed));
    btn.classList.toggle('is-disabled', !allowed);
    btn.title = allowed ? '' : (step === 2 ? 'เลือกตัวละครก่อน' : 'เลือกท่าก่อน');
  });
}
function goStep(step) {
  if (!canAccessStep(step)) {
    showToast(step === 2 ? 'เลือกตัวละครก่อน' : 'เลือกท่าก่อน');
    updateStepPills();
    return;
  }
  state.step = step;
  render();
  safeScrollToStep(step);
}
function suggestPose() {
  const c = selectedChar();
  if (!c) return showToast('เลือกตัวละครก่อนค่ะ');
  const pool = state.poseView === 'recommended' ? recommendedPosesFor(c) : (state.poseView === 'collection' ? collectionPosesFor(c) : compatiblePosesFor(c));
  const filtered = pool.filter(p => state.poseCategory === 'all' || poseUiCategory(p) === state.poseCategory);
  const options = (filtered.length ? filtered : pool).filter(p => String(p.id) !== String(state.selectedPoseId));
  const pick = (options.length ? options : pool)[Math.floor(Math.random() * (options.length ? options.length : pool.length))];
  if (pick) state.selectedPoseId = pick.id;
  render();
  showToast('สุ่มท่าที่เข้ากันแล้วค่ะ');
}
function filteredCharacters() {
  const q = normalize(state.searchChar);
  const chars = allChars().filter(c => {
    if (state.faction && state.faction !== 'all' && c.displayFactionKey !== state.faction) return false;
    if (state.gender !== 'all' && inferGender(c) !== state.gender) return false;
    if (state.role !== 'all' && inferRole(c) !== state.role) return false;
    if (q && !normalize(charBlob(c)).includes(q)) return false;
    return true;
  });
  if (!q) return chars;
  return chars.slice().sort((a, b) => characterSearchRank(a, q) - characterSearchRank(b, q));
}
function characterSearchRank(c, q) {
  const name = normalize(c.n || c.name || '');
  const title = normalize(c.title || '');
  const displayName = normalize(c.displayName || '');
  if (name === q) return 0;
  if (displayName === q) return 1;
  if (title === q) return 2;
  if (name.startsWith(q)) return 3;
  if (displayName.startsWith(q)) return 4;
  if (title.startsWith(q)) return 5;
  if (name.includes(q)) return 6;
  if (displayName.includes(q)) return 7;
  if (title.includes(q)) return 8;
  return 9;
}
function render() {
  ensureValidSelection();
  if (!canAccessStep(state.step)) state.step = selectedChar() ? 2 : 1;
  document.querySelectorAll('.step-panel').forEach((el, idx) => el.classList.toggle('active', idx + 1 === state.step));
  document.querySelectorAll('.step-pill').forEach((el, idx) => el.classList.toggle('active', idx + 1 === state.step));
  renderFilters(); renderCharacters(); renderStep2(); renderStep3();
  renderMobileStickyCopyBar();
  renderQuickCopyPanel();
  updateStepPills();
  updateFloatingCopyPanel();
  saveState();
}
function renderFilters() {
  document.getElementById('statCharacters').textContent = allActiveCharacters().length;
  document.getElementById('statPoses').textContent = activePoseLibrary().length;
  if (!allFactions().some(faction => faction.id === state.faction)) state.faction = 'all';
  document.getElementById('factionFilter').innerHTML = [
    `<option value="all" ${state.faction === 'all' ? 'selected' : ''}>ทั้งหมด</option>`,
    ...allFactions().map(f => `<option value="${escapeHtml(f.id)}" ${state.faction === f.id ? 'selected':''}>${escapeHtml(f.name)}</option>`)
  ].join('\n');
  document.getElementById('genderFilter').innerHTML = ['all','female','male','other','unknown'].map(g => `<option value="${g}" ${state.gender === g ? 'selected':''}>${genderLabel(g)}</option>`).join('\n');
  document.getElementById('roleFilter').innerHTML = ['all','combat','lifestyle','scholarly','ritual','magic','other'].map(r => `<option value="${r}" ${state.role === r ? 'selected':''}>${roleLabel(r)}</option>`).join('\n');
  document.getElementById('characterSearch').value = state.searchChar || '';
}
function renderCharacters() {
  const chars = filteredCharacters();
  const visible = chars.slice(0, characterVisibleCount);
  const hasMore = chars.length > visible.length;
  document.getElementById('charCountLabel').textContent = `แสดง ${visible.length}/${chars.length} ตัวละคร`;
  const c = selectedChar();
  document.getElementById('selectedCharacterHint').textContent = c ? `เลือกอยู่: ${c.n}` : 'ยังไม่ได้เลือกตัวละคร';
  const cards = visible.map(c => {
    return `<button class="character-card ${String(c.id) === String(state.selectedCharId) ? 'active':''}" type="button" data-action="select-character" data-character-id="${escapeHtml(c.id)}">
      <div class="card-title">${escapeHtml(c.n)}</div>
      <div class="card-text">${escapeHtml(c.shortPrompt || c.d || '')}</div>
      <div class="badge-row">
        <span class="badge">${escapeHtml(genderLabel(inferGender(c)))}</span>
        <span class="badge pink">${escapeHtml(roleLabel(inferRole(c)))}</span>
        <span class="badge green">${escapeHtml(c.displayFactionTH || '')}</span>
      </div>
    </button>`;
  }).join('\n');
  const grid = document.getElementById('characterGrid');
  grid.innerHTML = cards || `<div class="summary-card"><h3>ไม่พบตัวละคร</h3><p>ลองล้าง filter หรือเปลี่ยน filter ค่ะ</p></div>`;
  document.getElementById('characterLoadMoreWrap')?.remove();
  if (hasMore) {
    document.getElementById('characterGrid').insertAdjacentHTML('afterend', `<div id="characterLoadMoreWrap" class="load-more-wrap"><button class="primary-soft" type="button" data-action="load-more-characters">โหลดตัวละครเพิ่ม ${Math.min(CHARACTER_PAGE_SIZE, chars.length - visible.length)} ตัว</button></div>`);
  }
}
function loadMoreCharacters() {
  characterVisibleCount += CHARACTER_PAGE_SIZE;
  renderCharacters();
}
function renderStep2() {
  const c = selectedChar();
  const summary = document.getElementById('characterSummary');
  if (!c) {
    summary.innerHTML = '<h3>ยังไม่ได้เลือกตัวละคร</h3><p>กลับไป Step 1 เพื่อเลือกตัวละครก่อนค่ะ</p>';
    document.getElementById('poseIntro').textContent = 'เลือกตัวละครก่อน แล้วระบบจะแสดงเฉพาะ pose ที่เหมาะสม';
  } else {
    const total = compatiblePosesFor(c).length;
    const rec = recommendedPosesFor(c).length;
    const itemHidden = countPoseItemConflictsFor(c);
    document.getElementById('poseIntro').textContent = isFullDebugMode()
      ? `${c.n}: Recommended ${rec} ท่า / คลังที่เข้ากัน ${total} ท่า จาก pose ทั้งหมด ${activePoseLibrary().length} ท่า / item-guard hidden ${itemHidden}`
      : `${c.n}: แนะนำ ${rec} ท่า และมีท่าที่เข้ากับตัวละครนี้ ${total} ท่า`;
    const guardBadge = isFullDebugMode()
      ? `<span class="badge green">${escapeHtml((c.riskTags || []).slice(0,4).join(', ') || 'low risk')}</span>`
      : `<span class="badge green">ผ่านตัวกรองท่า</span>`;
    summary.innerHTML = `<h3>${escapeHtml(c.n)}</h3><p>${escapeHtml(c.d || c.shortPrompt || '')}</p><div class="badge-row"><span class="badge">${escapeHtml(c.itemRole || 'none')}</span><span class="badge pink">${escapeHtml(c.presentationMode || inferRole(c))}</span>${guardBadge}</div>`;
  }
  document.getElementById('itemWithBtn').classList.toggle('active', state.itemMode === 'with_item');
  document.getElementById('itemNoneBtn').classList.toggle('active', state.itemMode === 'no_item');
  renderPoses();
}
function renderPoses() {
  const c = selectedChar();
  ['recommended','collection','all','favorites'].forEach(v => document.getElementById('poseView' + cap(v))?.classList.toggle('active', state.poseView === v));
  const base = c ? (state.poseView === 'recommended' ? recommendedPosesFor(c) : (state.poseView === 'collection' ? collectionPosesFor(c) : compatiblePosesFor(c))) : [];
  const categoryCounts = new Map();
  base.forEach(p => {
    const key = poseUiCategory(p);
    categoryCounts.set(key, (categoryCounts.get(key) || 0) + 1);
    if (isGlamourShowcasePose(p)) {
      categoryCounts.set('glamour_showcase', (categoryCounts.get('glamour_showcase') || 0) + 1);
    }
  });
  const dynamicCats = [...categoryCounts.keys()].filter(key => !POSE_UI_CATEGORY_ORDER.includes(key));
  const catKeysRaw = [...POSE_UI_CATEGORY_ORDER, ...dynamicCats].filter((key, idx, arr) => arr.indexOf(key) === idx);
  const catKeys = catKeysRaw.filter(key => key === 'all' || (categoryCounts.get(key) || 0) > 0);
  if (!catKeys.includes(state.poseCategory)) state.poseCategory = 'all';
  const cats = catKeys.map(key => {
    if (key === 'all') return { id:'all', name:`ทุกหมวด (${base.length})`, icon:'🧭', count:base.length };
    const meta = POSE_UI_CATEGORY_META[key] || { name:key, icon:'🎭' };
    return { id:key, name:`${meta.name} (${categoryCounts.get(key) || 0})`, icon:meta.icon, count:categoryCounts.get(key) || 0 };
  });
  document.getElementById('poseCategoryFilter').innerHTML = cats.map(cat => `<option value="${cat.id}" ${state.poseCategory === cat.id ? 'selected':''}>${cat.icon} ${cat.name}</option>`).join('\n');
  document.getElementById('poseSearch').value = state.searchPose || '';
  const poses = visiblePoses();
  const visible = state.poseView === 'recommended' ? poses : poses.slice(0, poseVisibleCount);
  const hasMore = poses.length > visible.length;
  document.getElementById('poseCountLabel').textContent = state.poseView === 'recommended' ? `แนะนำ ${poses.length} ท่า` : (state.poseView === 'collection' ? `Glamour ${visible.length}/${poses.length} ท่า` : `คลังท่าที่เข้ากัน ${visible.length}/${poses.length} ท่า`);
  const baseHint = state.poseView === 'recommended'
    ? (isFullDebugMode() ? 'Recommended ตอนนี้ดัน collection/glamour ขึ้นก่อน แต่ยัง backfill จากท่าปลอดภัย' : 'ท่าแนะนำที่เข้ากับตัวละครนี้')
    : (state.poseView === 'collection'
      ? (isFullDebugMode() ? 'โหมดนี้โชว์ท่า Glamour Showcase / CGL / Collection ที่ผ่าน gender-fit และ compatibility ของตัวละคร' : 'ท่า Glamour ที่ผ่านตัวกรองของตัวละครนี้')
      : (isFullDebugMode() ? 'กำลังดูคลัง compatible จาก pose ทั้งหมด' : 'คลังท่าที่ระบบคัดแล้วว่าเข้ากับตัวละครนี้'));
  document.getElementById('poseModeHint').textContent = lastPoseCompatibilityNotice ? `${lastPoseCompatibilityNotice} ${baseHint}` : baseHint;
  const poseListEl = document.getElementById('poseList');
  poseListEl.innerHTML = visible.map(p => `<button class="pose-card ${String(p.id) === String(state.selectedPoseId) ? 'active':''}" type="button" data-action="select-pose" data-pose-id="${escapeHtml(p.id)}">
    <div class="card-title">${escapeHtml(p.icon || '🎭')} ${escapeHtml(p.titleTH || p.title)}</div>
    <div class="card-text">${escapeHtml(p.descriptionTH || p.description || p.prompt || '')}</div>
    <div class="meta"><span class="badge">${escapeHtml(poseCategoryName(p))}</span>${p.framing ? `<span class="badge green">${escapeHtml(p.framing)}</span>` : ''}<span class="dot ${p.intensity === 'bold' ? 'bold':''}">${p.intensity === 'bold' ? 'Bold':'Safe'}</span></div>
  </button>`).join('\n') || `<div class="summary-card"><h3>ไม่พบ pose</h3><p>ลองเปลี่ยนหมวดหรือล้างคำค้นหา ท่าทั้งหมดยังอยู่ในคลังค่ะ</p></div>`;
  renderQuickCopyPanel();
  document.getElementById('poseLoadMoreWrap')?.remove();
  if (hasMore) {
    poseListEl.insertAdjacentHTML('afterend', `<div id="poseLoadMoreWrap" class="load-more-wrap"><button class="primary-soft" type="button" data-action="load-more-poses">โหลดท่าเพิ่ม ${Math.min(POSE_PAGE_SIZE, poses.length - visible.length)} ท่า</button></div>`);
  }
}
function loadMorePoses() {
  poseVisibleCount += POSE_PAGE_SIZE;
  renderPoses();
}
function renderStep3() {
  const c = selectedChar();
  const p = selectedPose();
  const style = selectedStyle();
  document.getElementById('styleList').innerHTML = activeStyles.map(s => `<button class="style-chip ${s.id === state.styleId ? 'active':''}" type="button" data-action="set-style" data-style-id="${escapeHtml(s.id)}">${s.icon} ${escapeHtml(s.name)}</button>`).join('\n');
  document.getElementById('promptModeCompactBtn')?.classList.toggle('active', state.promptMode === 'compact');
  document.getElementById('promptModeDebugBtn')?.classList.toggle('active', state.promptMode === 'full_debug');
  if (!c || !p) {
    document.getElementById('finalSummary').innerHTML = '<h3>ยังไม่พร้อมสร้าง Prompt</h3><p>เลือกตัวละครและท่าก่อนค่ะ</p>';
    document.getElementById('positivePrompt').textContent = '';
    document.getElementById('negativePrompt').textContent = '';
    renderMobileStickyCopyBar();
    updateFloatingCopyPanel();
    return;
  }
  const prompts = buildPrompts(c, p, style);
  document.getElementById('finalSummary').innerHTML = `<h3>${escapeHtml(c.n)} / ${escapeHtml(p.title)} / ${state.itemMode === 'with_item' ? 'ถือของประจำตัว':'ไม่ถืออะไร'} / ${escapeHtml(style.name)}</h3><p>${escapeHtml(p.descriptionTH || p.description || p.categoryName || '')}</p>`;
  document.getElementById('positivePrompt').textContent = prompts.positive;
  document.getElementById('negativePrompt').textContent = prompts.negative;
  const warnings = promptWarnings(c, p);
  const note = document.getElementById('compatNote');
  note.classList.toggle('warn', warnings.length > 0);
  note.textContent = warnings.length ? `ควรระวัง: ${warnings.join(' · ')}` : 'พร้อมใช้งาน: pose นี้ผ่าน compatible filtering ของตัวละครแล้ว';
  setPromptTab(state.promptTab);
  renderHistory();
  renderMobileStickyCopyBar();
  updateFloatingCopyPanel();
}
function itemKeywordPattern(c) {
  const words = [
    schemaMainItemName(c), schemaItemFamily(c), schemaItemRole(c), c.mainItem, c.visualAnchor, c.itemRole,
    'sword','katana','blade','dagger','knife','spear','lance','bow','gun','rifle','pistol','handgun','staff','wand','rod','cane','shield','book','notebook','tome','scroll','map','document','letter','cup','teacup','saucer','tray','fan','umbrella','mirror','lantern','compass','tool','instrument','violin','guitar','harp','flute','flower','bouquet','bag','handbag','suitcase','prop','weapon'
  ];
  const tokens = dedupe(words.flatMap(w => text(w).split(/[^A-Za-z0-9_\-]+/)).filter(w => w.length > 2));
  const escaped = tokens.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  return escaped.length ? new RegExp(`\\b(${escaped.join('|')})\\b`, 'i') : null;
}
function stripHandheldItemClauses(raw, c) {
  let out = text(raw);
  const itemRe = itemKeywordPattern(c);
  const itemActionRe = /\b(holding|hold|holds|wielding|wield|wields|carrying|carry|carries|gripping|grip|grips|presenting|present|presents|raising|raise|raises|aiming|aim|aims|drawing|draw|draws|reading|read|reads|playing|play|plays|serving|serve|serves|brandishing|brandish|brandishes)\b/i;
  out = out
    .split(/(?<=[.!?。])\s+|\s*;\s*/)
    .filter(sentence => !itemActionRe.test(sentence))
    .join('\n');
  out = out.replace(/\b(holding|wielding|carrying|gripping|presenting|raising|aiming|drawing|reading|playing|serving|brandishing)\b[^,.。;]*(?:[,;。]|$)/gi, '');
  if (itemRe) {
    out = out.replace(new RegExp(`\\bwith\\s+(?:a|an|the|one|two|dual|paired|ornate|solid|magical|ritual|default|main|small|large|massive|long|short|black|silver|gold|crystal|steel|metal|wooden|ivory|red|blue|white|dark|holy|cursed|glowing|floating|folded|open|closed|ancient|futuristic|mechanical|ceremonial|noble|elegant|simple|handheld|physical|rigid|solid|${itemRe.source})[^,.。;]*(?:[,;。]|$)`, 'gi'), '');
  }
  out = out.replace(/\s{2,}/g, ' ').replace(/\s+,/g, ',').replace(/,\s*,/g, ',').trim();
  return out || c.shortPrompt || c.n;
}
function characterPromptForMode(c, p = selectedPose()) {
  const schema = characterSchema(c);
  if (schema) {
    const suppressItem = shouldSuppressItemForPose(c, p, state.itemMode);
    const passiveItem = shouldUsePassiveItemPlacement(c, p, state.itemMode);
    const core = schemaCorePrompt(c, suppressItem) || c.n;
    const identity = schemaIdentityPrompt(c, suppressItem);
    if (suppressItem) return dedupe([core, identity, 'No handheld personal item is present; keep the same character design and remove only the toggleable personal item.'].filter(Boolean)).join('\n');
    if (passiveItem) return dedupe([core, identity, `Passive personal item placement: ${passiveItemPlacementText(c)}`].filter(Boolean)).join('\n');
    const item = schemaHasToggleItem(c) ? schemaItemPrompt(c) : '';
    const guard = schemaHasToggleItem(c) ? schemaItemGuard(c) : '';
    return dedupe([core, identity, item, guard].filter(Boolean)).join('\n');
  }
  if (state.itemMode !== 'no_item') return c.d || c.shortPrompt || c.n;
  const base = c.noItemDescription || c.bodyOnlyPrompt || c.shortPrompt || c.d || c.n;
  return stripHandheldItemClauses(base, c);
}
function buildDebugPrompts(c, p, style) {
  const mainItem = schemaMainItemName(c) || c.mainItem || c.visualAnchor || 'the character main item';
  const secondary = schemaCore(c).aura || c.secondaryEffect || 'subtle character-defining secondary effects';
  const noItemMode = state.itemMode === 'no_item';
  const suppressItem = shouldSuppressItemForPose(c, p, state.itemMode);
  const passiveItem = shouldUsePassiveItemPlacement(c, p, state.itemMode);
  let sourcePosePrompt = (suppressItem || passiveItem) && p.noItemPrompt ? p.noItemPrompt : (p.prompt || '');
  let posePrompt = sourcePosePrompt
    .replaceAll('[MAIN_ITEM]', suppressItem ? 'no handheld item' : mainItem)
    .replaceAll('[SECONDARY_EFFECT]', secondary)
    .replaceAll('[CHARACTER]', c.n);
  if (suppressItem) {
    posePrompt = stripItemTermsFromSuppressedText(posePrompt, c)
      .replace(/holding no handheld item|presenting no handheld item|carrying no handheld item|with no handheld item\s*/gi, '');
  }
  const itemInstruction = suppressItem
    ? `Item Mode: no item. Use characterCore only. Ignore legacy handheld-item wording. ${p.noItemRule || 'Both hands are empty. Do not add handheld weapons, props, books, cups, staffs, tools, accessories, instruments, or documents.'}`
    : (passiveItem
      ? `Item Mode: with item, passive placement. Use only this personalItem: ${passiveItemPlacementText(c, p)} Do not use active attack, loose hovering, summoned, or floating weapon placement for this pose.`
      : (schemaHasToggleItem(c)
        ? `Item Mode: with item. Use only this personalItem: ${resolveItemPlacementPrompt(c, p, state.itemMode) || mainItem}. ${schemaItemGuard(c)} ${p.itemPlacementRule || ''} Do not invent unrelated handheld props.`
        : `Item Mode: no toggleable personal item for this character. Keep hands natural and do not invent unrelated handheld props.`));
  const blocks = [
    style.prompt,
    `V11 Character Schema: characterCore is permanent; personalItem is the only toggleable item; promptProfile controls pose priority.`,
    `Character: ${characterPromptForMode(c, p)}`,
    ...figurePromptBlocks(c, p),
    `Selected Pose: ${p.titleTH || p.title}. ${posePrompt}`,
    itemInstruction,
    ...riskGuardBlocks(c, p),
    SAME_CHARACTER_COMPLEXITY_LOCK_POSITIVE,
    'Global V9 Guard: clean readable composition, polished anime fantasy light-novel character art, grouped details only on focal areas, smooth background texture, readable anatomy, clear face and hands, tasteful fully clothed fantasy glamour, no cluttered micro-detail noise.'
  ];
  return { positive: dedupe(blocks).join('\n\n'), negative: buildNegative(c, p) };
}
function buildPrompts(c, p, style) {
  const resolved = resolvePoseForPrompt(c, p, state.itemMode);
  const poseForPrompt = resolved.pose || p;
  if (state.promptMode === 'full_debug') return buildDebugPrompts(c, poseForPrompt, style);
  return buildCompactPrompts(c, poseForPrompt, style);
}
function compactStyleBlock(style) {
  return COMPACT_STYLE_PROMPTS[(style && style.id) || ''] || COMPACT_STYLE_PROMPT;
}
function noItemSpecificTerms(c) {
  const item = schemaItem(c);
  const terms = [
    ...(Array.isArray(item.noItemRemove) ? item.noItemRemove : []),
    item.itemFamily,
    item.name,
    item.description
  ].filter(Boolean);
  const itemBlob = normalize(terms.join('\n'));
  if (item.itemFamily === 'sword' || /katana|sword|blade|sheath|scabbard/.test(itemBlob)) {
    terms.push(
      'katana',
      'sword',
      'blade',
      'sheath',
      'scabbard',
      'crescent katana',
      'silver crescent katana',
      'moonblade'
    );
  }
  if (item.itemFamily === 'bow' || terms.some(term => /bow/i.test(term))) {
    terms.push('bow', 'longbow', 'bowstring', 'arrow');
  }
  if (item.itemFamily === 'gun') terms.push('gun', 'pistol', 'rifle', 'firearm');
  if (item.itemFamily === 'large_weapon') terms.push('weapon', 'greatsword', 'sword', 'blade');
  const ignore = new Set(['holding','wielding','gripping','carrying','brandishing','presenting','using','item','none','other','tool','weapon','silver','gold','black','white','red','blue','green','crystal','crescent']);
  return uniqTextParts(terms.map(term => normalizeSpaces(term).toLowerCase()).filter(term => term.length > 2 && !ignore.has(term)));
}
function suppressedItemAliasNegativeTerms(c) {
  const item = schemaItem(c);
  const terms = noItemSpecificTerms(c);
  const blob = normalize([item.itemFamily, item.name, item.description, ...terms].join('\n'));
  if (/katana|sword|blade|sheath|scabbard/.test(blob)) {
    terms.push(
      'katana',
      'sword',
      'blade',
      'sheath',
      'scabbard',
      'floating sword',
      'floating katana',
      'upside-down sword',
      'summoned blade',
      'spectral sword',
      'weapon-shaped aura',
      'weapon beside body',
      'weapon attached to hip'
    );
  }
  return uniqTextParts(terms.map(term => normalizeSpaces(term).toLowerCase()).filter(Boolean));
}
function posePrefersItemSuppression(pose) {
  const action = normalizedPoseActionType(pose);
  const uiCat = poseUiCategory(pose);
  const blob = poseTextBlob(pose);
  if (pose && pose.noItemSafe === true && pose.requiresItem !== true && pose.noItemPrompt) return true;
  if (['ritual_cast', 'none_only'].includes(action)) return true;
  if (['closeup_bust', 'sitting', 'glamour_showcase', 'camera_driven_glamour'].includes(uiCat) && pose && pose.noItemSafe === true && pose.requiresItem !== true) return true;
  return /\b(spellcasting|spell casting|magic casting|mystic casting|ritual casting|empty hands|empty-hand|open hands|hands stay free|crossed-arms|crossed arms|pointing|hair touch|collarbone hand|throne|seated|bust portrait|close-up|closeup)\b/.test(blob);
}
function shouldSuppressItemForPose(character, pose, itemMode = state.itemMode) {
  if (!schemaHasToggleItem(character)) return false;
  const mode = normalizeSpaces(itemMode).toLowerCase();
  if (normalizedItemModeForCompatibility(mode) === 'none') return true;
  if (mode === 'auto_pose_safe' && posePrefersItemSuppression(pose)) return true;
  return false;
}
function poseNeedsPassiveWeaponPlacement(pose) {
  if (!pose || poseIsActiveAttackPose(pose)) return false;
  const action = normalizedPoseActionType(pose);
  const uiCat = poseUiCategory(pose);
  const blob = poseTextBlob(pose);
  if (['ritual_cast', 'none_only'].includes(action)) return true;
  if (['closeup_bust', 'sitting', 'glamour_showcase', 'camera_driven_glamour'].includes(uiCat)) return true;
  return /\b(spellcasting|spell casting|magic casting|mystic casting|ritual casting|empty hands|empty-hand|open hands|hands stay free|hands busy|busy hands|crossed-arms|crossed arms|pointing|hair touch|collarbone hand|hand-to-chest|hand to chest|throne|seated|kneeling|bust portrait|close-up|closeup)\b/.test(blob);
}
function poseExplicitlySupportsWeaponPlacement(pose) {
  if (!pose) return false;
  if (poseIsActiveAttackPose(pose)) return true;
  const action = normalizedPoseActionType(pose);
  const blob = normalize([
    pose.id,
    pose.title,
    pose.titleTH,
    pose.category,
    pose.uiCategory,
    pose.subcategory,
    pose.itemActionType,
    pose.itemPlacementRule,
    pose.prompt,
    ...(Array.isArray(pose.riskHints) ? pose.riskHints : []),
    ...(Array.isArray(pose.collectionTags) ? pose.collectionTags : [])
  ].join('\n'));
  if (pose.category === 'weapon_action' || pose.uiCategory === 'ranged_weapon') return true;
  if (action === 'battle_presence' || action === 'combat_ready') {
    return /\b(weapon[-\s]?at[-\s]?side|weapon at side|weapon beside|weapon remains|weapon rests|weapon lowered|weapon held low|low[-\s]?ready|side[-\s]?held (?:weapon|sword|katana|blade|hammer|mallet|kanabou)|side[-\s]?slung (?:weapon|sword|katana|blade|hammer|mallet|kanabou)|behind[-\s]?shoulder (?:weapon|sword|katana|blade|hammer|mallet|kanabou)|shoulder rest|strapped (?:weapon|sword|katana|blade|hammer|mallet|kanabou)|sheathed|scabbard|(?:weapon|sword|katana|blade|hammer|mallet|kanabou) beside (?:the )?body|(?:weapon|sword|katana|blade|hammer|mallet|kanabou) along (?:the )?(?:outer )?frame|guard with (?:the )?(?:weapon|sword|katana|blade|hammer|mallet|kanabou)|holding (?:the )?(?:weapon|sword|katana|blade|hammer|mallet|kanabou)|wielding (?:the )?(?:weapon|sword|katana|blade|hammer|mallet|kanabou))\b/.test(blob);
  }
  return /\b(itemplacementrule|held|holding|wielding|lowered|strapped|slung|sheathed|scabbard|beside (?:the )?body|along (?:the )?(?:outer )?frame|waist|hip|back[-\s]?carried|shoulder[-\s]?carried)\b/.test(blob)
    && /\b(weapon|sword|katana|blade|hammer|mallet|kanabou|bow|gun|rifle|spear|axe|scythe|shield|staff)\b/.test(blob);
}
function poseNeedsWeaponFamilyCompatibility(pose) {
  if (!pose || poseIsActiveAttackPose(pose)) return false;
  const action = normalizedPoseActionType(pose);
  const uiCat = poseUiCategory(pose);
  const blob = poseTextBlob(pose);
  if (['passive_weapon_hold', 'battle_presence', 'combat_ready'].includes(action)) return true;
  if (pose.category === 'weapon_action' || ['combat', 'ranged_weapon', 'long_item'].includes(uiCat)) return true;
  return /\b(?:weapon[-\s]?at[-\s]?side|weapon at side|weapon beside|weapon remains|weapon rests|weapon lowered|weapon held low|weapon along|side[-\s]?held weapon|shoulder rest|grounded rest|grounded weapon|sheathed|scabbard|katana|tachi|greatsword|spear|polearm|bow|rifle|dagger|hammer|axe|mace|staff)\b/.test(blob);
}
function weaponPresentationFamilies(presentation) {
  const value = normalizeWeaponFamilyToken(presentation);
  if (!value) return new Set();
  if (/katana|tachi|draw/.test(value)) return new Set(['katana', 'tachi', 'sword']);
  if (/greatsword|grounded|heavy/.test(value)) return new Set(['large_weapon', 'greatsword', 'heavy_blade', 'hammer', 'axe', 'mace']);
  if (/spear|polearm|upright/.test(value)) return new Set(['spear', 'polearm', 'naginata', 'lance', 'trident']);
  if (/bow/.test(value)) return new Set(['bow', 'longbow', 'yumi']);
  if (/rifle|long_gun/.test(value)) return new Set(['rifle', 'long_gun']);
  if (/gun|pistol/.test(value)) return new Set(['gun', 'pistol', 'handgun']);
  if (/dagger|knife/.test(value)) return new Set(['dagger', 'knife']);
  if (/staff/.test(value)) return new Set(['staff', 'wand', 'rod']);
  return new Set();
}
function setsIntersect(a, b) {
  for (const value of a) if (b.has(value)) return true;
  return false;
}
function isGroundedWeaponRestPose(pose) {
  const blob = normalize([pose && pose.weaponPresentation, pose && pose.restStyle, poseTextBlob(pose)].join('\n'));
  return /\b(?:greatsword[_\s-]?grounded[_\s-]?rest|grounded[_\s-]?vertical|heavy[_\s-]?weapon[_\s-]?rest|blade tip grounded|tip planted|tip touching the floor|planted on the ground|grounded weapon|weapon-at-side rest|weapon at side rest)\b/.test(blob);
}
function isPoseWeaponFamilyCompatible(character, pose) {
  if (characterItemRoleForCompatibility(character) !== 'weapon') return true;
  if (poseIsActiveAttackPose(pose)) return poseSupportsItemRole(pose, 'weapon') && !poseAvoidsItemRole(pose, 'weapon');

  const family = getWeaponFamily(character);
  const subtype = getWeaponSubtype(character);
  const aliases = weaponFamilyAliasesFor(family, subtype);
  const avoid = new Set(normalizedWeaponFamilyList(pose && pose.avoidWeaponFamilies));
  if (setsIntersect(aliases, avoid)) return false;

  if (isKatanaLike(family, subtype) && isGroundedWeaponRestPose(pose)) {
    const presentation = normalizeWeaponFamilyToken(pose && pose.weaponPresentation);
    if (!['katana_sheathed_hip', 'katana_low_side_hold', 'katana_ready_guard', 'katana_draw_pose', 'katana_slash_pose'].includes(presentation)) return false;
  }

  const compatible = new Set(normalizedWeaponFamilyList(pose && pose.compatibleWeaponFamilies));
  if (compatible.size) return setsIntersect(aliases, compatible);

  const promptKeys = new Set(poseWeaponFamilyKeys(pose));
  if (promptKeys.size && setsIntersect(aliases, promptKeys)) return true;

  const presentationFamilies = weaponPresentationFamilies(pose && pose.weaponPresentation);
  if (presentationFamilies.size && setsIntersect(aliases, presentationFamilies)) return true;

  return !poseNeedsWeaponFamilyCompatibility(pose);
}
function poseHasFamilySafeWeaponPlacement(character, pose) {
  if (poseIsActiveAttackPose(pose)) return true;
  if (!isPoseWeaponFamilyCompatible(character, pose)) return false;
  const family = getWeaponFamily(character);
  const subtype = getWeaponSubtype(character);
  const aliases = weaponFamilyAliasesFor(family, subtype);
  const promptKeys = new Set(poseWeaponFamilyKeys(pose));
  const presentationFamilies = weaponPresentationFamilies(pose && pose.weaponPresentation);
  return Boolean(
    pose && (pose.weaponHandPlacement === true || pose.explicitItemHold === true) ||
    (promptKeys.size && setsIntersect(aliases, promptKeys)) ||
    (presentationFamilies.size && setsIntersect(aliases, presentationFamilies))
  );
}
function shouldHideWeaponWithItemPose(character, pose, itemMode = state.itemMode) {
  const mode = normalizeSpaces(itemMode).toLowerCase();
  return mode === 'with_item'
    && schemaHasToggleItem(character)
    && characterItemRoleForCompatibility(character) === 'weapon'
    && !poseIsActiveAttackPose(pose)
    && (
      (poseNeedsPassiveWeaponPlacement(pose) && !poseHasFamilySafeWeaponPlacement(character, pose)) ||
      (poseNeedsWeaponFamilyCompatibility(pose) && !poseHasFamilySafeWeaponPlacement(character, pose))
    );
}
function shouldUsePassiveItemPlacement(character, pose, itemMode = state.itemMode) {
  const mode = normalizeSpaces(itemMode).toLowerCase();
  return mode === 'with_item'
    && schemaHasToggleItem(character)
    && characterItemRoleForCompatibility(character) === 'weapon'
    && !poseIsActiveAttackPose(pose)
    && !shouldHideWeaponWithItemPose(character, pose, itemMode)
    && (poseNeedsPassiveWeaponPlacement(pose) || poseHasFamilySafeWeaponPlacement(character, pose));
}
function resolveWeaponPlacementPrompt(c, pose) {
  const item = schemaItem(c);
  const itemName = item.description || item.name || schemaMainItemName(c) || 'the weapon';
  if (poseIsActiveAttackPose(pose)) return item.withItemPrompt || itemName;
  const family = getWeaponFamily(c);
  const subtype = getWeaponSubtype(c);
  const aliases = weaponFamilyAliasesFor(family, subtype);
  const prompts = pose && pose.familySpecificItemPrompts && typeof pose.familySpecificItemPrompts === 'object' ? pose.familySpecificItemPrompts : {};
  for (const key of [subtype, family, ...aliases]) {
    if (prompts[key]) return `${itemName}. ${prompts[key]}`;
  }
  const presentation = normalizeWeaponFamilyToken(pose && pose.weaponPresentation);
  if (isKatanaLike(family, subtype)) {
    if (presentation === 'katana_sheathed_hip') return `${itemName}. The katana/tachi is sheathed at the left hip with the scabbard physically attached to the waist, one visible hand resting near the hilt.`;
    if (presentation === 'katana_low_side_hold') return `${itemName}. One visible hand firmly grips the katana/tachi lowered beside the outer thigh, blade angled diagonally downward, physically connected to the hand.`;
  }
  if (['large_weapon', 'greatsword', 'heavy_blade', 'hammer', 'axe', 'mace'].some(v => aliases.has(v)) && presentation === 'greatsword_grounded_rest') {
    return `${itemName}. The heavy weapon rests beside the body with visible weight, supported by one or both visible hands, with the tip or head naturally grounded.`;
  }
  if (['spear', 'polearm', 'naginata', 'lance', 'trident'].some(v => aliases.has(v)) && presentation === 'spear_upright_rest') {
    return `${itemName}. The spear or polearm is held upright beside the body with one visible hand gripping the shaft, the base naturally grounded or angled beside the frame.`;
  }
  if (aliases.has('bow') && presentation === 'bow_low_side_carry') {
    return `${itemName}. The bow is lowered beside the outer thigh and held in one visible hand, not drawn, not planted like a staff, not crossing the face or torso.`;
  }
  if (aliases.has('rifle') && presentation === 'rifle_low_carry') {
    return `${itemName}. The rifle is carried low across the lower body or slung beside the shoulder, not aiming across the face and not crossing the chest silhouette.`;
  }
  if (aliases.has('dagger') && presentation === 'dagger_low_side_hold') {
    return `${itemName}. The dagger is held low beside the outer thigh in one visible hand, small and clearly separated from the body.`;
  }
  if (poseNeedsWeaponFamilyCompatibility(pose)) return '';
  return item.withItemPrompt || `${itemName}. Keep the weapon physically connected to the visible hand, sheath, belt, strap, or supported contact point; never floating, inverted, or detached.`;
}
function resolveItemPlacementPrompt(character, pose, itemMode = state.itemMode) {
  if (normalizedItemModeForCompatibility(itemMode) === 'none') return '';
  if (!schemaHasToggleItem(character)) return '';
  if (characterItemRoleForCompatibility(character) !== 'weapon') return '';
  return resolveWeaponPlacementPrompt(character, pose);
}
function passiveItemPlacementText(c, pose = null) {
  return resolveWeaponPlacementPrompt(c, pose);
}
function passiveItemPlacementNegativeTerms(c) {
  const terms = ['floating weapon', 'detached weapon', 'duplicate weapon', 'extra weapon', 'weapon not held', 'weapon merging with body'];
  const item = schemaItem(c);
  const blob = normalize([item.itemFamily, item.name, item.description, schemaMainItemName(c)].join('\n'));
  const family = getWeaponFamily(c);
  if (isKatanaLike(c) || /katana|tachi|sword|blade/.test(blob)) {
    terms.push(
      'katana planted in the ground',
      'tachi planted in the ground',
      'grounded katana tip',
      'floating sword',
      'floating katana',
      'upside-down sword',
      'upside-down katana',
      'detached scabbard',
      'summoned blade',
      'spectral sword',
      'weapon-shaped aura'
    );
  }
  if (family === 'bow') terms.push('bow planted like staff', 'bow crossing face', 'bow used as sword');
  if (family === 'gun' || family === 'rifle') terms.push('gun crossing face', 'rifle covering chest', 'extra gun', 'floating gun');
  if (['large_weapon', 'hammer'].includes(family)) terms.push('weightless oversized weapon', 'floating heavy weapon');
  return uniqTextParts(terms);
}
function stripItemTermsFromSuppressedText(raw, c) {
  if (!text(raw).trim()) return '';
  let out = stripHandheldItemClauses(raw, c);
  suppressedItemAliasNegativeTerms(c).forEach(term => {
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    out = out.replace(new RegExp(`\\b${escaped}\\b`, 'gi'), '');
  });
  return normalizeSpaces(out)
    .replace(/\s+([,.;:])/g, '$1')
    .replace(/,\s*,/g, ',')
    .replace(/\bbehind\s+(her|him|them|the)\s*(?:[,.]|$)/gi, 'behind $1')
    .replace(/\bbehind\s+the\s*,/gi, '')
    .replace(/\bbehind\s+the\s+clean\b/gi, 'behind the character, clean')
    .replace(/\bmain item\b/gi, 'body outline')
    .replace(/\bwith\s*(?:[,.]|$)/gi, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}
function stripGenericNoItemLeakTerms(raw) {
  return normalizeSpaces(String(raw || '')
    .replace(/\b(?:weapons?|props?|instruments?|books?|scrolls?|cups?|staffs?|tools?|bows?|guns?|rifles?|spears?|daggers?)\b/gi, 'handheld object')
    .replace(/\bkatana\b|\bblade\b|\bsheath\b|\bscabbard\b/gi, 'handheld object')
    .replace(/(?:handheld object\s*,\s*){1,}handheld object(?:\s*,\s*or\s*handheld object)?/gi, 'handheld object')
    .replace(/\bany handheld object\b/gi, 'a handheld object')
    .replace(/\s{2,}/g, ' '));
}
function stripItemTermsFromNoItemText(raw, c) {
  return stripGenericNoItemLeakTerms(stripItemTermsFromSuppressedText(raw, c));
}
function compactCharacterCoreBlock(c, noItemMode) {
  const core = schemaCore(c);
  const name = (characterSchema(c) && characterSchema(c).name) || c.n;
  const pieces = [
    core.face,
    core.hair,
    core.outfit,
    core.body,
    core.aura,
    core.extra
  ].map(piece => noItemMode ? stripItemTermsFromNoItemText(piece, c) : piece);
  const cleanPieces = uniqTextParts(pieces).filter(Boolean);
  return `Character: ${name}. ${cleanPieces.join(', ')}.`;
}
function compactIdentitySpecifics(c, noItemMode) {
  const special = /mask|horn|wing|tail|halo|ear|scar|tattoo|eyepatch|glasses|veil|crown|headpiece|species|mark/i;
  return uniqTextParts(schemaIdentityLock(c)
    .map(lock => noItemMode ? stripItemTermsFromNoItemText(lock, c) : lock)
    .filter(lock => special.test(lock)))
    .slice(0, 3);
}
function compactIdentityBlock(c, noItemMode) {
  if (!schemaIdentityLock(c).length) return '';
  const specifics = compactIdentitySpecifics(c, noItemMode);
  const extra = specifics.length ? ` Include locked specifics: ${specifics.join('; ')}.` : '';
  return `Identity lock: preserve hairstyle, hair length, hair color, face, outfit/armor, body silhouette, aura, and species traits exactly. Changing or removing the item must not redesign the character.${extra}`;
}
function isFemaleFigureContext(c, p) {
  if (inferGender(c) !== 'female') return false;
  const blob = normalize([
    schemaPresentationMode(c),
    c && c.presentationMode,
    p && p.title,
    p && p.subcategory,
    p && p.category,
    p && p.uiCategory,
    ...((p && p.collectionTags) || [])
  ].join('\n'));
  return isGlamourShowcasePose(p) || /glamour|royal|mystic|combat|ceremonial|queen|goddess|villainess|heroine|lifestyle/.test(blob);
}
function compactFigureBlock(c, p) {
  const gender = inferGender(c);
  const explicit = schemaProfile(c).figurePreset || c.figurePreset || c.bodySignature || c.bodyType || '';
  const femaleContext = isFemaleFigureContext(c, p);
  if (gender === 'male') {
    return 'Figure emphasis: readable masculine silhouette and polished character-card appeal.';
  }
  if (gender === 'female' && (explicit === 'glamour_voluptuous' || femaleContext)) {
    const parts = ['Figure emphasis: attractive adult feminine fantasy proportions, elegant waist, natural curves, readable silhouette, polished character-card appeal.'];
    const meta = poseSilhouetteMeta(p);
    if (explicit === 'glamour_voluptuous' || isGlamourShowcasePose(p) || inferRole(c) === 'combat' || meta.highTorsoRotation) {
      parts.push('Preserve clothed full-bust shape, fitted waist, soft curvy hips, and elegant hourglass line under the outfit.');
    }
    return parts.join(' ');
  }
  if (gender === 'female') {
    return 'Figure emphasis: clean readable adult feminine silhouette and polished character-card appeal.';
  }
  return 'Figure emphasis: clean readable character silhouette and polished character-card appeal.';
}
function poseFramingText(p) {
  const framing = (p && p.framing) || '';
  return {
    full_body: 'full-body',
    seated_full_body: 'seated full-body',
    thigh_up: 'thigh-up',
    knee_up: 'knee-up',
    waist_up: 'waist-up',
    bust: 'bust portrait',
    closeup: 'close-up portrait'
  }[framing] || (framing ? framing.replace(/_/g, '-') : 'character-card');
}
function rawPosePromptForMode(c, p, noItemMode) {
  const suppressItem = noItemMode || shouldSuppressItemForPose(c, p, state.itemMode);
  const mainItem = schemaMainItemName(c) || c.mainItem || c.visualAnchor || 'the character main item';
  const secondary = schemaCore(c).aura || c.secondaryEffect || 'subtle character-defining secondary effects';
  let raw = (p && p.promptSnippet ? p.promptSnippet : (suppressItem && p.noItemPrompt ? p.noItemPrompt : (p.prompt || '')))
    .replaceAll('[MAIN_ITEM]', suppressItem ? 'no handheld item' : mainItem)
    .replaceAll('[SECONDARY_EFFECT]', secondary)
    .replaceAll('[CHARACTER]', c.n);
  if (suppressItem) raw = noItemMode ? stripItemTermsFromNoItemText(raw, c) : stripItemTermsFromSuppressedText(raw, c);
  return normalizeSpaces(raw);
}
function compactCameraGlamourRawPose(raw) {
  return normalizeSpaces(text(raw)
    .split(/Camera glamour pose core:/i)[0]
    .replace(/\bOriginal aura\b[^.]+\./gi, '')
    .replace(/\bBoth hands are empty\b[^.]+\./gi, '')
    .replace(/\bNo passive placement\b[^.]*\./gi, '')
    .replace(/\bFigure emphasis:\b[^.]+\./gi, '')
    .replace(/\boriginal aura\b/gi, 'aura')
    .replace(/\s{2,}/g, ' '));
}
function compactPoseSentence(sentence) {
  let s = normalizeSpaces(sentence);
  if (!s) return '';
  if (/^if a selected object is included/i.test(s)) return '';
  if (/^preserve a full bust silhouette/i.test(s)) return '';
  if (/^fully clothed/i.test(s)) return '';
  if (/must not flatten|erase the waist|extreme side twisting|both arms crossing/i.test(s)) return '';
  s = s
    .replace(/,?\s*(?:without|while not|and never)\s+(?:covering|hiding|blocking)[^.]+/i, '')
    .replace(/,?\s*keeping the face[^.]+readable/i, '')
    .replace(/,?\s*keeping the face[^.]+clear/i, '')
    .replace(/,?\s*keep(?:ing)? the face[^.]+readable/i, '')
    .replace(/selected object|selected equipment/gi, 'item')
    .replace(/\s{2,}/g, ' ')
    .trim();
  if (/^(do not|never|avoid)\b/i.test(s)) return '';
  return s;
}
function buildCompactPosePrompt(c, p, noItemMode) {
  const raw = rawPosePromptForMode(c, p, noItemMode);
  const title = p.titleTH || p.title || 'Selected pose';
  const sentences = uniqTextParts(raw.split(/(?<=[.!?])\s+|\n+|;\s*/).map(compactPoseSentence)).slice(0, 3);
  const intent = sentences.join(' ');
  const poseIntro = `${title}, ${poseFramingText(p)} pose`;
  return normalizeSpaces(intent ? `${poseIntro}. ${intent}` : poseIntro + '.');
}
function compactItemPlacement(c) {
  const raw = schemaItemPrompt(c);
  const patterns = [
    /positioned\s+[^,.]+(?:frame|body)/i,
    /(?:near|at)\s+waist level(?:\s+or\s+beside\s+the\s+body)?/i,
    /(?:lowered|angled|placed|held)\s+[^,.]+(?:body|frame|side|waist)/i,
    /beside\s+the\s+body\s+or\s+along\s+the\s+side\s+of\s+the\s+frame/i
  ];
  for (const pattern of patterns) {
    const match = raw.match(pattern);
    if (match) return normalizeSpaces(match[0]);
  }
  return '';
}
function compactItemBlock(c, noItemMode, passiveItem = false, pose = null) {
  if (noItemMode) {
    if (poseUiCategory(pose) === 'camera_driven_glamour' && pose && pose.noItemSafe === true && pose.requiresItem !== true && pose.itemActionType === 'none') {
      return schemaHasToggleItem(c)
        ? 'Item mode: hands empty; use characterCore only for this camera pose.'
        : 'Item mode: hands empty; keep natural relaxed fingers for this camera pose.';
    }
    return schemaHasToggleItem(c)
      ? "Item mode: no item. Keep hands empty; do not include the character's personal item or unrelated handheld objects."
      : 'Item mode: no item. This character has no toggleable personal item; keep hands natural and do not invent handheld objects.';
  }
  if (!schemaHasToggleItem(c)) {
    return 'Item mode: no toggleable personal item for this character. Keep hands natural and do not invent unrelated handheld props.';
  }
  if (passiveItem) {
    return `Item mode: with item, passive placement. Use only this personal item: ${passiveItemPlacementText(c, pose)} Do not invent unrelated handheld props.`;
  }
  const item = schemaItem(c);
  const itemText = item.description || item.name || schemaMainItemName(c);
  const resolvedPlacement = resolveItemPlacementPrompt(c, pose, state.itemMode);
  if (resolvedPlacement) {
    return `Item mode: with item. Use only this personal item: ${resolvedPlacement} Do not invent unrelated handheld props.`;
  }
  const placement = compactItemPlacement(c);
  const placementText = placement ? `, ${placement}` : '';
  return `Item mode: with item. Use only this personal item: ${itemText}${placementText}. Do not invent unrelated handheld props.`;
}
function compactList(items) {
  const clean = items.filter(Boolean);
  if (clean.length <= 1) return clean.join('');
  if (clean.length === 2) return clean.join(' and ');
  return `${clean.slice(0, -1).join(', ')}, and ${clean[clean.length - 1]}`;
}
function hasEffectSafetyContext(c, p) {
  const tags = effectiveRiskTagsForMode(c);
  return tags.has('aura_effect') || tags.has('floating_props') || tags.has('thread_effect') || !!(schemaCore(c).aura || c.secondaryEffect) || /magic|void|dimension|curse|blood|time|memory|spark|aura|halo|effect/i.test(p && p.prompt || '');
}
function compactGuardBlock(c, p, noItemMode, passiveItem = false) {
  const tags = effectiveRiskTagsForMode(c);
  const withItem = !noItemMode && schemaHasToggleItem(c);
  const hasEffects = hasEffectSafetyContext(c, p);
  const readable = ['face', 'hair', 'upper body', 'hands', 'waist line', 'silhouette'];
  if (hasEffects) readable.push('effects');
  if (withItem) readable.push('main item');
  const blockers = noItemMode ? ['arms', 'foreground elements'] : ['weapons', 'props', 'arms'];
  if (hasEffects) blockers.push('effects');
  const parts = [
    `Guard: keep ${compactList(readable)} readable.`,
    `Do not let ${compactList(blockers)} cover the face, chest silhouette, waist, or body outline.`
  ];
  if (withItem) parts.push('Keep physical items solid, continuous, and separated from the body.');
  if (passiveItem) parts.push('Passive weapon placement lock: weapon stays attached to the body or scabbard/strap; never floating, inverted, summoned, spectral, or detached beside the body.');
  if (withItem && tags.has('ranged_weapon')) parts.push('Ranged items stay lowered, side-held, or beside the body unless the selected pose explicitly requires aiming.');
  if (hasEffects) {
    parts.push(withItem
      ? 'Effects stay behind or beside the character and never replace hands, face, hairline, silhouette, or item.'
      : 'Effects stay behind or beside the character and never replace hands, face, hairline, silhouette, or body outline.');
  }
  const nonWeaponGuard = nonWeaponItemPositiveGuard(c);
  if (nonWeaponGuard) parts.push(nonWeaponGuard);
  const detailLimiter = detailClutterLimiterBlock(c);
  if (detailLimiter) parts.push(detailLimiter);
  return parts.join(' ');
}
function buildCompactPrompts(c, p, style) {
  const noItemMode = state.itemMode === 'no_item';
  const suppressItem = shouldSuppressItemForPose(c, p, state.itemMode);
  const passiveItem = shouldUsePassiveItemPlacement(c, p, state.itemMode);
  const blocks = [
    compactStyleBlock(style),
    compactCharacterCoreBlock(c, noItemMode || suppressItem),
    compactIdentityBlock(c, noItemMode || suppressItem),
    compactFigureBlock(c, p),
    `Selected pose: ${buildCompactPosePrompt(c, p, noItemMode || suppressItem || passiveItem)}`,
    compactItemBlock(c, noItemMode || suppressItem, passiveItem, p),
    compactGuardBlock(c, p, noItemMode || suppressItem, passiveItem),
    SAME_CHARACTER_COMPLEXITY_LOCK_POSITIVE,
    'Global quality: polished fully clothed fantasy character-card composition, readable anatomy, clean large shapes, no cluttered micro-detail noise.'
  ];
  return { positive: compactJoinPromptBlocks(blocks), negative: buildCompactNegative(c, p) };
}
function riskGuardBlocks(c, p) {
  const tags = effectiveRiskTagsForMode(c);
  const hints = new Set(p.riskHints || []);
  const blocks = [];
  if (isCloseupPose(p) || hints.has('closeup')) blocks.push('Close-up safety: hands and item must not block eyes, mouth, face, neck, or throat; keep the item below chin level or beside the face with clear negative space.');
  if (hasLargeItemRisk(tags) || tags.has('segmented_weapon') || hints.has('weapon_or_long_item')) blocks.push('Large item safety: keep the main item physically solid, continuous, readable, and separated from face, neck, torso, clothing, hair, and effects; never make it look like it pierces the body or floats as loose fragments.');
  if (tags.has('ranged_weapon')) blocks.push('Ranged weapon safety: use relaxed ready, side-held, low-ready, side-slung, or behind-shoulder placement unless the selected pose explicitly says otherwise; never aim across the face, mouth, neck, chest, or directly into camera.');
  if (tags.has('dual_item') || tags.has('high_motion')) blocks.push('Dual/high-motion safety: keep both hands readable, wrists visible, elbows believable, and paired items separated; avoid hidden joints and extreme twist.');
  if (tags.has('energy_blade') || tags.has('broken_weapon')) blocks.push('Energy blade safety: the blade remains rigid, sharp-edged, continuous, and visually separate from slash arcs, aura, sparks, and background effects.');
  if (tags.has('floating_props') || tags.has('aura_effect') || /magic|void|dimension|curse|blood|time|memory/.test([...tags].join('\n'))) blocks.push('Effect safety: effects stay behind or beside the character and never replace the physical item, hands, face, hairline, or body silhouette.');
  const preset = figurePreset(c);
  if (preset) blocks.push('Body-silhouette safety: pose guard, item guard, weapon guard, and effect guard must not erase the character figure signature; keep the clothed full-bust shape, fitted waist, curvy hips, and elegant feminine silhouette readable.');
  if (state.itemMode === 'no_item') blocks.push('No-item showcase mode: ignore the character default handheld item and do not apply bow/gun/large-weapon pose restrictions; no unwanted weapon, prop, tool, cup, book, staff, or accessory in the hands.');
  const nonWeaponGuard = nonWeaponItemPositiveGuard(c);
  if (nonWeaponGuard) blocks.push(nonWeaponGuard);
  const detailLimiter = detailClutterLimiterBlock(c);
  if (detailLimiter) blocks.push(detailLimiter);
  return blocks;
}
function buildNegative(c, p) {
  const tags = effectiveRiskTagsForMode(c);
  const neg = [BASE_NEGATIVE, SAME_CHARACTER_COMPLEXITY_LOCK_NEGATIVE, ...((p && p.negativeAdditions) || []), ...figureNegativeTerms(c, p), ...extraWeaponSuppressionTerms(c, p), ...nonWeaponItemSafetyTerms(c)];
  if (isCloseupPose(p)) neg.push('hand covering eyes, hand covering mouth, weapon across neck, item touching lips, face obscured');
  if (hasLargeItemRisk(tags)) neg.push('weightless oversized item, object piercing neck, object piercing torso, object crossing throat, giant item covering face');
  if (tags.has('ranged_weapon')) neg.push('weapon covering face, impossible gun grip, bowstring fused with fingers, aiming directly into camera');
  if (tags.has('dual_item')) neg.push('merged paired items, missing second item, extra arms, duplicated hands');
  if (tags.has('segmented_weapon')) neg.push('ribbon weapon, rope weapon, loose chain fragments, floating broken blade pieces');
  if (tags.has('aura_effect') || tags.has('floating_props')) neg.push('effects covering face, aura replacing item, floating clutter over hands');
  if (shouldSuppressItemForPose(c, p, state.itemMode)) {
    const removeWords = (schemaItem(c).noItemRemove || []).join(', ');
    neg.push('unwanted extra weapon, unwanted extra prop, unwanted item in hand, random staff, random sword');
    if (removeWords) neg.push(removeWords);
    neg.push(suppressedItemAliasNegativeTerms(c).join(', '));
  }
  if (shouldUsePassiveItemPlacement(c, p, state.itemMode)) {
    neg.push(passiveItemPlacementNegativeTerms(c).join(', '));
  }
  return dedupe(neg.join(', ').split(',')).join(', ');
}
function buildCompactNegative(c, p) {
  const tags = effectiveRiskTagsForMode(c);
  const poseNegativeAdditions = (p && p.compactNegativeAdditions)
    ? p.compactNegativeAdditions
    : (poseUiCategory(p) === 'camera_driven_glamour' ? V12_CAMERA_GLAMOUR_PROMPT_PROFILE.compactNegativeAdditions : ((p && p.negativeAdditions) || []));
  const terms = [
    BASE_NEGATIVE,
    SAME_CHARACTER_COMPLEXITY_LOCK_NEGATIVE,
    ...poseNegativeAdditions,
    ...extraWeaponSuppressionTerms(c, p),
    ...nonWeaponItemSafetyTerms(c)
  ];
  if (isFemaleFigureContext(c, p) || figurePreset(c)) {
    terms.push('flattened chest, boxy torso, erased waist curve, arms hiding bust silhouette, shapeless waist, overly flat straight body, body hidden by arms, torso flattened by rotation');
  }
  if (state.itemMode !== 'no_item' && (hasLargeItemRisk(tags) || schemaItemRole(c) === 'weapon')) {
    terms.push('weightless oversized item, object piercing neck, object piercing torso, object crossing throat, giant item covering face, weapon covering chest silhouette');
  }
  if (hasEffectSafetyContext(c, p)) {
    terms.push('effects covering face, aura replacing item, floating clutter over hands');
  }
  if (isCloseupPose(p)) {
    terms.push('hand covering eyes, hand covering mouth, item touching lips, face obscured');
  }
  if (shouldSuppressItemForPose(c, p, state.itemMode)) {
    terms.push('unwanted extra weapon, unwanted extra prop, unwanted item in hand, random staff, random sword');
    terms.push(suppressedItemAliasNegativeTerms(c).join(', '));
  }
  if (shouldUsePassiveItemPlacement(c, p, state.itemMode)) {
    terms.push(passiveItemPlacementNegativeTerms(c).join(', '));
  }
  return uniqCommaTerms(terms).join(', ');
}
function promptWarnings(c, p) {
  const tags = effectiveRiskTagsForMode(c);
  const out = [];
  const compatibility = getPoseItemCompatibility(p, c, state.itemMode);
  if (!compatibility.compatible) out.push(isFullDebugMode() ? `pose-item conflict: ${compatibility.reason}` : 'ระบบปรับท่าให้เข้ากับไอเท็มแล้ว');
  if (isCloseupPose(p) && [...tags].some(t => ['large_weapon','large_ritual_item','large_tool_item','oversized_prop','oversized_item','segmented_weapon','ranged_weapon'].includes(t))) out.push('close-up กับอาวุธเสี่ยงสูง');
  if (p.intensity === 'bold' && [...tags].some(t => ['large_weapon','large_ritual_item','large_tool_item','oversized_prop','oversized_item','dual_item','segmented_weapon','high_motion','ranged_weapon'].includes(t))) out.push('Bold pose กับตัวเสี่ยงสูง');
  return out;
}
function addHistory() {
  const c = selectedChar(), p = selectedPose(), style = selectedStyle();
  if (!c || !p) return;
  const prompts = buildPrompts(c, p, style);
  history = [{charId:c.id, poseId:p.id, charName:c.n, poseTitle:p.title, styleId:style.id, itemMode:state.itemMode, positive:prompts.positive, negative:prompts.negative, timestamp:new Date().toISOString()}, ...history.filter(h => !(String(h.charId) === String(c.id) && String(h.poseId) === String(p.id) && h.itemMode === state.itemMode))].slice(0,10);
  saveHistory(); renderHistory();
}
function renderHistory() {
  const box = document.getElementById('historyList');
  box.innerHTML = history.map((h, idx) => `<div class="history-card"><div class="card-title">${escapeHtml(h.charName)}</div><div class="card-text">${escapeHtml(h.poseTitle)} · ${escapeHtml(h.itemMode)}</div><div class="badge-row"><button class="ghost-btn" type="button" data-action="copy-history" data-history-index="${idx}" data-copy-mode="positive">Positive</button><button class="ghost-btn" type="button" data-action="copy-history" data-history-index="${idx}" data-copy-mode="both">Both</button></div></div>`).join('\n') || '<p class="card-text">ยังไม่มีประวัติ</p>';
}
function copyHistory(idx, mode) {
  const h = history[idx];
  if (!h) return;
  const txt = mode === 'positive' ? h.positive : `Positive Prompt:\n${h.positive}\n\nNegative Prompt:\n${h.negative}`;
  copyText(txt);
}

function promptOutput(mode = 'positive') {
  const c = selectedChar(), p = selectedPose(), s = selectedStyle();
  if (!c || !p) return null;
  const out = buildPrompts(c, p, s);
  if (mode === 'negative') return out.negative;
  if (mode === 'both') return `Positive Prompt:\n${out.positive}\n\nNegative Prompt:\n${out.negative}`;
  return out.positive;
}
function copyPrompt(mode = 'positive', opts = {}) {
  const c = selectedChar(), p = selectedPose();
  if (!c) { showToast('เลือกตัวละครก่อน'); return; }
  if (!p) { showToast('เลือกท่าก่อน'); return; }
  const txt = promptOutput(mode);
  if (!txt) { showToast('Prompt ยังไม่พร้อม'); return; }
  addHistory();
  copyText(txt, mode === 'both' ? 'คัดลอก Positive + Negative แล้ว' : (mode === 'negative' ? 'คัดลอก Negative แล้ว' : 'คัดลอก Positive แล้ว'));
  if (opts.returnToPoses) {
    state.step = 2;
    render();
    scrollToStep(2);
  }
}
function copyPositivePrompt(opts = {}) { copyPrompt('positive', opts); }
function copyNegativePrompt(opts = {}) { copyPrompt('negative', opts); }
function copyBothPrompts(opts = {}) { copyPrompt('both', opts); }
function quickCopyPositive() { copyPositivePrompt(); }
function quickCopyNegative() { copyNegativePrompt(); }
function quickCopyBoth() { copyBothPrompts(); }
function quickCopyPositiveAndReturn() { copyPositivePrompt({ returnToPoses: true }); }
function quickCopyBothAndReturn() { copyBothPrompts({ returnToPoses: true }); }
function renderQuickCopyPanel() {
  const panel = document.getElementById('step2QuickCopy');
  if (!panel) return;
  const c = selectedChar();
  const p = selectedPose();
  const ready = Boolean(c && p);
  panel.classList.toggle('hidden', !ready);
  const meta = document.getElementById('step2QuickCopyMeta');
  if (meta && ready) {
    meta.textContent = `${c.n} · ${p.titleTH || p.title} · ${state.itemMode === 'with_item' ? 'ถือของประจำตัว' : 'ไม่ถืออะไร'}`;
  } else if (meta) {
    meta.textContent = 'เลือกท่าก่อน แล้วกดคัดลอกได้จากตรงนี้ทันที';
  }
}

function renderMobileStickyCopyBar() {
  const bar = document.getElementById('mobileCopyBar');
  if (!bar) return;
  const c = selectedChar();
  const p = selectedPose();
  const ready = Boolean(c && p);
  bar.classList.toggle('show', ready);
  if (!ready) return;
  const title = document.getElementById('mobileCopyTitle');
  const sub = document.getElementById('mobileCopySub');
  if (title) title.textContent = `${c.n} · ${p.titleTH || p.title}`;
  if (sub) sub.textContent = `${state.itemMode === 'with_item' ? 'ถือของประจำตัว' : 'ไม่ถืออะไร'} · ${selectedStyle().name}`;
}
function isFullDebugMode() {
  return state.promptMode === 'full_debug';
}
function floatingCopyStatus(c, p, promptReady) {
  if (!c) return 'เลือกตัวละครก่อน';
  if (!p) return 'เลือกท่าก่อน';
  return promptReady ? 'พร้อมคัดลอก' : 'Prompt ยังไม่พร้อม';
}
function setButtonReady(btn, ready, message) {
  if (!btn) return;
  btn.disabled = !ready;
  btn.setAttribute('aria-disabled', String(!ready));
  btn.title = ready ? '' : message;
}
function updateFloatingCopyPanel() {
  const panel = document.getElementById('desktopFloatingCopyPanel');
  const collapsedButton = document.getElementById('floatingCopyCollapsedButton');
  if (!panel || !collapsedButton) return;
  const c = selectedChar();
  const p = selectedPose();
  const promptReady = Boolean(c && p && promptOutput('positive'));
  const status = floatingCopyStatus(c, p, promptReady);
  panel.classList.toggle('is-collapsed', Boolean(state.floatingCopyCollapsed));
  collapsedButton.classList.toggle('show', Boolean(state.floatingCopyCollapsed));
  collapsedButton.setAttribute('aria-expanded', String(!state.floatingCopyCollapsed));

  const title = document.getElementById('floatingCopyTitle');
  const helper = document.getElementById('floatingCopyHelper');
  const character = document.getElementById('floatingCopyCharacter');
  const pose = document.getElementById('floatingCopyPose');
  const mode = document.getElementById('floatingCopyMode');
  const toggle = document.getElementById('floatingCopyToggle');
  if (title) title.textContent = promptReady ? 'พร้อมคัดลอก' : status;
  if (helper) {
    helper.textContent = status;
    helper.classList.toggle('ready', promptReady);
  }
  if (character) character.textContent = c ? c.n : '—';
  if (pose) pose.textContent = p ? (p.titleTH || p.title) : '—';
  if (mode) mode.textContent = c && p ? `${state.itemMode === 'with_item' ? 'ถือของประจำตัว' : 'ไม่ถืออะไร'} · ${selectedStyle().name}` : '—';
  if (toggle) {
    toggle.textContent = state.floatingCopyCollapsed ? '+' : '−';
    toggle.setAttribute('aria-label', state.floatingCopyCollapsed ? 'เปิดแผง copy' : 'ย่อแผง copy');
    toggle.setAttribute('aria-expanded', String(!state.floatingCopyCollapsed));
  }
  ['floatingCopyPositive','floatingCopyNegative','floatingCopyBoth','floatingViewPrompt'].forEach(id => {
    setButtonReady(document.getElementById(id), promptReady, status);
  });
}
function toggleFloatingCopyPanel() {
  state.floatingCopyCollapsed = !state.floatingCopyCollapsed;
  updateFloatingCopyPanel();
  saveState();
}
function copyPositive() { copyPositivePrompt(); }
function copyNegative() { copyNegativePrompt(); }
function copyBoth() { copyBothPrompts(); }
function copyText(txt, successMessage = 'Copied!') {
  const fallbackCopy = () => {
    const ta = document.createElement('textarea');
    ta.value = txt;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
    showToast(successMessage);
  };
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(txt).then(() => showToast(successMessage)).catch(fallbackCopy);
  } else {
    fallbackCopy();
  }
}
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(showToast.timer); showToast.timer = setTimeout(() => t.classList.remove('show'), 1500);
}
function escapeHtml(str) {
  return text(str).replace(/[&<>"]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[s]));
}
function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
function handleStaticControlClick(event) {
  const control = event.target.closest('[data-action]');
  if (!control || !document.contains(control)) return;
  if (control.disabled || control.getAttribute('aria-disabled') === 'true') return;
  event.preventDefault();
  const action = control.dataset.action;
  switch (action) {
    case 'select-character':
      selectCharacter(control.dataset.characterId);
      break;
    case 'select-pose':
      selectPose(control.dataset.poseId);
      break;
    case 'go-step':
      goStep(Number(control.dataset.step));
      break;
    case 'view-full-prompt':
      goStep(3);
      break;
    case 'clear-character-filters':
      clearCharacterFilters();
      break;
    case 'set-universe':
      setUniverse(Number(control.dataset.universe));
      break;
    case 'set-pose-view':
      setPoseView(control.dataset.poseView);
      break;
    case 'set-item-mode':
      setItemMode(control.dataset.itemMode);
      break;
    case 'set-prompt-mode':
      setPromptMode(control.dataset.promptMode);
      break;
    case 'set-prompt-tab':
      setPromptTab(control.dataset.promptTab);
      break;
    case 'set-style':
      setStyle(control.dataset.styleId);
      break;
    case 'suggest-pose':
      suggestPose();
      break;
    case 'suggest-pose-and-view':
      suggestPose();
      goStep(3);
      break;
    case 'copy-positive':
      copyPositivePrompt();
      break;
    case 'copy-negative':
      copyNegativePrompt();
      break;
    case 'copy-both':
      copyBothPrompts();
      break;
    case 'copy-positive-return':
      copyPositivePrompt({ returnToPoses: true });
      break;
    case 'copy-both-return':
      copyBothPrompts({ returnToPoses: true });
      break;
    case 'copy-history':
      copyHistory(Number(control.dataset.historyIndex), control.dataset.copyMode || 'positive');
      break;
    case 'load-more-characters':
      loadMoreCharacters();
      break;
    case 'load-more-poses':
      loadMorePoses();
      break;
    case 'toggle-floating-copy-panel':
      toggleFloatingCopyPanel();
      break;
    default:
      break;
  }
}
function bindStaticControls() {
  if (staticControlsBound) return;
  staticControlsBound = true;
  document.addEventListener('click', handleStaticControlClick);
  document.getElementById('factionFilter')?.addEventListener('change', event => setFilter('faction', event.target.value));
  document.getElementById('genderFilter')?.addEventListener('change', event => setFilter('gender', event.target.value));
  document.getElementById('roleFilter')?.addEventListener('change', event => setFilter('role', event.target.value));
  document.getElementById('characterSearch')?.addEventListener('input', event => setFilterDebounced('searchChar', event.target.value));
  document.getElementById('poseCategoryFilter')?.addEventListener('change', event => setFilter('poseCategory', event.target.value));
  document.getElementById('poseSearch')?.addEventListener('input', event => setFilterDebounced('searchPose', event.target.value));
}
function init() {
  bindStaticControls();
  loadState();
  if (!activeStyles.some(s => s.id === state.styleId)) state.styleId = activeStyles[0].id;
  state.universe = 0;
  if (!state.faction || typeof state.faction !== 'string') state.faction = 'all';
  if (!PROMPT_MODES.has(state.promptMode)) state.promptMode = 'compact';
  render();
}

if (typeof window !== "undefined") {
  window.selectCharacter = selectCharacter;
  window.selectPose = selectPose;
  window.goStep = goStep;
  window.setUniverse = setUniverse;
  window.setFilter = setFilter;
  window.setFilterDebounced = setFilterDebounced;
  window.clearCharacterFilters = clearCharacterFilters;
  window.loadMoreCharacters = loadMoreCharacters;
  window.loadMorePoses = loadMorePoses;
  window.copyPositivePrompt = copyPositivePrompt;
  window.copyNegativePrompt = copyNegativePrompt;
  window.copyBothPrompts = copyBothPrompts;
  window.updateFloatingCopyPanel = updateFloatingCopyPanel;
  window.updateStepPills = updateStepPills;
}

document.addEventListener('DOMContentLoaded', init);


