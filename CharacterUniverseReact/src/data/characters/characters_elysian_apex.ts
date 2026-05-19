// The Elysian Apex character data split from characters_reworked_final_v2.js.
// V2 polish by Alice: added titles/display names, mythology metadata, subgroups, and readability-safe item/effect wording.
// This project loads plain scripts, so these constants are exposed through globals and CommonJS.
export const elysianApexFaction = {
  "id": 22,
  "name": "The Elysian Apex",
  "thaiName": "วิหารเทพีอีลิเซียม",
  "icon": "🏛️✨",
  "universe": "Arcadia",
  "mythology": "Greco-Roman",
  "characterCount": 16,
  "mainStyleTarget": "Dark Luxury / Glamour Close-up / AAA Splash Art / Soft Pastel",
  "mainPoseTarget": "Glamour Close-up / AAA Splash Art / Original Static / Dynamic Action for combat characters",
  "safetyLevel": "Medium-Safe / Max Non-Explicit Divine Glamour",
  "mainGenderFocus": "adult female goddess council",
  "designRule": "tasteful non-explicit divine glamour, Greco-Roman haute couture, readable physically solid main items, clean separated aura effects"
};

export const elysianApexCharacters = [
  {
    "id": "2201",
    "name": "Hera",
    "gender": "female",
    "faction": "วิหารเทพีอีลิเซียม",
    "tags": [
      "floating_props",
      "accessory_item",
      "royal",
      "goddess",
      "female",
      "accessory"
    ],
    "presentationMode": "royal",
    "characterCore": {
      "face": "cold majestic expression",
      "hair": "Long regal dark-brown hair with gold laurel crown",
      "outfit": "a white-gold draped Greco-Roman goddess gown with high side slit, structured bodice, opaque strategic coverage, gold arm cuffs, and diamond crown",
      "body": "adult feminine build matching the original design",
      "aura": "a simple clean peacock-eye gold halo behind her shoulders, with no loose feather clutter",
      "extra": "Hera — Sovereign of the Sacred Crown, adult female Greco-Roman fantasy reinterpretation",
      "identityLock": [
        "Long regal dark-brown hair with gold laurel crown",
        "a white-gold draped Greco-Roman goddess gown with high side slit, structured bodice, opaque strategic coverage, gold arm cuffs, and diamond crown",
        "cold majestic expression",
        "a simple clean peacock-eye gold halo behind her shoulders, with no loose feather clutter",
        "Hera — Sovereign of the Sacred Crown, adult female Greco-Roman fantasy reinterpretation"
      ]
    },
    "personalItem": {
      "name": "a physically solid golden peacock feather fan with readable handle and grouped feather shape",
      "itemRole": "accessory_item",
      "itemFamily": "accessory",
      "description": "a physically solid golden peacock feather fan with readable handle and grouped feather shape",
      "withItemPrompt": "holding or presenting a physically solid golden peacock feather fan with readable handle and grouped feather shape near shoulder or waist level, not covering the face, chest silhouette, waist, or body outline",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "fan"
      ],
      "itemGuard": "Keep the item readable and separate from the face, waist, and body outline."
    },
    "promptProfile": {
      "preferredFraming": [
        "bust",
        "waist_up",
        "thigh_up"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "portrait",
        "standing"
      ],
      "avoidPoseCategories": [],
      "figurePreset": "glamour_voluptuous"
    },
    "title": "Sovereign of the Sacred Crown",
    "displayName": "Hera — Sovereign of the Sacred Crown",
    "mythology": "Greco-Roman",
    "subgroup": "High Olympian Council",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "factionId": 22,
    "factionName": "The Elysian Apex"
  },
  {
    "id": "2202",
    "name": "Aphrodite",
    "gender": "female",
    "faction": "วิหารเทพีอีลิเซียม",
    "tags": [
      "aura_effect",
      "daily_item",
      "lifestyle",
      "goddess",
      "female",
      "other",
      "daily"
    ],
    "presentationMode": "lifestyle",
    "characterCore": {
      "face": "pearl-pink eyes; playful seductive smile",
      "hair": "Long rose-gold waves hair",
      "outfit": "pearl-pink and shell-rose silk chiton with glossy divine fabric highlights, opaque draped layers, gold shell jewelry, and tasteful non-explicit divine glamour",
      "body": "adult feminine build matching the original design",
      "aura": "soft pearl heart-light glowing behind her shoulders, subtle and separated from the golden apple",
      "extra": "Aphrodite — Muse of Desire, adult female Greco-Roman fantasy reinterpretation",
      "identityLock": [
        "Long rose-gold waves hair",
        "pearl-pink and shell-rose silk chiton with glossy divine fabric highlights, opaque draped layers, gold shell jewelry, and tasteful non-explicit divine glamour",
        "pearl-pink eyes; playful seductive smile",
        "soft pearl heart-light glowing behind her shoulders, subtle and separated from the golden apple",
        "Aphrodite — Muse of Desire, adult female Greco-Roman fantasy reinterpretation"
      ]
    },
    "personalItem": {
      "name": "a physically solid ornate golden apple with engraved patterns",
      "itemRole": "daily_item",
      "itemFamily": "other",
      "description": "a physically solid ornate golden apple with engraved patterns",
      "withItemPrompt": "holding a physically solid ornate golden apple with engraved patterns near shoulder or waist level, not covering the face, chest silhouette, waist, or body outline",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "apple"
      ],
      "itemGuard": "Keep the daily item small and readable without covering the face or body silhouette."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "lifestyle",
        "sitting",
        "portrait"
      ],
      "avoidPoseCategories": [
        "combat_attack",
        "ranged_weapon"
      ],
      "figurePreset": "glamour_voluptuous"
    },
    "title": "Muse of Desire",
    "displayName": "Aphrodite — Muse of Desire",
    "mythology": "Greco-Roman",
    "subgroup": "High Olympian Council",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "factionId": 22,
    "factionName": "The Elysian Apex"
  },
  {
    "id": "2203",
    "name": "Athena",
    "gender": "female",
    "faction": "วิหารเทพีอีลิเซียม",
    "tags": [
      "dual_item",
      "aura_effect",
      "combat",
      "goddess",
      "female",
      "weapon",
      "large_weapon"
    ],
    "presentationMode": "combat",
    "characterCore": {
      "face": "sharp gray-blue eyes; commanding expression; focused commanding expression",
      "hair": "Long ash-blonde hair tied with gold warrior circlet",
      "outfit": "golden bikini-inspired armor with opaque coverage, white battle chiton, flowing cape, gold waist guard, and gladiator stilettos",
      "body": "adult feminine athletic build matching the original design",
      "aura": "a clean owl-and-sun crest glowing behind the shield, not adding extra weapons or metal clutter",
      "extra": "Athena — Aegis Strategist, adult female Greco-Roman fantasy reinterpretation; detail control: keep armor motifs broad and readable, avoid dense shield ornaments",
      "identityLock": [
        "Long ash-blonde hair tied with gold warrior circlet",
        "golden bikini-inspired armor with opaque coverage, white battle chiton, flowing cape, gold waist guard, and gladiator stilettos",
        "sharp gray-blue eyes; commanding expression; focused commanding expression",
        "a clean owl-and-sun crest glowing behind the shield, not adding extra weapons or metal clutter",
        "Athena — Aegis Strategist, adult female Greco-Roman fantasy reinterpretation; detail control: keep armor motifs broad and readable, avoid dense shield ornaments"
      ]
    },
    "personalItem": {
      "name": "a physically rigid golden spear with straight shaft and sharp spear tip, plus a physically rigid Aegis round shield with readable rim and visible inner grip",
      "itemRole": "weapon",
      "itemFamily": "large_weapon",
      "description": "a physically rigid golden spear with straight shaft and sharp spear tip, plus a physically rigid Aegis round shield with readable rim and visible inner grip",
      "withItemPrompt": "holding a physically rigid golden spear with straight shaft and sharp spear tip, plus a physically rigid Aegis round shield with readable rim and visible inner grip positioned beside the body or along the side of the frame, not covering the face, chest silhouette, waist, or body outline",
      "noItemRemove": [
        "holding",
        "wielding",
        "gripping",
        "carrying",
        "brandishing",
        "spear",
        "shield"
      ],
      "itemGuard": "Keep the weapon readable and do not let it cross the face, chest, waist, or erase the silhouette."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_combat",
        "combat",
        "standing"
      ],
      "avoidPoseCategories": [
        "ranged_weapon",
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    },
    "title": "Aegis Strategist",
    "displayName": "Athena — Aegis Strategist",
    "mythology": "Greco-Roman",
    "subgroup": "High Olympian Council",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "factionId": 22,
    "factionName": "The Elysian Apex"
  },
  {
    "id": "2204",
    "name": "Artemis",
    "gender": "female",
    "faction": "วิหารเทพีอีลิเซียม",
    "tags": [
      "aura_effect",
      "combat",
      "archer",
      "female",
      "weapon",
      "ranged_weapon",
      "bow"
    ],
    "presentationMode": "combat",
    "characterCore": {
      "face": "moon-blue eyes; calm sharp expression",
      "hair": "Silver hair in high ponytail",
      "outfit": "a fitted silver-navy short Greek hunting tunic with elegant armored corset belt, thigh-high strapped sandals, and moon cloak, with tasteful opaque coverage",
      "body": "adult feminine lean build matching the original design",
      "aura": "a clean moonlit crescent arc glowing behind her bow, not crossing the bowstring or face",
      "extra": "Artemis — Moon Huntress, adult female Greco-Roman fantasy reinterpretation",
      "identityLock": [
        "Silver hair in high ponytail",
        "a fitted silver-navy short Greek hunting tunic with elegant armored corset belt, thigh-high strapped sandals, and moon cloak, with tasteful opaque coverage",
        "moon-blue eyes; calm sharp expression",
        "a clean moonlit crescent arc glowing behind her bow, not crossing the bowstring or face",
        "Artemis — Moon Huntress, adult female Greco-Roman fantasy reinterpretation"
      ]
    },
    "personalItem": {
      "name": "a physically rigid silver crescent longbow with readable bow limbs, visible grip, clear bowstring, and arrow placement",
      "itemRole": "weapon",
      "itemFamily": "bow",
      "description": "a physically rigid silver crescent longbow with readable bow limbs, visible grip, clear bowstring, and arrow placement",
      "withItemPrompt": "holding a physically rigid silver crescent longbow with readable bow limbs, visible grip, clear bowstring, and arrow placement lowered or angled beside the body, not actively aiming across the face, not covering the face, chest silhouette, waist, or body outline",
      "noItemRemove": [
        "holding",
        "wielding",
        "gripping",
        "carrying",
        "brandishing",
        "bow"
      ],
      "itemGuard": "Keep the weapon readable and do not let it cross the face, chest, waist, or erase the silhouette."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_combat",
        "combat",
        "standing"
      ],
      "avoidPoseCategories": [
        "closeup_bust",
        "melee_attack",
        "instrument",
        "book_reading"
      ],
      "figurePreset": "standard"
    },
    "title": "Moon Huntress",
    "displayName": "Artemis — Moon Huntress",
    "mythology": "Greco-Roman",
    "subgroup": "High Olympian Council",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "factionId": 22,
    "factionName": "The Elysian Apex"
  },
  {
    "id": "2205",
    "name": "Persephone",
    "gender": "female",
    "faction": "วิหารเทพีอีลิเซียม",
    "tags": [
      "aura_effect",
      "ritual_item",
      "ceremonial",
      "goddess",
      "female",
      "other",
      "ritual"
    ],
    "presentationMode": "ceremonial",
    "characterCore": {
      "face": "garnet red eyes; dangerous smile; mysterious dangerous smile",
      "hair": "Long black hair with ruby-red flower ornaments",
      "outfit": "a black-ruby high-slit goddess dress with thorn rose corset, opaque bodice, minimal underworld gold chains, and elegant dark divine glamour",
      "body": "adult feminine build matching the original design",
      "aura": "a dark red underworld flower halo blooming behind her shoulders, not resembling blood splatter",
      "extra": "Persephone — Abyssal Bloom Queen, adult female Greco-Roman fantasy reinterpretation",
      "identityLock": [
        "Long black hair with ruby-red flower ornaments",
        "a black-ruby high-slit goddess dress with thorn rose corset, opaque bodice, minimal underworld gold chains, and elegant dark divine glamour",
        "garnet red eyes; dangerous smile; mysterious dangerous smile",
        "a dark red underworld flower halo blooming behind her shoulders, not resembling blood splatter",
        "Persephone — Abyssal Bloom Queen, adult female Greco-Roman fantasy reinterpretation"
      ]
    },
    "personalItem": {
      "name": "a physically solid ruby-glowing pomegranate with readable fruit shape and jewel-like seeds",
      "itemRole": "ritual_item",
      "itemFamily": "other",
      "description": "a physically solid ruby-glowing pomegranate with readable fruit shape and jewel-like seeds",
      "withItemPrompt": "holding or presenting a physically solid ruby-glowing pomegranate with readable fruit shape and jewel-like seeds near waist level or beside the body, clearly separated from aura effects and not covering the face or body silhouette",
      "noItemRemove": [
        "holding",
        "presenting",
        "carrying"
      ],
      "itemGuard": "Keep the ritual item readable and separate from aura effects, face, and body outline."
    },
    "promptProfile": {
      "preferredFraming": [
        "bust",
        "waist_up",
        "thigh_up"
      ],
      "preferredPoseCategories": [
        "mystic",
        "ceremonial",
        "soft_motion"
      ],
      "avoidPoseCategories": [],
      "figurePreset": "glamour_voluptuous"
    },
    "title": "Abyssal Bloom Queen",
    "displayName": "Persephone — Abyssal Bloom Queen",
    "mythology": "Greco-Roman",
    "subgroup": "Underworld Court",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "factionId": 22,
    "factionName": "The Elysian Apex"
  },
  {
    "id": "2206",
    "name": "Demeter",
    "gender": "female",
    "faction": "วิหารเทพีอีลิเซียม",
    "tags": [
      "aura_effect",
      "daily_item",
      "ceremonial",
      "goddess",
      "female",
      "cup",
      "daily"
    ],
    "presentationMode": "ceremonial",
    "characterCore": {
      "face": "emerald-gold eyes; warm serene smile",
      "hair": "Long honey-brown hair with wheat-gold ornaments",
      "outfit": "an emerald-green and gold draped gown with soft maternal divine silhouette, opaque silk layers, wheat belt, and elegant gold arm cuffs",
      "body": "adult feminine build matching the original design",
      "aura": "soft wheat and golden harvest light glowing behind the chalice, with a small grouped wheat motif only",
      "extra": "Demeter — Ambrosia Saint of Harvest, adult female Greco-Roman fantasy reinterpretation",
      "identityLock": [
        "Long honey-brown hair with wheat-gold ornaments",
        "an emerald-green and gold draped gown with soft maternal divine silhouette, opaque silk layers, wheat belt, and elegant gold arm cuffs",
        "emerald-gold eyes; warm serene smile",
        "soft wheat and golden harvest light glowing behind the chalice, with a small grouped wheat motif only",
        "Demeter — Ambrosia Saint of Harvest, adult female Greco-Roman fantasy reinterpretation"
      ]
    },
    "personalItem": {
      "name": "a physically solid crystal chalice with glowing golden nectar clearly contained inside",
      "itemRole": "daily_item",
      "itemFamily": "cup",
      "description": "a physically solid crystal chalice with glowing golden nectar clearly contained inside",
      "withItemPrompt": "holding a physically solid crystal chalice with glowing golden nectar clearly contained inside near shoulder or waist level, not covering the face, chest silhouette, waist, or body outline",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "chalice"
      ],
      "itemGuard": "Keep the daily item small and readable without covering the face or body silhouette."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "lifestyle",
        "sitting",
        "portrait"
      ],
      "avoidPoseCategories": [
        "combat_attack",
        "ranged_weapon"
      ],
      "figurePreset": "glamour_voluptuous"
    },
    "title": "Ambrosia Saint of Harvest",
    "displayName": "Demeter — Ambrosia Saint of Harvest",
    "mythology": "Greco-Roman",
    "subgroup": "High Olympian Council",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "factionId": 22,
    "factionName": "The Elysian Apex"
  },
  {
    "id": "2207",
    "name": "Hecate",
    "gender": "female",
    "faction": "วิหารเทพีอีลิเซียม",
    "tags": [
      "dual_item",
      "aura_effect",
      "ritual_item",
      "mystic",
      "witch",
      "female",
      "other",
      "ritual"
    ],
    "presentationMode": "mystic",
    "characterCore": {
      "face": "calm secretive expression; glowing violet eyes",
      "hair": "Long black-violet hair under a translucent black hood",
      "outfit": "a black sheer hooded mantle over opaque lace bodysuit lining, gold moon belt, layered dark chiton, and tasteful non-explicit mystic glamour",
      "body": "adult feminine build matching the original design",
      "aura": "a triple moon sigil glowing cleanly behind her shoulders, separate from the twin torch flames",
      "extra": "Hecate — Torch Queen of the Crossroads, adult female Greco-Roman fantasy reinterpretation",
      "identityLock": [
        "Long black-violet hair under a translucent black hood",
        "a black sheer hooded mantle over opaque lace bodysuit lining, gold moon belt, layered dark chiton, and tasteful non-explicit mystic glamour",
        "calm secretive expression; glowing violet eyes",
        "a triple moon sigil glowing cleanly behind her shoulders, separate from the twin torch flames",
        "Hecate — Torch Queen of the Crossroads, adult female Greco-Roman fantasy reinterpretation"
      ]
    },
    "personalItem": {
      "name": "twin physically solid mystic torches with visible handles and small controlled violet-gold flames above each torch head",
      "itemRole": "ritual_item",
      "itemFamily": "other",
      "description": "twin physically solid mystic torches with visible handles and small controlled violet-gold flames above each torch head",
      "withItemPrompt": "holding or presenting twin physically solid mystic torches with visible handles and small controlled violet-gold flames above each torch head near waist level or beside the body, clearly separated from aura effects and not covering the face or body silhouette",
      "noItemRemove": [
        "holding",
        "presenting",
        "carrying"
      ],
      "itemGuard": "Keep the ritual item readable and separate from aura effects, face, and body outline."
    },
    "promptProfile": {
      "preferredFraming": [
        "bust",
        "waist_up",
        "thigh_up"
      ],
      "preferredPoseCategories": [
        "mystic",
        "ceremonial",
        "soft_motion"
      ],
      "avoidPoseCategories": [],
      "figurePreset": "glamour_voluptuous"
    },
    "title": "Torch Queen of the Crossroads",
    "displayName": "Hecate — Torch Queen of the Crossroads",
    "mythology": "Greco-Roman",
    "subgroup": "Underworld Court",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "factionId": 22,
    "factionName": "The Elysian Apex"
  },
  {
    "id": "2208",
    "name": "Nyx",
    "gender": "female",
    "faction": "วิหารเทพีอีลิเซียม",
    "tags": [
      "floating_props",
      "aura_effect",
      "document_item",
      "scholar",
      "goddess",
      "female",
      "document"
    ],
    "presentationMode": "scholar",
    "characterCore": {
      "face": "starlight eyes; serene ancient expression",
      "hair": "Extremely long midnight-blue hair with clean grouped star-like highlights",
      "outfit": "an off-shoulder Milky Way evening gown with opaque midnight lining, silver waist chain, and floor-length cosmic drape",
      "body": "adult feminine lean build matching the original design",
      "aura": "a clean thin constellation crescent behind her shoulders, clearly separated from her hair, gown, and scroll",
      "extra": "Nyx — Night Weaver of the Star Map, adult female Greco-Roman fantasy reinterpretation",
      "identityLock": [
        "Extremely long midnight-blue hair with clean grouped star-like highlights",
        "an off-shoulder Milky Way evening gown with opaque midnight lining, silver waist chain, and floor-length cosmic drape",
        "starlight eyes; serene ancient expression",
        "a clean thin constellation crescent behind her shoulders, clearly separated from her hair, gown, and scroll",
        "Nyx — Night Weaver of the Star Map, adult female Greco-Roman fantasy reinterpretation"
      ]
    },
    "personalItem": {
      "name": "a physically solid ancient star-map parchment scroll with visible edges and readable map-like constellations",
      "itemRole": "document_item",
      "itemFamily": "document",
      "description": "a physically solid ancient star-map parchment scroll with visible edges and readable map-like constellations",
      "withItemPrompt": "holding or presenting a physically solid ancient star-map parchment scroll with visible edges and readable map-like constellations near waist level or beside the body, clearly separated from constellation aura effects and not covering the face or body silhouette",
      "noItemRemove": [
        "holding",
        "reading",
        "carrying",
        "presenting",
        "scroll",
        "map",
        "parchment"
      ],
      "itemGuard": "Keep the document or book readable at lower chest or waist level without covering the face."
    },
    "promptProfile": {
      "preferredFraming": [
        "bust",
        "waist_up",
        "thigh_up"
      ],
      "preferredPoseCategories": [
        "portrait",
        "sitting",
        "document_item"
      ],
      "avoidPoseCategories": [
        "combat_attack",
        "ranged_weapon",
        "instrument"
      ],
      "figurePreset": "standard"
    },
    "title": "Night Weaver of the Star Map",
    "displayName": "Nyx — Night Weaver of the Star Map",
    "mythology": "Greco-Roman",
    "subgroup": "Underworld Court",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "factionId": 22,
    "factionName": "The Elysian Apex"
  },
  {
    "id": "2209",
    "name": "Medusa",
    "gender": "female",
    "faction": "วิหารเทพีอีลิเซียม",
    "tags": [
      "creature_traits",
      "aura_effect",
      "accessory_item",
      "mystic",
      "female",
      "other"
    ],
    "presentationMode": "mystic",
    "characterCore": {
      "face": "intense green-gold eyes; hypnotic stern expression",
      "hair": "Long dark emerald hair",
      "outfit": "an emerald-black snake-scale couture gown with high slit, deep neckline with opaque coverage, and gold serpent arm cuffs",
      "body": "adult feminine build matching the original design",
      "aura": "a clean stone-crack halo behind her shoulders, with no extra snake heads or body-horror detail",
      "extra": "Medusa — Gorgon's Allure, adult female Greco-Roman fantasy reinterpretation",
      "identityLock": [
        "Long dark emerald hair",
        "an emerald-black snake-scale couture gown with high slit, deep neckline with opaque coverage, and gold serpent arm cuffs",
        "intense green-gold eyes; hypnotic stern expression",
        "a clean stone-crack halo behind her shoulders, with no extra snake heads or body-horror detail",
        "Medusa — Gorgon's Allure, adult female Greco-Roman fantasy reinterpretation"
      ]
    },
    "personalItem": {
      "name": "a physically solid petrified stone rose with a small serpent-shaped handle",
      "itemRole": "accessory_item",
      "itemFamily": "other",
      "description": "a physically solid petrified stone rose with a small serpent-shaped handle",
      "withItemPrompt": "holding or presenting a physically solid petrified stone rose with a small serpent-shaped handle near shoulder or waist level, not covering the face, chest silhouette, waist, or body outline",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting"
      ],
      "itemGuard": "Keep the item readable and separate from the face, waist, and body outline."
    },
    "promptProfile": {
      "preferredFraming": [
        "bust",
        "waist_up",
        "thigh_up"
      ],
      "preferredPoseCategories": [
        "mystic",
        "ceremonial",
        "soft_motion"
      ],
      "avoidPoseCategories": [],
      "figurePreset": "standard"
    },
    "title": "Gorgon's Allure",
    "displayName": "Medusa — Gorgon's Allure",
    "mythology": "Greco-Roman",
    "subgroup": "Underworld Court",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "factionId": 22,
    "factionName": "The Elysian Apex"
  },
  {
    "id": "2210",
    "name": "Nemesis",
    "gender": "female",
    "faction": "วิหารเทพีอีลิเซียม",
    "tags": [
      "creature_traits",
      "combat",
      "goddess",
      "female",
      "weapon",
      "sword"
    ],
    "presentationMode": "combat",
    "characterCore": {
      "face": "cold merciless expression; glowing crimson eyes",
      "hair": "Long black hair with crimson underside",
      "outfit": "blood-red and black female gladiator leather armor with exposed midriff styling, opaque chest armor, gold-black belt, and dark feathered cape",
      "body": "adult feminine lean build matching the original design",
      "aura": "a restrained black-red judgment halo behind her sword, with subtle scale-shaped light but no extra weapons",
      "extra": "Nemesis — Crimson Retribution, adult female Greco-Roman fantasy reinterpretation; her identity is judge and executioner, not a generic war goddess",
      "identityLock": [
        "Long black hair with crimson underside",
        "blood-red and black female gladiator leather armor with exposed midriff styling, opaque chest armor, gold-black belt, and dark feathered cape",
        "cold merciless expression; glowing crimson eyes",
        "a restrained black-red judgment halo behind her sword, with subtle scale-shaped light but no extra weapons",
        "Nemesis — Crimson Retribution, adult female Greco-Roman fantasy reinterpretation; her identity is judge and executioner, not a generic war goddess"
      ]
    },
    "personalItem": {
      "name": "a physically rigid large black-red executioner sword with visible hilt, heavy blade body, and readable blade edge",
      "itemRole": "weapon",
      "itemFamily": "sword",
      "description": "a physically rigid large black-red executioner sword with visible hilt, heavy blade body, and readable blade edge",
      "withItemPrompt": "holding a physically rigid large black-red executioner sword with visible hilt, heavy blade body, and readable blade edge positioned beside the body or along the side of the frame, not covering the face, chest silhouette, waist, or body outline",
      "noItemRemove": [
        "holding",
        "wielding",
        "gripping",
        "carrying",
        "brandishing",
        "sword",
        "blade"
      ],
      "itemGuard": "Keep the weapon readable and do not let it cross the face, chest, waist, or erase the silhouette."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_combat",
        "combat",
        "standing"
      ],
      "avoidPoseCategories": [
        "ranged_weapon",
        "instrument",
        "book_reading"
      ],
      "figurePreset": "standard"
    },
    "title": "Crimson Retribution",
    "displayName": "Nemesis — Crimson Retribution",
    "mythology": "Greco-Roman",
    "subgroup": "Underworld Court",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "factionId": 22,
    "factionName": "The Elysian Apex"
  },
  {
    "id": "2211",
    "name": "Ariadne",
    "gender": "female",
    "faction": "วิหารเทพีอีลิเซียม",
    "tags": [
      "thread_effect",
      "tool_item",
      "mystic",
      "princess",
      "female",
      "other",
      "tool"
    ],
    "presentationMode": "mystic",
    "characterCore": {
      "face": "amber-red eyes; clever challenging smile",
      "hair": "Long crimson hair braided with gold thread",
      "outfit": "a red-gold woven Greek silk gown with elegant open-back styling, opaque side drape, and gold thread waist harness",
      "body": "adult feminine lean build matching the original design",
      "aura": "one single clean crimson thread line extending from the spool in a simple arc behind her shoulders",
      "extra": "Ariadne — Labyrinth Thread Princess, adult female Greco-Roman fantasy reinterpretation",
      "identityLock": [
        "Long crimson hair braided with gold thread",
        "a red-gold woven Greek silk gown with elegant open-back styling, opaque side drape, and gold thread waist harness",
        "amber-red eyes; clever challenging smile",
        "one single clean crimson thread line extending from the spool in a simple arc behind her shoulders",
        "Ariadne — Labyrinth Thread Princess, adult female Greco-Roman fantasy reinterpretation"
      ]
    },
    "personalItem": {
      "name": "a physically solid crimson thread spool with one clean readable thread line",
      "itemRole": "tool_item",
      "itemFamily": "other",
      "description": "a physically solid crimson thread spool with one clean readable thread line",
      "withItemPrompt": "holding or presenting a physically solid crimson thread spool with one clean readable thread line extending in a simple arc, clearly separated from fingers, hair, face, and body silhouette",
      "noItemRemove": [
        "holding",
        "using",
        "carrying",
        "presenting"
      ],
      "itemGuard": "Keep the thread spool readable; use only one clean thread arc and do not let thread wrap around fingers, hair, face, waist, or body outline."
    },
    "promptProfile": {
      "preferredFraming": [
        "bust",
        "waist_up",
        "thigh_up"
      ],
      "preferredPoseCategories": [
        "mystic",
        "ceremonial",
        "soft_motion"
      ],
      "avoidPoseCategories": [],
      "figurePreset": "standard"
    },
    "title": "Labyrinth Thread Princess",
    "displayName": "Ariadne — Labyrinth Thread Princess",
    "mythology": "Greco-Roman",
    "subgroup": "Fate / Mystery Branch",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "factionId": 22,
    "factionName": "The Elysian Apex"
  },
  {
    "id": "2212",
    "name": "Selene",
    "gender": "female",
    "faction": "วิหารเทพีอีลิเซียม",
    "tags": [
      "aura_effect",
      "daily_item",
      "lifestyle",
      "goddess",
      "female",
      "other",
      "daily"
    ],
    "presentationMode": "lifestyle",
    "characterCore": {
      "face": "sleepy pale-blue eyes; dreamy relaxed expression",
      "hair": "Long silver-blue hair in soft bedhead waves",
      "outfit": "a silver-blue chiffon moonlit moonlit chiffon goddess dress with opaque satin lining with opaque satin lining, crescent jewelry, and elegant sleepy non-explicit glamour",
      "body": "adult feminine build matching the original design",
      "aura": "a soft moon-dream halo behind the crescent lantern, subtle and separated from her hair and hands",
      "extra": "Selene — Silver Slumber, adult female Greco-Roman fantasy reinterpretation",
      "identityLock": [
        "Long silver-blue hair in soft bedhead waves",
        "a silver-blue chiffon moonlit moonlit chiffon goddess dress with opaque satin lining with opaque satin lining, crescent jewelry, and elegant sleepy non-explicit glamour",
        "sleepy pale-blue eyes; dreamy relaxed expression",
        "a soft moon-dream halo behind the crescent lantern, subtle and separated from her hair and hands",
        "Selene — Silver Slumber, adult female Greco-Roman fantasy reinterpretation"
      ]
    },
    "personalItem": {
      "name": "a physically solid silver crescent moon lantern with visible handle, crescent frame, and glass body",
      "itemRole": "daily_item",
      "itemFamily": "other",
      "description": "a physically solid silver crescent moon lantern with visible handle, crescent frame, and glass body",
      "withItemPrompt": "holding a physically solid silver crescent moon lantern with visible handle, crescent frame, and glass body near shoulder or waist level, not covering the face, chest silhouette, waist, or body outline",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "lantern"
      ],
      "itemGuard": "Keep the daily item small and readable without covering the face or body silhouette."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "lifestyle",
        "sitting",
        "portrait"
      ],
      "avoidPoseCategories": [
        "combat_attack",
        "ranged_weapon"
      ],
      "figurePreset": "glamour_voluptuous"
    },
    "title": "Silver Slumber",
    "displayName": "Selene — Silver Slumber",
    "mythology": "Greco-Roman",
    "subgroup": "Fate / Mystery Branch",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "factionId": 22,
    "factionName": "The Elysian Apex"
  },
  {
    "id": "2213",
    "name": "Eris",
    "gender": "female",
    "faction": "วิหารเทพีอีลิเซียม",
    "tags": [
      "aura_effect",
      "combat",
      "goddess",
      "female",
      "weapon",
      "other",
      "dagger"
    ],
    "presentationMode": "combat",
    "characterCore": {
      "face": "bright amber eyes; wicked teasing grin",
      "hair": "Messy gold-black hair",
      "outfit": "a short black-gold torn couture chiton with artistic asymmetry, opaque coverage, thigh emphasis, and chaotic gold ribbons",
      "body": "adult feminine petite build matching the original design",
      "aura": "a small cracked golden apple sigil behind her shoulders, with no scattered shard clutter",
      "extra": "Eris — Golden Discord, adult female Greco-Roman fantasy reinterpretation",
      "identityLock": [
        "Messy gold-black hair",
        "a short black-gold torn couture chiton with artistic asymmetry, opaque coverage, thigh emphasis, and chaotic gold ribbons",
        "bright amber eyes; wicked teasing grin",
        "a small cracked golden apple sigil behind her shoulders, with no scattered shard clutter",
        "Eris — Golden Discord, adult female Greco-Roman fantasy reinterpretation"
      ]
    },
    "personalItem": {
      "name": "a physically rigid short golden dagger with an apple-shaped pommel and cracked gold hilt",
      "itemRole": "weapon",
      "itemFamily": "dagger",
      "description": "a physically rigid short golden dagger with an apple-shaped pommel and cracked gold hilt",
      "withItemPrompt": "holding a physically rigid short golden dagger with an apple-shaped pommel and cracked gold hilt positioned beside the body or along the side of the frame, not covering the face, chest silhouette, waist, or body outline",
      "noItemRemove": [
        "holding",
        "wielding",
        "gripping",
        "carrying",
        "brandishing",
        "dagger"
      ],
      "itemGuard": "Keep the dagger readable as a solid weapon; the apple motif belongs on the pommel and hilt, not as floating broken fragments."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_combat",
        "combat",
        "standing"
      ],
      "avoidPoseCategories": [
        "ranged_weapon",
        "instrument",
        "book_reading"
      ],
      "figurePreset": "standard"
    },
    "title": "Golden Discord",
    "displayName": "Eris — Golden Discord",
    "mythology": "Greco-Roman",
    "subgroup": "Fate / Mystery Branch",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "factionId": 22,
    "factionName": "The Elysian Apex"
  },
  {
    "id": "2214",
    "name": "Nike",
    "gender": "female",
    "faction": "วิหารเทพีอีลิเซียม",
    "tags": [
      "creature_traits",
      "aura_effect",
      "accessory_item",
      "ceremonial",
      "goddess",
      "female",
      "other"
    ],
    "presentationMode": "ceremonial",
    "characterCore": {
      "face": "sky-gold eyes; confident bright smile",
      "hair": "Golden-white hair swept by heavenly wind",
      "outfit": "a bright white draped gown with deep heroic neckline but opaque strategic coverage, gold belt, winged sandals, and divine laurel jewelry",
      "body": "adult feminine lean build matching the original design",
      "aura": "clean white-gold victory wings behind her shoulders, simplified and not covering the laurel standard",
      "extra": "Nike — Winged Victory, adult female Greco-Roman fantasy reinterpretation",
      "identityLock": [
        "Golden-white hair swept by heavenly wind",
        "a bright white draped gown with deep heroic neckline but opaque strategic coverage, gold belt, winged sandals, and divine laurel jewelry",
        "sky-gold eyes; confident bright smile",
        "clean white-gold victory wings behind her shoulders, simplified and not covering the laurel standard",
        "Nike — Winged Victory, adult female Greco-Roman fantasy reinterpretation"
      ]
    },
    "personalItem": {
      "name": "a physically solid golden winged laurel standard with readable wreath shape and short handle",
      "itemRole": "accessory_item",
      "itemFamily": "accessory",
      "description": "a physically solid golden winged laurel standard with readable wreath shape and short handle",
      "withItemPrompt": "holding or presenting a physically solid golden winged laurel standard with readable wreath shape and short handle near shoulder or waist level, not covering the face, chest silhouette, waist, or body outline",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "laurel",
        "standard"
      ],
      "itemGuard": "Keep the victory laurel standard readable and separate from wings, face, waist, and body outline."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "mystic",
        "ceremonial",
        "soft_motion"
      ],
      "avoidPoseCategories": [],
      "figurePreset": "standard"
    },
    "title": "Winged Victory",
    "displayName": "Nike — Winged Victory",
    "mythology": "Greco-Roman",
    "subgroup": "Fate / Mystery Branch",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "factionId": 22,
    "factionName": "The Elysian Apex"
  },
  {
    "id": "2215",
    "name": "Tyche",
    "gender": "female",
    "faction": "วิหารเทพีอีลิเซียม",
    "tags": [
      "floating_props",
      "prop",
      "lifestyle",
      "goddess",
      "female",
      "other"
    ],
    "presentationMode": "lifestyle",
    "characterCore": {
      "face": "green-gold lucky eyes; charming luxurious smile",
      "hair": "Champagne-blonde curls",
      "outfit": "a champagne-gold off-shoulder gown with coin ornaments grouped neatly, opaque corset bodice, gold anklets, and rich divine glamour",
      "body": "adult feminine build matching the original design",
      "aura": "only three large readable gold coins floating in a simple arc behind the cornucopia",
      "extra": "Tyche — Lady of Fortune, adult female Greco-Roman fantasy reinterpretation",
      "identityLock": [
        "Champagne-blonde curls",
        "a champagne-gold off-shoulder gown with coin ornaments grouped neatly, opaque corset bodice, gold anklets, and rich divine glamour",
        "green-gold lucky eyes; charming luxurious smile",
        "only three large readable gold coins floating in a simple arc behind the cornucopia",
        "Tyche — Lady of Fortune, adult female Greco-Roman fantasy reinterpretation"
      ]
    },
    "personalItem": {
      "name": "a physically solid golden cornucopia with readable horn shape and decorative rim",
      "itemRole": "prop",
      "itemFamily": "other",
      "description": "a physically solid golden cornucopia with readable horn shape and decorative rim",
      "withItemPrompt": "holding or presenting a physically solid golden cornucopia near waist level or beside the body, with only three large readable gold coins floating in a simple arc behind it, not covering the face, hands, chest silhouette, waist, or body outline",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "cornucopia"
      ],
      "itemGuard": "Keep the item readable and separate from the face, waist, and body outline."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "lifestyle",
        "sitting",
        "portrait"
      ],
      "avoidPoseCategories": [],
      "figurePreset": "glamour_voluptuous"
    },
    "title": "Lady of Fortune",
    "displayName": "Tyche — Lady of Fortune",
    "mythology": "Greco-Roman",
    "subgroup": "Fate / Mystery Branch",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "factionId": 22,
    "factionName": "The Elysian Apex"
  },
  {
    "id": "2216",
    "name": "Circe",
    "gender": "female",
    "faction": "วิหารเทพีอีลิเซียม",
    "tags": [
      "aura_effect",
      "ritual_item",
      "mystic",
      "witch",
      "female",
      "tool",
      "ritual"
    ],
    "presentationMode": "mystic",
    "characterCore": {
      "face": "alluring intelligent expression; glowing amethyst eyes",
      "hair": "Long deep-violet hair with gold island flowers",
      "outfit": "a dark purple and gold fitted goddess gown with opaque bodice, high slit, subtle glowing magical tattoo motifs, and gold waist chain",
      "body": "adult feminine build matching the original design",
      "aura": "one clean golden transformation sigil behind the crystal potion vial, with restrained violet charm mist and no animal crowd",
      "extra": "Circe — Ensnaring Witch of Aeaea, adult female Greco-Roman fantasy reinterpretation",
      "identityLock": [
        "Long deep-violet hair with gold island flowers",
        "a dark purple and gold fitted goddess gown with opaque bodice, high slit, subtle glowing magical tattoo motifs, and gold waist chain",
        "alluring intelligent expression; glowing amethyst eyes",
        "one clean golden transformation sigil behind the crystal potion vial, with restrained violet charm mist and no animal crowd",
        "Circe — Ensnaring Witch of Aeaea, adult female Greco-Roman fantasy reinterpretation"
      ]
    },
    "personalItem": {
      "name": "a physically solid crystal vial with glowing purple potion clearly contained inside",
      "itemRole": "ritual_item",
      "itemFamily": "tool",
      "description": "a physically solid crystal vial with glowing purple potion clearly contained inside",
      "withItemPrompt": "holding or presenting a physically solid crystal vial with glowing purple potion clearly contained inside near waist level or beside the body, with one clean golden transformation sigil behind the vial, clearly separated from aura effects and not covering the face or body silhouette",
      "noItemRemove": [
        "holding",
        "presenting",
        "carrying",
        "vial"
      ],
      "itemGuard": "Keep the ritual item readable and separate from aura effects, face, and body outline."
    },
    "promptProfile": {
      "preferredFraming": [
        "bust",
        "waist_up",
        "thigh_up"
      ],
      "preferredPoseCategories": [
        "mystic",
        "ceremonial",
        "soft_motion"
      ],
      "avoidPoseCategories": [],
      "figurePreset": "glamour_voluptuous"
    },
    "title": "Ensnaring Witch of Aeaea",
    "displayName": "Circe — Ensnaring Witch of Aeaea",
    "mythology": "Greco-Roman",
    "subgroup": "Fate / Mystery Branch",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "factionId": 22,
    "factionName": "The Elysian Apex"
  }
];



;