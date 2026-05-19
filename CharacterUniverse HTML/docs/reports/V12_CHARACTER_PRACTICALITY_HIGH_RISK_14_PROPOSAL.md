# V12 Character Practicality High Risk 14 Proposal

Date: 2026-05-19

## Scope

- Proposal only. No source character data was changed.
- Input audit: `docs/reports/CHARACTER_POSE_PRACTICALITY_AUDIT_REPORT.md`.
- Pilot set: high risk character findings with score >= 12.
- Characters included: 14.
- Review intent: propose low-blast-radius text cleanups that reduce no-item leakage, item/effect merging, and prompt bloat while preserving identity.

## Review Instructions

- Fill `Reviewer decision` for each character: `approve`, `edit`, `reject`, or `defer`.
- Do not apply any proposed after text automatically without review.
- Treat `characterCore.identityLock`, `personalItem.itemRole`, and `personalItem.itemFamily` as review-sensitive fields.
- Preserve `id`, `name`, `title`, `displayName`, faction fields, mythology, sourceType, conversionType, and core face/hair/outfit/body unless explicitly approved later.

## Summary Table

| # | ID | Name | Score | Source | Main risk | Reviewer decision |
| ---: | --- | --- | ---: | --- | --- | --- |
| 1 | 2578 | Konohanasakuya Ash Bloom | 16 | `data/characters/characters_heavenly_kami_war_court_expansion_2.js:2164` | personal item terms appear in identityLock; aura/extra may be too long for reusable prompt blocks; duplicate no-item suppression tokens |  |
| 2 | 2606 | Takemikazuchi War Marshal | 16 | `data/characters/characters_heavenly_kami_war_court_expansion_3.js:337` | personal item terms appear in identityLock; aura/extra may be too long for reusable prompt blocks; duplicate no-item suppression tokens |  |
| 3 | 2404 | Isis | 13 | `data/characters/characters_solar_necropolis_egypt.js:211` | personal item terms appear in identityLock; aura/extra may be too long for reusable prompt blocks; non-weapon role has weapon-shaped terminology |  |
| 4 | 2411 | Thoth | 13 | `data/characters/characters_solar_necropolis_egypt.js:881` | personal item terms appear in identityLock; aura is tied to personal item wording; aura/extra may be too long for reusable prompt blocks |  |
| 5 | 2467 | Renenet | 13 | `data/characters/characters_solar_necropolis_egypt_expansion_2.js:1491` | personal item terms appear in identityLock; aura is tied to personal item wording; aura/extra may be too long for reusable prompt blocks |  |
| 6 | 2474 | Andjety | 13 | `data/characters/characters_solar_necropolis_egypt_expansion_2.js:2159` | personal item terms appear in identityLock; aura is tied to personal item wording; aura/extra may be too long for reusable prompt blocks; non-weapon role has weapon-shaped terminology |  |
| 7 | 2485 | Ipy | 13 | `data/characters/characters_solar_necropolis_egypt_expansion_2.js:3237` | personal item terms appear in identityLock; aura is tied to personal item wording; aura/extra may be too long for reusable prompt blocks |  |
| 8 | 2494 | Hatshepsut | 13 | `data/characters/characters_solar_necropolis_egypt_expansion_2.js:4107` | personal item terms appear in identityLock; aura is tied to personal item wording; aura/extra may be too long for reusable prompt blocks; non-weapon role has weapon-shaped terminology |  |
| 9 | 2499 | Nefertari | 13 | `data/characters/characters_solar_necropolis_egypt_expansion_2.js:4606` | personal item terms appear in identityLock; aura is tied to personal item wording; aura/extra may be too long for reusable prompt blocks |  |
| 10 | 2302 | Odin | 12 | `data/characters/characters_norse_valkyrie_dominion.js:9` | aura is tied to personal item wording; aura/extra may be too long for reusable prompt blocks; non-weapon role has weapon-shaped terminology |  |
| 11 | 2402 | Ra | 12 | `data/characters/characters_solar_necropolis_egypt.js:21` | personal item terms appear in identityLock; aura/extra may be too long for reusable prompt blocks |  |
| 12 | 2423 | Seshat | 12 | `data/characters/characters_solar_necropolis_egypt.js:1999` | personal item terms appear in identityLock; aura is tied to personal item wording; aura/extra may be too long for reusable prompt blocks |  |
| 13 | 2450 | Wadj-Wer | 12 | `data/characters/characters_solar_necropolis_egypt.js:4617` | personal item terms appear in identityLock; aura is tied to personal item wording; aura/extra may be too long for reusable prompt blocks |  |
| 14 | 2555 | Yuki-onna Reika | 12 | `data/characters/characters_heavenly_kami_war_court_expansion_2.js:267` | personal item terms appear in identityLock; duplicate no-item suppression tokens |  |

## Character Proposals

### 1. 2578 Konohanasakuya Ash Bloom [score 16]

- File path: `data/characters/characters_heavenly_kami_war_court_expansion_2.js:2164`
- Risk reason: personal item terms appear in identityLock; aura/extra may be too long for reusable prompt blocks; duplicate no-item suppression tokens
- Reviewer decision: 
- Reviewer notes: 

#### Proposal 1: characterCore.identityLock

- Why this field: Remove toggleable personal-item terms from identityLock so no-item and camera poses preserve identity without forcing the item back in.
- Why safe / why needs review: Needs review: item words may be iconic, but the same item is already preserved in personalItem.
- Expected risk reduction: High impact: should reduce item leakage and no-item prompt clutter.
- Before:
```json
[
  "Konohanasakuya Ash Bloom",
  "Konohanasakuya-hime",
  "Ashen Blossom Flame Empress",
  "high-waist volcanic sakura armor dress with readable sleeves and clean flame-petal motif",
  "adult feminine full-bust empress silhouette, elegant hourglass line, fitted waist, soft curvy hips, beautiful but dangerous posture",
  "physically rigid cherry-blossom flame katana with visible metal edge",
  "ash and sakura flame halo glowing behind the body"
]
```
- Proposed after:
```json
[
  "Konohanasakuya Ash Bloom",
  "Konohanasakuya-hime",
  "Ashen Blossom Flame Empress",
  "high-waist volcanic sakura armor dress with readable sleeves and clean flame-petal motif",
  "adult feminine full-bust empress silhouette, elegant hourglass line, fitted waist, soft curvy hips, beautiful but dangerous posture",
  "ash and sakura flame halo glowing behind the body"
]
```
#### Proposal 2: characterCore.extra

- Why this field: extra is doing lore/source narration plus card/aesthetic metadata; compacting it keeps identity but reduces prompt bloat.
- Why safe / why needs review: Needs review: safe if title, mythic identity, variant status, and aesthetic remain intact.
- Expected risk reduction: Medium impact: reduces repeated descriptive text in generated prompts.
- Before:
```json
"Konohanasakuya-hime expansion aspect redesign: Konohanasakuya Ash Bloom ? Ashen Blossom Flame Empress. volcanic sakura empress, beautiful but dangerous. Adult female mythic reinterpretation with clear Japanese visual identity and distinct V12 playable-variant silhouette."
```
- Proposed after:
```json
"Konohanasakuya Ash Bloom — Ashen Blossom Flame Empress; adult female fantasy reinterpretation with Japanese / Shinto / Yokai / Legendary visual identity; distinct V12 playable-variant silhouette; clean readable character-card aesthetic."
```
#### Proposal 3: personalItem.noItemRemove

- Why this field: Remove duplicate no-item suppression tokens without changing the item.
- Why safe / why needs review: Safe auto-fix candidate: exact duplicate token cleanup only.
- Expected risk reduction: Low to medium impact: cleaner negative/no-item output.
- Before:
```json
[
  "holding",
  "wielding",
  "gripping",
  "carrying",
  "brandishing",
  "katana",
  "blade",
  "sword",
  "katana",
  "spear",
  "fan",
  "staff",
  "bow",
  "dagger",
  "shield"
]
```
- Proposed after:
```json
[
  "holding",
  "wielding",
  "gripping",
  "carrying",
  "brandishing",
  "katana",
  "blade",
  "sword",
  "spear",
  "fan",
  "staff",
  "bow",
  "dagger",
  "shield"
]
```

### 2. 2606 Takemikazuchi War Marshal [score 16]

- File path: `data/characters/characters_heavenly_kami_war_court_expansion_3.js:337`
- Risk reason: personal item terms appear in identityLock; aura/extra may be too long for reusable prompt blocks; duplicate no-item suppression tokens
- Reviewer decision: 
- Reviewer notes: 

#### Proposal 1: characterCore.identityLock

- Why this field: Remove toggleable personal-item terms from identityLock so no-item and camera poses preserve identity without forcing the item back in.
- Why safe / why needs review: Needs review: item words may be iconic, but the same item is already preserved in personalItem.
- Expected risk reduction: High impact: should reduce item leakage and no-item prompt clutter.
- Before:
```json
[
  "Takemikazuchi War Marshal",
  "Takemikazuchi",
  "Thunder Banner War Marshal",
  "fitted black-gold high-command armor kimono with clean broad plates, war banner sash, and readable waistline",
  "adult feminine voluptuous athletic command silhouette, full bust, fitted waist, powerful hips, broad shoulder mantle, confident battlefield queen posture",
  "physically rigid lightning katana with bronze guard and command thunder seals",
  "organized thunder seal halo and small command banner fragments behind her body, not random lightning clutter"
]
```
- Proposed after:
```json
[
  "Takemikazuchi War Marshal",
  "Takemikazuchi",
  "Thunder Banner War Marshal",
  "fitted black-gold high-command armor kimono with clean broad plates, war banner sash, and readable waistline",
  "adult feminine voluptuous athletic command silhouette, full bust, fitted waist, powerful hips, broad shoulder mantle, confident battlefield queen posture",
  "organized thunder seal halo and small command banner fragments behind her body, not random lightning clutter"
]
```
#### Proposal 2: characterCore.extra

- Why this field: extra is doing lore/source narration plus card/aesthetic metadata; compacting it keeps identity but reduces prompt bloat.
- Why safe / why needs review: Needs review: safe if title, mythic identity, variant status, and aesthetic remain intact.
- Expected risk reduction: Medium impact: reduces repeated descriptive text in generated prompts.
- Before:
```json
"Takemikazuchi expansion aspect redesign: Takemikazuchi War Marshal ? Thunder Banner War Marshal. imperial thunder field commander, not just a thunder duelist. Adult female mythic reinterpretation with clear Japanese visual identity and distinct V12 playable-variant silhouette."
```
- Proposed after:
```json
"Takemikazuchi War Marshal — Thunder Banner War Marshal; adult female fantasy reinterpretation with Japanese / Shinto / Yokai / Legendary visual identity; distinct V12 playable-variant silhouette; clean readable character-card aesthetic."
```
#### Proposal 3: personalItem.noItemRemove

- Why this field: Remove duplicate no-item suppression tokens without changing the item.
- Why safe / why needs review: Safe auto-fix candidate: exact duplicate token cleanup only.
- Expected risk reduction: Low to medium impact: cleaner negative/no-item output.
- Before:
```json
[
  "holding",
  "wielding",
  "gripping",
  "carrying",
  "brandishing",
  "katana",
  "blade",
  "sword",
  "katana",
  "spear",
  "fan",
  "staff",
  "bow",
  "dagger",
  "shield"
]
```
- Proposed after:
```json
[
  "holding",
  "wielding",
  "gripping",
  "carrying",
  "brandishing",
  "katana",
  "blade",
  "sword",
  "spear",
  "fan",
  "staff",
  "bow",
  "dagger",
  "shield"
]
```

### 3. 2404 Isis [score 13]

- File path: `data/characters/characters_solar_necropolis_egypt.js:211`
- Risk reason: personal item terms appear in identityLock; aura/extra may be too long for reusable prompt blocks; non-weapon role has weapon-shaped terminology
- Reviewer decision: 
- Reviewer notes: 

#### Proposal 1: characterCore.identityLock

- Why this field: Remove toggleable personal-item terms from identityLock so no-item and camera poses preserve identity without forcing the item back in.
- Why safe / why needs review: Needs review: item words may be iconic, but the same item is already preserved in personalItem.
- Expected risk reduction: High impact: should reduce item leakage and no-item prompt clutter.
- Before:
```json
[
  "deep blue eyes; gentle but commanding expression",
  "long thick black hair",
  "white, lapis, and gold wing-motif ceremonial gown with opaque flowing layers",
  "graceful voluptuous adult feminine goddess build",
  "gold ankh staff"
]
```
- Proposed after:
```json
[
  "deep blue eyes; gentle but commanding expression",
  "long thick black hair",
  "white, lapis, and gold wing-motif ceremonial gown with opaque flowing layers",
  "graceful voluptuous adult feminine goddess build"
]
```
#### Proposal 2: characterCore.aura

- Why this field: Aura field is long for a reusable identity block and carries multiple guard clauses.
- Why safe / why needs review: Usually safe: preserves the visual effect while moving generic guard behavior to prompt-level guard blocks.
- Expected risk reduction: Medium impact: reduces prompt length and visual clutter.
- Before:
```json
"soft wing-shaped light behind her back, clean and separated from face, hands, body, and main item"
```
- Proposed after:
```json
"soft wing-shaped light behind her back; stays behind or beside the body and does not cover face, hands, or silhouette"
```
#### Proposal 3: characterCore.extra

- Why this field: extra is doing lore/source narration plus card/aesthetic metadata; compacting it keeps identity but reduces prompt bloat.
- Why safe / why needs review: Needs review: safe if title, mythic identity, variant status, and aesthetic remain intact.
- Expected risk reduction: Medium impact: reduces repeated descriptive text in generated prompts.
- Before:
```json
"Isis — Winged Mother of Magic; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic."
```
- Proposed after:
```json
"Isis — Winged Mother of Magic; adult female fantasy reinterpretation with Egyptian visual identity; single-character SSR-style card; dark luxury aesthetic."
```
#### Proposal 4: personalItem.itemRole / itemFamily / withItemPrompt

- Why this field: Non-weapon roles with staff/spear/blade-like wording need human confirmation so the runtime does not weaponize ritual/document/daily props.
- Why safe / why needs review: Needs review: do not auto-change role/family because this can alter pose compatibility.
- Expected risk reduction: High impact if approved: reduces non-weapon combat mismatch.
- Before:
```json
{
  "itemRole": "ritual_item",
  "itemFamily": "staff",
  "name": "gold ankh staff",
  "description": "gold ankh staff",
  "withItemPrompt": "holding, raising, or presenting gold ankh staff as a ritual focus, not used for melee striking, clearly separated from aura effects, face, hands, and body silhouette"
}
```
- Proposed after:
```json
{
  "itemRole": "ritual_item",
  "itemFamily": "staff",
  "withItemPromptNote": "Keep as non-weapon unless reviewer intentionally approves weapon behavior; phrase as ceremonial/display/readable object, never attack/block/strike."
}
```

### 4. 2411 Thoth [score 13]

- File path: `data/characters/characters_solar_necropolis_egypt.js:881`
- Risk reason: personal item terms appear in identityLock; aura is tied to personal item wording; aura/extra may be too long for reusable prompt blocks
- Reviewer decision: 
- Reviewer notes: 

#### Proposal 1: characterCore.identityLock

- Why this field: Remove toggleable personal-item terms from identityLock so no-item and camera poses preserve identity without forcing the item back in.
- Why safe / why needs review: Needs review: item words may be iconic, but the same item is already preserved in personalItem.
- Expected risk reduction: High impact: should reduce item leakage and no-item prompt clutter.
- Before:
```json
[
  "pale blue eyes; intelligent composed gaze",
  "silver-blue long hair",
  "white, blue, and gold scholar-priestess robe with clean belts",
  "elegant adult feminine scholar build",
  "papyrus scroll and reed pen"
]
```
- Proposed after:
```json
[
  "pale blue eyes; intelligent composed gaze",
  "silver-blue long hair",
  "white, blue, and gold scholar-priestess robe with clean belts",
  "elegant adult feminine scholar build"
]
```
#### Proposal 2: characterCore.aura

- Why this field: Aura currently references the personal item, which can make the item persist in no-item mode or merge with effects.
- Why safe / why needs review: Needs review: keep the aura concept, but detach its placement from the item.
- Expected risk reduction: Medium impact: lowers item/effect merge risk.
- Before:
```json
"thin moon glyphs behind the scroll, clean and separated from face, hands, body, and main item"
```
- Proposed after:
```json
"thin moon glyphs behind the body; stays behind or beside the body and does not cover face, hands, or silhouette"
```
#### Proposal 3: characterCore.extra

- Why this field: extra is doing lore/source narration plus card/aesthetic metadata; compacting it keeps identity but reduces prompt bloat.
- Why safe / why needs review: Needs review: safe if title, mythic identity, variant status, and aesthetic remain intact.
- Expected risk reduction: Medium impact: reduces repeated descriptive text in generated prompts.
- Before:
```json
"Thoth — Moon Scribe of Sacred Words; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic."
```
- Proposed after:
```json
"Thoth — Moon Scribe of Sacred Words; adult female fantasy reinterpretation with Egyptian visual identity; single-character SSR-style card; dark luxury aesthetic."
```

### 5. 2467 Renenet [score 13]

- File path: `data/characters/characters_solar_necropolis_egypt_expansion_2.js:1491`
- Risk reason: personal item terms appear in identityLock; aura is tied to personal item wording; aura/extra may be too long for reusable prompt blocks
- Reviewer decision: 
- Reviewer notes: 

#### Proposal 1: characterCore.identityLock

- Why this field: Remove toggleable personal-item terms from identityLock so no-item and camera poses preserve identity without forcing the item back in.
- Why safe / why needs review: Needs review: item words may be iconic, but the same item is already preserved in personalItem.
- Expected risk reduction: High impact: should reduce item leakage and no-item prompt clutter.
- Before:
```json
[
  "green-gold eyes; nurturing secretive smile",
  "dark green braided hair",
  "green and white fortune-nurse gown with gold scroll case",
  "soft curvy adult feminine guardian build",
  "name scroll"
]
```
- Proposed after:
```json
[
  "green-gold eyes; nurturing secretive smile",
  "dark green braided hair",
  "soft curvy adult feminine guardian build"
]
```
#### Proposal 2: characterCore.aura

- Why this field: Aura currently references the personal item, which can make the item persist in no-item mode or merge with effects.
- Why safe / why needs review: Needs review: keep the aura concept, but detach its placement from the item.
- Expected risk reduction: Medium impact: lowers item/effect merge risk.
- Before:
```json
"subtle name glyphs behind scroll, clean and separated from face, hands, body, and main item"
```
- Proposed after:
```json
"subtle name glyphs behind the body; stays behind or beside the body and does not cover face, hands, or silhouette"
```
#### Proposal 3: characterCore.extra

- Why this field: extra is doing lore/source narration plus card/aesthetic metadata; compacting it keeps identity but reduces prompt bloat.
- Why safe / why needs review: Needs review: safe if title, mythic identity, variant status, and aesthetic remain intact.
- Expected risk reduction: Medium impact: reduces repeated descriptive text in generated prompts.
- Before:
```json
"Renenet — Name-Nurse of Fortune; adult female fantasy reinterpretation of the Egyptian mythic or legendary figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic."
```
- Proposed after:
```json
"Renenet — Name-Nurse of Fortune; adult female fantasy reinterpretation with Egyptian visual identity; single-character SSR-style card; dark luxury aesthetic."
```

### 6. 2474 Andjety [score 13]

- File path: `data/characters/characters_solar_necropolis_egypt_expansion_2.js:2159`
- Risk reason: personal item terms appear in identityLock; aura is tied to personal item wording; aura/extra may be too long for reusable prompt blocks; non-weapon role has weapon-shaped terminology
- Reviewer decision: 
- Reviewer notes: 

#### Proposal 1: characterCore.identityLock

- Why this field: Remove toggleable personal-item terms from identityLock so no-item and camera poses preserve identity without forcing the item back in.
- Why safe / why needs review: Needs review: item words may be iconic, but the same item is already preserved in personalItem.
- Expected risk reduction: High impact: should reduce item leakage and no-item prompt clutter.
- Before:
```json
[
  "deep green eyes; archaic ruler expression",
  "long dark hair",
  "white-green archaic ruler gown with gold crook motifs",
  "mature elegant adult feminine ruler build",
  "crook staff"
]
```
- Proposed after:
```json
[
  "deep green eyes; archaic ruler expression",
  "long dark hair",
  "mature elegant adult feminine ruler build"
]
```
#### Proposal 2: characterCore.aura

- Why this field: Aura currently references the personal item, which can make the item persist in no-item mode or merge with effects.
- Why safe / why needs review: Needs review: keep the aura concept, but detach its placement from the item.
- Expected risk reduction: Medium impact: lowers item/effect merge risk.
- Before:
```json
"subtle green field glow behind staff, clean and separated from face, hands, body, and main item"
```
- Proposed after:
```json
"subtle green field glow behind the body; stays behind or beside the body and does not cover face, hands, or silhouette"
```
#### Proposal 3: characterCore.extra

- Why this field: extra is doing lore/source narration plus card/aesthetic metadata; compacting it keeps identity but reduces prompt bloat.
- Why safe / why needs review: Needs review: safe if title, mythic identity, variant status, and aesthetic remain intact.
- Expected risk reduction: Medium impact: reduces repeated descriptive text in generated prompts.
- Before:
```json
"Andjety — Lord of the Eastern Nome; adult female fantasy reinterpretation of the Egyptian mythic or legendary figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic."
```
- Proposed after:
```json
"Andjety — Lord of the Eastern Nome; adult female fantasy reinterpretation with Egyptian visual identity; single-character SSR-style card; dark luxury aesthetic."
```
#### Proposal 4: personalItem.itemRole / itemFamily / withItemPrompt

- Why this field: Non-weapon roles with staff/spear/blade-like wording need human confirmation so the runtime does not weaponize ritual/document/daily props.
- Why safe / why needs review: Needs review: do not auto-change role/family because this can alter pose compatibility.
- Expected risk reduction: High impact if approved: reduces non-weapon combat mismatch.
- Before:
```json
{
  "itemRole": "ritual_item",
  "itemFamily": "staff",
  "name": "crook staff",
  "description": "crook staff",
  "withItemPrompt": "holding, raising, or presenting crook staff as a ritual focus, not used for melee striking, clearly separated from aura effects, face, hands, and body silhouette"
}
```
- Proposed after:
```json
{
  "itemRole": "ritual_item",
  "itemFamily": "staff",
  "withItemPromptNote": "Keep as non-weapon unless reviewer intentionally approves weapon behavior; phrase as ceremonial/display/readable object, never attack/block/strike."
}
```

### 7. 2485 Ipy [score 13]

- File path: `data/characters/characters_solar_necropolis_egypt_expansion_2.js:3237`
- Risk reason: personal item terms appear in identityLock; aura is tied to personal item wording; aura/extra may be too long for reusable prompt blocks
- Reviewer decision: 
- Reviewer notes: 

#### Proposal 1: characterCore.identityLock

- Why this field: Remove toggleable personal-item terms from identityLock so no-item and camera poses preserve identity without forcing the item back in.
- Why safe / why needs review: Needs review: item words may be iconic, but the same item is already preserved in personalItem.
- Expected risk reduction: High impact: should reduce item leakage and no-item prompt clutter.
- Before:
```json
[
  "warm honey eyes; gentle caregiver smile",
  "soft brown hair",
  "cream-blue household guardian dress",
  "soft curvy adult feminine caretaker build",
  "milk cup"
]
```
- Proposed after:
```json
[
  "warm honey eyes; gentle caregiver smile",
  "soft brown hair",
  "cream-blue household guardian dress",
  "soft curvy adult feminine caretaker build"
]
```
#### Proposal 2: characterCore.aura

- Why this field: Aura currently references the personal item, which can make the item persist in no-item mode or merge with effects.
- Why safe / why needs review: Needs review: keep the aura concept, but detach its placement from the item.
- Expected risk reduction: Medium impact: lowers item/effect merge risk.
- Before:
```json
"warm hearth glow behind cup, clean and separated from face, hands, body, and main item"
```
- Proposed after:
```json
"warm hearth glow behind the body; stays behind or beside the body and does not cover face, hands, or silhouette"
```
#### Proposal 3: characterCore.extra

- Why this field: extra is doing lore/source narration plus card/aesthetic metadata; compacting it keeps identity but reduces prompt bloat.
- Why safe / why needs review: Needs review: safe if title, mythic identity, variant status, and aesthetic remain intact.
- Expected risk reduction: Medium impact: reduces repeated descriptive text in generated prompts.
- Before:
```json
"Ipy — Nursing Hearth Guardian; adult female fantasy reinterpretation of the Egyptian mythic or legendary figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic."
```
- Proposed after:
```json
"Ipy — Nursing Hearth Guardian; adult female fantasy reinterpretation with Egyptian visual identity; single-character SSR-style card; dark luxury aesthetic."
```

### 8. 2494 Hatshepsut [score 13]

- File path: `data/characters/characters_solar_necropolis_egypt_expansion_2.js:4107`
- Risk reason: personal item terms appear in identityLock; aura is tied to personal item wording; aura/extra may be too long for reusable prompt blocks; non-weapon role has weapon-shaped terminology
- Reviewer decision: 
- Reviewer notes: 

#### Proposal 1: characterCore.identityLock

- Why this field: Remove toggleable personal-item terms from identityLock so no-item and camera poses preserve identity without forcing the item back in.
- Why safe / why needs review: Needs review: item words may be iconic, but the same item is already preserved in personalItem.
- Expected risk reduction: High impact: should reduce item leakage and no-item prompt clutter.
- Before:
```json
[
  "dark gold eyes; commanding pharaoh gaze",
  "black hair with gold pharaoh headdress",
  "white-gold pharaoh queen regalia dress",
  "mature powerful adult feminine ruler build",
  "ceremonial crook staff"
]
```
- Proposed after:
```json
[
  "dark gold eyes; commanding pharaoh gaze",
  "black hair with gold pharaoh headdress",
  "white-gold pharaoh queen regalia dress",
  "mature powerful adult feminine ruler build"
]
```
#### Proposal 2: characterCore.aura

- Why this field: Aura currently references the personal item, which can make the item persist in no-item mode or merge with effects.
- Why safe / why needs review: Needs review: keep the aura concept, but detach its placement from the item.
- Expected risk reduction: Medium impact: lowers item/effect merge risk.
- Before:
```json
"terrace-shaped gold glow behind staff, clean and separated from face, hands, body, and main item"
```
- Proposed after:
```json
"terrace-shaped gold glow behind the body; stays behind or beside the body and does not cover face, hands, or silhouette"
```
#### Proposal 3: characterCore.extra

- Why this field: extra is doing lore/source narration plus card/aesthetic metadata; compacting it keeps identity but reduces prompt bloat.
- Why safe / why needs review: Needs review: safe if title, mythic identity, variant status, and aesthetic remain intact.
- Expected risk reduction: Medium impact: reduces repeated descriptive text in generated prompts.
- Before:
```json
"Hatshepsut — Pharaoh of the Divine Terrace; adult female fantasy reinterpretation of the Egyptian mythic or legendary figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic."
```
- Proposed after:
```json
"Hatshepsut — Pharaoh of the Divine Terrace; adult female fantasy reinterpretation with Egyptian visual identity; single-character SSR-style card; dark luxury aesthetic."
```
#### Proposal 4: personalItem.itemRole / itemFamily / withItemPrompt

- Why this field: Non-weapon roles with staff/spear/blade-like wording need human confirmation so the runtime does not weaponize ritual/document/daily props.
- Why safe / why needs review: Needs review: do not auto-change role/family because this can alter pose compatibility.
- Expected risk reduction: High impact if approved: reduces non-weapon combat mismatch.
- Before:
```json
{
  "itemRole": "ritual_item",
  "itemFamily": "staff",
  "name": "ceremonial crook staff",
  "description": "ceremonial crook staff",
  "withItemPrompt": "holding, raising, or presenting ceremonial crook staff as a ritual focus, not used for melee striking, clearly separated from aura effects, face, hands, and body silhouette"
}
```
- Proposed after:
```json
{
  "itemRole": "ritual_item",
  "itemFamily": "staff",
  "withItemPromptNote": "Keep as non-weapon unless reviewer intentionally approves weapon behavior; phrase as ceremonial/display/readable object, never attack/block/strike."
}
```

### 9. 2499 Nefertari [score 13]

- File path: `data/characters/characters_solar_necropolis_egypt_expansion_2.js:4606`
- Risk reason: personal item terms appear in identityLock; aura is tied to personal item wording; aura/extra may be too long for reusable prompt blocks
- Reviewer decision: 
- Reviewer notes: 

#### Proposal 1: characterCore.identityLock

- Why this field: Remove toggleable personal-item terms from identityLock so no-item and camera poses preserve identity without forcing the item back in.
- Why safe / why needs review: Needs review: item words may be iconic, but the same item is already preserved in personalItem.
- Expected risk reduction: High impact: should reduce item leakage and no-item prompt clutter.
- Before:
```json
[
  "star-blue eyes; serene tomb queen gaze",
  "long black hair with blue-gold ornaments",
  "blue-white and gold star tomb queen gown",
  "voluptuous adult feminine royal scholar build",
  "star map scroll"
]
```
- Proposed after:
```json
[
  "star-blue eyes; serene tomb queen gaze",
  "long black hair with blue-gold ornaments",
  "blue-white and gold star tomb queen gown",
  "voluptuous adult feminine royal scholar build"
]
```
#### Proposal 2: characterCore.aura

- Why this field: Aura currently references the personal item, which can make the item persist in no-item mode or merge with effects.
- Why safe / why needs review: Needs review: keep the aura concept, but detach its placement from the item.
- Expected risk reduction: Medium impact: lowers item/effect merge risk.
- Before:
```json
"soft painted stars behind scroll, clean and separated from face, hands, body, and main item"
```
- Proposed after:
```json
"soft painted stars behind the body; stays behind or beside the body and does not cover face, hands, or silhouette"
```
#### Proposal 3: characterCore.extra

- Why this field: extra is doing lore/source narration plus card/aesthetic metadata; compacting it keeps identity but reduces prompt bloat.
- Why safe / why needs review: Needs review: safe if title, mythic identity, variant status, and aesthetic remain intact.
- Expected risk reduction: Medium impact: reduces repeated descriptive text in generated prompts.
- Before:
```json
"Nefertari — Star Tomb Queen; adult female fantasy reinterpretation of the Egyptian mythic or legendary figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic."
```
- Proposed after:
```json
"Nefertari — Star Tomb Queen; adult female fantasy reinterpretation with Egyptian visual identity; single-character SSR-style card; dark luxury aesthetic."
```

### 10. 2302 Odin [score 12]

- File path: `data/characters/characters_norse_valkyrie_dominion.js:9`
- Risk reason: aura is tied to personal item wording; aura/extra may be too long for reusable prompt blocks; non-weapon role has weapon-shaped terminology
- Reviewer decision: 
- Reviewer notes: 

#### Proposal 1: characterCore.aura

- Why this field: Aura currently references the personal item, which can make the item persist in no-item mode or merge with effects.
- Why safe / why needs review: Needs review: keep the aura concept, but detach its placement from the item.
- Expected risk reduction: Medium impact: lowers item/effect merge risk.
- Before:
```json
"one clean rune circle and two small raven silhouettes behind shoulders, separated from body and spear"
```
- Proposed after:
```json
"one clean rune circle and two small raven silhouettes behind shoulders; separated from body silhouette"
```
#### Proposal 2: characterCore.extra

- Why this field: extra is doing lore/source narration plus card/aesthetic metadata; compacting it keeps identity but reduces prompt bloat.
- Why safe / why needs review: Needs review: safe if title, mythic identity, variant status, and aesthetic remain intact.
- Expected risk reduction: Medium impact: reduces repeated descriptive text in generated prompts.
- Before:
```json
"Odin — All-Mother of Runes, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
```
- Proposed after:
```json
"Odin — All-Mother of Runes; adult female fantasy reinterpretation with Norse visual identity; single-character SSR-style card; dark luxury aesthetic."
```
#### Proposal 3: personalItem.itemRole / itemFamily / withItemPrompt

- Why this field: Non-weapon roles with staff/spear/blade-like wording need human confirmation so the runtime does not weaponize ritual/document/daily props.
- Why safe / why needs review: Needs review: do not auto-change role/family because this can alter pose compatibility.
- Expected risk reduction: High impact if approved: reduces non-weapon combat mismatch.
- Before:
```json
{
  "itemRole": "ritual_item",
  "itemFamily": "spear",
  "name": "a physically rigid dark rune spear",
  "description": "a physically rigid dark metal spear with visible shaft, sharp spearhead, and small carved rune plates",
  "withItemPrompt": "holding a physically rigid dark rune spear vertically beside her body, shaft and spearhead visible, not crossing face, chest, waist, or silhouette"
}
```
- Proposed after:
```json
{
  "itemRole": "ritual_item",
  "itemFamily": "spear",
  "withItemPromptNote": "Keep as non-weapon unless reviewer intentionally approves weapon behavior; phrase as ceremonial/display/readable object, never attack/block/strike."
}
```

### 11. 2402 Ra [score 12]

- File path: `data/characters/characters_solar_necropolis_egypt.js:21`
- Risk reason: personal item terms appear in identityLock; aura/extra may be too long for reusable prompt blocks
- Reviewer decision: 
- Reviewer notes: 

#### Proposal 1: characterCore.identityLock

- Why this field: Remove toggleable personal-item terms from identityLock so no-item and camera poses preserve identity without forcing the item back in.
- Why safe / why needs review: Needs review: item words may be iconic, but the same item is already preserved in personalItem.
- Expected risk reduction: High impact: should reduce item leakage and no-item prompt clutter.
- Before:
```json
[
  "amber-gold eyes; calm imperial gaze",
  "long radiant gold hair with black undertones",
  "white-and-gold Egyptian haute couture queen dress with broad gold collar and clean sun-disk crown",
  "voluptuous elegant adult feminine goddess build",
  "gold sun disk fan"
]
```
- Proposed after:
```json
[
  "amber-gold eyes; calm imperial gaze",
  "long radiant gold hair with black undertones",
  "white-and-gold Egyptian haute couture queen dress with broad gold collar and clean sun-disk crown",
  "voluptuous elegant adult feminine goddess build"
]
```
#### Proposal 2: characterCore.extra

- Why this field: extra is doing lore/source narration plus card/aesthetic metadata; compacting it keeps identity but reduces prompt bloat.
- Why safe / why needs review: Needs review: safe if title, mythic identity, variant status, and aesthetic remain intact.
- Expected risk reduction: Medium impact: reduces repeated descriptive text in generated prompts.
- Before:
```json
"Ra — Solar Empress of the First Dawn; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic."
```
- Proposed after:
```json
"Ra — Solar Empress of the First Dawn; adult female fantasy reinterpretation with Egyptian visual identity; single-character SSR-style card; dark luxury aesthetic."
```

### 12. 2423 Seshat [score 12]

- File path: `data/characters/characters_solar_necropolis_egypt.js:1999`
- Risk reason: personal item terms appear in identityLock; aura is tied to personal item wording; aura/extra may be too long for reusable prompt blocks
- Reviewer decision: 
- Reviewer notes: 

#### Proposal 1: characterCore.identityLock

- Why this field: Remove toggleable personal-item terms from identityLock so no-item and camera poses preserve identity without forcing the item back in.
- Why safe / why needs review: Needs review: item words may be iconic, but the same item is already preserved in personalItem.
- Expected risk reduction: High impact: should reduce item leakage and no-item prompt clutter.
- Before:
```json
[
  "clever dark eyes; precise archivist expression",
  "short black hair with gold star headband",
  "white-blue scholar dress with measuring trim",
  "slender elegant adult feminine scholar build",
  "star-marked papyrus book"
]
```
- Proposed after:
```json
[
  "clever dark eyes; precise archivist expression",
  "short black hair with gold star headband",
  "white-blue scholar dress with measuring trim",
  "slender elegant adult feminine scholar build"
]
```
#### Proposal 2: characterCore.aura

- Why this field: Aura currently references the personal item, which can make the item persist in no-item mode or merge with effects.
- Why safe / why needs review: Needs review: keep the aura concept, but detach its placement from the item.
- Expected risk reduction: Medium impact: lowers item/effect merge risk.
- Before:
```json
"subtle ruled lines behind the book, clean and separated from face, hands, body, and main item"
```
- Proposed after:
```json
"subtle ruled lines behind the body; stays behind or beside the body and does not cover face, hands, or silhouette"
```
#### Proposal 3: characterCore.extra

- Why this field: extra is doing lore/source narration plus card/aesthetic metadata; compacting it keeps identity but reduces prompt bloat.
- Why safe / why needs review: Needs review: safe if title, mythic identity, variant status, and aesthetic remain intact.
- Expected risk reduction: Medium impact: reduces repeated descriptive text in generated prompts.
- Before:
```json
"Seshat — Mistress of the House of Books; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic."
```
- Proposed after:
```json
"Seshat — Mistress of the House of Books; adult female fantasy reinterpretation with Egyptian visual identity; single-character SSR-style card; dark luxury aesthetic."
```

### 13. 2450 Wadj-Wer [score 12]

- File path: `data/characters/characters_solar_necropolis_egypt.js:4617`
- Risk reason: personal item terms appear in identityLock; aura is tied to personal item wording; aura/extra may be too long for reusable prompt blocks
- Reviewer decision: 
- Reviewer notes: 

#### Proposal 1: characterCore.identityLock

- Why this field: Remove toggleable personal-item terms from identityLock so no-item and camera poses preserve identity without forcing the item back in.
- Why safe / why needs review: Needs review: item words may be iconic, but the same item is already preserved in personalItem.
- Expected risk reduction: High impact: should reduce item leakage and no-item prompt clutter.
- Before:
```json
[
  "sea-green eyes; distant ocean gaze",
  "green-blue long hair",
  "deep green sea goddess gown with shell jewelry",
  "tall curvy adult feminine sea goddess build",
  "shell cup"
]
```
- Proposed after:
```json
[
  "sea-green eyes; distant ocean gaze",
  "green-blue long hair",
  "deep green sea goddess gown with shell jewelry",
  "tall curvy adult feminine sea goddess build"
]
```
#### Proposal 2: characterCore.aura

- Why this field: Aura currently references the personal item, which can make the item persist in no-item mode or merge with effects.
- Why safe / why needs review: Needs review: keep the aura concept, but detach its placement from the item.
- Expected risk reduction: Medium impact: lowers item/effect merge risk.
- Before:
```json
"subtle wave arc behind cup, clean and separated from face, hands, body, and main item"
```
- Proposed after:
```json
"subtle wave arc behind the body; stays behind or beside the body and does not cover face, hands, or silhouette"
```
#### Proposal 3: characterCore.extra

- Why this field: extra is doing lore/source narration plus card/aesthetic metadata; compacting it keeps identity but reduces prompt bloat.
- Why safe / why needs review: Needs review: safe if title, mythic identity, variant status, and aesthetic remain intact.
- Expected risk reduction: Medium impact: reduces repeated descriptive text in generated prompts.
- Before:
```json
"Wadj-Wer — Great Green Sea; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic."
```
- Proposed after:
```json
"Wadj-Wer — Great Green Sea; adult female fantasy reinterpretation with Egyptian visual identity; single-character SSR-style card; dark luxury aesthetic."
```

### 14. 2555 Yuki-onna Reika [score 12]

- File path: `data/characters/characters_heavenly_kami_war_court_expansion_2.js:267`
- Risk reason: personal item terms appear in identityLock; duplicate no-item suppression tokens
- Reviewer decision: 
- Reviewer notes: 

#### Proposal 1: characterCore.identityLock

- Why this field: Remove toggleable personal-item terms from identityLock so no-item and camera poses preserve identity without forcing the item back in.
- Why safe / why needs review: Needs review: item words may be iconic, but the same item is already preserved in personalItem.
- Expected risk reduction: High impact: should reduce item leakage and no-item prompt clutter.
- Before:
```json
[
  "Yuki-onna Reika",
  "Blizzard Veil Duelist",
  "dark luxury shrine-war court outfit with lacquer armor plates, elegant kimono layers, clean gold trims, fitted waist, and readable battle silhouette",
  "physically rigid ice-blue katana with white lacquer scabbard",
  "clean snow crystal halo behind her body"
]
```
- Proposed after:
```json
[
  "Yuki-onna Reika",
  "Blizzard Veil Duelist",
  "dark luxury shrine-war court outfit with lacquer armor plates, elegant kimono layers, clean gold trims, fitted waist, and readable battle silhouette",
  "clean snow crystal halo behind her body"
]
```
#### Proposal 2: personalItem.noItemRemove

- Why this field: Remove duplicate no-item suppression tokens without changing the item.
- Why safe / why needs review: Safe auto-fix candidate: exact duplicate token cleanup only.
- Expected risk reduction: Low to medium impact: cleaner negative/no-item output.
- Before:
```json
[
  "holding",
  "wielding",
  "gripping",
  "carrying",
  "brandishing",
  "katana",
  "blade",
  "sword",
  "katana",
  "spear",
  "fan",
  "staff",
  "bow",
  "dagger",
  "shield"
]
```
- Proposed after:
```json
[
  "holding",
  "wielding",
  "gripping",
  "carrying",
  "brandishing",
  "katana",
  "blade",
  "sword",
  "spear",
  "fan",
  "staff",
  "bow",
  "dagger",
  "shield"
]
```

## Pilot Validation Plan

1. Apply approved rows only in a separate patch, never directly from this proposal file.
2. Validate character count remains 685 and all 14 IDs still resolve from their source files.
3. Run schema sanity checks for required fields and valid `personalItem` objects.
4. Generate with-item and no-item prompt samples for the 14 characters.
5. Confirm no-item samples do not contain removed personal item aliases unless the item is intentionally core identity.
6. Confirm with-item samples still include the intended personal item and do not weaponize non-weapon roles.

## Do Not Touch In This Pilot

- Character IDs, names, titles, display names, faction fields, mythology, and source metadata.
- Core face, hair, outfit, and body silhouette fields.
- `itemRole` or `itemFamily` without explicit reviewer approval.
- Any rewrite that changes the mythic concept, pantheon identity, or playable-variant concept.
- Any source data before this proposal is reviewed.