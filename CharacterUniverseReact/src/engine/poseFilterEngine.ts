import { activePoses } from '../data';

export function getAllPoses() {
  return activePoses;
}

export function inferGender(character: any) {
  if (!character) return 'unknown';
  const g = String(character.gender).toLowerCase();
  if (g.includes('female')) return 'female';
  if (g.includes('male')) return 'male';
  return 'other';
}

export function poseUiCategory(p: any) {
  if (p.uiCategory) return p.uiCategory;
  if (p.category === 'glamour_showcase' && p.subcategory?.includes('camera_driven')) return 'camera_driven_glamour';
  return p.category || 'all';
}

export function poseGenderFit(p: any, c: any) {
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

  // camera glamour male gate
  if (gender === 'male' && poseUiCategory(p) === 'camera_driven_glamour') {
    const fit = p.genderFit && p.genderFit.male;
    if (fit === 'allow' || fit === 'recommended') return 'allow';
    if (fit === 'optional') return 'optional';
    return 'hide';
  }

  return 'allow';
}

export function isGenderCompatiblePose(p: any, c: any) {
  return poseGenderFit(p, c) !== 'hide';
}

// Item compatibility simplified from legacy app rules
export function isPoseCompatibleWithCharacterItem(p: any, c: any, itemMode: string) {
  if (itemMode === 'no_item') {
    // Camera-driven glamour shouldn't show to with-item, but IS allowed in no_item (if female).
    // Let's implement the specific logic: with-item sees NO camera_driven_glamour.
    return true;
  }

  const uiCat = poseUiCategory(p);

  if (itemMode === 'with_item') {
    // Rule: Weapon/item + with_item should not see camera-driven glamour poses
    if (uiCat === 'camera_driven_glamour') return false;
  }

  const role = c?.personalItem?.itemRole || 'none';
  const isWeapon = role === 'weapon';

  // Non-weapon items should not see active combat attack poses
  const isCombat = p.category === 'combat_attack' || p.subcategory === 'active_attack';
  if (!isWeapon && isCombat) return false;

  // Explicit incompatibility
  if (p.avoidItemRoles && p.avoidItemRoles.includes(role)) return false;

  return true;
}

export function getVisiblePoses(character: any, itemMode: string, filters: { category: string, search: string }) {
  const poses = getAllPoses();
  const searchLower = (filters.search || '').toLowerCase();

  return poses.filter(p => {
    if (!isGenderCompatiblePose(p, character)) return false;
    if (!isPoseCompatibleWithCharacterItem(p, character, itemMode)) return false;

    if (filters.category && filters.category !== 'all') {
      if (poseUiCategory(p) !== filters.category) return false;
    }

    if (searchLower) {
      const matchTitle = p.title?.toLowerCase().includes(searchLower) || p.titleTH?.toLowerCase().includes(searchLower);
      if (!matchTitle) return false;
    }

    return true;
  });
}
