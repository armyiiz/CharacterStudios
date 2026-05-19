// V11.1.Y Pose Library Hard Cleanup
// Curated active pose core. Legacy V9 duplicate packs remain available as reference files, but are not loaded by default.

const poseLibraryV11Clean = [
  {
  "id": "V11X-CG-01",
  "title": "Top-Down Spiral Recline",
  "titleTH": "มุมสูงนอนโค้งเกลียว S-Curve",
  "descriptionTH": "มุมสูงนอนโค้งเกลียว S-Curve - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "true bird's-eye / top-down",
  "framing": "full_body / thigh_up",
  "prompt": "Camera/framing first: true bird's-eye / top-down; full_body / thigh_up. top-down bird's-eye camera view, character reclining diagonally across the frame, body arranged in a graceful spiral S-curve, torso gently twisted, one arm above or beside the head, the other hand near waist or floor, legs layered diagonally with one knee softly bent.",
  "noItemPrompt": "Camera/framing first: true bird's-eye / top-down; full_body / thigh_up. top-down bird's-eye camera view, character reclining diagonally across the frame, body arranged in a graceful spiral S-curve, torso gently twisted, one arm above or beside the head, the other hand near waist or floor, legs layered diagonally with one knee softly bent. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "true bird's-eye / top-down; full_body / thigh_up. top-down bird's-eye camera view, character reclining diagonally across the frame, body arranged in a graceful spiral S-curve, torso gently twisted, one arm above or beside the head, the other hand near waist or floor, legs layered diagonally with one knee softly bent.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-CG-02",
  "title": "High-Angle Kneeling Floor-Hand",
  "titleTH": "มุมสูงคุกเข่าเอนตัว มือแตะพื้นหน้าเลนส์",
  "descriptionTH": "มุมสูงคุกเข่าเอนตัว มือแตะพื้นหน้าเลนส์ - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "high-angle three-quarter",
  "framing": "full_body / thigh_up",
  "prompt": "Camera/framing first: high-angle three-quarter; full_body / thigh_up. high-angle three-quarter view looking slightly down, character kneeling on both knees and leaning forward, upper body closer to camera than hips, one hand placed on the floor in the foreground, other hand near cheek or collarbone, torso bent in a graceful forward S-curve.",
  "noItemPrompt": "Camera/framing first: high-angle three-quarter; full_body / thigh_up. high-angle three-quarter view looking slightly down, character kneeling on both knees and leaning forward, upper body closer to camera than hips, one hand placed on the floor in the foreground, other hand near cheek or collarbone, torso bent in a graceful forward S-curve. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "high-angle three-quarter; full_body / thigh_up. high-angle three-quarter view looking slightly down, character kneeling on both knees and leaning forward, upper body closer to camera than hips, one hand placed on the floor in the foreground, other hand near cheek or collarbone, torso bent in a graceful forward S-curve.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-CG-03",
  "title": "Extreme Low-Angle Kneeling Reach",
  "titleTH": "มุมต่ำติดพื้นคุกเข่าเอื้อมมือเข้าเลนส์",
  "descriptionTH": "มุมต่ำติดพื้นคุกเข่าเอื้อมมือเข้าเลนส์ - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "floor-level worm's-eye",
  "framing": "thigh_up / full_body",
  "prompt": "Camera/framing first: floor-level worm's-eye; thigh_up / full_body. extreme low-angle floor-level camera looking upward, character kneeling with one knee forward, torso leaning over the camera, one arm reaching toward the lens with dramatic foreshortening, other hand resting near thigh or hip.",
  "noItemPrompt": "Camera/framing first: floor-level worm's-eye; thigh_up / full_body. extreme low-angle floor-level camera looking upward, character kneeling with one knee forward, torso leaning over the camera, one arm reaching toward the lens with dramatic foreshortening, other hand resting near thigh or hip. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "floor-level worm's-eye; thigh_up / full_body. extreme low-angle floor-level camera looking upward, character kneeling with one knee forward, torso leaning over the camera, one arm reaching toward the lens with dramatic foreshortening, other hand resting near thigh or hip.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-CG-04",
  "title": "Worm's-Eye Standing Arch",
  "titleTH": "มุมเงยยืนแอ่นตัว แขนยกเหนือศีรษะ",
  "descriptionTH": "มุมเงยยืนแอ่นตัว แขนยกเหนือศีรษะ - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "low-angle below waist level",
  "framing": "thigh_up / full_body",
  "prompt": "Camera/framing first: low-angle below waist level; thigh_up / full_body. worm's-eye low-angle camera from below waist level, character standing tall with torso arched upward, arms raised above or curved behind the head, hips shifted to one side, elongated waist and legs.",
  "noItemPrompt": "Camera/framing first: low-angle below waist level; thigh_up / full_body. worm's-eye low-angle camera from below waist level, character standing tall with torso arched upward, arms raised above or curved behind the head, hips shifted to one side, elongated waist and legs. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "low-angle below waist level; thigh_up / full_body. worm's-eye low-angle camera from below waist level, character standing tall with torso arched upward, arms raised above or curved behind the head, hips shifted to one side, elongated waist and legs.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-CG-05",
  "title": "Rear Three-Quarter Over-Shoulder",
  "titleTH": "มุมหลังสามส่วนหันไหล่มองกล้อง",
  "descriptionTH": "มุมหลังสามส่วนหันไหล่มองกล้อง - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "rear three-quarter, slightly low",
  "framing": "thigh_up / waist_up",
  "prompt": "Camera/framing first: rear three-quarter, slightly low; thigh_up / waist_up. rear three-quarter camera angle from a slightly low viewpoint, character turned mostly away from the viewer, hips angled to one side, elegant back curve visible, head looking back over the shoulder toward the camera.",
  "noItemPrompt": "Camera/framing first: rear three-quarter, slightly low; thigh_up / waist_up. rear three-quarter camera angle from a slightly low viewpoint, character turned mostly away from the viewer, hips angled to one side, elegant back curve visible, head looking back over the shoulder toward the camera. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "rear three-quarter, slightly low; thigh_up / waist_up. rear three-quarter camera angle from a slightly low viewpoint, character turned mostly away from the viewer, hips angled to one side, elegant back curve visible, head looking back over the shoulder toward the camera.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-CG-06",
  "title": "Side-Lying Editorial Curve",
  "titleTH": "มุมข้างต่ำเอนนอน โชว์เส้นโค้งลำตัว",
  "descriptionTH": "มุมข้างต่ำเอนนอน โชว์เส้นโค้งลำตัว - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "low side camera",
  "framing": "full_body / thigh_up",
  "prompt": "Camera/framing first: low side camera; full_body / thigh_up. low side camera near floor level, character reclining sideways on one elbow, torso lifted slightly, waist curved into an elegant S-line, one leg extended diagonally and the other bent forward.",
  "noItemPrompt": "Camera/framing first: low side camera; full_body / thigh_up. low side camera near floor level, character reclining sideways on one elbow, torso lifted slightly, waist curved into an elegant S-line, one leg extended diagonally and the other bent forward. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "low side camera; full_body / thigh_up. low side camera near floor level, character reclining sideways on one elbow, torso lifted slightly, waist curved into an elegant S-line, one leg extended diagonally and the other bent forward.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-CG-07",
  "title": "Seated Edge High-Angle Twist",
  "titleTH": "มุมสูงนั่งขอบแท่นบิดตัวเข้ากล้อง",
  "descriptionTH": "มุมสูงนั่งขอบแท่นบิดตัวเข้ากล้อง - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "high-angle from above front-side",
  "framing": "full_body / thigh_up",
  "prompt": "Camera/framing first: high-angle from above front-side; full_body / thigh_up. high-angle three-quarter camera looking down, character seated on the edge of a simple platform, one leg hanging or extending downward, the other bent across the seat, torso twisting upward toward the viewer.",
  "noItemPrompt": "Camera/framing first: high-angle from above front-side; full_body / thigh_up. high-angle three-quarter camera looking down, character seated on the edge of a simple platform, one leg hanging or extending downward, the other bent across the seat, torso twisting upward toward the viewer. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "high-angle from above front-side; full_body / thigh_up. high-angle three-quarter camera looking down, character seated on the edge of a simple platform, one leg hanging or extending downward, the other bent across the seat, torso twisting upward toward the viewer.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-CG-08",
  "title": "Dutch-Angle Floating Diagonal",
  "titleTH": "กล้องเอียงดัตช์ บอดี้เฉียงตัดเฟรม",
  "descriptionTH": "กล้องเอียงดัตช์ บอดี้เฉียงตัดเฟรม - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "tilted dutch angle",
  "framing": "full_body",
  "prompt": "Camera/framing first: tilted dutch angle; full_body. tilted dutch-angle camera, full body arranged diagonally across the frame, one leg extended long across the composition, the other softly bent, torso twisted into a graceful S-curve, elegant motion, non-combat fashion energy.",
  "noItemPrompt": "Camera/framing first: tilted dutch angle; full_body. tilted dutch-angle camera, full body arranged diagonally across the frame, one leg extended long across the composition, the other softly bent, torso twisted into a graceful S-curve, elegant motion, non-combat fashion energy. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "tilted dutch angle; full_body. tilted dutch-angle camera, full body arranged diagonally across the frame, one leg extended long across the composition, the other softly bent, torso twisted into a graceful S-curve, elegant motion, non-combat fashion energy.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-CG-09",
  "title": "Close Foreground Hand Frame",
  "titleTH": "โคลสอัพมือหน้าเลนส์กรอบใบหน้า",
  "descriptionTH": "โคลสอัพมือหน้าเลนส์กรอบใบหน้า - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "close-up foreground perspective",
  "framing": "bust / waist_up",
  "prompt": "Camera/framing first: close-up foreground perspective; bust / waist_up. close foreground perspective, one hand near the lens creating depth and framing the face without fully covering it, face visible behind the foreground hand, other hand resting near shoulder, collarbone, or waist.",
  "noItemPrompt": "Camera/framing first: close-up foreground perspective; bust / waist_up. close foreground perspective, one hand near the lens creating depth and framing the face without fully covering it, face visible behind the foreground hand, other hand resting near shoulder, collarbone, or waist. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "close-up foreground perspective; bust / waist_up. close foreground perspective, one hand near the lens creating depth and framing the face without fully covering it, face visible behind the foreground hand, other hand resting near shoulder, collarbone, or waist.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-CG-10",
  "title": "Low-Angle Platform Step",
  "titleTH": "มุมต่ำก้าวขึ้นแท่น เน้นขาและสะโพก",
  "descriptionTH": "มุมต่ำก้าวขึ้นแท่น เน้นขาและสะโพก - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "low-angle front three-quarter",
  "framing": "full_body / thigh_up",
  "prompt": "Camera/framing first: low-angle front three-quarter; full_body / thigh_up. low-angle front three-quarter camera, one foot placed on a higher step or platform, the other leg lower and extended, hips strongly tilted, torso leaning or twisting toward the viewer.",
  "noItemPrompt": "Camera/framing first: low-angle front three-quarter; full_body / thigh_up. low-angle front three-quarter camera, one foot placed on a higher step or platform, the other leg lower and extended, hips strongly tilted, torso leaning or twisting toward the viewer. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "low-angle front three-quarter; full_body / thigh_up. low-angle front three-quarter camera, one foot placed on a higher step or platform, the other leg lower and extended, hips strongly tilted, torso leaning or twisting toward the viewer.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-CG-11",
  "title": "Overhead Hair-Fan Recline",
  "titleTH": "มุมสูงใกล้ นอนฮาโลผมรอบใบหน้า",
  "descriptionTH": "มุมสูงใกล้ นอนฮาโลผมรอบใบหน้า - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "top-down close overhead",
  "framing": "waist_up / full_body",
  "prompt": "Camera/framing first: top-down close overhead; waist_up / full_body. top-down close overhead camera, character reclining on the back or half-side, head near the upper frame, torso slightly diagonal, one arm curved above or around the head, hair or fabric spreading in a clean halo-like shape.",
  "noItemPrompt": "Camera/framing first: top-down close overhead; waist_up / full_body. top-down close overhead camera, character reclining on the back or half-side, head near the upper frame, torso slightly diagonal, one arm curved above or around the head, hair or fabric spreading in a clean halo-like shape. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "top-down close overhead; waist_up / full_body. top-down close overhead camera, character reclining on the back or half-side, head near the upper frame, torso slightly diagonal, one arm curved above or around the head, hair or fabric spreading in a clean halo-like shape.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-CG-12",
  "title": "Floor-Level Side Kneel Silhouette",
  "titleTH": "มุมข้างติดพื้น คุกเข่าเป็นซิลูเอต",
  "descriptionTH": "มุมข้างติดพื้น คุกเข่าเป็นซิลูเอต - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "floor-level side view",
  "framing": "full_body / thigh_up",
  "prompt": "Camera/framing first: floor-level side view; full_body / thigh_up. floor-level side camera, character kneeling in side silhouette, one knee down and the other leg forward or raised, torso arched slightly backward, clean curve from knee through waist to chest.",
  "noItemPrompt": "Camera/framing first: floor-level side view; full_body / thigh_up. floor-level side camera, character kneeling in side silhouette, one knee down and the other leg forward or raised, torso arched slightly backward, clean curve from knee through waist to chest. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "floor-level side view; full_body / thigh_up. floor-level side camera, character kneeling in side silhouette, one knee down and the other leg forward or raised, torso arched slightly backward, clean curve from knee through waist to chest.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-CG-13",
  "title": "Close Waist-Up Twisted Overhead Look",
  "titleTH": "มุมสูงโคลสอัพบิดเอวมองขึ้น",
  "descriptionTH": "มุมสูงโคลสอัพบิดเอวมองขึ้น - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "high-angle close-up",
  "framing": "waist_up / bust",
  "prompt": "Camera/framing first: high-angle close-up; waist_up / bust. high-angle close-up camera looking down, waist-up framing, torso twisting toward camera while hips angle away out of frame, one shoulder closer to the lens, head tilted up toward the viewer.",
  "noItemPrompt": "Camera/framing first: high-angle close-up; waist_up / bust. high-angle close-up camera looking down, waist-up framing, torso twisting toward camera while hips angle away out of frame, one shoulder closer to the lens, head tilted up toward the viewer. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "high-angle close-up; waist_up / bust. high-angle close-up camera looking down, waist-up framing, torso twisting toward camera while hips angle away out of frame, one shoulder closer to the lens, head tilted up toward the viewer.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-CG-14",
  "title": "Low-Angle Back Arch Profile",
  "titleTH": "มุมต่ำด้านหลังโปรไฟล์ แอ่นตัวเงยหน้า",
  "descriptionTH": "มุมต่ำด้านหลังโปรไฟล์ แอ่นตัวเงยหน้า - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "low-angle side-rear",
  "framing": "thigh_up / full_body",
  "prompt": "Camera/framing first: low-angle side-rear; thigh_up / full_body. low-angle side-rear camera looking upward, character in profile or three-quarter back view, torso arched elegantly, chin lifted, arms curved near the head or behind the body, hips creating a strong waist curve.",
  "noItemPrompt": "Camera/framing first: low-angle side-rear; thigh_up / full_body. low-angle side-rear camera looking upward, character in profile or three-quarter back view, torso arched elegantly, chin lifted, arms curved near the head or behind the body, hips creating a strong waist curve. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "low-angle side-rear; thigh_up / full_body. low-angle side-rear camera looking upward, character in profile or three-quarter back view, torso arched elegantly, chin lifted, arms curved near the head or behind the body, hips creating a strong waist curve.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-CG-15",
  "title": "Seated Floor Twist With Long Leg",
  "titleTH": "มุมต่ำนั่งพื้น ขายาวพุ่งเข้าเลนส์",
  "descriptionTH": "มุมต่ำนั่งพื้น ขายาวพุ่งเข้าเลนส์ - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "low front-side camera",
  "framing": "full_body",
  "prompt": "Camera/framing first: low front-side camera; full_body. low front-side camera near floor level, character seated on the floor, one leg extended diagonally toward camera, the other bent close to the body, torso twisting toward the viewer.",
  "noItemPrompt": "Camera/framing first: low front-side camera; full_body. low front-side camera near floor level, character seated on the floor, one leg extended diagonally toward camera, the other bent close to the body, torso twisting toward the viewer. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "low front-side camera; full_body. low front-side camera near floor level, character seated on the floor, one leg extended diagonally toward camera, the other bent close to the body, torso twisting toward the viewer.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-CG-16",
  "title": "High-Angle Shoulder-First Lean",
  "titleTH": "มุมสูงเอนไหล่เข้าเลนส์",
  "descriptionTH": "มุมสูงเอนไหล่เข้าเลนส์ - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "high-angle front-side",
  "framing": "waist_up / thigh_up",
  "prompt": "Camera/framing first: high-angle front-side; waist_up / thigh_up. high-angle front-side camera, character leaning shoulder-first toward the lens, one shoulder and upper arm closest to camera, torso rolling diagonally, head turned up toward the viewer.",
  "noItemPrompt": "Camera/framing first: high-angle front-side; waist_up / thigh_up. high-angle front-side camera, character leaning shoulder-first toward the lens, one shoulder and upper arm closest to camera, torso rolling diagonally, head turned up toward the viewer. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "high-angle front-side; waist_up / thigh_up. high-angle front-side camera, character leaning shoulder-first toward the lens, one shoulder and upper arm closest to camera, torso rolling diagonally, head turned up toward the viewer.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-CG-17",
  "title": "Reclining Elbow Close Crop",
  "titleTH": "ครอปใกล้เอนศอก โชว์เส้นเอว",
  "descriptionTH": "ครอปใกล้เอนศอก โชว์เส้นเอว - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "low close side-front",
  "framing": "waist_up / thigh_up",
  "prompt": "Camera/framing first: low close side-front; waist_up / thigh_up. low close side-front camera, thigh-up or waist-up crop, character reclining on one elbow, one shoulder forward, torso curving through the waist, hips continuing out of frame.",
  "noItemPrompt": "Camera/framing first: low close side-front; waist_up / thigh_up. low close side-front camera, thigh-up or waist-up crop, character reclining on one elbow, one shoulder forward, torso curving through the waist, hips continuing out of frame. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "low close side-front; waist_up / thigh_up. low close side-front camera, thigh-up or waist-up crop, character reclining on one elbow, one shoulder forward, torso curving through the waist, hips continuing out of frame.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-CG-18",
  "title": "Tilted Camera Over-Shoulder Seated Pose",
  "titleTH": "กล้องเอียงมุมหลัง นั่งหันไหล่มองกลับ",
  "descriptionTH": "กล้องเอียงมุมหลัง นั่งหันไหล่มองกลับ - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "tilted rear-side high angle",
  "framing": "thigh_up / waist_up",
  "prompt": "Camera/framing first: tilted rear-side high angle; thigh_up / waist_up. tilted dutch-angle rear-side high camera, character seated turned away from the viewer, hips and back creating the foreground silhouette, torso twisting so the face looks back over the shoulder.",
  "noItemPrompt": "Camera/framing first: tilted rear-side high angle; thigh_up / waist_up. tilted dutch-angle rear-side high camera, character seated turned away from the viewer, hips and back creating the foreground silhouette, torso twisting so the face looks back over the shoulder. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "tilted rear-side high angle; thigh_up / waist_up. tilted dutch-angle rear-side high camera, character seated turned away from the viewer, hips and back creating the foreground silhouette, torso twisting so the face looks back over the shoulder.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-CG-19",
  "title": "Front Foreshortened Knee Pose",
  "titleTH": "มุมต่ำเข่าหน้าเลนส์ บอดี้ลึก",
  "descriptionTH": "มุมต่ำเข่าหน้าเลนส์ บอดี้ลึก - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "low front close",
  "framing": "thigh_up / full_body",
  "prompt": "Camera/framing first: low front close; thigh_up / full_body. low front close camera, one knee or thigh close to the lens with strong foreshortening, torso rising behind it and twisting toward the viewer, one hand resting naturally on the foreground knee.",
  "noItemPrompt": "Camera/framing first: low front close; thigh_up / full_body. low front close camera, one knee or thigh close to the lens with strong foreshortening, torso rising behind it and twisting toward the viewer, one hand resting naturally on the foreground knee. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "low front close; thigh_up / full_body. low front close camera, one knee or thigh close to the lens with strong foreshortening, torso rising behind it and twisting toward the viewer, one hand resting naturally on the foreground knee.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-CG-20",
  "title": "Vertical Crop Looking-Down Power Pose",
  "titleTH": "ครอปแนวตั้งมุมต่ำ มองลงมาที่กล้อง",
  "descriptionTH": "ครอปแนวตั้งมุมต่ำ มองลงมาที่กล้อง - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "low close upward",
  "framing": "waist_up / thigh_up",
  "prompt": "Camera/framing first: low close upward; waist_up / thigh_up. low close upward camera, vertical crop, character looking down toward the viewer, torso dominating the frame, hips angled, shoulders tilted, one hand near waist or hip and the other near hair or shoulder.",
  "noItemPrompt": "Camera/framing first: low close upward; waist_up / thigh_up. low close upward camera, vertical crop, character looking down toward the viewer, torso dominating the frame, hips angled, shoulders tilted, one hand near waist or hip and the other near hair or shoulder. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "low close upward; waist_up / thigh_up. low close upward camera, vertical crop, character looking down toward the viewer, torso dominating the frame, hips angled, shoulders tilted, one hand near waist or hip and the other near hair or shoulder.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-CG-21",
  "title": "Low-Angle Runway Power Curve",
  "titleTH": "มุมต่ำทรงพลังแบบรันเวย์ เน้นช่วงขา",
  "descriptionTH": "มุมต่ำทรงพลังแบบรันเวย์ เน้นช่วงขา - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "low-angle at knee or waist height",
  "framing": "full_body / thigh_up",
  "prompt": "Camera/framing first: low-angle at knee or waist height; full_body / thigh_up. low-angle fashion photographer shot from knee or waist height, character in a confident runway stance, one leg forward with a long clean line, hip tilted, torso arched gracefully, one hand at the waist and the other relaxed near the thigh.",
  "noItemPrompt": "Camera/framing first: low-angle at knee or waist height; full_body / thigh_up. low-angle fashion photographer shot from knee or waist height, character in a confident runway stance, one leg forward with a long clean line, hip tilted, torso arched gracefully, one hand at the waist and the other relaxed near the thigh. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "low-angle at knee or waist height; full_body / thigh_up. low-angle fashion photographer shot from knee or waist height, character in a confident runway stance, one leg forward with a long clean line, hip tilted, torso arched gracefully, one hand at the waist and the other relaxed near the thigh.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-CG-22",
  "title": "Dutch-Angle Twisted Waist Glance",
  "titleTH": "กล้องเอียงบิดเอว มองเฉียงกลับแบบแฟชั่น",
  "descriptionTH": "กล้องเอียงบิดเอว มองเฉียงกลับแบบแฟชั่น - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "subtle dutch-angle three-quarter",
  "framing": "waist_up / thigh_up",
  "prompt": "Camera/framing first: subtle dutch-angle three-quarter; waist_up / thigh_up. subtle dutch-angle glamour camera, character twisting at the waist while glancing back over one shoulder, one hand lightly touching the upper arm, the other near the waistline, diagonal body flow from shoulder to hip.",
  "noItemPrompt": "Camera/framing first: subtle dutch-angle three-quarter; waist_up / thigh_up. subtle dutch-angle glamour camera, character twisting at the waist while glancing back over one shoulder, one hand lightly touching the upper arm, the other near the waistline, diagonal body flow from shoulder to hip. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "subtle dutch-angle three-quarter; waist_up / thigh_up. subtle dutch-angle glamour camera, character twisting at the waist while glancing back over one shoulder, one hand lightly touching the upper arm, the other near the waistline, diagonal body flow from shoulder to hip.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-CG-23",
  "title": "Side Profile Arch With Shoulder Focus",
  "titleTH": "โปรไฟล์ด้านข้างแอ่นตัว เน้นไหล่และเอว",
  "descriptionTH": "โปรไฟล์ด้านข้างแอ่นตัว เน้นไหล่และเอว - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "strong side angle at chest height",
  "framing": "thigh_up / waist_up",
  "prompt": "Camera/framing first: strong side angle at chest height; thigh_up / waist_up. side-profile beauty photoshoot angle, character arching the back gently with one shoulder rolled toward the camera, one hand near the neck and the other tracing the waist, elegant hourglass silhouette, face turned slightly back toward the viewer.",
  "noItemPrompt": "Camera/framing first: strong side angle at chest height; thigh_up / waist_up. side-profile beauty photoshoot angle, character arching the back gently with one shoulder rolled toward the camera, one hand near the neck and the other tracing the waist, elegant hourglass silhouette, face turned slightly back toward the viewer. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "strong side angle at chest height; thigh_up / waist_up. side-profile beauty photoshoot angle, character arching the back gently with one shoulder rolled toward the camera, one hand near the neck and the other tracing the waist, elegant hourglass silhouette, face turned slightly back toward the viewer.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-CG-24",
  "title": "Diagonal Walk-In Frame Shot",
  "titleTH": "ก้าวเดินเฉียงเข้ากรอบแบบนางแบบ",
  "descriptionTH": "ก้าวเดินเฉียงเข้ากรอบแบบนางแบบ - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "low three-quarter walking capture",
  "framing": "full_body / thigh_up",
  "prompt": "Camera/framing first: low three-quarter walking capture; full_body / thigh_up. dynamic walk-in-frame fashion shot, character stepping diagonally into the composition, one foot forward, hips swaying naturally, torso angled opposite the legs, one hand near the waist and the other brushing hair back.",
  "noItemPrompt": "Camera/framing first: low three-quarter walking capture; full_body / thigh_up. dynamic walk-in-frame fashion shot, character stepping diagonally into the composition, one foot forward, hips swaying naturally, torso angled opposite the legs, one hand near the waist and the other brushing hair back. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "low three-quarter walking capture; full_body / thigh_up. dynamic walk-in-frame fashion shot, character stepping diagonally into the composition, one foot forward, hips swaying naturally, torso angled opposite the legs, one hand near the waist and the other brushing hair back.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-CG-25",
  "title": "Beauty Campaign Chin-Lift Compression",
  "titleTH": "ครอปบิวตี้เชิดคางแบบแคมเปญความงาม",
  "descriptionTH": "ครอปบิวตี้เชิดคางแบบแคมเปญความงาม - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "close medium with slight telephoto compression",
  "framing": "bust / waist_up",
  "prompt": "Camera/framing first: close medium with slight telephoto compression; bust / waist_up. beauty campaign portrait shot with slight telephoto compression, character lifting the chin subtly, shoulders angled asymmetrically, one hand framing the jawline without covering the lips or eyes, the other near the upper chest.",
  "noItemPrompt": "Camera/framing first: close medium with slight telephoto compression; bust / waist_up. beauty campaign portrait shot with slight telephoto compression, character lifting the chin subtly, shoulders angled asymmetrically, one hand framing the jawline without covering the lips or eyes, the other near the upper chest. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "close medium with slight telephoto compression; bust / waist_up. beauty campaign portrait shot with slight telephoto compression, character lifting the chin subtly, shoulders angled asymmetrically, one hand framing the jawline without covering the lips or eyes, the other near the upper chest.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-CG-26",
  "title": "Close Lens Reaching Hand Perspective",
  "titleTH": "โคลสเลนส์เอื้อมมือเฉียงหน้าแบบเพอร์สเปกทีฟ",
  "descriptionTH": "โคลสเลนส์เอื้อมมือเฉียงหน้าแบบเพอร์สเปกทีฟ - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "medium-close three-quarter front perspective",
  "framing": "waist_up / bust",
  "prompt": "Camera/framing first: medium-close three-quarter front perspective; waist_up / bust. fashion portrait from a medium-close three-quarter front angle, one hand softly reaching toward the lens with mild foreshortening while keeping the face visible, the other hand at the hip or waist, body leaning subtly forward.",
  "noItemPrompt": "Camera/framing first: medium-close three-quarter front perspective; waist_up / bust. fashion portrait from a medium-close three-quarter front angle, one hand softly reaching toward the lens with mild foreshortening while keeping the face visible, the other hand at the hip or waist, body leaning subtly forward. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "medium-close three-quarter front perspective; waist_up / bust. fashion portrait from a medium-close three-quarter front angle, one hand softly reaching toward the lens with mild foreshortening while keeping the face visible, the other hand at the hip or waist, body leaning subtly forward.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-BS-01",
  "title": "High-Angle Forward Lean Diagonal S-Curve",
  "titleTH": "มุมสูงเอนตัว S-Curve เฉียงหน้าเลนส์",
  "descriptionTH": "มุมสูงเอนตัว S-Curve เฉียงหน้าเลนส์ - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "high-angle diagonal front-side",
  "framing": "thigh_up / full_body",
  "prompt": "Camera/framing first: high-angle diagonal front-side; thigh_up / full_body. high-angle editorial camera looking down from a diagonal front-side angle, character leaning forward into an elegant diagonal S-curve, one shoulder closer to the lens, hips subtly shifted back, chin lifted toward camera, one hand near the collarbone and the other near the hip.",
  "noItemPrompt": "Camera/framing first: high-angle diagonal front-side; thigh_up / full_body. high-angle editorial camera looking down from a diagonal front-side angle, character leaning forward into an elegant diagonal S-curve, one shoulder closer to the lens, hips subtly shifted back, chin lifted toward camera, one hand near the collarbone and the other near the hip. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "high-angle diagonal front-side; thigh_up / full_body. high-angle editorial camera looking down from a diagonal front-side angle, character leaning forward into an elegant diagonal S-curve, one shoulder closer to the lens, hips subtly shifted back, chin lifted toward camera, one hand near the collarbone and the other near the hip.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-BS-02",
  "title": "Centered Kneeling Floor-Hand Goddess Pose",
  "titleTH": "คุกเข่ากลางเฟรม มือแตะพื้นแบบเทพี",
  "descriptionTH": "คุกเข่ากลางเฟรม มือแตะพื้นแบบเทพี - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "centered high-angle three-quarter",
  "framing": "full_body",
  "prompt": "Camera/framing first: centered high-angle three-quarter; full_body. centered high-angle kneeling goddess pose, character kneeling gracefully on both knees, one hand touching the floor near the body, torso upright but softly leaning, other hand near collarbone or thigh, balanced editorial body-showcase composition.",
  "noItemPrompt": "Camera/framing first: centered high-angle three-quarter; full_body. centered high-angle kneeling goddess pose, character kneeling gracefully on both knees, one hand touching the floor near the body, torso upright but softly leaning, other hand near collarbone or thigh, balanced editorial body-showcase composition. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "centered high-angle three-quarter; full_body. centered high-angle kneeling goddess pose, character kneeling gracefully on both knees, one hand touching the floor near the body, torso upright but softly leaning, other hand near collarbone or thigh, balanced editorial body-showcase composition.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-BS-03",
  "title": "High-Angle Twisted Teasing Hand Pose",
  "titleTH": "มุมสูงบิดตัวเย้ายวน มือจัดกรอบลำตัว",
  "descriptionTH": "มุมสูงบิดตัวเย้ายวน มือจัดกรอบลำตัว - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "high-angle three-quarter",
  "framing": "waist_up / thigh_up",
  "prompt": "Camera/framing first: high-angle three-quarter; waist_up / thigh_up. high-angle three-quarter glamour camera, character twisting the torso with hips angled away, shoulders tilted, one hand framing the upper body near the collarbone or shoulder, the other hand resting near the waist or hip.",
  "noItemPrompt": "Camera/framing first: high-angle three-quarter; waist_up / thigh_up. high-angle three-quarter glamour camera, character twisting the torso with hips angled away, shoulders tilted, one hand framing the upper body near the collarbone or shoulder, the other hand resting near the waist or hip. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "high-angle three-quarter; waist_up / thigh_up. high-angle three-quarter glamour camera, character twisting the torso with hips angled away, shoulders tilted, one hand framing the upper body near the collarbone or shoulder, the other hand resting near the waist or hip.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
  {
  "id": "V11X-BS-04",
  "title": "Low-Angle Reaching Hand Glamour Pose",
  "titleTH": "มุมต่ำเอื้อมมือเข้าเลนส์แบบแฟชั่น",
  "descriptionTH": "มุมต่ำเอื้อมมือเข้าเลนส์แบบแฟชั่น - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.",
  "category": "glamour_showcase",
  "subcategory": "camera_driven_body_showcase",
  "uiCategory": "camera_driven_glamour",
  "uiCategoryTH": "หมวดตากล้อง",
  "targetGenders": [
    "female"
  ],
  "genderFit": {
    "female": "recommended",
    "male": "hidden",
    "other": "optional",
    "unknown": "optional"
  },
  "intensity": "safe",
  "requiresItem": false,
  "noItemSafe": true,
  "itemActionType": "none",
  "compatibleItemRoles": [
    "none"
  ],
  "preferredItemRoles": [
    "none"
  ],
  "avoidItemRoles": [
    "weapon",
    "large_weapon",
    "dual_item",
    "instrument_item",
    "document_item",
    "tool_item",
    "ritual_item"
  ],
  "compatiblePresentationModes": [
    "glamour",
    "lifestyle",
    "royal",
    "portrait",
    "fashion_editorial"
  ],
  "avoidRiskTags": [
    "large_weapon",
    "dual_item",
    "active_attack",
    "ranged_weapon"
  ],
  "itemPlacementRule": "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  "noItemRule": "Both hands are empty. Do not add handheld objects or detached objects.",
  "negativeAdditions": [
    "extra hands",
    "extra arms",
    "extra fingers",
    "broken anatomy",
    "twisted torso beyond natural range",
    "floating weapon",
    "detached item",
    "weapon swing",
    "combat attack",
    "item covering face",
    "item covering chest",
    "overly cluttered details",
    "flat front-facing standing pose",
    "neutral idle pose",
    "stiff symmetrical pose"
  ],
  "collectionTags": [
    "glamour",
    "camera_driven_glamour",
    "body_showcase",
    "no_item"
  ],
  "camera": "low-angle close perspective",
  "framing": "waist_up / thigh_up",
  "prompt": "Camera/framing first: low-angle close perspective; waist_up / thigh_up. low-angle glamour camera close to the body, character leaning toward the lens with one hand reaching softly forward, dramatic but elegant foreshortened hand not covering the face, the other hand resting near the waist or hip.",
  "noItemPrompt": "Camera/framing first: low-angle close perspective; waist_up / thigh_up. low-angle glamour camera close to the body, character leaning toward the lens with one hand reaching softly forward, dramatic but elegant foreshortened hand not covering the face, the other hand resting near the waist or hip. Both hands empty; no handheld objects.",
  "source": "v11_1_y_clean_core",
  "promptProfileId": "v12_camera_glamour_curvy_model",
  "promptSnippet": "low-angle close perspective; waist_up / thigh_up. low-angle glamour camera close to the body, character leaning toward the lens with one hand reaching softly forward, dramatic but elegant foreshortened hand not covering the face, the other hand resting near the waist or hip.",
  "compactNegativeAdditions": [
    "wrong pose",
    "wrong camera angle",
    "broken foreshortening",
    "distorted perspective",
    "impossible spine bend",
    "face covered",
    "body hidden by arms",
    "item in hand",
    "handheld prop"
  ]
},
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
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons.",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Weapon",
    "uiIcon": "?",
    "source": "v11_1_y_clean_core"
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
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons.",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Weapon",
    "uiIcon": "?",
    "source": "v11_1_y_clean_core"
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
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons.",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Weapon",
    "uiIcon": "?",
    "source": "v11_1_y_clean_core"
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
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons.",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Weapon",
    "uiIcon": "?",
    "source": "v11_1_y_clean_core"
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
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons.",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Weapon",
    "uiIcon": "?",
    "source": "v11_1_y_clean_core"
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
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons.",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Weapon",
    "uiIcon": "?",
    "source": "v11_1_y_clean_core"
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
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons.",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Weapon",
    "uiIcon": "?",
    "source": "v11_1_y_clean_core"
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
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons.",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Weapon",
    "uiIcon": "?",
    "source": "v11_1_y_clean_core"
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
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons.",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Weapon",
    "uiIcon": "?",
    "source": "v11_1_y_clean_core"
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
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons.",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Weapon",
    "uiIcon": "?",
    "source": "v11_1_y_clean_core"
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
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons.",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Weapon",
    "uiIcon": "?",
    "source": "v11_1_y_clean_core"
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
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons.",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Weapon",
    "uiIcon": "?",
    "source": "v11_1_y_clean_core"
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
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons.",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Weapon",
    "uiIcon": "?",
    "source": "v11_1_y_clean_core"
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
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons.",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Weapon",
    "uiIcon": "?",
    "source": "v11_1_y_clean_core"
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
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons.",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Weapon",
    "uiIcon": "?",
    "source": "v11_1_y_clean_core"
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
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons.",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Weapon",
    "uiIcon": "?",
    "source": "v11_1_y_clean_core"
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
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons.",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Weapon",
    "uiIcon": "?",
    "source": "v11_1_y_clean_core"
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
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons.",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Weapon",
    "uiIcon": "?",
    "source": "v11_1_y_clean_core"
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
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons.",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Weapon",
    "uiIcon": "?",
    "source": "v11_1_y_clean_core"
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
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons.",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Weapon",
    "uiIcon": "?",
    "source": "v11_1_y_clean_core"
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
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons.",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Weapon",
    "uiIcon": "?",
    "source": "v11_1_y_clean_core"
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
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons.",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Weapon",
    "uiIcon": "?",
    "source": "v11_1_y_clean_core"
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
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons.",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Weapon",
    "uiIcon": "?",
    "source": "v11_1_y_clean_core"
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
    "noItemRule": "Do not show this pose in no-item mode. Do not add random weapons.",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Weapon",
    "uiIcon": "?",
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V117-WF-KATANA-REST-01",
    "title": "Katana Sheathed Hip Rest",
    "titleTH": "Katana Sheathed Hip Rest",
    "category": "weapon_action",
    "uiCategory": "combat",
    "subcategory": "passive_weapon_hold",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Full-body elegant standing pose with calm battle presence, one hand resting near the waist or lightly touching the sheathed katana or tachi at the left hip, scabbard physically attached to the waist, other arm relaxed naturally, face unobstructed.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "passive_weapon_hold",
    "compatibleItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleWeaponFamilies": [
      "katana",
      "tachi",
      "sword"
    ],
    "avoidWeaponFamilies": [
      "large_weapon",
      "greatsword",
      "heavy_blade",
      "rifle",
      "bow",
      "spear",
      "polearm",
      "hammer"
    ],
    "weaponHandPlacement": true,
    "explicitItemHold": true,
    "weaponPresentation": "katana_sheathed_hip",
    "holdStyle": "sheathed_rest",
    "restStyle": "sheathed_side",
    "familySpecificItemPrompts": {
      "katana": "The katana/tachi is sheathed at the left hip with the scabbard physically attached to the waist, one visible hand resting near the hilt.",
      "tachi": "The tachi is sheathed at the left hip with the scabbard physically attached to the waist, one visible hand resting near the hilt.",
      "sword": "The sword is sheathed at the hip with the scabbard physically attached to the waist, one visible hand resting near the hilt."
    },
    "negativeAdditions": [
      "floating katana",
      "detached scabbard",
      "katana planted in the ground",
      "grounded katana tip",
      "upside-down katana",
      "weapon not held"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V117-WF-KATANA-HOLD-01",
    "title": "Katana Low Side Hold",
    "titleTH": "Katana Low Side Hold",
    "category": "weapon_action",
    "uiCategory": "combat",
    "subcategory": "passive_weapon_hold",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Full-body elegant standing pose with moderate torso rotation, one visible hand firmly gripping the katana or tachi lowered beside the outer thigh, blade angled diagonally downward, physically connected to the hand, not planted on the ground.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "passive_weapon_hold",
    "compatibleItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleWeaponFamilies": [
      "katana",
      "tachi",
      "sword"
    ],
    "avoidWeaponFamilies": [
      "large_weapon",
      "greatsword",
      "heavy_blade",
      "rifle",
      "bow",
      "spear",
      "polearm",
      "hammer"
    ],
    "weaponHandPlacement": true,
    "explicitItemHold": true,
    "weaponPresentation": "katana_low_side_hold",
    "holdStyle": "passive_weapon_hold",
    "restStyle": "low_side_hold",
    "familySpecificItemPrompts": {
      "katana": "One visible hand firmly grips the katana/tachi lowered beside the outer thigh, blade angled diagonally downward, physically connected to the hand.",
      "tachi": "One visible hand firmly grips the tachi lowered beside the outer thigh, blade angled diagonally downward, physically connected to the hand.",
      "sword": "One visible hand firmly grips the sword lowered beside the outer thigh, blade angled diagonally downward, physically connected to the hand."
    },
    "negativeAdditions": [
      "floating katana",
      "katana planted in the ground",
      "grounded katana tip",
      "upside-down katana",
      "weapon not held"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V117-WF-HEAVY-REST-01",
    "title": "Greatsword Grounded Rest",
    "titleTH": "Greatsword Grounded Rest",
    "category": "weapon_action",
    "uiCategory": "long_item",
    "subcategory": "passive_weapon_hold",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Full-body strong standing pose, both hands or one visible hand supporting a heavy greatsword, hammer, axe, or mace resting naturally beside the body, tip or head grounded with visible weight, not floating, not crossing the face or torso.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "passive_weapon_hold",
    "compatibleItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleWeaponFamilies": [
      "large_weapon",
      "greatsword",
      "heavy_blade",
      "hammer",
      "axe",
      "mace"
    ],
    "avoidWeaponFamilies": [
      "katana",
      "tachi",
      "bow",
      "rifle",
      "gun",
      "dagger"
    ],
    "weaponHandPlacement": true,
    "explicitItemHold": true,
    "weaponPresentation": "greatsword_grounded_rest",
    "holdStyle": "passive_weapon_hold",
    "restStyle": "grounded_vertical",
    "familySpecificItemPrompts": {
      "large_weapon": "The heavy weapon rests beside the body with visible weight, supported by one or both visible hands, with the tip or head naturally grounded.",
      "greatsword": "The heavy greatsword rests beside the body with visible weight, supported by one or both visible hands, blade tip naturally grounded.",
      "hammer": "The hammer or mallet rests with its head lowered beside the body, visibly supported by one or both hands, not floating.",
      "axe": "The axe rests with its head lowered beside the body, visibly supported by one or both hands, not floating.",
      "mace": "The mace rests with its head lowered beside the body, visibly supported by one or both hands, not floating."
    },
    "negativeAdditions": [
      "weightless oversized weapon",
      "floating heavy weapon",
      "weapon not held",
      "extra weapon"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V117-WF-BOW-CARRY-01",
    "title": "Bow Relaxed Side Carry",
    "titleTH": "Bow Relaxed Side Carry",
    "category": "weapon_action",
    "uiCategory": "combat",
    "subcategory": "passive_weapon_hold",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Full-body relaxed archer stance, one visible hand holding the bow lowered beside the outer thigh, bow not drawn, not vertically planted, not crossing the face or torso.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "passive_weapon_hold",
    "compatibleItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleWeaponFamilies": [
      "bow",
      "longbow",
      "yumi"
    ],
    "avoidWeaponFamilies": [
      "katana",
      "tachi",
      "sword",
      "large_weapon",
      "greatsword",
      "spear",
      "rifle",
      "gun"
    ],
    "riskHints": [
      "ranged_safe"
    ],
    "weaponHandPlacement": true,
    "explicitItemHold": true,
    "weaponPresentation": "bow_low_side_carry",
    "holdStyle": "passive_weapon_hold",
    "restStyle": "relaxed_carry",
    "familySpecificItemPrompts": {
      "bow": "The bow is lowered beside the outer thigh and held in one visible hand, not drawn, not vertically planted, not crossing the face or torso.",
      "longbow": "The longbow is lowered beside the outer thigh and held in one visible hand, not drawn, not vertically planted, not crossing the face or torso.",
      "yumi": "The yumi bow is lowered beside the outer thigh and held in one visible hand, not drawn, not vertically planted, not crossing the face or torso."
    },
    "negativeAdditions": [
      "bow planted like staff",
      "bow crossing face",
      "bow used as sword",
      "floating bow",
      "extra bow"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V117-WF-SPEAR-REST-01",
    "title": "Spear Upright Rest",
    "titleTH": "Spear Upright Rest",
    "category": "weapon_action",
    "uiCategory": "long_item",
    "subcategory": "passive_weapon_hold",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Full-body poised warrior stance, one visible hand gripping the spear or polearm shaft upright beside the body, base naturally grounded or angled near the outer frame, face and torso unobstructed.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "passive_weapon_hold",
    "compatibleItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleWeaponFamilies": [
      "spear",
      "polearm",
      "naginata",
      "lance",
      "trident"
    ],
    "avoidWeaponFamilies": [
      "katana",
      "tachi",
      "sword",
      "bow",
      "rifle",
      "gun",
      "dagger"
    ],
    "weaponHandPlacement": true,
    "explicitItemHold": true,
    "weaponPresentation": "spear_upright_rest",
    "holdStyle": "passive_weapon_hold",
    "restStyle": "upright_staff",
    "familySpecificItemPrompts": {
      "spear": "The spear or polearm is held upright beside the body with one visible hand gripping the shaft, the base naturally grounded or angled beside the frame.",
      "polearm": "The polearm is held upright beside the body with one visible hand gripping the shaft, the base naturally grounded or angled beside the frame.",
      "naginata": "The naginata is held upright beside the body with one visible hand gripping the shaft, the base naturally grounded or angled beside the frame.",
      "lance": "The lance is held upright beside the body with one visible hand gripping the shaft, the base naturally grounded or angled beside the frame.",
      "trident": "The trident is held upright beside the body with one visible hand gripping the shaft, the base naturally grounded or angled beside the frame."
    },
    "negativeAdditions": [
      "floating spear",
      "detached polearm",
      "weapon not held",
      "weapon covering face"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V117-WF-RIFLE-CARRY-01",
    "title": "Rifle Low Carry",
    "titleTH": "Rifle Low Carry",
    "category": "weapon_action",
    "uiCategory": "combat",
    "subcategory": "passive_weapon_hold",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Full-body relaxed tactical stance, rifle carried low across the lower body or slung beside the shoulder, not aiming across the face, not crossing the chest silhouette.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "passive_weapon_hold",
    "compatibleItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleWeaponFamilies": [
      "rifle",
      "long_gun"
    ],
    "avoidWeaponFamilies": [
      "katana",
      "tachi",
      "sword",
      "large_weapon",
      "spear",
      "bow",
      "gun",
      "dagger"
    ],
    "riskHints": [
      "ranged_safe"
    ],
    "weaponHandPlacement": true,
    "explicitItemHold": true,
    "weaponPresentation": "rifle_low_carry",
    "holdStyle": "passive_weapon_hold",
    "restStyle": "low_carry",
    "familySpecificItemPrompts": {
      "rifle": "The rifle is carried low across the lower body or slung beside the shoulder, not aiming across the face and not crossing the chest silhouette.",
      "long_gun": "The long gun is carried low across the lower body or slung beside the shoulder, not aiming across the face and not crossing the chest silhouette."
    },
    "negativeAdditions": [
      "gun crossing face",
      "rifle covering chest",
      "extra gun",
      "floating gun",
      "floating rifle"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V117-WF-DAGGER-HOLD-01",
    "title": "Dagger Low Side Hold",
    "titleTH": "Dagger Low Side Hold",
    "category": "weapon_action",
    "uiCategory": "combat",
    "subcategory": "passive_weapon_hold",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Full-body compact rogue stance, one visible hand holding a dagger low beside the outer thigh, small blade clearly separated from the body, not raised across the face or chest.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "passive_weapon_hold",
    "compatibleItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [
      "instrument_item",
      "document_item",
      "daily_item",
      "accessory_item",
      "tool_item",
      "prop",
      "none"
    ],
    "compatibleWeaponFamilies": [
      "dagger",
      "knife"
    ],
    "avoidWeaponFamilies": [
      "large_weapon",
      "greatsword",
      "katana",
      "tachi",
      "bow",
      "rifle",
      "spear"
    ],
    "weaponHandPlacement": true,
    "explicitItemHold": true,
    "weaponPresentation": "dagger_low_side_hold",
    "holdStyle": "passive_weapon_hold",
    "restStyle": "low_side_hold",
    "familySpecificItemPrompts": {
      "dagger": "The dagger is held low beside the outer thigh in one visible hand, small and clearly separated from the body.",
      "knife": "The knife is held low beside the outer thigh in one visible hand, small and clearly separated from the body."
    },
    "negativeAdditions": [
      "floating dagger",
      "extra dagger",
      "dagger crossing face",
      "weapon not held"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V114-WA-01",
    "title": "Sword Diagonal Slash",
    "titleTH": "ฟันดาบเฉียง",
    "descriptionTH": "ท่าโจมตีด้วยดาบฟันเฉียงชัดเจนจากด้านบนลงด้านล่าง โดยยังเห็นใบหน้าและรูปทรงดาบอ่านง่าย",
    "category": "weapon_action",
    "uiCategory": "combat",
    "uiCategoryName": "Weapon Active Attack",
    "uiIcon": "⚔️",
    "subcategory": "sword_diagonal_slash",
    "framing": "full_body",
    "intensity": "bold",
    "prompt": "Dynamic diagonal sword slash, torso twisted, weapon cutting in a clear diagonal arc from upper side to lower side, readable blade silhouette, strong combat motion, face visible, weapon not covering the face. Best for sword, katana, khopesh, and cutlass.",
    "noItemPrompt": "No-item mode cannot use Sword Diagonal Slash. Use an empty-hand battle presence pose instead.",
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
    "compatiblePresentationModes": [
      "combat"
    ],
    "avoidRiskTags": [
      "instrument_item",
      "document_item"
    ],
    "riskHints": [
      "weapon_or_long_item",
      "active_attack"
    ],
    "itemPlacementRule": "Keep the blade diagonal and readable with the face, eyes, mouth, chest silhouette, waist, and body outline visible.",
    "noItemRule": "No-item mode must not use this attack pose or invent a sword.",
    "negativeAdditions": [
      "weapon covering face",
      "blade crossing eyes",
      "blade hiding mouth",
      "unreadable blade",
      "excessive motion blur",
      "weapon fused with hand"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V114-WA-02",
    "title": "Katana Iaido Draw",
    "titleTH": "ชักคาตานะอิไอโด",
    "descriptionTH": "ท่าชักคาตานะแบบอิไอโด มือหนึ่งจับฝักที่เอว อีกมือดึงใบดาบออกครึ่งหนึ่ง",
    "category": "weapon_action",
    "uiCategory": "combat",
    "uiCategoryName": "Weapon Active Attack",
    "uiIcon": "⚔️",
    "subcategory": "katana_iaido_draw",
    "framing": "thigh_up",
    "intensity": "bold",
    "prompt": "Iaido katana draw pose, one hand gripping the sheath near the waist, the other hand drawing the blade halfway out, lowered stance, clean blade silhouette, face visible, hands readable. Best for katana and single sword characters.",
    "noItemPrompt": "No-item mode cannot use Katana Iaido Draw. Use an empty-hand ready stance instead.",
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
    "compatiblePresentationModes": [
      "combat"
    ],
    "avoidRiskTags": [
      "ranged_weapon"
    ],
    "riskHints": [
      "weapon_or_long_item",
      "active_attack"
    ],
    "itemPlacementRule": "Keep sheath and blade at waist level with both hands readable and the face unobstructed.",
    "noItemRule": "No-item mode must not invent a katana or sheath.",
    "negativeAdditions": [
      "missing sheath",
      "blade covering eyes",
      "hidden hands",
      "unreadable draw",
      "extra sword",
      "weapon fused with clothing"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V114-WA-03",
    "title": "Spear Forward Thrust",
    "titleTH": "แทงหอกไปข้างหน้า",
    "descriptionTH": "ท่าแทงหอกตรงไปข้างหน้าพร้อม perspective ชัด แต่ปลายหอกไม่บังตา",
    "category": "weapon_action",
    "uiCategory": "long_item",
    "uiCategoryName": "Weapon Active Attack",
    "uiIcon": "⚔️",
    "subcategory": "spear_forward_thrust",
    "framing": "full_body",
    "intensity": "bold",
    "prompt": "Forward spear thrust, one foot stepping forward, spear extended toward the viewer with a clear pointed tip, strong foreshortening, readable shaft, face visible beside the weapon, weapon not covering the eyes. Best for spear, lance, and trident.",
    "noItemPrompt": "No-item mode cannot use Spear Forward Thrust. Use an empty-hand forward stance instead.",
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
    "compatiblePresentationModes": [
      "combat"
    ],
    "avoidRiskTags": [
      "closeup"
    ],
    "riskHints": [
      "weapon_or_long_item",
      "large_item_safe",
      "active_attack"
    ],
    "itemPlacementRule": "Keep the spear shaft continuous and the point offset from the eyes, mouth, chest silhouette, and waist.",
    "noItemRule": "No-item mode must not invent a spear, lance, or trident.",
    "negativeAdditions": [
      "spear covering eyes",
      "shaft crossing mouth",
      "broken spear shaft",
      "unreadable spear tip",
      "weapon piercing body"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V114-WA-04",
    "title": "Rapier Piercing Lunge",
    "titleTH": "ลันจ์แทงเรเปียร์",
    "descriptionTH": "ท่าลันจ์ฟันดาบแบบนักดวล เหยียดแขนตรงพร้อมใบดาบบางอ่านง่าย",
    "category": "weapon_action",
    "uiCategory": "combat",
    "uiCategoryName": "Weapon Active Attack",
    "uiIcon": "⚔️",
    "subcategory": "rapier_piercing_lunge",
    "framing": "full_body",
    "intensity": "bold",
    "prompt": "Elegant rapier piercing lunge, long forward step, sword arm extended straight, graceful duelist posture, thin blade clearly visible, face visible, off-hand balanced behind the body. Best for rapier, estoc, and thin sword.",
    "noItemPrompt": "No-item mode cannot use Rapier Piercing Lunge. Use an empty-hand noble stance instead.",
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
    "compatiblePresentationModes": [
      "combat"
    ],
    "avoidRiskTags": [
      "large_weapon"
    ],
    "riskHints": [
      "active_attack"
    ],
    "itemPlacementRule": "Keep the thin blade visible beside the face line without crossing the eyes or mouth.",
    "noItemRule": "No-item mode must not invent a rapier or thin blade.",
    "negativeAdditions": [
      "blade covering eyes",
      "invisible thin blade",
      "hidden sword hand",
      "awkward lunge anatomy",
      "extra blade"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V114-WA-05",
    "title": "Dual Dagger Cross Strike",
    "titleTH": "มีดคู่ไขว้โจมตี",
    "descriptionTH": "ท่าโจมตีมีดคู่แบบนักลอบสังหาร แขนไขว้เป็นรูป X แต่ไม่บังดวงตา",
    "category": "weapon_action",
    "uiCategory": "combat",
    "uiCategoryName": "Weapon Active Attack",
    "uiIcon": "⚔️",
    "subcategory": "dual_dagger_cross_strike",
    "framing": "thigh_up",
    "intensity": "bold",
    "prompt": "Dual dagger cross strike, both arms crossing in a clear X-shaped attack pose, two short blades visible, close-range assassin motion, face visible above the crossed arms, no blade covering the eyes. Best for dual daggers and short blades.",
    "noItemPrompt": "No-item mode cannot use Dual Dagger Cross Strike. Use an empty-hand close-range stance instead.",
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
    "compatiblePresentationModes": [
      "combat"
    ],
    "avoidRiskTags": [
      "large_weapon",
      "ranged_weapon"
    ],
    "riskHints": [
      "active_attack",
      "dual_item"
    ],
    "itemPlacementRule": "Keep two short blades separate from hands, face, eyes, chest silhouette, and waist.",
    "noItemRule": "No-item mode must not invent daggers or short blades.",
    "negativeAdditions": [
      "missing second dagger",
      "extra daggers",
      "blade covering eyes",
      "crossed arms hiding face",
      "merged paired blades"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V114-WA-06",
    "title": "Axe Wide Swing",
    "titleTH": "เหวี่ยงขวานวงกว้าง",
    "descriptionTH": "ท่าเหวี่ยงขวานวงกว้างด้านข้าง มีน้ำหนักและอ่านหัวขวานชัด",
    "category": "weapon_action",
    "uiCategory": "combat",
    "uiCategoryName": "Weapon Active Attack",
    "uiIcon": "⚔️",
    "subcategory": "axe_wide_swing",
    "framing": "full_body",
    "intensity": "bold",
    "prompt": "Wide axe swing, body turning into a broad side arc, heavy axe head clearly visible, strong grounded stance, readable handle, face visible, no excessive motion blur. Best for axe and battle axe.",
    "noItemPrompt": "No-item mode cannot use Axe Wide Swing. Use an empty-hand grounded stance instead.",
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
    "compatiblePresentationModes": [
      "combat"
    ],
    "avoidRiskTags": [
      "closeup"
    ],
    "riskHints": [
      "weapon_or_long_item",
      "large_item_safe",
      "active_attack"
    ],
    "itemPlacementRule": "Keep axe head and handle readable with the arc outside the face, chest silhouette, waist, and body outline.",
    "noItemRule": "No-item mode must not invent an axe.",
    "negativeAdditions": [
      "axe covering face",
      "unreadable axe head",
      "excessive motion blur",
      "broken handle",
      "weapon fused with arm"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V114-WA-07",
    "title": "Hammer Overhead Smash",
    "titleTH": "ยกค้อนทุบลง",
    "descriptionTH": "ท่ายกค้อนหรือกระบองหนักเหนือศีรษะ เตรียมทุบลงด้านหน้า",
    "category": "weapon_action",
    "uiCategory": "long_item",
    "uiCategoryName": "Weapon Active Attack",
    "uiIcon": "⚔️",
    "subcategory": "hammer_overhead_smash",
    "framing": "full_body",
    "intensity": "bold",
    "prompt": "Overhead hammer smash, both hands lifting a heavy hammer above the head, preparing to strike downward, strong weight, clear handle and hammer head, face visible under the arms. Best for hammer, mace, and war club.",
    "noItemPrompt": "No-item mode cannot use Hammer Overhead Smash. Use an empty-hand heroic stance instead.",
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
    "compatiblePresentationModes": [
      "combat"
    ],
    "avoidRiskTags": [
      "closeup"
    ],
    "riskHints": [
      "weapon_or_long_item",
      "large_item_safe",
      "active_attack"
    ],
    "itemPlacementRule": "Keep the hammer above the head with face visible under the arms and the handle separated from hair, neck, and torso.",
    "noItemRule": "No-item mode must not invent a hammer or mace.",
    "negativeAdditions": [
      "hammer covering face",
      "hidden face under arms",
      "unreadable hammer head",
      "broken handle",
      "weapon piercing body"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V114-WA-08",
    "title": "Shield Guard Bash",
    "titleTH": "ตั้งโล่กระแทก",
    "descriptionTH": "ท่าตั้งโล่บุกกระแทกด้านหน้า โล่อยู่ต่ำกว่าใบหน้าและอ่านรูปทรงชัด",
    "category": "weapon_action",
    "uiCategory": "combat",
    "uiCategoryName": "Weapon Active Attack",
    "uiIcon": "🛡️",
    "subcategory": "shield_guard_bash",
    "framing": "thigh_up",
    "intensity": "bold",
    "prompt": "Shield guard bash, shield held firmly in front but below the face, body pushing forward, other hand balanced or holding a small weapon beside the body, shield silhouette readable, face visible above the shield. Best for shield, sword and shield, and spear and shield.",
    "noItemPrompt": "No-item mode cannot use Shield Guard Bash. Use an empty-hand guarded stance instead.",
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
    "compatiblePresentationModes": [
      "combat"
    ],
    "avoidRiskTags": [
      "ranged_weapon"
    ],
    "riskHints": [
      "weapon_or_long_item",
      "active_attack",
      "shield_safe"
    ],
    "itemPlacementRule": "Keep shield below the face and away from eyes, mouth, chest silhouette, waist, and full body outline.",
    "noItemRule": "No-item mode must not invent a shield.",
    "negativeAdditions": [
      "shield covering face",
      "shield hiding torso",
      "unreadable shield rim",
      "hidden hands",
      "shield fused with armor"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V114-WA-09",
    "title": "Bow Full Draw",
    "titleTH": "ง้างธนูเต็มสาย",
    "descriptionTH": "ท่าง้างธนูเต็มสาย ลูกศรตรงชัด แต่คันธนูไม่บังดวงตา",
    "category": "weapon_action",
    "uiCategory": "ranged_weapon",
    "uiCategoryName": "Weapon Active Attack",
    "uiIcon": "🏹",
    "subcategory": "bow_full_draw",
    "framing": "thigh_up",
    "intensity": "bold",
    "prompt": "Full bow draw, one arm extended holding the bow, other hand pulling the string to the cheek, arrow aligned clearly, face visible, bow not covering the eyes, elegant archer stance. Best for bow and longbow.",
    "noItemPrompt": "No-item mode cannot use Bow Full Draw. Use an empty-hand archer-like stance without any bow or arrow instead.",
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
    "compatiblePresentationModes": [
      "combat"
    ],
    "avoidRiskTags": [
      "closeup"
    ],
    "riskHints": [
      "ranged_safe",
      "active_attack"
    ],
    "itemPlacementRule": "Keep bowstring, arrow, hands, and eyes separated so the bow does not cross the eyes or mouth.",
    "noItemRule": "No-item mode must not invent a bow, arrow, or bowstring.",
    "negativeAdditions": [
      "bow covering eyes",
      "arrow crossing mouth",
      "bowstring fused with fingers",
      "missing arrow",
      "impossible bow grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V114-WA-10",
    "title": "Gun Side Aim",
    "titleTH": "เล็งปืนเฉียงข้าง",
    "descriptionTH": "ท่าเล็งปืนเฉียงข้างหรือสามส่วนที่ยังเห็นใบหน้าชัด ไม่บังตาหรือปาก",
    "category": "weapon_action",
    "uiCategory": "ranged_weapon",
    "uiCategoryName": "Weapon Active Attack",
    "uiIcon": "🎯",
    "subcategory": "gun_side_aim",
    "framing": "waist_up",
    "intensity": "bold",
    "prompt": "Side-aim gun pose, firearm angled to the side or three-quarter front, arms steady, face fully visible, gun not crossing the eyes or mouth, clean tactical silhouette. Best for gun, pistol, and rifle.",
    "noItemPrompt": "No-item mode cannot use Gun Side Aim. Use an empty-hand tactical stance without any firearm instead.",
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
    "compatiblePresentationModes": [
      "combat"
    ],
    "avoidRiskTags": [
      "closeup"
    ],
    "riskHints": [
      "ranged_safe",
      "active_attack"
    ],
    "itemPlacementRule": "Keep firearm angled beside the face line, never crossing eyes, mouth, neck, chest silhouette, or waist.",
    "noItemRule": "No-item mode must not invent a gun, pistol, rifle, or firearm.",
    "negativeAdditions": [
      "gun covering face",
      "gun crossing eyes",
      "gun crossing mouth",
      "impossible gun grip",
      "extra firearm"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V114-WA-11",
    "title": "Scythe Crescent Sweep",
    "titleTH": "กวาดเคียวรูปจันทร์เสี้ยว",
    "descriptionTH": "ท่ากวาดเคียววงกว้างด้านข้าง ใบเคียวโค้งอ่านชัดและแยกจากตัวละคร",
    "category": "weapon_action",
    "uiCategory": "long_item",
    "uiCategoryName": "Weapon Active Attack",
    "uiIcon": "⚔️",
    "subcategory": "scythe_crescent_sweep",
    "framing": "full_body",
    "intensity": "bold",
    "prompt": "Scythe crescent sweep, long scythe held to the side in a broad crescent-shaped attack arc, readable curved blade, flowing cloak motion, face visible, weapon separated from hair and body. Best for scythe and polearm.",
    "noItemPrompt": "No-item mode cannot use Scythe Crescent Sweep. Use an empty-hand sweeping motion instead.",
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
    "compatiblePresentationModes": [
      "combat"
    ],
    "avoidRiskTags": [
      "closeup"
    ],
    "riskHints": [
      "weapon_or_long_item",
      "large_item_safe",
      "active_attack"
    ],
    "itemPlacementRule": "Keep the scythe outside the face and body outline with a continuous shaft and readable curved blade.",
    "noItemRule": "No-item mode must not invent a scythe or polearm.",
    "negativeAdditions": [
      "scythe covering face",
      "blade tangled in hair",
      "broken scythe shaft",
      "weapon merged with body",
      "excessive motion blur"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V114-WA-12",
    "title": "Greatsword Shoulder Charge",
    "titleTH": "พุ่งพร้อมดาบใหญ่พาดไหล่",
    "descriptionTH": "ท่าพุ่งไปข้างหน้าพร้อมดาบใหญ่พาดไหล่หรือเอียงหลังลำตัว เห็น silhouette ดาบชัด",
    "category": "weapon_action",
    "uiCategory": "long_item",
    "uiCategoryName": "Weapon Active Attack",
    "uiIcon": "⚔️",
    "subcategory": "greatsword_shoulder_charge",
    "framing": "full_body",
    "intensity": "bold",
    "prompt": "Greatsword shoulder charge, massive sword resting over one shoulder or angled behind the body, character leaning forward into motion, strong heroic attack pose, face visible, sword silhouette readable. Best for greatsword and large weapon.",
    "noItemPrompt": "No-item mode cannot use Greatsword Shoulder Charge. Use an empty-hand forward charge instead.",
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
    "compatiblePresentationModes": [
      "combat"
    ],
    "avoidRiskTags": [
      "closeup"
    ],
    "riskHints": [
      "weapon_or_long_item",
      "large_item_safe",
      "active_attack"
    ],
    "itemPlacementRule": "Keep the greatsword behind or above the shoulder, separated from face, hair, chest silhouette, waist, and body outline.",
    "noItemRule": "No-item mode must not invent a greatsword or large weapon.",
    "negativeAdditions": [
      "greatsword covering face",
      "giant blade hiding torso",
      "weightless sword",
      "extra sword",
      "weapon fused with shoulder"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V114-LI-01",
    "title": "Teacup Sip",
    "titleTH": "จิบชา",
    "descriptionTH": "ท่าจิบชาสง่างาม ถือถ้วยชาใกล้ริมฝีปากแต่ไม่บังดวงตา",
    "category": "lifestyle_interaction",
    "uiCategory": "glamour_showcase",
    "uiCategoryName": "Lifestyle Item Interaction",
    "uiIcon": "☕",
    "subcategory": "teacup_sip",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Elegant teacup sip pose, holding a small teacup near the lips with relaxed fingers, other hand holding saucer or resting near the waist, face visible, cup not covering the eyes. For teacup, cup, and chalice items.",
    "noItemPrompt": "No-item mode cannot use Teacup Sip. Use an empty-hand elegant portrait instead.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "serve_carry",
    "compatibleItemRoles": [
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "tool_item",
      "prop",
      "ritual_item"
    ],
    "preferredItemRoles": [
      "daily_item",
      "prop",
      "ritual_item"
    ],
    "avoidItemRoles": [
      "weapon"
    ],
    "compatiblePresentationModes": [
      "lifestyle",
      "glamour",
      "royal",
      "regal",
      "ceremonial"
    ],
    "avoidRiskTags": [
      "weapon_or_long_item"
    ],
    "riskHints": [
      "prop_readability"
    ],
    "itemPlacementRule": "Keep cup below the eyes with relaxed readable fingers and clear separation from lips, face, chest silhouette, and waist.",
    "noItemRule": "No-item mode must not invent a cup, saucer, chalice, or drink.",
    "negativeAdditions": [
      "cup covering eyes",
      "cup fused with lips",
      "hidden fingers",
      "spilled tea clutter",
      "weaponized cup"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V114-LI-02",
    "title": "Serving Tray Presentation",
    "titleTH": "ยื่นถาดเสิร์ฟ",
    "descriptionTH": "ท่ายื่นถาดเสิร์ฟอย่างสุภาพ ถาดอยู่ระดับเอวหรืออกล่าง ไม่บังลำตัว",
    "category": "lifestyle_interaction",
    "uiCategory": "glamour_showcase",
    "uiCategoryName": "Lifestyle Item Interaction",
    "uiIcon": "🍵",
    "subcategory": "serving_tray_presentation",
    "framing": "thigh_up",
    "intensity": "safe",
    "prompt": "Serving tray presentation, holding a tray with both hands at waist or lower chest level, tray flat and readable, polite posture, face visible, tray not covering the torso silhouette. For tray, dessert tray, and tea tray items.",
    "noItemPrompt": "No-item mode cannot use Serving Tray Presentation. Use an empty-hand polite standing pose instead.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "serve_carry",
    "compatibleItemRoles": [
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "tool_item",
      "prop",
      "ritual_item"
    ],
    "preferredItemRoles": [
      "daily_item",
      "tool_item",
      "prop"
    ],
    "avoidItemRoles": [
      "weapon"
    ],
    "compatiblePresentationModes": [
      "lifestyle",
      "professional",
      "glamour",
      "royal"
    ],
    "avoidRiskTags": [
      "weapon_or_long_item"
    ],
    "riskHints": [
      "prop_readability"
    ],
    "itemPlacementRule": "Keep tray flat at waist or lower chest level with hands visible and face unobstructed.",
    "noItemRule": "No-item mode must not invent a tray or carried object.",
    "negativeAdditions": [
      "tray covering torso",
      "tray covering face",
      "hidden hands",
      "floating tray",
      "weaponized tray"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V114-LI-03",
    "title": "Fan Covering Smile",
    "titleTH": "พัดปิดรอยยิ้ม",
    "descriptionTH": "ท่าพัดเปิดปิดรอยยิ้มแบบชนชั้นสูง เห็นดวงตาและรูปทรงพัดชัด",
    "category": "lifestyle_interaction",
    "uiCategory": "glamour_showcase",
    "uiCategoryName": "Lifestyle Item Interaction",
    "uiIcon": "🪭",
    "subcategory": "fan_covering_smile",
    "framing": "bust",
    "intensity": "safe",
    "prompt": "Elegant fan covering smile pose, opened fan held near mouth or cheek, eyes visible above the fan, confident noble expression, fan shape readable, not covering the entire face. For fan items.",
    "noItemPrompt": "No-item mode cannot use Fan Covering Smile. Use an empty-hand noble portrait instead.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "glamour_showcase",
    "compatibleItemRoles": [
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "tool_item",
      "prop",
      "ritual_item"
    ],
    "preferredItemRoles": [
      "accessory_item",
      "daily_item",
      "prop"
    ],
    "avoidItemRoles": [
      "weapon"
    ],
    "compatiblePresentationModes": [
      "glamour",
      "royal",
      "regal",
      "lifestyle",
      "mystic"
    ],
    "avoidRiskTags": [
      "weapon_or_long_item"
    ],
    "riskHints": [
      "prop_readability"
    ],
    "itemPlacementRule": "Keep the fan below the eyes with eye line, hair, face shape, hands, and fan ribs readable.",
    "noItemRule": "No-item mode must not invent a fan.",
    "negativeAdditions": [
      "fan covering eyes",
      "fan covering entire face",
      "fan slash",
      "weaponized fan",
      "hidden fingers"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V114-LI-04",
    "title": "Hand Mirror Check",
    "titleTH": "ส่องกระจกมือ",
    "descriptionTH": "ท่าส่องกระจกมือใกล้แก้มหรือไหล่ กระจกไม่บังดวงตา",
    "category": "lifestyle_interaction",
    "uiCategory": "glamour_showcase",
    "uiCategoryName": "Lifestyle Item Interaction",
    "uiIcon": "🪞",
    "subcategory": "hand_mirror_check",
    "framing": "bust",
    "intensity": "safe",
    "prompt": "Hand mirror beauty check pose, holding a small hand mirror near the cheek or shoulder, face angled slightly toward the mirror, mirror readable, not blocking the eyes. For mirror and compact mirror items.",
    "noItemPrompt": "No-item mode cannot use Hand Mirror Check. Use an empty-hand beauty portrait instead.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "glamour_showcase",
    "compatibleItemRoles": [
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "tool_item",
      "prop",
      "ritual_item"
    ],
    "preferredItemRoles": [
      "accessory_item",
      "prop"
    ],
    "avoidItemRoles": [
      "weapon"
    ],
    "compatiblePresentationModes": [
      "glamour",
      "royal",
      "regal",
      "lifestyle",
      "mystic"
    ],
    "avoidRiskTags": [
      "weapon_or_long_item"
    ],
    "riskHints": [
      "prop_readability"
    ],
    "itemPlacementRule": "Keep mirror near cheek or shoulder with eyes, face contour, mirror rim, and hand readable.",
    "noItemRule": "No-item mode must not invent a mirror.",
    "negativeAdditions": [
      "mirror covering eyes",
      "mirror replacing face",
      "mirror weapon",
      "hidden hand",
      "reflection clutter"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V114-LI-05",
    "title": "Perfume Presenting",
    "titleTH": "โชว์ขวดน้ำหอม",
    "descriptionTH": "ท่าโชว์ขวดน้ำหอมหรือขวดยาเล็กใกล้ไหล่หรืออก เห็นขวดและใบหน้าชัด",
    "category": "lifestyle_interaction",
    "uiCategory": "glamour_showcase",
    "uiCategoryName": "Lifestyle Item Interaction",
    "uiIcon": "🧴",
    "subcategory": "perfume_presenting",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Perfume presenting pose, holding a small perfume bottle near shoulder or chest level, elegant wrist angle, bottle silhouette clear, face visible, no mist covering the face. For perfume bottle and potion vial items.",
    "noItemPrompt": "No-item mode cannot use Perfume Presenting. Use an empty-hand elegant portrait instead.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "present_item",
    "compatibleItemRoles": [
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "tool_item",
      "prop",
      "ritual_item"
    ],
    "preferredItemRoles": [
      "daily_item",
      "ritual_item",
      "tool_item",
      "prop"
    ],
    "avoidItemRoles": [
      "weapon"
    ],
    "compatiblePresentationModes": [
      "glamour",
      "lifestyle",
      "mystic",
      "professional"
    ],
    "avoidRiskTags": [
      "weapon_or_long_item"
    ],
    "riskHints": [
      "prop_readability"
    ],
    "itemPlacementRule": "Keep the bottle near shoulder or chest level, clear of eyes, mouth, chest silhouette, and effects.",
    "noItemRule": "No-item mode must not invent a bottle or vial.",
    "negativeAdditions": [
      "bottle covering face",
      "mist covering face",
      "vial fused with fingers",
      "weaponized bottle",
      "floating bottles"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V114-LI-06",
    "title": "Flower Offering",
    "titleTH": "ยื่นดอกไม้",
    "descriptionTH": "ท่ายื่นดอกไม้อย่างอ่อนโยน เห็นดอกไม้ มือ และใบหน้าชัด",
    "category": "lifestyle_interaction",
    "uiCategory": "glamour_showcase",
    "uiCategoryName": "Lifestyle Item Interaction",
    "uiIcon": "🌸",
    "subcategory": "flower_offering",
    "framing": "thigh_up",
    "intensity": "safe",
    "prompt": "Flower offering pose, gently extending a flower forward with one hand, other hand near chest or skirt, romantic graceful posture, flower readable, face visible. For flower, rose, and lotus items.",
    "noItemPrompt": "No-item mode cannot use Flower Offering. Use an empty-hand graceful gesture instead.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "present_item",
    "compatibleItemRoles": [
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "tool_item",
      "prop",
      "ritual_item"
    ],
    "preferredItemRoles": [
      "daily_item",
      "accessory_item",
      "prop",
      "ritual_item"
    ],
    "avoidItemRoles": [
      "weapon"
    ],
    "compatiblePresentationModes": [
      "glamour",
      "lifestyle",
      "royal",
      "ceremonial",
      "mystic"
    ],
    "avoidRiskTags": [
      "weapon_or_long_item"
    ],
    "riskHints": [
      "prop_readability"
    ],
    "itemPlacementRule": "Keep the flower forward but below the eye line with petals, stem, hand, and face readable.",
    "noItemRule": "No-item mode must not invent a flower.",
    "negativeAdditions": [
      "flower covering face",
      "flower fused with hand",
      "thorn weapon",
      "petal clutter covering eyes",
      "hidden fingers"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V114-LI-07",
    "title": "Book Reading",
    "titleTH": "อ่านหนังสือ",
    "descriptionTH": "ท่าอ่านหนังสือเปิดระดับอกล่าง หน้ากระดาษอ่านง่ายและไม่บังใบหน้า",
    "category": "lifestyle_interaction",
    "uiCategory": "glamour_showcase",
    "uiCategoryName": "Lifestyle Item Interaction",
    "uiIcon": "📖",
    "subcategory": "book_reading",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Open book reading pose, holding an open book at lower chest level, eyes softly looking down or toward viewer, book pages readable, book not covering the face. For book, grimoire, and ledger items.",
    "noItemPrompt": "No-item mode cannot use Book Reading. Use an empty-hand scholarly pose instead.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "read_write",
    "compatibleItemRoles": [
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "tool_item",
      "prop",
      "ritual_item"
    ],
    "preferredItemRoles": [
      "document_item",
      "ritual_item"
    ],
    "avoidItemRoles": [
      "weapon"
    ],
    "compatiblePresentationModes": [
      "scholar",
      "scholarly",
      "professional",
      "mystic",
      "lifestyle"
    ],
    "avoidRiskTags": [
      "weapon_or_long_item"
    ],
    "riskHints": [
      "document_safe",
      "prop_readability"
    ],
    "itemPlacementRule": "Keep the book at lower chest level with pages, hands, face, and chest silhouette readable.",
    "noItemRule": "No-item mode must not invent a book, grimoire, or ledger.",
    "negativeAdditions": [
      "book covering face",
      "unreadable pages",
      "floating pages clutter",
      "book used as weapon",
      "hidden fingers"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V114-LI-08",
    "title": "Scroll Writing",
    "titleTH": "เขียนบนม้วนคัมภีร์",
    "descriptionTH": "ท่าเขียนบนม้วนคัมภีร์หรือแผ่น parchment มือและ scroll อ่านชัด",
    "category": "lifestyle_interaction",
    "uiCategory": "glamour_showcase",
    "uiCategoryName": "Lifestyle Item Interaction",
    "uiIcon": "📜",
    "subcategory": "scroll_writing",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Scroll writing pose, holding an open scroll or parchment with one hand and writing with a pen or brush in the other, scholarly posture, scroll readable, hands visible. For scroll, parchment, reed pen, and brush items.",
    "noItemPrompt": "No-item mode cannot use Scroll Writing. Use an empty-hand scholarly pose instead.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "read_write",
    "compatibleItemRoles": [
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "tool_item",
      "prop",
      "ritual_item"
    ],
    "preferredItemRoles": [
      "document_item",
      "tool_item",
      "ritual_item"
    ],
    "avoidItemRoles": [
      "weapon"
    ],
    "compatiblePresentationModes": [
      "scholar",
      "scholarly",
      "professional",
      "mystic",
      "ceremonial"
    ],
    "avoidRiskTags": [
      "weapon_or_long_item"
    ],
    "riskHints": [
      "document_safe",
      "prop_readability"
    ],
    "itemPlacementRule": "Keep scroll, writing hand, pen or brush, face, and chest silhouette readable without floating text clutter.",
    "noItemRule": "No-item mode must not invent a scroll, parchment, pen, or brush.",
    "negativeAdditions": [
      "scroll covering face",
      "floating text wall",
      "hidden writing hand",
      "scroll used as weapon",
      "unreadable parchment"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V114-LI-09",
    "title": "Lantern Walk",
    "titleTH": "เดินถือโคมไฟ",
    "descriptionTH": "ท่าเดินถือโคมไฟข้างลำตัว แสงไม่บังหน้าและโคมอ่านชัด",
    "category": "lifestyle_interaction",
    "uiCategory": "soft_motion",
    "uiCategoryName": "Lifestyle Item Interaction",
    "uiIcon": "🏮",
    "subcategory": "lantern_walk",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Lantern walking pose, one hand holding a lantern down beside the body, other hand lightly holding cloak or skirt, gentle walking motion, lantern readable, face visible. For lantern and oil lamp items.",
    "noItemPrompt": "No-item mode cannot use Lantern Walk. Use an empty-hand walking pose instead.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "hold_item",
    "compatibleItemRoles": [
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "tool_item",
      "prop",
      "ritual_item"
    ],
    "preferredItemRoles": [
      "daily_item",
      "tool_item",
      "ritual_item",
      "prop"
    ],
    "avoidItemRoles": [
      "weapon"
    ],
    "compatiblePresentationModes": [
      "lifestyle",
      "travel",
      "mystic",
      "ceremonial"
    ],
    "avoidRiskTags": [
      "weapon_or_long_item"
    ],
    "riskHints": [
      "prop_readability"
    ],
    "itemPlacementRule": "Keep lantern beside the body below the face with glow separated from eyes, hair, hands, and torso silhouette.",
    "noItemRule": "No-item mode must not invent a lantern or lamp.",
    "negativeAdditions": [
      "lantern covering face",
      "lamp fused with hand",
      "glow hiding eyes",
      "weaponized lantern",
      "floating lamp clutter"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V114-LI-10",
    "title": "Key Unlocking",
    "titleTH": "ไขกุญแจ",
    "descriptionTH": "ท่ายื่นกุญแจเหมือนกำลังไขประตูที่อยู่นอกภาพ เห็นกุญแจระหว่างนิ้วชัด",
    "category": "lifestyle_interaction",
    "uiCategory": "glamour_showcase",
    "uiCategoryName": "Lifestyle Item Interaction",
    "uiIcon": "🔑",
    "subcategory": "key_unlocking",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Key unlocking pose, one hand extending a key forward as if opening a door, key clearly visible between fingers, body angled toward an unseen doorway, face visible. For key, keyring, and archive keycard items.",
    "noItemPrompt": "No-item mode cannot use Key Unlocking. Use an empty-hand reaching gesture instead.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "present_item",
    "compatibleItemRoles": [
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "tool_item",
      "prop",
      "ritual_item"
    ],
    "preferredItemRoles": [
      "accessory_item",
      "tool_item",
      "document_item",
      "prop"
    ],
    "avoidItemRoles": [
      "weapon"
    ],
    "compatiblePresentationModes": [
      "lifestyle",
      "professional",
      "scholarly",
      "mystic"
    ],
    "avoidRiskTags": [
      "weapon_or_long_item"
    ],
    "riskHints": [
      "prop_readability"
    ],
    "itemPlacementRule": "Keep the key visible between fingers and away from eyes, mouth, chest silhouette, and effects.",
    "noItemRule": "No-item mode must not invent a key or keycard.",
    "negativeAdditions": [
      "key covering eyes",
      "key fused with fingers",
      "hidden key",
      "weaponized key",
      "floating key clutter"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V114-LI-11",
    "title": "Broom Sweeping",
    "titleTH": "กวาดพื้น",
    "descriptionTH": "ท่าถือไม้กวาด ไม้ถูพื้น หรือไม้ปัดฝุ่น ใช้งานแบบอาชีพ ไม่ใช่อาวุธ",
    "category": "lifestyle_interaction",
    "uiCategory": "soft_motion",
    "uiCategoryName": "Lifestyle Item Interaction",
    "uiIcon": "🧹",
    "subcategory": "broom_sweeping",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Broom sweeping pose, holding a broom with both hands, broom angled down toward the floor, gentle cleaning motion, body leaning slightly, face visible, broom not used as a weapon. For broom, mop, and feather duster items.",
    "noItemPrompt": "No-item mode cannot use Broom Sweeping. Use an empty-hand professional standing pose instead.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "tool_use",
    "compatibleItemRoles": [
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "tool_item",
      "prop",
      "ritual_item"
    ],
    "preferredItemRoles": [
      "tool_item",
      "daily_item"
    ],
    "avoidItemRoles": [
      "weapon"
    ],
    "compatiblePresentationModes": [
      "professional",
      "lifestyle"
    ],
    "avoidRiskTags": [
      "weapon_or_long_item"
    ],
    "riskHints": [
      "prop_readability",
      "large_item_safe"
    ],
    "itemPlacementRule": "Keep broom angled downward toward the floor with both hands visible and face unobstructed.",
    "noItemRule": "No-item mode must not invent a broom, mop, or duster.",
    "negativeAdditions": [
      "broom used as weapon",
      "broom covering face",
      "hidden hands",
      "floating broom",
      "weaponized broom"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "V114-LI-12",
    "title": "Instrument Performance",
    "titleTH": "เล่นเครื่องดนตรี",
    "descriptionTH": "ท่าเล่นเครื่องดนตรีอย่างถูกตำแหน่ง เช่น เขาใกล้ริมฝีปาก พิณที่อก หรือไมค์ใกล้ปาก โดยไม่ใช้เป็นอาวุธ",
    "category": "lifestyle_interaction",
    "uiCategory": "glamour_showcase",
    "uiCategoryName": "Lifestyle Item Interaction",
    "uiIcon": "🎵",
    "subcategory": "instrument_performance",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Instrument performance pose, using the instrument naturally in its correct position, such as horn near lips, lyre held at chest, microphone near mouth, drum held at waist, face visible, instrument not used as a weapon. For horn, lyre, harp, sistrum, drum, flute, bell, microphone, guitar, and tambourine items.",
    "noItemPrompt": "No-item mode cannot use Instrument Performance. Use an empty-hand performer pose instead.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "play_instrument",
    "compatibleItemRoles": [
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "tool_item",
      "prop",
      "ritual_item"
    ],
    "preferredItemRoles": [
      "instrument_item",
      "ritual_item",
      "prop"
    ],
    "avoidItemRoles": [
      "weapon"
    ],
    "compatiblePresentationModes": [
      "lifestyle",
      "ceremonial",
      "scholarly",
      "glamour",
      "mystic"
    ],
    "avoidRiskTags": [
      "weapon_or_long_item"
    ],
    "riskHints": [
      "instrument_safe",
      "prop_readability"
    ],
    "itemPlacementRule": "Keep the instrument in a natural performance position with face, hands, chest silhouette, waist, and item shape readable.",
    "noItemRule": "No-item mode must not invent an instrument or microphone.",
    "negativeAdditions": [
      "instrument used as weapon",
      "instrument covering eyes",
      "instrument fused with face",
      "hidden hands",
      "weaponized instrument"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-01",
    "title": "Neutral Item Side-Hold Standing",
    "titleTH": "ท่ายืนถือของข้างลำตัวแบบกลาง",
    "descriptionTH": "โพสยืนสามส่วนถือของข้างลำตัว ใช้ได้กับอาวุธ พร็อพ เครื่องมือ หรือเครื่องดนตรีโดยไม่บังหน้าและลำตัว",
    "category": "universal_item_showcase",
    "uiCategory": "standing",
    "uiCategoryName": "Standing / ท่ายืน",
    "subcategory": "universal_item_standing",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Full-body three-quarter standing pose with the main item held vertically or diagonally beside the body in a relaxed readable grip. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Full-body three-quarter standing pose with both hands relaxed near the sides or waist. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 76,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": false,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-02",
    "title": "Waist-Up Item Beside Frame",
    "titleTH": "ท่าครึ่งตัวถือของข้างเฟรม",
    "descriptionTH": "โพสครึ่งตัวถือของชิดขอบเฟรม เน้นหน้า มือ และไอเท็มโดยไม่ปิดช่วงอกหรือเอว",
    "category": "universal_item_showcase",
    "uiCategory": "closeup_bust",
    "uiCategoryName": "Close-up / Portrait / ภาพครึ่งตัว",
    "subcategory": "universal_item_portrait",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Waist-up portrait with the main item placed along the side of the frame, one hand gripping or presenting it clearly. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Waist-up portrait with one hand near the waist and the other relaxed beside the body. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 76,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-03",
    "title": "Bust Portrait Low Item Hold",
    "titleTH": "ท่าพอร์ตเทรตถือของต่ำไม่บังหน้า",
    "descriptionTH": "โพสช่วงอกให้ของอยู่ต่ำกว่าหน้า เหมาะกับตัวที่มีของถือหลากหลายชนิด",
    "category": "universal_item_showcase",
    "uiCategory": "closeup_bust",
    "uiCategoryName": "Close-up / Portrait / ภาพครึ่งตัว",
    "subcategory": "universal_item_portrait",
    "framing": "bust",
    "intensity": "safe",
    "prompt": "Bust portrait with the main item held below shoulder level or beside the lower frame, face fully visible. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Bust portrait with hands framing the collar, jacket, or shoulder line without covering the face. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 76,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-04",
    "title": "Confident Item Hip-Level Pose",
    "titleTH": "ท่ายืนถือของระดับสะโพก",
    "descriptionTH": "โพสมั่นใจถือของระดับสะโพก ช่วยให้ไอเท็มอ่านง่ายและไม่ชนใบหน้า",
    "category": "universal_item_showcase",
    "uiCategory": "standing",
    "uiCategoryName": "Standing / ท่ายืน",
    "subcategory": "universal_item_standing",
    "framing": "thigh_up",
    "intensity": "safe",
    "prompt": "Thigh-up confident stance with the main item resting near hip level or angled beside the thigh. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Thigh-up confident stance with one hand near hip and the other relaxed. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 76,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-05",
    "title": "Soft Walking Item Carry",
    "titleTH": "ท่าเดินถือของแบบนุ่มนวล",
    "descriptionTH": "โพสเดินถือของแบบ lifestyle ใช้ได้กับไอดอล นักเดินทาง นักเวท หรือผู้ถือพร็อพ",
    "category": "universal_item_showcase",
    "uiCategory": "soft_motion",
    "uiCategoryName": "Soft Motion / เคลื่อนไหวสวย",
    "subcategory": "universal_item_motion",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Soft walking pose with the main item carried naturally at the side, fabric and hair flowing gently. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Soft walking pose with empty hands swinging naturally and elegant body rhythm. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 76,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": false,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-06",
    "title": "Stage Performer Item Pose",
    "titleTH": "ท่าโชว์บนเวทีพร้อมของถือ",
    "descriptionTH": "โพสไอดอล/นักแสดงถือไมค์ ไม้คทา กีตาร์ หรือพร็อพบนเวทีโดยคุมมือให้อ่านง่าย",
    "category": "universal_item_showcase",
    "uiCategory": "soft_motion",
    "uiCategoryName": "Soft Motion / เคลื่อนไหวสวย",
    "subcategory": "universal_item_stage",
    "framing": "thigh_up",
    "intensity": "safe",
    "prompt": "Thigh-up stage performer pose with the main item presented beside the body, energetic but readable. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Thigh-up stage performer pose with expressive empty hands and clean dancer silhouette. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 76,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-07",
    "title": "Seated Item Resting Beside Chair",
    "titleTH": "ท่านั่งวางของข้างเก้าอี้",
    "descriptionTH": "โพสนั่งให้ของพักข้างเก้าอี้หรือข้างตัว เหมาะกับของยาว เครื่องดนตรี หรือพร็อพใหญ่",
    "category": "universal_item_showcase",
    "uiCategory": "sitting",
    "uiCategoryName": "Sitting / ท่านั่ง",
    "subcategory": "universal_item_sitting",
    "framing": "seated_full_body",
    "intensity": "safe",
    "prompt": "Seated pose with the main item resting beside the chair, against the armrest, or near the outer side of the body. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Seated pose with hands resting naturally on lap, armrest, or near the waist. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 76,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": false,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-08",
    "title": "Leaning Item Side-Support",
    "titleTH": "ท่าเอนพิงถือของข้างตัว",
    "descriptionTH": "โพสเอนพิงโดยใช้ของเป็นเส้นข้างเฟรม ไม่ให้บังหน้าและลำตัว",
    "category": "universal_item_showcase",
    "uiCategory": "leaning",
    "uiCategoryName": "Leaning / ท่าเอน",
    "subcategory": "universal_item_leaning",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Leaning pose with the main item used as a side-frame support, vertical or diagonal beside the body. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Leaning pose with one hand resting on the wall, railing, hip, or jacket. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 76,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": false,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-09",
    "title": "Safe Combat Ready Item Down",
    "titleTH": "ท่าเตรียมพร้อมถือของต่ำ",
    "descriptionTH": "โพสต่อสู้ปลอดภัยโดยถืออาวุธหรือของหลักต่ำ/ข้างตัว ไม่ฟันผ่านหน้า",
    "category": "universal_item_showcase",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Action",
    "subcategory": "universal_item_combat",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Safe grounded combat-ready stance with the weapon or item held low-ready beside the body. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Safe grounded action stance with empty hands open or near waist, no weapon implied. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "combat_ready",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 76,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": false,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-10",
    "title": "Long Item Vertical Beside Body",
    "titleTH": "ท่าถือของยาวตั้งข้างตัว",
    "descriptionTH": "โพสสำหรับคทา ไม้เท้า ธนู อาวุธยาว หรือเครื่องมือยาว ให้อยู่แนวตั้งข้างตัว",
    "category": "universal_item_showcase",
    "uiCategory": "ranged_weapon",
    "uiCategoryName": "Long Item / ของยาว",
    "subcategory": "ranged_weapon",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Full-body pose with a staff, bow, long tool, or long weapon held vertically beside the body as a clean side silhouette. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Full-body pose with one arm relaxed by the side and the other near the waist. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "holding",
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
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 76,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": false,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-11",
    "title": "Shoulder-Level Item Showcase",
    "titleTH": "ท่าโชว์ของระดับไหล่ข้างเฟรม",
    "descriptionTH": "โพสโชว์ของระดับไหล่แต่ยังเว้นใบหน้าและลำคอชัดเจน",
    "category": "universal_item_showcase",
    "uiCategory": "closeup_bust",
    "uiCategoryName": "Close-up / Portrait / ภาพครึ่งตัว",
    "subcategory": "universal_item_portrait",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Waist-up item showcase with the main item angled near the outer shoulder, away from the face and neck. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Waist-up showcase with one hand near shoulder and one near waist. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 76,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-12",
    "title": "Two-Handed Item Lower Grip",
    "titleTH": "ท่าถือของสองมือต่ำกว่าช่วงอก",
    "descriptionTH": "โพสสองมือจับของแต่คุมให้มืออยู่ต่ำ ไม่ปิดหน้าและไม่กดลำตัว",
    "category": "universal_item_showcase",
    "uiCategory": "standing",
    "uiCategoryName": "Standing / ท่ายืน",
    "subcategory": "universal_item_standing",
    "framing": "knee_up",
    "intensity": "safe",
    "prompt": "Knee-up two-handed lower grip pose with the main item held below chest level in a clean readable line. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Knee-up pose with both empty hands placed elegantly near waist or jacket line. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 76,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-13",
    "title": "Instrument Side-Play Portrait",
    "titleTH": "ท่าพอร์ตเทรตเครื่องดนตรีข้างตัว",
    "descriptionTH": "โพสเครื่องดนตรีให้ตัวเครื่องอยู่ข้างลำตัว มือจับชัด ไม่บังหน้า",
    "category": "universal_item_showcase",
    "uiCategory": "closeup_bust",
    "uiCategoryName": "Close-up / Portrait / ภาพครึ่งตัว",
    "subcategory": "universal_instrument_portrait",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Waist-up performer portrait with instrument or stage prop kept to the side of the torso, strings or rod readable. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Waist-up performer portrait with expressive empty hands and clear face. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 76,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-14",
    "title": "Document or Tool Presenting Pose",
    "titleTH": "ท่านำเสนอเอกสารหรือเครื่องมือ",
    "descriptionTH": "โพสนำเสนอหนังสือ เอกสาร เครื่องมือ หรือพร็อพ โดยวางต่ำกว่าใบหน้า",
    "category": "universal_item_showcase",
    "uiCategory": "closeup_bust",
    "uiCategoryName": "Close-up / Portrait / ภาพครึ่งตัว",
    "subcategory": "universal_tool_document",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Waist-up presenting pose with book, document, tool, or prop held at lower chest or side level. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Waist-up presenting pose with open palm gesture and no item. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 76,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-15",
    "title": "Large Item Resting Grounded",
    "titleTH": "ท่าวางของใหญ่กับพื้นข้างตัว",
    "descriptionTH": "โพสของใหญ่/ของพิธีกรรม/เครื่องมือใหญ่ให้พักพื้นข้างตัว ไม่ทับตัวละคร",
    "category": "universal_item_showcase",
    "uiCategory": "long_item",
    "uiCategoryName": "Long Item / ของยาว",
    "subcategory": "universal_large_item",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Grounded full-body pose with large item resting on the floor beside the body, stable and not crossing the torso. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Grounded full-body pose with relaxed empty hands and strong silhouette. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 76,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": false,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-16",
    "title": "Relaxed Idol Baton Pose",
    "titleTH": "ท่าไอดอลถือแท่ง/พร็อพระดับข้างลำตัว",
    "descriptionTH": "โพสไอดอลถือบาตอง ไมค์ หรือพร็อพเล็กแบบมีจังหวะ ใช้กับ Mika และสายเวทีโดยตรง",
    "category": "universal_item_showcase",
    "uiCategory": "soft_motion",
    "uiCategoryName": "Soft Motion / เคลื่อนไหวสวย",
    "subcategory": "universal_stage_prop",
    "framing": "thigh_up",
    "intensity": "safe",
    "prompt": "Thigh-up idol performance pose with baton, microphone, or small prop held beside the hip or shoulder line, playful and readable. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Thigh-up idol performance pose with one hand on hip and one hand gesturing outward. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 76,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-17",
    "title": "Neutral Item Side-Hold Standing Variant",
    "titleTH": "ท่ายืนถือของข้างลำตัวแบบกลาง แบบมุมเฉียง",
    "descriptionTH": "โพสยืนสามส่วนถือของข้างลำตัว ใช้ได้กับอาวุธ พร็อพ เครื่องมือ หรือเครื่องดนตรีโดยไม่บังหน้าและลำตัว เวอร์ชันมุมเฉียงเพิ่ม movement แต่ยังคุมไอเท็มไม่ให้บังจุดสำคัญ",
    "category": "universal_item_showcase",
    "uiCategory": "standing",
    "uiCategoryName": "Standing / ท่ายืน",
    "subcategory": "universal_item_standing",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Diagonal full-body diagonal three-quarter standing pose with the main item held vertically or diagonally beside the body in a relaxed readable grip. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Full-body three-quarter standing pose with both hands relaxed near the sides or waist. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 74,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": false,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-18",
    "title": "Waist-Up Item Beside Frame Variant",
    "titleTH": "ท่าครึ่งตัวถือของข้างเฟรม แบบมุมเฉียง",
    "descriptionTH": "โพสครึ่งตัวถือของชิดขอบเฟรม เน้นหน้า มือ และไอเท็มโดยไม่ปิดช่วงอกหรือเอว เวอร์ชันมุมเฉียงเพิ่ม movement แต่ยังคุมไอเท็มไม่ให้บังจุดสำคัญ",
    "category": "universal_item_showcase",
    "uiCategory": "closeup_bust",
    "uiCategoryName": "Close-up / Portrait / ภาพครึ่งตัว",
    "subcategory": "universal_item_portrait",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Diagonal waist-up portrait with the main item placed along the side of the frame, one hand gripping or presenting it clearly. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Waist-up portrait with one hand near the waist and the other relaxed beside the body. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 74,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-19",
    "title": "Bust Portrait Low Item Hold Variant",
    "titleTH": "ท่าพอร์ตเทรตถือของต่ำไม่บังหน้า แบบมุมเฉียง",
    "descriptionTH": "โพสช่วงอกให้ของอยู่ต่ำกว่าหน้า เหมาะกับตัวที่มีของถือหลากหลายชนิด เวอร์ชันมุมเฉียงเพิ่ม movement แต่ยังคุมไอเท็มไม่ให้บังจุดสำคัญ",
    "category": "universal_item_showcase",
    "uiCategory": "closeup_bust",
    "uiCategoryName": "Close-up / Portrait / ภาพครึ่งตัว",
    "subcategory": "universal_item_portrait",
    "framing": "bust",
    "intensity": "safe",
    "prompt": "Bust portrait with the main item held below shoulder level or beside the lower frame, face fully visible. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Bust portrait with hands framing the collar, jacket, or shoulder line without covering the face. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 74,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-20",
    "title": "Confident Item Hip-Level Variant Pose",
    "titleTH": "ท่ายืนถือของระดับสะโพก แบบมุมเฉียง",
    "descriptionTH": "โพสมั่นใจถือของระดับสะโพก ช่วยให้ไอเท็มอ่านง่ายและไม่ชนใบหน้า เวอร์ชันมุมเฉียงเพิ่ม movement แต่ยังคุมไอเท็มไม่ให้บังจุดสำคัญ",
    "category": "universal_item_showcase",
    "uiCategory": "standing",
    "uiCategoryName": "Standing / ท่ายืน",
    "subcategory": "universal_item_standing",
    "framing": "thigh_up",
    "intensity": "safe",
    "prompt": "Thigh-up confident stance with the main item resting near hip level or angled beside the thigh. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Thigh-up confident stance with one hand near hip and the other relaxed. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 74,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-21",
    "title": "Soft Walking Item Carry Variant",
    "titleTH": "ท่าเดินถือของแบบนุ่มนวล แบบมุมเฉียง",
    "descriptionTH": "โพสเดินถือของแบบ lifestyle ใช้ได้กับไอดอล นักเดินทาง นักเวท หรือผู้ถือพร็อพ เวอร์ชันมุมเฉียงเพิ่ม movement แต่ยังคุมไอเท็มไม่ให้บังจุดสำคัญ",
    "category": "universal_item_showcase",
    "uiCategory": "soft_motion",
    "uiCategoryName": "Soft Motion / เคลื่อนไหวสวย",
    "subcategory": "universal_item_motion",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Soft walking pose with the main item carried naturally at the side, fabric and hair flowing gently. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Soft walking pose with empty hands swinging naturally and elegant body rhythm. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 74,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": false,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-22",
    "title": "Stage Performer Item Variant Pose",
    "titleTH": "ท่าโชว์บนเวทีพร้อมของถือ แบบมุมเฉียง",
    "descriptionTH": "โพสไอดอล/นักแสดงถือไมค์ ไม้คทา กีตาร์ หรือพร็อพบนเวทีโดยคุมมือให้อ่านง่าย เวอร์ชันมุมเฉียงเพิ่ม movement แต่ยังคุมไอเท็มไม่ให้บังจุดสำคัญ",
    "category": "universal_item_showcase",
    "uiCategory": "soft_motion",
    "uiCategoryName": "Soft Motion / เคลื่อนไหวสวย",
    "subcategory": "universal_item_stage",
    "framing": "thigh_up",
    "intensity": "safe",
    "prompt": "Thigh-up stage performer pose with the main item presented beside the body, energetic but readable. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Thigh-up stage performer pose with expressive empty hands and clean dancer silhouette. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 74,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-23",
    "title": "Seated Item Resting Beside Chair Variant",
    "titleTH": "ท่านั่งวางของข้างเก้าอี้ แบบมุมเฉียง",
    "descriptionTH": "โพสนั่งให้ของพักข้างเก้าอี้หรือข้างตัว เหมาะกับของยาว เครื่องดนตรี หรือพร็อพใหญ่ เวอร์ชันมุมเฉียงเพิ่ม movement แต่ยังคุมไอเท็มไม่ให้บังจุดสำคัญ",
    "category": "universal_item_showcase",
    "uiCategory": "sitting",
    "uiCategoryName": "Sitting / ท่านั่ง",
    "subcategory": "universal_item_sitting",
    "framing": "seated_full_body",
    "intensity": "safe",
    "prompt": "Seated pose with the main item resting beside the chair, against the armrest, or near the outer side of the body. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Seated pose with hands resting naturally on lap, armrest, or near the waist. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 74,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": false,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-24",
    "title": "Leaning Item Side-Support Variant",
    "titleTH": "ท่าเอนพิงถือของข้างตัว แบบมุมเฉียง",
    "descriptionTH": "โพสเอนพิงโดยใช้ของเป็นเส้นข้างเฟรม ไม่ให้บังหน้าและลำตัว เวอร์ชันมุมเฉียงเพิ่ม movement แต่ยังคุมไอเท็มไม่ให้บังจุดสำคัญ",
    "category": "universal_item_showcase",
    "uiCategory": "leaning",
    "uiCategoryName": "Leaning / ท่าเอน",
    "subcategory": "universal_item_leaning",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Leaning pose with the main item used as a side-frame support, vertical or diagonal beside the body. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Leaning pose with one hand resting on the wall, railing, hip, or jacket. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 74,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": false,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-25",
    "title": "Safe Combat Ready Item Down Variant",
    "titleTH": "ท่าเตรียมพร้อมถือของต่ำ แบบมุมเฉียง",
    "descriptionTH": "โพสต่อสู้ปลอดภัยโดยถืออาวุธหรือของหลักต่ำ/ข้างตัว ไม่ฟันผ่านหน้า เวอร์ชันมุมเฉียงเพิ่ม movement แต่ยังคุมไอเท็มไม่ให้บังจุดสำคัญ",
    "category": "universal_item_showcase",
    "uiCategory": "combat",
    "uiCategoryName": "Combat / Action",
    "subcategory": "universal_item_combat",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Safe grounded combat-ready stance with the weapon or item held low-ready beside the body. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Safe grounded action stance with empty hands open or near waist, no weapon implied. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "combat_ready",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 74,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": false,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-26",
    "title": "Long Item Vertical Beside Body Variant",
    "titleTH": "ท่าถือของยาวตั้งข้างตัว แบบมุมเฉียง",
    "descriptionTH": "โพสสำหรับคทา ไม้เท้า ธนู อาวุธยาว หรือเครื่องมือยาว ให้อยู่แนวตั้งข้างตัว เวอร์ชันมุมเฉียงเพิ่ม movement แต่ยังคุมไอเท็มไม่ให้บังจุดสำคัญ",
    "category": "universal_item_showcase",
    "uiCategory": "ranged_weapon",
    "uiCategoryName": "Long Item / ของยาว",
    "subcategory": "ranged_weapon",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Diagonal full-body pose with a staff, bow, long tool, or long weapon held vertically beside the body as a clean side silhouette. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Full-body pose with one arm relaxed by the side and the other near the waist. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "holding",
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
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 74,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": false,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-27",
    "title": "Shoulder-Level Item Showcase Variant",
    "titleTH": "ท่าโชว์ของระดับไหล่ข้างเฟรม แบบมุมเฉียง",
    "descriptionTH": "โพสโชว์ของระดับไหล่แต่ยังเว้นใบหน้าและลำคอชัดเจน เวอร์ชันมุมเฉียงเพิ่ม movement แต่ยังคุมไอเท็มไม่ให้บังจุดสำคัญ",
    "category": "universal_item_showcase",
    "uiCategory": "closeup_bust",
    "uiCategoryName": "Close-up / Portrait / ภาพครึ่งตัว",
    "subcategory": "universal_item_portrait",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Diagonal waist-up item showcase with the main item angled near the outer shoulder, away from the face and neck. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Waist-up showcase with one hand near shoulder and one near waist. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 74,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-28",
    "title": "Two-Handed Item Lower Grip Variant",
    "titleTH": "ท่าถือของสองมือต่ำกว่าช่วงอก แบบมุมเฉียง",
    "descriptionTH": "โพสสองมือจับของแต่คุมให้มืออยู่ต่ำ ไม่ปิดหน้าและไม่กดลำตัว เวอร์ชันมุมเฉียงเพิ่ม movement แต่ยังคุมไอเท็มไม่ให้บังจุดสำคัญ",
    "category": "universal_item_showcase",
    "uiCategory": "standing",
    "uiCategoryName": "Standing / ท่ายืน",
    "subcategory": "universal_item_standing",
    "framing": "knee_up",
    "intensity": "safe",
    "prompt": "Knee-up two-handed lower grip pose with the main item held below chest level in a clean readable line. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Knee-up pose with both empty hands placed elegantly near waist or jacket line. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 74,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-29",
    "title": "Instrument Side-Play Portrait Variant",
    "titleTH": "ท่าพอร์ตเทรตเครื่องดนตรีข้างตัว แบบมุมเฉียง",
    "descriptionTH": "โพสเครื่องดนตรีให้ตัวเครื่องอยู่ข้างลำตัว มือจับชัด ไม่บังหน้า เวอร์ชันมุมเฉียงเพิ่ม movement แต่ยังคุมไอเท็มไม่ให้บังจุดสำคัญ",
    "category": "universal_item_showcase",
    "uiCategory": "closeup_bust",
    "uiCategoryName": "Close-up / Portrait / ภาพครึ่งตัว",
    "subcategory": "universal_instrument_portrait",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Diagonal waist-up performer portrait with instrument or stage prop kept to the side of the torso, strings or rod readable. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Waist-up performer portrait with expressive empty hands and clear face. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 74,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-30",
    "title": "Document or Tool Presenting Variant Pose",
    "titleTH": "ท่านำเสนอเอกสารหรือเครื่องมือ แบบมุมเฉียง",
    "descriptionTH": "โพสนำเสนอหนังสือ เอกสาร เครื่องมือ หรือพร็อพ โดยวางต่ำกว่าใบหน้า เวอร์ชันมุมเฉียงเพิ่ม movement แต่ยังคุมไอเท็มไม่ให้บังจุดสำคัญ",
    "category": "universal_item_showcase",
    "uiCategory": "closeup_bust",
    "uiCategoryName": "Close-up / Portrait / ภาพครึ่งตัว",
    "subcategory": "universal_tool_document",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Diagonal waist-up presenting pose with book, document, tool, or prop held at lower chest or side level. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Waist-up presenting pose with open palm gesture and no item. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 74,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-31",
    "title": "Large Item Resting Grounded Variant",
    "titleTH": "ท่าวางของใหญ่กับพื้นข้างตัว แบบมุมเฉียง",
    "descriptionTH": "โพสของใหญ่/ของพิธีกรรม/เครื่องมือใหญ่ให้พักพื้นข้างตัว ไม่ทับตัวละคร เวอร์ชันมุมเฉียงเพิ่ม movement แต่ยังคุมไอเท็มไม่ให้บังจุดสำคัญ",
    "category": "universal_item_showcase",
    "uiCategory": "long_item",
    "uiCategoryName": "Long Item / ของยาว",
    "subcategory": "universal_large_item",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Grounded full-body pose with large item resting on the floor beside the body, stable and not crossing the torso. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Grounded full-body pose with relaxed empty hands and strong silhouette. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 74,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": false,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "UNI-ITEM-32",
    "title": "Relaxed Idol Baton Variant Pose",
    "titleTH": "ท่าไอดอลถือแท่ง/พร็อพระดับข้างลำตัว แบบมุมเฉียง",
    "descriptionTH": "โพสไอดอลถือบาตอง ไมค์ หรือพร็อพเล็กแบบมีจังหวะ ใช้กับ Mika และสายเวทีโดยตรง เวอร์ชันมุมเฉียงเพิ่ม movement แต่ยังคุมไอเท็มไม่ให้บังจุดสำคัญ",
    "category": "universal_item_showcase",
    "uiCategory": "soft_motion",
    "uiCategoryName": "Soft Motion / เคลื่อนไหวสวย",
    "subcategory": "universal_stage_prop",
    "framing": "thigh_up",
    "intensity": "safe",
    "prompt": "Thigh-up idol performance pose with baton, microphone, or small prop held beside the hip or shoulder line, playful and readable. Keep the item physically readable, held beside or below the face, not crossing the eyes, mouth, neck, chest silhouette, or waist line. Clean tasteful fantasy character-card composition.",
    "noItemPrompt": "Thigh-up idol performance pose with one hand on hip and one hand gesturing outward. Empty hands are posed naturally and do not imply any weapon, prop, instrument, book, staff, baton, or tool.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "accessory_item",
      "document_item",
      "instrument_item",
      "travel_item",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "lifestyle",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "royal",
      "travel"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "large_item_safe",
      "weapon_or_long_item",
      "ranged_safe",
      "prop_safe",
      "instrument_safe",
      "document_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "isUniversal": true,
    "collectionScore": 74,
    "collectionTags": [
      "universal_item",
      "safe_item_placement",
      "all_gender"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_readable_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, upper body, waist line, hands, and the main item readable without explicit nudity or awkward occlusion.",
    "negativeAdditions": [
      "item covering face",
      "item crossing eyes",
      "item blocking mouth",
      "item hiding torso",
      "tangled hands",
      "unreadable grip"
    ],
    "source": "v11_1_y_clean_core"
  },
  {
    "id": "NIS-CU-01",
    "title": "Universal Close-Up Shoulder Turn",
    "titleTH": "Close-up บิดไหล่แบบโชว์ตัว",
    "descriptionTH": "โพส close-up/portrait แบบบิดไหล่เล็กน้อย เหมาะกับโหมดไม่ถืออะไร ใช้ได้กับตัวละครทุกเพศโดยไม่พึ่งอาวุธหรือพร็อพ",
    "category": "neutral_showcase",
    "uiCategory": "closeup_bust",
    "uiCategoryName": "Close-up / Portrait / ภาพครึ่งตัว",
    "subcategory": "neutral_closeup",
    "framing": "bust",
    "intensity": "safe",
    "prompt": "Bust close-up portrait with a subtle shoulder turn, clear face, elegant neck and upper-body line, empty hands relaxed outside the main silhouette. No handheld item, no weapon, no prop. Tasteful fully clothed fantasy character showcase.",
    "noItemPrompt": "Bust close-up portrait with a subtle shoulder turn, clear face, elegant neck and upper-body line, empty hands relaxed outside the main silhouette. No handheld item, no weapon, no prop. Tasteful fully clothed fantasy character showcase.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "none",
    "compatibleItemRoles": [
      "none"
    ],
    "preferredItemRoles": [
      "none"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "royal",
      "villain",
      "mystic",
      "lifestyle",
      "combat",
      "scholarly",
      "professional",
      "ceremonial",
      "travel"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 82,
    "collectionTags": [
      "no_item_showcase",
      "neutral_pose"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "medium",
    "bodyImpact": "neutral_showcase",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, outfit silhouette, and empty hands readable without adding handheld items.",
    "negativeAdditions": [
      "unwanted weapon",
      "unwanted prop",
      "item in hand",
      "object covering face"
    ],
    "isUniversal": true,
    "source": "v10_0_3_no_item_showcase_pack",
    "v10Patch": "10.0.3"
  },
  {
    "id": "NIS-CU-02",
    "title": "Universal Waist-Up Confident Portrait",
    "titleTH": "ครึ่งตัวมั่นใจแบบไม่ถือของ",
    "descriptionTH": "โพสครึ่งตัวช่วงเอวขึ้นไป เน้นใบหน้า บุคลิก และชุด เหมาะกับตัวละครที่ไม่ต้องถือของ",
    "category": "neutral_showcase",
    "uiCategory": "closeup_bust",
    "uiCategoryName": "Close-up / Portrait / ภาพครึ่งตัว",
    "subcategory": "neutral_closeup",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Waist-up confident fantasy character portrait, torso angled three-quarter toward viewer, clean outfit silhouette, empty hands posed naturally near the sides without covering the face or torso. No handheld item.",
    "noItemPrompt": "Waist-up confident fantasy character portrait, torso angled three-quarter toward viewer, clean outfit silhouette, empty hands posed naturally near the sides without covering the face or torso. No handheld item.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "none",
    "compatibleItemRoles": [
      "none"
    ],
    "preferredItemRoles": [
      "none"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "royal",
      "villain",
      "mystic",
      "lifestyle",
      "combat",
      "scholarly",
      "professional",
      "ceremonial",
      "travel"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 82,
    "collectionTags": [
      "no_item_showcase",
      "neutral_pose"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "medium",
    "bodyImpact": "neutral_showcase",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, outfit silhouette, and empty hands readable without adding handheld items.",
    "negativeAdditions": [
      "unwanted weapon",
      "unwanted prop",
      "item in hand",
      "object covering face"
    ],
    "isUniversal": true,
    "source": "v10_0_3_no_item_showcase_pack",
    "v10Patch": "10.0.3"
  },
  {
    "id": "NIS-CU-03",
    "title": "Universal Hand-Near-Chest Portrait",
    "titleTH": "Portrait มือใกล้ช่วงอกแบบสุภาพ",
    "descriptionTH": "โพส portrait มือวางใกล้ช่วงอกหรือคอเสื้ออย่างสุภาพ ไม่บังหน้าและไม่ต้องถือของ ใช้เป็นท่าโชว์ตัวได้กว้าง",
    "category": "neutral_showcase",
    "uiCategory": "closeup_bust",
    "uiCategoryName": "Close-up / Portrait / ภาพครึ่งตัว",
    "subcategory": "neutral_closeup",
    "framing": "bust",
    "intensity": "safe",
    "prompt": "Bust portrait with one empty hand resting lightly near the collarbone or upper chest area without covering the face or torso silhouette, calm confident expression, no handheld item, no weapon, tasteful fantasy character art.",
    "noItemPrompt": "Bust portrait with one empty hand resting lightly near the collarbone or upper chest area without covering the face or torso silhouette, calm confident expression, no handheld item, no weapon, tasteful fantasy character art.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "none",
    "compatibleItemRoles": [
      "none"
    ],
    "preferredItemRoles": [
      "none"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "royal",
      "villain",
      "mystic",
      "lifestyle",
      "combat",
      "scholarly",
      "professional",
      "ceremonial",
      "travel"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 82,
    "collectionTags": [
      "no_item_showcase",
      "neutral_pose"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "medium",
    "bodyImpact": "neutral_showcase",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, outfit silhouette, and empty hands readable without adding handheld items.",
    "negativeAdditions": [
      "unwanted weapon",
      "unwanted prop",
      "item in hand",
      "object covering face"
    ],
    "isUniversal": true,
    "source": "v10_0_3_no_item_showcase_pack",
    "v10Patch": "10.0.3"
  },
  {
    "id": "NIS-CU-04",
    "title": "Universal Looking-Side Portrait",
    "titleTH": "Close-up หันหน้าข้างแบบคาแรกเตอร์การ์ด",
    "descriptionTH": "โพส close-up หันหน้าข้างเล็กน้อย เน้นสีหน้าและทรงผม ใช้ได้กับตัวละครทุกประเภทในโหมดไม่ถืออะไร",
    "category": "neutral_showcase",
    "uiCategory": "closeup_bust",
    "uiCategoryName": "Close-up / Portrait / ภาพครึ่งตัว",
    "subcategory": "neutral_closeup",
    "framing": "bust",
    "intensity": "safe",
    "prompt": "Close-up character-card portrait, head turned slightly to the side with eyes visible, shoulders angled cleanly, empty hands not shown or relaxed below frame, no handheld item, no weapon or prop.",
    "noItemPrompt": "Close-up character-card portrait, head turned slightly to the side with eyes visible, shoulders angled cleanly, empty hands not shown or relaxed below frame, no handheld item, no weapon or prop.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "none",
    "compatibleItemRoles": [
      "none"
    ],
    "preferredItemRoles": [
      "none"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "royal",
      "villain",
      "mystic",
      "lifestyle",
      "combat",
      "scholarly",
      "professional",
      "ceremonial",
      "travel"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 82,
    "collectionTags": [
      "no_item_showcase",
      "neutral_pose"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "medium",
    "bodyImpact": "neutral_showcase",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, outfit silhouette, and empty hands readable without adding handheld items.",
    "negativeAdditions": [
      "unwanted weapon",
      "unwanted prop",
      "item in hand",
      "object covering face"
    ],
    "isUniversal": true,
    "source": "v10_0_3_no_item_showcase_pack",
    "v10Patch": "10.0.3"
  },
  {
    "id": "NIS-ST-01",
    "title": "Universal No-Item Hero Standing",
    "titleTH": "ท่ายืนฮีโร่ไม่ถือของ",
    "descriptionTH": "ท่ายืนพื้นฐานแบบตัวเอก ใช้เป็น fallback ปลอดภัยสำหรับทุกตัวละครเมื่อไม่ต้องการของถือ",
    "category": "neutral_showcase",
    "uiCategory": "standing",
    "uiCategoryName": "ท่ายืน / Standing",
    "subcategory": "neutral_standing",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Full-body fantasy character standing pose, three-quarter angle, confident posture, both empty hands relaxed and visible, clean silhouette, no handheld item, no weapon, no prop.",
    "noItemPrompt": "Full-body fantasy character standing pose, three-quarter angle, confident posture, both empty hands relaxed and visible, clean silhouette, no handheld item, no weapon, no prop.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "none",
    "compatibleItemRoles": [
      "none"
    ],
    "preferredItemRoles": [
      "none"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "royal",
      "villain",
      "mystic",
      "lifestyle",
      "combat",
      "scholarly",
      "professional",
      "ceremonial",
      "travel"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 82,
    "collectionTags": [
      "no_item_showcase",
      "neutral_pose"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "medium",
    "bodyImpact": "neutral_showcase",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, outfit silhouette, and empty hands readable without adding handheld items.",
    "negativeAdditions": [
      "unwanted weapon",
      "unwanted prop",
      "item in hand",
      "object covering face"
    ],
    "isUniversal": true,
    "source": "v10_0_3_no_item_showcase_pack",
    "v10Patch": "10.0.3"
  },
  {
    "id": "NIS-ST-02",
    "title": "Universal Low-Angle Showcase Standing",
    "titleTH": "ท่ายืนมุมต่ำโชว์ตัวแบบปลอดภัย",
    "descriptionTH": "ท่ายืนมุมต่ำเล็กน้อยสำหรับภาพโชว์ตัว ไม่บังคับถืออาวุธหรือพร็อพ เหมาะกับ character card",
    "category": "neutral_showcase",
    "uiCategory": "standing",
    "uiCategoryName": "ท่ายืน / Standing",
    "subcategory": "neutral_standing",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Subtle low-angle full-body fantasy showcase pose, character stands with one shoulder forward and clean readable silhouette, empty hands posed naturally, no handheld item, no weapon, no prop.",
    "noItemPrompt": "Subtle low-angle full-body fantasy showcase pose, character stands with one shoulder forward and clean readable silhouette, empty hands posed naturally, no handheld item, no weapon, no prop.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "none",
    "compatibleItemRoles": [
      "none"
    ],
    "preferredItemRoles": [
      "none"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "royal",
      "villain",
      "mystic",
      "lifestyle",
      "combat",
      "scholarly",
      "professional",
      "ceremonial",
      "travel"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 82,
    "collectionTags": [
      "no_item_showcase",
      "neutral_pose"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "medium",
    "bodyImpact": "neutral_showcase",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, outfit silhouette, and empty hands readable without adding handheld items.",
    "negativeAdditions": [
      "unwanted weapon",
      "unwanted prop",
      "item in hand",
      "object covering face"
    ],
    "isUniversal": true,
    "source": "v10_0_3_no_item_showcase_pack",
    "v10Patch": "10.0.3"
  },
  {
    "id": "NIS-TK-01",
    "title": "Universal Thigh-Up Showcase Pose",
    "titleTH": "ท่าโชว์ตัวช่วงต้นขาแบบไม่ถือของ",
    "descriptionTH": "ท่าช่วงต้นขาขึ้นไป เน้นบุคลิกและชุด ใช้ได้กับตัวละครทุกเพศในโหมดไม่ถืออะไร",
    "category": "neutral_showcase",
    "uiCategory": "thigh_knee_up",
    "uiCategoryName": "Thigh/Knee-up / โชว์ตัว",
    "subcategory": "neutral_thigh_knee_up",
    "framing": "thigh_up",
    "intensity": "safe",
    "prompt": "Thigh-up fantasy character showcase pose, torso angled three-quarter, one hand near the waist or side, the other relaxed, no handheld item, no weapon, no prop, clear face and outfit silhouette.",
    "noItemPrompt": "Thigh-up fantasy character showcase pose, torso angled three-quarter, one hand near the waist or side, the other relaxed, no handheld item, no weapon, no prop, clear face and outfit silhouette.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "none",
    "compatibleItemRoles": [
      "none"
    ],
    "preferredItemRoles": [
      "none"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "royal",
      "villain",
      "mystic",
      "lifestyle",
      "combat",
      "scholarly",
      "professional",
      "ceremonial",
      "travel"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 82,
    "collectionTags": [
      "no_item_showcase",
      "neutral_pose"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "medium",
    "bodyImpact": "neutral_showcase",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, outfit silhouette, and empty hands readable without adding handheld items.",
    "negativeAdditions": [
      "unwanted weapon",
      "unwanted prop",
      "item in hand",
      "object covering face"
    ],
    "isUniversal": true,
    "source": "v10_0_3_no_item_showcase_pack",
    "v10Patch": "10.0.3"
  },
  {
    "id": "NIS-TK-02",
    "title": "Universal Knee-Up Character Card Pose",
    "titleTH": "ท่าเข่าขึ้นไปแบบคาแรกเตอร์การ์ด",
    "descriptionTH": "โพสเข่าขึ้นไปสำหรับโชว์ชุดและบุคลิก ไม่ต้องมีอาวุธหรือของถือ เหมาะเป็นท่ากลางที่ไม่เสี่ยง",
    "category": "neutral_showcase",
    "uiCategory": "thigh_knee_up",
    "uiCategoryName": "Thigh/Knee-up / โชว์ตัว",
    "subcategory": "neutral_thigh_knee_up",
    "framing": "knee_up",
    "intensity": "safe",
    "prompt": "Knee-up character-card pose, clean three-quarter framing, relaxed empty hands, clear face, readable outfit design, no handheld item, no weapon, no prop.",
    "noItemPrompt": "Knee-up character-card pose, clean three-quarter framing, relaxed empty hands, clear face, readable outfit design, no handheld item, no weapon, no prop.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "none",
    "compatibleItemRoles": [
      "none"
    ],
    "preferredItemRoles": [
      "none"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "royal",
      "villain",
      "mystic",
      "lifestyle",
      "combat",
      "scholarly",
      "professional",
      "ceremonial",
      "travel"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 82,
    "collectionTags": [
      "no_item_showcase",
      "neutral_pose"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "medium",
    "bodyImpact": "neutral_showcase",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, outfit silhouette, and empty hands readable without adding handheld items.",
    "negativeAdditions": [
      "unwanted weapon",
      "unwanted prop",
      "item in hand",
      "object covering face"
    ],
    "isUniversal": true,
    "source": "v10_0_3_no_item_showcase_pack",
    "v10Patch": "10.0.3"
  },
  {
    "id": "NIS-SIT-01",
    "title": "Universal Seated Character Showcase",
    "titleTH": "ท่านั่งโชว์ตัวแบบไม่ถือของ",
    "descriptionTH": "ท่านั่งเรียบร้อยสำหรับ character showcase ใช้ได้กับตัวละครทั่วไปโดยไม่ต้องถือของ",
    "category": "neutral_showcase",
    "uiCategory": "sitting",
    "uiCategoryName": "ท่านั่ง / Sitting",
    "subcategory": "neutral_sitting",
    "framing": "seated_full_body",
    "intensity": "safe",
    "prompt": "Seated fantasy character showcase pose on a simple chair, bench, or stone step, torso turned slightly toward viewer, empty hands resting naturally on lap or armrest, no handheld item, no weapon, no prop.",
    "noItemPrompt": "Seated fantasy character showcase pose on a simple chair, bench, or stone step, torso turned slightly toward viewer, empty hands resting naturally on lap or armrest, no handheld item, no weapon, no prop.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "none",
    "compatibleItemRoles": [
      "none"
    ],
    "preferredItemRoles": [
      "none"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "royal",
      "villain",
      "mystic",
      "lifestyle",
      "combat",
      "scholarly",
      "professional",
      "ceremonial",
      "travel"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 82,
    "collectionTags": [
      "no_item_showcase",
      "neutral_pose"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "medium",
    "bodyImpact": "neutral_showcase",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, outfit silhouette, and empty hands readable without adding handheld items.",
    "negativeAdditions": [
      "unwanted weapon",
      "unwanted prop",
      "item in hand",
      "object covering face"
    ],
    "isUniversal": true,
    "source": "v10_0_3_no_item_showcase_pack",
    "v10Patch": "10.0.3"
  },
  {
    "id": "NIS-SIT-02",
    "title": "Universal Relaxed Seated Portrait",
    "titleTH": "ท่านั่งครึ่งตัวผ่อนคลาย",
    "descriptionTH": "ท่านั่งแบบ portrait ครึ่งตัว เน้นสีหน้าและชุด ไม่ต้องมีของถือ เหมาะกับตัวละครสายสุภาพหรือดาร์กก็ได้",
    "category": "neutral_showcase",
    "uiCategory": "sitting",
    "uiCategoryName": "ท่านั่ง / Sitting",
    "subcategory": "neutral_sitting",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Waist-up relaxed seated portrait, body angled gently toward viewer, empty hands resting naturally and not hiding the face or torso, no handheld item, no weapon, no prop.",
    "noItemPrompt": "Waist-up relaxed seated portrait, body angled gently toward viewer, empty hands resting naturally and not hiding the face or torso, no handheld item, no weapon, no prop.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "none",
    "compatibleItemRoles": [
      "none"
    ],
    "preferredItemRoles": [
      "none"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "royal",
      "villain",
      "mystic",
      "lifestyle",
      "combat",
      "scholarly",
      "professional",
      "ceremonial",
      "travel"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 82,
    "collectionTags": [
      "no_item_showcase",
      "neutral_pose"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "medium",
    "bodyImpact": "neutral_showcase",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, outfit silhouette, and empty hands readable without adding handheld items.",
    "negativeAdditions": [
      "unwanted weapon",
      "unwanted prop",
      "item in hand",
      "object covering face"
    ],
    "isUniversal": true,
    "source": "v10_0_3_no_item_showcase_pack",
    "v10Patch": "10.0.3"
  },
  {
    "id": "NIS-LEAN-01",
    "title": "Universal Pillar Lean Showcase",
    "titleTH": "ท่าเอนพิงเสาแบบไม่ถือของ",
    "descriptionTH": "ท่าเอนพิงเสาหรือกำแพงเบา ๆ เพิ่มมิติของ body language โดยไม่ต้องมีพร็อพในมือ",
    "category": "neutral_showcase",
    "uiCategory": "leaning",
    "uiCategoryName": "ท่าเอน / Leaning",
    "subcategory": "neutral_leaning",
    "framing": "thigh_up",
    "intensity": "safe",
    "prompt": "Thigh-up character leaning lightly against a pillar or wall, torso turned toward viewer, empty hands relaxed near the side or waist, no handheld item, no weapon, no prop.",
    "noItemPrompt": "Thigh-up character leaning lightly against a pillar or wall, torso turned toward viewer, empty hands relaxed near the side or waist, no handheld item, no weapon, no prop.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "none",
    "compatibleItemRoles": [
      "none"
    ],
    "preferredItemRoles": [
      "none"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "royal",
      "villain",
      "mystic",
      "lifestyle",
      "combat",
      "scholarly",
      "professional",
      "ceremonial",
      "travel"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 82,
    "collectionTags": [
      "no_item_showcase",
      "neutral_pose"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "medium",
    "bodyImpact": "neutral_showcase",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, outfit silhouette, and empty hands readable without adding handheld items.",
    "negativeAdditions": [
      "unwanted weapon",
      "unwanted prop",
      "item in hand",
      "object covering face"
    ],
    "isUniversal": true,
    "source": "v10_0_3_no_item_showcase_pack",
    "v10Patch": "10.0.3"
  },
  {
    "id": "NIS-LEAN-02",
    "title": "Universal Balcony Lean Portrait",
    "titleTH": "ท่าเอนระเบียงแบบพอร์ตเทรต",
    "descriptionTH": "ท่าเอนระเบียงหรือราวจับแบบโชว์บุคลิก มือว่าง ไม่ใช่ท่าถือของหรืออาวุธ",
    "category": "neutral_showcase",
    "uiCategory": "leaning",
    "uiCategoryName": "ท่าเอน / Leaning",
    "subcategory": "neutral_leaning",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Waist-up balcony or railing lean portrait, character faces viewer with relaxed empty hands resting on the railing or at the side, no handheld item, no weapon, no prop.",
    "noItemPrompt": "Waist-up balcony or railing lean portrait, character faces viewer with relaxed empty hands resting on the railing or at the side, no handheld item, no weapon, no prop.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "none",
    "compatibleItemRoles": [
      "none"
    ],
    "preferredItemRoles": [
      "none"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "royal",
      "villain",
      "mystic",
      "lifestyle",
      "combat",
      "scholarly",
      "professional",
      "ceremonial",
      "travel"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 82,
    "collectionTags": [
      "no_item_showcase",
      "neutral_pose"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "medium",
    "bodyImpact": "neutral_showcase",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, outfit silhouette, and empty hands readable without adding handheld items.",
    "negativeAdditions": [
      "unwanted weapon",
      "unwanted prop",
      "item in hand",
      "object covering face"
    ],
    "isUniversal": true,
    "source": "v10_0_3_no_item_showcase_pack",
    "v10Patch": "10.0.3"
  },
  {
    "id": "NIS-OS-01",
    "title": "Universal Over-Shoulder Look Back",
    "titleTH": "ท่ามองกลับข้ามไหล่แบบไม่ถือของ",
    "descriptionTH": "ท่ามองกลับข้ามไหล่สำหรับโหมดไม่ถืออะไร ช่วยให้ภาพมีมิติและใช้ได้กับหลายคาแรกเตอร์",
    "category": "neutral_showcase",
    "uiCategory": "over_shoulder",
    "uiCategoryName": "มองกลับ / Over-Shoulder",
    "subcategory": "neutral_over_shoulder",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Over-shoulder look-back portrait, upper body turned partly away while face remains visible, empty hands relaxed, no handheld item, no weapon, no prop.",
    "noItemPrompt": "Over-shoulder look-back portrait, upper body turned partly away while face remains visible, empty hands relaxed, no handheld item, no weapon, no prop.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "none",
    "compatibleItemRoles": [
      "none"
    ],
    "preferredItemRoles": [
      "none"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "royal",
      "villain",
      "mystic",
      "lifestyle",
      "combat",
      "scholarly",
      "professional",
      "ceremonial",
      "travel"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 82,
    "collectionTags": [
      "no_item_showcase",
      "neutral_pose"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "medium",
    "bodyImpact": "neutral_showcase",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, outfit silhouette, and empty hands readable without adding handheld items.",
    "negativeAdditions": [
      "unwanted weapon",
      "unwanted prop",
      "item in hand",
      "object covering face"
    ],
    "isUniversal": true,
    "source": "v10_0_3_no_item_showcase_pack",
    "v10Patch": "10.0.3"
  },
  {
    "id": "NIS-OS-02",
    "title": "Universal Walking Look Back",
    "titleTH": "ท่าเดินหันกลับไม่ถือของ",
    "descriptionTH": "ท่าเดินหันกลับแบบ cinematic เหมาะกับตัวละครที่ไม่ต้องถืออาวุธหรือพร็อพ",
    "category": "neutral_showcase",
    "uiCategory": "over_shoulder",
    "uiCategoryName": "มองกลับ / Over-Shoulder",
    "subcategory": "neutral_over_shoulder",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Full-body walking-away look-back pose, face visible over shoulder, empty hands natural and unarmed, clothing or cape may flow softly, no handheld item, no weapon, no prop.",
    "noItemPrompt": "Full-body walking-away look-back pose, face visible over shoulder, empty hands natural and unarmed, clothing or cape may flow softly, no handheld item, no weapon, no prop.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "none",
    "compatibleItemRoles": [
      "none"
    ],
    "preferredItemRoles": [
      "none"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "royal",
      "villain",
      "mystic",
      "lifestyle",
      "combat",
      "scholarly",
      "professional",
      "ceremonial",
      "travel"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 82,
    "collectionTags": [
      "no_item_showcase",
      "neutral_pose"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "medium",
    "bodyImpact": "neutral_showcase",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, outfit silhouette, and empty hands readable without adding handheld items.",
    "negativeAdditions": [
      "unwanted weapon",
      "unwanted prop",
      "item in hand",
      "object covering face"
    ],
    "isUniversal": true,
    "source": "v10_0_3_no_item_showcase_pack",
    "v10Patch": "10.0.3"
  },
  {
    "id": "NIS-SM-01",
    "title": "Universal Soft Turn Motion",
    "titleTH": "ท่าหมุนตัวเบา ๆ แบบไม่ถือของ",
    "descriptionTH": "ท่าเคลื่อนไหวเบา ๆ สำหรับโชว์ผม ผ้าคลุม หรือชุด โดยมือว่างและไม่มีพร็อพ",
    "category": "neutral_showcase",
    "uiCategory": "soft_motion",
    "uiCategoryName": "เคลื่อนไหวสวย / Soft Motion",
    "subcategory": "neutral_soft_motion",
    "framing": "thigh_up",
    "intensity": "safe",
    "prompt": "Soft turning-in-motion fantasy pose, hair and fabric flowing gently, empty hands relaxed and visible, clear face and body silhouette, no handheld item, no weapon, no prop.",
    "noItemPrompt": "Soft turning-in-motion fantasy pose, hair and fabric flowing gently, empty hands relaxed and visible, clear face and body silhouette, no handheld item, no weapon, no prop.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "none",
    "compatibleItemRoles": [
      "none"
    ],
    "preferredItemRoles": [
      "none"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "royal",
      "villain",
      "mystic",
      "lifestyle",
      "combat",
      "scholarly",
      "professional",
      "ceremonial",
      "travel"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 82,
    "collectionTags": [
      "no_item_showcase",
      "neutral_pose"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "medium",
    "bodyImpact": "neutral_showcase",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, outfit silhouette, and empty hands readable without adding handheld items.",
    "negativeAdditions": [
      "unwanted weapon",
      "unwanted prop",
      "item in hand",
      "object covering face"
    ],
    "isUniversal": true,
    "source": "v10_0_3_no_item_showcase_pack",
    "v10Patch": "10.0.3"
  },
  {
    "id": "NIS-SM-02",
    "title": "Universal Wind-Flow Character Pose",
    "titleTH": "ท่าลมพัดโชว์ตัวแบบมือว่าง",
    "descriptionTH": "ท่าลมพัดผมและผ้าคลุมสำหรับภาพ showcase มือว่าง ไม่ต้องใช้อาวุธหรือของถือ",
    "category": "neutral_showcase",
    "uiCategory": "soft_motion",
    "uiCategoryName": "เคลื่อนไหวสวย / Soft Motion",
    "subcategory": "neutral_soft_motion",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Waist-up wind-flow character showcase pose, hair and fabric moving softly, empty hands not covering the face or torso, no handheld item, no weapon, no prop.",
    "noItemPrompt": "Waist-up wind-flow character showcase pose, hair and fabric moving softly, empty hands not covering the face or torso, no handheld item, no weapon, no prop.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "none",
    "compatibleItemRoles": [
      "none"
    ],
    "preferredItemRoles": [
      "none"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "royal",
      "villain",
      "mystic",
      "lifestyle",
      "combat",
      "scholarly",
      "professional",
      "ceremonial",
      "travel"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 82,
    "collectionTags": [
      "no_item_showcase",
      "neutral_pose"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "medium",
    "bodyImpact": "neutral_showcase",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, outfit silhouette, and empty hands readable without adding handheld items.",
    "negativeAdditions": [
      "unwanted weapon",
      "unwanted prop",
      "item in hand",
      "object covering face"
    ],
    "isUniversal": true,
    "source": "v10_0_3_no_item_showcase_pack",
    "v10Patch": "10.0.3"
  },
  {
    "id": "RW-BOW-01",
    "title": "Longbow Beside Body Heroine",
    "titleTH": "ท่าธนูยาววางข้างลำตัวแบบนางเอก",
    "descriptionTH": "โพสธนูเต็มตัวหรือสามส่วน ธนูตั้งเฉียงข้างลำตัว ไม่เล็งผ่านหน้า เหมาะกับ Artemis และตัวละครนักธนูที่ต้องการเห็นใบหน้า ช่วงตัว และอาวุธชัด",
    "category": "ranged_weapon",
    "categoryName": "ธนู-ปืน / Ranged Weapon",
    "icon": "🏹",
    "uiCategory": "ranged_weapon",
    "uiCategoryName": "ธนู-ปืน / Ranged Weapon",
    "uiIcon": "🏹",
    "subcategory": "ranged_weapon",
    "framing": "thigh_up",
    "intensity": "safe",
    "prompt": "Thigh-up or full-body archer glamour stance. The longbow is held vertically beside the body, angled along the side of the frame, not drawn and not aiming across the face. One hand holds the bow near hip or waist level while the other rests near the waist or lightly touches the bowstring without tension. Face, hair, full upper body, waistline, hands, and bow silhouette remain clear and readable. Tasteful fully clothed fantasy archer character art.",
    "noItemPrompt": "Thigh-up or full-body empty-hand archer-inspired stance. One hand rests near the waist while the other opens outward like a relaxed elegant ready pose, with no bow, weapon, or prop added. Face, torso, waistline, and hands remain clear.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "combat_ready",
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
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "mystic",
      "royal"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "ranged_safe"
    ],
    "genderFit": {
      "female": "recommended",
      "male": "optional",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 92,
    "collectionTags": [
      "readable_weapon",
      "clean_silhouette",
      "item_not_blocking_face"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep the face, torso silhouette, waistline, hands, and main item readable; the item stays beside the body and never crosses the face, throat, chest, or waist.",
    "negativeAdditions": [
      "weapon covering face",
      "weapon across neck",
      "item hiding torso",
      "impossible grip",
      "hidden hands"
    ],
    "source": "v10_0_1_ranged_weapon_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "RW-BOW-02",
    "title": "Relaxed Moon Archer Ready",
    "titleTH": "ท่านักธนูจันทราเตรียมพร้อมแบบไม่เล็ง",
    "descriptionTH": "โพสเตรียมพร้อมของนักธนู ธนูอยู่ด้านข้างหรือต่ำกว่าหน้า ไม่ดึงสายเล็งเข้ากล้อง ลดปัญหาอาวุธบังหน้า",
    "category": "ranged_weapon",
    "categoryName": "ธนู-ปืน / Ranged Weapon",
    "icon": "🏹",
    "uiCategory": "ranged_weapon",
    "uiCategoryName": "ธนู-ปืน / Ranged Weapon",
    "uiIcon": "🏹",
    "subcategory": "ranged_weapon",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Waist-up relaxed archer ready pose. The bow is held beside the shoulder or along the outer frame, lower than the face and not crossing the eyes, mouth, chest, or throat. The drawing hand stays near the collarbone or waist without pulling a taut string. Preserve readable wrists, elegant shoulders, clear face, and clean fantasy archer silhouette.",
    "noItemPrompt": "Waist-up relaxed ready pose with empty hands. One hand rests near the collarbone without covering the chest silhouette, the other near the waist; no bow or prop appears.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "combat_ready",
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
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "mystic",
      "royal"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "ranged_safe"
    ],
    "genderFit": {
      "female": "recommended",
      "male": "optional",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 90,
    "collectionTags": [
      "readable_weapon",
      "clean_silhouette",
      "item_not_blocking_face"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep the face, torso silhouette, waistline, hands, and main item readable; the item stays beside the body and never crosses the face, throat, chest, or waist.",
    "negativeAdditions": [
      "weapon covering face",
      "weapon across neck",
      "item hiding torso",
      "impossible grip",
      "hidden hands"
    ],
    "source": "v10_0_1_ranged_weapon_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "RW-BOW-03",
    "title": "Side-Held Archer Portrait",
    "titleTH": "ท่าพอร์ตเทรตถือธนูแนบขอบภาพ",
    "descriptionTH": "โพสครึ่งตัวถือธนูชิดขอบภาพ เหมาะกับ longbow และ sniper-bow style เพราะอาวุธไม่ตัดผ่านใบหน้าหรือลำคอ",
    "category": "ranged_weapon",
    "categoryName": "ธนู-ปืน / Ranged Weapon",
    "icon": "🏹",
    "uiCategory": "ranged_weapon",
    "uiCategoryName": "ธนู-ปืน / Ranged Weapon",
    "uiIcon": "🏹",
    "subcategory": "ranged_weapon",
    "framing": "bust",
    "intensity": "safe",
    "prompt": "Bust portrait archer pose. Place the longbow as a clean vertical or diagonal line along the far side of the frame, behind the shoulder or beside the torso. The bow never crosses the face, throat, chest silhouette, or mouth. Hands remain visible near lower frame or shoulder level with believable grip. Premium fantasy character portrait, face and upper body are the priority.",
    "noItemPrompt": "Bust portrait with empty elegant hands. One hand frames the shoulder or collar area without covering the chest silhouette; the other remains low and relaxed. No weapon or prop.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "holding",
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
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "mystic",
      "royal"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "ranged_safe"
    ],
    "genderFit": {
      "female": "recommended",
      "male": "optional",
      "androgynous": "optional"
    },
    "recommendedForCollection": false,
    "collectionScore": 88,
    "collectionTags": [
      "readable_weapon",
      "clean_silhouette",
      "item_not_blocking_face"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep the face, torso silhouette, waistline, hands, and main item readable; the item stays beside the body and never crosses the face, throat, chest, or waist.",
    "negativeAdditions": [
      "weapon covering face",
      "weapon across neck",
      "item hiding torso",
      "impossible grip",
      "hidden hands"
    ],
    "source": "v10_0_1_ranged_weapon_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "RW-BOW-04",
    "title": "Walking Archer Look-Back",
    "titleTH": "ท่านักธนูเดินหันกลับพร้อมคันธนูข้างตัว",
    "descriptionTH": "โพสเดินหันกลับ ธนูอยู่ข้างลำตัวหรือด้านหลัง ไม่ดึงสาย เหมาะกับภาพ collection ที่ไม่อยากให้ธนูบังหุ่น",
    "category": "ranged_weapon",
    "categoryName": "ธนู-ปืน / Ranged Weapon",
    "icon": "🏹",
    "uiCategory": "ranged_weapon",
    "uiCategoryName": "ธนู-ปืน / Ranged Weapon",
    "uiIcon": "🏹",
    "subcategory": "ranged_weapon",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Full-body walking archer look-back pose. The character turns the head back toward the viewer while the longbow rests along the side of the body or behind one shoulder. The bow is not drawn, not aimed, and not pushed toward the camera. Keep the face, waistline, leg stance, hands, and bow silhouette readable with flowing hair or cape motion.",
    "noItemPrompt": "Full-body walking look-back pose with empty hands. Hands remain relaxed and elegant; no bow, weapon, or prop appears. Keep face, waistline, and silhouette clear.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "holding",
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
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "mystic",
      "royal"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "ranged_safe"
    ],
    "genderFit": {
      "female": "recommended",
      "male": "optional",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 86,
    "collectionTags": [
      "readable_weapon",
      "clean_silhouette",
      "item_not_blocking_face"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep the face, torso silhouette, waistline, hands, and main item readable; the item stays beside the body and never crosses the face, throat, chest, or waist.",
    "negativeAdditions": [
      "weapon covering face",
      "weapon across neck",
      "item hiding torso",
      "impossible grip",
      "hidden hands"
    ],
    "source": "v10_0_1_ranged_weapon_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "RW-BOW-05",
    "title": "Archer Low-Angle Side Frame",
    "titleTH": "ท่านักธนูมุมต่ำวางธนูเป็นกรอบภาพ",
    "descriptionTH": "โพสมุมต่ำแบบเท่ ธนูเป็นเส้นกรอบด้านข้าง ไม่ตัดผ่านหน้า เหมาะกับภาพฮีโรอีนสายธนู",
    "category": "ranged_weapon",
    "categoryName": "ธนู-ปืน / Ranged Weapon",
    "icon": "🏹",
    "uiCategory": "ranged_weapon",
    "uiCategoryName": "ธนู-ปืน / Ranged Weapon",
    "uiIcon": "🏹",
    "subcategory": "ranged_weapon",
    "framing": "knee_up",
    "intensity": "safe",
    "prompt": "Knee-up subtle low-angle archer pose. Use the longbow as a side-frame silhouette, vertical or gently diagonal along one side of the composition. The bowstring stays visible but relaxed. Do not aim at the viewer. Preserve clear face, shoulders, bust-and-waist silhouette under clothing, hands, and bow geometry.",
    "noItemPrompt": "Knee-up subtle low-angle pose with empty hands. One hand near the waist, one hand relaxed; no weapon or prop. Preserve clean heroic silhouette.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "holding",
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
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "mystic",
      "royal"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "ranged_safe"
    ],
    "genderFit": {
      "female": "recommended",
      "male": "optional",
      "androgynous": "optional"
    },
    "recommendedForCollection": false,
    "collectionScore": 91,
    "collectionTags": [
      "readable_weapon",
      "clean_silhouette",
      "item_not_blocking_face"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep the face, torso silhouette, waistline, hands, and main item readable; the item stays beside the body and never crosses the face, throat, chest, or waist.",
    "negativeAdditions": [
      "weapon covering face",
      "weapon across neck",
      "item hiding torso",
      "impossible grip",
      "hidden hands"
    ],
    "source": "v10_0_1_ranged_weapon_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "RW-BOW-06",
    "title": "Ceremonial Bow Presentation",
    "titleTH": "ท่าพิธีกรรมถือธนูต่ำแบบสง่างาม",
    "descriptionTH": "โพสพิธีกรรมถือธนูต่ำหรือแนบลำตัว เหมาะกับนักธนูสายเทพ จันทรา หรือเอลฟ์ โดยไม่ใช่ท่าเล็งยิง",
    "category": "ranged_weapon",
    "categoryName": "ธนู-ปืน / Ranged Weapon",
    "icon": "🏹",
    "uiCategory": "ranged_weapon",
    "uiCategoryName": "ธนู-ปืน / Ranged Weapon",
    "uiIcon": "🏹",
    "subcategory": "ranged_weapon",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Full-body ceremonial archer presentation. Hold the bow low beside the body or lightly across the lower frame, below chest level, as a symbolic item rather than active aiming. The other hand presents a small aura or open-palmed gesture away from the face. Bow, hands, face, torso, and effects stay separated and readable.",
    "noItemPrompt": "Full-body ceremonial empty-hand presentation. Both hands form elegant open gestures away from the face and torso; no handheld item appears.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "presenting",
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
    "compatiblePresentationModes": [
      "ceremonial",
      "mystic",
      "combat",
      "glamour"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "ranged_safe"
    ],
    "genderFit": {
      "female": "recommended",
      "male": "optional",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 84,
    "collectionTags": [
      "readable_weapon",
      "clean_silhouette",
      "item_not_blocking_face"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep the face, torso silhouette, waistline, hands, and main item readable; the item stays beside the body and never crosses the face, throat, chest, or waist.",
    "negativeAdditions": [
      "weapon covering face",
      "weapon across neck",
      "item hiding torso",
      "impossible grip",
      "hidden hands"
    ],
    "source": "v10_0_1_ranged_weapon_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "RW-BOW-07",
    "title": "Archer Three-Quarter Hip Shift",
    "titleTH": "ท่านักธนูสามส่วนเอียงสะโพก",
    "descriptionTH": "โพสสามส่วนเอียงสะโพกคุม silhouette สำหรับตัวละครหญิงสายธนู ธนูอยู่ด้านข้าง ไม่บังหน้าอกหรือเอว",
    "category": "ranged_weapon",
    "categoryName": "ธนู-ปืน / Ranged Weapon",
    "icon": "🏹",
    "uiCategory": "ranged_weapon",
    "uiCategoryName": "ธนู-ปืน / Ranged Weapon",
    "uiIcon": "🏹",
    "subcategory": "ranged_weapon",
    "framing": "thigh_up",
    "intensity": "safe",
    "prompt": "Thigh-up three-quarter archer pose with one hip shifted and shoulders angled toward viewer. The bow stays beside the body, following the outer silhouette rather than covering the torso. The grip is clear near the hip or lower ribs, and the other hand rests near the waist. Fully clothed tasteful fantasy archer glamour.",
    "noItemPrompt": "Thigh-up three-quarter pose with empty hands, hip shifted and shoulders angled toward viewer. Hands frame the waist naturally; no weapon or prop.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "holding",
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
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "mystic",
      "royal"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "ranged_safe"
    ],
    "genderFit": {
      "female": "recommended",
      "male": "optional",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 93,
    "collectionTags": [
      "readable_weapon",
      "clean_silhouette",
      "item_not_blocking_face"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep the face, torso silhouette, waistline, hands, and main item readable; the item stays beside the body and never crosses the face, throat, chest, or waist.",
    "negativeAdditions": [
      "weapon covering face",
      "weapon across neck",
      "item hiding torso",
      "impossible grip",
      "hidden hands"
    ],
    "source": "v10_0_1_ranged_weapon_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "RW-BOW-08",
    "title": "Bow Resting Behind Shoulder",
    "titleTH": "ท่าธนูพาดหลังไหล่แบบปลอดภัย",
    "descriptionTH": "โพสธนูพาดด้านหลังไหล่ อาวุธอ่านชัดแต่ไม่ขวางหน้าและลำตัว เหมาะกับนักธนูหลายสไตล์",
    "category": "ranged_weapon",
    "categoryName": "ธนู-ปืน / Ranged Weapon",
    "icon": "🏹",
    "uiCategory": "ranged_weapon",
    "uiCategoryName": "ธนู-ปืน / Ranged Weapon",
    "uiIcon": "🏹",
    "subcategory": "ranged_weapon",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Waist-up archer portrait with the longbow resting behind one shoulder, visible as a clean curved silhouette in the background. Hands remain visible near the shoulder or waist. The bow must not cross the face, throat, chest, or waist; face and upper body remain the main focus.",
    "noItemPrompt": "Waist-up elegant portrait with empty hands, one hand near shoulder and one near waist; no bow or prop.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "holding",
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
    "compatiblePresentationModes": [
      "combat",
      "glamour",
      "mystic",
      "royal"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "ranged_safe"
    ],
    "genderFit": {
      "female": "recommended",
      "male": "optional",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 87,
    "collectionTags": [
      "readable_weapon",
      "clean_silhouette",
      "item_not_blocking_face"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep the face, torso silhouette, waistline, hands, and main item readable; the item stays beside the body and never crosses the face, throat, chest, or waist.",
    "negativeAdditions": [
      "weapon covering face",
      "weapon across neck",
      "item hiding torso",
      "impossible grip",
      "hidden hands"
    ],
    "source": "v10_0_1_ranged_weapon_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "RW-GUN-01",
    "title": "Pistol Low-Ready Character Card",
    "titleTH": "ท่าปืนพก low-ready ไม่บังหน้า",
    "descriptionTH": "โพสถือปืนต่ำข้างลำตัว ไม่เล็งเข้ากล้อง เหมาะกับตัวละครปืนพกที่ต้องการ prompt ปลอดภัยและเห็นหน้าเต็ม",
    "category": "ranged_weapon",
    "categoryName": "ธนู-ปืน / Ranged Weapon",
    "icon": "🏹",
    "uiCategory": "ranged_weapon",
    "uiCategoryName": "ธนู-ปืน / Ranged Weapon",
    "uiIcon": "🏹",
    "subcategory": "ranged_weapon",
    "framing": "thigh_up",
    "intensity": "safe",
    "prompt": "Thigh-up firearm character-card pose. The pistol is held in a low-ready position beside the hip or outer thigh, finger off trigger, muzzle angled safely downward and away from the face. The other hand rests near the waist or coat edge. Face, torso, hands, and firearm remain readable; no direct aiming at viewer.",
    "noItemPrompt": "Thigh-up confident pose with empty hands. One hand near waist, one hand relaxed; no gun or prop.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "combat_ready",
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
    "compatiblePresentationModes": [
      "combat",
      "professional",
      "glamour"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "ranged_safe"
    ],
    "genderFit": {
      "female": "recommended",
      "male": "optional",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 90,
    "collectionTags": [
      "readable_weapon",
      "clean_silhouette",
      "item_not_blocking_face"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep the face, torso silhouette, waistline, hands, and main item readable; the item stays beside the body and never crosses the face, throat, chest, or waist.",
    "negativeAdditions": [
      "weapon covering face",
      "weapon across neck",
      "item hiding torso",
      "impossible grip",
      "hidden hands"
    ],
    "source": "v10_0_1_ranged_weapon_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "RW-GUN-02",
    "title": "Dual Handgun Side-Low Pose",
    "titleTH": "ท่าปืนคู่ถือเฉียงต่ำสองข้าง",
    "descriptionTH": "โพสปืนคู่แบบปลอดภัย ทั้งสองมืออ่านชัด ปืนไม่รวมกันและไม่บังหน้า เหมาะกับ Kai/Luthia สาย dual handgun",
    "category": "ranged_weapon",
    "categoryName": "ธนู-ปืน / Ranged Weapon",
    "icon": "🏹",
    "uiCategory": "ranged_weapon",
    "uiCategoryName": "ธนู-ปืน / Ranged Weapon",
    "uiIcon": "🏹",
    "subcategory": "ranged_weapon",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Full-body dual-handgun safe pose. Each handgun is held low at the character sides or slightly outward, not crossing the chest and not aimed at the camera. Both wrists, elbows, and gun silhouettes are visible and separated. Keep face, torso, waistline, and hands clear.",
    "noItemPrompt": "Full-body confident stance with both hands empty and separated at the sides; no weapons or props.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "combat_ready",
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
    "compatiblePresentationModes": [
      "combat",
      "professional",
      "glamour"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "ranged_safe",
      "dual_item_safe"
    ],
    "genderFit": {
      "female": "recommended",
      "male": "optional",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 86,
    "collectionTags": [
      "readable_weapon",
      "clean_silhouette",
      "item_not_blocking_face"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep the face, torso silhouette, waistline, hands, and main item readable; the item stays beside the body and never crosses the face, throat, chest, or waist.",
    "negativeAdditions": [
      "weapon covering face",
      "weapon across neck",
      "item hiding torso",
      "impossible grip",
      "hidden hands"
    ],
    "source": "v10_0_1_ranged_weapon_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "RW-GUN-03",
    "title": "Handgun Shoulder Rest Portrait",
    "titleTH": "ท่าพอร์ตเทรตปืนพกพักข้างไหล่",
    "descriptionTH": "โพสครึ่งตัวถือปืนใกล้ไหล่แต่ไม่แตะหน้า ไม่บังตา ปาก คอ หรือหน้าอก",
    "category": "ranged_weapon",
    "categoryName": "ธนู-ปืน / Ranged Weapon",
    "icon": "🏹",
    "uiCategory": "ranged_weapon",
    "uiCategoryName": "ธนู-ปืน / Ranged Weapon",
    "uiIcon": "🏹",
    "subcategory": "ranged_weapon",
    "framing": "bust",
    "intensity": "safe",
    "prompt": "Bust portrait with a handgun held safely near the outer shoulder, muzzle angled upward but away from the face, never touching the cheek, lips, neck, or eyes. The grip hand remains readable. The other hand stays low or touches the outfit. Face and upper body are the focus.",
    "noItemPrompt": "Bust portrait with empty hands, one hand near shoulder and one lower near waist without hiding torso; no gun.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "holding",
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
    "compatiblePresentationModes": [
      "combat",
      "professional",
      "glamour"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "ranged_safe"
    ],
    "genderFit": {
      "female": "recommended",
      "male": "optional",
      "androgynous": "optional"
    },
    "recommendedForCollection": false,
    "collectionScore": 83,
    "collectionTags": [
      "readable_weapon",
      "clean_silhouette",
      "item_not_blocking_face"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep the face, torso silhouette, waistline, hands, and main item readable; the item stays beside the body and never crosses the face, throat, chest, or waist.",
    "negativeAdditions": [
      "weapon covering face",
      "weapon across neck",
      "item hiding torso",
      "impossible grip",
      "hidden hands"
    ],
    "source": "v10_0_1_ranged_weapon_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "RW-GUN-04",
    "title": "Rifle Resting Across Back",
    "titleTH": "ท่าปืนยาวพาดหลังไม่เล็ง",
    "descriptionTH": "โพสปืนยาว/ไรเฟิลพาดหลังหรือข้างตัว ไม่เล็งผ่านหน้า ลดปัญหาปืนบังใบหน้า",
    "category": "ranged_weapon",
    "categoryName": "ธนู-ปืน / Ranged Weapon",
    "icon": "🏹",
    "uiCategory": "ranged_weapon",
    "uiCategoryName": "ธนู-ปืน / Ranged Weapon",
    "uiIcon": "🏹",
    "subcategory": "ranged_weapon",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Full-body rifle or long firearm pose. The rifle rests across the back or along the side of the body, not actively aiming and not crossing the face, throat, or torso. One hand lightly holds the strap or stock, with readable fingers and wrist. Keep the weapon geometry solid and clearly separated from clothing and hair.",
    "noItemPrompt": "Full-body confident pose with empty hands, one hand near strap area or shoulder but no rifle or prop appears.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "holding",
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
    "compatiblePresentationModes": [
      "combat",
      "professional"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "ranged_safe"
    ],
    "genderFit": {
      "female": "recommended",
      "male": "optional",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 82,
    "collectionTags": [
      "readable_weapon",
      "clean_silhouette",
      "item_not_blocking_face"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep the face, torso silhouette, waistline, hands, and main item readable; the item stays beside the body and never crosses the face, throat, chest, or waist.",
    "negativeAdditions": [
      "weapon covering face",
      "weapon across neck",
      "item hiding torso",
      "impossible grip",
      "hidden hands"
    ],
    "source": "v10_0_1_ranged_weapon_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "RW-GUN-05",
    "title": "Sniper Side-Slung Portrait",
    "titleTH": "ท่าสไนเปอร์พาดข้างลำตัวไม่บังหน้า",
    "descriptionTH": "โพสสำหรับ sniper โดยปืนอยู่ข้างลำตัวหรือพาดไหล่ ไม่ยกเล็งเข้าหน้า เหมาะกับ Rosalind Sniper",
    "category": "ranged_weapon",
    "categoryName": "ธนู-ปืน / Ranged Weapon",
    "icon": "🏹",
    "uiCategory": "ranged_weapon",
    "uiCategoryName": "ธนู-ปืน / Ranged Weapon",
    "uiIcon": "🏹",
    "subcategory": "ranged_weapon",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Waist-up sniper character portrait. The sniper rifle is side-slung or resting behind the shoulder, visible but not aimed. Scope, barrel, stock, and strap are readable and kept outside the face and chest silhouette. The character looks calmly at the viewer with clear hands and face.",
    "noItemPrompt": "Waist-up calm portrait with empty hands and no firearm; one hand near shoulder strap area, one near waist.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "holding",
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
    "compatiblePresentationModes": [
      "combat",
      "professional"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "ranged_safe"
    ],
    "genderFit": {
      "female": "recommended",
      "male": "optional",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 84,
    "collectionTags": [
      "readable_weapon",
      "clean_silhouette",
      "item_not_blocking_face"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep the face, torso silhouette, waistline, hands, and main item readable; the item stays beside the body and never crosses the face, throat, chest, or waist.",
    "negativeAdditions": [
      "weapon covering face",
      "weapon across neck",
      "item hiding torso",
      "impossible grip",
      "hidden hands"
    ],
    "source": "v10_0_1_ranged_weapon_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "RW-GUN-06",
    "title": "Firearm Coat-Edge Ready",
    "titleTH": "ท่าปืนพกจับชายเสื้อเตรียมพร้อม",
    "descriptionTH": "โพสปืนพกพร้อมเคลื่อนไหว ปืนอยู่ต่ำ มืออีกข้างจับชายเสื้อ ไม่บังช่วงตัว",
    "category": "ranged_weapon",
    "categoryName": "ธนู-ปืน / Ranged Weapon",
    "icon": "🏹",
    "uiCategory": "ranged_weapon",
    "uiCategoryName": "ธนู-ปืน / Ranged Weapon",
    "uiIcon": "🏹",
    "subcategory": "ranged_weapon",
    "framing": "knee_up",
    "intensity": "safe",
    "prompt": "Knee-up stylish firearm ready pose. The handgun stays low beside the coat or hip, while the free hand lightly holds the coat edge or belt. The firearm is readable but not dominant; face, torso line, waist, and both hands remain clear.",
    "noItemPrompt": "Knee-up stylish ready pose with empty hands; one hand holds coat edge or belt, other relaxed. No firearm or prop.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "combat_ready",
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
    "compatiblePresentationModes": [
      "combat",
      "professional",
      "glamour"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "ranged_safe"
    ],
    "genderFit": {
      "female": "recommended",
      "male": "optional",
      "androgynous": "optional"
    },
    "recommendedForCollection": false,
    "collectionScore": 88,
    "collectionTags": [
      "readable_weapon",
      "clean_silhouette",
      "item_not_blocking_face"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep the face, torso silhouette, waistline, hands, and main item readable; the item stays beside the body and never crosses the face, throat, chest, or waist.",
    "negativeAdditions": [
      "weapon covering face",
      "weapon across neck",
      "item hiding torso",
      "impossible grip",
      "hidden hands"
    ],
    "source": "v10_0_1_ranged_weapon_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "RW-GUN-07",
    "title": "Launcher Grounded Carry",
    "titleTH": "ท่าถืออาวุธยิงขนาดใหญ่แบบตั้งพื้น",
    "descriptionTH": "โพสสำหรับอาวุธยิงชิ้นใหญ่หรือ launcher ให้ถือ/วางพาดข้างลำตัว ไม่ยกบังหน้า",
    "category": "ranged_weapon",
    "categoryName": "ธนู-ปืน / Ranged Weapon",
    "icon": "🏹",
    "uiCategory": "ranged_weapon",
    "uiCategoryName": "ธนู-ปืน / Ranged Weapon",
    "uiIcon": "🏹",
    "subcategory": "ranged_weapon",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Full-body grounded heavy ranged weapon carry. The large launcher or heavy firearm is carried low beside the body or resting with one end near the ground, not shoulder-aimed, not covering the face, neck, chest, or waist. Keep the hands, stock, barrel, and body silhouette separated and readable.",
    "noItemPrompt": "Full-body grounded strong stance with empty hands, no launcher or firearm. Hands stay visible at the sides or waist.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "holding",
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
    "compatiblePresentationModes": [
      "combat"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "ranged_safe",
      "weapon_or_long_item"
    ],
    "genderFit": {
      "female": "optional",
      "male": "optional",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 76,
    "collectionTags": [
      "readable_weapon",
      "clean_silhouette",
      "item_not_blocking_face"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep the face, torso silhouette, waistline, hands, and main item readable; the item stays beside the body and never crosses the face, throat, chest, or waist.",
    "negativeAdditions": [
      "weapon covering face",
      "weapon across neck",
      "item hiding torso",
      "impossible grip",
      "hidden hands"
    ],
    "source": "v10_0_1_ranged_weapon_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "MN-WPN-01",
    "title": "Neutral Weapon Standing",
    "titleTH": "ท่ายืนถืออาวุธกลางสำหรับตัวละครชาย/ทั่วไป",
    "descriptionTH": "ท่ายืนปลอดภัยสำหรับตัวละครชายหรือกลาง ถืออาวุธ/ของหลักด้านข้าง ไม่เน้น glamour ผู้หญิง",
    "category": "male_neutral_weapon",
    "categoryName": "ชาย/กลางถืออาวุธ / Male-Neutral",
    "icon": "🛡️",
    "uiCategory": "male_neutral_weapon",
    "uiCategoryName": "ชาย/กลางถืออาวุธ / Male-Neutral",
    "uiIcon": "🛡️",
    "subcategory": "male_neutral_weapon",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Neutral full-body weapon standing pose for male or androgynous characters. Hold the main item beside the body or resting at the side, with shoulders squared, feet grounded, and face clearly visible. Keep the item readable without crossing the face, neck, chest, or torso.",
    "noItemPrompt": "Neutral full-body standing pose with empty hands, shoulders squared and hands relaxed at sides; no item appears.",
    "requiresItem": true,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop",
      "none"
    ],
    "preferredItemRoles": [
      "weapon",
      "ritual_item",
      "tool_item"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "lifestyle"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "weapon_or_long_item"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 70,
    "collectionTags": [
      "readable_weapon",
      "clean_silhouette",
      "item_not_blocking_face"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "medium",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep the face, torso silhouette, waistline, hands, and main item readable; the item stays beside the body and never crosses the face, throat, chest, or waist.",
    "negativeAdditions": [
      "weapon covering face",
      "weapon across neck",
      "item hiding torso",
      "impossible grip",
      "hidden hands"
    ],
    "source": "v10_0_1_male_neutral_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "MN-WPN-02",
    "title": "Male Hero Portrait with Item Side",
    "titleTH": "ท่าครึ่งตัวชายถือของข้างเฟรม",
    "descriptionTH": "ท่าครึ่งตัวสำหรับตัวละครชาย/กลาง ให้ของอยู่ข้างเฟรม ไม่บังหน้า เหมาะกับ staff, cane, tool, weapon",
    "category": "male_neutral_weapon",
    "categoryName": "ชาย/กลางถืออาวุธ / Male-Neutral",
    "icon": "🛡️",
    "uiCategory": "male_neutral_weapon",
    "uiCategoryName": "ชาย/กลางถืออาวุธ / Male-Neutral",
    "uiIcon": "🛡️",
    "subcategory": "male_neutral_weapon",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Waist-up neutral heroic portrait. The main item is placed along one side of the frame or held below shoulder level, never covering the face, mouth, neck, or torso. One hand holds the item clearly; the other rests near belt, coat, or chest without hiding anatomy.",
    "noItemPrompt": "Waist-up neutral heroic portrait with empty hands, one hand near coat or belt and the other relaxed; no item appears.",
    "requiresItem": true,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop",
      "none"
    ],
    "preferredItemRoles": [
      "weapon",
      "ritual_item",
      "tool_item"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "lifestyle"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "weapon_or_long_item"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 72,
    "collectionTags": [
      "readable_weapon",
      "clean_silhouette",
      "item_not_blocking_face"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "medium",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep the face, torso silhouette, waistline, hands, and main item readable; the item stays beside the body and never crosses the face, throat, chest, or waist.",
    "negativeAdditions": [
      "weapon covering face",
      "weapon across neck",
      "item hiding torso",
      "impossible grip",
      "hidden hands"
    ],
    "source": "v10_0_1_male_neutral_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "MN-WPN-03",
    "title": "Grounded Long Staff Side Pose",
    "titleTH": "ท่าไม้เท้า/คทายาวตั้งข้างตัว",
    "descriptionTH": "โพสคทา ไม้เท้า หรือเครื่องมือยาวตั้งข้างตัว ใช้ได้ทั้งชายหญิงและไม่ทำให้ของกลายเป็นอาวุธโจมตี",
    "category": "long_item",
    "categoryName": "อาวุธยาว/ของใหญ่ / Long Item",
    "icon": "🔱",
    "uiCategory": "long_item",
    "uiCategoryName": "อาวุธยาว/ของใหญ่ / Long Item",
    "uiIcon": "🔱",
    "subcategory": "long_item",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Full-body grounded long-item pose. A staff, cane, spear, ritual tool, or oversized prop stands vertically beside the body, with one hand holding it near waist or chest level. The item is physically solid and readable, not piercing the body, not covering the face, and not blending into clothing or effects.",
    "noItemPrompt": "Full-body grounded pose with empty hands, one hand near waist and one relaxed. No staff, cane, or prop appears.",
    "requiresItem": true,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop",
      "none"
    ],
    "preferredItemRoles": [
      "weapon",
      "ritual_item",
      "tool_item"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "lifestyle"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "weapon_or_long_item",
      "prop_readability"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": true,
    "collectionScore": 78,
    "collectionTags": [
      "readable_weapon",
      "clean_silhouette",
      "item_not_blocking_face"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "medium",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep the face, torso silhouette, waistline, hands, and main item readable; the item stays beside the body and never crosses the face, throat, chest, or waist.",
    "negativeAdditions": [
      "weapon covering face",
      "weapon across neck",
      "item hiding torso",
      "impossible grip",
      "hidden hands"
    ],
    "source": "v10_0_1_long_item_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "MN-WPN-04",
    "title": "Large Item Resting Grounded",
    "titleTH": "ท่าวางของใหญ่แบบตั้งพื้นไม่บังตัว",
    "descriptionTH": "โพสสำหรับ greatsword, shield, oversized prop, large tool ให้พักกับพื้นหรือข้างตัว ไม่ยกบังหน้า",
    "category": "long_item",
    "categoryName": "อาวุธยาว/ของใหญ่ / Long Item",
    "icon": "🔱",
    "uiCategory": "long_item",
    "uiCategoryName": "อาวุธยาว/ของใหญ่ / Long Item",
    "uiIcon": "🔱",
    "subcategory": "long_item",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Full-body grounded large-item pose. The large weapon, shield, oversized prop, or heavy tool rests beside the body or with one end touching the ground. It remains readable and separated from face, neck, torso, legs, clothing, and effects. The pose is stable, not airborne, and not extreme.",
    "noItemPrompt": "Full-body grounded pose with empty hands and no oversized item; hands visible and relaxed.",
    "requiresItem": true,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "large_ritual_item",
      "large_tool_item",
      "oversized_prop",
      "none"
    ],
    "preferredItemRoles": [
      "weapon",
      "ritual_item",
      "tool_item"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "professional",
      "ceremonial",
      "lifestyle"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "weapon_or_long_item",
      "large_item_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": true,
    "collectionScore": 75,
    "collectionTags": [
      "readable_weapon",
      "clean_silhouette",
      "item_not_blocking_face"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "medium",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep the face, torso silhouette, waistline, hands, and main item readable; the item stays beside the body and never crosses the face, throat, chest, or waist.",
    "negativeAdditions": [
      "weapon covering face",
      "weapon across neck",
      "item hiding torso",
      "impossible grip",
      "hidden hands"
    ],
    "source": "v10_0_1_long_item_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "MN-WPN-05",
    "title": "Shield and Weapon Separated",
    "titleTH": "ท่าโล่กับอาวุธแยกชัดไม่ชนกัน",
    "descriptionTH": "โพสสำหรับตัวถือโล่/หอก/ดาบ ให้โล่อยู่ข้างหนึ่ง อาวุธอยู่อีกข้าง ไม่กลืนกันหรือแทงผ่านตัว",
    "category": "long_item",
    "categoryName": "อาวุธยาว/ของใหญ่ / Long Item",
    "icon": "🔱",
    "uiCategory": "long_item",
    "uiCategoryName": "อาวุธยาว/ของใหญ่ / Long Item",
    "uiIcon": "🔱",
    "subcategory": "long_item",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Full-body shield-and-weapon separated stance. Shield stays on one side of the body, weapon stays on the opposite side or angled outward. Both items remain physically distinct, not merged, not piercing the torso, and not covering the face. Hands, grips, elbows, shield rim, and weapon shaft are readable.",
    "noItemPrompt": "Full-body stable stance with empty hands and no shield or weapon. Hands visible at sides.",
    "requiresItem": true,
    "noItemSafe": true,
    "itemActionType": "combat_ready",
    "compatibleItemRoles": [
      "weapon",
      "none"
    ],
    "preferredItemRoles": [
      "weapon"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "weapon_or_long_item",
      "shield_combo_safe"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": true,
    "collectionScore": 74,
    "collectionTags": [
      "readable_weapon",
      "clean_silhouette",
      "item_not_blocking_face"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "medium",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep the face, torso silhouette, waistline, hands, and main item readable; the item stays beside the body and never crosses the face, throat, chest, or waist.",
    "negativeAdditions": [
      "weapon covering face",
      "weapon across neck",
      "item hiding torso",
      "impossible grip",
      "hidden hands"
    ],
    "source": "v10_0_1_long_item_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "MN-WPN-06",
    "title": "Instrument or Tool Presentation",
    "titleTH": "ท่าเครื่องมือ/เครื่องดนตรีนำเสนอแบบไม่เป็นอาวุธ",
    "descriptionTH": "โพสสำหรับ instrument/tool ให้ถือแบบใช้งานหรือนำเสนอ ไม่กลายเป็นอาวุธ ไม่บังหน้า",
    "category": "male_neutral_weapon",
    "categoryName": "ชาย/กลางถืออาวุธ / Male-Neutral",
    "icon": "🛡️",
    "uiCategory": "male_neutral_weapon",
    "uiCategoryName": "ชาย/กลางถืออาวุธ / Male-Neutral",
    "uiIcon": "🛡️",
    "subcategory": "male_neutral_weapon",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Waist-up tool or instrument presentation. The item is held naturally as a tool, cane, instrument, book-like object, or professional prop below face level. It must not be turned into a weapon, blade, gun, spear, or magic attack. Hands and item function remain readable.",
    "noItemPrompt": "Waist-up professional pose with empty hands, no tool or instrument. Hands rest naturally near belt, lapel, or side.",
    "requiresItem": true,
    "noItemSafe": true,
    "itemActionType": "presenting",
    "compatibleItemRoles": [
      "tool_item",
      "instrument_item",
      "document_item",
      "prop",
      "daily_item",
      "none"
    ],
    "preferredItemRoles": [
      "tool_item",
      "instrument_item",
      "document_item"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "professional",
      "scholarly",
      "lifestyle",
      "ceremonial"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "prop_readability"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 76,
    "collectionTags": [
      "readable_weapon",
      "clean_silhouette",
      "item_not_blocking_face"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "medium",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep the face, torso silhouette, waistline, hands, and main item readable; the item stays beside the body and never crosses the face, throat, chest, or waist.",
    "negativeAdditions": [
      "weapon covering face",
      "weapon across neck",
      "item hiding torso",
      "impossible grip",
      "hidden hands"
    ],
    "source": "v10_0_1_male_neutral_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "FB-INST-01",
    "title": "Instrument Side-Hold Portrait",
    "titleTH": "ท่าครึ่งตัวถือเครื่องดนตรีข้างลำตัว",
    "descriptionTH": "โพสครึ่งตัวสำหรับเครื่องดนตรีหรืออุปกรณ์แสดง ดัน item ไปข้างลำตัว ไม่บังหน้าและไม่กลายเป็นอาวุธ",
    "category": "male_neutral_weapon",
    "categoryName": "ชาย/กลางถืออาวุธ / Male-Neutral",
    "icon": "🛡️",
    "uiCategory": "male_neutral_weapon",
    "uiCategoryName": "ชาย/กลางถืออาวุธ / Male-Neutral",
    "uiIcon": "🛡️",
    "subcategory": "male_neutral_weapon",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Waist-up instrument or performance-tool portrait. The instrument or tool is held beside the torso or angled along the side of the frame, below the face and outside the chest line. Hands, strings, handle, keys, or tool parts stay readable; the item stays non-combat and non-weaponized.",
    "noItemPrompt": "Waist-up performer portrait with empty hands; one hand near waist or lapel, one relaxed, no instrument or prop appears.",
    "requiresItem": true,
    "noItemSafe": true,
    "itemActionType": "presenting",
    "compatibleItemRoles": [
      "instrument_item",
      "tool_item",
      "prop",
      "none"
    ],
    "preferredItemRoles": [
      "instrument_item",
      "tool_item",
      "prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "professional",
      "lifestyle",
      "ceremonial",
      "mystic"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "prop_readability"
    ],
    "genderFit": {
      "female": "optional",
      "male": "optional",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 82,
    "collectionTags": [
      "safe_fallback",
      "readable_item",
      "clean_silhouette"
    ],
    "bustFriendly": false,
    "silhouettePreservation": "medium",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, hands, torso silhouette, and main item readable. The item stays beside or below the body focus and never blocks the face, throat, chest, waist, or hands.",
    "negativeAdditions": [
      "item covering face",
      "item across neck",
      "hidden hands",
      "impossible grip",
      "prop turning into weapon"
    ],
    "source": "v10_0_1_fallback_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "FB-INST-02",
    "title": "Stage Performer Empty-Space Pose",
    "titleTH": "ท่านักแสดงเวทีถือของต่ำไม่บังตัว",
    "descriptionTH": "โพสเวทีสำหรับกีตาร์ ไมค์ baton หรือเครื่องมือแสดง ให้ของอยู่ต่ำหรือข้างตัว เห็นลำตัวและมือชัด",
    "category": "male_neutral_weapon",
    "categoryName": "ชาย/กลางถืออาวุธ / Male-Neutral",
    "icon": "🛡️",
    "uiCategory": "male_neutral_weapon",
    "uiCategoryName": "ชาย/กลางถืออาวุธ / Male-Neutral",
    "uiIcon": "🛡️",
    "subcategory": "male_neutral_weapon",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Full-body stage performer pose. The instrument, microphone, baton, or performance prop is held low beside the body or rests against the hip. Keep both hands readable and separate from the face and torso. The item remains a lifestyle/performance object, not a blade, gun, or staff attack.",
    "noItemPrompt": "Full-body stage performer pose with empty hands and expressive posture; no instrument or prop appears.",
    "requiresItem": true,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "instrument_item",
      "tool_item",
      "prop",
      "daily_item",
      "none"
    ],
    "preferredItemRoles": [
      "instrument_item",
      "tool_item",
      "prop",
      "daily_item"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "professional",
      "lifestyle",
      "ceremonial"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "prop_readability"
    ],
    "genderFit": {
      "female": "optional",
      "male": "optional",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 80,
    "collectionTags": [
      "safe_fallback",
      "readable_item",
      "clean_silhouette"
    ],
    "bustFriendly": false,
    "silhouettePreservation": "medium",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, hands, torso silhouette, and main item readable. The item stays beside or below the body focus and never blocks the face, throat, chest, waist, or hands.",
    "negativeAdditions": [
      "item covering face",
      "item across neck",
      "hidden hands",
      "impossible grip",
      "prop turning into weapon"
    ],
    "source": "v10_0_1_fallback_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "FB-TOOL-01",
    "title": "Professional Tool Side Presentation",
    "titleTH": "ท่านำเสนอเครื่องมืออาชีพข้างลำตัว",
    "descriptionTH": "โพสสำหรับ tool_item ให้ถือแบบมืออาชีพด้านข้าง ไม่บังหน้า ไม่ทำให้เป็นอาวุธ",
    "category": "male_neutral_weapon",
    "categoryName": "ชาย/กลางถืออาวุธ / Male-Neutral",
    "icon": "🛡️",
    "uiCategory": "male_neutral_weapon",
    "uiCategoryName": "ชาย/กลางถืออาวุธ / Male-Neutral",
    "uiIcon": "🛡️",
    "subcategory": "male_neutral_weapon",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Waist-up professional tool presentation. Hold the tool beside the body or below chest level with a clear functional grip. The tool stays physically solid, readable, and separate from face, throat, and torso; no aggressive pointing or weaponization.",
    "noItemPrompt": "Waist-up professional pose with empty hands, no tool; hands rest naturally near belt, desk edge, or side.",
    "requiresItem": true,
    "noItemSafe": true,
    "itemActionType": "presenting",
    "compatibleItemRoles": [
      "tool_item",
      "document_item",
      "prop",
      "none"
    ],
    "preferredItemRoles": [
      "tool_item",
      "document_item",
      "prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "professional",
      "scholarly",
      "lifestyle"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "prop_readability"
    ],
    "genderFit": {
      "female": "optional",
      "male": "optional",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 80,
    "collectionTags": [
      "safe_fallback",
      "readable_item",
      "clean_silhouette"
    ],
    "bustFriendly": false,
    "silhouettePreservation": "medium",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, hands, torso silhouette, and main item readable. The item stays beside or below the body focus and never blocks the face, throat, chest, waist, or hands.",
    "negativeAdditions": [
      "item covering face",
      "item across neck",
      "hidden hands",
      "impossible grip",
      "prop turning into weapon"
    ],
    "source": "v10_0_1_fallback_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "FB-TOOL-02",
    "title": "Grounded Large Tool Carry",
    "titleTH": "ท่าถือเครื่องมือใหญ่แบบมั่นคง",
    "descriptionTH": "โพสสำหรับ large_tool_item หรือ oversized prop ให้ตั้งพื้นหรือถือข้างตัว ไม่พาดผ่านคอ/ลำตัว",
    "category": "long_item",
    "categoryName": "อาวุธยาว/ของใหญ่ / Long Item",
    "icon": "🔱",
    "uiCategory": "long_item",
    "uiCategoryName": "อาวุธยาว/ของใหญ่ / Long Item",
    "uiIcon": "🔱",
    "subcategory": "long_item",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Full-body grounded large-tool carry. The large tool or oversized prop rests beside the body or touches the ground, held with a visible stable grip. It must not cross the face, neck, chest, or waist and must not look like it pierces the character.",
    "noItemPrompt": "Full-body grounded stance with empty hands, no large tool or prop; hands remain visible.",
    "requiresItem": true,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "large_tool_item",
      "tool_item",
      "oversized_prop",
      "prop",
      "none"
    ],
    "preferredItemRoles": [
      "large_tool_item",
      "tool_item",
      "oversized_prop",
      "prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "professional",
      "lifestyle",
      "combat"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "weapon_or_long_item",
      "large_item_safe",
      "prop_readability"
    ],
    "genderFit": {
      "female": "optional",
      "male": "optional",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 78,
    "collectionTags": [
      "safe_fallback",
      "readable_item",
      "clean_silhouette"
    ],
    "bustFriendly": false,
    "silhouettePreservation": "medium",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, hands, torso silhouette, and main item readable. The item stays beside or below the body focus and never blocks the face, throat, chest, waist, or hands.",
    "negativeAdditions": [
      "item covering face",
      "item across neck",
      "hidden hands",
      "impossible grip",
      "prop turning into weapon"
    ],
    "source": "v10_0_1_fallback_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "FB-RIT-01",
    "title": "Ceremonial Staff Side Portrait",
    "titleTH": "ท่าครึ่งตัวคทาพิธีกรรมอยู่ข้างเฟรม",
    "descriptionTH": "โพสคทา/ของพิธีกรรมครึ่งตัว วาง item ข้างเฟรม ไม่บังหน้า ไม่กดให้เป็นท่าโจมตี",
    "category": "long_item",
    "categoryName": "อาวุธยาว/ของใหญ่ / Long Item",
    "icon": "🔱",
    "uiCategory": "long_item",
    "uiCategoryName": "อาวุธยาว/ของใหญ่ / Long Item",
    "uiIcon": "🔱",
    "subcategory": "long_item",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Waist-up ceremonial staff or ritual long-item portrait. The staff or ritual object is placed vertically along one side of the frame, held with a calm clear grip. Effects stay behind it; the item does not cross the face, throat, chest, or waist.",
    "noItemPrompt": "Waist-up ceremonial empty-hand portrait with one open palm gesture and one hand near waist; no staff or ritual item appears.",
    "requiresItem": true,
    "noItemSafe": true,
    "itemActionType": "presenting",
    "compatibleItemRoles": [
      "ritual_item",
      "large_ritual_item",
      "tool_item",
      "prop",
      "none"
    ],
    "preferredItemRoles": [
      "ritual_item",
      "large_ritual_item",
      "tool_item",
      "prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "ceremonial",
      "mystic",
      "scholarly"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "weapon_or_long_item",
      "prop_readability"
    ],
    "genderFit": {
      "female": "optional",
      "male": "optional",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 84,
    "collectionTags": [
      "safe_fallback",
      "readable_item",
      "clean_silhouette"
    ],
    "bustFriendly": false,
    "silhouettePreservation": "medium",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, hands, torso silhouette, and main item readable. The item stays beside or below the body focus and never blocks the face, throat, chest, waist, or hands.",
    "negativeAdditions": [
      "item covering face",
      "item across neck",
      "hidden hands",
      "impossible grip",
      "prop turning into weapon"
    ],
    "source": "v10_0_1_fallback_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "FB-RIT-02",
    "title": "Ritual Object Low Presentation",
    "titleTH": "ท่านำเสนอของพิธีกรรมระดับเอว",
    "descriptionTH": "โพสของพิธีกรรมหรือหนังสือ/อุปกรณ์ระดับเอว ลดการบังหน้าและช่วงอก เหมาะกับสาย mystic/scholar",
    "category": "male_neutral_weapon",
    "categoryName": "ชาย/กลางถืออาวุธ / Male-Neutral",
    "icon": "🛡️",
    "uiCategory": "male_neutral_weapon",
    "uiCategoryName": "ชาย/กลางถืออาวุธ / Male-Neutral",
    "uiIcon": "🛡️",
    "subcategory": "male_neutral_weapon",
    "framing": "waist_up",
    "intensity": "safe",
    "prompt": "Waist-up ritual object low presentation. The main item is presented at waist or lower chest level, not covering the face, mouth, neck, or upper torso. Magical aura stays behind the item and never replaces its physical shape.",
    "noItemPrompt": "Waist-up mystic gesture with empty hands, palms open near waist or side; no ritual item appears.",
    "requiresItem": true,
    "noItemSafe": true,
    "itemActionType": "presenting",
    "compatibleItemRoles": [
      "ritual_item",
      "document_item",
      "tool_item",
      "prop",
      "none"
    ],
    "preferredItemRoles": [
      "ritual_item",
      "document_item",
      "tool_item",
      "prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "ceremonial",
      "mystic",
      "scholarly"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "prop_readability"
    ],
    "genderFit": {
      "female": "optional",
      "male": "optional",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 82,
    "collectionTags": [
      "safe_fallback",
      "readable_item",
      "clean_silhouette"
    ],
    "bustFriendly": false,
    "silhouettePreservation": "medium",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, hands, torso silhouette, and main item readable. The item stays beside or below the body focus and never blocks the face, throat, chest, waist, or hands.",
    "negativeAdditions": [
      "item covering face",
      "item across neck",
      "hidden hands",
      "impossible grip",
      "prop turning into weapon"
    ],
    "source": "v10_0_1_fallback_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "FB-PROP-01",
    "title": "Oversized Prop Side Rest",
    "titleTH": "ท่าพร็อพใหญ่พักข้างตัวแบบปลอดภัย",
    "descriptionTH": "โพสสำหรับ oversized prop / large item ให้พักข้างตัวหรือแตะพื้น ไม่บังใบหน้าและลำตัว",
    "category": "long_item",
    "categoryName": "อาวุธยาว/ของใหญ่ / Long Item",
    "icon": "🔱",
    "uiCategory": "long_item",
    "uiCategoryName": "อาวุธยาว/ของใหญ่ / Long Item",
    "uiIcon": "🔱",
    "subcategory": "long_item",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Full-body oversized prop side-rest pose. The oversized prop or large item rests beside the character, partly touching the ground or held along the outer silhouette. It stays readable and does not become a weapon, does not cover the face, and does not pierce the body.",
    "noItemPrompt": "Full-body confident pose with empty hands and no oversized prop.",
    "requiresItem": true,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "oversized_prop",
      "prop",
      "large_tool_item",
      "large_ritual_item",
      "none"
    ],
    "preferredItemRoles": [
      "oversized_prop",
      "prop",
      "large_tool_item",
      "large_ritual_item"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "lifestyle",
      "professional",
      "ceremonial",
      "mystic"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "weapon_or_long_item",
      "large_item_safe",
      "prop_readability"
    ],
    "genderFit": {
      "female": "optional",
      "male": "optional",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 78,
    "collectionTags": [
      "safe_fallback",
      "readable_item",
      "clean_silhouette"
    ],
    "bustFriendly": false,
    "silhouettePreservation": "medium",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, hands, torso silhouette, and main item readable. The item stays beside or below the body focus and never blocks the face, throat, chest, waist, or hands.",
    "negativeAdditions": [
      "item covering face",
      "item across neck",
      "hidden hands",
      "impossible grip",
      "prop turning into weapon"
    ],
    "source": "v10_0_1_fallback_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "FB-MALE-01",
    "title": "Male Noble Seated Item Beside Chair",
    "titleTH": "ท่านั่งชาย/กลางวางของข้างเก้าอี้",
    "descriptionTH": "ท่านั่ง fallback สำหรับตัวละครชายหรือกลาง วางคทา/อาวุธ/เครื่องมือข้างเก้าอี้ ไม่บังลำตัว",
    "category": "sitting",
    "categoryName": "ท่านั่ง / Sitting",
    "icon": "🪑",
    "uiCategory": "sitting",
    "uiCategoryName": "ท่านั่ง / Sitting",
    "uiIcon": "🪑",
    "subcategory": "sitting",
    "framing": "seated_full_body",
    "intensity": "safe",
    "prompt": "Seated male or neutral noble pose. The main item, staff, cane, tool, or weapon rests beside the chair or along the outer side of the composition. Hands remain visible on armrest, lap, or item grip. Face, torso, and item stay separated and readable.",
    "noItemPrompt": "Seated noble pose with empty hands, hands on armrest or lap; no item appears.",
    "requiresItem": true,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "large_ritual_item",
      "large_tool_item",
      "none"
    ],
    "preferredItemRoles": [
      "weapon",
      "ritual_item",
      "tool_item",
      "prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "lifestyle"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "prop_readability"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 76,
    "collectionTags": [
      "safe_fallback",
      "readable_item",
      "clean_silhouette"
    ],
    "bustFriendly": false,
    "silhouettePreservation": "medium",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, hands, torso silhouette, and main item readable. The item stays beside or below the body focus and never blocks the face, throat, chest, waist, or hands.",
    "negativeAdditions": [
      "item covering face",
      "item across neck",
      "hidden hands",
      "impossible grip",
      "prop turning into weapon"
    ],
    "source": "v10_0_1_fallback_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "FB-MALE-02",
    "title": "Male Three-Quarter Item at Hip",
    "titleTH": "ท่าชายสามส่วนถือของระดับสะโพก",
    "descriptionTH": "โพสชาย/กลางสามส่วน ถือ item ระดับสะโพกหรือด้านข้าง ใช้เป็น fallback กว้างมาก",
    "category": "male_neutral_weapon",
    "categoryName": "ชาย/กลางถืออาวุธ / Male-Neutral",
    "icon": "🛡️",
    "uiCategory": "male_neutral_weapon",
    "uiCategoryName": "ชาย/กลางถืออาวุธ / Male-Neutral",
    "uiIcon": "🛡️",
    "subcategory": "male_neutral_weapon",
    "framing": "thigh_up",
    "intensity": "safe",
    "prompt": "Three-quarter male or neutral thigh-up pose. The selected item is held near hip level or along the outer side of the frame. Keep the face, chest, waist, hands, and item clear; no direct pointing, no item across throat or torso.",
    "noItemPrompt": "Three-quarter thigh-up neutral pose with empty hands, one hand near hip and one relaxed; no item.",
    "requiresItem": true,
    "noItemSafe": true,
    "itemActionType": "holding",
    "compatibleItemRoles": [
      "weapon",
      "ritual_item",
      "tool_item",
      "prop",
      "daily_item",
      "document_item",
      "instrument_item",
      "none"
    ],
    "preferredItemRoles": [
      "weapon",
      "ritual_item",
      "tool_item",
      "prop"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "combat",
      "professional",
      "scholarly",
      "ceremonial",
      "mystic",
      "lifestyle"
    ],
    "avoidRiskTags": [],
    "riskHints": [
      "prop_readability"
    ],
    "genderFit": {
      "female": "optional",
      "male": "recommended",
      "androgynous": "recommended"
    },
    "recommendedForCollection": false,
    "collectionScore": 79,
    "collectionTags": [
      "safe_fallback",
      "readable_item",
      "clean_silhouette"
    ],
    "bustFriendly": false,
    "silhouettePreservation": "medium",
    "bodyImpact": "preserves_silhouette",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Keep face, hands, torso silhouette, and main item readable. The item stays beside or below the body focus and never blocks the face, throat, chest, waist, or hands.",
    "negativeAdditions": [
      "item covering face",
      "item across neck",
      "hidden hands",
      "impossible grip",
      "prop turning into weapon"
    ],
    "source": "v10_0_1_fallback_pack",
    "v10Patch": "10.0.1"
  },
  {
    "id": "ST-01",
    "title": "Neutral Hero Three-Quarter",
    "titleTH": "ท่ายืนสามส่วนแบบตัวเอก",
    "descriptionTH": "โพสเต็มตัวแบบนางเอกแฟนตาซีสง่า เน้นช่วงอก เอวคอด สะโพกอ่านชัด และซิลูเอต hourglass เหมาะกับตัวละครหญิงสายนางเอก ราชินี หรือวายร้ายหรู โดยมือ ไอเท็ม อาวุธ ผ้า และเอฟเฟกต์ต้องไม่บังใบหน้า ช่วงอก เอว หรือเส้นโค้งหลักของลำตัว",
    "category": "glamour",
    "subcategory": "glamour_standing",
    "framing": "full_body",
    "intensity": "safe",
    "prompt": "Full-body tasteful fantasy glamour pose based on Neutral Hero Three-Quarter. Use three-quarter standing orientation with one hip shifted and shoulders open toward the viewer. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line under the outfit. One hand may rest near the waist or hip while the other stays relaxed or holds the selected object beside the body. If a selected object is included, keep it beside the body, below or outside the chest line, angled along the side of the frame, and never blocking the face, chest silhouette, waist curve, or main body outline. Fully clothed stylish AAA fantasy splash art, polished anime character-card composition.",
    "noItemPrompt": "Full-body tasteful fantasy glamour pose with empty hands. Both hands stay free; one hand rests near the waist or hip while the other relaxes beside the body, keeping the face, chest silhouette, waistline, and hips clear. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line. Fully clothed polished anime character-card composition.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "presenting",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "daily_item",
      "accessory_item",
      "document_item",
      "tool_item"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "accessory_item"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "royal"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "hidden",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 91,
    "collectionTags": [
      "full_bust",
      "hourglass",
      "curvy_silhouette",
      "waist_focus"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_curves",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Preserve full bust silhouette, fitted waist, curvy hips, and elegant hourglass body line without explicit nudity.",
    "negativeAdditions": [
      "flattened chest",
      "boxy torso",
      "erased waist curve",
      "arms hiding bust silhouette",
      "weapon covering chest silhouette"
    ],
    "baseId": "ST-01",
    "categoryName": "Glamour Figure Collection",
    "icon": "💃",
    "source": "base110",
    "v9FinalClean": true,
    "uiCategory": "standing",
    "uiCategoryName": "ท่ายืน / Standing",
    "uiIcon": "🧍"
  },
  {
    "id": "ST-04",
    "title": "Over-Shoulder Turn",
    "titleTH": "ท่ายืนหันกลับมองข้ามไหล่",
    "descriptionTH": "โพสเต็มตัวแบบมองกลับโชว์ซิลูเอต เน้นช่วงอก เอวคอด สะโพกอ่านชัด และซิลูเอต hourglass เหมาะกับตัวละครหญิงที่ต้องการโชว์ซิลูเอตจากมุมหันกลับ โดยมือ ไอเท็ม อาวุธ ผ้า และเอฟเฟกต์ต้องไม่บังใบหน้า ช่วงอก เอว หรือเส้นโค้งหลักของลำตัว",
    "category": "glamour",
    "subcategory": "over_shoulder",
    "framing": "full_body",
    "intensity": "medium",
    "prompt": "Full-body tasteful fantasy glamour pose based on Over-Shoulder Turn. Use looking back over one shoulder while keeping the face, waist, and body line readable. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line under the outfit. Arms remain open and readable, with any selected object placed to the side so the back-turn silhouette and face stay clear. If a selected object is included, keep it beside the body, below or outside the chest line, angled along the side of the frame, and never blocking the face, chest silhouette, waist curve, or main body outline. Fully clothed stylish AAA fantasy splash art, polished anime character-card composition.",
    "noItemPrompt": "Full-body tasteful fantasy glamour pose with empty hands. Both hands stay free and stay away from the face and torso, keeping the over-shoulder body line readable. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line. Fully clothed polished anime character-card composition.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "optional",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "daily_item",
      "accessory_item",
      "document_item",
      "tool_item"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "accessory_item"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "royal"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "hidden",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 94,
    "collectionTags": [
      "full_bust",
      "hourglass",
      "curvy_silhouette",
      "waist_focus"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_curves",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Preserve full bust silhouette, fitted waist, curvy hips, and elegant hourglass body line without explicit nudity.",
    "negativeAdditions": [
      "flattened chest",
      "boxy torso",
      "erased waist curve",
      "arms hiding bust silhouette",
      "weapon covering chest silhouette"
    ],
    "baseId": "ST-04",
    "categoryName": "Glamour Figure Collection",
    "icon": "🌀",
    "source": "base110",
    "v9FinalClean": true,
    "uiCategory": "over_shoulder",
    "uiCategoryName": "มองกลับ / Over-Shoulder",
    "uiIcon": "↩️"
  },
  {
    "id": "ST-05",
    "title": "Walking Forward Entrance",
    "titleTH": "ท่าเดินเข้าสู่ฉากแบบเปิดตัว",
    "descriptionTH": "โพสเต็มตัวแบบเดินเปิดตัว เน้นช่วงอก เอวคอด สะโพกอ่านชัด และซิลูเอต hourglass เหมาะกับภาพ key visual หรือ fantasy splash art ที่ต้องการความพลิ้วไหว โดยมือ ไอเท็ม อาวุธ ผ้า และเอฟเฟกต์ต้องไม่บังใบหน้า ช่วงอก เอว หรือเส้นโค้งหลักของลำตัว",
    "category": "glamour",
    "subcategory": "soft_motion",
    "framing": "full_body",
    "intensity": "medium",
    "prompt": "Full-body tasteful fantasy glamour pose based on Walking Forward Entrance. Use soft moving pose with flowing hair, dress, cape, or fabric arranged in clean large shapes. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line under the outfit. Arms follow the motion in graceful open lines, keeping the face, upper body, waist, and hands readable. If a selected object is included, keep it beside the body, below or outside the chest line, angled along the side of the frame, and never blocking the face, chest silhouette, waist curve, or main body outline. Fully clothed stylish AAA fantasy splash art, polished anime character-card composition.",
    "noItemPrompt": "Full-body tasteful fantasy glamour pose with empty hands. Both hands stay free and follow the flowing motion in graceful open lines without hiding the torso or face. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line. Fully clothed polished anime character-card composition.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "optional",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "daily_item",
      "accessory_item",
      "document_item",
      "tool_item"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "accessory_item"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "lifestyle"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "hidden",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 92,
    "collectionTags": [
      "full_bust",
      "hourglass",
      "curvy_silhouette",
      "waist_focus"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_curves",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Preserve full bust silhouette, fitted waist, curvy hips, and elegant hourglass body line without explicit nudity.",
    "negativeAdditions": [
      "flattened chest",
      "boxy torso",
      "erased waist curve",
      "arms hiding bust silhouette",
      "weapon covering chest silhouette"
    ],
    "baseId": "ST-05",
    "categoryName": "Glamour Figure Collection",
    "icon": "🌬️",
    "source": "base110",
    "v9FinalClean": true,
    "uiCategory": "soft_motion",
    "uiCategoryName": "เคลื่อนไหวสวย / Soft Motion",
    "uiIcon": "🌬️"
  },
  {
    "id": "ST-10",
    "title": "Relaxed Lean",
    "titleTH": "ท่ายืนพิงผ่อนคลาย",
    "descriptionTH": "โพสเต็มตัวแบบเอนตัวบิดเอว เน้นช่วงอก เอวคอด สะโพกอ่านชัด และซิลูเอต hourglass เหมาะกับตัวละครหญิงที่ต้องการ body language มั่นใจ หรู และมีเสน่ห์ โดยมือ ไอเท็ม อาวุธ ผ้า และเอฟเฟกต์ต้องไม่บังใบหน้า ช่วงอก เอว หรือเส้นโค้งหลักของลำตัว",
    "category": "glamour",
    "subcategory": "leaning",
    "framing": "full_body",
    "intensity": "medium",
    "prompt": "Full-body tasteful fantasy glamour pose based on Relaxed Lean. Use elegant leaning pose with torso angled, one hip offset, and balanced support. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line under the outfit. Hands support the lean or rest near the waist, hair, or side of the frame without hiding the torso. If a selected object is included, keep it beside the body, below or outside the chest line, angled along the side of the frame, and never blocking the face, chest silhouette, waist curve, or main body outline. Fully clothed stylish AAA fantasy splash art, polished anime character-card composition.",
    "noItemPrompt": "Full-body tasteful fantasy glamour pose with empty hands. Both hands stay free; one hand supports the lean or rests near the waist while the other relaxes in an open line. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line. Fully clothed polished anime character-card composition.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "optional",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "daily_item",
      "accessory_item",
      "document_item",
      "tool_item"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "accessory_item"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "royal"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "hidden",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 93,
    "collectionTags": [
      "full_bust",
      "hourglass",
      "curvy_silhouette",
      "waist_focus"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_curves",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Preserve full bust silhouette, fitted waist, curvy hips, and elegant hourglass body line without explicit nudity.",
    "negativeAdditions": [
      "flattened chest",
      "boxy torso",
      "erased waist curve",
      "arms hiding bust silhouette",
      "weapon covering chest silhouette"
    ],
    "baseId": "ST-10",
    "categoryName": "Glamour Figure Collection",
    "icon": "🏛️",
    "source": "base110",
    "v9FinalClean": true,
    "uiCategory": "leaning",
    "uiCategoryName": "ท่าเอน / Leaning",
    "uiIcon": "🏛️"
  },
  {
    "id": "ST-11",
    "title": "Royal Fan Stand",
    "titleTH": "ท่ายืนเชิดแบบราชสำนัก",
    "descriptionTH": "โพสช่วงอกแบบนางเอกแฟนตาซีสง่า เน้นช่วงอก เอวคอด สะโพกอ่านชัด และซิลูเอต hourglass เหมาะกับภาพพอร์ตเทรตที่เน้นใบหน้า ผม ไหล่ มือ และช่วงบน โดยมือ ไอเท็ม อาวุธ ผ้า และเอฟเฟกต์ต้องไม่บังใบหน้า ช่วงอก เอว หรือเส้นโค้งหลักของลำตัว",
    "category": "glamour",
    "subcategory": "bust_portrait",
    "framing": "bust",
    "intensity": "medium",
    "prompt": "Bust portrait tasteful fantasy glamour pose based on Royal Fan Stand. Use upper-body three-quarter portrait with angled shoulders and clear face. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line under the outfit. Hands frame the hair, face, collarbone, waist, or selected object naturally without covering the face, chest silhouette, or waistline. If a selected object is included, keep it beside the body, below or outside the chest line, angled along the side of the frame, and never blocking the face, chest silhouette, waist curve, or main body outline. Fully clothed stylish AAA fantasy splash art, polished anime character-card composition.",
    "noItemPrompt": "Bust portrait tasteful fantasy glamour pose with empty hands. Both hands stay free and elegantly frame the hair, collarbone, face, or waist without covering the face, chest silhouette, or fitted waist. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line. Fully clothed polished anime character-card composition.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "optional",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "daily_item",
      "accessory_item",
      "document_item",
      "tool_item"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "accessory_item"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "hidden",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 98,
    "collectionTags": [
      "full_bust",
      "hourglass",
      "curvy_silhouette",
      "waist_focus"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_curves",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Preserve full bust silhouette, fitted waist, curvy hips, and elegant hourglass body line without explicit nudity.",
    "negativeAdditions": [
      "flattened chest",
      "boxy torso",
      "erased waist curve",
      "arms hiding bust silhouette",
      "weapon covering chest silhouette"
    ],
    "baseId": "ST-11",
    "categoryName": "Glamour Figure Collection",
    "icon": "👑",
    "source": "base110",
    "v9FinalClean": true,
    "uiCategory": "closeup_bust",
    "uiCategoryName": "ภาพครึ่งตัว / Portrait",
    "uiIcon": "🖼️"
  },
  {
    "id": "ST-12",
    "title": "Weapon-at-Side Rest",
    "titleTH": "ท่ายืนพักอาวุธข้างลำตัว",
    "descriptionTH": "โพสเต็มตัวแบบแอ็กชันนักสู้ยังเห็นทรงหุ่น เน้นช่วงอก เอวคอด สะโพกอ่านชัด และซิลูเอต hourglass เหมาะกับนักดาบ แม่มด นักรบหญิง หรือบอสแฟนตาซีสายแอ็กชัน โดยมือ ไอเท็ม อาวุธ ผ้า และเอฟเฟกต์ต้องไม่บังใบหน้า ช่วงอก เอว หรือเส้นโค้งหลักของลำตัว",
    "category": "glamour",
    "subcategory": "glamour_combat",
    "framing": "full_body",
    "intensity": "bold",
    "prompt": "Full-body tasteful fantasy glamour pose based on Weapon-at-Side Rest. Use elegant fantasy action framing with moderate torso rotation and readable stance. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line under the outfit. Hands stay readable and the selected equipment, if used, stays beside the body or along the outer frame without crossing the face, chest silhouette, or waist. If a selected object is included, keep it beside the body, below or outside the chest line, angled along the side of the frame, and never blocking the face, chest silhouette, waist curve, or main body outline. The action must not flatten the chest or erase the waist curve; avoid extreme side twisting and avoid both arms crossing over the bust-and-waist silhouette. Fully clothed stylish AAA fantasy splash art, polished anime character-card composition.",
    "noItemPrompt": "Full-body tasteful fantasy glamour pose with empty hands. Both hands stay free in an elegant open combat-ready gesture, with moderate torso rotation and the face, chest silhouette, waistline, and hips visible. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line. Fully clothed polished anime character-card composition.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "combat_ready",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "daily_item",
      "accessory_item",
      "document_item",
      "tool_item"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "accessory_item"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "combat"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "hidden",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 94,
    "collectionTags": [
      "full_bust",
      "hourglass",
      "curvy_silhouette",
      "waist_focus"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_curves",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Preserve full bust silhouette, fitted waist, curvy hips, and elegant hourglass body line without explicit nudity.",
    "negativeAdditions": [
      "flattened chest",
      "boxy torso",
      "erased waist curve",
      "arms hiding bust silhouette",
      "weapon covering chest silhouette"
    ],
    "baseId": "ST-12",
    "categoryName": "Glamour Figure Collection",
    "icon": "⚔️",
    "source": "base110",
    "v9FinalClean": true,
    "uiCategory": "combat",
    "uiCategoryName": "ต่อสู้ / Combat",
    "uiIcon": "⚔️"
  },
  {
    "id": "SI-01",
    "title": "Chair Cross-Legged Noble",
    "titleTH": "ท่านั่งเต็มตัวไขว่ห้างสายราชสำนัก",
    "descriptionTH": "โพสนั่งเต็มตัวแบบไขว่ห้าง เน้นช่วงอก เอวคอด สะโพกอ่านชัด และซิลูเอต hourglass เหมาะกับตัวละครหญิงสาย noble, villainess, goddess หรือ queen โดยมือ ไอเท็ม อาวุธ ผ้า และเอฟเฟกต์ต้องไม่บังใบหน้า ช่วงอก เอว หรือเส้นโค้งหลักของลำตัว",
    "category": "glamour",
    "subcategory": "sitting",
    "framing": "seated_full_body",
    "intensity": "medium",
    "prompt": "Seated full-body tasteful fantasy glamour pose based on Chair Cross-Legged Noble. Use seated queenly composition with torso slightly turned toward the viewer. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line under the outfit. Hands rest on the armrest, lap, near the waist, or hold the selected object beside the body without hiding the torso line. If a selected object is included, keep it beside the body, below or outside the chest line, angled along the side of the frame, and never blocking the face, chest silhouette, waist curve, or main body outline. Fully clothed stylish AAA fantasy splash art, polished anime character-card composition.",
    "noItemPrompt": "Seated full-body tasteful fantasy glamour pose with empty hands. Both hands stay free and rest naturally on the lap, armrest, thigh, or near the waist while the seated silhouette remains clear. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line. Fully clothed polished anime character-card composition.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "optional",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "daily_item",
      "accessory_item",
      "document_item",
      "tool_item"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "accessory_item"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "royal"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "hidden",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 95,
    "collectionTags": [
      "full_bust",
      "hourglass",
      "curvy_silhouette",
      "waist_focus"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_curves",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Preserve full bust silhouette, fitted waist, curvy hips, and elegant hourglass body line without explicit nudity.",
    "negativeAdditions": [
      "flattened chest",
      "boxy torso",
      "erased waist curve",
      "arms hiding bust silhouette",
      "weapon covering chest silhouette"
    ],
    "baseId": "SI-01",
    "categoryName": "Glamour Figure Collection",
    "icon": "🪑",
    "source": "base110",
    "v9FinalClean": true,
    "uiCategory": "sitting",
    "uiCategoryName": "ท่านั่ง / Sitting",
    "uiIcon": "🪑"
  },
  {
    "id": "SI-08",
    "title": "Ground One-Knee Seat",
    "titleTH": "ท่าเข่าขึ้นไปนั่งเอนหรูสายแม่มดหรู",
    "descriptionTH": "โพสเข่าขึ้นไปแบบนั่งเอนหรู เน้นช่วงอก เอวคอด สะโพกอ่านชัด และซิลูเอต hourglass เหมาะกับตัวละครหญิงสาย noble, villainess, goddess หรือ queen โดยมือ ไอเท็ม อาวุธ ผ้า และเอฟเฟกต์ต้องไม่บังใบหน้า ช่วงอก เอว หรือเส้นโค้งหลักของลำตัว",
    "category": "glamour",
    "subcategory": "sitting",
    "framing": "knee_up",
    "intensity": "medium",
    "prompt": "Knee-up tasteful fantasy glamour pose based on Ground One-Knee Seat. Use seated queenly composition with torso slightly turned toward the viewer. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line under the outfit. Hands rest on the armrest, lap, near the waist, or hold the selected object beside the body without hiding the torso line. If a selected object is included, keep it beside the body, below or outside the chest line, angled along the side of the frame, and never blocking the face, chest silhouette, waist curve, or main body outline. Fully clothed stylish AAA fantasy splash art, polished anime character-card composition.",
    "noItemPrompt": "Knee-up tasteful fantasy glamour pose with empty hands. Both hands stay free and rest naturally on the lap, armrest, thigh, or near the waist while the seated silhouette remains clear. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line. Fully clothed polished anime character-card composition.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "optional",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "daily_item",
      "accessory_item",
      "document_item",
      "tool_item"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "accessory_item"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "royal"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "hidden",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 98,
    "collectionTags": [
      "full_bust",
      "hourglass",
      "curvy_silhouette",
      "waist_focus"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_curves",
    "torsoRotation": "low",
    "upperBodyVisibility": "high",
    "figureGuard": "Preserve full bust silhouette, fitted waist, curvy hips, and elegant hourglass body line without explicit nudity.",
    "negativeAdditions": [
      "flattened chest",
      "boxy torso",
      "erased waist curve",
      "arms hiding bust silhouette",
      "weapon covering chest silhouette"
    ],
    "baseId": "SI-08",
    "categoryName": "Glamour Figure Collection",
    "icon": "🪑",
    "source": "base110",
    "v9FinalClean": true,
    "uiCategory": "sitting",
    "uiCategoryName": "ท่านั่ง / Sitting",
    "uiIcon": "🪑"
  },
  {
    "id": "CO-12",
    "title": "Kneeling Battle Recovery",
    "titleTH": "ท่าเข่าขึ้นไปแอ็กชันนักสู้ยังเห็นทรงหุ่นพร้อมบุคลิกสง่า",
    "descriptionTH": "โพสเข่าขึ้นไปแบบแอ็กชันนักสู้ยังเห็นทรงหุ่น เน้นช่วงอก เอวคอด สะโพกอ่านชัด และซิลูเอต hourglass เหมาะกับนักดาบ แม่มด นักรบหญิง หรือบอสแฟนตาซีสายแอ็กชัน โดยมือ ไอเท็ม อาวุธ ผ้า และเอฟเฟกต์ต้องไม่บังใบหน้า ช่วงอก เอว หรือเส้นโค้งหลักของลำตัว",
    "category": "glamour",
    "subcategory": "glamour_combat",
    "framing": "knee_up",
    "intensity": "bold",
    "prompt": "Knee-up tasteful fantasy glamour pose based on Kneeling Battle Recovery. Use elegant fantasy action framing with moderate torso rotation and readable stance. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line under the outfit. Hands stay readable and the selected equipment, if used, stays beside the body or along the outer frame without crossing the face, chest silhouette, or waist. If a selected object is included, keep it beside the body, below or outside the chest line, angled along the side of the frame, and never blocking the face, chest silhouette, waist curve, or main body outline. The action must not flatten the chest or erase the waist curve; avoid extreme side twisting and avoid both arms crossing over the bust-and-waist silhouette. Fully clothed stylish AAA fantasy splash art, polished anime character-card composition.",
    "noItemPrompt": "Knee-up tasteful fantasy glamour pose with empty hands. Both hands stay free in an elegant open combat-ready gesture, with moderate torso rotation and the face, chest silhouette, waistline, and hips visible. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line. Fully clothed polished anime character-card composition.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "combat_ready",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "document_item",
      "tool_item"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "document_item"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "combat"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "hidden",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 97,
    "collectionTags": [
      "full_bust",
      "hourglass",
      "curvy_silhouette",
      "waist_focus"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_curves",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Preserve full bust silhouette, fitted waist, curvy hips, and elegant hourglass body line without explicit nudity.",
    "negativeAdditions": [
      "flattened chest",
      "boxy torso",
      "erased waist curve",
      "arms hiding bust silhouette",
      "weapon covering chest silhouette"
    ],
    "baseId": "CO-12",
    "categoryName": "Glamour Figure Collection",
    "icon": "⚔️",
    "source": "base110",
    "v9FinalClean": true,
    "uiCategory": "combat",
    "uiCategoryName": "ต่อสู้ / Combat",
    "uiIcon": "⚔️"
  },
  {
    "id": "GL-05",
    "title": "Leg-Forward Showcase",
    "titleTH": "ท่าเต็มตัวเอียงสะโพกเน้นเอวสายบอสสาว",
    "descriptionTH": "โพสเต็มตัวแบบเอียงสะโพกเน้นเอว เน้นช่วงอก เอวคอด สะโพกอ่านชัด และซิลูเอต hourglass เหมาะกับภาพการ์ดสะสมที่ต้องการขายชุด เอว และสัดส่วนช่วงตัว โดยมือ ไอเท็ม อาวุธ ผ้า และเอฟเฟกต์ต้องไม่บังใบหน้า ช่วงอก เอว หรือเส้นโค้งหลักของลำตัว",
    "category": "glamour",
    "subcategory": "thigh_up",
    "framing": "full_body",
    "intensity": "medium",
    "prompt": "Full-body tasteful fantasy glamour pose based on Leg-Forward Showcase. Use subtle low-angle three-quarter framing with hip shift and readable upper legs. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line under the outfit. One hand may rest near the waist while the other stays relaxed or holds the selected object beside the body. If a selected object is included, keep it beside the body, below or outside the chest line, angled along the side of the frame, and never blocking the face, chest silhouette, waist curve, or main body outline. Fully clothed stylish AAA fantasy splash art, polished anime character-card composition.",
    "noItemPrompt": "Full-body tasteful fantasy glamour pose with empty hands. Both hands stay free; one hand rests near the waist while the other frames the hair, sleeve, or side of the body without covering the torso. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line. Fully clothed polished anime character-card composition.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "optional",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "daily_item",
      "accessory_item",
      "document_item",
      "tool_item"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "accessory_item"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "hidden",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 94,
    "collectionTags": [
      "full_bust",
      "hourglass",
      "curvy_silhouette",
      "waist_focus"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_curves",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Preserve full bust silhouette, fitted waist, curvy hips, and elegant hourglass body line without explicit nudity.",
    "negativeAdditions": [
      "flattened chest",
      "boxy torso",
      "erased waist curve",
      "arms hiding bust silhouette",
      "weapon covering chest silhouette"
    ],
    "baseId": "GL-05",
    "categoryName": "Glamour Figure Collection",
    "icon": "✨",
    "source": "base110",
    "v9FinalClean": true,
    "uiCategory": "thigh_knee_up",
    "uiCategoryName": "ต้นขา-เข่าขึ้นไป / Thigh-Knee Up",
    "uiIcon": "💎"
  },
  {
    "id": "VI-07",
    "title": "Weapon Drag",
    "titleTH": "ท่าท่านั่ง/มุมต่ำ อาวุธแบบวายร้าย/บอส",
    "descriptionTH": "โพสนั่งเต็มตัวแบบแอ็กชันนักสู้ยังเห็นทรงหุ่น เน้นช่วงอก เอวคอด สะโพกอ่านชัด และซิลูเอต hourglass เหมาะกับนักดาบ แม่มด นักรบหญิง หรือบอสแฟนตาซีสายแอ็กชัน โดยมือ ไอเท็ม อาวุธ ผ้า และเอฟเฟกต์ต้องไม่บังใบหน้า ช่วงอก เอว หรือเส้นโค้งหลักของลำตัว",
    "category": "glamour",
    "subcategory": "glamour_combat",
    "framing": "seated_full_body",
    "intensity": "bold",
    "prompt": "Seated full-body tasteful fantasy glamour pose based on Weapon Drag. Use elegant fantasy action framing with moderate torso rotation and readable stance. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line under the outfit. Hands stay readable and the selected equipment, if used, stays beside the body or along the outer frame without crossing the face, chest silhouette, or waist. If a selected object is included, keep it beside the body, below or outside the chest line, angled along the side of the frame, and never blocking the face, chest silhouette, waist curve, or main body outline. The action must not flatten the chest or erase the waist curve; avoid extreme side twisting and avoid both arms crossing over the bust-and-waist silhouette. Fully clothed stylish AAA fantasy splash art, polished anime character-card composition.",
    "noItemPrompt": "Seated full-body tasteful fantasy glamour pose with empty hands. Both hands stay free in an elegant open combat-ready gesture, with moderate torso rotation and the face, chest silhouette, waistline, and hips visible. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line. Fully clothed polished anime character-card composition.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "combat_ready",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "daily_item",
      "accessory_item",
      "document_item",
      "tool_item"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "accessory_item"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "villain",
      "combat"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "hidden",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 94,
    "collectionTags": [
      "full_bust",
      "hourglass",
      "curvy_silhouette",
      "waist_focus"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_curves",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Preserve full bust silhouette, fitted waist, curvy hips, and elegant hourglass body line without explicit nudity.",
    "negativeAdditions": [
      "flattened chest",
      "boxy torso",
      "erased waist curve",
      "arms hiding bust silhouette",
      "weapon covering chest silhouette"
    ],
    "baseId": "VI-07",
    "categoryName": "Glamour Figure Collection",
    "icon": "⚔️",
    "source": "base110",
    "v9FinalClean": true,
    "uiCategory": "combat",
    "uiCategoryName": "ต่อสู้ / Combat",
    "uiIcon": "⚔️"
  },
  {
    "id": "EXP-CB-23",
    "title": "Weapon Handle Bust Safe",
    "titleTH": "ท่าครึ่งตัว ช่วงอก อาวุธแบบพอร์ตเทรตช่วงบน",
    "descriptionTH": "โพสช่วงอกแบบมือจัดกรอบช่วงบน เน้นช่วงอก เอวคอด สะโพกอ่านชัด และซิลูเอต hourglass เหมาะกับนักดาบ แม่มด นักรบหญิง หรือบอสแฟนตาซีสายแอ็กชัน โดยมือ ไอเท็ม อาวุธ ผ้า และเอฟเฟกต์ต้องไม่บังใบหน้า ช่วงอก เอว หรือเส้นโค้งหลักของลำตัว",
    "category": "glamour",
    "subcategory": "glamour_combat",
    "framing": "bust",
    "intensity": "bold",
    "prompt": "Bust portrait tasteful fantasy glamour pose based on Weapon Handle Bust Safe. Use elegant fantasy action framing with moderate torso rotation and readable stance. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line under the outfit. Hands stay readable and the selected equipment, if used, stays beside the body or along the outer frame without crossing the face, chest silhouette, or waist. If a selected object is included, keep it beside the body, below or outside the chest line, angled along the side of the frame, and never blocking the face, chest silhouette, waist curve, or main body outline. The action must not flatten the chest or erase the waist curve; avoid extreme side twisting and avoid both arms crossing over the bust-and-waist silhouette. Fully clothed stylish AAA fantasy splash art, polished anime character-card composition.",
    "noItemPrompt": "Bust portrait tasteful fantasy glamour pose with empty hands. Both hands stay free in an elegant open combat-ready gesture, with moderate torso rotation and the face, chest silhouette, waistline, and hips visible. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line. Fully clothed polished anime character-card composition.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "combat_ready",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "daily_item",
      "accessory_item",
      "document_item",
      "tool_item"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "accessory_item"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "combat"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "hidden",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 97,
    "collectionTags": [
      "full_bust",
      "hourglass",
      "curvy_silhouette",
      "waist_focus"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_curves",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Preserve full bust silhouette, fitted waist, curvy hips, and elegant hourglass body line without explicit nudity.",
    "negativeAdditions": [
      "flattened chest",
      "boxy torso",
      "erased waist curve",
      "arms hiding bust silhouette",
      "weapon covering chest silhouette"
    ],
    "baseId": "CB-23",
    "categoryName": "Glamour Figure Collection",
    "icon": "⚔️",
    "source": "expansion5",
    "v9FinalClean": true,
    "uiCategory": "combat",
    "uiCategoryName": "ต่อสู้ / Combat",
    "uiIcon": "⚔️"
  },
  {
    "id": "CGL-TK-08",
    "title": "Knee-Up Side Step",
    "titleTH": "ท่าเข่าขึ้นไปก้าวด้านข้าง",
    "descriptionTH": "โพสต้นขาขึ้นไปแบบแอ็กชันยังเห็นเส้นโค้ง เน้นช่วงอก เอวคอด สะโพกอ่านชัด และซิลูเอต hourglass เหมาะกับนักดาบ แม่มด นักรบหญิง หรือบอสแฟนตาซีสายแอ็กชัน โดยมือ ไอเท็ม อาวุธ ผ้า และเอฟเฟกต์ต้องไม่บังใบหน้า ช่วงอก เอว หรือเส้นโค้งหลักของลำตัว",
    "category": "glamour",
    "subcategory": "glamour_combat",
    "framing": "thigh_up",
    "intensity": "bold",
    "prompt": "Thigh-up tasteful fantasy glamour pose based on Knee-Up Side Step. Use elegant fantasy action framing with moderate torso rotation and readable stance. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line under the outfit. Hands stay readable and the selected equipment, if used, stays beside the body or along the outer frame without crossing the face, chest silhouette, or waist. If a selected object is included, keep it beside the body, below or outside the chest line, angled along the side of the frame, and never blocking the face, chest silhouette, waist curve, or main body outline. The action must not flatten the chest or erase the waist curve; avoid extreme side twisting and avoid both arms crossing over the bust-and-waist silhouette. Fully clothed stylish AAA fantasy splash art, polished anime character-card composition.",
    "noItemPrompt": "Thigh-up tasteful fantasy glamour pose with empty hands. Both hands stay free in an elegant open combat-ready gesture, with moderate torso rotation and the face, chest silhouette, waistline, and hips visible. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line. Fully clothed polished anime character-card composition.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "combat_ready",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "daily_item",
      "accessory_item",
      "document_item",
      "tool_item"
    ],
    "preferredItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "accessory_item"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "combat"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "hidden",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 97,
    "collectionTags": [
      "full_bust",
      "hourglass",
      "curvy_silhouette",
      "waist_focus"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_curves",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Preserve full bust silhouette, fitted waist, curvy hips, and elegant hourglass body line without explicit nudity.",
    "negativeAdditions": [
      "flattened chest",
      "boxy torso",
      "erased waist curve",
      "arms hiding bust silhouette",
      "weapon covering chest silhouette"
    ],
    "baseId": "CGL-TK-08",
    "categoryName": "Glamour Figure Collection",
    "icon": "⚔️",
    "source": "collection_glamour_expansion",
    "v9FinalClean": true,
    "uiCategory": "combat",
    "uiCategoryName": "ต่อสู้ / Combat",
    "uiIcon": "⚔️"
  },
  {
    "id": "CGL-NEW-029",
    "title": "Half‑Turn with Cloak Whip",
    "titleTH": "หมุนตัวครึ่งรอบพร้อมผ้าคลุมปลิว",
    "descriptionTH": "โพสหันหลังครึ่งตัวพร้อมผ้าคลุมหรือเดรสพลิ้วในอากาศ มือหนึ่งจับผ้าหรือดาบไว้ข้างลำตัว มืออีกข้างปล่อยสบายให้การเคลื่อนไหวไหลลื่น มองผู้ชมอย่างมั่นใจ ปรับสะโพกและเอวให้ชัดเจน",
    "category": "glamour",
    "subcategory": "over_shoulder",
    "framing": "thigh_up",
    "intensity": "medium",
    "prompt": "Thigh‑up pose where the character completes a half‑turn, sending her cloak or dress whipping through the air as she glances back at the viewer. One hand holds the fabric or a weapon beside the body, while the other hand flows naturally with the motion. The twisting movement accentuates the hips and waist while preserving the bust silhouette. Tasteful fantasy glamour.",
    "noItemPrompt": "Thigh‑up pose where the character completes a half‑turn, sending her cloak or dress whipping through the air as she glances back at the viewer. One hand holds the fabric, while the other hand flows naturally with the motion. The twisting movement accentuates the hips and waist while preserving the bust silhouette. Tasteful fantasy glamour.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "optional",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item",
      "accessory_item"
    ],
    "preferredItemRoles": [
      "none",
      "accessory_item"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "mystic",
      "villain",
      "combat"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "hidden",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 94,
    "collectionTags": [
      "full_bust",
      "hourglass",
      "curvy_silhouette",
      "waist_focus"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_curves",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Preserve full bust silhouette, fitted waist, curvy hips, and elegant hourglass body line without explicit nudity.",
    "negativeAdditions": [
      "flattened chest",
      "boxy torso",
      "erased waist curve",
      "arms hiding bust silhouette",
      "weapon covering chest silhouette"
    ],
    "categoryName": "Glamour Figure Collection",
    "icon": "💃",
    "source": "cgl_new_glamour_addon_40",
    "v9FinalFinalAddon": true,
    "uiCategory": "combat",
    "uiCategoryName": "ต่อสู้ / Combat",
    "uiIcon": "⚔️"
  },
  {
    "id": "CGL-NEW-031",
    "title": "Glamour Sword Slash Half‑Body",
    "titleTH": "ท่าฟันดาบครึ่งตัวแบบรักษาหุ่น",
    "descriptionTH": "โพสต่อสู้ครึ่งตัวที่ตัวละครฟันดาบอย่างสง่างาม ดาบอยู่ข้างลำตัวไม่บังช่วงอกหรือใบหน้า ลำตัวหมุนเพียงเล็กน้อยเพื่อรักษาทรงอกและเอว เหมาะกับตัวละครหญิงนักดาบแฟนตาซี",
    "category": "glamour",
    "subcategory": "glamour_combat",
    "framing": "thigh_up",
    "intensity": "medium",
    "prompt": "Thigh‑up glamour combat pose where the heroine executes a controlled sword slash. The torso rotates moderately to convey motion yet preserves the full bust silhouette and fitted waist. The sword finishes beside the body, not across the chest or face, and the free hand remains visible. Maintain elegant hourglass curves and clear weapon readability. Tasteful fantasy action glamour.",
    "noItemPrompt": "Thigh‑up glamour combat pose where the heroine adopts a poised stance as if finishing a sword slash. Without a weapon, her hands gesture dynamically beside the body, avoiding the chest and face. The torso rotates moderately to convey motion yet preserves the full bust silhouette and fitted waist. Maintain elegant hourglass curves. Tasteful fantasy action glamour.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "combat_ready",
    "compatibleItemRoles": [
      "none",
      "weapon",
      "ritual_item"
    ],
    "preferredItemRoles": [
      "weapon",
      "ritual_item"
    ],
    "avoidItemRoles": [],
    "compatiblePresentationModes": [
      "glamour",
      "combat",
      "royal",
      "villain"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "hidden",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 91,
    "collectionTags": [
      "full_bust",
      "hourglass",
      "curvy_silhouette",
      "waist_focus"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_curves",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Preserve full bust silhouette, fitted waist, curvy hips, and elegant hourglass body line without explicit nudity.",
    "negativeAdditions": [
      "flattened chest",
      "boxy torso",
      "erased waist curve",
      "arms hiding bust silhouette",
      "weapon covering chest silhouette"
    ],
    "categoryName": "Glamour Figure Collection",
    "icon": "💃",
    "source": "cgl_new_glamour_addon_40",
    "v9FinalFinalAddon": true,
    "uiCategory": "combat",
    "uiCategoryName": "ต่อสู้ / Combat",
    "uiIcon": "⚔️"
  },
  {
    "id": "CGL-NEW-032",
    "title": "Elegant Staff Raise",
    "titleTH": "ท่าเวทยกคทาอย่างสง่างาม",
    "descriptionTH": "โพสแอ็กชันครึ่งตัวหรือเข่าขึ้นไปที่ตัวละครยกคทาหรือไม้เท้าเหนือศีรษะอย่างสง่างาม มืออีกข้างวางใกล้เอว รักษาทรงอกและเอวไม่ให้แขนบัง เหมาะกับตัวละครนักเวท",
    "category": "glamour",
    "subcategory": "glamour_combat",
    "framing": "knee_up",
    "intensity": "medium",
    "prompt": "Knee‑up glamour combat pose where the character raises a staff or wand elegantly above her head. The other hand rests near her waist, and the torso remains open to showcase the full bust silhouette and fitted waist. Shoulders angle to maintain weapon readability without hiding the face or chest. Tasteful fantasy action glamour.",
    "noItemPrompt": "Knee‑up glamour combat pose where the character raises her hands elegantly above her head as if casting a spell. The torso remains open to showcase the full bust silhouette and fitted waist. Shoulders angle to maintain graceful lines without hiding the face or chest. Tasteful fantasy action glamour.",
    "requiresItem": false,
    "noItemSafe": true,
    "itemActionType": "magical_activation",
    "compatibleItemRoles": [
      "none",
      "ritual_item",
      "weapon"
    ],
    "preferredItemRoles": [
      "ritual_item",
      "weapon"
    ],
    "avoidItemRoles": [
      "large_weapon"
    ],
    "compatiblePresentationModes": [
      "glamour",
      "mystic",
      "combat"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "hidden",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 90,
    "collectionTags": [
      "full_bust",
      "hourglass",
      "curvy_silhouette",
      "waist_focus"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_curves",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Preserve full bust silhouette, fitted waist, curvy hips, and elegant hourglass body line without explicit nudity.",
    "negativeAdditions": [
      "flattened chest",
      "boxy torso",
      "erased waist curve",
      "arms hiding bust silhouette",
      "weapon covering chest silhouette"
    ],
    "categoryName": "Glamour Figure Collection",
    "icon": "💃",
    "source": "cgl_new_glamour_addon_40",
    "v9FinalFinalAddon": true,
    "uiCategory": "combat",
    "uiCategoryName": "ต่อสู้ / Combat",
    "uiIcon": "⚔️"
  },
  {
    "id": "CGL-NEW-035",
    "title": "Glamour Archer Aiming Sideways",
    "titleTH": "ท่านักธนูหันข้างเน้นเอวและอก",
    "descriptionTH": "โพสแอ็กชันครึ่งตัวที่ตัวละครถือคันธนูไปด้านข้างพร้อมดึงสาย คันธนูยกต่ำกว่าไหล่เพื่อไม่บังช่วงอก ลำตัวบิดเพียงพอให้เห็นเส้นโค้งของเอวและสะโพก เหมาะกับตัวละครนักล่าแฟนตาซี",
    "category": "glamour",
    "subcategory": "ranged_weapon",
    "framing": "thigh_up",
    "intensity": "medium",
    "prompt": "Thigh‑up glamour combat pose where the character draws a bow to the side. The bow is held low enough not to cover the chest, and the torso is rotated moderately so that the bust and waist remain visible. The stance highlights the hip and leg while the arms create an elegant line. Preserve full bust silhouette, fitted waist and curvy hips. Tasteful fantasy action glamour.",
    "noItemPrompt": "Thigh‑up glamour combat pose where the character mimics drawing a bow to the side without any weapon. Her arms extend gracefully, and the torso rotates moderately to keep the bust and waist visible. The stance highlights the hip and leg. Preserve full bust silhouette, fitted waist and curvy hips. Tasteful fantasy action glamour.",
    "requiresItem": true,
    "noItemSafe": false,
    "itemActionType": "combat_ready",
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
    "compatiblePresentationModes": [
      "glamour",
      "combat",
      "mystic"
    ],
    "avoidRiskTags": [],
    "genderFit": {
      "female": "recommended",
      "male": "hidden",
      "androgynous": "optional"
    },
    "recommendedForCollection": true,
    "collectionScore": 92,
    "collectionTags": [
      "full_bust",
      "hourglass",
      "curvy_silhouette",
      "waist_focus"
    ],
    "bustFriendly": true,
    "silhouettePreservation": "high",
    "bodyImpact": "preserves_curves",
    "torsoRotation": "medium",
    "upperBodyVisibility": "high",
    "figureGuard": "Preserve full bust silhouette, fitted waist, curvy hips, and elegant hourglass body line without explicit nudity.",
    "negativeAdditions": [
      "flattened chest",
      "boxy torso",
      "erased waist curve",
      "arms hiding bust silhouette",
      "weapon covering chest silhouette"
    ],
    "categoryName": "Glamour Figure Collection",
    "icon": "💃",
    "source": "cgl_new_glamour_addon_40",
    "v9FinalFinalAddon": true,
    "uiCategory": "ranged_weapon",
    "uiCategoryName": "ต่อสู้ / Combat",
    "uiIcon": "⚔️"
  }
];

const retiredPoseAliases = {};

if (typeof window !== "undefined") {
  window.poseLibraryV11Clean = poseLibraryV11Clean;
  window.retiredPoseAliases = retiredPoseAliases;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { poseLibraryV11Clean, retiredPoseAliases };
}
