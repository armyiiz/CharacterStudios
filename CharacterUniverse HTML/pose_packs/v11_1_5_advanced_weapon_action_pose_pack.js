// V11.1.5 Advanced Weapon Action Pose Pack
// +24 weapon-only active attack poses.

const v1115AdvancedWeaponActionPoses = [
  {
    "id": "V115-WA-01",
    "title": "Iaido Draw Slash",
    "titleTH": "ชักดาบอิไอโดฟันเร็ว",
    "descriptionTH": "ชักคาตานะจากฝักแล้วฟันเฉียงอย่างรวดเร็ว",
    "category": "weapon_action",
    "subcategory": "katana_iaido",
    "intensity": "dynamic",
    "framing": "full_body",
    "prompt": "Fast iaido draw slash, one hand at the sheath near the waist, the other hand drawing the katana in a sharp diagonal arc, lowered stance, torso turned with elegant speed. Face visible, hands readable, weapon silhouette clean, no excessive motion blur.",
    "noItemPrompt": "This pose requires a physical weapon. Do not use this pose in no-item mode.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "active_attack",
    "compatibleItemRoles": [
      "weapon"
    ],
    "preferredItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "ritual_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleItemFamilies": [
      "sword",
      "katana"
    ],
    "compatiblePresentationModes": [
      "combat",
      "battle_presence",
      "glamour_combat"
    ],
    "avoidRiskTags": [
      "non_weapon_item",
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item"
    ],
    "negativeAdditions": [
      "weapon covering face",
      "weapon merging with hair",
      "weapon merging with hand",
      "extra weapon",
      "broken unreadable weapon",
      "excessive motion blur",
      "non-weapon item used as weapon"
    ],
    "itemPlacementRule": "Katana crosses diagonally in front but stays below the eyes; sheath visible near waist.",
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons."
  },
  {
    "id": "V115-WA-02",
    "title": "High Overhead Katana Cut",
    "titleTH": "ฟันคาตานะลงจากเหนือหัว",
    "descriptionTH": "ยกคาตานะสองมือเหนือศีรษะแล้วฟันลงตรง ๆ",
    "category": "weapon_action",
    "subcategory": "katana_overhead",
    "intensity": "dynamic",
    "framing": "full_body",
    "prompt": "High overhead katana cut, both hands gripping the sword above the head, preparing a decisive downward strike, strong vertical line and heroic combat posture. Face visible, hands readable, weapon silhouette clean, no excessive motion blur.",
    "noItemPrompt": "This pose requires a physical weapon. Do not use this pose in no-item mode.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "active_attack",
    "compatibleItemRoles": [
      "weapon"
    ],
    "preferredItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "ritual_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleItemFamilies": [
      "sword",
      "katana"
    ],
    "compatiblePresentationModes": [
      "combat",
      "battle_presence",
      "glamour_combat"
    ],
    "avoidRiskTags": [
      "non_weapon_item",
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item"
    ],
    "negativeAdditions": [
      "weapon covering face",
      "weapon merging with hair",
      "weapon merging with hand",
      "extra weapon",
      "broken unreadable weapon",
      "excessive motion blur",
      "non-weapon item used as weapon"
    ],
    "itemPlacementRule": "Blade raised above head with arms readable; face visible below arms.",
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons."
  },
  {
    "id": "V115-WA-03",
    "title": "Horizontal Sweep Slash",
    "titleTH": "ฟันกวาดแนวนอน",
    "descriptionTH": "ฟันดาบกวาดแนวนอนผ่านลำตัวด้วยเส้นคมชัด",
    "category": "weapon_action",
    "subcategory": "horizontal_slash",
    "intensity": "dynamic",
    "framing": "full_body",
    "prompt": "Horizontal sweep slash, sword extended in a clean side-to-side cutting arc, hips turned, one foot sliding forward, readable blade edge across the frame. Face visible, hands readable, weapon silhouette clean, no excessive motion blur.",
    "noItemPrompt": "This pose requires a physical weapon. Do not use this pose in no-item mode.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "active_attack",
    "compatibleItemRoles": [
      "weapon"
    ],
    "preferredItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "ritual_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleItemFamilies": [
      "sword",
      "katana",
      "large_weapon"
    ],
    "compatiblePresentationModes": [
      "combat",
      "battle_presence",
      "glamour_combat"
    ],
    "avoidRiskTags": [
      "non_weapon_item",
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item"
    ],
    "negativeAdditions": [
      "weapon covering face",
      "weapon merging with hair",
      "weapon merging with hand",
      "extra weapon",
      "broken unreadable weapon",
      "excessive motion blur",
      "non-weapon item used as weapon"
    ],
    "itemPlacementRule": "Sword arc stays in front of torso without covering face or chest silhouette.",
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons."
  },
  {
    "id": "V115-WA-04",
    "title": "Rising Cut Upward",
    "titleTH": "ฟันตวัดขึ้นจากล่าง",
    "descriptionTH": "ฟันดาบตวัดขึ้นจากล่างขึ้นบนแบบมีแรงส่ง",
    "category": "weapon_action",
    "subcategory": "rising_cut",
    "intensity": "dynamic",
    "framing": "full_body",
    "prompt": "Rising upward cut, blade traveling from low guard upward in a sharp rising diagonal, cloak or sash lifting with momentum, dynamic but clean silhouette. Face visible, hands readable, weapon silhouette clean, no excessive motion blur.",
    "noItemPrompt": "This pose requires a physical weapon. Do not use this pose in no-item mode.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "active_attack",
    "compatibleItemRoles": [
      "weapon"
    ],
    "preferredItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "ritual_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleItemFamilies": [
      "sword",
      "katana",
      "dagger"
    ],
    "compatiblePresentationModes": [
      "combat",
      "battle_presence",
      "glamour_combat"
    ],
    "avoidRiskTags": [
      "non_weapon_item",
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item"
    ],
    "negativeAdditions": [
      "weapon covering face",
      "weapon merging with hair",
      "weapon merging with hand",
      "extra weapon",
      "broken unreadable weapon",
      "excessive motion blur",
      "non-weapon item used as weapon"
    ],
    "itemPlacementRule": "Blade starts near lower side and rises diagonally; avoid covering eyes.",
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons."
  },
  {
    "id": "V115-WA-05",
    "title": "Forward Katana Thrust",
    "titleTH": "แทงคาตานะตรงไปข้างหน้า",
    "descriptionTH": "แทงคาตานะตรงไปข้างหน้าแบบเห็นปลายดาบชัด",
    "category": "weapon_action",
    "subcategory": "katana_thrust",
    "intensity": "dynamic",
    "framing": "full_body",
    "prompt": "Forward katana thrust, sword point extended toward the viewer with controlled foreshortening, rear hand steady near the hilt, body leaning into the attack. Face visible, hands readable, weapon silhouette clean, no excessive motion blur.",
    "noItemPrompt": "This pose requires a physical weapon. Do not use this pose in no-item mode.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "active_attack",
    "compatibleItemRoles": [
      "weapon"
    ],
    "preferredItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "ritual_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleItemFamilies": [
      "sword",
      "katana"
    ],
    "compatiblePresentationModes": [
      "combat",
      "battle_presence",
      "glamour_combat"
    ],
    "avoidRiskTags": [
      "non_weapon_item",
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item"
    ],
    "negativeAdditions": [
      "weapon covering face",
      "weapon merging with hair",
      "weapon merging with hand",
      "extra weapon",
      "broken unreadable weapon",
      "excessive motion blur",
      "non-weapon item used as weapon"
    ],
    "itemPlacementRule": "Blade points forward beside the face, not through the eyes or mouth.",
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons."
  },
  {
    "id": "V115-WA-06",
    "title": "Two-Handed Guard Break Swing",
    "titleTH": "ฟันหนักสองมือทำลายการ์ด",
    "descriptionTH": "ฟันหนักสองมือเพื่อทำลายการป้องกัน",
    "category": "weapon_action",
    "subcategory": "guard_break_swing",
    "intensity": "dynamic",
    "framing": "full_body",
    "prompt": "Two-handed guard break swing, weapon gripped firmly with both hands, heavy diagonal impact motion, shoulders engaged, powerful readable attack line. Face visible, hands readable, weapon silhouette clean, no excessive motion blur.",
    "noItemPrompt": "This pose requires a physical weapon. Do not use this pose in no-item mode.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "active_attack",
    "compatibleItemRoles": [
      "weapon"
    ],
    "preferredItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "ritual_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleItemFamilies": [
      "sword",
      "katana",
      "large_weapon"
    ],
    "compatiblePresentationModes": [
      "combat",
      "battle_presence",
      "glamour_combat"
    ],
    "avoidRiskTags": [
      "non_weapon_item",
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item"
    ],
    "negativeAdditions": [
      "weapon covering face",
      "weapon merging with hair",
      "weapon merging with hand",
      "extra weapon",
      "broken unreadable weapon",
      "excessive motion blur",
      "non-weapon item used as weapon"
    ],
    "itemPlacementRule": "Two hands visible on hilt; weapon does not erase body outline.",
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons."
  },
  {
    "id": "V115-WA-07",
    "title": "Reverse-Step Counter Slash",
    "titleTH": "ถอยสวนคมดาบ",
    "descriptionTH": "ถอยหนึ่งก้าวแล้วสวนฟันกลับอย่างสง่างาม",
    "category": "weapon_action",
    "subcategory": "counter_slash",
    "intensity": "dynamic",
    "framing": "full_body",
    "prompt": "Reverse-step counter slash, character stepping backward while cutting forward in a precise counterattack, cloak trailing behind, calm focused expression. Face visible, hands readable, weapon silhouette clean, no excessive motion blur.",
    "noItemPrompt": "This pose requires a physical weapon. Do not use this pose in no-item mode.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "active_attack",
    "compatibleItemRoles": [
      "weapon"
    ],
    "preferredItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "ritual_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleItemFamilies": [
      "sword",
      "katana",
      "dagger"
    ],
    "compatiblePresentationModes": [
      "combat",
      "battle_presence",
      "glamour_combat"
    ],
    "avoidRiskTags": [
      "non_weapon_item",
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item"
    ],
    "negativeAdditions": [
      "weapon covering face",
      "weapon merging with hair",
      "weapon merging with hand",
      "extra weapon",
      "broken unreadable weapon",
      "excessive motion blur",
      "non-weapon item used as weapon"
    ],
    "itemPlacementRule": "Weapon stays on front side of body; back step visible in legs.",
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons."
  },
  {
    "id": "V115-WA-08",
    "title": "Finishing Blade Follow-Through",
    "titleTH": "ท่าจบหลังฟัน",
    "descriptionTH": "จังหวะหลังฟันจบแล้วใบดาบลากเส้นคมชัด",
    "category": "weapon_action",
    "subcategory": "finishing_follow_through",
    "intensity": "dynamic",
    "framing": "full_body",
    "prompt": "Finishing blade follow-through after a completed slash, sword extended low to the side, body turned away slightly, confident final motion rather than static standing. Face visible, hands readable, weapon silhouette clean, no excessive motion blur.",
    "noItemPrompt": "This pose requires a physical weapon. Do not use this pose in no-item mode.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "active_attack",
    "compatibleItemRoles": [
      "weapon"
    ],
    "preferredItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "ritual_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleItemFamilies": [
      "sword",
      "katana",
      "large_weapon"
    ],
    "compatiblePresentationModes": [
      "combat",
      "battle_presence",
      "glamour_combat"
    ],
    "avoidRiskTags": [
      "non_weapon_item",
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item"
    ],
    "negativeAdditions": [
      "weapon covering face",
      "weapon merging with hair",
      "weapon merging with hand",
      "extra weapon",
      "broken unreadable weapon",
      "excessive motion blur",
      "non-weapon item used as weapon"
    ],
    "itemPlacementRule": "Blade held low beside body, face and torso visible.",
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons."
  },
  {
    "id": "V115-WA-09",
    "title": "Low Sweeping Polearm Cut",
    "titleTH": "กวาดอาวุธด้ามยาวต่ำ",
    "descriptionTH": "กวาดหอกหรือนางินาตะต่ำเป็นวงกว้าง",
    "category": "weapon_action",
    "subcategory": "low_polearm_sweep",
    "intensity": "dynamic",
    "framing": "full_body",
    "prompt": "Low sweeping polearm cut, long polearm held with both hands sweeping near the ground in a wide low arc, legs braced, strong readable shaft line. Face visible, hands readable, weapon silhouette clean, no excessive motion blur.",
    "noItemPrompt": "This pose requires a physical weapon. Do not use this pose in no-item mode.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "active_attack",
    "compatibleItemRoles": [
      "weapon"
    ],
    "preferredItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "ritual_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleItemFamilies": [
      "spear",
      "polearm",
      "large_weapon"
    ],
    "compatiblePresentationModes": [
      "combat",
      "battle_presence",
      "glamour_combat"
    ],
    "avoidRiskTags": [
      "non_weapon_item",
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item"
    ],
    "negativeAdditions": [
      "weapon covering face",
      "weapon merging with hair",
      "weapon merging with hand",
      "extra weapon",
      "broken unreadable weapon",
      "excessive motion blur",
      "non-weapon item used as weapon"
    ],
    "itemPlacementRule": "Polearm passes low across lower frame; tip and shaft visible.",
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons."
  },
  {
    "id": "V115-WA-10",
    "title": "Diagonal Naginata Cleave",
    "titleTH": "เฉือนนางินาตะเฉียง",
    "descriptionTH": "เฉือนนางินาตะจากมุมสูงลงต่ำแบบสง่างาม",
    "category": "weapon_action",
    "subcategory": "naginata_cleave",
    "intensity": "dynamic",
    "framing": "full_body",
    "prompt": "Diagonal naginata cleave, polearm blade carving a clear diagonal path, one hand forward one hand back, elegant shrine-warrior posture. Face visible, hands readable, weapon silhouette clean, no excessive motion blur.",
    "noItemPrompt": "This pose requires a physical weapon. Do not use this pose in no-item mode.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "active_attack",
    "compatibleItemRoles": [
      "weapon"
    ],
    "preferredItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "ritual_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleItemFamilies": [
      "spear",
      "polearm"
    ],
    "compatiblePresentationModes": [
      "combat",
      "battle_presence",
      "glamour_combat"
    ],
    "avoidRiskTags": [
      "non_weapon_item",
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item"
    ],
    "negativeAdditions": [
      "weapon covering face",
      "weapon merging with hair",
      "weapon merging with hand",
      "extra weapon",
      "broken unreadable weapon",
      "excessive motion blur",
      "non-weapon item used as weapon"
    ],
    "itemPlacementRule": "Blade and shaft separated from hair and sleeves.",
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons."
  },
  {
    "id": "V115-WA-11",
    "title": "Spinning Polearm Momentum Swing",
    "titleTH": "หมุนอาวุธด้ามยาวด้วยแรงเหวี่ยง",
    "descriptionTH": "หมุนหอกหรือนางินาตะเป็นวงควบคุม",
    "category": "weapon_action",
    "subcategory": "spinning_polearm",
    "intensity": "dynamic",
    "framing": "full_body",
    "prompt": "Spinning polearm momentum swing, long weapon rotating in a controlled circular motion around the body, only one clean arc, dynamic footwork. Face visible, hands readable, weapon silhouette clean, no excessive motion blur.",
    "noItemPrompt": "This pose requires a physical weapon. Do not use this pose in no-item mode.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "active_attack",
    "compatibleItemRoles": [
      "weapon"
    ],
    "preferredItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "ritual_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleItemFamilies": [
      "spear",
      "polearm"
    ],
    "compatiblePresentationModes": [
      "combat",
      "battle_presence",
      "glamour_combat"
    ],
    "avoidRiskTags": [
      "non_weapon_item",
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item"
    ],
    "negativeAdditions": [
      "weapon covering face",
      "weapon merging with hair",
      "weapon merging with hand",
      "extra weapon",
      "broken unreadable weapon",
      "excessive motion blur",
      "non-weapon item used as weapon"
    ],
    "itemPlacementRule": "Use one clean weapon arc only; no duplicate polearms.",
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons."
  },
  {
    "id": "V115-WA-12",
    "title": "Vaulting Spear Lunge",
    "titleTH": "พุ่งแทงด้วยหอกแบบยกตัว",
    "descriptionTH": "พุ่งแทงหอกพร้อมยกตัวหรือก้าวกระโจน",
    "category": "weapon_action",
    "subcategory": "vaulting_spear_lunge",
    "intensity": "dynamic",
    "framing": "full_body",
    "prompt": "Vaulting spear lunge, spear planted or thrust forward while the body drives into a long airborne or extended step, heroic foreshortened action. Face visible, hands readable, weapon silhouette clean, no excessive motion blur.",
    "noItemPrompt": "This pose requires a physical weapon. Do not use this pose in no-item mode.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "active_attack",
    "compatibleItemRoles": [
      "weapon"
    ],
    "preferredItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "ritual_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleItemFamilies": [
      "spear",
      "polearm"
    ],
    "compatiblePresentationModes": [
      "combat",
      "battle_presence",
      "glamour_combat"
    ],
    "avoidRiskTags": [
      "non_weapon_item",
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item"
    ],
    "negativeAdditions": [
      "weapon covering face",
      "weapon merging with hair",
      "weapon merging with hand",
      "extra weapon",
      "broken unreadable weapon",
      "excessive motion blur",
      "non-weapon item used as weapon"
    ],
    "itemPlacementRule": "Spear shaft guides the motion and stays readable.",
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons."
  },
  {
    "id": "V115-WA-13",
    "title": "Braced Guarded Spear Charge",
    "titleTH": "ตั้งหอกพุ่งเข้าปะทะ",
    "descriptionTH": "พุ่งเข้าด้วยหอกในท่าตั้งรับแน่น",
    "category": "weapon_action",
    "subcategory": "braced_spear_charge",
    "intensity": "dynamic",
    "framing": "full_body",
    "prompt": "Braced guarded spear charge, spear held forward in both hands, body low and protected behind the weapon, charging with disciplined momentum. Face visible, hands readable, weapon silhouette clean, no excessive motion blur.",
    "noItemPrompt": "This pose requires a physical weapon. Do not use this pose in no-item mode.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "active_attack",
    "compatibleItemRoles": [
      "weapon"
    ],
    "preferredItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "ritual_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleItemFamilies": [
      "spear",
      "polearm"
    ],
    "compatiblePresentationModes": [
      "combat",
      "battle_presence",
      "glamour_combat"
    ],
    "avoidRiskTags": [
      "non_weapon_item",
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item"
    ],
    "negativeAdditions": [
      "weapon covering face",
      "weapon merging with hair",
      "weapon merging with hand",
      "extra weapon",
      "broken unreadable weapon",
      "excessive motion blur",
      "non-weapon item used as weapon"
    ],
    "itemPlacementRule": "Spear tip forward but face visible beside shaft.",
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons."
  },
  {
    "id": "V115-WA-14",
    "title": "Kneeling Precision Bow Aim",
    "titleTH": "คุกเข่าเล็งธนูแม่นยำ",
    "descriptionTH": "คุกเข่าเล็งธนูแบบนิ่งและคม",
    "category": "weapon_action",
    "subcategory": "kneeling_bow_aim",
    "intensity": "dynamic",
    "framing": "full_body",
    "prompt": "Kneeling precision bow aim, one knee lowered, bow fully drawn, arrow aligned clearly, calm focused archer expression, elegant stable posture. Face visible, hands readable, weapon silhouette clean, no excessive motion blur.",
    "noItemPrompt": "This pose requires a physical weapon. Do not use this pose in no-item mode.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "active_attack",
    "compatibleItemRoles": [
      "weapon"
    ],
    "preferredItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "ritual_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleItemFamilies": [
      "bow"
    ],
    "compatiblePresentationModes": [
      "combat",
      "battle_presence",
      "glamour_combat"
    ],
    "avoidRiskTags": [
      "non_weapon_item",
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item"
    ],
    "negativeAdditions": [
      "weapon covering face",
      "weapon merging with hair",
      "weapon merging with hand",
      "extra weapon",
      "broken unreadable weapon",
      "excessive motion blur",
      "non-weapon item used as weapon"
    ],
    "itemPlacementRule": "Bow does not cover eyes; arrow line visible beside cheek.",
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons."
  },
  {
    "id": "V115-WA-15",
    "title": "High-Angle Archer Release",
    "titleTH": "ยิงธนูมุมสูง",
    "descriptionTH": "ปล่อยลูกธนูขึ้นมุมสูงแบบสง่างาม",
    "category": "weapon_action",
    "subcategory": "high_angle_bow",
    "intensity": "dynamic",
    "framing": "full_body",
    "prompt": "High-angle archer release, bow tilted upward, string just released or about to release, hair and sash flowing gently, clear arrow direction. Face visible, hands readable, weapon silhouette clean, no excessive motion blur.",
    "noItemPrompt": "This pose requires a physical weapon. Do not use this pose in no-item mode.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "active_attack",
    "compatibleItemRoles": [
      "weapon"
    ],
    "preferredItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "ritual_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleItemFamilies": [
      "bow"
    ],
    "compatiblePresentationModes": [
      "combat",
      "battle_presence",
      "glamour_combat"
    ],
    "avoidRiskTags": [
      "non_weapon_item",
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item"
    ],
    "negativeAdditions": [
      "weapon covering face",
      "weapon merging with hair",
      "weapon merging with hand",
      "extra weapon",
      "broken unreadable weapon",
      "excessive motion blur",
      "non-weapon item used as weapon"
    ],
    "itemPlacementRule": "Bow held above shoulder line without hiding face.",
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons."
  },
  {
    "id": "V115-WA-16",
    "title": "Side-Step Bow Follow-Through",
    "titleTH": "ก้าวหลบหลังยิงธนู",
    "descriptionTH": "ก้าวหลบด้านข้างหลังปล่อยธนู",
    "category": "weapon_action",
    "subcategory": "bow_follow_through",
    "intensity": "dynamic",
    "framing": "full_body",
    "prompt": "Side-step bow follow-through, archer stepping sideways after releasing an arrow, bow lowered slightly, dynamic evasive movement. Face visible, hands readable, weapon silhouette clean, no excessive motion blur.",
    "noItemPrompt": "This pose requires a physical weapon. Do not use this pose in no-item mode.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "active_attack",
    "compatibleItemRoles": [
      "weapon"
    ],
    "preferredItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "ritual_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleItemFamilies": [
      "bow"
    ],
    "compatiblePresentationModes": [
      "combat",
      "battle_presence",
      "glamour_combat"
    ],
    "avoidRiskTags": [
      "non_weapon_item",
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item"
    ],
    "negativeAdditions": [
      "weapon covering face",
      "weapon merging with hair",
      "weapon merging with hand",
      "extra weapon",
      "broken unreadable weapon",
      "excessive motion blur",
      "non-weapon item used as weapon"
    ],
    "itemPlacementRule": "Bow remains visible beside body; no extra arrows clutter.",
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons."
  },
  {
    "id": "V115-WA-17",
    "title": "Shoulder-Swing Heavy Impact",
    "titleTH": "เหวี่ยงอาวุธหนักจากไหล่",
    "descriptionTH": "เหวี่ยงค้อนหรือกระบองหนักจากไหล่ลงแรง",
    "category": "weapon_action",
    "subcategory": "heavy_shoulder_swing",
    "intensity": "dynamic",
    "framing": "full_body",
    "prompt": "Shoulder-swing heavy impact, massive weapon pulled from over the shoulder into a powerful side impact, grounded stance, strong weight and readable handle. Face visible, hands readable, weapon silhouette clean, no excessive motion blur.",
    "noItemPrompt": "This pose requires a physical weapon. Do not use this pose in no-item mode.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "active_attack",
    "compatibleItemRoles": [
      "weapon"
    ],
    "preferredItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "ritual_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleItemFamilies": [
      "hammer",
      "large_weapon",
      "axe"
    ],
    "compatiblePresentationModes": [
      "combat",
      "battle_presence",
      "glamour_combat"
    ],
    "avoidRiskTags": [
      "non_weapon_item",
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item"
    ],
    "negativeAdditions": [
      "weapon covering face",
      "weapon merging with hair",
      "weapon merging with hand",
      "extra weapon",
      "broken unreadable weapon",
      "excessive motion blur",
      "non-weapon item used as weapon"
    ],
    "itemPlacementRule": "Weapon starts over shoulder but does not cover face.",
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons."
  },
  {
    "id": "V115-WA-18",
    "title": "Ground-Crushing Downstrike",
    "titleTH": "ทุบพื้นแตก",
    "descriptionTH": "ทุบอาวุธหนักลงพื้นแบบแรงกระแทกชัด",
    "category": "weapon_action",
    "subcategory": "ground_crushing_downstrike",
    "intensity": "dynamic",
    "framing": "full_body",
    "prompt": "Ground-crushing downstrike, heavy weapon slammed downward near the ground with controlled impact cracks, knees bent, both hands readable. Face visible, hands readable, weapon silhouette clean, no excessive motion blur.",
    "noItemPrompt": "This pose requires a physical weapon. Do not use this pose in no-item mode.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "active_attack",
    "compatibleItemRoles": [
      "weapon"
    ],
    "preferredItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "ritual_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleItemFamilies": [
      "hammer",
      "large_weapon",
      "axe"
    ],
    "compatiblePresentationModes": [
      "combat",
      "battle_presence",
      "glamour_combat"
    ],
    "avoidRiskTags": [
      "non_weapon_item",
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item"
    ],
    "negativeAdditions": [
      "weapon covering face",
      "weapon merging with hair",
      "weapon merging with hand",
      "extra weapon",
      "broken unreadable weapon",
      "excessive motion blur",
      "non-weapon item used as weapon"
    ],
    "itemPlacementRule": "Impact stays near ground; face and torso remain clear.",
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons."
  },
  {
    "id": "V115-WA-19",
    "title": "Charging Heavy Weapon Rush",
    "titleTH": "พุ่งพร้อมอาวุธหนัก",
    "descriptionTH": "พุ่งตัวไปข้างหน้าพร้อมค้อนหรือกระบองหนัก",
    "category": "weapon_action",
    "subcategory": "heavy_weapon_rush",
    "intensity": "dynamic",
    "framing": "full_body",
    "prompt": "Charging heavy weapon rush, massive weapon carried at the side or over one shoulder while the character rushes forward, strong forward lean. Face visible, hands readable, weapon silhouette clean, no excessive motion blur.",
    "noItemPrompt": "This pose requires a physical weapon. Do not use this pose in no-item mode.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "active_attack",
    "compatibleItemRoles": [
      "weapon"
    ],
    "preferredItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "ritual_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleItemFamilies": [
      "hammer",
      "large_weapon",
      "axe"
    ],
    "compatiblePresentationModes": [
      "combat",
      "battle_presence",
      "glamour_combat"
    ],
    "avoidRiskTags": [
      "non_weapon_item",
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item"
    ],
    "negativeAdditions": [
      "weapon covering face",
      "weapon merging with hair",
      "weapon merging with hand",
      "extra weapon",
      "broken unreadable weapon",
      "excessive motion blur",
      "non-weapon item used as weapon"
    ],
    "itemPlacementRule": "Heavy weapon stays beside body or shoulder, not across face.",
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons."
  },
  {
    "id": "V115-WA-20",
    "title": "Kanabou Overhead Breaker",
    "titleTH": "ยกคานาโบะทุบเหนือหัว",
    "descriptionTH": "ยกกระบองคานาโบะเหนือหัวเตรียมทุบ",
    "category": "weapon_action",
    "subcategory": "kanabou_overhead",
    "intensity": "dynamic",
    "framing": "full_body",
    "prompt": "Kanabou overhead breaker, spiked iron club lifted high with both hands, powerful oni-style downward attack, clean readable club silhouette. Face visible, hands readable, weapon silhouette clean, no excessive motion blur.",
    "noItemPrompt": "This pose requires a physical weapon. Do not use this pose in no-item mode.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "active_attack",
    "compatibleItemRoles": [
      "weapon"
    ],
    "preferredItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "ritual_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleItemFamilies": [
      "hammer",
      "large_weapon"
    ],
    "compatiblePresentationModes": [
      "combat",
      "battle_presence",
      "glamour_combat"
    ],
    "avoidRiskTags": [
      "non_weapon_item",
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item"
    ],
    "negativeAdditions": [
      "weapon covering face",
      "weapon merging with hair",
      "weapon merging with hand",
      "extra weapon",
      "broken unreadable weapon",
      "excessive motion blur",
      "non-weapon item used as weapon"
    ],
    "itemPlacementRule": "Club above head, arms readable, face visible below.",
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons."
  },
  {
    "id": "V115-WA-21",
    "title": "Cross Slash Dual Blade Attack",
    "titleTH": "ดาบคู่ไขว้ฟัน",
    "descriptionTH": "ดาบคู่หรือมีดคู่ฟันไขว้เป็นรูป X",
    "category": "weapon_action",
    "subcategory": "dual_blade_cross_slash",
    "intensity": "dynamic",
    "framing": "full_body",
    "prompt": "Cross slash dual blade attack, both blades carving a clear X-shaped slash in front of the body, agile assassin motion, face visible above the crossed weapons. Face visible, hands readable, weapon silhouette clean, no excessive motion blur.",
    "noItemPrompt": "This pose requires a physical weapon. Do not use this pose in no-item mode.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "active_attack",
    "compatibleItemRoles": [
      "weapon"
    ],
    "preferredItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "ritual_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleItemFamilies": [
      "dagger",
      "sword"
    ],
    "compatiblePresentationModes": [
      "combat",
      "battle_presence",
      "glamour_combat"
    ],
    "avoidRiskTags": [
      "non_weapon_item",
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item"
    ],
    "negativeAdditions": [
      "weapon covering face",
      "weapon merging with hair",
      "weapon merging with hand",
      "extra weapon",
      "broken unreadable weapon",
      "excessive motion blur",
      "non-weapon item used as weapon"
    ],
    "itemPlacementRule": "Two blades only; no duplicate arms or extra weapons.",
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons."
  },
  {
    "id": "V115-WA-22",
    "title": "Sickle Pull Attack",
    "titleTH": "เกี่ยวเคียวแล้วดึงกลับ",
    "descriptionTH": "โจมตีด้วยเคียวหรือคุซาริกามะโดยมีเส้นโซ่เดียว",
    "category": "weapon_action",
    "subcategory": "sickle_pull_attack",
    "intensity": "dynamic",
    "framing": "full_body",
    "prompt": "Sickle pull attack, curved sickle extended to one side with one clean chain arc pulling back, body twisting with controlled trick-weapon motion. Face visible, hands readable, weapon silhouette clean, no excessive motion blur.",
    "noItemPrompt": "This pose requires a physical weapon. Do not use this pose in no-item mode.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "active_attack",
    "compatibleItemRoles": [
      "weapon"
    ],
    "preferredItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "ritual_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleItemFamilies": [
      "chain_weapon",
      "dagger"
    ],
    "compatiblePresentationModes": [
      "combat",
      "battle_presence",
      "glamour_combat"
    ],
    "avoidRiskTags": [
      "non_weapon_item",
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item"
    ],
    "negativeAdditions": [
      "weapon covering face",
      "weapon merging with hair",
      "weapon merging with hand",
      "extra weapon",
      "broken unreadable weapon",
      "excessive motion blur",
      "non-weapon item used as weapon"
    ],
    "itemPlacementRule": "One chain arc only; chain must not wrap around fingers, neck, or hair.",
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons."
  },
  {
    "id": "V115-WA-23",
    "title": "Shielded Forward Bash",
    "titleTH": "โล่กระแทกพุ่งหน้า",
    "descriptionTH": "ดันโล่ไปข้างหน้าด้วยแรงปะทะ",
    "category": "weapon_action",
    "subcategory": "shield_forward_bash",
    "intensity": "dynamic",
    "framing": "full_body",
    "prompt": "Shielded forward bash, shield pushed forward with strong defensive impact, body behind the shield, face visible above or beside it, secondary hand balanced. Face visible, hands readable, weapon silhouette clean, no excessive motion blur.",
    "noItemPrompt": "This pose requires a physical weapon. Do not use this pose in no-item mode.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "active_attack",
    "compatibleItemRoles": [
      "weapon"
    ],
    "preferredItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "ritual_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleItemFamilies": [
      "shield"
    ],
    "compatiblePresentationModes": [
      "combat",
      "battle_presence",
      "glamour_combat"
    ],
    "avoidRiskTags": [
      "non_weapon_item",
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item"
    ],
    "negativeAdditions": [
      "weapon covering face",
      "weapon merging with hair",
      "weapon merging with hand",
      "extra weapon",
      "broken unreadable weapon",
      "excessive motion blur",
      "non-weapon item used as weapon"
    ],
    "itemPlacementRule": "Shield below eyes and not covering whole torso.",
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons."
  },
  {
    "id": "V115-WA-24",
    "title": "Greatsword Rising Shoulder Cut",
    "titleTH": "ดาบใหญ่ฟันขึ้นจากไหล่",
    "descriptionTH": "ดาบใหญ่ตวัดขึ้นจากไหล่ด้วยแรงหนัก",
    "category": "weapon_action",
    "subcategory": "greatsword_rising_cut",
    "intensity": "dynamic",
    "framing": "full_body",
    "prompt": "Greatsword rising shoulder cut, massive blade traveling upward from shoulder level in a heavy rising arc, strong heroic stance and readable blade mass. Face visible, hands readable, weapon silhouette clean, no excessive motion blur.",
    "noItemPrompt": "This pose requires a physical weapon. Do not use this pose in no-item mode.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "active_attack",
    "compatibleItemRoles": [
      "weapon"
    ],
    "preferredItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "ritual_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleItemFamilies": [
      "large_weapon",
      "sword"
    ],
    "compatiblePresentationModes": [
      "combat",
      "battle_presence",
      "glamour_combat"
    ],
    "avoidRiskTags": [
      "non_weapon_item",
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item"
    ],
    "negativeAdditions": [
      "weapon covering face",
      "weapon merging with hair",
      "weapon merging with hand",
      "extra weapon",
      "broken unreadable weapon",
      "excessive motion blur",
      "non-weapon item used as weapon"
    ],
    "itemPlacementRule": "Greatsword starts near shoulder but stays separated from face and hair.",
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons."
  }
];

if (typeof window !== "undefined") { window.v1115AdvancedWeaponActionPoses = v1115AdvancedWeaponActionPoses; }

if (typeof module !== "undefined" && module.exports) { module.exports = { v1115AdvancedWeaponActionPoses }; }
