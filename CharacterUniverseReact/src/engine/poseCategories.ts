export const POSE_UI_CATEGORY_META: Record<string, { name: string; icon: string }> = {
  standing: { name: 'ท่ายืน / Standing', icon: '🧍' },
  closeup_bust: { name: 'Close-up / Portrait', icon: '🖼️' },
  sitting: { name: 'ท่านั่ง / Sitting', icon: '🪑' },
  leaning: { name: 'ท่าเอน / Leaning', icon: '🏛️' },
  over_shoulder: { name: 'มองกลับ / Over-Shoulder', icon: '↩️' },
  soft_motion: { name: 'เคลื่อนไหวสวย / Soft Motion', icon: '🌬️' },
  thigh_knee_up: { name: 'Thigh/Knee-up / โชว์ตัว', icon: '💎' },
  combat: { name: 'ต่อสู้ / Combat', icon: '⚔️' },
  ranged_weapon: { name: 'ธนู-ปืน / Ranged Weapon', icon: '🏹' },
  male_neutral_weapon: { name: 'ชาย/กลางถืออาวุธ', icon: '🛡️' },
  long_item: { name: 'อาวุธยาว/ของใหญ่', icon: '🔱' },
  camera_driven_glamour: { name: 'หมวดตากล้อง / Camera Glamour', icon: '📸' },
  glamour_showcase: { name: 'ท่าโชว์เสน่ห์ / Glamour', icon: '💋' },
  glamour: { name: 'Glamour Legacy', icon: '💃' }
};

export const POSE_UI_CATEGORY_ORDER = [
  'all','standing','closeup_bust','thigh_knee_up','sitting','leaning',
  'over_shoulder','soft_motion','camera_driven_glamour','combat',
  'ranged_weapon','long_item','male_neutral_weapon','glamour'
];

export function inferPoseUiCategory(p: any): string {
  const sub = ((p && p.subcategory) || '').toLowerCase();
  const framing = ((p && p.framing) || '').toLowerCase();
  const blob = [p?.id, p?.title, p?.titleTH, p?.descriptionTH, p?.prompt].join('\n').toLowerCase();
  if (sub === 'ranged_weapon' || /longbow|bow|archer|pistol|handgun|rifle|sniper|firearm|launcher/.test(blob)) return 'ranged_weapon';
  if (sub === 'male_neutral_weapon') return 'male_neutral_weapon';
  if (sub === 'long_item') return 'long_item';
  if (sub === 'glamour_combat' || /combat|slash|attack|weapon|sword|blade|dagger|stance|action/.test(blob)) return 'combat';
  if (sub === 'bust_portrait' || sub === 'luxury_bust' || framing === 'bust' || framing === 'waist_up' || framing === 'closeup' || /close-up|closeup|portrait/.test(blob)) return 'closeup_bust';
  if (sub === 'sitting' || sub === 'sitting_throne_couch' || framing === 'seated_full_body') return 'sitting';
  if (sub === 'leaning') return 'leaning';
  if (sub === 'over_shoulder') return 'over_shoulder';
  if (sub === 'soft_motion') return 'soft_motion';
  if (sub === 'thigh_up' || sub === 'thigh_knee_up' || framing === 'thigh_up' || framing === 'knee_up') return 'thigh_knee_up';
  if (sub === 'glamour_standing' || sub === 'standing' || framing === 'full_body') return 'standing';
  return p?.category || 'glamour';
}

export function poseUiCategory(p: any): string {
  return (p && (p.uiCategory || inferPoseUiCategory(p))) || 'glamour';
}

export function poseCategoryName(cat: string): string {
  return POSE_UI_CATEGORY_META[cat]?.name || cat;
}

export function poseCategoryIcon(cat: string): string {
  return POSE_UI_CATEGORY_META[cat]?.icon || '🎭';
}
