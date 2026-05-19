# V12 Kami 12 Duplicate Concept Redesign Report

## Scope

- Updated 12 Heavenly Kami War Court expansion characters that previously used emergency parenthesis suffix names.
- Edited only the intended expansion files:
  - `data/characters/characters_heavenly_kami_war_court_expansion_2.js`
  - `data/characters/characters_heavenly_kami_war_court_expansion_3.js`
- Added `tests/v12_kami_12_duplicate_concept_redesign_smoke_test.js`.
- Change artifact: `docs/reports/v12_kami_12_redesign_changes.json`

## Before / After Names

| ID | Before | After |
| --- | --- | --- |
| 2552 | Tamamo-no-Mae (Nine-Tailed Fox War Courtesan) | Tamamo Foxfire Courtesan |
| 2554 | Kiyohime (Bell-Burning Serpent Bride) | Kiyohime Bell-Burning Bride |
| 2557 | Hannya (Jealous Mask Avenger) | Hannya Crimson Avenger |
| 2558 | Nure-onna (Serpent River Executioner) | Nure-onna Abyss Serpent |
| 2575 | Ukanomitama (Rice Granary Guardian) | Ukanomitama Granary Warden |
| 2576 | Sarutahiko (Crossroads Tengu Vanguard) | Sarutahiko Roadgate Vanguard |
| 2578 | Konohanasakuya-hime (Cherry Blossom Flame Princess) | Konohanasakuya Ash Bloom |
| 2603 | Watatsumi (Deep Tide Commandress) | Watatsumi Tide Commandress |
| 2606 | Takemikazuchi (Thunder Deer Blade General) | Takemikazuchi War Marshal |
| 2607 | Futsunushi (Sacred Sword Marshal) | Futsunushi Blade Arbiter |
| 2611 | Ame-no-Tajikarao (Cave-Door Breaker Queen) | Ame-no-Tajikarao Colossus |
| 2640 | Ame-no-Habakiri (Serpent-Slaying Heaven Blade) | Ame-no-Habakiri Stormfang |

## Fields Changed

Changed for the 12 target records only:

- `name`
- `title`
- `displayName`
- `tags`
- `presentationMode`
- `characterCore.face`
- `characterCore.hair`
- `characterCore.outfit`
- `characterCore.body`
- `characterCore.aura`
- `characterCore.extra`
- `characterCore.identityLock`
- `personalItem.name`
- `personalItem.description`
- `personalItem.withItemPrompt`
- `personalItem.itemGuard`
- `promptProfile.figurePreset`
- `promptProfile.preferredFraming`
- `promptProfile.categories`

Preserved:

- `id`
- `factionId`
- `itemRole`
- `itemFamily`
- active character-loader wiring

## Count And Duplicate Validation

- Active character count: 685
- Heavenly Kami War Court faction count: 150
- Duplicate character IDs: 0
- Duplicate names in Heavenly Kami War Court: 0
- Emergency parenthesis suffix names among the 12 targets: 0

## Item And Pose Compatibility

- All 12 records keep valid `itemRole` / `itemFamily` values.
- All 12 records have readable personal-item prompts.
- All 12 records have compatible with-item poses available.
- `promptProfile.figurePreset` uses supported runtime values; requested glamour direction is represented with `glamour_voluptuous`.

## Search And Browser Validation

Smoke test validation:

- All 12 redesigned characters are searchable by their new names.
- All 12 target IDs resolve to the intended records.

Browser click-flow validation on `http://127.0.0.1:8787/index.html`:

- Header shows `Character Prompt Studio V12`.
- Runtime counters show `685 characters` and `279 poses`.
- Search for `Takemikazuchi War Marshal` finds the redesigned character.
- Selecting the character opens the pose flow and keeps pose controls available.

Screenshot capture timed out in the in-app browser after validation passed, so this follow-up records the browser result without a new screenshot artifact.

## Validation Commands

- `node --check data/characters/index.js`
- `node --check tests/v12_kami_12_duplicate_concept_redesign_smoke_test.js`
- `node tests/v12_kami_12_duplicate_concept_redesign_smoke_test.js`
- `node tests/character_selection_unified_thai_faction_ui_smoke_test.js`
- `node tests/v11_1_3_itemrole_pose_lock_smoke_test.js`
- `node tests/v11_1_7_weapon_family_pose_compatibility_smoke_test.js`

## Known Limitations

- This patch intentionally does not redesign the original non-expansion concepts; it only removes the duplicate-concept pressure from the 12 expansion variants named in the V12 brief.
- Some legacy smoke tests still load older pose baselines by design. Current V12 runtime pose count is covered by the newer X2/Kami tests.

## Result

Pass. The 12 duplicate-concept Kami expansion variants now have distinct V12 concepts, unique display names, preserved IDs, and regression coverage for count, duplicate, search, and pose compatibility.
