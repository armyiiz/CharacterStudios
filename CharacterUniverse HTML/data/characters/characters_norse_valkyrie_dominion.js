// Norse Valkyrie Dominion Core 50
// Designed by Alice for CharacterUniverse.
// IDs: 2302–2351
// Theme: Dark Luxury Viking Queen / Valkyrie War Court / Rune Magic.
// Main item rule: every personalItem is a simple physical object with clear silhouette.

const norseValkyrieDominionCharacters = [
  {
    "id": "2302",
    "name": "Odin",
    "title": "All-Mother of Runes",
    "displayName": "Odin — All-Mother of Runes",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Aesir High Court",
    "powerDomain": [
      "runes",
      "wisdom",
      "war",
      "ravens"
    ],
    "tags": [
      "female",
      "glamour",
      "ritual_item",
      "spear",
      "aura_effect",
      "rune_magic"
    ],
    "presentationMode": "mystic",
    "characterCore": {
      "face": "wise beautiful adult raven queen face, one visible icy-blue eye, calm seductive authority, dark rune eyeliner",
      "hair": "long silver-white hair with raven-black streaks, thick clean waves",
      "outfit": "black and gold Valkyrie queen cloak dress with fur mantle, fitted armor bodice, high slit, opaque strategic coverage, broad rune embroidery",
      "body": "adult voluptuous regal hourglass build, commanding all-mother posture",
      "aura": "one clean rune circle and two small raven silhouettes behind shoulders; separated from body silhouette",
      "extra": "Odin — All-Mother of Runes; adult female fantasy reinterpretation with Norse visual identity; single-character SSR-style card; dark luxury aesthetic."
    },
    "personalItem": {
      "name": "a physically rigid dark rune spear",
      "itemRole": "ritual_item",
      "itemFamily": "spear",
      "description": "a physically rigid dark metal spear with visible shaft, sharp spearhead, and small carved rune plates",
      "withItemPrompt": "holding a physically rigid dark rune spear vertically beside her body, shaft and spearhead visible, not crossing face, chest, waist, or silhouette",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "spear"
      ],
      "itemGuard": "Keep the spear solid and readable; rune glow stays on the shaft or behind shoulders, not replacing the weapon."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2303",
    "name": "Thor",
    "title": "Thunder Hammer Goddess",
    "displayName": "Thor — Thunder Hammer Goddess",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Aesir High Court",
    "powerDomain": [
      "thunder",
      "strength",
      "storm",
      "protection"
    ],
    "tags": [
      "female",
      "glamour",
      "weapon",
      "hammer",
      "aura_effect",
      "combat"
    ],
    "presentationMode": "combat",
    "characterCore": {
      "face": "fierce beautiful adult thunder goddess face, storm-blue eyes, confident battle smile, bold bronze makeup",
      "hair": "long copper-red hair in thick braided waves",
      "outfit": "black, red, and bronze Norse battle dress with fitted armor bodice, high slit, fur shoulder cape, opaque strategic coverage",
      "body": "adult voluptuous athletic hourglass build, powerful arms and thighs, glamorous battle stance",
      "aura": "small clean lightning arc behind shoulders, no storm clutter",
      "extra": "Thor — Thunder Hammer Goddess, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid short iron war hammer",
      "itemRole": "weapon",
      "itemFamily": "hammer",
      "description": "a physically solid short iron war hammer with visible handle and rectangular hammer head",
      "withItemPrompt": "holding a physically solid short iron war hammer lowered beside her hip, handle and hammer head visible, not covering face or torso",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "hammer"
      ],
      "itemGuard": "Keep the hammer small enough to read; lightning must stay as background aura, not become the hammer."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2304",
    "name": "Loki",
    "title": "Trickster of Nine Flames",
    "displayName": "Loki — Trickster of Nine Flames",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Aesir High Court",
    "powerDomain": [
      "trickery",
      "fire",
      "shapeshifting",
      "chaos"
    ],
    "tags": [
      "female",
      "glamour",
      "weapon",
      "dagger",
      "aura_effect",
      "villain"
    ],
    "presentationMode": "villain",
    "characterCore": {
      "face": "mischievous beautiful adult trickster face, green-gold eyes, seductive sly smile, sharp eyeliner",
      "hair": "long black hair with ember-orange tips, smooth dramatic waves",
      "outfit": "dark emerald and black trickster gown with fitted corset, high slit, gold knotwork belt, opaque strategic coverage",
      "body": "adult voluptuous agile hourglass build, playful tilted posture",
      "aura": "small green-orange flame crescent behind shoulders, no smoke cloud",
      "extra": "Loki — Trickster of Nine Flames, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically rigid short black dagger",
      "itemRole": "weapon",
      "itemFamily": "dagger",
      "description": "a physically rigid short black dagger with a visible handle and simple sharp blade",
      "withItemPrompt": "holding a physically rigid short black dagger near her waist, blade lowered, not crossing face or chest",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "dagger"
      ],
      "itemGuard": "Keep the dagger short and physical; flame aura must not become the blade."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2305",
    "name": "Frigg",
    "title": "Queen of Woven Fates",
    "displayName": "Frigg — Queen of Woven Fates",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Aesir High Court",
    "powerDomain": [
      "fate",
      "marriage",
      "motherhood",
      "foresight"
    ],
    "tags": [
      "female",
      "glamour",
      "tool_item",
      "spindle",
      "thread_effect"
    ],
    "presentationMode": "regal",
    "characterCore": {
      "face": "mature beautiful queen face, pale gray eyes, serene knowing seductive smile",
      "hair": "long pearl-blonde hair braided with gold thread, clean elegant waves",
      "outfit": "ivory, gray, and gold Norse queen gown with fitted bodice, high slit, fur-trimmed shawl, opaque strategic coverage",
      "body": "adult voluptuous mature hourglass build, graceful queenly posture",
      "aura": "one clean gold thread arc behind shoulders, not wrapping the body",
      "extra": "Frigg — Queen of Woven Fates, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid ivory spindle",
      "itemRole": "tool_item",
      "itemFamily": "spindle",
      "description": "a physically solid ivory spindle with a readable rod shape and one small thread spool",
      "withItemPrompt": "holding a physically solid ivory spindle near waist level, one clean thread line visible, not tangling hands, hair, or body",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "spindle"
      ],
      "itemGuard": "Use only one clean thread line; avoid web-like tangles, body wrapping, or many floating strings."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2306",
    "name": "Freyja",
    "title": "Golden Lady of Desire",
    "displayName": "Freyja — Golden Lady of Desire",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Vanir Golden Court",
    "powerDomain": [
      "love",
      "beauty",
      "seidr",
      "gold"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "necklace",
      "aura_effect"
    ],
    "presentationMode": "glamour",
    "characterCore": {
      "face": "irresistibly beautiful adult golden goddess face, amber eyes, confident seductive smile, glossy rose lips",
      "hair": "long honey-gold hair in luxurious thick waves",
      "outfit": "white, gold, and blush Norse goddess gown with corset lift, high slit, sheer golden veil, opaque strategic coverage, fur-trimmed capelet",
      "body": "adult voluptuous glamorous hourglass build, magnetic beauty-first posture",
      "aura": "small golden seidr halo behind shoulders, clean and restrained",
      "extra": "Freyja — Golden Lady of Desire, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid gold necklace",
      "itemRole": "accessory_item",
      "itemFamily": "necklace",
      "description": "a physically solid gold necklace with visible chain and one central amber jewel",
      "withItemPrompt": "holding or presenting a physically solid gold necklace near chest or waist level, not covering face or silhouette",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "necklace"
      ],
      "itemGuard": "Keep the necklace as a real jewelry object; avoid floating jewelry clutter or excessive gold particles."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2307",
    "name": "Freyr",
    "title": "Harvest Princeps of Gold",
    "displayName": "Freyr — Harvest Princeps of Gold",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Vanir Golden Court",
    "powerDomain": [
      "harvest",
      "fertility",
      "sunlight",
      "peace"
    ],
    "tags": [
      "female",
      "glamour",
      "daily_item",
      "cup",
      "aura_effect"
    ],
    "presentationMode": "ceremonial",
    "characterCore": {
      "face": "gentle beautiful adult harvest sovereign face, warm green-gold eyes, soft alluring smile",
      "hair": "long wheat-blonde hair with gold-green highlights, clean soft waves",
      "outfit": "cream and gold harvest-Valkyrie gown with fitted waist, high slit, fur-lined shoulder drape, opaque strategic coverage",
      "body": "adult voluptuous soft hourglass build, graceful prosperous posture",
      "aura": "small wheat-sun crescent behind shoulders, no field scenery",
      "extra": "Freyr — Harvest Princeps of Gold, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid golden horn cup",
      "itemRole": "daily_item",
      "itemFamily": "cup",
      "description": "a physically solid golden drinking horn cup with visible rim and curved horn shape",
      "withItemPrompt": "holding a physically solid golden horn cup near waist level, readable horn shape, not covering face or body",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "cup"
      ],
      "itemGuard": "Keep the horn cup simple and solid; avoid pouring liquid or large harvest background."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2308",
    "name": "Tyr",
    "title": "One-Handed Law Valkyrie",
    "displayName": "Tyr — One-Handed Law Valkyrie",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Aesir High Court",
    "powerDomain": [
      "law",
      "courage",
      "war",
      "sacrifice"
    ],
    "tags": [
      "female",
      "glamour",
      "weapon",
      "sword",
      "combat"
    ],
    "presentationMode": "combat",
    "characterCore": {
      "face": "stern beautiful adult law Valkyrie face, steel-blue eyes, brave seductive calm expression",
      "hair": "long dark blonde hair in a tight warrior braid",
      "outfit": "navy and steel Norse law-warrior dress armor with fitted bodice, high slit, fur mantle, opaque strategic coverage",
      "body": "adult voluptuous athletic hourglass build, disciplined warrior stance",
      "aura": "small silver law-rune halo behind shoulders, minimal",
      "extra": "Tyr — One-Handed Law Valkyrie, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically rigid straight steel sword",
      "itemRole": "weapon",
      "itemFamily": "sword",
      "description": "a physically rigid straight steel sword with visible handle, guard, and simple blade",
      "withItemPrompt": "holding a physically rigid straight steel sword lowered beside her body, not crossing face or chest",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "sword"
      ],
      "itemGuard": "Keep the sword straight and readable; do not add extra weapons or large battle effects."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2309",
    "name": "Heimdall",
    "title": "Watcher of the Rainbow Gate",
    "displayName": "Heimdall — Watcher of the Rainbow Gate",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Aesir High Court",
    "powerDomain": [
      "watchfulness",
      "rainbow bridge",
      "hearing",
      "gatekeeping"
    ],
    "tags": [
      "female",
      "glamour",
      "ritual_item",
      "horn",
      "aura_effect"
    ],
    "presentationMode": "regal",
    "characterCore": {
      "face": "beautiful adult gate watcher face, gold and blue eyes, vigilant seductive gaze",
      "hair": "long white-gold hair with rainbow-silver streaks, clean waves",
      "outfit": "white, gold, and deep blue gate-warden Valkyrie gown with fitted armor bodice, high slit, opaque strategic coverage",
      "body": "adult voluptuous statuesque hourglass build, poised guardian posture",
      "aura": "one thin rainbow arc behind shoulders, clean and separated from horn",
      "extra": "Heimdall — Watcher of the Rainbow Gate, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid golden signal horn",
      "itemRole": "ritual_item",
      "itemFamily": "horn",
      "description": "a physically solid golden signal horn with visible mouthpiece and curved horn body",
      "withItemPrompt": "holding a physically solid golden signal horn near waist or shoulder level, not covering face or body",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "horn"
      ],
      "itemGuard": "Keep the horn physical and readable; rainbow light must remain a thin background arc."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2310",
    "name": "Baldr",
    "title": "Radiant Saint of Dawn",
    "displayName": "Baldr — Radiant Saint of Dawn",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Aesir High Court",
    "powerDomain": [
      "light",
      "purity",
      "beauty",
      "dawn"
    ],
    "tags": [
      "female",
      "glamour",
      "ritual_item",
      "flower",
      "aura_effect"
    ],
    "presentationMode": "ceremonial",
    "characterCore": {
      "face": "radiant beautiful adult dawn saint face, soft blue eyes, pure but seductive gentle smile",
      "hair": "long pale gold hair with white highlights, clean luminous waves",
      "outfit": "white and sun-gold saintly Norse gown with fitted bodice, high slit, feather-fur capelet, opaque strategic coverage",
      "body": "adult voluptuous elegant hourglass build, luminous saint posture",
      "aura": "small white-gold dawn halo behind shoulders, restrained",
      "extra": "Baldr — Radiant Saint of Dawn, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid white mistletoe flower",
      "itemRole": "ritual_item",
      "itemFamily": "flower",
      "description": "a physically solid white mistletoe flower with visible stem and simple leaves",
      "withItemPrompt": "holding a physically solid white mistletoe flower near waist or chest level, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "flower"
      ],
      "itemGuard": "Keep the flower simple and symbolic; no injury, gore, or heavy tragedy scene."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2311",
    "name": "Hodr",
    "title": "Blind Winter Archer",
    "displayName": "Hodr — Blind Winter Archer",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Aesir High Court",
    "powerDomain": [
      "winter",
      "blindness",
      "fate",
      "archery"
    ],
    "tags": [
      "female",
      "glamour",
      "weapon",
      "bow",
      "ranged_weapon"
    ],
    "presentationMode": "combat",
    "characterCore": {
      "face": "pale beautiful adult blind winter archer face, clouded silver eyes, calm sorrowful seductive expression",
      "hair": "long black hair with white frost streaks, smooth waves",
      "outfit": "black and frost-white archer Valkyrie dress with fitted bodice, high slit, fur collar, opaque strategic coverage",
      "body": "adult voluptuous athletic hourglass build, quiet poised archer stance",
      "aura": "small frost crescent behind shoulders, no snowstorm",
      "extra": "Hodr — Blind Winter Archer, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically rigid white wooden bow",
      "itemRole": "weapon",
      "itemFamily": "bow",
      "description": "a physically rigid white wooden bow with visible grip, curved limbs, and bowstring",
      "withItemPrompt": "holding a physically rigid white wooden bow lowered beside her body, not actively aiming across face or chest",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "bow"
      ],
      "itemGuard": "Keep the bow lowered and readable; avoid close-up aiming poses and snow covering the string."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2312",
    "name": "Idunn",
    "title": "Keeper of Golden Apples",
    "displayName": "Idunn — Keeper of Golden Apples",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Aesir High Court",
    "powerDomain": [
      "youth",
      "apples",
      "renewal",
      "spring"
    ],
    "tags": [
      "female",
      "glamour",
      "daily_item",
      "apple",
      "aura_effect"
    ],
    "presentationMode": "lifestyle",
    "characterCore": {
      "face": "fresh beautiful adult youth goddess face, green eyes, sweet confident smile",
      "hair": "long strawberry-blonde hair in soft clean curls",
      "outfit": "spring-green and gold Norse goddess dress with fitted waist, high slit, light fur-trimmed shawl, opaque strategic coverage",
      "body": "adult voluptuous youthful hourglass build, lively graceful posture",
      "aura": "small golden orchard halo behind shoulders, only a few large light dots",
      "extra": "Idunn — Keeper of Golden Apples, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid golden apple",
      "itemRole": "daily_item",
      "itemFamily": "apple",
      "description": "a physically solid golden apple with clear round shape and small leaf stem",
      "withItemPrompt": "holding a physically solid golden apple near shoulder or waist level, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "apple"
      ],
      "itemGuard": "Keep the apple as one simple readable object; avoid many floating apples or orchard background."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2313",
    "name": "Bragi",
    "title": "Skald of Living Songs",
    "displayName": "Bragi — Skald of Living Songs",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Aesir High Court",
    "powerDomain": [
      "poetry",
      "music",
      "story",
      "memory"
    ],
    "tags": [
      "female",
      "glamour",
      "instrument_item",
      "lyre",
      "aura_effect"
    ],
    "presentationMode": "scholarly",
    "characterCore": {
      "face": "elegant beautiful adult skald face, warm brown eyes, wise alluring smile",
      "hair": "long auburn hair with gold bead braids, clean waves",
      "outfit": "wine-red and gold skald gown with fitted bodice, high slit, fur-lined poet cloak, opaque strategic coverage",
      "body": "adult voluptuous refined hourglass build, bardic storyteller posture",
      "aura": "thin music-rune arc behind shoulders, not around face",
      "extra": "Bragi — Skald of Living Songs, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a small physically solid wooden lyre",
      "itemRole": "instrument_item",
      "itemFamily": "lyre",
      "description": "a small physically solid wooden lyre with a clear frame and visible strings",
      "withItemPrompt": "holding a small physically solid wooden lyre near waist level, strings visible, not covering face or body",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "lyre"
      ],
      "itemGuard": "Keep the lyre small and solid; music runes must not hide the strings."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2314",
    "name": "Njord",
    "title": "Lady of Safe Harbors",
    "displayName": "Njord — Lady of Safe Harbors",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Vanir Golden Court",
    "powerDomain": [
      "sea",
      "ships",
      "wealth",
      "safe travel"
    ],
    "tags": [
      "female",
      "glamour",
      "daily_item",
      "shell",
      "aura_effect"
    ],
    "presentationMode": "regal",
    "characterCore": {
      "face": "beautiful mature harbor queen face, sea-gray eyes, calm wealthy smile",
      "hair": "long silver-aqua hair with pearl beads, clean heavy waves",
      "outfit": "navy, pearl, and gold harbor queen gown with fitted bodice, high slit, fur-trimmed naval cape, opaque strategic coverage",
      "body": "adult voluptuous regal hourglass build, composed sea-queen posture",
      "aura": "small harbor-wave crescent behind shoulders, no large sea scene",
      "extra": "Njord — Lady of Safe Harbors, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid pearl shell",
      "itemRole": "daily_item",
      "itemFamily": "shell",
      "description": "a physically solid pearl shell with visible ridges and curved shell shape",
      "withItemPrompt": "holding a physically solid pearl shell near waist or shoulder level, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "shell"
      ],
      "itemGuard": "Keep the shell small and readable; no ships, ocean crowd, or splash clutter."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2315",
    "name": "Nerthus",
    "title": "Earth Veil Matriarch",
    "displayName": "Nerthus — Earth Veil Matriarch",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Vanir Golden Court",
    "powerDomain": [
      "earth",
      "peace",
      "sacred grove",
      "fertility"
    ],
    "tags": [
      "female",
      "glamour",
      "ritual_item",
      "branch",
      "aura_effect"
    ],
    "presentationMode": "ceremonial",
    "characterCore": {
      "face": "serene beautiful mature earth matriarch face, moss-green eyes, gentle seductive smile",
      "hair": "long dark brown hair with gold-green strands, thick soft waves",
      "outfit": "forest-green and ivory Vanir matriarch gown with fitted waist, high slit, fur shawl, opaque strategic coverage",
      "body": "adult voluptuous mature hourglass build, grounded maternal posture",
      "aura": "small green grove halo behind shoulders, no forest clutter",
      "extra": "Nerthus — Earth Veil Matriarch, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid green oak branch",
      "itemRole": "ritual_item",
      "itemFamily": "branch",
      "description": "a physically solid green oak branch with a short stem and several broad leaves",
      "withItemPrompt": "holding a physically solid green oak branch near waist level, not covering face or body",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "branch"
      ],
      "itemGuard": "Keep the branch simple and readable; avoid vines wrapping the body or dense foliage."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2316",
    "name": "Gullveig",
    "title": "Gold-Burned Seeress",
    "displayName": "Gullveig — Gold-Burned Seeress",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Vanir Golden Court",
    "powerDomain": [
      "gold",
      "seidr",
      "rebirth",
      "witchcraft"
    ],
    "tags": [
      "female",
      "glamour",
      "ritual_item",
      "coin",
      "aura_effect"
    ],
    "presentationMode": "mystic",
    "characterCore": {
      "face": "dangerously beautiful adult gold seeress face, molten gold eyes, sly seductive smile",
      "hair": "long black hair with liquid-gold streaks, glossy waves",
      "outfit": "black and molten-gold seidr gown with corset bodice, high slit, translucent smoky veil with opaque coverage",
      "body": "adult voluptuous mystic hourglass build, tempting witch posture",
      "aura": "small gold flame-ring behind shoulders, no firestorm",
      "extra": "Gullveig — Gold-Burned Seeress, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid large gold coin",
      "itemRole": "ritual_item",
      "itemFamily": "coin",
      "description": "a physically solid large gold coin with clear round shape and simple rune stamp",
      "withItemPrompt": "holding a physically solid large gold coin between fingers near shoulder or waist, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "coin"
      ],
      "itemGuard": "Keep it to one large coin; avoid coin rain, melting gold, or flames over the body."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2317",
    "name": "Kvasir",
    "title": "Mead of Wisdom Saint",
    "displayName": "Kvasir — Mead of Wisdom Saint",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Vanir Golden Court",
    "powerDomain": [
      "wisdom",
      "mead",
      "poetry",
      "blood memory"
    ],
    "tags": [
      "female",
      "glamour",
      "daily_item",
      "cup"
    ],
    "presentationMode": "scholarly",
    "characterCore": {
      "face": "gentle beautiful adult wisdom saint face, amber eyes, thoughtful alluring smile",
      "hair": "long honey-brown hair in soft braids",
      "outfit": "cream, amber, and brown scholar-priestess gown with fitted waist, high slit, fur shoulder drape, opaque strategic coverage",
      "body": "adult voluptuous refined hourglass build, calm thoughtful posture",
      "aura": "small amber wisdom halo behind shoulders, restrained",
      "extra": "Kvasir — Mead of Wisdom Saint, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid amber mead cup",
      "itemRole": "daily_item",
      "itemFamily": "cup",
      "description": "a physically solid amber cup with visible rim, bowl, stem, and base",
      "withItemPrompt": "holding a physically solid amber mead cup near waist level, not covering face or body",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "cup"
      ],
      "itemGuard": "Keep the cup simple and solid; avoid liquid splashes or blood-like effects."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2318",
    "name": "Eir",
    "title": "Silver Hand of Healing",
    "displayName": "Eir — Silver Hand of Healing",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Vanir Golden Court",
    "powerDomain": [
      "healing",
      "mercy",
      "medicine",
      "protection"
    ],
    "tags": [
      "female",
      "glamour",
      "tool_item",
      "vial"
    ],
    "presentationMode": "professional",
    "characterCore": {
      "face": "kind beautiful adult healer face, pale blue eyes, soft confident smile",
      "hair": "long silver hair with light blue ribbons, clean waves",
      "outfit": "white and silver healer Valkyrie dress with fitted bodice, high slit, fur-lined medical capelet, opaque strategic coverage",
      "body": "adult voluptuous graceful hourglass build, calm healer posture",
      "aura": "small pale blue healing circle behind shoulders, minimal",
      "extra": "Eir — Silver Hand of Healing, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid small blue medicine vial",
      "itemRole": "tool_item",
      "itemFamily": "vial",
      "description": "a physically solid small glass medicine vial with visible cork and contained blue liquid",
      "withItemPrompt": "holding a physically solid small blue medicine vial near waist or shoulder, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "vial"
      ],
      "itemGuard": "Keep the vial small, solid, and corked; no liquid splashes or fog."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2319",
    "name": "Gefjon",
    "title": "Plough Queen of New Lands",
    "displayName": "Gefjon — Plough Queen of New Lands",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Vanir Golden Court",
    "powerDomain": [
      "land",
      "ploughing",
      "sovereignty",
      "creation"
    ],
    "tags": [
      "female",
      "glamour",
      "tool_item",
      "plough charm"
    ],
    "presentationMode": "ceremonial",
    "characterCore": {
      "face": "beautiful adult land-making queen face, green-brown eyes, confident generous smile",
      "hair": "long wheat-brown hair with gold braids, clean waves",
      "outfit": "earth-brown and gold land-queen gown with fitted bodice, high slit, fur-trimmed mantle, opaque strategic coverage",
      "body": "adult voluptuous strong hourglass build, grounded sovereign posture",
      "aura": "small earth-line crest behind shoulders, no field scene",
      "extra": "Gefjon — Plough Queen of New Lands, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid small gold plough charm",
      "itemRole": "tool_item",
      "itemFamily": "charm",
      "description": "a physically solid small gold plough-shaped charm with clear handle and blade shape",
      "withItemPrompt": "holding a physically solid small gold plough charm near waist level, not covering face or body",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "charm"
      ],
      "itemGuard": "Keep the charm small and symbolic; do not add oxen, field scenery, or huge plough props."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2320",
    "name": "Sif",
    "title": "Golden-Haired Thunder Bride",
    "displayName": "Sif — Golden-Haired Thunder Bride",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Vanir Golden Court",
    "powerDomain": [
      "golden hair",
      "marriage",
      "grain",
      "thunder kin"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "comb"
    ],
    "presentationMode": "glamour",
    "characterCore": {
      "face": "beautiful adult golden-haired bride face, warm blue eyes, poised seductive smile",
      "hair": "extra-long golden hair in thick luxurious waves, treated as her main visual identity",
      "outfit": "white, gold, and soft brown Norse bridal-war gown with corset lift, high slit, fur shawl, opaque strategic coverage",
      "body": "adult voluptuous glamorous hourglass build, bridal queen posture",
      "aura": "small golden grain halo behind shoulders, restrained",
      "extra": "Sif — Golden-Haired Thunder Bride, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid gold hair comb",
      "itemRole": "accessory_item",
      "itemFamily": "comb",
      "description": "a physically solid gold hair comb with visible teeth and simple rune engraving",
      "withItemPrompt": "holding a physically solid gold hair comb near shoulder or waist, teeth visible, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "comb"
      ],
      "itemGuard": "Keep the comb readable; do not make the hair so large it hides body silhouette or item."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2321",
    "name": "Hildr",
    "title": "Battle-Raising Valkyrie",
    "displayName": "Hildr — Battle-Raising Valkyrie",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Valkyrie War Choir",
    "powerDomain": [
      "battle",
      "valkyrie",
      "revival",
      "war song"
    ],
    "tags": [
      "female",
      "glamour",
      "weapon",
      "spear",
      "combat"
    ],
    "presentationMode": "combat",
    "characterCore": {
      "face": "fierce beautiful adult Valkyrie face, red-brown eyes, proud seductive battle smile",
      "hair": "long dark red hair in battle braids",
      "outfit": "black and crimson Valkyrie armor dress with high slit, fur cape, opaque strategic coverage, broad readable armor plates",
      "body": "adult voluptuous athletic hourglass build, strong battlefield posture",
      "aura": "small red war-rune crescent behind shoulders, no battlefield clutter",
      "extra": "Hildr — Battle-Raising Valkyrie, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically rigid steel Valkyrie spear",
      "itemRole": "weapon",
      "itemFamily": "spear",
      "description": "a physically rigid steel spear with visible shaft and leaf-shaped spearhead",
      "withItemPrompt": "holding a physically rigid steel Valkyrie spear beside her body, spearhead visible, not crossing face or torso",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "spear"
      ],
      "itemGuard": "Keep the spear simple and vertical; no extra weapons or blood effects."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2322",
    "name": "Sigrun",
    "title": "Victory Rune Commander",
    "displayName": "Sigrun — Victory Rune Commander",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Valkyrie War Choir",
    "powerDomain": [
      "victory",
      "command",
      "runes",
      "war"
    ],
    "tags": [
      "female",
      "glamour",
      "ritual_item",
      "banner"
    ],
    "presentationMode": "regal",
    "characterCore": {
      "face": "commanding beautiful adult commander face, icy gray eyes, confident seductive gaze",
      "hair": "long platinum hair with black rune ribbons, clean waves",
      "outfit": "white, black, and gold commander Valkyrie dress armor with fitted bodice, high slit, fur mantle, opaque strategic coverage",
      "body": "adult voluptuous statuesque hourglass build, authoritative commander posture",
      "aura": "small victory rune halo behind shoulders, clean",
      "extra": "Sigrun — Victory Rune Commander, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid small black war banner",
      "itemRole": "ritual_item",
      "itemFamily": "banner",
      "description": "a physically solid small black war banner on a short pole with visible cloth rectangle and gold rune",
      "withItemPrompt": "holding a physically solid small black war banner beside her body, banner cloth visible, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "banner"
      ],
      "itemGuard": "Keep the banner small and readable; avoid a huge flag covering the character."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2323",
    "name": "Brynhildr",
    "title": "Flame-Sleep Shieldmaiden",
    "displayName": "Brynhildr — Flame-Sleep Shieldmaiden",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Valkyrie War Choir",
    "powerDomain": [
      "flame",
      "sleep",
      "shieldmaiden",
      "honor"
    ],
    "tags": [
      "female",
      "glamour",
      "weapon",
      "shield",
      "aura_effect"
    ],
    "presentationMode": "combat",
    "characterCore": {
      "face": "noble beautiful adult shieldmaiden face, amber eyes, proud tragic seductive gaze",
      "hair": "long golden-red hair with warrior braids, clean waves",
      "outfit": "black, gold, and ember-red shieldmaiden gown armor with high slit, fur collar, opaque strategic coverage",
      "body": "adult voluptuous athletic hourglass build, noble guarded stance",
      "aura": "small ember ring behind shoulders, no flame wall",
      "extra": "Brynhildr — Flame-Sleep Shieldmaiden, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid round bronze shield",
      "itemRole": "weapon",
      "itemFamily": "shield",
      "description": "a physically solid round bronze shield with visible rim, central boss, and back handle",
      "withItemPrompt": "holding a physically solid round bronze shield beside her body, not covering face or full torso",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "shield"
      ],
      "itemGuard": "Keep the shield readable but not oversized; ember aura must stay behind her shoulders."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2324",
    "name": "Gunnr",
    "title": "Spear of War Song",
    "displayName": "Gunnr — Spear of War Song",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Valkyrie War Choir",
    "powerDomain": [
      "war",
      "spear",
      "song",
      "battlefield"
    ],
    "tags": [
      "female",
      "glamour",
      "weapon",
      "spear",
      "combat"
    ],
    "presentationMode": "combat",
    "characterCore": {
      "face": "beautiful adult war singer face, dark blue eyes, fierce seductive smile",
      "hair": "long black-blue hair with silver braids",
      "outfit": "dark navy and steel Valkyrie battle gown with fitted armor bodice, high slit, fur capelet, opaque strategic coverage",
      "body": "adult voluptuous athletic hourglass build, singing battle stance",
      "aura": "thin sound-rune arc behind shoulders, restrained",
      "extra": "Gunnr — Spear of War Song, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically rigid dark steel spear",
      "itemRole": "weapon",
      "itemFamily": "spear",
      "description": "a physically rigid dark steel spear with a visible shaft and sharp spearhead",
      "withItemPrompt": "holding a physically rigid dark steel spear lowered beside her body, not crossing face or chest",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "spear"
      ],
      "itemGuard": "Keep the spear solid and clear; sound runes stay behind shoulders only."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2325",
    "name": "Skogul",
    "title": "Raven-Helm Chooser",
    "displayName": "Skogul — Raven-Helm Chooser",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Valkyrie War Choir",
    "powerDomain": [
      "battle selection",
      "ravens",
      "valor",
      "fate"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "helmet"
    ],
    "presentationMode": "mystic",
    "characterCore": {
      "face": "cold beautiful adult chooser face, raven-black eyes, subtle seductive smile",
      "hair": "long black hair with silver streaks, smooth waves",
      "outfit": "black and silver raven Valkyrie gown armor with fitted bodice, high slit, feather-fur mantle, opaque strategic coverage",
      "body": "adult voluptuous elegant hourglass build, poised fate-chooser posture",
      "aura": "two small raven silhouettes behind shoulders, no feather storm",
      "extra": "Skogul — Raven-Helm Chooser, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid black raven helmet",
      "itemRole": "accessory_item",
      "itemFamily": "helmet",
      "description": "a physically solid black helmet held in one hand with simple raven-wing cheek guards",
      "withItemPrompt": "holding a physically solid black raven helmet near waist level, not covering her face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "helmet"
      ],
      "itemGuard": "Keep the helmet in hand and readable; avoid wearing it if it hides face, no many feathers."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2326",
    "name": "Geirskogul",
    "title": "Spear-Shaker of the Fallen",
    "displayName": "Geirskogul — Spear-Shaker of the Fallen",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Valkyrie War Choir",
    "powerDomain": [
      "fallen warriors",
      "spear",
      "valkyrie",
      "judgment"
    ],
    "tags": [
      "female",
      "glamour",
      "weapon",
      "spear"
    ],
    "presentationMode": "combat",
    "characterCore": {
      "face": "stern beautiful adult fallen-judge face, silver eyes, severe seductive focus",
      "hair": "long ash-gray hair in braided waves",
      "outfit": "gray, black, and pale gold Valkyrie judgment armor dress with high slit, opaque strategic coverage",
      "body": "adult voluptuous strong hourglass build, executioner-like Valkyrie posture",
      "aura": "small gray fallen-rune crescent behind shoulders",
      "extra": "Geirskogul — Spear-Shaker of the Fallen, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically rigid pale steel spear",
      "itemRole": "weapon",
      "itemFamily": "spear",
      "description": "a physically rigid pale steel spear with visible shaft and simple blade",
      "withItemPrompt": "holding a physically rigid pale steel spear vertically beside her body, spearhead visible, not crossing face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "spear"
      ],
      "itemGuard": "Keep the spear readable; avoid ghost crowd, battlefield bodies, or heavy mist."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2327",
    "name": "Randgrid",
    "title": "Shield-Breaker Maiden",
    "displayName": "Randgrid — Shield-Breaker Maiden",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Valkyrie War Choir",
    "powerDomain": [
      "shield breaking",
      "war",
      "duel",
      "valor"
    ],
    "tags": [
      "female",
      "glamour",
      "weapon",
      "axe",
      "combat"
    ],
    "presentationMode": "combat",
    "characterCore": {
      "face": "fierce beautiful adult duel maiden face, green-gray eyes, confident dangerous smile",
      "hair": "long chestnut hair with iron beads, thick waves",
      "outfit": "dark green and iron Valkyrie duelist armor dress with high slit, fur shoulder, opaque strategic coverage",
      "body": "adult voluptuous athletic hourglass build, powerful duelist stance",
      "aura": "small cracked-shield motif behind shoulders, not cluttered",
      "extra": "Randgrid — Shield-Breaker Maiden, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid short iron axe",
      "itemRole": "weapon",
      "itemFamily": "axe",
      "description": "a physically solid short iron axe with visible wooden handle and broad axe head",
      "withItemPrompt": "holding a physically solid short iron axe lowered beside her hip, not covering face or torso",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "axe"
      ],
      "itemGuard": "Keep the axe short and physical; no shattered fragments covering the frame."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2328",
    "name": "Mist",
    "title": "Fog-Winged Valkyrie",
    "displayName": "Mist — Fog-Winged Valkyrie",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Valkyrie War Choir",
    "powerDomain": [
      "mist",
      "stealth",
      "valkyrie",
      "rescue"
    ],
    "tags": [
      "female",
      "glamour",
      "daily_item",
      "lantern",
      "aura_effect"
    ],
    "presentationMode": "mystic",
    "characterCore": {
      "face": "mysterious beautiful adult mist Valkyrie face, pale gray eyes, quiet seductive expression",
      "hair": "long silver-gray hair in soft clean waves",
      "outfit": "pale gray and black mist Valkyrie gown with fitted bodice, high slit, light fur cape, opaque strategic coverage",
      "body": "adult voluptuous elegant hourglass build, quiet guardian posture",
      "aura": "thin mist crescent behind shoulders, not covering body",
      "extra": "Mist — Fog-Winged Valkyrie, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid small silver lantern",
      "itemRole": "daily_item",
      "itemFamily": "lantern",
      "description": "a physically solid small silver lantern with visible handle, frame, and contained pale light",
      "withItemPrompt": "holding a physically solid small silver lantern near hip or waist, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "lantern"
      ],
      "itemGuard": "Keep the lantern solid; mist stays behind the body and never hides hands or item."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2329",
    "name": "Rota",
    "title": "Storm-Rider Valkyrie",
    "displayName": "Rota — Storm-Rider Valkyrie",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Valkyrie War Choir",
    "powerDomain": [
      "storm",
      "charge",
      "horse omen",
      "war"
    ],
    "tags": [
      "female",
      "glamour",
      "weapon",
      "sword",
      "aura_effect"
    ],
    "presentationMode": "combat",
    "characterCore": {
      "face": "bold beautiful adult storm rider face, storm-gray eyes, wild seductive grin",
      "hair": "long wind-swept blonde hair with dark roots, grouped waves",
      "outfit": "black and storm-blue rider Valkyrie armor dress with high slit, fur cape, opaque strategic coverage",
      "body": "adult voluptuous athletic hourglass build, dynamic rider-like stance",
      "aura": "small storm crescent behind shoulders, no horse body",
      "extra": "Rota — Storm-Rider Valkyrie, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically rigid short steel sword",
      "itemRole": "weapon",
      "itemFamily": "sword",
      "description": "a physically rigid short steel sword with visible handle, guard, and blade",
      "withItemPrompt": "holding a physically rigid short steel sword lowered beside her body, not crossing face or chest",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "sword"
      ],
      "itemGuard": "Keep the sword readable; do not add full horse, storm tornado, or motion blur clutter."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2330",
    "name": "Kara",
    "title": "Swan-Song Valkyrie",
    "displayName": "Kara — Swan-Song Valkyrie",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Valkyrie War Choir",
    "powerDomain": [
      "swan",
      "song",
      "valkyrie",
      "charm"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "fan"
    ],
    "presentationMode": "lifestyle",
    "characterCore": {
      "face": "beautiful adult swan-song Valkyrie face, pearl-blue eyes, enchanting seductive smile",
      "hair": "long white-blonde hair with pearl braids, clean waves",
      "outfit": "white and silver swan Valkyrie gown with fitted bodice, high slit, fur-feather shawl, opaque strategic coverage",
      "body": "adult voluptuous graceful hourglass build, singer-like elegant posture",
      "aura": "small white feather crescent behind shoulders, no bird body",
      "extra": "Kara — Swan-Song Valkyrie, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid white feather fan",
      "itemRole": "accessory_item",
      "itemFamily": "fan",
      "description": "a physically solid white feather fan with visible handle and grouped feather shape",
      "withItemPrompt": "holding a physically solid white feather fan near shoulder or waist, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "fan"
      ],
      "itemGuard": "Keep the fan grouped and readable; no full swan body or many loose feathers."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2331",
    "name": "Skadi",
    "title": "Snow Huntress of the Mountain",
    "displayName": "Skadi — Snow Huntress of the Mountain",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Jotunn / Giantess Bloodline",
    "powerDomain": [
      "snow",
      "mountains",
      "hunting",
      "winter"
    ],
    "tags": [
      "female",
      "glamour",
      "weapon",
      "bow",
      "ranged_weapon"
    ],
    "presentationMode": "combat",
    "characterCore": {
      "face": "icy beautiful adult snow huntress face, pale blue eyes, proud seductive smile",
      "hair": "long white hair with black frost streaks, thick braid",
      "outfit": "ice-blue and dark fur mountain huntress outfit with fitted bodice, high slit skirt, opaque strategic coverage",
      "body": "adult voluptuous athletic hourglass build, strong mountain stance",
      "aura": "small snowflake crescent behind shoulders, no blizzard",
      "extra": "Skadi — Snow Huntress of the Mountain, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically rigid dark wooden hunting bow",
      "itemRole": "weapon",
      "itemFamily": "bow",
      "description": "a physically rigid dark wooden hunting bow with visible grip, curved limbs, and bowstring",
      "withItemPrompt": "holding a physically rigid dark wooden hunting bow lowered beside her body, not aiming across face or chest",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "bow"
      ],
      "itemGuard": "Keep the bow lowered and readable; avoid snowstorm clutter and many arrows."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2332",
    "name": "Angrboda",
    "title": "Mother of Wolves",
    "displayName": "Angrboda — Mother of Wolves",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Jotunn / Giantess Bloodline",
    "powerDomain": [
      "wolves",
      "giantess",
      "prophecy",
      "monsters"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "mask",
      "creature_traits"
    ],
    "presentationMode": "villain",
    "characterCore": {
      "face": "dangerously beautiful mature giantess face, golden wolf-like eyes, confident seductive smile",
      "hair": "long black hair with gray-white streaks, heavy waves",
      "outfit": "black, gray, and bronze wolf-mother gown with fitted bodice, high slit, fur mantle, opaque strategic coverage",
      "body": "adult voluptuous mature hourglass build, dominant maternal posture",
      "aura": "small wolf-head crest behind shoulders, no wolf pack",
      "extra": "Angrboda — Mother of Wolves, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid black wolf mask",
      "itemRole": "accessory_item",
      "itemFamily": "mask",
      "description": "a physically solid black wolf half-mask held in one hand with simple ears and snout shape",
      "withItemPrompt": "holding a physically solid black wolf mask near waist or shoulder, not covering her actual face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "mask"
      ],
      "itemGuard": "Keep wolf traits symbolic through mask and fur mantle; no wolf pack or animal body."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2333",
    "name": "Fenrir",
    "title": "Wolf-Chained Princess",
    "displayName": "Fenrir — Wolf-Chained Princess",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Monster / Beast Icons",
    "powerDomain": [
      "wolf",
      "chains",
      "fate",
      "destruction"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "chain",
      "creature_traits"
    ],
    "presentationMode": "villain",
    "characterCore": {
      "face": "beautiful adult wolf princess face, amber eyes, fierce seductive grin, sharp eyeliner",
      "hair": "long silver-gray hair with black tips, wild but grouped waves",
      "outfit": "black and iron wolf-princess battle gown with fitted bodice, high slit, fur collar, opaque strategic coverage",
      "body": "adult voluptuous powerful hourglass build, restrained power posture",
      "aura": "small broken-chain crescent behind shoulders, no full wolf body",
      "extra": "Fenrir — Wolf-Chained Princess, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid short broken iron chain",
      "itemRole": "accessory_item",
      "itemFamily": "chain",
      "description": "a physically solid short broken iron chain with a few large readable links",
      "withItemPrompt": "holding a physically solid short broken iron chain loosely beside her waist, not wrapped around body or hands",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "chain"
      ],
      "itemGuard": "Keep the chain short, loose, and symbolic; avoid bondage-like wrapping or tangled links."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2334",
    "name": "Jormungandr",
    "title": "World-Serpent Maiden",
    "displayName": "Jormungandr — World-Serpent Maiden",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Monster / Beast Icons",
    "powerDomain": [
      "world serpent",
      "sea",
      "circle",
      "fate"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "ring",
      "creature_traits"
    ],
    "presentationMode": "mystic",
    "characterCore": {
      "face": "mesmerizing beautiful adult serpent maiden face, teal serpent-like eyes, calm seductive smile",
      "hair": "long dark teal hair with silver-green highlights, smooth heavy waves",
      "outfit": "deep sea-green and black Norse serpent gown with fitted bodice, high slit, scale-pattern jewelry only, opaque strategic coverage",
      "body": "adult voluptuous elegant hourglass build, circular poised posture",
      "aura": "small serpent-circle emblem behind shoulders, no snake body",
      "extra": "Jormungandr — World-Serpent Maiden, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid silver serpent ring",
      "itemRole": "accessory_item",
      "itemFamily": "ring",
      "description": "a physically solid large silver serpent ring held between fingers, with clear circular shape and simple serpent head detail",
      "withItemPrompt": "holding a physically solid silver serpent ring near waist or chest level, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "ring"
      ],
      "itemGuard": "Represent serpent identity through ring and jewelry only; no giant snake body or coiling around character."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2335",
    "name": "Nidhogg",
    "title": "Root-Devourer Dragoness",
    "displayName": "Nidhogg — Root-Devourer Dragoness",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Monster / Beast Icons",
    "powerDomain": [
      "dragon",
      "roots",
      "decay",
      "underworld"
    ],
    "tags": [
      "female",
      "glamour",
      "weapon",
      "dagger",
      "creature_traits"
    ],
    "presentationMode": "villain",
    "characterCore": {
      "face": "dark beautiful adult dragoness face, crimson eyes, hungry seductive smile",
      "hair": "long black hair with dark red streaks, glossy waves",
      "outfit": "black and dark red root-dragon gown with fitted bodice, high slit, subtle scale armor accents, opaque strategic coverage",
      "body": "adult voluptuous dangerous hourglass build, predatory boss posture",
      "aura": "small black root crescent behind shoulders, no giant dragon",
      "extra": "Nidhogg — Root-Devourer Dragoness, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically rigid black root dagger",
      "itemRole": "weapon",
      "itemFamily": "dagger",
      "description": "a physically rigid short black dagger with visible handle and simple blade shaped like a root",
      "withItemPrompt": "holding a physically rigid black root dagger lowered beside her waist, not crossing face or chest",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "dagger"
      ],
      "itemGuard": "Keep dragon traits symbolic; no wings, full dragon body, extra tails, or root clutter covering anatomy."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2336",
    "name": "Ymir",
    "title": "First Frost Giantess",
    "displayName": "Ymir — First Frost Giantess",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Jotunn / Giantess Bloodline",
    "powerDomain": [
      "primordial frost",
      "creation",
      "giant blood",
      "void"
    ],
    "tags": [
      "female",
      "glamour",
      "ritual_item",
      "stone",
      "aura_effect"
    ],
    "presentationMode": "mystic",
    "characterCore": {
      "face": "ancient beautiful adult frost giantess face, pale icy eyes, remote seductive expression",
      "hair": "long snow-white hair with blue-gray shadows, thick clean waves",
      "outfit": "pale blue, white, and black primordial fur gown with fitted bodice, high slit, opaque strategic coverage",
      "body": "adult voluptuous statuesque hourglass build, immense calm presence",
      "aura": "small frost-stone halo behind shoulders, no huge landscape",
      "extra": "Ymir — First Frost Giantess, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid blue frost stone",
      "itemRole": "ritual_item",
      "itemFamily": "stone",
      "description": "a physically solid blue frost stone with clear oval shape and simple rune mark",
      "withItemPrompt": "holding a physically solid blue frost stone near waist level, not covering face or body",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "stone"
      ],
      "itemGuard": "Keep the stone as one simple object; avoid ice shards, body horror, or giant scenery."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2337",
    "name": "Surt",
    "title": "Fire Jotunn Queen",
    "displayName": "Surt — Fire Jotunn Queen",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Jotunn / Giantess Bloodline",
    "powerDomain": [
      "fire",
      "jotunn",
      "end-times",
      "flame"
    ],
    "tags": [
      "female",
      "glamour",
      "weapon",
      "sword",
      "aura_effect"
    ],
    "presentationMode": "villain",
    "characterCore": {
      "face": "fiery beautiful adult fire giant queen face, ember eyes, commanding seductive smile",
      "hair": "long black hair with flame-red ends, clean dramatic waves",
      "outfit": "black and molten-orange fire queen armor gown with high slit, fur-black mantle, opaque strategic coverage",
      "body": "adult voluptuous powerful hourglass build, boss-tier stance",
      "aura": "small ember crown halo behind shoulders, no firestorm",
      "extra": "Surt — Fire Jotunn Queen, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically rigid short ember sword",
      "itemRole": "weapon",
      "itemFamily": "sword",
      "description": "a physically rigid short dark metal sword with visible handle and orange glowing edge line",
      "withItemPrompt": "holding a physically rigid short ember sword lowered beside her body, not crossing face or chest",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "sword"
      ],
      "itemGuard": "Keep the sword solid metal; glowing edge is only a thin line, not an energy blade or flame mass."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2338",
    "name": "Laufey",
    "title": "Frost Needle Mother",
    "displayName": "Laufey — Frost Needle Mother",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Jotunn / Giantess Bloodline",
    "powerDomain": [
      "frost",
      "motherhood",
      "sharp leaves",
      "jotunn"
    ],
    "tags": [
      "female",
      "glamour",
      "tool_item",
      "needle"
    ],
    "presentationMode": "mystic",
    "characterCore": {
      "face": "elegant beautiful mature frost mother face, pale green eyes, quiet seductive smile",
      "hair": "long pale green-white hair in smooth waves",
      "outfit": "frost-green and white giantess mother gown with fitted waist, high slit, fur shawl, opaque strategic coverage",
      "body": "adult voluptuous mature hourglass build, elegant silent posture",
      "aura": "small frost-leaf crescent behind shoulders, minimal",
      "extra": "Laufey — Frost Needle Mother, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid silver sewing needle",
      "itemRole": "tool_item",
      "itemFamily": "needle",
      "description": "a physically solid large silver sewing needle with visible eye hole and sharp point",
      "withItemPrompt": "holding a physically solid silver sewing needle near waist level, not pointing at face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "needle"
      ],
      "itemGuard": "Keep the needle as one simple tool; no many needles, thread webs, or body wrapping."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2339",
    "name": "Gerd",
    "title": "Radiant Giantess Bride",
    "displayName": "Gerd — Radiant Giantess Bride",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Jotunn / Giantess Bloodline",
    "powerDomain": [
      "beauty",
      "jotunn",
      "marriage",
      "radiance"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "mirror"
    ],
    "presentationMode": "glamour",
    "characterCore": {
      "face": "radiant beautiful adult giantess bride face, pale gold eyes, shy seductive smile",
      "hair": "long platinum hair with warm gold tips, clean soft waves",
      "outfit": "ivory and pale gold bridal giantess gown with corset lift, high slit, sheer veil, opaque strategic coverage",
      "body": "adult voluptuous bridal hourglass build, graceful romantic posture",
      "aura": "small gold bridal halo behind shoulders, no palace scene",
      "extra": "Gerd — Radiant Giantess Bride, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid gold hand mirror",
      "itemRole": "accessory_item",
      "itemFamily": "mirror",
      "description": "a physically solid gold hand mirror with a clear handle and oval reflective face",
      "withItemPrompt": "holding a physically solid gold hand mirror near waist or shoulder level, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "mirror"
      ],
      "itemGuard": "Keep the mirror simple; no mirror portals, duplicate faces, or giant scenery."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2340",
    "name": "Thrym",
    "title": "Frost Crown Raider",
    "displayName": "Thrym — Frost Crown Raider",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Jotunn / Giantess Bloodline",
    "powerDomain": [
      "frost",
      "giant king",
      "theft",
      "ransom"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "crown"
    ],
    "presentationMode": "villain",
    "characterCore": {
      "face": "arrogant beautiful adult frost raider queen face, icy violet eyes, smug seductive smile",
      "hair": "long dark blue hair with white frost tips, heavy waves",
      "outfit": "dark blue and silver frost raider gown armor with fitted bodice, high slit, fur mantle, opaque strategic coverage",
      "body": "adult voluptuous strong hourglass build, smug raider posture",
      "aura": "small frost-crown crest behind shoulders, clean",
      "extra": "Thrym — Frost Crown Raider, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid small silver crown",
      "itemRole": "accessory_item",
      "itemFamily": "crown",
      "description": "a physically solid small silver crown with clear points and blue jewels",
      "withItemPrompt": "holding a physically solid small silver crown near shoulder or waist level, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "crown"
      ],
      "itemGuard": "Keep the crown small and readable; no giant throne or stolen hammer clutter."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2341",
    "name": "Hel",
    "title": "Half-Veil Queen of the Dead",
    "displayName": "Hel — Half-Veil Queen of the Dead",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Underworld / Fate / Rune Branch",
    "powerDomain": [
      "dead",
      "underworld",
      "judgment",
      "half-veil"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "key",
      "aura_effect"
    ],
    "presentationMode": "regal",
    "characterCore": {
      "face": "beautiful adult underworld queen face, one pale side and one shadowed side shown through makeup, calm seductive deathly gaze",
      "hair": "long half-white half-black hair in clean waves",
      "outfit": "black and bone-white underworld queen gown with corset bodice, high slit, fur-lined dark veil, opaque strategic coverage",
      "body": "adult voluptuous regal hourglass build, still queenly posture",
      "aura": "small black gate halo behind shoulders, no corpse imagery",
      "extra": "Hel — Half-Veil Queen of the Dead, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid black underworld key",
      "itemRole": "accessory_item",
      "itemFamily": "key",
      "description": "a physically solid black key with clear handle, teeth, and small silver ring",
      "withItemPrompt": "holding a physically solid black underworld key near waist or shoulder, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "key"
      ],
      "itemGuard": "Keep the key readable; avoid horror, gore, corpse imagery, or heavy mist."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2342",
    "name": "Norn Urd",
    "title": "Keeper of What Was",
    "displayName": "Norn Urd — Keeper of What Was",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Underworld / Fate / Rune Branch",
    "powerDomain": [
      "past",
      "fate",
      "memory",
      "well"
    ],
    "tags": [
      "female",
      "glamour",
      "document_item",
      "book"
    ],
    "presentationMode": "scholarly",
    "characterCore": {
      "face": "mature beautiful fate keeper face, deep gray eyes, nostalgic seductive calm",
      "hair": "long silver-gray hair with white braids",
      "outfit": "gray and ivory fate scholar gown with fitted waist, high slit, fur shawl, opaque strategic coverage",
      "body": "adult voluptuous refined hourglass build, memory-keeper posture",
      "aura": "small past-rune crescent behind shoulders, minimal",
      "extra": "Norn Urd — Keeper of What Was, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid gray memory book",
      "itemRole": "document_item",
      "itemFamily": "book",
      "description": "a physically solid gray book with visible cover, spine, and small silver clasp",
      "withItemPrompt": "holding a physically solid gray memory book near waist level, not covering face or body",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "book"
      ],
      "itemGuard": "Keep the book solid and readable; avoid loose pages or text covering the character."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2343",
    "name": "Norn Verdandi",
    "title": "Weaver of What Is",
    "displayName": "Norn Verdandi — Weaver of What Is",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Underworld / Fate / Rune Branch",
    "powerDomain": [
      "present",
      "fate",
      "weaving",
      "becoming"
    ],
    "tags": [
      "female",
      "glamour",
      "tool_item",
      "spindle",
      "thread_effect"
    ],
    "presentationMode": "mystic",
    "characterCore": {
      "face": "beautiful adult present-weaver face, clear green eyes, knowing seductive smile",
      "hair": "long brown-gold hair with one green thread braid",
      "outfit": "green, ivory, and gold fate gown with fitted bodice, high slit, opaque strategic coverage",
      "body": "adult voluptuous graceful hourglass build, active weaving posture",
      "aura": "one clean green thread arc behind shoulders, not wrapped around body",
      "extra": "Norn Verdandi — Weaver of What Is, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid wooden spindle",
      "itemRole": "tool_item",
      "itemFamily": "spindle",
      "description": "a physically solid wooden spindle with readable rod and small thread spool",
      "withItemPrompt": "holding a physically solid wooden spindle near waist level, one clean green thread line visible",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "spindle"
      ],
      "itemGuard": "Use only one clean thread line; avoid tangles, webs, or wrapping around hands and body."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2344",
    "name": "Norn Skuld",
    "title": "Blade of What Must Be",
    "displayName": "Norn Skuld — Blade of What Must Be",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Underworld / Fate / Rune Branch",
    "powerDomain": [
      "future",
      "fate",
      "valkyrie",
      "necessity"
    ],
    "tags": [
      "female",
      "glamour",
      "weapon",
      "dagger"
    ],
    "presentationMode": "combat",
    "characterCore": {
      "face": "sharp beautiful adult future Valkyrie face, icy green eyes, severe seductive focus",
      "hair": "long black hair with silver-green streaks, sleek waves",
      "outfit": "black and green fate-Valkyrie armor dress with high slit, fur shoulder, opaque strategic coverage",
      "body": "adult voluptuous athletic hourglass build, decisive execution posture",
      "aura": "small green future-rune halo behind shoulders, restrained",
      "extra": "Norn Skuld — Blade of What Must Be, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically rigid short silver dagger",
      "itemRole": "weapon",
      "itemFamily": "dagger",
      "description": "a physically rigid short silver dagger with visible handle and simple sharp blade",
      "withItemPrompt": "holding a physically rigid short silver dagger lowered beside waist, not crossing face or chest",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "dagger"
      ],
      "itemGuard": "Keep the dagger short and solid; no fate lines wrapping the body."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2345",
    "name": "Mimir",
    "title": "Well of Severed Wisdom",
    "displayName": "Mimir — Well of Severed Wisdom",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Underworld / Fate / Rune Branch",
    "powerDomain": [
      "wisdom",
      "well",
      "memory",
      "sacrifice"
    ],
    "tags": [
      "female",
      "glamour",
      "daily_item",
      "cup"
    ],
    "presentationMode": "scholarly",
    "characterCore": {
      "face": "ancient beautiful adult well oracle face, pale blue eyes, wise melancholy seductive gaze",
      "hair": "long white-blue hair with dark underlayer, smooth waves",
      "outfit": "dark blue and white oracle gown with fitted waist, high slit, fur-lined shawl, opaque strategic coverage",
      "body": "adult voluptuous refined hourglass build, contemplative well-keeper posture",
      "aura": "small well-water ring behind shoulders, no severed imagery",
      "extra": "Mimir — Well of Severed Wisdom, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid wooden wisdom cup",
      "itemRole": "daily_item",
      "itemFamily": "cup",
      "description": "a physically solid wooden cup with visible rim, bowl, and base",
      "withItemPrompt": "holding a physically solid wooden wisdom cup near waist level, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "cup"
      ],
      "itemGuard": "Keep the cup simple; no severed head imagery, no water splash, no heavy fog."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2346",
    "name": "Ran",
    "title": "Net Queen of Drowned Treasure",
    "displayName": "Ran — Net Queen of Drowned Treasure",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Underworld / Fate / Rune Branch",
    "powerDomain": [
      "sea",
      "drowned treasure",
      "nets",
      "death at sea"
    ],
    "tags": [
      "female",
      "glamour",
      "tool_item",
      "net"
    ],
    "presentationMode": "villain",
    "characterCore": {
      "face": "beautiful adult sea net queen face, dark teal eyes, dangerous seductive smile",
      "hair": "long dark sea-green hair with silver pearls, heavy waves",
      "outfit": "black teal and silver drowned-queen gown with fitted bodice, high slit, net-pattern shawl kept broad, opaque strategic coverage",
      "body": "adult voluptuous regal hourglass build, predatory sea-queen posture",
      "aura": "small silver wave crest behind shoulders, no ocean clutter",
      "extra": "Ran — Net Queen of Drowned Treasure, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid small silver fishing net",
      "itemRole": "tool_item",
      "itemFamily": "net",
      "description": "a physically solid small silver fishing net folded in one hand with clear mesh edge and handle ring",
      "withItemPrompt": "holding a physically solid small silver fishing net folded near waist level, not spreading over body",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "net"
      ],
      "itemGuard": "Keep the net folded and symbolic; no net wrapping body, no drowned bodies, no water clutter."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2347",
    "name": "Aegir",
    "title": "Banquet Lordess of the Sea",
    "displayName": "Aegir — Banquet Lordess of the Sea",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Underworld / Fate / Rune Branch",
    "powerDomain": [
      "sea",
      "feast",
      "ale",
      "hospitality"
    ],
    "tags": [
      "female",
      "glamour",
      "daily_item",
      "cup"
    ],
    "presentationMode": "lifestyle",
    "characterCore": {
      "face": "beautiful adult sea banquet queen face, aqua eyes, relaxed seductive host smile",
      "hair": "long blue hair with foam-white highlights, clean waves",
      "outfit": "deep blue and gold Norse banquet gown with fitted waist, high slit, fur-lined sea cloak, opaque strategic coverage",
      "body": "adult voluptuous lush hourglass build, welcoming banquet posture",
      "aura": "small foam crescent behind shoulders, minimal",
      "extra": "Aegir — Banquet Lordess of the Sea, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid blue ale goblet",
      "itemRole": "daily_item",
      "itemFamily": "cup",
      "description": "a physically solid blue goblet with visible rim, bowl, stem, and base",
      "withItemPrompt": "holding a physically solid blue ale goblet near shoulder or waist, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "cup",
        "goblet"
      ],
      "itemGuard": "Keep the goblet simple; avoid spilling ale or banquet table clutter."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2348",
    "name": "Vidr",
    "title": "Silent Forest Avenger",
    "displayName": "Vidr — Silent Forest Avenger",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Monster / Beast Icons",
    "powerDomain": [
      "vengeance",
      "forest",
      "silence",
      "survival"
    ],
    "tags": [
      "female",
      "glamour",
      "weapon",
      "boot blade"
    ],
    "presentationMode": "combat",
    "characterCore": {
      "face": "quiet beautiful adult forest avenger face, moss-green eyes, silent seductive focus",
      "hair": "long dark brown hair with green highlights, tied partly back",
      "outfit": "dark green and black silent-warrior dress armor with fitted bodice, high slit, fur mantle, opaque strategic coverage",
      "body": "adult voluptuous athletic hourglass build, poised silent stance",
      "aura": "small forest shadow crest behind shoulders, no dense trees",
      "extra": "Vidr — Silent Forest Avenger, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically rigid short steel dagger",
      "itemRole": "weapon",
      "itemFamily": "dagger",
      "description": "a physically rigid short steel dagger with visible handle and simple blade",
      "withItemPrompt": "holding a physically rigid short steel dagger lowered beside her hip, not crossing face or torso",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "dagger"
      ],
      "itemGuard": "Keep the dagger readable; no complex boot weapon mechanics or forest clutter."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2349",
    "name": "Vali",
    "title": "Arrow of Vengeance",
    "displayName": "Vali — Arrow of Vengeance",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Monster / Beast Icons",
    "powerDomain": [
      "vengeance",
      "archery",
      "youthful fury",
      "justice"
    ],
    "tags": [
      "female",
      "glamour",
      "weapon",
      "bow",
      "ranged_weapon"
    ],
    "presentationMode": "combat",
    "characterCore": {
      "face": "fierce beautiful adult vengeance archer face, amber eyes, intense seductive focus",
      "hair": "long auburn hair in tight warrior braid",
      "outfit": "brown, black, and gold vengeance archer outfit with fitted bodice, high slit, fur shoulder, opaque strategic coverage",
      "body": "adult voluptuous athletic hourglass build, focused archer posture",
      "aura": "small amber vengeance rune behind shoulders, clean",
      "extra": "Vali — Arrow of Vengeance, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically rigid short wooden bow",
      "itemRole": "weapon",
      "itemFamily": "bow",
      "description": "a physically rigid short wooden bow with visible grip, curved limbs, and bowstring",
      "withItemPrompt": "holding a physically rigid short wooden bow lowered beside body, not aiming across face or chest",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "bow"
      ],
      "itemGuard": "Keep the bow lowered and readable; do not add many arrows or motion streaks."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2350",
    "name": "Sleipnir",
    "title": "Eightfold Phantom Steed",
    "displayName": "Sleipnir — Eightfold Phantom Steed",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Monster / Beast Icons",
    "powerDomain": [
      "steed",
      "speed",
      "roads",
      "spirit travel"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "horseshoe"
    ],
    "presentationMode": "mystic",
    "characterCore": {
      "face": "beautiful adult phantom rider face, violet-gray eyes, swift seductive smile",
      "hair": "long silver-black hair in flowing rider waves",
      "outfit": "black and silver rider Valkyrie gown with fitted bodice, high slit, short fur cape, opaque strategic coverage",
      "body": "adult voluptuous agile hourglass build, elegant rider-like stance",
      "aura": "four pairs of tiny hoof-light marks behind shoulders as symbols only, no horse body",
      "extra": "Sleipnir — Eightfold Phantom Steed, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid silver horseshoe charm",
      "itemRole": "accessory_item",
      "itemFamily": "charm",
      "description": "a physically solid silver horseshoe charm with clear U-shape and small rune marks",
      "withItemPrompt": "holding a physically solid silver horseshoe charm near waist level, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "charm"
      ],
      "itemGuard": "Represent Sleipnir symbolically; no horse body, no extra legs, no confusing anatomy."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  },
  {
    "id": "2351",
    "name": "Ratatoskr",
    "title": "Gossip Squirrel Messenger",
    "displayName": "Ratatoskr — Gossip Squirrel Messenger",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Monster / Beast Icons",
    "powerDomain": [
      "messenger",
      "gossip",
      "world tree",
      "speed"
    ],
    "tags": [
      "female",
      "glamour",
      "document_item",
      "letter"
    ],
    "presentationMode": "lifestyle",
    "characterCore": {
      "face": "playful beautiful adult messenger face, bright hazel eyes, teasing seductive smile",
      "hair": "long reddish-brown hair with small squirrel-ear shaped hair ornaments, clean waves",
      "outfit": "brown, cream, and gold messenger Valkyrie mini-cloak dress with fitted waist, high slit, opaque strategic coverage",
      "body": "adult voluptuous agile hourglass build, lively messenger posture",
      "aura": "small world-tree branch crescent behind shoulders, minimal",
      "extra": "Ratatoskr — Gossip Squirrel Messenger, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid sealed gossip letter",
      "itemRole": "document_item",
      "itemFamily": "letter",
      "description": "a physically solid folded parchment letter with a visible red wax seal",
      "withItemPrompt": "holding a physically solid sealed gossip letter near waist or shoulder, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "letter"
      ],
      "itemGuard": "Keep squirrel traits symbolic through hair ornaments and letter; no animal body, no tail clutter, no many letters."
    },
    "promptProfile": {
      "preferredFraming": [
        "waist_up",
        "thigh_up",
        "full_body"
      ],
      "preferredPoseCategories": [
        "glamour_showcase",
        "standing",
        "ceremonial"
      ],
      "avoidPoseCategories": [
        "instrument",
        "book_reading"
      ],
      "figurePreset": "glamour_voluptuous"
    }
  }
];

if (typeof window !== "undefined") {
  window.norseValkyrieDominionCharacters = norseValkyrieDominionCharacters;
}

if (typeof module !== "undefined") {
  module.exports = { norseValkyrieDominionCharacters };
}
