import { inferGender, inferRole } from './characterUtils';
import { poseUiCategory } from './poseCategories';

function rolePreferredCategories(role: string): string[] {
  const map: Record<string, string[]> = {
    combat: ['ranged_weapon','combat','long_item','male_neutral_weapon','glamour','standing','closeup_bust'],
    lifestyle: ['glamour','closeup_bust','sitting','leaning','standing','male_neutral_weapon'],
    scholarly: ['closeup_bust','glamour','standing','long_item','male_neutral_weapon'],
    ritual: ['glamour','closeup_bust','standing','long_item','male_neutral_weapon'],
    magic: ['glamour','closeup_bust','standing','combat'],
    other: ['glamour','standing','closeup_bust']
  };
  return map[role] || map.other;
}

function isCollectionPose(p: any): boolean {
  return p && (p.recommendedForCollection === true || p.isCollectionGlamourAddon === true || (p.collectionScore || 0) >= 90);
}

function framingBoost(p: any): number {
  return ({ thigh_up: 22, knee_up: 20, bust: 16, waist_up: 16, closeup: 12, full_body: 2 } as any)[p?.framing] || 0;
}

export function recommendationScore(c: any, p: any, itemMode: string): number {
  const role = inferRole(c);
  const cats = rolePreferredCategories(role);
  const gender = inferGender(c);
  let score = 0;
  const uiCat = poseUiCategory(p);
  if (cats.includes(p.category)) score += 50 - cats.indexOf(p.category) * 5;
  if (cats.includes(uiCat)) score += 46 - cats.indexOf(uiCat) * 5;
  if (gender === 'male' && uiCat === 'male_neutral_weapon') score += 38;
  if (isCollectionPose(p)) {
    score += Math.min(45, Math.max(0, (p.collectionScore || 90) - 55));
    score += framingBoost(p);
    if (gender === 'female') score += 12;
    if (itemMode === 'no_item') score += 8;
  }
  if (p.subcategory === 'sitting') score += 14;
  if (p.subcategory === 'thigh_up') score += 16;
  if (p.subcategory === 'over_shoulder') score += 14;
  if (p.subcategory === 'bust_portrait') score += 12;
  if (p.subcategory === 'leaning') score += 10;
  if (p.subcategory === 'soft_motion') score += 8;
  if (p.intensity === 'safe') score += isCollectionPose(p) ? 2 : 8;
  if (p.intensity === 'medium') score += 4;
  if (poseUiCategory(p) === 'standing' && !isCollectionPose(p)) score -= 8;
  return score;
}

export function getRecommendedPoses(allCompatible: any[], character: any, itemMode: string, limit = 12): any[] {
  if (!character || !allCompatible.length) return [];
  const collection = allCompatible.filter(p => isCollectionPose(p));
  if (collection.length) {
    const chosen: any[] = [];
    const seen = new Set<string>();
    const add = (p: any) => { if (p && !seen.has(String(p.id))) { chosen.push(p); seen.add(String(p.id)); } };
    collection.slice(0, Math.min(9, limit)).forEach(add);
    [...allCompatible].sort((a, b) => recommendationScore(character, b, itemMode) - recommendationScore(character, a, itemMode)).forEach(p => {
      if (chosen.length < limit) add(p);
    });
    return chosen.slice(0, limit);
  }
  return [...allCompatible].sort((a, b) => recommendationScore(character, b, itemMode) - recommendationScore(character, a, itemMode)).slice(0, limit);
}

export function getGlamourPoses(allCompatible: any[]): any[] {
  return allCompatible.filter(p => {
    const uiCat = poseUiCategory(p);
    return isCollectionPose(p) || uiCat === 'glamour_showcase' || uiCat === 'camera_driven_glamour' || uiCat === 'glamour';
  });
}
