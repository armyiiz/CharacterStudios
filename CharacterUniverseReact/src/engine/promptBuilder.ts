import { inferGender, schemaHasToggleItem } from './characterUtils';

export const COMPACT_STYLE_PROMPT = 'Masterpiece, best quality, semi-realistic anime illustration, Korean webtoon style, otome game character card art, polished digital painting, elegant detailed face, glossy eyes, smooth voluminous hair, clean readable design, cinematic dark luxury atmosphere, dramatic moody lighting, shallow depth of field.';

export const COMPACT_STYLE_PROMPTS: Record<string, string> = {
  dark_luxury: COMPACT_STYLE_PROMPT,
  cinematic: 'Masterpiece, best quality, semi-realistic anime illustration, polished digital painting, elegant detailed face, glossy eyes, smooth voluminous hair, clean readable design, cinematic daylight, vivid colors, atmospheric depth of field.',
  pastel: 'Masterpiece, best quality, semi-realistic anime illustration, soft painterly rendering, elegant detailed face, glossy eyes, smooth voluminous hair, clean readable design, gentle pastel colors, dreamy atmosphere, beautiful lighting.',
  vivid_sky: 'Masterpiece, best quality, cinematic anime movie style, polished digital painting, elegant detailed face, glossy eyes, smooth voluminous hair, clean readable design, breathtaking vivid sky, clear bright lighting, vibrant blue tones.'
};

export const STYLE_META: Record<string, { name: string; icon: string }> = {
  dark_luxury: { name: 'Dark Luxury', icon: '🌙' },
  cinematic: { name: 'Cinematic', icon: '🎬' },
  pastel: { name: 'Pastel Dream', icon: '🌸' },
  vivid_sky: { name: 'Vivid Sky', icon: '☁️' }
};

const BASE_NEGATIVE = 'lowres, bad anatomy, bad hands, extra fingers, fused fingers, missing fingers, deformed limbs, extra limbs, cloned face, ugly, blurry, out of frame, worst quality, watermark, signature, text';
const SAME_CHARACTER_COMPLEXITY_LOCK_POSITIVE = 'Complexity lock: same design, lower clutter. No new embellishment, upgrades, or detail density. Keep identity jewelry, trims, and motifs; do not add new ones. Use clean large shapes, simple background, soft low-particle effects.';
const SAME_CHARACTER_COMPLEXITY_LOCK_NEGATIVE = 'visual clutter, detail escalation, ornate upgrade, added ornaments, added trims, new decorative clutter, busy background, dense particles, noisy texture, chaotic silhouette, unreadable silhouette';

function compactStyleBlock(styleId: string): string {
  return COMPACT_STYLE_PROMPTS[styleId] || COMPACT_STYLE_PROMPTS['dark_luxury'];
}

function compactCharacterCore(c: any, suppressItem: boolean): string {
  const core = c?.characterCore || {};
  const name = c?.name || c?.title || '';
  const parts = [core.face, core.hair, core.body].filter(Boolean);
  const intro = parts.join(', ');
  const blocks = [`Character: ${name}${intro ? `, ${intro}` : ''}.`];
  const outfit = suppressItem ? stripItemTerms(core.outfit, c) : core.outfit;
  if (outfit) blocks.push(`Outfit: ${outfit}.`);
  const aura = core.aura;
  if (aura) blocks.push(`Aura: ${aura}.`);
  const extra = core.extra;
  if (extra) blocks.push(`Extra: ${extra}.`);
  return blocks.join(' ');
}

function compactIdentityBlock(c: any): string {
  const locks = c?.characterCore?.identityLock;
  if (!Array.isArray(locks) || !locks.length) return '';
  return 'Identity lock: preserve same face, hairstyle, hair color, outfit design, body silhouette, aura, species traits, and role; no redesign or complexity increase.';
}

function compactFigureBlock(c: any): string {
  const gender = inferGender(c);
  if (gender === 'male') return 'Figure emphasis: attractive adult masculine presence, confident posture, sharp readable silhouette, polished character-card appeal.';
  if (gender === 'female') return 'Figure emphasis: attractive adult feminine glamour, confident sensual posture, alluring gaze, elegant S-curve, waist-to-hip line, readable clothed curves. Preserve clothed hourglass line and premium character-card allure.';
  return 'Figure emphasis: clean readable character silhouette and polished character-card appeal.';
}

function poseFramingText(p: any): string {
  return ({ full_body: 'full-body', seated_full_body: 'seated full-body', thigh_up: 'thigh-up', knee_up: 'knee-up', waist_up: 'waist-up', bust: 'bust portrait', closeup: 'close-up portrait' } as any)[p?.framing] || 'character-card';
}

function buildCompactPosePrompt(c: any, p: any, suppressItem: boolean): string {
  let raw = suppressItem && p?.noItemPrompt ? p.noItemPrompt : (p?.prompt || '');
  const mainItem = c?.personalItem?.name || c?.personalItem?.description || 'the character main item';
  const secondary = c?.characterCore?.aura || 'subtle character-defining secondary effects';
  raw = raw.replaceAll('[MAIN_ITEM]', suppressItem ? 'no handheld item' : mainItem)
    .replaceAll('[SECONDARY_EFFECT]', secondary)
    .replaceAll('[CHARACTER]', c?.name || '');
  const sentences = raw.split(/(?<=[.!?])\s+|\n+|;\s*/).filter(Boolean).slice(0, 2);
  const title = p?.title || p?.titleTH || 'Selected pose';
  const intent = sentences.join(' ');
  return `${poseFramingText(p)} ${title}${intent ? `. ${intent}` : '.'}`;
}

function compactItemBlock(c: any, suppressItem: boolean): string {
  if (suppressItem) {
    if (c?.personalItem?.itemRole === 'wearable_equipment') return 'Item mode: no handheld item. Keep hands free. Worn equipment remains.';
    return schemaHasToggleItem(c)
      ? "Item mode: no item. Keep hands empty; do not include the character's personal item or unrelated handheld objects."
      : 'Item mode: no item. Keep hands natural.';
  }
  if (!schemaHasToggleItem(c)) return 'Item mode: no toggleable personal item. Keep hands natural.';
  const item = c.personalItem;
  const itemText = item.withItemPrompt || item.description || item.name || '';
  const role = item.itemRole || 'none';
  const roleLock = role === 'ritual_item' ? ' Ceremonial ritual focus, not a weapon.' : (role !== 'weapon' ? ' Not a weapon.' : '');
  return `Item: ${itemText}.${roleLock}`;
}

function compactGuardBlock(c: any, suppressItem: boolean): string {
  const hasItem = !suppressItem && schemaHasToggleItem(c);
  const readable = ['face', 'hands', 'chest silhouette', 'waist curve', 'body outline'];
  if (hasItem) readable.push(c?.personalItem?.itemFamily || 'item');
  return `Composition guard: keep ${readable.join(', ')} readable; nothing covers face, torso, waist, or outline.`;
}

function stripItemTerms(text: string | undefined, _c: any): string {
  if (!text) return '';
  return text;
}

function figureNegativeTerms(c: any): string[] {
  const gender = inferGender(c);
  if (gender === 'female') {
    return ['flattened chest', 'boxy torso', 'erased waist curve', 'arms hiding bust silhouette', 'shapeless waist', 'body hidden by arms'];
  }
  return [];
}

function buildDebugPrompt(c: any, p: any, styleId: string, suppressItem: boolean): { positive: string; negative: string } {
  const style = COMPACT_STYLE_PROMPTS[styleId] || COMPACT_STYLE_PROMPTS['dark_luxury'];
  const mainItem = c?.personalItem?.name || c?.personalItem?.description || 'the character main item';
  const secondary = c?.characterCore?.aura || 'subtle character-defining secondary effects';
  let posePrompt = suppressItem && p?.noItemPrompt ? p.noItemPrompt : (p?.prompt || '');
  posePrompt = posePrompt.replaceAll('[MAIN_ITEM]', suppressItem ? 'no handheld item' : mainItem)
    .replaceAll('[SECONDARY_EFFECT]', secondary)
    .replaceAll('[CHARACTER]', c?.name || '');

  const core = c?.characterCore || {};
  const coreStr = [c?.name, core.face, core.hair, core.outfit, core.body, core.aura, core.extra].filter(Boolean).join('. ');
  const identityLocks = Array.isArray(core.identityLock) ? core.identityLock : [];
  const identityStr = identityLocks.length
    ? `Identity Lock: preserve exactly these character traits: ${identityLocks.join('; ')}.`
    : '';

  const itemInstruction = suppressItem
    ? `Item Mode: no item. Use characterCore only. Both hands are empty.`
    : (schemaHasToggleItem(c)
      ? `Item Mode: with item. Use only this personalItem: ${c.personalItem.withItemPrompt || mainItem}. ${c.personalItem.itemGuard || 'Keep the item readable and separated from face and body.'}`
      : 'Item Mode: no toggleable personal item.');

  const blocks = [
    style,
    'V11 Character Schema: characterCore is permanent; personalItem is the only toggleable item.',
    `Character: ${coreStr}`,
    identityStr,
    compactFigureBlock(c),
    `Selected Pose: ${p?.titleTH || p?.title}. ${posePrompt}`,
    itemInstruction,
    'Complexity lock: preserve the same character design. Change only the requested pose, framing, or camera angle. Do not upgrade the outfit, do not add extra ornaments. Keep details broad, grouped, clean, and readable.',
    'Global Guard: clean readable composition, polished anime fantasy character art, readable anatomy, clear face and hands, tasteful fully clothed fantasy glamour.'
  ].filter(Boolean);

  const negArr = [
    BASE_NEGATIVE,
    SAME_CHARACTER_COMPLEXITY_LOCK_NEGATIVE,
    ...(Array.isArray(p?.negativeAdditions) ? p.negativeAdditions : p?.negativeAdditions ? [p.negativeAdditions] : []),
    ...figureNegativeTerms(c)
  ];
  if (suppressItem) {
    negArr.push('unwanted extra weapon, unwanted extra prop, unwanted item in hand, random staff, random sword');
    if (c?.personalItem?.noItemRemove) negArr.push(c.personalItem.noItemRemove.join(', '));
  }

  return { positive: blocks.join('\n\n'), negative: negArr.join(', ') };
}

export function buildPrompt(c: any, p: any, itemMode: string, styleId: string, isCompact: boolean): { positive: string; negative: string } {
  const suppressItem = itemMode === 'no_item';

  if (!isCompact) {
    return buildDebugPrompt(c, p, styleId, suppressItem);
  }

  const blocks = [
    compactStyleBlock(styleId),
    compactCharacterCore(c, suppressItem),
    compactIdentityBlock(c),
    compactFigureBlock(c),
    `Selected pose: ${buildCompactPosePrompt(c, p, suppressItem)}`,
    compactItemBlock(c, suppressItem),
    compactGuardBlock(c, suppressItem),
    SAME_CHARACTER_COMPLEXITY_LOCK_POSITIVE
  ].filter(Boolean);

  const negArr = [
    BASE_NEGATIVE,
    SAME_CHARACTER_COMPLEXITY_LOCK_NEGATIVE,
    ...(Array.isArray(p?.negativeAdditions) ? p.negativeAdditions : p?.negativeAdditions ? [p.negativeAdditions] : []),
    ...figureNegativeTerms(c)
  ];
  if (suppressItem) {
    negArr.push('unwanted extra weapon, unwanted extra prop, unwanted item in hand, random staff, random sword');
    if (c?.personalItem?.noItemRemove) negArr.push(c.personalItem.noItemRemove.join(', '));
  }

  return { positive: blocks.join('\n\n'), negative: negArr.join(', ') };
}

export function promptWarnings(c: any, p: any, itemMode: string): string[] {
  const warnings: string[] = [];
  const uiCat = (p && (p.uiCategory || p.category)) || '';
  const isCloseup = uiCat === 'closeup_bust' || uiCat === 'portrait';
  const isWeapon = c?.personalItem?.itemRole === 'weapon';
  if (isCloseup && isWeapon && itemMode === 'with_item') warnings.push('Close-up pose with weapon — item may block face');
  if (p?.intensity === 'bold' && isWeapon) warnings.push('Bold pose with weapon — complex anatomy risk');
  return warnings;
}
