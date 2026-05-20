# V12.0.8.1 Wearable Item No-Item Handling Report

Date: 2026-05-20

## Scope

- Updated runtime prompt handling in `app.js`.
- Added a focused regression test at `tests/v12_0_8_1_wearable_no_item_smoke_test.js`.
- Updated Maya's `characterCore.outfit` wording in `data/characters/characters_core.js`.
- Did not change ids, names, factions, item roles, item families, personal item names, pose data, or prompt profile routing.

## Problem

`no_item` mode treated wearable body equipment like removable handheld items. For Maya, this produced a contradiction:

- Positive prompt preserved gauntlet-related identity and aura.
- Item mode said hands were empty.
- Negative prompt banned `wearing`, `gauntlet`, and the full gauntlet item name.

## Changes

- Added `isWearableEquipment()` and `itemPromptClass()`.
- Classifies equipment as `wearable_equipment` when tags include `wearable`, the item prompt starts with `wearing`, or item text clearly describes worn equipment.
- In `no_item` mode, wearable equipment is preserved in the character/outfit block.
- In `no_item` mode, wearable equipment now outputs `Item mode: no handheld item`.
- Wearable equipment terms are no longer added to no-item negative terms.
- Full Debug now shows `Item classification: wearable_equipment`.
- Maya outfit wording now says `worn heavy steel brawler gauntlets as part of her combat outfit`.

## Maya Expected Result

Validated with `Maya` + `Universal No-Item Hero Standing` + compact mode:

| Check | Result |
| --- | --- |
| compact positive keeps gauntlets | pass |
| compact positive keeps gauntlets as outfit equipment | pass |
| compact item mode says `no handheld item` | pass |
| compact negative does not contain `gauntlet` | pass |
| compact negative does not contain `wearing` | pass |
| compact negative still blocks separate handheld clutter | pass |
| Full Debug shows `wearable_equipment` | pass |

## Validation

- `node --check app.js` passed.
- `node --check data/characters/characters_core.js` passed.
- `node --check tests/v12_0_8_1_wearable_no_item_smoke_test.js` passed.
- `node tests/v12_0_8_1_wearable_no_item_smoke_test.js` passed.
- `node v11_1_prompt_compression_smoke_test.js` passed.
- `node v11_1_1_pose_item_conflict_smoke_test.js` passed.
- `node tests/v12_v11x2_camera_glamour_character_agnostic_audit_smoke_test.js` passed.

## Notes

- `no_item` now means no separate handheld weapon, prop, staff, book, instrument, or carried object.
- Worn outfit equipment can remain visible when it is part of the character design.
