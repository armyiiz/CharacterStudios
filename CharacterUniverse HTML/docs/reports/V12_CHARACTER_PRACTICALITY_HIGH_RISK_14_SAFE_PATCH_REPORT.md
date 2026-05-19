# V12 Character Practicality High Risk 14 Safe Patch Report

Date: 2026-05-19

## Scope

- Source data was changed only for approved-safe fields from the high risk 14 pilot.
- Deferred itemRole/itemFamily proposals for Isis, Andjety, Hatshepsut, and Odin were not applied.
- Forbidden fields were not intentionally changed: id/name/faction, face/hair/outfit/body, itemRole, itemFamily, personalItem.name/description, and core concepts.

## Changed Files

- `data/characters/characters_heavenly_kami_war_court_expansion_2.js`
- `data/characters/characters_heavenly_kami_war_court_expansion_3.js`
- `data/characters/characters_solar_necropolis_egypt.js`
- `data/characters/characters_solar_necropolis_egypt_expansion_2.js`
- `data/characters/characters_norse_valkyrie_dominion.js`

## Before / After Summary

### 2578 Konohanasakuya Ash Bloom

- File: `data/characters/characters_heavenly_kami_war_court_expansion_2.js`
- Field: `characterCore.identityLock`
  - Reason: removed personalItem terms already represented in personalItem
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
  - After:
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
- Field: `characterCore.extra`
  - Reason: compacted lore/card metadata while preserving identity concept
  - Before:
    ```json
    "Konohanasakuya-hime expansion aspect redesign: Konohanasakuya Ash Bloom ? Ashen Blossom Flame Empress. volcanic sakura empress, beautiful but dangerous. Adult female mythic reinterpretation with clear Japanese visual identity and distinct V12 playable-variant silhouette."
    ```
  - After:
    ```json
    "Konohanasakuya Ash Bloom — Ashen Blossom Flame Empress; adult female fantasy reinterpretation with Japanese / Shinto / Yokai / Legendary visual identity; distinct V12 playable-variant silhouette; clean readable character-card aesthetic."
    ```
- Field: `personalItem.noItemRemove`
  - Reason: deduped exact duplicate no-item suppression terms
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
  - After:
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

### 2606 Takemikazuchi War Marshal

- File: `data/characters/characters_heavenly_kami_war_court_expansion_3.js`
- Field: `characterCore.identityLock`
  - Reason: removed personalItem terms already represented in personalItem
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
  - After:
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
- Field: `characterCore.extra`
  - Reason: compacted lore/card metadata while preserving identity concept
  - Before:
    ```json
    "Takemikazuchi expansion aspect redesign: Takemikazuchi War Marshal ? Thunder Banner War Marshal. imperial thunder field commander, not just a thunder duelist. Adult female mythic reinterpretation with clear Japanese visual identity and distinct V12 playable-variant silhouette."
    ```
  - After:
    ```json
    "Takemikazuchi War Marshal — Thunder Banner War Marshal; adult female fantasy reinterpretation with Japanese / Shinto / Yokai / Legendary visual identity; distinct V12 playable-variant silhouette; clean readable character-card aesthetic."
    ```
- Field: `personalItem.noItemRemove`
  - Reason: deduped exact duplicate no-item suppression terms
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
  - After:
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

### 2404 Isis

- File: `data/characters/characters_solar_necropolis_egypt.js`
- Deferred: personalItem.itemRole / itemFamily proposal deferred
- Field: `characterCore.identityLock`
  - Reason: removed personalItem terms already represented in personalItem
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
  - After:
    ```json
    [
      "deep blue eyes; gentle but commanding expression",
      "long thick black hair",
      "white, lapis, and gold wing-motif ceremonial gown with opaque flowing layers",
      "graceful voluptuous adult feminine goddess build"
    ]
    ```
- Field: `characterCore.aura`
  - Reason: detached aura wording from item wording / compacted reusable guard phrase
  - Before:
    ```json
    "soft wing-shaped light behind her back, clean and separated from face, hands, body, and main item"
    ```
  - After:
    ```json
    "soft wing-shaped light behind her back; stays behind or beside the body and does not cover face, hands, or silhouette"
    ```
- Field: `characterCore.extra`
  - Reason: compacted lore/card metadata while preserving identity concept
  - Before:
    ```json
    "Isis — Winged Mother of Magic; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic."
    ```
  - After:
    ```json
    "Isis — Winged Mother of Magic; adult female fantasy reinterpretation with Egyptian visual identity; single-character SSR-style card; dark luxury aesthetic."
    ```

### 2411 Thoth

- File: `data/characters/characters_solar_necropolis_egypt.js`
- Field: `characterCore.identityLock`
  - Reason: removed personalItem terms already represented in personalItem
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
  - After:
    ```json
    [
      "pale blue eyes; intelligent composed gaze",
      "silver-blue long hair",
      "white, blue, and gold scholar-priestess robe with clean belts",
      "elegant adult feminine scholar build"
    ]
    ```
- Field: `characterCore.aura`
  - Reason: detached aura wording from item wording / compacted reusable guard phrase
  - Before:
    ```json
    "thin moon glyphs behind the scroll, clean and separated from face, hands, body, and main item"
    ```
  - After:
    ```json
    "thin moon glyphs behind the body; stays behind or beside the body and does not cover face, hands, or silhouette"
    ```
- Field: `characterCore.extra`
  - Reason: compacted lore/card metadata while preserving identity concept
  - Before:
    ```json
    "Thoth — Moon Scribe of Sacred Words; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic."
    ```
  - After:
    ```json
    "Thoth — Moon Scribe of Sacred Words; adult female fantasy reinterpretation with Egyptian visual identity; single-character SSR-style card; dark luxury aesthetic."
    ```

### 2467 Renenet

- File: `data/characters/characters_solar_necropolis_egypt_expansion_2.js`
- Field: `characterCore.identityLock`
  - Reason: removed personalItem terms already represented in personalItem
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
  - After:
    ```json
    [
      "green-gold eyes; nurturing secretive smile",
      "dark green braided hair",
      "soft curvy adult feminine guardian build"
    ]
    ```
- Field: `characterCore.aura`
  - Reason: detached aura wording from item wording / compacted reusable guard phrase
  - Before:
    ```json
    "subtle name glyphs behind scroll, clean and separated from face, hands, body, and main item"
    ```
  - After:
    ```json
    "subtle name glyphs behind the body; stays behind or beside the body and does not cover face, hands, or silhouette"
    ```
- Field: `characterCore.extra`
  - Reason: compacted lore/card metadata while preserving identity concept
  - Before:
    ```json
    "Renenet — Name-Nurse of Fortune; adult female fantasy reinterpretation of the Egyptian mythic or legendary figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic."
    ```
  - After:
    ```json
    "Renenet — Name-Nurse of Fortune; adult female fantasy reinterpretation with Egyptian visual identity; single-character SSR-style card; dark luxury aesthetic."
    ```

### 2474 Andjety

- File: `data/characters/characters_solar_necropolis_egypt_expansion_2.js`
- Deferred: personalItem.itemRole / itemFamily proposal deferred
- Field: `characterCore.identityLock`
  - Reason: removed personalItem terms already represented in personalItem
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
  - After:
    ```json
    [
      "deep green eyes; archaic ruler expression",
      "long dark hair",
      "mature elegant adult feminine ruler build"
    ]
    ```
- Field: `characterCore.aura`
  - Reason: detached aura wording from item wording / compacted reusable guard phrase
  - Before:
    ```json
    "subtle green field glow behind staff, clean and separated from face, hands, body, and main item"
    ```
  - After:
    ```json
    "subtle green field glow behind the body; stays behind or beside the body and does not cover face, hands, or silhouette"
    ```
- Field: `characterCore.extra`
  - Reason: compacted lore/card metadata while preserving identity concept
  - Before:
    ```json
    "Andjety — Lord of the Eastern Nome; adult female fantasy reinterpretation of the Egyptian mythic or legendary figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic."
    ```
  - After:
    ```json
    "Andjety — Lord of the Eastern Nome; adult female fantasy reinterpretation with Egyptian visual identity; single-character SSR-style card; dark luxury aesthetic."
    ```

### 2485 Ipy

- File: `data/characters/characters_solar_necropolis_egypt_expansion_2.js`
- Field: `characterCore.identityLock`
  - Reason: removed personalItem terms already represented in personalItem
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
  - After:
    ```json
    [
      "warm honey eyes; gentle caregiver smile",
      "soft brown hair",
      "cream-blue household guardian dress",
      "soft curvy adult feminine caretaker build"
    ]
    ```
- Field: `characterCore.aura`
  - Reason: detached aura wording from item wording / compacted reusable guard phrase
  - Before:
    ```json
    "warm hearth glow behind cup, clean and separated from face, hands, body, and main item"
    ```
  - After:
    ```json
    "warm hearth glow behind the body; stays behind or beside the body and does not cover face, hands, or silhouette"
    ```
- Field: `characterCore.extra`
  - Reason: compacted lore/card metadata while preserving identity concept
  - Before:
    ```json
    "Ipy — Nursing Hearth Guardian; adult female fantasy reinterpretation of the Egyptian mythic or legendary figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic."
    ```
  - After:
    ```json
    "Ipy — Nursing Hearth Guardian; adult female fantasy reinterpretation with Egyptian visual identity; single-character SSR-style card; dark luxury aesthetic."
    ```

### 2494 Hatshepsut

- File: `data/characters/characters_solar_necropolis_egypt_expansion_2.js`
- Deferred: personalItem.itemRole / itemFamily proposal deferred
- Field: `characterCore.identityLock`
  - Reason: removed personalItem terms already represented in personalItem
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
  - After:
    ```json
    [
      "dark gold eyes; commanding pharaoh gaze",
      "black hair with gold pharaoh headdress",
      "white-gold pharaoh queen regalia dress",
      "mature powerful adult feminine ruler build"
    ]
    ```
- Field: `characterCore.aura`
  - Reason: detached aura wording from item wording / compacted reusable guard phrase
  - Before:
    ```json
    "terrace-shaped gold glow behind staff, clean and separated from face, hands, body, and main item"
    ```
  - After:
    ```json
    "terrace-shaped gold glow behind the body; stays behind or beside the body and does not cover face, hands, or silhouette"
    ```
- Field: `characterCore.extra`
  - Reason: compacted lore/card metadata while preserving identity concept
  - Before:
    ```json
    "Hatshepsut — Pharaoh of the Divine Terrace; adult female fantasy reinterpretation of the Egyptian mythic or legendary figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic."
    ```
  - After:
    ```json
    "Hatshepsut — Pharaoh of the Divine Terrace; adult female fantasy reinterpretation with Egyptian visual identity; single-character SSR-style card; dark luxury aesthetic."
    ```

### 2499 Nefertari

- File: `data/characters/characters_solar_necropolis_egypt_expansion_2.js`
- Field: `characterCore.identityLock`
  - Reason: removed personalItem terms already represented in personalItem
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
  - After:
    ```json
    [
      "star-blue eyes; serene tomb queen gaze",
      "long black hair with blue-gold ornaments",
      "blue-white and gold star tomb queen gown",
      "voluptuous adult feminine royal scholar build"
    ]
    ```
- Field: `characterCore.aura`
  - Reason: detached aura wording from item wording / compacted reusable guard phrase
  - Before:
    ```json
    "soft painted stars behind scroll, clean and separated from face, hands, body, and main item"
    ```
  - After:
    ```json
    "soft painted stars behind the body; stays behind or beside the body and does not cover face, hands, or silhouette"
    ```
- Field: `characterCore.extra`
  - Reason: compacted lore/card metadata while preserving identity concept
  - Before:
    ```json
    "Nefertari — Star Tomb Queen; adult female fantasy reinterpretation of the Egyptian mythic or legendary figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic."
    ```
  - After:
    ```json
    "Nefertari — Star Tomb Queen; adult female fantasy reinterpretation with Egyptian visual identity; single-character SSR-style card; dark luxury aesthetic."
    ```

### 2302 Odin

- File: `data/characters/characters_norse_valkyrie_dominion.js`
- Deferred: personalItem.itemRole / itemFamily proposal deferred
- Field: `characterCore.aura`
  - Reason: detached aura wording from item wording / compacted reusable guard phrase
  - Before:
    ```json
    "one clean rune circle and two small raven silhouettes behind shoulders, separated from body and spear"
    ```
  - After:
    ```json
    "one clean rune circle and two small raven silhouettes behind shoulders; separated from body silhouette"
    ```
- Field: `characterCore.extra`
  - Reason: compacted lore/card metadata while preserving identity concept
  - Before:
    ```json
    "Odin — All-Mother of Runes, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable personal item."
    ```
  - After:
    ```json
    "Odin — All-Mother of Runes; adult female fantasy reinterpretation with Norse visual identity; single-character SSR-style card; dark luxury aesthetic."
    ```

### 2402 Ra

- File: `data/characters/characters_solar_necropolis_egypt.js`
- Field: `characterCore.identityLock`
  - Reason: removed personalItem terms already represented in personalItem
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
  - After:
    ```json
    [
      "amber-gold eyes; calm imperial gaze",
      "long radiant gold hair with black undertones",
      "white-and-gold Egyptian haute couture queen dress with broad gold collar and clean sun-disk crown",
      "voluptuous elegant adult feminine goddess build"
    ]
    ```
- Field: `characterCore.aura`
  - Reason: detached aura wording from item wording / compacted reusable guard phrase
  - Before:
    ```json
    "soft solar halo behind her shoulders, clean and separated from face, hands, body, and main item"
    ```
  - After:
    ```json
    "soft solar halo behind her shoulders; stays behind or beside the body and does not cover face, hands, or silhouette"
    ```
- Field: `characterCore.extra`
  - Reason: compacted lore/card metadata while preserving identity concept
  - Before:
    ```json
    "Ra — Solar Empress of the First Dawn; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic."
    ```
  - After:
    ```json
    "Ra — Solar Empress of the First Dawn; adult female fantasy reinterpretation with Egyptian visual identity; single-character SSR-style card; dark luxury aesthetic."
    ```

### 2423 Seshat

- File: `data/characters/characters_solar_necropolis_egypt.js`
- Field: `characterCore.identityLock`
  - Reason: removed personalItem terms already represented in personalItem
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
  - After:
    ```json
    [
      "clever dark eyes; precise archivist expression",
      "short black hair with gold star headband",
      "white-blue scholar dress with measuring trim",
      "slender elegant adult feminine scholar build"
    ]
    ```
- Field: `characterCore.aura`
  - Reason: detached aura wording from item wording / compacted reusable guard phrase
  - Before:
    ```json
    "subtle ruled lines behind the book, clean and separated from face, hands, body, and main item"
    ```
  - After:
    ```json
    "subtle ruled lines behind the body; stays behind or beside the body and does not cover face, hands, or silhouette"
    ```
- Field: `characterCore.extra`
  - Reason: compacted lore/card metadata while preserving identity concept
  - Before:
    ```json
    "Seshat — Mistress of the House of Books; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic."
    ```
  - After:
    ```json
    "Seshat — Mistress of the House of Books; adult female fantasy reinterpretation with Egyptian visual identity; single-character SSR-style card; dark luxury aesthetic."
    ```

### 2450 Wadj-Wer

- File: `data/characters/characters_solar_necropolis_egypt.js`
- Field: `characterCore.identityLock`
  - Reason: removed personalItem terms already represented in personalItem
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
  - After:
    ```json
    [
      "sea-green eyes; distant ocean gaze",
      "green-blue long hair",
      "deep green sea goddess gown with shell jewelry",
      "tall curvy adult feminine sea goddess build"
    ]
    ```
- Field: `characterCore.aura`
  - Reason: detached aura wording from item wording / compacted reusable guard phrase
  - Before:
    ```json
    "subtle wave arc behind cup, clean and separated from face, hands, body, and main item"
    ```
  - After:
    ```json
    "subtle wave arc behind the body; stays behind or beside the body and does not cover face, hands, or silhouette"
    ```
- Field: `characterCore.extra`
  - Reason: compacted lore/card metadata while preserving identity concept
  - Before:
    ```json
    "Wadj-Wer — Great Green Sea; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthetic."
    ```
  - After:
    ```json
    "Wadj-Wer — Great Green Sea; adult female fantasy reinterpretation with Egyptian visual identity; single-character SSR-style card; dark luxury aesthetic."
    ```

### 2555 Yuki-onna Reika

- File: `data/characters/characters_heavenly_kami_war_court_expansion_2.js`
- Field: `characterCore.identityLock`
  - Reason: removed personalItem terms already represented in personalItem
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
  - After:
    ```json
    [
      "Yuki-onna Reika",
      "Blizzard Veil Duelist",
      "dark luxury shrine-war court outfit with lacquer armor plates, elegant kimono layers, clean gold trims, fitted waist, and readable battle silhouette",
      "clean snow crystal halo behind her body"
    ]
    ```
- Field: `personalItem.noItemRemove`
  - Reason: deduped exact duplicate no-item suppression terms
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
  - After:
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

## Counts

- Character count before: 685
- Character count after: 685
- Count unchanged = 685

## High Risk Audit

- High risk before: 14
- High risk after: 3
- Audit command: `node audit_character_pose_consistency.js`

## Node Check Result

- PASS `node --check data/characters/characters_heavenly_kami_war_court_expansion_2.js` 
- PASS `node --check data/characters/characters_heavenly_kami_war_court_expansion_3.js` 
- PASS `node --check data/characters/characters_solar_necropolis_egypt.js` 
- PASS `node --check data/characters/characters_solar_necropolis_egypt_expansion_2.js` 
- PASS `node --check data/characters/characters_norse_valkyrie_dominion.js` 

## Smoke Test no_item / with_item For 14 Characters

- Character count in runtime: 685
- Overall smoke result: FAIL
- Passed: 0
- Failed: 14

| ID | Name | no_item pose | with_item pose | no_item leaks | with_item missing | Result |
| --- | --- | --- | --- | --- | --- | --- |
| 2578 | Konohanasakuya Ash Bloom | UNI-ITEM-01 | UNI-ITEM-01 | physically rigid cherry-blossom flame katana with visible metal edge; physically rigid cherry-blossom flame katana with visible metal edge | none | FAIL |
| 2606 | Takemikazuchi War Marshal | UNI-ITEM-01 | UNI-ITEM-01 | physically rigid lightning katana with bronze guard and command thunder seals; physically rigid lightning katana with bronze guard and command thunder seals | none | FAIL |
| 2404 | Isis | UNI-ITEM-01 | UNI-ITEM-01 | gold ankh staff; gold ankh staff | none | FAIL |
| 2411 | Thoth | UNI-ITEM-01 | UNI-ITEM-01 | papyrus scroll and reed pen; papyrus scroll and reed pen | none | FAIL |
| 2467 | Renenet | UNI-ITEM-01 | UNI-ITEM-01 | name scroll; name scroll | none | FAIL |
| 2474 | Andjety | UNI-ITEM-01 | UNI-ITEM-01 | crook staff; crook staff | none | FAIL |
| 2485 | Ipy | UNI-ITEM-01 | UNI-ITEM-01 | milk cup; milk cup | none | FAIL |
| 2494 | Hatshepsut | UNI-ITEM-01 | UNI-ITEM-01 | ceremonial crook staff; ceremonial crook staff | none | FAIL |
| 2499 | Nefertari | UNI-ITEM-01 | UNI-ITEM-01 | star map scroll; star map scroll | none | FAIL |
| 2302 | Odin | UNI-ITEM-01 | UNI-ITEM-01 | a physically rigid dark rune spear; a physically rigid dark metal spear with visible shaft, sharp spearhead, and small carved rune plates | none | FAIL |
| 2402 | Ra | UNI-ITEM-01 | UNI-ITEM-01 | gold sun disk fan; gold sun disk fan | none | FAIL |
| 2423 | Seshat | UNI-ITEM-01 | UNI-ITEM-01 | star-marked papyrus book; star-marked papyrus book | none | FAIL |
| 2450 | Wadj-Wer | UNI-ITEM-01 | UNI-ITEM-01 | shell cup; shell cup | none | FAIL |
| 2555 | Yuki-onna Reika | UNI-ITEM-01 | UNI-ITEM-01 | physically rigid ice-blue katana with white lacquer scabbard; physically rigid ice-blue katana with white lacquer scabbard | none | FAIL |

## Guardrail Verification

- Disallowed-field checks: PASS
- id/name/faction, face/hair/outfit/body, itemRole, itemFamily, and personalItem.name/description were unchanged for all 14 pilot characters.