# V12 Kami Expansions + Camera Glamour Pose Pack Report

Date: 2026-05-19

## Summary

Integrated Heavenly Kami War Court Expansions 2-3 and the V11.1.X2 camera-driven glamour pose pack as the V12 runtime patch.

The app header and storage keys now use `Character Prompt Studio V12`, while the active character source remains `charactersReworkedFinalV3`.

## Changed Files

- `index.html`
- `app.js`
- `data/characters/index.js`
- `data/characters/characters_heavenly_kami_war_court_expansion_2.js`
- `data/characters/characters_heavenly_kami_war_court_expansion_3.js`
- `pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js`
- `tests/v11_1_x2_kami_expansions_camera_glamour_pose_pack_smoke_test.js`
- Existing smoke tests updated for the new active counts/loaders.
- `docs/testing/TESTING_CHECKLIST.md`

## Character Counts

| Check | Result |
| --- | ---: |
| Before character count | 585 |
| Added Kami expansion characters | 100 |
| After character count | 685 |
| Active source | `charactersReworkedFinalV3` |
| Faction 25 count before | 50 |
| Faction 25 count after | 150 |

Kami files loaded:

- `characters_heavenly_kami_war_court_expansion_2.js`: 50
- `characters_heavenly_kami_war_court_expansion_3.js`: 50

IDs `2552-2651` are present.

## Character Duplicate Results

| Check | Result |
| --- | ---: |
| Duplicate character IDs | 0 |
| Duplicate names inside Faction 25 | 0 |

The incoming files had no duplicate names internally, but 12 names duplicated existing Kami core records. Those new expansion records received name-only disambiguating suffixes based on their existing titles. IDs, item roles, item families, character core, personal items, prompt profiles, tags, and guards were not changed.

## Pose Counts

| Check | Result |
| --- | ---: |
| Before active pose count | 259 |
| Pose candidate count | 20 |
| Added pose count | 20 |
| Skipped duplicate count | 0 |
| After active pose count | 279 |
| Duplicate pose IDs | 0 |

Duplicate audit result: all 20 candidates were kept. Existing nearby poses were similar in broad camera family, but each kept candidate had distinct framing, body staging, or camera emphasis.

## Pose Metadata Rules

All `V11X2-CG-01` through `V11X2-CG-20` use:

- `category: "glamour_showcase"`
- `subcategory: "camera_driven_body_showcase"`
- `uiCategory: "camera_driven_glamour"`
- `requiresItem: false`
- `noItemSafe: true`
- `itemActionType: "none"`
- `compatibleItemRoles: ["none"]`

With-item mode hides the X2 camera poses for weapon and non-weapon item users. No passive item placement is applied to these poses.

## Compatibility Results

Passed spot checks:

- Hoichi is `instrument_item` and does not see active weapon attack poses.
- Abe no Seimei is `ritual_item` and does not see active slash/thrust poses.
- Murasaki Shikibu is `document_item` and does not see active slash/thrust poses.
- Yamata-no-Orochi, Hangaku Gozen, Muramasa-hime, Ryujin, and Benkei see compatible weapon/battle pose families.
- X2 positive prompt sample avoids `sword`, `katana`, `blade`, `sheath`, `scabbard`, `spear`, `bow`, `gun`, `staff`, `item in hand`, and `handheld prop`.
- X2 prompt sample keeps camera intent and Complexity Lock.

## Thai / UI Result

- Thai-only faction filter remains active.
- Universe tabs were not reintroduced.
- Faction filters are built from actual visible characters.
- Faction 25 appears in the filter with 150 active characters.
- Mojibake/emoji/English faction label checks passed in the unified Thai faction UI smoke test.

## Browser Click-Flow Result

Browser QA passed at `http://127.0.0.1:8787/index.html`:

- Header showed `Character Prompt Studio V12`.
- Header counts showed `685 characters` and `279 poses`.
- No Universe tab controls were present.
- No inline `onclick`, `onchange`, or `oninput` handlers were present.
- Searching `Ryujin` showed new character ID `2602`.
- Clicking Ryujin moved to Step 2.
- Step 2 rendered 12 compatible pose cards.

Screenshot evidence:

- `docs/reports/v12_browser_qa_ryujin.png`

## Validation

Passed:

```powershell
node --check app.js
node --check data/characters/index.js
node --check data/characters/characters_heavenly_kami_war_court_expansion_2.js
node --check data/characters/characters_heavenly_kami_war_court_expansion_3.js
node --check pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js
node --check tests/character_selection_unified_thai_faction_ui_smoke_test.js
node --check tests/v11_1_x2_kami_expansions_camera_glamour_pose_pack_smoke_test.js
node tests/character_selection_unified_thai_faction_ui_smoke_test.js
node v11_1_2_ux_cleanup_smoke_test.js
node tests/v11_1_3_itemrole_pose_lock_smoke_test.js
node tests/v11_1_5_egypt_kami_pose_integration_smoke_test.js
node tests/v11_1_6_pose_intent_item_suppression_smoke_test.js
node tests/v11_1_6_1_with_item_passive_placement_smoke_test.js
node tests/v11_1_6_2_weapon_with_item_pose_filter_smoke_test.js
node tests/v11_1_7_weapon_family_pose_compatibility_smoke_test.js
node tests/v11_1_y_pose_library_hard_cleanup_smoke_test.js
node tests/v11_1_z_post_cleanup_pose_expansion_79_smoke_test.js
node tests/v11_1_x2_kami_expansions_camera_glamour_pose_pack_smoke_test.js
```

## Known Limitations

- Browser QA was a focused desktop click-flow check, not a full visual regression sweep across mobile/tablet.
- The V11.1.2, V11.1.3, and V11.1.7 historical smoke tests still exercise their legacy V9 pose baseline path. Current V12 runtime pose count is covered by the unified UI, V11.1.Y/Z, and new V12 X2 smoke tests.
