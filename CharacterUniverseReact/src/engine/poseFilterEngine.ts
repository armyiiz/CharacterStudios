import { activePoses } from '../data';
import { poseUiCategory, POSE_UI_CATEGORY_ORDER, POSE_UI_CATEGORY_META } from './poseCategories';
import { inferGender } from './characterUtils';
import { getRecommendedPoses, getGlamourPoses } from './recommendationEngine';

export { inferGender, POSE_UI_CATEGORY_ORDER, POSE_UI_CATEGORY_META };

export function getAllPoses() {
  return activePoses;
}

export function poseGenderFit(p: any, c: any): string {
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

  // Camera glamour male gate
  if (gender === 'male' && poseUiCategory(p) === 'camera_driven_glamour') {
    const fit = p.genderFit && p.genderFit.male;
    if (fit === 'allow' || fit === 'recommended') return 'allow';
    if (fit === 'optional') return 'optional';
    return 'hide';
  }

  // Hide clearly female-coded poses from male characters
  if (gender === 'male') {
    const blob = [p.id, p.title, p.titleTH, p.descriptionTH, p.subcategory, p.category].join('\n').toLowerCase();
    const femaleSignals = ['villainess','heroine','goddess','queen sitting','queen pose','hair touch','hand near hair','glamour close-up'];
    if (femaleSignals.some(k => blob.includes(k))) return 'hide';
  }

  return 'allow';
}

export function isGenderCompatiblePose(p: any, c: any): boolean {
  return poseGenderFit(p, c) !== 'hide';
}

export function isPoseCompatibleWithCharacterItem(p: any, c: any, itemMode: string): boolean {
  if (itemMode === 'no_item') {
    if (p.requiresItem === true) return false;
    const uiCat = poseUiCategory(p);
    if (['ranged_weapon','long_item','male_neutral_weapon'].includes(uiCat)) return false;
    // Block poses with weapon/item language in no-item mode
    const blob = [p?.id, p?.title, p?.titleTH, p?.subcategory, p?.uiCategory].join('\n').toLowerCase();
    if (/longbow|archer|bow draw|gun aim|pistol|handgun|rifle|sniper|katana|sword|blade|dagger|spear|lance|scythe|shield|greatsword|weapon|staff|wand|cane|instrument|guitar|violin|book|notebook|scroll|cup|teacup|umbrella|fan|mirror|suitcase/.test(blob)) return false;
    return true;
  }

  const uiCat = poseUiCategory(p);
  if (itemMode === 'with_item' && uiCat === 'camera_driven_glamour') return false;

  const role = c?.personalItem?.itemRole || 'none';
  const isWeapon = role === 'weapon';
  const isCombat = p.category === 'combat_attack' || p.subcategory === 'active_attack';
  if (!isWeapon && isCombat) return false;

  if (p.avoidItemRoles && p.avoidItemRoles.includes(role)) return false;

  return true;
}

export function getVisiblePoses(
  character: any,
  itemMode: string,
  filters: { category: string; search: string },
  poseView: string = 'all',
  favorites: string[] = []
) {
  const poses = getAllPoses();
  const searchLower = (filters.search || '').toLowerCase();

  // Get all compatible poses
  const compatible = (poses as any[]).filter(p => {
    if (!isGenderCompatiblePose(p, character)) return false;
    if (!isPoseCompatibleWithCharacterItem(p, character, itemMode)) return false;
    return true;
  });

  // Apply pose view filter
  let arr: any[];
  switch (poseView) {
    case 'recommended':
      arr = getRecommendedPoses(compatible, character, itemMode);
      break;
    case 'glamour':
      arr = getGlamourPoses(compatible);
      break;
    case 'favorites': {
      const favSet = new Set(favorites);
      arr = compatible.filter(p => favSet.has(String(p.id)));
      break;
    }
    default:
      arr = compatible;
  }

  // Apply category filter
  if (filters.category && filters.category !== 'all') {
    arr = arr.filter(p => poseUiCategory(p) === filters.category);
  }

  // Apply search filter
  if (searchLower) {
    arr = arr.filter(p => {
      const matchTitle = p.title?.toLowerCase().includes(searchLower) || p.titleTH?.toLowerCase().includes(searchLower);
      return matchTitle;
    });
  }

  return arr;
}

export function getCategoryCountsForPoses(poses: any[]): Record<string, number> {
  const counts: Record<string, number> = { all: poses.length };
  for (const p of poses) {
    const cat = poseUiCategory(p);
    counts[cat] = (counts[cat] || 0) + 1;
  }
  return counts;
}
