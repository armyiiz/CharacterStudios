export const COMPACT_STYLE_PROMPT = 'Masterpiece, best quality, semi-realistic anime illustration, Korean webtoon style, otome game character card art, polished digital painting, elegant detailed face, glossy eyes, smooth voluminous hair, clean readable design, cinematic dark luxury atmosphere, dramatic moody lighting, shallow depth of field.';
export const COMPACT_STYLE_PROMPTS: Record<string, string> = {
  dark_luxury: COMPACT_STYLE_PROMPT,
  cinematic: 'Masterpiece, best quality, semi-realistic anime illustration, polished digital painting, elegant detailed face, glossy eyes, smooth voluminous hair, clean readable design, cinematic daylight, vivid colors, atmospheric depth of field.',
  pastel: 'Masterpiece, best quality, semi-realistic anime illustration, soft painterly rendering, elegant detailed face, glossy eyes, smooth voluminous hair, clean readable design, gentle pastel colors, dreamy atmosphere, beautiful lighting.',
  vivid_sky: 'Masterpiece, best quality, cinematic anime movie style, polished digital painting, elegant detailed face, glossy eyes, smooth voluminous hair, clean readable design, breathtaking vivid sky, clear bright lighting, vibrant blue tones.'
};

const BASE_NEGATIVE = 'worst quality, low quality, bad anatomy, bad hands, bad arms, missing fingers, extra fingers, blurry, noise, artifact, explicit, nude, nsfw, text, watermark, mutated, poorly drawn, deformed, extra limbs';
const SAME_CHARACTER_COMPLEXITY_LOCK_POSITIVE = 'Complexity lock: 1girl/1boy limit depending on character gender, one unified body, solid connected torso, matching limbs, exactly two arms, exactly two legs, no cloned limbs, no floating duplicate body parts.';
const SAME_CHARACTER_COMPLEXITY_LOCK_NEGATIVE = 'multiple characters, multiple girls, multiple boys, split body, cloned torso, extra arms, extra legs, floating limbs, disjointed anatomy, chaotic multi-figure composition';

export function buildPrompt(c: any, p: any, itemMode: string, styleId: string, _isCompact: boolean) {
  const suppressItem = itemMode === 'no_item';

  const styleStr = COMPACT_STYLE_PROMPTS[styleId] || COMPACT_STYLE_PROMPTS['dark_luxury'];

  let coreStr = '';
  if (c?.characterCore) {
     coreStr = [c.characterCore.face, c.characterCore.hair, c.characterCore.outfit].filter(Boolean).join(', ');
  }

  const poseStr = suppressItem && p?.noItemPrompt ? p.noItemPrompt : (p?.prompt || '');
  let itemStr = '';
  if (!suppressItem && c?.personalItem?.withItemPrompt) {
     itemStr = c.personalItem.withItemPrompt;
  }

  let pos = [
    styleStr,
    `Character: ${c?.title || c?.name || ''}, ${coreStr}`,
    `Selected pose: ${poseStr}`,
    itemStr ? `Item/Weapon: ${itemStr}` : '',
    SAME_CHARACTER_COMPLEXITY_LOCK_POSITIVE,
    'Global quality: polished fully clothed fantasy character-card composition, readable anatomy, clean large shapes, no cluttered micro-detail noise.'
  ].filter(Boolean).join('\n\n');

  let negArr = [
    BASE_NEGATIVE,
    SAME_CHARACTER_COMPLEXITY_LOCK_NEGATIVE,
  ];
  if (p?.negativeAdditions) {
    if (Array.isArray(p.negativeAdditions)) negArr.push(...p.negativeAdditions);
    else negArr.push(p.negativeAdditions);
  }

  if (suppressItem) {
    negArr.push('unwanted extra weapon, unwanted extra prop, unwanted item in hand, random staff, random sword');
    if (c?.personalItem?.noItemRemove) {
       negArr.push(c.personalItem.noItemRemove.join(', '));
    }
  }

  return {
    positive: pos,
    negative: negArr.join(', ')
  };
}
