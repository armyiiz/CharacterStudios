// Norse Valkyrie Dominion Expansion 2 — Full Kingdom System
// Designed by Alice for CharacterUniverse.
// IDs: 2352–2401
// Theme: full Norse kingdom completion, Aesir/Vanir court, sun-moon branch, Valkyrie choir, Jotunn court, beast/forge/cursed icons.
// Main item rule: every personalItem is a simple physical object with clear silhouette.

export const norseValkyrieDominionExpansion2Characters = [
  {
    "id": "2352",
    "name": "Sigyn",
    "title": "Loyal Cupbearer of Sorrow",
    "displayName": "Sigyn — Loyal Cupbearer of Sorrow",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Aesir / Vanir Court Completion",
    "powerDomain": [
      "loyalty",
      "sorrow",
      "endurance",
      "mercy"
    ],
    "tags": [
      "female",
      "glamour",
      "daily_item",
      "cup",
      "tragic"
    ],
    "presentationMode": "ceremonial",
    "characterCore": {
      "face": "gentle beautiful adult loyal goddess face, tear-bright blue eyes, soft sorrowful seductive smile",
      "hair": "long ash-blonde hair in loose braided waves",
      "outfit": "deep blue and silver Norse loyalty gown with fitted corset bodice, high slit, fur shoulder cape, opaque strategic coverage",
      "body": "adult voluptuous graceful hourglass build, devoted protective posture",
      "aura": "one small pale-blue sorrow halo behind shoulders, clean and restrained",
      "extra": "Sigyn — Loyal Cupbearer of Sorrow, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid silver cup",
      "itemRole": "daily_item",
      "itemFamily": "cup",
      "description": "a physically solid silver cup with visible rim, bowl, stem, and base",
      "withItemPrompt": "holding a physically solid silver cup near waist level, not covering face, chest, or silhouette",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "cup",
        "physically",
        "solid",
        "silver"
      ],
      "itemGuard": "Keep the cup solid and simple; no dripping poison, no body restraint, no heavy tragedy scene."
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
    "id": "2353",
    "name": "Forseti",
    "title": "Silver Judge of Peace",
    "displayName": "Forseti — Silver Judge of Peace",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Aesir / Vanir Court Completion",
    "powerDomain": [
      "justice",
      "peace",
      "law",
      "mediation"
    ],
    "tags": [
      "female",
      "glamour",
      "ritual_item",
      "scales",
      "regal"
    ],
    "presentationMode": "regal",
    "characterCore": {
      "face": "calm beautiful adult judge goddess face, clear gray eyes, composed seductive authority",
      "hair": "long pale silver hair tied with navy ribbons",
      "outfit": "white, navy, and silver law-court Valkyrie gown with fitted bodice, high slit, fur-trimmed mantle, opaque strategic coverage",
      "body": "adult voluptuous statuesque hourglass build, balanced judicial posture",
      "aura": "small silver law-rune circle behind shoulders, no courtroom clutter",
      "extra": "Forseti — Silver Judge of Peace, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid small silver balance scale",
      "itemRole": "ritual_item",
      "itemFamily": "scales",
      "description": "a physically solid small silver balance scale with visible central post, crossbar, and two pans",
      "withItemPrompt": "holding a physically solid small silver balance scale near waist level, pans visible, not covering face or body",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "scales",
        "physically",
        "solid",
        "small"
      ],
      "itemGuard": "Keep the scale compact and readable; no many papers, no large courtroom background."
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
    "id": "2354",
    "name": "Ullr",
    "title": "Snowbow Huntress",
    "displayName": "Ullr — Snowbow Huntress",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Aesir / Vanir Court Completion",
    "powerDomain": [
      "snow",
      "archery",
      "duel",
      "hunting"
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
      "face": "icy beautiful adult snow huntress face, pale green eyes, confident seductive focus",
      "hair": "long white-blonde hair in a thick warrior braid",
      "outfit": "dark blue and white snow hunter Valkyrie outfit with fitted bodice, high slit, fur hooded cape, opaque strategic coverage",
      "body": "adult voluptuous athletic hourglass build, poised archer stance",
      "aura": "small snow rune crescent behind shoulders, no blizzard",
      "extra": "Ullr — Snowbow Huntress, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically rigid pale wooden bow",
      "itemRole": "weapon",
      "itemFamily": "bow",
      "description": "a physically rigid pale wooden bow with visible grip, curved limbs, and bowstring",
      "withItemPrompt": "holding a physically rigid pale wooden bow lowered beside her body, not aiming across face or chest",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "bow",
        "physically",
        "rigid",
        "pale"
      ],
      "itemGuard": "Keep the bow lowered and readable; avoid snowstorm clutter and too many arrows."
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
    "id": "2355",
    "name": "Saga",
    "title": "Keeper of the Drinking Hall",
    "displayName": "Saga — Keeper of the Drinking Hall",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Aesir / Vanir Court Completion",
    "powerDomain": [
      "history",
      "story",
      "mead hall",
      "memory"
    ],
    "tags": [
      "female",
      "glamour",
      "document_item",
      "book",
      "scholarly"
    ],
    "presentationMode": "scholarly",
    "characterCore": {
      "face": "warm beautiful adult historian goddess face, amber eyes, knowing seductive smile",
      "hair": "long chestnut hair with gold bead braids",
      "outfit": "wine-red and cream mead-hall scholar gown with fitted waist, high slit, fur shoulder wrap, opaque strategic coverage",
      "body": "adult voluptuous refined hourglass build, elegant storyteller posture",
      "aura": "small amber memory-rune arc behind shoulders, restrained",
      "extra": "Saga — Keeper of the Drinking Hall, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid brown saga book",
      "itemRole": "document_item",
      "itemFamily": "book",
      "description": "a physically solid brown book with visible cover, spine, and small gold clasp",
      "withItemPrompt": "holding a physically solid brown saga book near waist level, not covering face or body",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "book",
        "physically",
        "solid",
        "brown"
      ],
      "itemGuard": "Keep the book closed or partly open and readable; avoid many floating pages."
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
    "id": "2356",
    "name": "Fulla",
    "title": "Golden Casket Handmaiden",
    "displayName": "Fulla — Golden Casket Handmaiden",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Aesir / Vanir Court Completion",
    "powerDomain": [
      "secrets",
      "service",
      "treasure",
      "queen attendant"
    ],
    "tags": [
      "female",
      "glamour",
      "daily_item",
      "box",
      "lifestyle"
    ],
    "presentationMode": "lifestyle",
    "characterCore": {
      "face": "beautiful adult golden handmaiden face, honey-brown eyes, discreet seductive smile",
      "hair": "long golden-brown hair in polished maid-like braids",
      "outfit": "black, ivory, and gold royal handmaiden dress with fitted bodice, high slit, fur-trimmed apron cape, opaque strategic coverage",
      "body": "adult voluptuous elegant hourglass build, precise attendant posture",
      "aura": "small gold key-rune glow behind shoulders, minimal",
      "extra": "Fulla — Golden Casket Handmaiden, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid small gold casket box",
      "itemRole": "daily_item",
      "itemFamily": "box",
      "description": "a physically solid small gold casket box with visible lid, hinge, and simple lock",
      "withItemPrompt": "holding a physically solid small gold casket box near waist level, not covering face or silhouette",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "box",
        "physically",
        "solid",
        "small"
      ],
      "itemGuard": "Keep the box small and solid; do not open it into glowing smoke or treasure clutter."
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
    "id": "2357",
    "name": "Gna",
    "title": "Sky-Riding Messenger",
    "displayName": "Gna — Sky-Riding Messenger",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Aesir / Vanir Court Completion",
    "powerDomain": [
      "messenger",
      "sky",
      "speed",
      "travel"
    ],
    "tags": [
      "female",
      "glamour",
      "document_item",
      "letter",
      "travel"
    ],
    "presentationMode": "lifestyle",
    "characterCore": {
      "face": "bright beautiful adult sky messenger face, blue-gold eyes, lively seductive smile",
      "hair": "long sky-blonde hair in wind-grouped waves",
      "outfit": "white, cobalt, and gold messenger Valkyrie coat-dress with high slit, fur collar, opaque strategic coverage",
      "body": "adult voluptuous agile hourglass build, swift messenger stance",
      "aura": "thin sky-blue speed arc behind shoulders, no flying horse",
      "extra": "Gna — Sky-Riding Messenger, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid sealed blue letter",
      "itemRole": "document_item",
      "itemFamily": "letter",
      "description": "a physically solid folded blue letter with visible wax seal",
      "withItemPrompt": "holding a physically solid sealed blue letter near shoulder or waist level, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "letter",
        "physically",
        "solid",
        "sealed"
      ],
      "itemGuard": "Represent travel through letter and sky arc only; no full horse, wings, or motion clutter."
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
    "id": "2358",
    "name": "Lofn",
    "title": "Bride-Blessing Whisperer",
    "displayName": "Lofn — Bride-Blessing Whisperer",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Aesir / Vanir Court Completion",
    "powerDomain": [
      "love",
      "permission",
      "marriage",
      "blessing"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "ring"
    ],
    "presentationMode": "glamour",
    "characterCore": {
      "face": "soft beautiful adult blessing goddess face, rose-pink eyes, tender seductive smile",
      "hair": "long pale pink-blonde hair in soft thick waves",
      "outfit": "ivory, rose, and gold bridal Valkyrie gown with corset lift, high slit, sheer veil with opaque coverage",
      "body": "adult voluptuous romantic hourglass build, gentle blessing posture",
      "aura": "small rose-gold heart rune halo behind shoulders, restrained",
      "extra": "Lofn — Bride-Blessing Whisperer, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid gold wedding ring",
      "itemRole": "accessory_item",
      "itemFamily": "ring",
      "description": "a physically solid large gold ring held between fingers, clear circular shape and small jewel",
      "withItemPrompt": "holding a physically solid gold wedding ring near chest or waist level, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "ring",
        "physically",
        "solid",
        "gold"
      ],
      "itemGuard": "Keep it to one large readable ring; avoid many hearts, petals, or floating jewelry."
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
    "id": "2359",
    "name": "Sjofn",
    "title": "Softener of Hearts",
    "displayName": "Sjofn — Softener of Hearts",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Aesir / Vanir Court Completion",
    "powerDomain": [
      "affection",
      "peace",
      "desire",
      "emotional magic"
    ],
    "tags": [
      "female",
      "glamour",
      "ritual_item",
      "flower"
    ],
    "presentationMode": "glamour",
    "characterCore": {
      "face": "beautiful adult affection goddess face, warm violet eyes, inviting seductive smile",
      "hair": "long lavender-brown hair in smooth luxurious waves",
      "outfit": "soft mauve, cream, and gold Norse glamour dress with fitted waist, high slit, fur capelet, opaque strategic coverage",
      "body": "adult voluptuous lush hourglass build, approachable magnetic posture",
      "aura": "small soft-pink affection halo behind shoulders, minimal",
      "extra": "Sjofn — Softener of Hearts, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid pink rose",
      "itemRole": "ritual_item",
      "itemFamily": "flower",
      "description": "a physically solid pink rose with visible stem, leaves, and flower head",
      "withItemPrompt": "holding a physically solid pink rose near shoulder or waist level, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "flower",
        "physically",
        "solid",
        "pink"
      ],
      "itemGuard": "Keep the rose as one simple object; avoid petal storms or perfume mist covering body."
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
    "id": "2360",
    "name": "Var",
    "title": "Oath Witness Maiden",
    "displayName": "Var — Oath Witness Maiden",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Aesir / Vanir Court Completion",
    "powerDomain": [
      "oaths",
      "contracts",
      "truth",
      "witness"
    ],
    "tags": [
      "female",
      "glamour",
      "document_item",
      "scroll",
      "regal"
    ],
    "presentationMode": "regal",
    "characterCore": {
      "face": "stern beautiful adult oath witness face, icy blue eyes, serious seductive gaze",
      "hair": "long dark blonde hair with silver oath ribbons",
      "outfit": "navy, white, and silver oath-keeper gown armor with high slit, fur mantle, opaque strategic coverage",
      "body": "adult voluptuous regal hourglass build, upright formal posture",
      "aura": "small silver oath-rune halo behind shoulders, no floating text",
      "extra": "Var — Oath Witness Maiden, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid white oath scroll",
      "itemRole": "document_item",
      "itemFamily": "scroll",
      "description": "a physically solid rolled white scroll with visible wooden rods and blue ribbon seal",
      "withItemPrompt": "holding a physically solid white oath scroll near waist level, not covering face or torso",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "scroll",
        "physically",
        "solid",
        "white"
      ],
      "itemGuard": "Keep the scroll rolled and readable; avoid text walls or floating contract pages."
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
    "id": "2361",
    "name": "Vor",
    "title": "All-Knowing Quiet One",
    "displayName": "Vor — All-Knowing Quiet One",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Aesir / Vanir Court Completion",
    "powerDomain": [
      "wisdom",
      "secrets",
      "perception",
      "silence"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "mirror",
      "mystic"
    ],
    "presentationMode": "mystic",
    "characterCore": {
      "face": "quiet beautiful adult knowing goddess face, deep gray eyes, subtle seductive smile",
      "hair": "long charcoal-gray hair with silver streaks, sleek waves",
      "outfit": "black, silver, and pearl wisdom gown with fitted bodice, high slit, fur-lined shawl, opaque strategic coverage",
      "body": "adult voluptuous refined hourglass build, quiet observer posture",
      "aura": "small silver eye-rune crescent behind shoulders, restrained",
      "extra": "Vor — All-Knowing Quiet One, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid silver hand mirror",
      "itemRole": "accessory_item",
      "itemFamily": "mirror",
      "description": "a physically solid silver hand mirror with visible handle and oval reflective face",
      "withItemPrompt": "holding a physically solid silver hand mirror near waist or shoulder level, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "mirror",
        "physically",
        "solid",
        "silver"
      ],
      "itemGuard": "Keep the mirror simple; no duplicate face, portal, or reflection clutter."
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
    "id": "2362",
    "name": "Snotra",
    "title": "Graceful Wisdom Lady",
    "displayName": "Snotra — Graceful Wisdom Lady",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Aesir / Vanir Court Completion",
    "powerDomain": [
      "wisdom",
      "manners",
      "grace",
      "etiquette"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "fan",
      "lifestyle"
    ],
    "presentationMode": "lifestyle",
    "characterCore": {
      "face": "polished beautiful adult etiquette goddess face, pale green eyes, refined seductive smile",
      "hair": "long pearl-blonde hair in elegant waves",
      "outfit": "ivory, sage, and gold noble Norse gown with fitted waist, high slit, fur-trimmed capelet, opaque strategic coverage",
      "body": "adult voluptuous graceful hourglass build, elegant salon posture",
      "aura": "small sage-gold wisdom halo behind shoulders, minimal",
      "extra": "Snotra — Graceful Wisdom Lady, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid ivory folding fan",
      "itemRole": "accessory_item",
      "itemFamily": "fan",
      "description": "a physically solid ivory folding fan with visible ribs and folded fabric edge",
      "withItemPrompt": "holding a physically solid ivory folding fan near waist or shoulder, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "fan",
        "physically",
        "solid",
        "ivory"
      ],
      "itemGuard": "Keep the fan readable and compact; no many feathers or lace noise."
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
    "id": "2363",
    "name": "Hlin",
    "title": "Shield of the Queen",
    "displayName": "Hlin — Shield of the Queen",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Aesir / Vanir Court Completion",
    "powerDomain": [
      "protection",
      "mercy",
      "royal guard",
      "refuge"
    ],
    "tags": [
      "female",
      "glamour",
      "weapon",
      "shield",
      "combat"
    ],
    "presentationMode": "combat",
    "characterCore": {
      "face": "protective beautiful adult guard goddess face, blue-gray eyes, calm seductive determination",
      "hair": "long dark brown hair with silver guard braids",
      "outfit": "dark silver and white royal shieldmaiden dress armor with high slit, fur mantle, opaque strategic coverage",
      "body": "adult voluptuous athletic hourglass build, guardian stance",
      "aura": "small white protection halo behind shoulders, clean",
      "extra": "Hlin — Shield of the Queen, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid round white shield",
      "itemRole": "weapon",
      "itemFamily": "shield",
      "description": "a physically solid round white shield with visible rim, central boss, and back handle",
      "withItemPrompt": "holding a physically solid round white shield beside her body, not covering face or full torso",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "shield",
        "physically",
        "solid",
        "round"
      ],
      "itemGuard": "Keep the shield medium-sized and readable; no large wall shield blocking the body."
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
    "id": "2364",
    "name": "Sol",
    "title": "Sun Chariot Lady",
    "displayName": "Sol — Sun Chariot Lady",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Sun / Moon / Day / Night Branch",
    "powerDomain": [
      "sun",
      "chariot",
      "radiance",
      "daylight"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "fan",
      "aura_effect"
    ],
    "presentationMode": "glamour",
    "characterCore": {
      "face": "radiant beautiful adult sun goddess face, golden eyes, confident dazzling seductive smile",
      "hair": "long bright golden hair in thick sunlit waves",
      "outfit": "white, gold, and orange sun Valkyrie gown with corset bodice, high slit, fur-gold capelet, opaque strategic coverage",
      "body": "adult voluptuous luminous hourglass build, radiant queen posture",
      "aura": "small clean sun disk halo behind shoulders, no giant chariot",
      "extra": "Sol — Sun Chariot Lady, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid gold sun-disk fan",
      "itemRole": "accessory_item",
      "itemFamily": "fan",
      "description": "a physically solid round gold fan shaped like a simple sun disk with visible handle",
      "withItemPrompt": "holding a physically solid gold sun-disk fan near waist or shoulder level, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "fan",
        "physically",
        "solid",
        "gold"
      ],
      "itemGuard": "Use fan and small sun halo only; no full chariot, horses, or blinding flare."
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
    "id": "2365",
    "name": "Mani",
    "title": "Moon-Wheel Sister",
    "displayName": "Mani — Moon-Wheel Sister",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Sun / Moon / Day / Night Branch",
    "powerDomain": [
      "moon",
      "night travel",
      "cycles",
      "silver light"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "mirror",
      "mystic"
    ],
    "presentationMode": "mystic",
    "characterCore": {
      "face": "ethereal beautiful adult moon goddess face, silver-blue eyes, calm seductive gaze",
      "hair": "long midnight-blue hair with silver-white tips, smooth waves",
      "outfit": "black, silver, and moon-blue gown with fitted bodice, high slit, fur-trimmed veil, opaque strategic coverage",
      "body": "adult voluptuous elegant hourglass build, lunar oracle posture",
      "aura": "small crescent moon halo behind shoulders, restrained",
      "extra": "Mani — Moon-Wheel Sister, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid silver moon hand mirror",
      "itemRole": "accessory_item",
      "itemFamily": "mirror",
      "description": "a physically solid silver hand mirror with crescent engraving, clear handle and oval face",
      "withItemPrompt": "holding a physically solid silver moon hand mirror near waist level, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "mirror",
        "physically",
        "solid",
        "silver"
      ],
      "itemGuard": "Keep the mirror physical; moonlight stays as small background halo."
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
    "id": "2366",
    "name": "Dagr",
    "title": "Golden Daybreak Rider",
    "displayName": "Dagr — Golden Daybreak Rider",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Sun / Moon / Day / Night Branch",
    "powerDomain": [
      "day",
      "dawn",
      "clarity",
      "radiance"
    ],
    "tags": [
      "female",
      "glamour",
      "daily_item",
      "lantern"
    ],
    "presentationMode": "lifestyle",
    "characterCore": {
      "face": "bright beautiful adult daybreak goddess face, warm amber eyes, energetic seductive smile",
      "hair": "long sunrise-blonde hair with peach-gold highlights",
      "outfit": "cream, gold, and sky-blue daybreak rider dress with fitted bodice, high slit, short fur cape, opaque strategic coverage",
      "body": "adult voluptuous agile hourglass build, forward-moving confident posture",
      "aura": "thin dawn arc behind shoulders, clean",
      "extra": "Dagr — Golden Daybreak Rider, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid small gold lantern",
      "itemRole": "daily_item",
      "itemFamily": "lantern",
      "description": "a physically solid small gold lantern with visible handle, frame, and contained warm light",
      "withItemPrompt": "holding a physically solid small gold lantern near hip or waist, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "lantern",
        "physically",
        "solid",
        "small"
      ],
      "itemGuard": "Keep the lantern solid and contained; no full horse, sunrise scene, or light flare clutter."
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
    "id": "2367",
    "name": "Nott",
    "title": "Velvet Night Mother",
    "displayName": "Nott — Velvet Night Mother",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Sun / Moon / Day / Night Branch",
    "powerDomain": [
      "night",
      "dreams",
      "darkness",
      "rest"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "brooch",
      "regal"
    ],
    "presentationMode": "regal",
    "characterCore": {
      "face": "mature beautiful adult night mother face, deep violet eyes, serene seductive expression",
      "hair": "long black hair with faint silver star streaks, heavy waves",
      "outfit": "black velvet and silver night-queen gown with corset bodice, high slit, fur-trimmed dark veil, opaque strategic coverage",
      "body": "adult voluptuous mature hourglass build, calm maternal queen posture",
      "aura": "small starry night crescent behind shoulders, no starfield clutter",
      "extra": "Nott — Velvet Night Mother, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid black star brooch",
      "itemRole": "accessory_item",
      "itemFamily": "brooch",
      "description": "a physically solid black brooch shaped like an eight-pointed star with a small silver gem",
      "withItemPrompt": "holding or displaying a physically solid black star brooch on her shoulder mantle, clearly visible, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "brooch",
        "physically",
        "solid",
        "black"
      ],
      "itemGuard": "Keep the brooch as a real fastener; do not turn it into a floating star portal."
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
    "id": "2368",
    "name": "Jord",
    "title": "Earth Mother of Thunder",
    "displayName": "Jord — Earth Mother of Thunder",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Sun / Moon / Day / Night Branch",
    "powerDomain": [
      "earth",
      "motherhood",
      "stone",
      "thunder kin"
    ],
    "tags": [
      "female",
      "glamour",
      "ritual_item",
      "stone flower"
    ],
    "presentationMode": "ceremonial",
    "characterCore": {
      "face": "beautiful mature earth mother face, moss-green eyes, warm powerful seductive smile",
      "hair": "long dark brown hair with copper and green highlights, thick waves",
      "outfit": "earth-green and bronze mother-goddess gown with fitted waist, high slit, fur shawl, opaque strategic coverage",
      "body": "adult voluptuous maternal hourglass build, grounded powerful posture",
      "aura": "small earth-rune crescent behind shoulders, no landscape",
      "extra": "Jord — Earth Mother of Thunder, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid green stone flower",
      "itemRole": "ritual_item",
      "itemFamily": "flower",
      "description": "a physically solid green stone flower with visible stem, carved petals, and leaf shape",
      "withItemPrompt": "holding a physically solid green stone flower near waist or chest level, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "flower",
        "physically",
        "solid",
        "green"
      ],
      "itemGuard": "Keep it as one carved stone flower; no vines wrapping body or terrain clutter."
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
    "id": "2369",
    "name": "Bil",
    "title": "Moon-Pail Wanderer",
    "displayName": "Bil — Moon-Pail Wanderer",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Sun / Moon / Day / Night Branch",
    "powerDomain": [
      "moon",
      "water",
      "wandering",
      "childhood myth"
    ],
    "tags": [
      "female",
      "glamour",
      "daily_item",
      "pail"
    ],
    "presentationMode": "lifestyle",
    "characterCore": {
      "face": "gentle beautiful adult moon wanderer face, pale blue eyes, curious seductive smile",
      "hair": "long silver-brown hair in soft waves",
      "outfit": "soft gray, blue, and cream traveler goddess dress with fitted waist, high slit, fur-lined travel cape, opaque strategic coverage",
      "body": "adult voluptuous graceful hourglass build, quiet wandering posture",
      "aura": "small pale moon-water arc behind shoulders, minimal",
      "extra": "Bil — Moon-Pail Wanderer, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid small silver water pail",
      "itemRole": "daily_item",
      "itemFamily": "pail",
      "description": "a physically solid small silver pail with visible handle, rim, and simple cylindrical body",
      "withItemPrompt": "holding a physically solid small silver water pail near hip level, not covering face or body",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "pail",
        "physically",
        "solid",
        "small"
      ],
      "itemGuard": "Keep the pail simple and solid; no water splashes or childish proportions."
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
    "id": "2370",
    "name": "Skinfaxi",
    "title": "Golden-Mane Dawn Herald",
    "displayName": "Skinfaxi — Golden-Mane Dawn Herald",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Sun / Moon / Day / Night Branch",
    "powerDomain": [
      "dawn",
      "golden mane",
      "heraldry",
      "light"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "comb"
    ],
    "presentationMode": "glamour",
    "characterCore": {
      "face": "beautiful adult dawn herald face, golden-green eyes, confident warm smile",
      "hair": "very long golden mane-like hair in thick grouped waves",
      "outfit": "gold, white, and pale blue herald Valkyrie gown with fitted bodice, high slit, short fur cape, opaque strategic coverage",
      "body": "adult voluptuous radiant hourglass build, heraldic glamour posture",
      "aura": "small dawn mane halo behind shoulders, no horse body",
      "extra": "Skinfaxi — Golden-Mane Dawn Herald, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid gold hair comb",
      "itemRole": "accessory_item",
      "itemFamily": "comb",
      "description": "a physically solid gold hair comb with visible teeth and simple sun engraving",
      "withItemPrompt": "holding a physically solid gold hair comb near shoulder or waist level, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "comb",
        "physically",
        "solid",
        "gold"
      ],
      "itemGuard": "Represent golden mane through hair and comb only; no horse body or extra animal features."
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
    "id": "2371",
    "name": "Hrimfaxi",
    "title": "Frost-Mane Night Herald",
    "displayName": "Hrimfaxi — Frost-Mane Night Herald",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Sun / Moon / Day / Night Branch",
    "powerDomain": [
      "night",
      "frost",
      "mist",
      "heraldry"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "comb"
    ],
    "presentationMode": "mystic",
    "characterCore": {
      "face": "cool beautiful adult frost-night herald face, silver-gray eyes, quiet seductive smile",
      "hair": "long frost-white hair with midnight-blue underlayer, thick waves",
      "outfit": "midnight blue and silver frost herald gown with fitted bodice, high slit, fur mantle, opaque strategic coverage",
      "body": "adult voluptuous elegant hourglass build, silent herald posture",
      "aura": "small frost crescent behind shoulders, no fog cloud",
      "extra": "Hrimfaxi — Frost-Mane Night Herald, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid silver frost hair comb",
      "itemRole": "accessory_item",
      "itemFamily": "comb",
      "description": "a physically solid silver hair comb with visible teeth and small frost engraving",
      "withItemPrompt": "holding a physically solid silver frost hair comb near waist or shoulder, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "comb",
        "physically",
        "solid",
        "silver"
      ],
      "itemGuard": "Represent frost-mane through hair and comb only; no horse body, no thick mist."
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
    "id": "2372",
    "name": "Reginleif",
    "title": "Daughter of the Gods",
    "displayName": "Reginleif — Daughter of the Gods",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Valkyrie Expansion Choir",
    "powerDomain": [
      "valkyrie",
      "divine blood",
      "protection",
      "battle"
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
      "face": "noble beautiful adult divine Valkyrie face, bright blue eyes, confident seductive smile",
      "hair": "long platinum hair with gold braid rings",
      "outfit": "white, gold, and steel divine Valkyrie armor dress with high slit, fur cape, opaque strategic coverage",
      "body": "adult voluptuous athletic hourglass build, divine battle stance",
      "aura": "small gold divine rune halo behind shoulders",
      "extra": "Reginleif — Daughter of the Gods, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically rigid gold-tipped spear",
      "itemRole": "weapon",
      "itemFamily": "spear",
      "description": "a physically rigid spear with visible shaft and gold leaf-shaped spearhead",
      "withItemPrompt": "holding a physically rigid gold-tipped spear vertically beside her body, spearhead visible, not crossing face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "spear",
        "physically",
        "rigid",
        "gold"
      ],
      "itemGuard": "Keep the spear simple and vertical; no battle crowd or excessive runes."
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
    "id": "2373",
    "name": "Herfjotur",
    "title": "Chain-Binder Valkyrie",
    "displayName": "Herfjotur — Chain-Binder Valkyrie",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Valkyrie Expansion Choir",
    "powerDomain": [
      "binding",
      "battlefield control",
      "valkyrie",
      "restraint"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "chain"
    ],
    "presentationMode": "combat",
    "characterCore": {
      "face": "dangerous beautiful adult chain Valkyrie face, steel-gray eyes, controlled seductive smile",
      "hair": "long dark silver hair in tight warrior waves",
      "outfit": "black and steel chain-motif Valkyrie dress armor with high slit, fur shoulder, opaque strategic coverage",
      "body": "adult voluptuous athletic hourglass build, poised controller stance",
      "aura": "small chain-link halo behind shoulders, clean",
      "extra": "Herfjotur — Chain-Binder Valkyrie, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid short silver chain",
      "itemRole": "accessory_item",
      "itemFamily": "chain",
      "description": "a physically solid short silver chain with a few large readable links",
      "withItemPrompt": "holding a physically solid short silver chain loosely near waist level, not wrapped around body or hands",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "chain",
        "physically",
        "solid",
        "short"
      ],
      "itemGuard": "Keep the chain short and symbolic; avoid bondage-like wrapping, tangles, or many chains."
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
    "id": "2374",
    "name": "Gondul",
    "title": "Wand-Bearer of War",
    "displayName": "Gondul — Wand-Bearer of War",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Valkyrie Expansion Choir",
    "powerDomain": [
      "war magic",
      "valkyrie",
      "runes",
      "command"
    ],
    "tags": [
      "female",
      "glamour",
      "ritual_item",
      "wand"
    ],
    "presentationMode": "mystic",
    "characterCore": {
      "face": "commanding beautiful adult war-mage Valkyrie face, violet-gray eyes, seductive strategic gaze",
      "hair": "long dark purple hair with silver braids",
      "outfit": "violet, black, and silver rune Valkyrie gown armor with high slit, fur mantle, opaque strategic coverage",
      "body": "adult voluptuous statuesque hourglass build, ritual commander posture",
      "aura": "small violet war-rune circle behind shoulders, no floating weapons",
      "extra": "Gondul — Wand-Bearer of War, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid silver rune wand",
      "itemRole": "ritual_item",
      "itemFamily": "wand",
      "description": "a physically solid short silver wand with visible handle and small rune cap",
      "withItemPrompt": "holding a physically solid silver rune wand near shoulder or waist level, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "wand",
        "physically",
        "solid",
        "silver"
      ],
      "itemGuard": "Keep the wand as a real object; rune glow stays behind shoulders."
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
    "id": "2375",
    "name": "Olrun",
    "title": "Ale-Rune Swan Maiden",
    "displayName": "Olrun — Ale-Rune Swan Maiden",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Valkyrie Expansion Choir",
    "powerDomain": [
      "ale runes",
      "swan maiden",
      "hospitality",
      "secret magic"
    ],
    "tags": [
      "female",
      "glamour",
      "daily_item",
      "cup"
    ],
    "presentationMode": "lifestyle",
    "characterCore": {
      "face": "beautiful adult swan Valkyrie face, pearl-blue eyes, warm seductive smile",
      "hair": "long white-blonde hair with small pearl braids",
      "outfit": "white, pale gold, and soft brown swan-maiden gown with fitted bodice, high slit, fur-feather shawl, opaque strategic coverage",
      "body": "adult voluptuous graceful hourglass build, elegant host posture",
      "aura": "small white feather-rune crescent behind shoulders",
      "extra": "Olrun — Ale-Rune Swan Maiden, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid carved wooden ale cup",
      "itemRole": "daily_item",
      "itemFamily": "cup",
      "description": "a physically solid carved wooden ale cup with visible rim and simple rune mark",
      "withItemPrompt": "holding a physically solid carved wooden ale cup near waist level, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "cup",
        "physically",
        "solid",
        "carved"
      ],
      "itemGuard": "Keep swan traits symbolic through feather shawl; no full swan body or feather storm."
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
    "id": "2376",
    "name": "Thrud",
    "title": "Thunder Daughter Shieldmaiden",
    "displayName": "Thrud — Thunder Daughter Shieldmaiden",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Valkyrie Expansion Choir",
    "powerDomain": [
      "thunder",
      "strength",
      "shieldmaiden",
      "divine daughter"
    ],
    "tags": [
      "female",
      "glamour",
      "weapon",
      "hammer"
    ],
    "presentationMode": "combat",
    "characterCore": {
      "face": "fierce beautiful adult thunder daughter face, storm-blue eyes, bold seductive grin",
      "hair": "long copper-gold hair in thick battle braids",
      "outfit": "black, bronze, and storm-gold shieldmaiden armor dress with high slit, fur cape, opaque strategic coverage",
      "body": "adult voluptuous powerful athletic hourglass build, confident heavy stance",
      "aura": "small lightning crescent behind shoulders, no storm clutter",
      "extra": "Thrud — Thunder Daughter Shieldmaiden, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid short bronze hammer",
      "itemRole": "weapon",
      "itemFamily": "hammer",
      "description": "a physically solid short bronze hammer with visible handle and rectangular head",
      "withItemPrompt": "holding a physically solid short bronze hammer lowered beside her hip, not covering torso or face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "hammer",
        "physically",
        "solid",
        "short"
      ],
      "itemGuard": "Keep hammer compact and physical; lightning remains behind shoulders."
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
    "id": "2377",
    "name": "Svava",
    "title": "Sleeping Hero’s Valkyrie",
    "displayName": "Svava — Sleeping Hero’s Valkyrie",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Valkyrie Expansion Choir",
    "powerDomain": [
      "sleeping hero",
      "protection",
      "memory",
      "valkyrie"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "cloak pin"
    ],
    "presentationMode": "ceremonial",
    "characterCore": {
      "face": "soft beautiful adult guardian Valkyrie face, sleepy blue eyes, tender seductive calm",
      "hair": "long pale gold hair in loose waves",
      "outfit": "pale blue, white, and silver guardian Valkyrie gown with high slit, fur mantle, opaque strategic coverage",
      "body": "adult voluptuous graceful hourglass build, protective dreamlike posture",
      "aura": "small sleeping-star halo behind shoulders, restrained",
      "extra": "Svava — Sleeping Hero’s Valkyrie, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid silver cloak pin",
      "itemRole": "accessory_item",
      "itemFamily": "brooch",
      "description": "a physically solid silver cloak pin shaped like a small star with visible clasp",
      "withItemPrompt": "holding or displaying a physically solid silver cloak pin fastening her mantle, clearly visible, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "brooch",
        "physically",
        "solid",
        "silver"
      ],
      "itemGuard": "Keep the pin as a small real brooch; no sleeping body or dream clutter."
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
    "id": "2378",
    "name": "Hervor Alvitr",
    "title": "All-Wise Swan Valkyrie",
    "displayName": "Hervor Alvitr — All-Wise Swan Valkyrie",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Valkyrie Expansion Choir",
    "powerDomain": [
      "wisdom",
      "swan maiden",
      "valkyrie",
      "memory"
    ],
    "tags": [
      "female",
      "glamour",
      "document_item",
      "scroll"
    ],
    "presentationMode": "scholarly",
    "characterCore": {
      "face": "wise beautiful adult swan Valkyrie face, pale gray eyes, composed seductive smile",
      "hair": "long silver-white hair with braided pearl loops",
      "outfit": "white and silver scholar Valkyrie gown armor with high slit, feather-fur capelet, opaque strategic coverage",
      "body": "adult voluptuous refined hourglass build, intelligent poised posture",
      "aura": "small silver feather rune behind shoulders",
      "extra": "Hervor Alvitr — All-Wise Swan Valkyrie, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid white wisdom scroll",
      "itemRole": "document_item",
      "itemFamily": "scroll",
      "description": "a physically solid rolled white scroll with visible rods and silver ribbon",
      "withItemPrompt": "holding a physically solid white wisdom scroll near waist level, not covering face or body",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "scroll",
        "physically",
        "solid",
        "white"
      ],
      "itemGuard": "Keep scroll rolled and readable; no loose pages or full swan body."
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
    "id": "2379",
    "name": "Hlaðguðr Svanhvít",
    "title": "Swan-White Battle Maiden",
    "displayName": "Hlaðguðr Svanhvít — Swan-White Battle Maiden",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Valkyrie Expansion Choir",
    "powerDomain": [
      "swan",
      "battle",
      "purity",
      "valkyrie"
    ],
    "tags": [
      "female",
      "glamour",
      "weapon",
      "sword"
    ],
    "presentationMode": "combat",
    "characterCore": {
      "face": "beautiful adult swan-white warrior face, ice-blue eyes, proud seductive focus",
      "hair": "long snow-white hair with silver battle braids",
      "outfit": "white and steel swan Valkyrie armor dress with high slit, fur-feather mantle, opaque strategic coverage",
      "body": "adult voluptuous athletic hourglass build, clean duelist stance",
      "aura": "small white wing-shaped crest behind shoulders, no full wings",
      "extra": "Hlaðguðr Svanhvít — Swan-White Battle Maiden, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically rigid straight silver sword",
      "itemRole": "weapon",
      "itemFamily": "sword",
      "description": "a physically rigid straight silver sword with visible handle, guard, and blade",
      "withItemPrompt": "holding a physically rigid straight silver sword lowered beside her body, not crossing face or chest",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "sword",
        "physically",
        "rigid",
        "straight"
      ],
      "itemGuard": "Keep swan motif as mantle/crest only; no full wings covering body."
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
    "id": "2380",
    "name": "Skalmold",
    "title": "Sword-Time Valkyrie",
    "displayName": "Skalmold — Sword-Time Valkyrie",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Valkyrie Expansion Choir",
    "powerDomain": [
      "sword age",
      "war",
      "fate of battle",
      "valkyrie"
    ],
    "tags": [
      "female",
      "glamour",
      "weapon",
      "sword"
    ],
    "presentationMode": "combat",
    "characterCore": {
      "face": "severe beautiful adult sword-time Valkyrie face, red-gray eyes, intense seductive glare",
      "hair": "long ash-black hair with red ribbon braids",
      "outfit": "black, red, and steel battle-age Valkyrie armor dress with high slit, fur mantle, opaque strategic coverage",
      "body": "adult voluptuous athletic hourglass build, decisive war posture",
      "aura": "small red battle-clock rune behind shoulders, restrained",
      "extra": "Skalmold — Sword-Time Valkyrie, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically rigid dark steel sword",
      "itemRole": "weapon",
      "itemFamily": "sword",
      "description": "a physically rigid dark steel sword with visible handle, guard, and simple blade",
      "withItemPrompt": "holding a physically rigid dark steel sword lowered beside the body, not crossing face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "sword",
        "physically",
        "rigid",
        "dark"
      ],
      "itemGuard": "Keep sword readable; no clock shards, blood spray, or battlefield clutter."
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
    "id": "2381",
    "name": "Hrund",
    "title": "Spear of the Shield-Wall",
    "displayName": "Hrund — Spear of the Shield-Wall",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Valkyrie Expansion Choir",
    "powerDomain": [
      "shield wall",
      "spear",
      "war choir",
      "discipline"
    ],
    "tags": [
      "female",
      "glamour",
      "weapon",
      "spear"
    ],
    "presentationMode": "combat",
    "characterCore": {
      "face": "disciplined beautiful adult shield-wall Valkyrie face, gray-blue eyes, focused seductive calm",
      "hair": "long steel-blonde hair in warrior braid",
      "outfit": "steel, navy, and white shield-wall Valkyrie armor dress with high slit, fur shoulder, opaque strategic coverage",
      "body": "adult voluptuous strong hourglass build, stable phalanx stance",
      "aura": "small shield-wall rune arc behind shoulders",
      "extra": "Hrund — Spear of the Shield-Wall, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically rigid steel spear",
      "itemRole": "weapon",
      "itemFamily": "spear",
      "description": "a physically rigid steel spear with visible shaft and leaf-shaped spearhead",
      "withItemPrompt": "holding a physically rigid steel spear vertical beside her body, spearhead visible, not crossing face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "spear",
        "physically",
        "rigid",
        "steel"
      ],
      "itemGuard": "Keep spear vertical and clean; do not add multiple background soldiers or shields."
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
    "id": "2382",
    "name": "Bestla",
    "title": "Mother of the High Gods",
    "displayName": "Bestla — Mother of the High Gods",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Jotunn / Giantess Deeper Court",
    "powerDomain": [
      "giantess",
      "motherhood",
      "ancestry",
      "wisdom"
    ],
    "tags": [
      "female",
      "glamour",
      "ritual_item",
      "stone"
    ],
    "presentationMode": "regal",
    "characterCore": {
      "face": "majestic beautiful mature giantess mother face, pale blue eyes, ancient seductive calm",
      "hair": "long white-brown hair in thick dignified waves",
      "outfit": "cream, stone-gray, and bronze giantess matriarch gown with fitted bodice, high slit, fur shawl, opaque strategic coverage",
      "body": "adult voluptuous mature statuesque hourglass build, ancestral queen posture",
      "aura": "small ancestral stone halo behind shoulders",
      "extra": "Bestla — Mother of the High Gods, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid gray ancestor stone",
      "itemRole": "ritual_item",
      "itemFamily": "stone",
      "description": "a physically solid gray oval stone with one carved rune mark",
      "withItemPrompt": "holding a physically solid gray ancestor stone near waist level, not covering face or body",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "stone",
        "physically",
        "solid",
        "gray"
      ],
      "itemGuard": "Keep the stone as one simple object; no giant landscape or body-size exaggeration."
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
    "id": "2383",
    "name": "Gunnlod",
    "title": "Mead-Vault Giantess",
    "displayName": "Gunnlod — Mead-Vault Giantess",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Jotunn / Giantess Deeper Court",
    "powerDomain": [
      "mead",
      "poetry",
      "guardianship",
      "giantess"
    ],
    "tags": [
      "female",
      "glamour",
      "daily_item",
      "cup"
    ],
    "presentationMode": "glamour",
    "characterCore": {
      "face": "beautiful adult mead-vault giantess face, amber eyes, tempting seductive smile",
      "hair": "long honey-brown hair with gold bead braids",
      "outfit": "amber, black, and gold vault-guardian gown with corset lift, high slit, fur mantle, opaque strategic coverage",
      "body": "adult voluptuous lush hourglass build, alluring vault-keeper posture",
      "aura": "small amber mead-rune glow behind shoulders",
      "extra": "Gunnlod — Mead-Vault Giantess, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid gold mead cup",
      "itemRole": "daily_item",
      "itemFamily": "cup",
      "description": "a physically solid gold mead cup with visible rim, bowl, stem, and base",
      "withItemPrompt": "holding a physically solid gold mead cup near waist or shoulder, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "cup",
        "physically",
        "solid",
        "gold"
      ],
      "itemGuard": "Keep the cup simple; no liquid splash, no huge vault background."
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
    "id": "2384",
    "name": "Hyrrokkin",
    "title": "Wolf-Rider Funeral Queen",
    "displayName": "Hyrrokkin — Wolf-Rider Funeral Queen",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Jotunn / Giantess Deeper Court",
    "powerDomain": [
      "giantess",
      "funeral fire",
      "wolf symbol",
      "strength"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "mask"
    ],
    "presentationMode": "villain",
    "characterCore": {
      "face": "powerful beautiful adult funeral giantess face, ember-gray eyes, dangerous seductive smile",
      "hair": "long black hair with ash-white streaks, heavy waves",
      "outfit": "black, ash, and bronze funeral queen gown armor with high slit, fur mantle, opaque strategic coverage",
      "body": "adult voluptuous powerful hourglass build, intimidating queen posture",
      "aura": "small funeral ember crescent behind shoulders, no corpse imagery",
      "extra": "Hyrrokkin — Wolf-Rider Funeral Queen, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid black wolf mask",
      "itemRole": "accessory_item",
      "itemFamily": "mask",
      "description": "a physically solid black wolf half-mask held in one hand with simple ears and snout",
      "withItemPrompt": "holding a physically solid black wolf mask near waist level, not covering her actual face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "mask",
        "physically",
        "solid",
        "black"
      ],
      "itemGuard": "Represent wolf-rider identity symbolically; no full wolf, corpse, funeral pyre, or gore."
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
    "id": "2385",
    "name": "Grid",
    "title": "Iron-Staff Giantess",
    "displayName": "Grid — Iron-Staff Giantess",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Jotunn / Giantess Deeper Court",
    "powerDomain": [
      "giantess",
      "protection",
      "iron",
      "hidden aid"
    ],
    "tags": [
      "female",
      "glamour",
      "ritual_item",
      "staff"
    ],
    "presentationMode": "combat",
    "characterCore": {
      "face": "stern beautiful adult iron giantess face, steel-blue eyes, protective seductive calm",
      "hair": "long dark gray hair with iron bead braids",
      "outfit": "charcoal, iron, and muted red giantess guardian gown armor with high slit, fur shoulder, opaque strategic coverage",
      "body": "adult voluptuous strong athletic hourglass build, grounded guardian posture",
      "aura": "small iron rune circle behind shoulders",
      "extra": "Grid — Iron-Staff Giantess, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically rigid iron staff",
      "itemRole": "ritual_item",
      "itemFamily": "staff",
      "description": "a physically rigid dark iron staff with visible long shaft and simple capped ends",
      "withItemPrompt": "holding a physically rigid iron staff vertical beside her body, not crossing face or torso",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "staff",
        "physically",
        "rigid",
        "iron"
      ],
      "itemGuard": "Keep staff plain and solid; no huge magic beam or metal debris."
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
    "id": "2386",
    "name": "Hrimgerd",
    "title": "Frost-Wave Troll Maiden",
    "displayName": "Hrimgerd — Frost-Wave Troll Maiden",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Jotunn / Giantess Deeper Court",
    "powerDomain": [
      "frost",
      "sea waves",
      "troll lineage",
      "night"
    ],
    "tags": [
      "female",
      "glamour",
      "daily_item",
      "shell"
    ],
    "presentationMode": "mystic",
    "characterCore": {
      "face": "cold beautiful adult frost-wave maiden face, pale teal eyes, eerie seductive smile",
      "hair": "long icy teal hair with white frost tips",
      "outfit": "dark teal and frost-white sea-frost gown with fitted bodice, high slit, fur collar, opaque strategic coverage",
      "body": "adult voluptuous elegant hourglass build, haunting shoreline posture",
      "aura": "small frost-wave crescent behind shoulders, no ocean scene",
      "extra": "Hrimgerd — Frost-Wave Troll Maiden, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid white shell",
      "itemRole": "daily_item",
      "itemFamily": "shell",
      "description": "a physically solid white shell with visible ridges and curved shape",
      "withItemPrompt": "holding a physically solid white shell near waist level, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "shell",
        "physically",
        "solid",
        "white"
      ],
      "itemGuard": "Keep shell simple; no ocean waves covering body or monster traits."
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
    "id": "2387",
    "name": "Sinmara",
    "title": "Flame Keeper of Muspel",
    "displayName": "Sinmara — Flame Keeper of Muspel",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Jotunn / Giantess Deeper Court",
    "powerDomain": [
      "fire",
      "Muspel",
      "keeper",
      "apocalypse"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "key"
    ],
    "presentationMode": "villain",
    "characterCore": {
      "face": "fiery beautiful adult flame keeper face, orange-red eyes, calm dangerous seductive gaze",
      "hair": "long black hair with copper flame tips, clean waves",
      "outfit": "black, bronze, and ember-red keeper gown armor with high slit, fur-dark mantle, opaque strategic coverage",
      "body": "adult voluptuous powerful hourglass build, keeper-of-gates posture",
      "aura": "small contained ember halo behind shoulders",
      "extra": "Sinmara — Flame Keeper of Muspel, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid bronze fire key",
      "itemRole": "accessory_item",
      "itemFamily": "key",
      "description": "a physically solid bronze key with clear handle, teeth, and tiny red jewel",
      "withItemPrompt": "holding a physically solid bronze fire key near waist or shoulder level, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "key",
        "physically",
        "solid",
        "bronze"
      ],
      "itemGuard": "Keep the key physical; fire glow is contained and behind shoulders, no firestorm."
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
    "id": "2388",
    "name": "Menglod",
    "title": "Healing Bride of Lyfjaberg",
    "displayName": "Menglod — Healing Bride of Lyfjaberg",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Jotunn / Giantess Deeper Court",
    "powerDomain": [
      "healing",
      "bride",
      "mountain sanctuary",
      "protection"
    ],
    "tags": [
      "female",
      "glamour",
      "tool_item",
      "vial"
    ],
    "presentationMode": "ceremonial",
    "characterCore": {
      "face": "beautiful adult healing bride face, soft green eyes, serene seductive smile",
      "hair": "long pale gold hair with green ribbons, smooth waves",
      "outfit": "white, green, and gold sanctuary bridal gown with corset lift, high slit, fur shawl, opaque strategic coverage",
      "body": "adult voluptuous romantic hourglass build, gentle healer posture",
      "aura": "small green healing halo behind shoulders",
      "extra": "Menglod — Healing Bride of Lyfjaberg, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid green medicine vial",
      "itemRole": "tool_item",
      "itemFamily": "vial",
      "description": "a physically solid small glass medicine vial with visible cork and contained green liquid",
      "withItemPrompt": "holding a physically solid green medicine vial near waist or chest level, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "vial",
        "physically",
        "solid",
        "green"
      ],
      "itemGuard": "Keep vial corked and readable; no liquid splash or hospital clutter."
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
    "id": "2389",
    "name": "Aurboda",
    "title": "Golden Mountain Mother",
    "displayName": "Aurboda — Golden Mountain Mother",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Jotunn / Giantess Deeper Court",
    "powerDomain": [
      "mountains",
      "gold",
      "motherhood",
      "giantess"
    ],
    "tags": [
      "female",
      "glamour",
      "daily_item",
      "coin pouch"
    ],
    "presentationMode": "regal",
    "characterCore": {
      "face": "beautiful mature mountain mother face, warm brown eyes, wealthy seductive smile",
      "hair": "long dark gold-brown hair with bronze ornaments",
      "outfit": "bronze, gold, and earth-brown mountain matriarch gown with high slit, fur mantle, opaque strategic coverage",
      "body": "adult voluptuous mature hourglass build, prosperous grounded posture",
      "aura": "small mountain-gold crest behind shoulders",
      "extra": "Aurboda — Golden Mountain Mother, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid small gold coin pouch",
      "itemRole": "daily_item",
      "itemFamily": "pouch",
      "description": "a physically solid small gold coin pouch with visible drawstring and a few large coins at the opening",
      "withItemPrompt": "holding a physically solid small gold coin pouch near waist level, not covering face or body",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "pouch",
        "physically",
        "solid",
        "small"
      ],
      "itemGuard": "Keep pouch compact; avoid coin rain or treasure pile clutter."
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
    "id": "2390",
    "name": "Garmr",
    "title": "Blood-Gate Hound Maiden",
    "displayName": "Garmr — Blood-Gate Hound Maiden",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Beast / Forge / Cursed Icons",
    "powerDomain": [
      "hound",
      "gatekeeping",
      "underworld",
      "blood omen"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "collar"
    ],
    "presentationMode": "villain",
    "characterCore": {
      "face": "fierce beautiful adult hound-gate maiden face, crimson eyes, predatory seductive grin",
      "hair": "long black hair with red streaks, wild grouped waves",
      "outfit": "black and dark red gate-warden gown armor with high slit, fur collar, opaque strategic coverage",
      "body": "adult voluptuous powerful hourglass build, guarded predator posture",
      "aura": "small red gate-rune crescent behind shoulders, no hound body",
      "extra": "Garmr — Blood-Gate Hound Maiden, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid black hound collar",
      "itemRole": "accessory_item",
      "itemFamily": "collar",
      "description": "a physically solid black hound collar held in one hand, with visible buckle and red gem",
      "withItemPrompt": "holding a physically solid black hound collar near waist level, not worn tightly and not covering body",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "collar",
        "physically",
        "solid",
        "black"
      ],
      "itemGuard": "Represent hound identity symbolically; no full dog body, no gore, no collar restraint on neck."
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
    "id": "2391",
    "name": "Skoll",
    "title": "Sun-Chasing Wolf Princess",
    "displayName": "Skoll — Sun-Chasing Wolf Princess",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Beast / Forge / Cursed Icons",
    "powerDomain": [
      "wolf",
      "sun chase",
      "eclipse",
      "hunger"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "mask"
    ],
    "presentationMode": "villain",
    "characterCore": {
      "face": "beautiful adult sun-chasing wolf princess face, golden wolf-like eyes, hungry seductive smile",
      "hair": "long golden-gray hair with black tips, thick waves",
      "outfit": "gold, black, and fur-gray wolf princess armor gown with high slit, opaque strategic coverage",
      "body": "adult voluptuous athletic hourglass build, chasing predator posture",
      "aura": "small sun-eclipse crescent behind shoulders, no wolf body",
      "extra": "Skoll — Sun-Chasing Wolf Princess, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid gold wolf mask",
      "itemRole": "accessory_item",
      "itemFamily": "mask",
      "description": "a physically solid gold wolf half-mask held in one hand with simple ears and snout shape",
      "withItemPrompt": "holding a physically solid gold wolf mask near shoulder or waist, not covering her actual face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "mask",
        "physically",
        "solid",
        "gold"
      ],
      "itemGuard": "Use mask only for wolf identity; no full wolf, no chasing scene, no sun explosion."
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
    "id": "2392",
    "name": "Hati",
    "title": "Moon-Chasing Wolf Princess",
    "displayName": "Hati — Moon-Chasing Wolf Princess",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Beast / Forge / Cursed Icons",
    "powerDomain": [
      "wolf",
      "moon chase",
      "night",
      "eclipse"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "mask"
    ],
    "presentationMode": "villain",
    "characterCore": {
      "face": "beautiful adult moon-chasing wolf princess face, silver wolf-like eyes, cool seductive smile",
      "hair": "long silver-gray hair with midnight-blue tips, heavy waves",
      "outfit": "silver, black, and moon-blue wolf princess gown armor with high slit, fur collar, opaque strategic coverage",
      "body": "adult voluptuous agile hourglass build, moonlit hunter posture",
      "aura": "small moon-eclipse crescent behind shoulders",
      "extra": "Hati — Moon-Chasing Wolf Princess, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid silver wolf mask",
      "itemRole": "accessory_item",
      "itemFamily": "mask",
      "description": "a physically solid silver wolf half-mask held in one hand with simple ears and snout shape",
      "withItemPrompt": "holding a physically solid silver wolf mask near waist or shoulder, not covering her actual face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "mask",
        "physically",
        "solid",
        "silver"
      ],
      "itemGuard": "Use mask only; no full wolf, no giant moon, no duplicate animal face."
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
    "id": "2393",
    "name": "Audhumla",
    "title": "Primordial Milk-Cow Saint",
    "displayName": "Audhumla — Primordial Milk-Cow Saint",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Beast / Forge / Cursed Icons",
    "powerDomain": [
      "primordial nourishment",
      "creation",
      "sacred beast",
      "gentleness"
    ],
    "tags": [
      "female",
      "glamour",
      "daily_item",
      "milk bottle"
    ],
    "presentationMode": "ceremonial",
    "characterCore": {
      "face": "gentle beautiful adult primordial saint face, soft brown eyes, nurturing seductive smile",
      "hair": "long cream-white hair with pale gold braids",
      "outfit": "ivory, cream, and gold sacred pastoral gown with fitted waist, high slit, fur-soft shawl, opaque strategic coverage",
      "body": "adult voluptuous maternal hourglass build, nurturing saint posture",
      "aura": "small cream-gold creation halo behind shoulders, no animal body",
      "extra": "Audhumla — Primordial Milk-Cow Saint, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid white milk bottle",
      "itemRole": "daily_item",
      "itemFamily": "bottle",
      "description": "a physically solid white glass milk bottle with visible neck, cap, and simple label",
      "withItemPrompt": "holding a physically solid white milk bottle near waist level, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "bottle",
        "physically",
        "solid",
        "white"
      ],
      "itemGuard": "Represent sacred cow identity through pastoral motifs only; no cow body, horns, or childish tone."
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
    "id": "2394",
    "name": "Huginn",
    "title": "Raven Thought Courier",
    "displayName": "Huginn — Raven Thought Courier",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Beast / Forge / Cursed Icons",
    "powerDomain": [
      "thought",
      "ravens",
      "messenger",
      "intelligence"
    ],
    "tags": [
      "female",
      "glamour",
      "document_item",
      "letter"
    ],
    "presentationMode": "scholarly",
    "characterCore": {
      "face": "sharp beautiful adult raven thought courier face, black-blue eyes, clever seductive smile",
      "hair": "long raven-black hair with blue sheen, sleek waves",
      "outfit": "black and silver raven courier dress-coat with high slit, fur-feather collar, opaque strategic coverage",
      "body": "adult voluptuous agile hourglass build, intelligent messenger posture",
      "aura": "one small raven silhouette behind shoulder, no flock",
      "extra": "Huginn — Raven Thought Courier, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid black sealed letter",
      "itemRole": "document_item",
      "itemFamily": "letter",
      "description": "a physically solid folded black letter with visible silver wax seal",
      "withItemPrompt": "holding a physically solid black sealed letter near shoulder or waist, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "letter",
        "physically",
        "solid",
        "black"
      ],
      "itemGuard": "Keep raven motif symbolic; no full flock, no feathers covering body."
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
    "id": "2395",
    "name": "Muninn",
    "title": "Raven Memory Courier",
    "displayName": "Muninn — Raven Memory Courier",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Beast / Forge / Cursed Icons",
    "powerDomain": [
      "memory",
      "ravens",
      "messenger",
      "past"
    ],
    "tags": [
      "female",
      "glamour",
      "document_item",
      "book"
    ],
    "presentationMode": "scholarly",
    "characterCore": {
      "face": "melancholic beautiful adult raven memory courier face, deep violet eyes, soft seductive gaze",
      "hair": "long black hair with violet sheen and silver braid pins",
      "outfit": "black, violet, and silver memory courier gown-coat with high slit, fur-feather capelet, opaque strategic coverage",
      "body": "adult voluptuous refined hourglass build, memory-keeper posture",
      "aura": "one small raven feather crescent behind shoulders",
      "extra": "Muninn — Raven Memory Courier, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid small black memory book",
      "itemRole": "document_item",
      "itemFamily": "book",
      "description": "a physically solid small black book with visible cover, spine, and silver clasp",
      "withItemPrompt": "holding a physically solid small black memory book near waist level, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "book",
        "physically",
        "solid",
        "small"
      ],
      "itemGuard": "Keep the book readable; no loose pages, raven flock, or memory fog clutter."
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
    "id": "2396",
    "name": "Andvari",
    "title": "Ring-Curse Dwarf Queen",
    "displayName": "Andvari — Ring-Curse Dwarf Queen",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Beast / Forge / Cursed Icons",
    "powerDomain": [
      "dwarf craft",
      "gold",
      "curse",
      "rings"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "ring"
    ],
    "presentationMode": "villain",
    "characterCore": {
      "face": "beautiful adult cursed gold dwarf-queen reinterpretation face, gold-green eyes, cunning seductive smile",
      "hair": "long dark gold hair with black streaks, compact thick waves",
      "outfit": "black and gold artisan queen dress with fitted corset, high slit, leather forge apron accents, opaque strategic coverage",
      "body": "adult voluptuous compact hourglass build, greedy elegant posture",
      "aura": "small gold curse-rune halo behind shoulders",
      "extra": "Andvari — Ring-Curse Dwarf Queen, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid gold cursed ring",
      "itemRole": "accessory_item",
      "itemFamily": "ring",
      "description": "a physically solid large gold ring held between fingers, clear circular shape and simple rune engraving",
      "withItemPrompt": "holding a physically solid large gold cursed ring near waist or chest, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "ring",
        "physically",
        "solid",
        "gold"
      ],
      "itemGuard": "Keep it to one ring; avoid piles of gold, many rings, or curse smoke covering body."
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
    "id": "2397",
    "name": "Fafnir",
    "title": "Gold-Hoard Dragoness",
    "displayName": "Fafnir — Gold-Hoard Dragoness",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Beast / Forge / Cursed Icons",
    "powerDomain": [
      "dragon",
      "gold hoard",
      "curse",
      "greed"
    ],
    "tags": [
      "female",
      "glamour",
      "accessory_item",
      "brooch"
    ],
    "presentationMode": "villain",
    "characterCore": {
      "face": "dangerously beautiful adult gold-hoard dragoness face, emerald-gold eyes, possessive seductive smile",
      "hair": "long dark green hair with gold tips, glossy waves",
      "outfit": "black, emerald, and gold dragon-hoard gown armor with high slit, subtle scale accents, opaque strategic coverage",
      "body": "adult voluptuous powerful hourglass build, possessive boss posture",
      "aura": "small gold dragon-crest halo behind shoulders, no full dragon body",
      "extra": "Fafnir — Gold-Hoard Dragoness, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid gold dragon brooch",
      "itemRole": "accessory_item",
      "itemFamily": "brooch",
      "description": "a physically solid gold brooch shaped like a simple dragon head with green gem eye",
      "withItemPrompt": "holding or displaying a physically solid gold dragon brooch on her chest or shoulder mantle, clearly visible",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "brooch",
        "physically",
        "solid",
        "gold"
      ],
      "itemGuard": "Represent dragon identity with brooch and subtle scale accents only; no wings, tail, or full dragon."
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
    "id": "2398",
    "name": "Regin",
    "title": "Swordsmith of Betrayal",
    "displayName": "Regin — Swordsmith of Betrayal",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Beast / Forge / Cursed Icons",
    "powerDomain": [
      "smithing",
      "betrayal",
      "sword craft",
      "runes"
    ],
    "tags": [
      "female",
      "glamour",
      "tool_item",
      "hammer"
    ],
    "presentationMode": "professional",
    "characterCore": {
      "face": "cool beautiful adult swordsmith face, amber-gray eyes, sly seductive focus",
      "hair": "long ash-brown hair tied back with metal pins",
      "outfit": "dark leather and steel forge artisan dress with fitted bodice, high slit, apron belt, opaque strategic coverage",
      "body": "adult voluptuous strong hourglass build, artisan stance",
      "aura": "small orange forge-rune glow behind shoulders, no forge background",
      "extra": "Regin — Swordsmith of Betrayal, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid small forge hammer",
      "itemRole": "tool_item",
      "itemFamily": "hammer",
      "description": "a physically solid small forge hammer with visible wooden handle and metal head",
      "withItemPrompt": "holding a physically solid small forge hammer near waist level, not covering face or body",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "hammer",
        "physically",
        "solid",
        "small"
      ],
      "itemGuard": "Keep hammer as a tool, not a giant weapon; no sparks covering hands."
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
    "id": "2399",
    "name": "Brokkr",
    "title": "Black Forge Artisan",
    "displayName": "Brokkr — Black Forge Artisan",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Beast / Forge / Cursed Icons",
    "powerDomain": [
      "forge",
      "craft",
      "black iron",
      "competition"
    ],
    "tags": [
      "female",
      "glamour",
      "tool_item",
      "tongs"
    ],
    "presentationMode": "professional",
    "characterCore": {
      "face": "beautiful adult black forge artisan face, smoky gray eyes, confident seductive smirk",
      "hair": "long black hair with copper highlights, tied in practical waves",
      "outfit": "black leather, iron, and bronze artisan dress with corset bodice, high slit, forge apron, opaque strategic coverage",
      "body": "adult voluptuous sturdy hourglass build, confident crafter posture",
      "aura": "small black forge ember halo behind shoulders",
      "extra": "Brokkr — Black Forge Artisan, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid pair of iron tongs",
      "itemRole": "tool_item",
      "itemFamily": "tongs",
      "description": "a physically solid pair of iron tongs with visible handle ends and gripping tips",
      "withItemPrompt": "holding a physically solid pair of iron tongs near waist level, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "tongs",
        "physically",
        "solid",
        "pair"
      ],
      "itemGuard": "Keep tongs readable and simple; no large forge, sparks, or machinery clutter."
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
    "id": "2400",
    "name": "Sindri",
    "title": "Golden Forge Artisan",
    "displayName": "Sindri — Golden Forge Artisan",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Beast / Forge / Cursed Icons",
    "powerDomain": [
      "forge",
      "gold craft",
      "precision",
      "artifice"
    ],
    "tags": [
      "female",
      "glamour",
      "tool_item",
      "hammer"
    ],
    "presentationMode": "professional",
    "characterCore": {
      "face": "beautiful adult golden forge artisan face, bright amber eyes, precise seductive smile",
      "hair": "long golden hair tied with bronze ribbons",
      "outfit": "gold, cream, and brown artisan forge dress with fitted waist, high slit, elegant apron belt, opaque strategic coverage",
      "body": "adult voluptuous refined hourglass build, precise artisan posture",
      "aura": "small golden spark halo behind shoulders, restrained",
      "extra": "Sindri — Golden Forge Artisan, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid small goldsmith hammer",
      "itemRole": "tool_item",
      "itemFamily": "hammer",
      "description": "a physically solid small goldsmith hammer with visible wooden handle and small metal head",
      "withItemPrompt": "holding a physically solid small goldsmith hammer near waist level, not covering face",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "hammer",
        "physically",
        "solid",
        "small"
      ],
      "itemGuard": "Keep hammer small and tool-like; avoid spark storm or complex workshop."
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
    "id": "2401",
    "name": "Dvalin",
    "title": "Rune-Sleep Smith",
    "displayName": "Dvalin — Rune-Sleep Smith",
    "gender": "female",
    "factionId": 23,
    "factionName": "Norse Valkyrie Dominion",
    "faction": "อาณาจักรวัลคีรีนอร์ส",
    "mythology": "Norse",
    "sourceType": "deity_or_mythic_figure",
    "conversionType": "female_fantasy_reinterpretation",
    "subgroup": "Beast / Forge / Cursed Icons",
    "powerDomain": [
      "dwarf craft",
      "runes",
      "sleep",
      "hidden forging"
    ],
    "tags": [
      "female",
      "glamour",
      "ritual_item",
      "rune stone"
    ],
    "presentationMode": "mystic",
    "characterCore": {
      "face": "mysterious beautiful adult rune-sleep smith face, dark blue eyes, sleepy seductive calm",
      "hair": "long dark silver hair with blue rune beads",
      "outfit": "midnight blue and iron rune-smith gown with fitted corset, high slit, leather apron accents, opaque strategic coverage",
      "body": "adult voluptuous compact hourglass build, quiet rune-forger posture",
      "aura": "small blue sleep-rune crescent behind shoulders",
      "extra": "Dvalin — Rune-Sleep Smith, adult female Norse fantasy reinterpretation designed for a full kingdom roster, clean silhouette, glamour-first styling, and one simple readable personal item."
    },
    "personalItem": {
      "name": "a physically solid blue rune stone",
      "itemRole": "ritual_item",
      "itemFamily": "stone",
      "description": "a physically solid blue oval rune stone with one clear carved rune",
      "withItemPrompt": "holding a physically solid blue rune stone near waist level, not covering face or body",
      "noItemRemove": [
        "holding",
        "carrying",
        "presenting",
        "wielding",
        "stone",
        "physically",
        "solid",
        "blue"
      ],
      "itemGuard": "Keep the rune stone as one simple object; no glowing text swarm, no sleeping clutter."
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



;