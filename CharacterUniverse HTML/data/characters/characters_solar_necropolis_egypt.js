// Solar Necropolis of Egypt — Core 50
// Faction 24 / IDs 2402–2451
// Data-ready character module generated for Character Prompt Studio V11.1.4+.
// All characters are adult female fantasy reinterpretations of Egyptian mythological figures.
// Main items use readable physical objects and V11.1.3/V11.1.4 itemRole + pose compatibility rules.

const solarNecropolisEgyptFaction = {
  "id": 24,
  "name": "Solar Necropolis of Egypt",
  "thaiName": "สุริยนครแห่งสุสานเทพอียิปต์",
  "icon": "𓂀",
  "universe": "Arcadia",
  "mythology": "Egyptian",
  "style": "Dark Luxury Egyptian Divine Court / Solar Gold / Black Marble Necropolis / Desert Night Glamour",
  "defaultGender": "female",
  "designRule": "adult female fantasy reinterpretation using original mythological names and readable physical main items"
};

const solarNecropolisEgyptCharacters = [
  {
  "id": "2402",
  "name": "Ra",
  "title": "Solar Empress of the First Dawn",
  "displayName": "Ra — Solar Empress of the First Dawn",
  "gender": "female",
  "factionId": 24,
  "factionName": "Solar Necropolis of Egypt",
  "faction": "Solar Necropolis of Egypt",
  "mythology": "Egyptian",
  "subgroup": "Solar High Court",
  "sourceType": "mythological_deity",
  "conversionType": "adult_female_fantasy_reinterpretation",
  "powerDomain": "sun / royal authority / dawn",
  "tags": [
    "female",
    "adult",
    "egyptian_mythology",
    "solar_necropolis",
    "faction_24",
    "accessory_item",
    "fan",
    "regal",
    "glamour",
    "accessory",
    "solar_court"
  ],
  "presentationMode": "regal",
  "combatAttackAllowed": false,
  "characterCore": {
    "face": "amber-gold eyes; calm imperial gaze",
    "hair": "long radiant gold hair with black undertones",
    "outfit": "white-and-gold Egyptian haute couture queen dress with broad gold collar and clean sun-disk crown",
    "body": "voluptuous elegant adult feminine goddess build",
    "aura": "soft solar halo behind shoulders",
    "extra": "Ra - Solar Empress of the First Dawn; adult female Egyptian divine glamour; dark luxury SSR card.",
    "identityLock": [
      "amber-gold eyes; calm imperial gaze",
      "long radiant gold hair with black undertones",
      "white-and-gold Egyptian haute couture queen dress with broad gold collar and clean sun-disk crown",
      "voluptuous elegant adult feminine goddess build"
    ]
  },
  "personalItem": {
    "name": "gold sun disk fan",
    "itemRole": "accessory_item",
    "itemFamily": "fan",
    "description": "gold sun disk fan",
    "withItemPrompt": "displaying gold sun disk fan near shoulder, waist, or beside the body, clearly readable, not covering face, hands, waist, or silhouette",
    "noItemRemove": [
      "carrying",
      "disk",
      "gripping",
      "holding",
      "playing",
      "presenting",
      "reading",
      "using",
      "wielding",
      "writing"
    ],
    "itemGuard": "Keep gold sun disk fan readable as a ceremonial solar accessory, separated from face, hands, waist, and body silhouette."
  },
  "promptProfile": {
    "preferredFraming": [
      "thigh_up",
      "waist_up",
      "full_body"
    ],
    "preferredPoseCategories": [
      "glamour_showcase",
      "portrait",
      "standing",
      "lifestyle",
      "ceremonial"
    ],
    "avoidPoseCategories": [
      "active_attack",
      "melee_attack",
      "weapon_swing",
      "slash",
      "thrust",
      "ranged_attack",
      "aiming",
      "weapon_action"
    ],
    "compatiblePresentationModes": [
      "regal",
      "portrait",
      "standing"
    ],
    "figurePreset": "glamour_voluptuous",
    "detailDensity": "clean_grouped_details",
    "complexityLock": true
  }
},
  {
    "id": "2403",
    "name": "Horus",
    "title": "Falcon Crown Vanguard",
    "displayName": "Horus — Falcon Crown Vanguard",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Solar High Court",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "falcon kingship / sky / protection",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "weapon",
      "spear",
      "combat",
      "weapon_action_ready",
      "solar_court"
    ],
    "presentationMode": "combat",
    "combatAttackAllowed": true,
    "characterCore": {
      "face": "sharp falcon-like golden eyes; proud warrior expression",
      "hair": "long black hair with gold feather ornaments",
      "outfit": "white-and-gold falcon royal battle dress with readable shield straps",
      "body": "athletic curvy adult feminine warrior build",
      "aura": "clean sky-gold light behind the shield, clean and separated from face, hands, body, and main item",
      "extra": "Horus — Falcon Crown Vanguard; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "sharp falcon-like golden eyes; proud warrior expression",
        "long black hair with gold feather ornaments",
        "white-and-gold falcon royal battle dress with readable shield straps",
        "athletic curvy adult feminine warrior build",
        "gold spear and falcon shield"
      ]
    },
    "personalItem": {
      "name": "gold spear and falcon shield",
      "itemRole": "weapon",
      "itemFamily": "spear",
      "description": "gold spear and falcon shield",
      "withItemPrompt": "holding or wielding gold spear and falcon shield as a physically solid readable weapon, with clear handle and silhouette, not covering the face, chest silhouette, waist, or body outline",
      "noItemRemove": [
        "carrying",
        "falcon",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "shield",
        "spear",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep gold spear and falcon shield physically solid and readable as a weapon; do not let it merge with aura, hair, hands, or body. Weapon character; compatible with spear thrust and shield guard poses."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "weapon_action",
        "spear_thrust",
        "combat",
        "battle_presence",
        "glamour_combat"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading",
        "teacup_sip"
      ],
      "compatiblePresentationModes": [
        "combat",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2404",
    "name": "Isis",
    "title": "Winged Mother of Magic",
    "displayName": "Isis — Winged Mother of Magic",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Solar High Court",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "motherhood / magic / throne protection",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "ritual_item",
      "staff",
      "ceremonial",
      "ritual",
      "solar_court"
    ],
    "presentationMode": "ceremonial",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "deep blue eyes; gentle but commanding expression",
      "hair": "long thick black hair",
      "outfit": "white, lapis, and gold wing-motif ceremonial gown with opaque flowing layers",
      "body": "graceful voluptuous adult feminine goddess build",
      "aura": "soft wing-shaped light behind her back; stays behind or beside the body and does not cover face, hands, or silhouette",
      "extra": "Isis — Winged Mother of Magic; adult female fantasy reinterpretation with Egyptian visual identity; single-character SSR-style card; dark luxury aesthetic.",
      "identityLock": [
        "deep blue eyes; gentle but commanding expression",
        "long thick black hair",
        "white, lapis, and gold wing-motif ceremonial gown with opaque flowing layers",
        "graceful voluptuous adult feminine goddess build"
      ]
    },
    "personalItem": {
      "name": "gold ankh staff",
      "itemRole": "ritual_item",
      "itemFamily": "staff",
      "description": "gold ankh staff",
      "withItemPrompt": "holding, raising, or presenting gold ankh staff as a ritual focus, not used for melee striking, clearly separated from aura effects, face, hands, and body silhouette",
      "noItemRemove": [
        "ankh",
        "carrying",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "staff",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep gold ankh staff readable as a non-weapon ritual_item; do not let it become a blade, shield, or attack effect. Ritual focus only; ankh staff must not be used for striking."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "ritual",
        "ceremonial",
        "present_item",
        "battle_presence",
        "mystic"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "ceremonial",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2405",
    "name": "Osiris",
    "title": "Green Throne Queen of Rebirth",
    "displayName": "Osiris — Green Throne Queen of Rebirth",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Solar High Court",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "rebirth / afterlife / vegetation",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "ritual_item",
      "staff",
      "ceremonial",
      "ritual",
      "solar_court"
    ],
    "presentationMode": "ceremonial",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "emerald eyes; serene resurrection queen expression",
      "hair": "long black hair with emerald ornaments",
      "outfit": "green-black and white royal burial gown with gold collar",
      "body": "mature elegant adult feminine queen build",
      "aura": "subtle emerald rebirth glow behind her throne silhouette, clean and separated from face, hands, body, and main item",
      "extra": "Osiris — Green Throne Queen of Rebirth; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "emerald eyes; serene resurrection queen expression",
        "long black hair with emerald ornaments",
        "green-black and white royal burial gown with gold collar",
        "mature elegant adult feminine queen build",
        "crook and flail held ceremonially"
      ]
    },
    "personalItem": {
      "name": "crook and flail held ceremonially",
      "itemRole": "ritual_item",
      "itemFamily": "staff",
      "description": "crook and flail held ceremonially",
      "withItemPrompt": "holding, raising, or presenting crook and flail held ceremonially as a ritual focus, not used for melee striking, clearly separated from aura effects, face, hands, and body silhouette",
      "noItemRemove": [
        "carrying",
        "ceremonially",
        "crook",
        "flail",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep crook and flail held ceremonially readable as a non-weapon ritual_item; do not let it become a blade, shield, or attack effect. Crook and flail are ceremonial symbols, not active weapons."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "ritual",
        "ceremonial",
        "present_item",
        "battle_presence",
        "mystic"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "ceremonial",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2406",
    "name": "Nephthys",
    "title": "Mourning Wing of the Tomb",
    "displayName": "Nephthys — Mourning Wing of the Tomb",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Solar High Court",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "mourning / tomb protection / night rites",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "daily_item",
      "lantern",
      "lifestyle",
      "daily_prop",
      "solar_court"
    ],
    "presentationMode": "lifestyle",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "silver-gray eyes; quiet mourning gaze",
      "hair": "long black-violet hair under a dark veil",
      "outfit": "black-and-gold mourning priestess dress with winged shoulder veil",
      "body": "slender graceful adult feminine build",
      "aura": "low blue tomb light behind her, clean and separated from face, hands, body, and main item",
      "extra": "Nephthys — Mourning Wing of the Tomb; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "silver-gray eyes; quiet mourning gaze",
        "long black-violet hair under a dark veil",
        "black-and-gold mourning priestess dress with winged shoulder veil",
        "slender graceful adult feminine build",
        "bronze oil lamp"
      ]
    },
    "personalItem": {
      "name": "bronze oil lamp",
      "itemRole": "daily_item",
      "itemFamily": "lantern",
      "description": "bronze oil lamp",
      "withItemPrompt": "holding, carrying, offering, or displaying bronze oil lamp naturally, not a weapon, not used for striking, kept readable and clearly separated from face, hands, body, and effects",
      "noItemRemove": [
        "carrying",
        "gripping",
        "holding",
        "lamp",
        "playing",
        "presenting",
        "reading",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep bronze oil lamp readable as a non-weapon daily_item; do not let it become a blade, shield, or attack effect. Oil lamp is a carried light source; do not weaponize it."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "lifestyle",
        "serve_carry",
        "present_item",
        "standing",
        "portrait"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "lifestyle",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2407",
    "name": "Hathor",
    "title": "Golden Sistrum Muse",
    "displayName": "Hathor — Golden Sistrum Muse",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Solar High Court",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "music / love / joy / dance",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "instrument_item",
      "instrument",
      "performer",
      "solar_court"
    ],
    "presentationMode": "performer",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "warm honey eyes; radiant singer smile",
      "hair": "long honey-gold wavy hair",
      "outfit": "turquoise and gold dancer-priestess gown with elegant opaque coverage",
      "body": "glamorous curvy adult feminine performer build",
      "aura": "soft gold music-note ring behind her, clean and separated from face, hands, body, and main item",
      "extra": "Hathor — Golden Sistrum Muse; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "warm honey eyes; radiant singer smile",
        "long honey-gold wavy hair",
        "turquoise and gold dancer-priestess gown with elegant opaque coverage",
        "glamorous curvy adult feminine performer build",
        "gold sistrum"
      ]
    },
    "personalItem": {
      "name": "gold sistrum",
      "itemRole": "instrument_item",
      "itemFamily": "instrument",
      "description": "gold sistrum",
      "withItemPrompt": "holding or playing gold sistrum naturally as a musical or ceremonial signal instrument, not a weapon, not swung, not used for striking, clearly separated from face, hands, body, and effects",
      "noItemRemove": [
        "carrying",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "sistrum",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep gold sistrum readable as a non-weapon instrument_item; do not let it become a blade, shield, or attack effect. Sistrum is an instrument; must be played or presented, never swung as a weapon."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "instrument",
        "performer",
        "ceremonial",
        "battle_presence",
        "portrait"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "performer",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2408",
    "name": "Sekhmet",
    "title": "Lioness of Burning War",
    "displayName": "Sekhmet — Lioness of Burning War",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Solar High Court",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "war / plague / solar fire",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "weapon",
      "sword",
      "combat",
      "weapon_action_ready",
      "solar_court"
    ],
    "presentationMode": "combat",
    "combatAttackAllowed": true,
    "characterCore": {
      "face": "burning amber eyes; fierce lioness glare",
      "hair": "wild copper-gold hair",
      "outfit": "crimson and bronze war queen armor-dress with lioness motifs",
      "body": "powerful voluptuous adult feminine warrior build",
      "aura": "contained red solar flame behind the weapon, clean and separated from face, hands, body, and main item",
      "extra": "Sekhmet — Lioness of Burning War; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "burning amber eyes; fierce lioness glare",
        "wild copper-gold hair",
        "crimson and bronze war queen armor-dress with lioness motifs",
        "powerful voluptuous adult feminine warrior build",
        "bronze khopesh"
      ]
    },
    "personalItem": {
      "name": "bronze khopesh",
      "itemRole": "weapon",
      "itemFamily": "sword",
      "description": "bronze khopesh",
      "withItemPrompt": "holding or wielding bronze khopesh as a physically solid readable weapon, with clear handle and silhouette, not covering the face, chest silhouette, waist, or body outline",
      "noItemRemove": [
        "carrying",
        "gripping",
        "holding",
        "khopesh",
        "playing",
        "presenting",
        "reading",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep bronze khopesh physically solid and readable as a weapon; do not let it merge with aura, hair, hands, or body. Weapon character; khopesh can use slash poses."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "weapon_action",
        "combat",
        "battle_presence",
        "glamour_combat"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading",
        "teacup_sip"
      ],
      "compatiblePresentationModes": [
        "combat",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2409",
    "name": "Bastet",
    "title": "Perfumed Cat Queen",
    "displayName": "Bastet — Perfumed Cat Queen",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Solar High Court",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "cats / perfume / protection / pleasure",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "accessory_item",
      "mirror",
      "glamour",
      "accessory",
      "solar_court"
    ],
    "presentationMode": "glamour",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "green catlike eyes; playful luxurious smile",
      "hair": "sleek glossy black hair",
      "outfit": "sleek black-and-gold cat queen dress with jeweled collar",
      "body": "voluptuous graceful adult feminine glamour build",
      "aura": "subtle perfume sparkle behind her shoulders, clean and separated from face, hands, body, and main item",
      "extra": "Bastet — Perfumed Cat Queen; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "green catlike eyes; playful luxurious smile",
        "sleek glossy black hair",
        "sleek black-and-gold cat queen dress with jeweled collar",
        "voluptuous graceful adult feminine glamour build",
        "gold hand mirror"
      ]
    },
    "personalItem": {
      "name": "gold hand mirror",
      "itemRole": "accessory_item",
      "itemFamily": "mirror",
      "description": "gold hand mirror",
      "withItemPrompt": "wearing, holding, or displaying gold hand mirror near shoulder, waist, or beside the body, not a weapon, not used for striking, not blocking the face or body silhouette",
      "noItemRemove": [
        "carrying",
        "gripping",
        "hand",
        "holding",
        "mirror",
        "playing",
        "presenting",
        "reading",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep gold hand mirror readable as a non-weapon accessory_item; do not let it become a blade, shield, or attack effect. Mirror is accessory; use beauty/glamour poses only."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "portrait",
        "standing",
        "lifestyle",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "glamour",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2410",
    "name": "Anubis",
    "title": "Jackal Judge of Souls",
    "displayName": "Anubis — Jackal Judge of Souls",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Solar High Court",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "soul judgment / embalming / tomb gates",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "ritual_item",
      "scale",
      "ceremonial",
      "ritual",
      "solar_court"
    ],
    "presentationMode": "ceremonial",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "cold gold eyes; solemn judge expression",
      "hair": "long black hair with jackal-ear headdress silhouette",
      "outfit": "black-and-gold tomb judge gown with clean geometric collar",
      "body": "tall elegant adult feminine judge build",
      "aura": "soft black-gold judgment halo behind the scale, clean and separated from face, hands, body, and main item",
      "extra": "Anubis — Jackal Judge of Souls; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "cold gold eyes; solemn judge expression",
        "long black hair with jackal-ear headdress silhouette",
        "black-and-gold tomb judge gown with clean geometric collar",
        "tall elegant adult feminine judge build",
        "black-gold weighing scale"
      ]
    },
    "personalItem": {
      "name": "black-gold weighing scale",
      "itemRole": "ritual_item",
      "itemFamily": "scale",
      "description": "black-gold weighing scale",
      "withItemPrompt": "holding, raising, or presenting black-gold weighing scale as a ritual focus, not used for melee striking, clearly separated from aura effects, face, hands, and body silhouette",
      "noItemRemove": [
        "carrying",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "scale",
        "using",
        "weighing",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep black-gold weighing scale readable as a non-weapon ritual_item; do not let it become a blade, shield, or attack effect. Scale is ritual judgment object; do not use as weapon or shield."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "ritual",
        "ceremonial",
        "present_item",
        "battle_presence",
        "mystic"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "ceremonial",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2411",
    "name": "Thoth",
    "title": "Moon Scribe of Sacred Words",
    "displayName": "Thoth — Moon Scribe of Sacred Words",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Solar High Court",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "writing / wisdom / moon law",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "document_item",
      "scroll",
      "scholarly",
      "read_write",
      "solar_court"
    ],
    "presentationMode": "scholarly",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "pale blue eyes; intelligent composed gaze",
      "hair": "silver-blue long hair",
      "outfit": "white, blue, and gold scholar-priestess robe with clean belts",
      "body": "elegant adult feminine scholar build",
      "aura": "thin moon glyphs behind the body; stays behind or beside the body and does not cover face, hands, or silhouette",
      "extra": "Thoth — Moon Scribe of Sacred Words; adult female fantasy reinterpretation with Egyptian visual identity; single-character SSR-style card; dark luxury aesthetic.",
      "identityLock": [
        "pale blue eyes; intelligent composed gaze",
        "silver-blue long hair",
        "white, blue, and gold scholar-priestess robe with clean belts",
        "elegant adult feminine scholar build"
      ]
    },
    "personalItem": {
      "name": "papyrus scroll and reed pen",
      "itemRole": "document_item",
      "itemFamily": "scroll",
      "description": "papyrus scroll and reed pen",
      "withItemPrompt": "holding, reading, writing on, or presenting papyrus scroll and reed pen naturally, not a weapon, not used for striking, kept readable and clearly separated from face, hands, body, and effects",
      "noItemRemove": [
        "carrying",
        "gripping",
        "holding",
        "papyrus",
        "playing",
        "presenting",
        "reading",
        "reed",
        "scroll",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep papyrus scroll and reed pen readable as a non-weapon document_item; do not let it become a blade, shield, or attack effect. Document item; use reading/writing poses."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "document_item",
        "scholarly",
        "book_reading",
        "scroll_writing",
        "portrait"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "scholarly",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2412",
    "name": "Ma’at",
    "title": "Feather of Cosmic Law",
    "displayName": "Ma’at — Feather of Cosmic Law",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Solar High Court",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "truth / cosmic order / justice",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "ritual_item",
      "scale",
      "ceremonial",
      "ritual",
      "solar_court"
    ],
    "presentationMode": "ceremonial",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "clear gold eyes; calm impartial expression",
      "hair": "white-gold straight hair",
      "outfit": "white-and-gold judicial goddess dress with feather ornaments",
      "body": "balanced graceful adult feminine build",
      "aura": "single feather-shaped light behind her, clean and separated from face, hands, body, and main item",
      "extra": "Ma’at — Feather of Cosmic Law; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "clear gold eyes; calm impartial expression",
        "white-gold straight hair",
        "white-and-gold judicial goddess dress with feather ornaments",
        "balanced graceful adult feminine build",
        "small gold feather scale"
      ]
    },
    "personalItem": {
      "name": "small gold feather scale",
      "itemRole": "ritual_item",
      "itemFamily": "scale",
      "description": "small gold feather scale",
      "withItemPrompt": "holding, raising, or presenting small gold feather scale as a ritual focus, not used for melee striking, clearly separated from aura effects, face, hands, and body silhouette",
      "noItemRemove": [
        "carrying",
        "feather",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "scale",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep small gold feather scale readable as a non-weapon ritual_item; do not let it become a blade, shield, or attack effect. Scale must be small, solid, and readable; no weapon use."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "ritual",
        "ceremonial",
        "present_item",
        "battle_presence",
        "mystic"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "ceremonial",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2413",
    "name": "Set",
    "title": "Red Storm Usurper",
    "displayName": "Set — Red Storm Usurper",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "War / Guardian / Desert Dominion",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "desert storm / chaos / rebellion",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "weapon",
      "spear",
      "combat",
      "weapon_action_ready",
      "guardian",
      "war"
    ],
    "presentationMode": "combat",
    "combatAttackAllowed": true,
    "characterCore": {
      "face": "copper-gold eyes; dangerous confident grin",
      "hair": "crimson-black long hair",
      "outfit": "red-black desert war gown with gold armor accents",
      "body": "athletic curvy adult feminine war queen build",
      "aura": "dust-red storm arc behind her spear, clean and separated from face, hands, body, and main item",
      "extra": "Set — Red Storm Usurper; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "copper-gold eyes; dangerous confident grin",
        "crimson-black long hair",
        "red-black desert war gown with gold armor accents",
        "athletic curvy adult feminine war queen build",
        "red desert spear"
      ]
    },
    "personalItem": {
      "name": "red desert spear",
      "itemRole": "weapon",
      "itemFamily": "spear",
      "description": "red desert spear",
      "withItemPrompt": "holding or wielding red desert spear as a physically solid readable weapon, with clear handle and silhouette, not covering the face, chest silhouette, waist, or body outline",
      "noItemRemove": [
        "carrying",
        "desert",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "spear",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep red desert spear physically solid and readable as a weapon; do not let it merge with aura, hair, hands, or body. Weapon character; spear thrust compatible."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "weapon_action",
        "spear_thrust",
        "combat",
        "battle_presence",
        "glamour_combat"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading",
        "teacup_sip"
      ],
      "compatiblePresentationModes": [
        "combat",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2414",
    "name": "Neith",
    "title": "Weaver of War and Arrows",
    "displayName": "Neith — Weaver of War and Arrows",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "War / Guardian / Desert Dominion",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "war / weaving / hunting / wisdom",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "weapon",
      "bow",
      "combat",
      "weapon_action_ready",
      "guardian",
      "war"
    ],
    "presentationMode": "combat",
    "combatAttackAllowed": true,
    "characterCore": {
      "face": "dark green eyes; composed hunter stare",
      "hair": "long black braided hair",
      "outfit": "sand-gold archer goddess dress with woven belt",
      "body": "athletic elegant adult feminine archer build",
      "aura": "thin woven gold threads behind the bow, clean and separated from face, hands, body, and main item",
      "extra": "Neith — Weaver of War and Arrows; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "dark green eyes; composed hunter stare",
        "long black braided hair",
        "sand-gold archer goddess dress with woven belt",
        "athletic elegant adult feminine archer build",
        "gold war bow"
      ]
    },
    "personalItem": {
      "name": "gold war bow",
      "itemRole": "weapon",
      "itemFamily": "bow",
      "description": "gold war bow",
      "withItemPrompt": "holding or wielding gold war bow as a physically solid readable weapon, with clear handle and silhouette, not covering the face, chest silhouette, waist, or body outline",
      "noItemRemove": [
        "carrying",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep gold war bow physically solid and readable as a weapon; do not let it merge with aura, hair, hands, or body. Weapon character; bow full draw compatible."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "weapon_action",
        "ranged_attack",
        "combat",
        "battle_presence",
        "glamour_combat"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading",
        "teacup_sip"
      ],
      "compatiblePresentationModes": [
        "combat",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2415",
    "name": "Sobek",
    "title": "Crocodile River Warden",
    "displayName": "Sobek — Crocodile River Warden",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "War / Guardian / Desert Dominion",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "river power / crocodile strength / military guard",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "weapon",
      "spear",
      "combat",
      "weapon_action_ready",
      "guardian",
      "war"
    ],
    "presentationMode": "combat",
    "combatAttackAllowed": true,
    "characterCore": {
      "face": "jade eyes; stern river guardian expression",
      "hair": "dark green-black braided hair",
      "outfit": "green-gold scale-pattern river armor dress",
      "body": "strong curvy adult feminine guardian build",
      "aura": "clean Nile-blue water arc behind her, clean and separated from face, hands, body, and main item",
      "extra": "Sobek — Crocodile River Warden; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "jade eyes; stern river guardian expression",
        "dark green-black braided hair",
        "green-gold scale-pattern river armor dress",
        "strong curvy adult feminine guardian build",
        "jade-tipped spear"
      ]
    },
    "personalItem": {
      "name": "jade-tipped spear",
      "itemRole": "weapon",
      "itemFamily": "spear",
      "description": "jade-tipped spear",
      "withItemPrompt": "holding or wielding jade-tipped spear as a physically solid readable weapon, with clear handle and silhouette, not covering the face, chest silhouette, waist, or body outline",
      "noItemRemove": [
        "carrying",
        "gripping",
        "holding",
        "jade",
        "playing",
        "presenting",
        "reading",
        "spear",
        "tipped",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep jade-tipped spear physically solid and readable as a weapon; do not let it merge with aura, hair, hands, or body. Weapon character; spear thrust compatible."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "weapon_action",
        "spear_thrust",
        "combat",
        "battle_presence",
        "glamour_combat"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading",
        "teacup_sip"
      ],
      "compatiblePresentationModes": [
        "combat",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2416",
    "name": "Montu",
    "title": "Falcon War General",
    "displayName": "Montu — Falcon War General",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "War / Guardian / Desert Dominion",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "war / command / falcon flame",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "weapon",
      "hammer",
      "combat",
      "weapon_action_ready",
      "guardian",
      "war"
    ],
    "presentationMode": "combat",
    "combatAttackAllowed": true,
    "characterCore": {
      "face": "red-gold eyes; stern general gaze",
      "hair": "long black hair with bronze falcon crest",
      "outfit": "black-red military armor dress with bronze collar",
      "body": "powerful adult feminine commander build",
      "aura": "controlled red battle light behind mace, clean and separated from face, hands, body, and main item",
      "extra": "Montu — Falcon War General; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "red-gold eyes; stern general gaze",
        "long black hair with bronze falcon crest",
        "black-red military armor dress with bronze collar",
        "powerful adult feminine commander build",
        "bronze mace"
      ]
    },
    "personalItem": {
      "name": "bronze mace",
      "itemRole": "weapon",
      "itemFamily": "hammer",
      "description": "bronze mace",
      "withItemPrompt": "holding or wielding bronze mace as a physically solid readable weapon, with clear handle and silhouette, not covering the face, chest silhouette, waist, or body outline",
      "noItemRemove": [
        "carrying",
        "gripping",
        "holding",
        "mace",
        "playing",
        "presenting",
        "reading",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep bronze mace physically solid and readable as a weapon; do not let it merge with aura, hair, hands, or body. Weapon character; mace/hammer smash compatible."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "weapon_action",
        "heavy_weapon",
        "combat",
        "battle_presence",
        "glamour_combat"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading",
        "teacup_sip"
      ],
      "compatiblePresentationModes": [
        "combat",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2417",
    "name": "Serqet",
    "title": "Scorpion Venom Guardian",
    "displayName": "Serqet — Scorpion Venom Guardian",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "War / Guardian / Desert Dominion",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "venom / protection / scorpion healing",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "weapon",
      "dagger",
      "combat",
      "weapon_action_ready",
      "guardian",
      "war"
    ],
    "presentationMode": "combat",
    "combatAttackAllowed": true,
    "characterCore": {
      "face": "yellow eyes; dangerous protective smile",
      "hair": "long black-purple hair",
      "outfit": "black-turquoise assassin-priestess outfit with scorpion jewelry",
      "body": "sleek curvy adult feminine assassin build",
      "aura": "tiny scorpion sigil behind shoulder, not on body, clean and separated from face, hands, body, and main item",
      "extra": "Serqet — Scorpion Venom Guardian; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "yellow eyes; dangerous protective smile",
        "long black-purple hair",
        "black-turquoise assassin-priestess outfit with scorpion jewelry",
        "sleek curvy adult feminine assassin build",
        "curved dagger"
      ]
    },
    "personalItem": {
      "name": "curved dagger",
      "itemRole": "weapon",
      "itemFamily": "dagger",
      "description": "curved dagger",
      "withItemPrompt": "holding or wielding curved dagger as a physically solid readable weapon, with clear handle and silhouette, not covering the face, chest silhouette, waist, or body outline",
      "noItemRemove": [
        "carrying",
        "curved",
        "dagger",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep curved dagger physically solid and readable as a weapon; do not let it merge with aura, hair, hands, or body. Weapon character; dagger poses compatible."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "weapon_action",
        "dual_dagger",
        "combat",
        "battle_presence",
        "glamour_combat"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading",
        "teacup_sip"
      ],
      "compatiblePresentationModes": [
        "combat",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2418",
    "name": "Wepwawet",
    "title": "Opener of the Roads",
    "displayName": "Wepwawet — Opener of the Roads",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "War / Guardian / Desert Dominion",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "road opening / war scouting / passage",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "weapon",
      "spear",
      "combat",
      "weapon_action_ready",
      "guardian",
      "war"
    ],
    "presentationMode": "combat",
    "combatAttackAllowed": true,
    "characterCore": {
      "face": "gray-gold eyes; alert road scout expression",
      "hair": "dark ash hair in a high ponytail",
      "outfit": "black-gold desert scout armor dress with travel cloak",
      "body": "athletic adult feminine scout build",
      "aura": "thin road-line glyph behind the spear, clean and separated from face, hands, body, and main item",
      "extra": "Wepwawet — Opener of the Roads; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "gray-gold eyes; alert road scout expression",
        "dark ash hair in a high ponytail",
        "black-gold desert scout armor dress with travel cloak",
        "athletic adult feminine scout build",
        "black spear and small gold key"
      ]
    },
    "personalItem": {
      "name": "black spear and small gold key",
      "itemRole": "weapon",
      "itemFamily": "spear",
      "description": "black spear and small gold key",
      "withItemPrompt": "holding or wielding black spear and small gold key as a physically solid readable weapon, with clear handle and silhouette, not covering the face, chest silhouette, waist, or body outline",
      "noItemRemove": [
        "carrying",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "spear",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep black spear and small gold key physically solid and readable as a weapon; do not let it merge with aura, hair, hands, or body. Spear is main weapon; key is secondary accessory only."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "weapon_action",
        "spear_thrust",
        "combat",
        "battle_presence",
        "glamour_combat"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading",
        "teacup_sip"
      ],
      "compatiblePresentationModes": [
        "combat",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2419",
    "name": "Menhit",
    "title": "Blade of the Lioness",
    "displayName": "Menhit — Blade of the Lioness",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "War / Guardian / Desert Dominion",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "lioness war / battle heat",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "weapon",
      "sword",
      "combat",
      "weapon_action_ready",
      "guardian",
      "war"
    ],
    "presentationMode": "combat",
    "combatAttackAllowed": true,
    "characterCore": {
      "face": "amber lioness eyes; dominant war smile",
      "hair": "copper-gold thick hair",
      "outfit": "gold-and-crimson lioness battle dress",
      "body": "powerful voluptuous adult feminine fighter build",
      "aura": "clean heat shimmer behind khopesh, clean and separated from face, hands, body, and main item",
      "extra": "Menhit — Blade of the Lioness; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "amber lioness eyes; dominant war smile",
        "copper-gold thick hair",
        "gold-and-crimson lioness battle dress",
        "powerful voluptuous adult feminine fighter build",
        "gold khopesh"
      ]
    },
    "personalItem": {
      "name": "gold khopesh",
      "itemRole": "weapon",
      "itemFamily": "sword",
      "description": "gold khopesh",
      "withItemPrompt": "holding or wielding gold khopesh as a physically solid readable weapon, with clear handle and silhouette, not covering the face, chest silhouette, waist, or body outline",
      "noItemRemove": [
        "carrying",
        "gripping",
        "holding",
        "khopesh",
        "playing",
        "presenting",
        "reading",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep gold khopesh physically solid and readable as a weapon; do not let it merge with aura, hair, hands, or body. Weapon character; slash poses compatible."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "weapon_action",
        "combat",
        "battle_presence",
        "glamour_combat"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading",
        "teacup_sip"
      ],
      "compatiblePresentationModes": [
        "combat",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2420",
    "name": "Mafdet",
    "title": "Execution Claw Judge",
    "displayName": "Mafdet — Execution Claw Judge",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "War / Guardian / Desert Dominion",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "execution / legal protection / feline speed",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "weapon",
      "dagger",
      "combat",
      "weapon_action_ready",
      "guardian",
      "war"
    ],
    "presentationMode": "combat",
    "combatAttackAllowed": true,
    "characterCore": {
      "face": "sharp catlike gold eyes; executioner focus",
      "hair": "short black hair with gold side ornaments",
      "outfit": "black-and-white execution judge outfit with gold trim",
      "body": "lean athletic adult feminine assassin build",
      "aura": "small law seal behind blades, clean and separated from face, hands, body, and main item",
      "extra": "Mafdet — Execution Claw Judge; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "sharp catlike gold eyes; executioner focus",
        "short black hair with gold side ornaments",
        "black-and-white execution judge outfit with gold trim",
        "lean athletic adult feminine assassin build",
        "twin short blades"
      ]
    },
    "personalItem": {
      "name": "twin short blades",
      "itemRole": "weapon",
      "itemFamily": "dagger",
      "description": "twin short blades",
      "withItemPrompt": "holding or wielding twin short blades as a physically solid readable weapon, with clear handle and silhouette, not covering the face, chest silhouette, waist, or body outline",
      "noItemRemove": [
        "blades",
        "carrying",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "short",
        "twin",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep twin short blades physically solid and readable as a weapon; do not let it merge with aura, hair, hands, or body. Weapon character; dual dagger poses compatible."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "weapon_action",
        "dual_dagger",
        "combat",
        "battle_presence",
        "glamour_combat"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading",
        "teacup_sip"
      ],
      "compatiblePresentationModes": [
        "combat",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2421",
    "name": "Apedemak",
    "title": "Lion War Flame",
    "displayName": "Apedemak — Lion War Flame",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "War / Guardian / Desert Dominion",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "foreign lion war / flame / royal guard",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "weapon",
      "axe",
      "combat",
      "weapon_action_ready",
      "guardian",
      "war"
    ],
    "presentationMode": "combat",
    "combatAttackAllowed": true,
    "characterCore": {
      "face": "fiery red eyes; fierce lion-war expression",
      "hair": "red-gold mane-like hair",
      "outfit": "bronze and black lion war armor dress",
      "body": "muscular curvy adult feminine warrior build",
      "aura": "contained flame ring behind axe, clean and separated from face, hands, body, and main item",
      "extra": "Apedemak — Lion War Flame; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "fiery red eyes; fierce lion-war expression",
        "red-gold mane-like hair",
        "bronze and black lion war armor dress",
        "muscular curvy adult feminine warrior build",
        "bronze axe"
      ]
    },
    "personalItem": {
      "name": "bronze axe",
      "itemRole": "weapon",
      "itemFamily": "axe",
      "description": "bronze axe",
      "withItemPrompt": "holding or wielding bronze axe as a physically solid readable weapon, with clear handle and silhouette, not covering the face, chest silhouette, waist, or body outline",
      "noItemRemove": [
        "carrying",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep bronze axe physically solid and readable as a weapon; do not let it merge with aura, hair, hands, or body. Weapon character; axe swing compatible."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "weapon_action",
        "heavy_weapon",
        "combat",
        "battle_presence",
        "glamour_combat"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading",
        "teacup_sip"
      ],
      "compatiblePresentationModes": [
        "combat",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2422",
    "name": "Astarte-Egypt",
    "title": "Foreign War Star",
    "displayName": "Astarte-Egypt — Foreign War Star",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "War / Guardian / Desert Dominion",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "foreign war / desire / star victory",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "weapon",
      "sword",
      "combat",
      "weapon_action_ready",
      "guardian",
      "war"
    ],
    "presentationMode": "combat",
    "combatAttackAllowed": true,
    "characterCore": {
      "face": "violet-gold eyes; seductive battle confidence",
      "hair": "long black hair with violet-gold jewelry",
      "outfit": "purple-and-gold foreign war goddess dress",
      "body": "voluptuous athletic adult feminine build",
      "aura": "small star arc behind sword, clean and separated from face, hands, body, and main item",
      "extra": "Astarte-Egypt — Foreign War Star; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "violet-gold eyes; seductive battle confidence",
        "long black hair with violet-gold jewelry",
        "purple-and-gold foreign war goddess dress",
        "voluptuous athletic adult feminine build",
        "crescent sword"
      ]
    },
    "personalItem": {
      "name": "crescent sword",
      "itemRole": "weapon",
      "itemFamily": "sword",
      "description": "crescent sword",
      "withItemPrompt": "holding or wielding crescent sword as a physically solid readable weapon, with clear handle and silhouette, not covering the face, chest silhouette, waist, or body outline",
      "noItemRemove": [
        "carrying",
        "crescent",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "sword",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep crescent sword physically solid and readable as a weapon; do not let it merge with aura, hair, hands, or body. Weapon character; sword slash compatible."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "weapon_action",
        "combat",
        "battle_presence",
        "glamour_combat"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading",
        "teacup_sip"
      ],
      "compatiblePresentationModes": [
        "combat",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2423",
    "name": "Seshat",
    "title": "Mistress of the House of Books",
    "displayName": "Seshat — Mistress of the House of Books",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Scribe / Ritual / Necropolis Court",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "archives / architecture / sacred measurement",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "document_item",
      "book",
      "scholarly",
      "read_write"
    ],
    "presentationMode": "scholarly",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "clever dark eyes; precise archivist expression",
      "hair": "short black hair with gold star headband",
      "outfit": "white-blue scholar dress with measuring trim",
      "body": "slender elegant adult feminine scholar build",
      "aura": "subtle ruled lines behind the body; stays behind or beside the body and does not cover face, hands, or silhouette",
      "extra": "Seshat — Mistress of the House of Books; adult female fantasy reinterpretation with Egyptian visual identity; single-character SSR-style card; dark luxury aesthetic.",
      "identityLock": [
        "clever dark eyes; precise archivist expression",
        "short black hair with gold star headband",
        "white-blue scholar dress with measuring trim",
        "slender elegant adult feminine scholar build"
      ]
    },
    "personalItem": {
      "name": "star-marked papyrus book",
      "itemRole": "document_item",
      "itemFamily": "book",
      "description": "star-marked papyrus book",
      "withItemPrompt": "holding, reading, writing on, or presenting star-marked papyrus book naturally, not a weapon, not used for striking, kept readable and clearly separated from face, hands, body, and effects",
      "noItemRemove": [
        "book",
        "carrying",
        "gripping",
        "holding",
        "marked",
        "papyrus",
        "playing",
        "presenting",
        "reading",
        "star",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep star-marked papyrus book readable as a non-weapon document_item; do not let it become a blade, shield, or attack effect. Book is readable document; use reading poses."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "document_item",
        "scholarly",
        "book_reading",
        "scroll_writing",
        "portrait"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "scholarly",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2424",
    "name": "Ptah",
    "title": "Artisan of the First Shape",
    "displayName": "Ptah — Artisan of the First Shape",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Scribe / Ritual / Necropolis Court",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "craft / creation / architecture",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "tool_item",
      "hammer",
      "professional",
      "tool_use"
    ],
    "presentationMode": "professional",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "deep brown eyes; calm artisan focus",
      "hair": "short black hair",
      "outfit": "blue-gold artisan-priestess robe with leather craft belt",
      "body": "mature sturdy adult feminine artisan build",
      "aura": "soft workshop-gold light behind hammer, clean and separated from face, hands, body, and main item",
      "extra": "Ptah — Artisan of the First Shape; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "deep brown eyes; calm artisan focus",
        "short black hair",
        "blue-gold artisan-priestess robe with leather craft belt",
        "mature sturdy adult feminine artisan build",
        "small bronze craft hammer"
      ]
    },
    "personalItem": {
      "name": "small bronze craft hammer",
      "itemRole": "tool_item",
      "itemFamily": "hammer",
      "description": "small bronze craft hammer",
      "withItemPrompt": "holding or using small bronze craft hammer as a practical tool near waist or beside body, not treated as a weapon, not used for striking unless explicitly requested, clearly separated from face and body silhouette",
      "noItemRemove": [
        "carrying",
        "craft",
        "gripping",
        "hammer",
        "holding",
        "playing",
        "presenting",
        "reading",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep small bronze craft hammer readable as a non-weapon tool_item; do not let it become a blade, shield, or attack effect. Hammer is a craft tool, not a battle hammer."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "tool_use",
        "professional",
        "lifestyle",
        "standing",
        "portrait"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "professional",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2425",
    "name": "Khnum",
    "title": "Potter of Living Souls",
    "displayName": "Khnum — Potter of Living Souls",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Scribe / Ritual / Necropolis Court",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "creation / clay / river souls",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "tool_item",
      "tool",
      "professional",
      "tool_use"
    ],
    "presentationMode": "professional",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "warm earth-brown eyes; patient creator smile",
      "hair": "cream-white hair with ram-horn ornaments",
      "outfit": "clay-brown and gold potter-priestess robe",
      "body": "full graceful adult feminine artisan build",
      "aura": "soft river-clay glow behind jar, clean and separated from face, hands, body, and main item",
      "extra": "Khnum — Potter of Living Souls; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "warm earth-brown eyes; patient creator smile",
        "cream-white hair with ram-horn ornaments",
        "clay-brown and gold potter-priestess robe",
        "full graceful adult feminine artisan build",
        "clay jar and sculpting tool"
      ]
    },
    "personalItem": {
      "name": "clay jar and sculpting tool",
      "itemRole": "tool_item",
      "itemFamily": "tool",
      "description": "clay jar and sculpting tool",
      "withItemPrompt": "holding or using clay jar and sculpting tool as a practical tool near waist or beside body, not treated as a weapon, not used for striking unless explicitly requested, clearly separated from face and body silhouette",
      "noItemRemove": [
        "carrying",
        "clay",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "sculpting",
        "tool",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep clay jar and sculpting tool readable as a non-weapon tool_item; do not let it become a blade, shield, or attack effect. Tool/item use only; do not weaponize sculpting tool."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "tool_use",
        "professional",
        "lifestyle",
        "standing",
        "portrait"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "professional",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2426",
    "name": "Imhotep",
    "title": "Saint Architect of Healing",
    "displayName": "Imhotep — Saint Architect of Healing",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Scribe / Ritual / Necropolis Court",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "healing / architecture / wisdom",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "document_item",
      "tablet",
      "scholarly",
      "read_write"
    ],
    "presentationMode": "scholarly",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "calm gray eyes; healer-architect expression",
      "hair": "smooth black hair",
      "outfit": "white-and-gold healer architect robe with clean geometric lines",
      "body": "elegant adult feminine scholar-healer build",
      "aura": "faint blueprint lines behind tablet, clean and separated from face, hands, body, and main item",
      "extra": "Imhotep — Saint Architect of Healing; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "calm gray eyes; healer-architect expression",
        "smooth black hair",
        "white-and-gold healer architect robe with clean geometric lines",
        "elegant adult feminine scholar-healer build",
        "limestone tablet"
      ]
    },
    "personalItem": {
      "name": "limestone tablet",
      "itemRole": "document_item",
      "itemFamily": "tablet",
      "description": "limestone tablet",
      "withItemPrompt": "holding, reading, writing on, or presenting limestone tablet naturally, not a weapon, not used for striking, kept readable and clearly separated from face, hands, body, and effects",
      "noItemRemove": [
        "carrying",
        "gripping",
        "holding",
        "limestone",
        "playing",
        "presenting",
        "reading",
        "tablet",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep limestone tablet readable as a non-weapon document_item; do not let it become a blade, shield, or attack effect. Tablet is document; use reading/presenting poses."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "document_item",
        "scholarly",
        "book_reading",
        "scroll_writing",
        "portrait"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "scholarly",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2427",
    "name": "Heka",
    "title": "Breath of Living Magic",
    "displayName": "Heka — Breath of Living Magic",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Scribe / Ritual / Necropolis Court",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "magic / spell life / ritual breath",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "ritual_item",
      "wand",
      "mystic",
      "ritual",
      "ceremonial"
    ],
    "presentationMode": "mystic",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "purple-gold eyes; mysterious ritual smile",
      "hair": "long black-purple hair",
      "outfit": "black-and-gold ritual gown with restrained arcane trim",
      "body": "voluptuous adult feminine sorceress build",
      "aura": "thin gold spell circle behind wand, clean and separated from face, hands, body, and main item",
      "extra": "Heka — Breath of Living Magic; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "purple-gold eyes; mysterious ritual smile",
        "long black-purple hair",
        "black-and-gold ritual gown with restrained arcane trim",
        "voluptuous adult feminine sorceress build",
        "small ritual wand"
      ]
    },
    "personalItem": {
      "name": "small ritual wand",
      "itemRole": "ritual_item",
      "itemFamily": "wand",
      "description": "small ritual wand",
      "withItemPrompt": "holding, raising, or presenting small ritual wand as a ritual focus, not used for melee striking, clearly separated from aura effects, face, hands, and body silhouette",
      "noItemRemove": [
        "carrying",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "ritual",
        "using",
        "wand",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep small ritual wand readable as a non-weapon ritual_item; do not let it become a blade, shield, or attack effect. Ritual wand; no melee striking."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "ritual",
        "ceremonial",
        "present_item",
        "battle_presence",
        "mystic"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "mystic",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2428",
    "name": "Hu",
    "title": "Voice of Sacred Command",
    "displayName": "Hu — Voice of Sacred Command",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Scribe / Ritual / Necropolis Court",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "command speech / divine utterance",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "instrument_item",
      "instrument",
      "ceremonial",
      "performer"
    ],
    "presentationMode": "ceremonial",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "gold eyes; commanding orator expression",
      "hair": "dark gold hair",
      "outfit": "black-and-gold herald-priestess gown",
      "body": "tall elegant adult feminine herald build",
      "aura": "clean sound wave arc behind trumpet, clean and separated from face, hands, body, and main item",
      "extra": "Hu — Voice of Sacred Command; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "gold eyes; commanding orator expression",
        "dark gold hair",
        "black-and-gold herald-priestess gown",
        "tall elegant adult feminine herald build",
        "gold speaking trumpet"
      ]
    },
    "personalItem": {
      "name": "gold speaking trumpet",
      "itemRole": "instrument_item",
      "itemFamily": "instrument",
      "description": "gold speaking trumpet",
      "withItemPrompt": "holding or playing gold speaking trumpet naturally as a musical or ceremonial signal instrument, not a weapon, not swung, not used for striking, clearly separated from face, hands, body, and effects",
      "noItemRemove": [
        "carrying",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "speaking",
        "trumpet",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep gold speaking trumpet readable as a non-weapon instrument_item; do not let it become a blade, shield, or attack effect. Trumpet is instrument/herald item; never weapon."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "instrument",
        "performer",
        "ceremonial",
        "battle_presence",
        "portrait"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "ceremonial",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2429",
    "name": "Sia",
    "title": "Sight of Divine Mind",
    "displayName": "Sia — Sight of Divine Mind",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Scribe / Ritual / Necropolis Court",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "perception / divine intellect",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "accessory_item",
      "mirror",
      "glamour",
      "accessory"
    ],
    "presentationMode": "glamour",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "bright blue eyes; knowing gaze",
      "hair": "blue-black long hair",
      "outfit": "lapis and white oracle gown with gold collar",
      "body": "graceful adult feminine oracle build",
      "aura": "single eye motif glow behind mirror, clean and separated from face, hands, body, and main item",
      "extra": "Sia — Sight of Divine Mind; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "bright blue eyes; knowing gaze",
        "blue-black long hair",
        "lapis and white oracle gown with gold collar",
        "graceful adult feminine oracle build",
        "blue eye hand mirror"
      ]
    },
    "personalItem": {
      "name": "blue eye hand mirror",
      "itemRole": "accessory_item",
      "itemFamily": "mirror",
      "description": "blue eye hand mirror",
      "withItemPrompt": "wearing, holding, or displaying blue eye hand mirror near shoulder, waist, or beside the body, not a weapon, not used for striking, not blocking the face or body silhouette",
      "noItemRemove": [
        "carrying",
        "gripping",
        "hand",
        "holding",
        "mirror",
        "playing",
        "presenting",
        "reading",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep blue eye hand mirror readable as a non-weapon accessory_item; do not let it become a blade, shield, or attack effect. Mirror accessory; use mirror check/present pose."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "portrait",
        "standing",
        "lifestyle",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "glamour",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2430",
    "name": "Iusaaset",
    "title": "Grandmother of the Gods",
    "displayName": "Iusaaset — Grandmother of the Gods",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Scribe / Ritual / Necropolis Court",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "primordial motherhood / lotus creation",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "daily_item",
      "flower",
      "ceremonial",
      "lifestyle",
      "daily_prop"
    ],
    "presentationMode": "ceremonial",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "soft gold eyes; ancient gentle smile",
      "hair": "long white-gold hair",
      "outfit": "white-gold primordial mother gown",
      "body": "mature voluptuous adult feminine goddess build",
      "aura": "soft lotus glow behind her shoulder, clean and separated from face, hands, body, and main item",
      "extra": "Iusaaset — Grandmother of the Gods; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "soft gold eyes; ancient gentle smile",
        "long white-gold hair",
        "white-gold primordial mother gown",
        "mature voluptuous adult feminine goddess build",
        "lotus flower"
      ]
    },
    "personalItem": {
      "name": "lotus flower",
      "itemRole": "daily_item",
      "itemFamily": "flower",
      "description": "lotus flower",
      "withItemPrompt": "holding, carrying, offering, or displaying lotus flower naturally, not a weapon, not used for striking, kept readable and clearly separated from face, hands, body, and effects",
      "noItemRemove": [
        "carrying",
        "flower",
        "gripping",
        "holding",
        "lotus",
        "playing",
        "presenting",
        "reading",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep lotus flower readable as a non-weapon daily_item; do not let it become a blade, shield, or attack effect. Lotus is offering item; not weapon."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "lifestyle",
        "serve_carry",
        "present_item",
        "standing",
        "portrait"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "ceremonial",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2431",
    "name": "Meretseger",
    "title": "Cobra Lady of the Peak",
    "displayName": "Meretseger — Cobra Lady of the Peak",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Scribe / Ritual / Necropolis Court",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "tomb mountain / cobra protection",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "accessory_item",
      "crown",
      "regal",
      "glamour",
      "accessory"
    ],
    "presentationMode": "regal",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "emerald eyes; silent cobra gaze",
      "hair": "black hair with green sheen",
      "outfit": "black-and-gold mountain cobra queen dress",
      "body": "slim elegant adult feminine guardian build",
      "aura": "subtle cobra silhouette behind crown, clean and separated from face, hands, body, and main item",
      "extra": "Meretseger — Cobra Lady of the Peak; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "emerald eyes; silent cobra gaze",
        "black hair with green sheen",
        "black-and-gold mountain cobra queen dress",
        "slim elegant adult feminine guardian build",
        "black cobra crown"
      ]
    },
    "personalItem": {
      "name": "black cobra crown",
      "itemRole": "accessory_item",
      "itemFamily": "crown",
      "description": "black cobra crown",
      "withItemPrompt": "wearing, holding, or displaying black cobra crown near shoulder, waist, or beside the body, not a weapon, not used for striking, not blocking the face or body silhouette",
      "noItemRemove": [
        "carrying",
        "cobra",
        "crown",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep black cobra crown readable as a non-weapon accessory_item; do not let it become a blade, shield, or attack effect. Crown is worn/displayed; not handheld weapon."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "portrait",
        "standing",
        "lifestyle",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "regal",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2432",
    "name": "Renenutet",
    "title": "Harvest Serpent Nurse",
    "displayName": "Renenutet — Harvest Serpent Nurse",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Scribe / Ritual / Necropolis Court",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "harvest / nursing / serpent blessing",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "daily_item",
      "basket",
      "lifestyle",
      "daily_prop"
    ],
    "presentationMode": "lifestyle",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "green-gold eyes; protective nurse smile",
      "hair": "dark green braided hair",
      "outfit": "green-gold harvest nurse dress with linen apron",
      "body": "soft curvy adult feminine nurturing build",
      "aura": "gentle wheat glow behind basket, clean and separated from face, hands, body, and main item",
      "extra": "Renenutet — Harvest Serpent Nurse; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "green-gold eyes; protective nurse smile",
        "dark green braided hair",
        "green-gold harvest nurse dress with linen apron",
        "soft curvy adult feminine nurturing build",
        "woven grain basket"
      ]
    },
    "personalItem": {
      "name": "woven grain basket",
      "itemRole": "daily_item",
      "itemFamily": "basket",
      "description": "woven grain basket",
      "withItemPrompt": "holding, carrying, offering, or displaying woven grain basket naturally, not a weapon, not used for striking, kept readable and clearly separated from face, hands, body, and effects",
      "noItemRemove": [
        "basket",
        "carrying",
        "grain",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "using",
        "wielding",
        "woven",
        "writing"
      ],
      "itemGuard": "Keep woven grain basket readable as a non-weapon daily_item; do not let it become a blade, shield, or attack effect. Basket is daily item; carry/offer only."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "lifestyle",
        "serve_carry",
        "present_item",
        "standing",
        "portrait"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "lifestyle",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2433",
    "name": "Ammit",
    "title": "Devourer of False Hearts",
    "displayName": "Ammit — Devourer of False Hearts",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Underworld / Soul / Tomb Guardians",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "false heart judgment / devouring punishment",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "ritual_item",
      "container",
      "ceremonial",
      "ritual",
      "underworld",
      "tomb"
    ],
    "presentationMode": "ceremonial",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "predatory red-gold eyes; ominous smile",
      "hair": "black-red hair",
      "outfit": "black and crimson judgment beast-priestess gown",
      "body": "curvy powerful adult feminine executioner build",
      "aura": "dark judgment shadow behind jar, clean and separated from face, hands, body, and main item",
      "extra": "Ammit — Devourer of False Hearts; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "predatory red-gold eyes; ominous smile",
        "black-red hair",
        "black and crimson judgment beast-priestess gown",
        "curvy powerful adult feminine executioner build",
        "black heart-shaped jar"
      ]
    },
    "personalItem": {
      "name": "black heart-shaped jar",
      "itemRole": "ritual_item",
      "itemFamily": "container",
      "description": "black heart-shaped jar",
      "withItemPrompt": "holding, raising, or presenting black heart-shaped jar as a ritual focus, not used for melee striking, clearly separated from aura effects, face, hands, and body silhouette",
      "noItemRemove": [
        "carrying",
        "gripping",
        "heart",
        "holding",
        "playing",
        "presenting",
        "reading",
        "shaped",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep black heart-shaped jar readable as a non-weapon ritual_item; do not let it become a blade, shield, or attack effect. Jar is ritual vessel; do not make monster body horror."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "ritual",
        "ceremonial",
        "present_item",
        "battle_presence",
        "mystic"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "ceremonial",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2434",
    "name": "Duamutef",
    "title": "Jackal Canopic Guardian",
    "displayName": "Duamutef — Jackal Canopic Guardian",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Underworld / Soul / Tomb Guardians",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "canopic protection / east guardian",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "ritual_item",
      "container",
      "ceremonial",
      "ritual",
      "underworld",
      "tomb"
    ],
    "presentationMode": "ceremonial",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "gold eyes; loyal tomb guardian expression",
      "hair": "black hair with gold jackal ornament",
      "outfit": "black-gold canopic guardian dress",
      "body": "elegant adult feminine tomb guardian build",
      "aura": "soft tomb doorway glow behind jar, clean and separated from face, hands, body, and main item",
      "extra": "Duamutef — Jackal Canopic Guardian; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "gold eyes; loyal tomb guardian expression",
        "black hair with gold jackal ornament",
        "black-gold canopic guardian dress",
        "elegant adult feminine tomb guardian build",
        "jackal canopic jar"
      ]
    },
    "personalItem": {
      "name": "jackal canopic jar",
      "itemRole": "ritual_item",
      "itemFamily": "container",
      "description": "jackal canopic jar",
      "withItemPrompt": "holding, raising, or presenting jackal canopic jar as a ritual focus, not used for melee striking, clearly separated from aura effects, face, hands, and body silhouette",
      "noItemRemove": [
        "canopic",
        "carrying",
        "gripping",
        "holding",
        "jackal",
        "playing",
        "presenting",
        "reading",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep jackal canopic jar readable as a non-weapon ritual_item; do not let it become a blade, shield, or attack effect. Jar must have readable jackal lid."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "ritual",
        "ceremonial",
        "present_item",
        "battle_presence",
        "mystic"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "ceremonial",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2435",
    "name": "Hapi",
    "title": "Baboon Canopic Guardian",
    "displayName": "Hapi — Baboon Canopic Guardian",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Underworld / Soul / Tomb Guardians",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "canopic protection / north guardian",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "ritual_item",
      "container",
      "ceremonial",
      "ritual",
      "underworld",
      "tomb"
    ],
    "presentationMode": "ceremonial",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "blue-gray eyes; gentle guardian expression",
      "hair": "blue-gray hair",
      "outfit": "blue-white canopic guardian robe",
      "body": "soft graceful adult feminine guardian build",
      "aura": "cool blue tomb light behind jar, clean and separated from face, hands, body, and main item",
      "extra": "Hapi — Baboon Canopic Guardian; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "blue-gray eyes; gentle guardian expression",
        "blue-gray hair",
        "blue-white canopic guardian robe",
        "soft graceful adult feminine guardian build",
        "blue baboon canopic jar"
      ]
    },
    "personalItem": {
      "name": "blue baboon canopic jar",
      "itemRole": "ritual_item",
      "itemFamily": "container",
      "description": "blue baboon canopic jar",
      "withItemPrompt": "holding, raising, or presenting blue baboon canopic jar as a ritual focus, not used for melee striking, clearly separated from aura effects, face, hands, and body silhouette",
      "noItemRemove": [
        "baboon",
        "canopic",
        "carrying",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep blue baboon canopic jar readable as a non-weapon ritual_item; do not let it become a blade, shield, or attack effect. Jar must have readable baboon lid."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "ritual",
        "ceremonial",
        "present_item",
        "battle_presence",
        "mystic"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "ceremonial",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2436",
    "name": "Imsety",
    "title": "Human Canopic Guardian",
    "displayName": "Imsety — Human Canopic Guardian",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Underworld / Soul / Tomb Guardians",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "canopic protection / south guardian",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "ritual_item",
      "container",
      "ceremonial",
      "ritual",
      "underworld",
      "tomb"
    ],
    "presentationMode": "ceremonial",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "warm brown eyes; calm guardian expression",
      "hair": "white-gold hair",
      "outfit": "ivory and gold canopic guardian gown",
      "body": "elegant adult feminine guardian build",
      "aura": "soft ivory halo behind jar, clean and separated from face, hands, body, and main item",
      "extra": "Imsety — Human Canopic Guardian; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "warm brown eyes; calm guardian expression",
        "white-gold hair",
        "ivory and gold canopic guardian gown",
        "elegant adult feminine guardian build",
        "white human-lid canopic jar"
      ]
    },
    "personalItem": {
      "name": "white human-lid canopic jar",
      "itemRole": "ritual_item",
      "itemFamily": "container",
      "description": "white human-lid canopic jar",
      "withItemPrompt": "holding, raising, or presenting white human-lid canopic jar as a ritual focus, not used for melee striking, clearly separated from aura effects, face, hands, and body silhouette",
      "noItemRemove": [
        "canopic",
        "carrying",
        "gripping",
        "holding",
        "human",
        "playing",
        "presenting",
        "reading",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep white human-lid canopic jar readable as a non-weapon ritual_item; do not let it become a blade, shield, or attack effect. Jar must have readable human lid."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "ritual",
        "ceremonial",
        "present_item",
        "battle_presence",
        "mystic"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "ceremonial",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2437",
    "name": "Qebehsenuef",
    "title": "Falcon Canopic Guardian",
    "displayName": "Qebehsenuef — Falcon Canopic Guardian",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Underworld / Soul / Tomb Guardians",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "canopic protection / west guardian",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "ritual_item",
      "container",
      "ceremonial",
      "ritual",
      "underworld",
      "tomb"
    ],
    "presentationMode": "ceremonial",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "amber eyes; watchful falcon guardian gaze",
      "hair": "gold-brown hair",
      "outfit": "gold and lapis winged canopic guardian dress",
      "body": "slender adult feminine guardian build",
      "aura": "small falcon-wing glow behind jar, clean and separated from face, hands, body, and main item",
      "extra": "Qebehsenuef — Falcon Canopic Guardian; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "amber eyes; watchful falcon guardian gaze",
        "gold-brown hair",
        "gold and lapis winged canopic guardian dress",
        "slender adult feminine guardian build",
        "falcon canopic jar"
      ]
    },
    "personalItem": {
      "name": "falcon canopic jar",
      "itemRole": "ritual_item",
      "itemFamily": "container",
      "description": "falcon canopic jar",
      "withItemPrompt": "holding, raising, or presenting falcon canopic jar as a ritual focus, not used for melee striking, clearly separated from aura effects, face, hands, and body silhouette",
      "noItemRemove": [
        "canopic",
        "carrying",
        "falcon",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep falcon canopic jar readable as a non-weapon ritual_item; do not let it become a blade, shield, or attack effect. Jar must have readable falcon lid."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "ritual",
        "ceremonial",
        "present_item",
        "battle_presence",
        "mystic"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "ceremonial",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2438",
    "name": "Anput",
    "title": "Lady of Embalming Shadows",
    "displayName": "Anput — Lady of Embalming Shadows",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Underworld / Soul / Tomb Guardians",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "embalming / funerary rites / shadow",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "tool_item",
      "tool",
      "professional",
      "tool_use",
      "underworld",
      "tomb"
    ],
    "presentationMode": "professional",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "dark gold eyes; quiet mortuary priestess expression",
      "hair": "long black hair under veil",
      "outfit": "black-and-gold embalmer priestess dress",
      "body": "tall elegant adult feminine ritualist build",
      "aura": "soft black linen ribbons behind knife, clean and separated from face, hands, body, and main item",
      "extra": "Anput — Lady of Embalming Shadows; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "dark gold eyes; quiet mortuary priestess expression",
        "long black hair under veil",
        "black-and-gold embalmer priestess dress",
        "tall elegant adult feminine ritualist build",
        "embalming knife"
      ]
    },
    "personalItem": {
      "name": "embalming knife",
      "itemRole": "tool_item",
      "itemFamily": "tool",
      "description": "embalming knife",
      "withItemPrompt": "holding or using embalming knife as a practical tool near waist or beside body, not treated as a weapon, not used for striking unless explicitly requested, clearly separated from face and body silhouette",
      "noItemRemove": [
        "carrying",
        "embalming",
        "gripping",
        "holding",
        "knife",
        "playing",
        "presenting",
        "reading",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep embalming knife readable as a non-weapon tool_item; do not let it become a blade, shield, or attack effect. Knife is embalming tool, not combat dagger."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "tool_use",
        "professional",
        "lifestyle",
        "standing",
        "portrait"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "professional",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2439",
    "name": "Kebechet",
    "title": "Cool Water of the Dead",
    "displayName": "Kebechet — Cool Water of the Dead",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Underworld / Soul / Tomb Guardians",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "purification / cooling water / afterlife care",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "daily_item",
      "container",
      "ceremonial",
      "lifestyle",
      "daily_prop",
      "underworld",
      "tomb"
    ],
    "presentationMode": "ceremonial",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "clear aqua eyes; gentle cleansing expression",
      "hair": "pale blue hair",
      "outfit": "white-blue funerary water priestess dress",
      "body": "graceful adult feminine purifier build",
      "aura": "cool water glow behind vessel, clean and separated from face, hands, body, and main item",
      "extra": "Kebechet — Cool Water of the Dead; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "clear aqua eyes; gentle cleansing expression",
        "pale blue hair",
        "white-blue funerary water priestess dress",
        "graceful adult feminine purifier build",
        "small water vessel"
      ]
    },
    "personalItem": {
      "name": "small water vessel",
      "itemRole": "daily_item",
      "itemFamily": "container",
      "description": "small water vessel",
      "withItemPrompt": "holding, carrying, offering, or displaying small water vessel naturally, not a weapon, not used for striking, kept readable and clearly separated from face, hands, body, and effects",
      "noItemRemove": [
        "carrying",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "using",
        "vessel",
        "water",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep small water vessel readable as a non-weapon daily_item; do not let it become a blade, shield, or attack effect. Water vessel is carried/offered only."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "lifestyle",
        "serve_carry",
        "present_item",
        "standing",
        "portrait"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "ceremonial",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2440",
    "name": "Sokar",
    "title": "Falcon Lord of the Tomb",
    "displayName": "Sokar — Falcon Lord of the Tomb",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Underworld / Soul / Tomb Guardians",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "tomb sovereignty / funerary craftsmanship",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "ritual_item",
      "scepter",
      "ceremonial",
      "ritual",
      "underworld",
      "tomb"
    ],
    "presentationMode": "ceremonial",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "deep gold eyes; silent tomb lord expression",
      "hair": "black-gold long hair",
      "outfit": "black funerary lord gown with falcon collar",
      "body": "mature elegant adult feminine tomb ruler build",
      "aura": "dim black-gold tomb aura behind scepter, clean and separated from face, hands, body, and main item",
      "extra": "Sokar — Falcon Lord of the Tomb; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "deep gold eyes; silent tomb lord expression",
        "black-gold long hair",
        "black funerary lord gown with falcon collar",
        "mature elegant adult feminine tomb ruler build",
        "black funerary scepter"
      ]
    },
    "personalItem": {
      "name": "black funerary scepter",
      "itemRole": "ritual_item",
      "itemFamily": "scepter",
      "description": "black funerary scepter",
      "withItemPrompt": "holding, raising, or presenting black funerary scepter as a ritual focus, not used for melee striking, clearly separated from aura effects, face, hands, and body silhouette",
      "noItemRemove": [
        "carrying",
        "funerary",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "scepter",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep black funerary scepter readable as a non-weapon ritual_item; do not let it become a blade, shield, or attack effect. Scepter ritual only; do not strike."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "ritual",
        "ceremonial",
        "present_item",
        "battle_presence",
        "mystic"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "ceremonial",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2441",
    "name": "Babi",
    "title": "Gatekeeper of the Ferocious Moon",
    "displayName": "Babi — Gatekeeper of the Ferocious Moon",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Underworld / Soul / Tomb Guardians",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "ferocity / underworld gate / moon guard",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "weapon",
      "hammer",
      "combat",
      "weapon_action_ready",
      "underworld",
      "tomb"
    ],
    "presentationMode": "combat",
    "combatAttackAllowed": true,
    "characterCore": {
      "face": "pale moon eyes; ferocious gatekeeper grin",
      "hair": "white-gray wild hair",
      "outfit": "black-silver gate guardian armor dress",
      "body": "muscular curvy adult feminine gatekeeper build",
      "aura": "pale moon glow behind mace, clean and separated from face, hands, body, and main item",
      "extra": "Babi — Gatekeeper of the Ferocious Moon; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "pale moon eyes; ferocious gatekeeper grin",
        "white-gray wild hair",
        "black-silver gate guardian armor dress",
        "muscular curvy adult feminine gatekeeper build",
        "bone mace"
      ]
    },
    "personalItem": {
      "name": "bone mace",
      "itemRole": "weapon",
      "itemFamily": "hammer",
      "description": "bone mace",
      "withItemPrompt": "holding or wielding bone mace as a physically solid readable weapon, with clear handle and silhouette, not covering the face, chest silhouette, waist, or body outline",
      "noItemRemove": [
        "bone",
        "carrying",
        "gripping",
        "holding",
        "mace",
        "playing",
        "presenting",
        "reading",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep bone mace physically solid and readable as a weapon; do not let it merge with aura, hair, hands, or body. Weapon character; mace/hammer smash compatible."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "weapon_action",
        "heavy_weapon",
        "combat",
        "battle_presence",
        "glamour_combat"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading",
        "teacup_sip"
      ],
      "compatiblePresentationModes": [
        "combat",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2442",
    "name": "Aken",
    "title": "Ferryman of the Duat",
    "displayName": "Aken — Ferryman of the Duat",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Underworld / Soul / Tomb Guardians",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "ferrying souls / night river",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "daily_item",
      "lantern",
      "lifestyle",
      "daily_prop",
      "underworld",
      "tomb"
    ],
    "presentationMode": "lifestyle",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "dark blue eyes; sleepy ferryman calm",
      "hair": "black-blue hair",
      "outfit": "dark river cloak dress with gold trim",
      "body": "slender adult feminine ferryman build",
      "aura": "soft river reflection behind lantern, clean and separated from face, hands, body, and main item",
      "extra": "Aken — Ferryman of the Duat; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "dark blue eyes; sleepy ferryman calm",
        "black-blue hair",
        "dark river cloak dress with gold trim",
        "slender adult feminine ferryman build",
        "small boat lantern"
      ]
    },
    "personalItem": {
      "name": "small boat lantern",
      "itemRole": "daily_item",
      "itemFamily": "lantern",
      "description": "small boat lantern",
      "withItemPrompt": "holding, carrying, offering, or displaying small boat lantern naturally, not a weapon, not used for striking, kept readable and clearly separated from face, hands, body, and effects",
      "noItemRemove": [
        "boat",
        "carrying",
        "gripping",
        "holding",
        "lantern",
        "playing",
        "presenting",
        "reading",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep small boat lantern readable as a non-weapon daily_item; do not let it become a blade, shield, or attack effect. Boat lantern is lifestyle/daily item; not weapon."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "lifestyle",
        "serve_carry",
        "present_item",
        "standing",
        "portrait"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "lifestyle",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2443",
    "name": "Nut",
    "title": "Star-Body Sky Mother",
    "displayName": "Nut — Star-Body Sky Mother",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Nile / Sky / Beauty / Household Divine",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "sky / stars / cosmic mother",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "accessory_item",
      "brooch",
      "glamour",
      "accessory"
    ],
    "presentationMode": "glamour",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "starry dark-blue eyes; motherly cosmic smile",
      "hair": "long black hair with tiny star shine",
      "outfit": "deep blue star-draped sky mother gown",
      "body": "tall voluptuous adult feminine sky goddess build",
      "aura": "soft star field behind body, not noisy, clean and separated from face, hands, body, and main item",
      "extra": "Nut — Star-Body Sky Mother; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "starry dark-blue eyes; motherly cosmic smile",
        "long black hair with tiny star shine",
        "deep blue star-draped sky mother gown",
        "tall voluptuous adult feminine sky goddess build",
        "star-shaped gold brooch"
      ]
    },
    "personalItem": {
      "name": "star-shaped gold brooch",
      "itemRole": "accessory_item",
      "itemFamily": "brooch",
      "description": "star-shaped gold brooch",
      "withItemPrompt": "wearing, holding, or displaying star-shaped gold brooch near shoulder, waist, or beside the body, not a weapon, not used for striking, not blocking the face or body silhouette",
      "noItemRemove": [
        "brooch",
        "carrying",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "shaped",
        "star",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep star-shaped gold brooch readable as a non-weapon accessory_item; do not let it become a blade, shield, or attack effect. Brooch accessory; avoid excessive star particles."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "portrait",
        "standing",
        "lifestyle",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "glamour",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2444",
    "name": "Geb",
    "title": "Earth Throne Mother",
    "displayName": "Geb — Earth Throne Mother",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Nile / Sky / Beauty / Household Divine",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "earth / fertility / grounded throne",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "daily_item",
      "bowl",
      "lifestyle",
      "daily_prop"
    ],
    "presentationMode": "lifestyle",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "warm green eyes; grounded mother expression",
      "hair": "dark green hair",
      "outfit": "earth-green and gold throne mother dress",
      "body": "full curvy adult feminine earth goddess build",
      "aura": "subtle stone-and-flower glow behind bowl, clean and separated from face, hands, body, and main item",
      "extra": "Geb — Earth Throne Mother; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "warm green eyes; grounded mother expression",
        "dark green hair",
        "earth-green and gold throne mother dress",
        "full curvy adult feminine earth goddess build",
        "green stone bowl"
      ]
    },
    "personalItem": {
      "name": "green stone bowl",
      "itemRole": "daily_item",
      "itemFamily": "bowl",
      "description": "green stone bowl",
      "withItemPrompt": "holding, carrying, offering, or displaying green stone bowl naturally, not a weapon, not used for striking, kept readable and clearly separated from face, hands, body, and effects",
      "noItemRemove": [
        "bowl",
        "carrying",
        "green",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "stone",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep green stone bowl readable as a non-weapon daily_item; do not let it become a blade, shield, or attack effect. Bowl is offering item; not magic orb."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "lifestyle",
        "serve_carry",
        "present_item",
        "standing",
        "portrait"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "lifestyle",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2445",
    "name": "Tefnut",
    "title": "Mistress of Rain Breath",
    "displayName": "Tefnut — Mistress of Rain Breath",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Nile / Sky / Beauty / Household Divine",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "moisture / rain / lioness air",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "daily_item",
      "container",
      "lifestyle",
      "daily_prop"
    ],
    "presentationMode": "lifestyle",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "blue-gold eyes; intense rain goddess gaze",
      "hair": "blue-black wavy hair",
      "outfit": "white-blue rain priestess dress with gold lioness ornaments",
      "body": "athletic curvy adult feminine goddess build",
      "aura": "gentle rain arc behind jar, clean and separated from face, hands, body, and main item",
      "extra": "Tefnut — Mistress of Rain Breath; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "blue-gold eyes; intense rain goddess gaze",
        "blue-black wavy hair",
        "white-blue rain priestess dress with gold lioness ornaments",
        "athletic curvy adult feminine goddess build",
        "blue water jar"
      ]
    },
    "personalItem": {
      "name": "blue water jar",
      "itemRole": "daily_item",
      "itemFamily": "container",
      "description": "blue water jar",
      "withItemPrompt": "holding, carrying, offering, or displaying blue water jar naturally, not a weapon, not used for striking, kept readable and clearly separated from face, hands, body, and effects",
      "noItemRemove": [
        "carrying",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "using",
        "water",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep blue water jar readable as a non-weapon daily_item; do not let it become a blade, shield, or attack effect. Water jar is carried/offered only."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "lifestyle",
        "serve_carry",
        "present_item",
        "standing",
        "portrait"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "lifestyle",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2446",
    "name": "Shu",
    "title": "Air Between Heaven and Earth",
    "displayName": "Shu — Air Between Heaven and Earth",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Nile / Sky / Beauty / Household Divine",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "air / separation of sky and earth",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "accessory_item",
      "fan",
      "glamour",
      "accessory"
    ],
    "presentationMode": "glamour",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "pale gold eyes; airy confident smile",
      "hair": "white-gold flowing hair",
      "outfit": "white and pale gold airy goddess robe with opaque layers",
      "body": "slender elegant adult feminine air goddess build",
      "aura": "soft wind ribbon behind fan, clean and separated from face, hands, body, and main item",
      "extra": "Shu — Air Between Heaven and Earth; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "pale gold eyes; airy confident smile",
        "white-gold flowing hair",
        "white and pale gold airy goddess robe with opaque layers",
        "slender elegant adult feminine air goddess build",
        "feather fan"
      ]
    },
    "personalItem": {
      "name": "feather fan",
      "itemRole": "accessory_item",
      "itemFamily": "fan",
      "description": "feather fan",
      "withItemPrompt": "wearing, holding, or displaying feather fan near shoulder, waist, or beside the body, not a weapon, not used for striking, not blocking the face or body silhouette",
      "noItemRemove": [
        "carrying",
        "feather",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep feather fan readable as a non-weapon accessory_item; do not let it become a blade, shield, or attack effect. Fan accessory; use fan/glamour poses."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "portrait",
        "standing",
        "lifestyle",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "glamour",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2447",
    "name": "Taweret",
    "title": "Hippo Guardian of Birth",
    "displayName": "Taweret — Hippo Guardian of Birth",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Nile / Sky / Beauty / Household Divine",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "birth protection / household safety",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "accessory_item",
      "comb",
      "lifestyle",
      "glamour",
      "accessory"
    ],
    "presentationMode": "lifestyle",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "warm brown eyes; kind protective smile",
      "hair": "soft brown wavy hair",
      "outfit": "ivory-blue protective mother dress with gold amulets",
      "body": "plus-size voluptuous adult feminine guardian build",
      "aura": "gentle household blessing glow behind comb, clean and separated from face, hands, body, and main item",
      "extra": "Taweret — Hippo Guardian of Birth; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "warm brown eyes; kind protective smile",
        "soft brown wavy hair",
        "ivory-blue protective mother dress with gold amulets",
        "plus-size voluptuous adult feminine guardian build",
        "ivory protective comb"
      ]
    },
    "personalItem": {
      "name": "ivory protective comb",
      "itemRole": "accessory_item",
      "itemFamily": "comb",
      "description": "ivory protective comb",
      "withItemPrompt": "wearing, holding, or displaying ivory protective comb near shoulder, waist, or beside the body, not a weapon, not used for striking, not blocking the face or body silhouette",
      "noItemRemove": [
        "carrying",
        "comb",
        "gripping",
        "holding",
        "ivory",
        "playing",
        "presenting",
        "protective",
        "reading",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep ivory protective comb readable as a non-weapon accessory_item; do not let it become a blade, shield, or attack effect. Comb is accessory; beauty/protection pose only."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "portrait",
        "standing",
        "lifestyle",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "lifestyle",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2448",
    "name": "Bes",
    "title": "Laughing Protector of the House",
    "displayName": "Bes — Laughing Protector of the House",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Nile / Sky / Beauty / Household Divine",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "household protection / laughter / music",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "instrument_item",
      "instrument",
      "performer"
    ],
    "presentationMode": "performer",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "bright mischievous eyes; laughing protector smile",
      "hair": "short curly black hair",
      "outfit": "red-gold festive house guardian outfit",
      "body": "short curvy adult feminine performer build",
      "aura": "small festive rhythm ring behind drum, clean and separated from face, hands, body, and main item",
      "extra": "Bes — Laughing Protector of the House; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "bright mischievous eyes; laughing protector smile",
        "short curly black hair",
        "red-gold festive house guardian outfit",
        "short curvy adult feminine performer build",
        "small hand drum"
      ]
    },
    "personalItem": {
      "name": "small hand drum",
      "itemRole": "instrument_item",
      "itemFamily": "instrument",
      "description": "small hand drum",
      "withItemPrompt": "holding or playing small hand drum naturally as a musical or ceremonial signal instrument, not a weapon, not swung, not used for striking, clearly separated from face, hands, body, and effects",
      "noItemRemove": [
        "carrying",
        "drum",
        "gripping",
        "hand",
        "holding",
        "playing",
        "presenting",
        "reading",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep small hand drum readable as a non-weapon instrument_item; do not let it become a blade, shield, or attack effect. Hand drum is instrument; not weapon."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "instrument",
        "performer",
        "ceremonial",
        "battle_presence",
        "portrait"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "performer",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2449",
    "name": "Hapy",
    "title": "Nile Abundance Lady",
    "displayName": "Hapy — Nile Abundance Lady",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Nile / Sky / Beauty / Household Divine",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "Nile flood / abundance / fertility",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "daily_item",
      "bowl",
      "ceremonial",
      "lifestyle",
      "daily_prop"
    ],
    "presentationMode": "ceremonial",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "aqua-green eyes; generous smile",
      "hair": "green-blue flowing hair",
      "outfit": "blue-green Nile abundance robe with lotus trim",
      "body": "voluptuous adult feminine river goddess build",
      "aura": "soft Nile water glow behind bowl, clean and separated from face, hands, body, and main item",
      "extra": "Hapy — Nile Abundance Lady; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "aqua-green eyes; generous smile",
        "green-blue flowing hair",
        "blue-green Nile abundance robe with lotus trim",
        "voluptuous adult feminine river goddess build",
        "lotus water bowl"
      ]
    },
    "personalItem": {
      "name": "lotus water bowl",
      "itemRole": "daily_item",
      "itemFamily": "bowl",
      "description": "lotus water bowl",
      "withItemPrompt": "holding, carrying, offering, or displaying lotus water bowl naturally, not a weapon, not used for striking, kept readable and clearly separated from face, hands, body, and effects",
      "noItemRemove": [
        "bowl",
        "carrying",
        "gripping",
        "holding",
        "lotus",
        "playing",
        "presenting",
        "reading",
        "using",
        "water",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep lotus water bowl readable as a non-weapon daily_item; do not let it become a blade, shield, or attack effect. Bowl is offering/daily item."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "lifestyle",
        "serve_carry",
        "present_item",
        "standing",
        "portrait"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "ceremonial",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2450",
    "name": "Wadj-Wer",
    "title": "Great Green Sea",
    "displayName": "Wadj-Wer — Great Green Sea",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Nile / Sky / Beauty / Household Divine",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "sea / great green waters",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "daily_item",
      "cup",
      "lifestyle",
      "daily_prop"
    ],
    "presentationMode": "lifestyle",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "sea-green eyes; distant ocean gaze",
      "hair": "green-blue long hair",
      "outfit": "deep green sea goddess gown with shell jewelry",
      "body": "tall curvy adult feminine sea goddess build",
      "aura": "subtle wave arc behind the body; stays behind or beside the body and does not cover face, hands, or silhouette",
      "extra": "Wadj-Wer — Great Green Sea; adult female fantasy reinterpretation with Egyptian visual identity; single-character SSR-style card; dark luxury aesthetic.",
      "identityLock": [
        "sea-green eyes; distant ocean gaze",
        "green-blue long hair",
        "deep green sea goddess gown with shell jewelry",
        "tall curvy adult feminine sea goddess build"
      ]
    },
    "personalItem": {
      "name": "shell cup",
      "itemRole": "daily_item",
      "itemFamily": "cup",
      "description": "shell cup",
      "withItemPrompt": "holding, carrying, offering, or displaying shell cup naturally, not a weapon, not used for striking, kept readable and clearly separated from face, hands, body, and effects",
      "noItemRemove": [
        "carrying",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "shell",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep shell cup readable as a non-weapon daily_item; do not let it become a blade, shield, or attack effect. Cup is daily item; use cup/offer poses."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "lifestyle",
        "serve_carry",
        "present_item",
        "standing",
        "portrait"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "lifestyle",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  },
  {
    "id": "2451",
    "name": "Bennu",
    "title": "Phoenix of Solar Renewal",
    "displayName": "Bennu — Phoenix of Solar Renewal",
    "gender": "female",
    "factionId": 24,
    "factionName": "Solar Necropolis of Egypt",
    "faction": "Solar Necropolis of Egypt",
    "mythology": "Egyptian",
    "subgroup": "Nile / Sky / Beauty / Household Divine",
    "sourceType": "mythological_deity",
    "conversionType": "adult_female_fantasy_reinterpretation",
    "powerDomain": "solar renewal / phoenix cycle",
    "tags": [
      "female",
      "adult",
      "egyptian_mythology",
      "solar_necropolis",
      "faction_24",
      "accessory_item",
      "fan",
      "ceremonial",
      "glamour",
      "accessory"
    ],
    "presentationMode": "ceremonial",
    "combatAttackAllowed": false,
    "characterCore": {
      "face": "bright amber eyes; rebirth smile",
      "hair": "copper-gold hair",
      "outfit": "gold and white phoenix-inspired goddess dress",
      "body": "elegant curvy adult feminine solar phoenix build",
      "aura": "contained feather-shaped solar glow behind fan, clean and separated from face, hands, body, and main item",
      "extra": "Bennu — Phoenix of Solar Renewal; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic.",
      "identityLock": [
        "bright amber eyes; rebirth smile",
        "copper-gold hair",
        "gold and white phoenix-inspired goddess dress",
        "elegant curvy adult feminine solar phoenix build",
        "gold feather fan"
      ]
    },
    "personalItem": {
      "name": "gold feather fan",
      "itemRole": "accessory_item",
      "itemFamily": "fan",
      "description": "gold feather fan",
      "withItemPrompt": "wearing, holding, or displaying gold feather fan near shoulder, waist, or beside the body, not a weapon, not used for striking, not blocking the face or body silhouette",
      "noItemRemove": [
        "carrying",
        "feather",
        "gripping",
        "holding",
        "playing",
        "presenting",
        "reading",
        "using",
        "wielding",
        "writing"
      ],
      "itemGuard": "Keep gold feather fan readable as a non-weapon accessory_item; do not let it become a blade, shield, or attack effect. Fan accessory; avoid turning her into full bird monster."
    },
    "promptProfile": {
      "preferredFraming": [
        "thigh_up",
        "waist_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "portrait",
        "standing",
        "lifestyle",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "active_attack",
        "melee_attack",
        "weapon_swing",
        "slash",
        "thrust",
        "ranged_attack",
        "aiming",
        "weapon_action"
      ],
      "compatiblePresentationModes": [
        "ceremonial",
        "portrait",
        "standing"
      ],
      "figurePreset": "glamour_voluptuous",
      "detailDensity": "clean_grouped_details",
      "complexityLock": true
    }
  }
];

if (typeof window !== "undefined") {
  window.solarNecropolisEgyptFaction = solarNecropolisEgyptFaction;
  window.solarNecropolisEgyptCharacters = solarNecropolisEgyptCharacters;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    solarNecropolisEgyptFaction,
    solarNecropolisEgyptCharacters
  };
}
