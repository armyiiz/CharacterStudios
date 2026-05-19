# V11.1.Y Pose Library Hard Cleanup Report

## Summary

V11.1.Y replaces the active 588-pose runtime library with a curated 180-pose clean core in `poseLibraryV11_clean.js`.

The old duplicate-heavy V9 library and standalone pack files remain in the repo as reference/backup files, but `index.html` no longer loads them by default. Runtime pose selection now prefers `poseLibraryV11Clean` when present.

## Changed Files

- `poseLibraryV11_clean.js`
- `app.js`
- `index.html`
- `tests/v11_1_y_pose_library_hard_cleanup_smoke_test.js`
- `docs/reports/V11_1_Y_POSE_LIBRARY_HARD_CLEANUP_REPORT.md`
- `docs/testing/TESTING_CHECKLIST.md`

## Before Audit

- Old active pose count: `588`
- Duplicate prompt skeletons: `217` unique skeletons, `28` duplicate groups, `399` duplicate-affected poses
- Source distribution: `expansion5:135`, `undefined:117`, `base110:110`, `collection_glamour_expansion:80`, `safe60:60`, `cgl_new_glamour_addon_40:40`, `v10_0_3_no_item_showcase_pack:16`, `v10_0_1_ranged_weapon_pack:15`, `v10_0_1_fallback_pack:9`, `v10_0_1_male_neutral_pack:3`, `v10_0_1_long_item_pack:3`
- Category distribution: `glamour:425`, `weapon_action:43`, `universal_item_showcase:32`, `glamour_showcase:30`, `neutral_showcase:16`, `ranged_weapon:15`, `lifestyle_interaction:12`, `male_neutral_weapon:8`, `long_item:6`, `sitting:1`
- UI category distribution: `standing:110`, `closeup_bust:102`, `sitting:72`, `soft_motion:61`, `combat:53`, `leaning:33`, `thigh_knee_up:30`, `camera_driven_glamour:30`, `undefined:24`, `ranged_weapon:22`, `over_shoulder:19`, `long_item:14`, `glamour_showcase:10`, `male_neutral_weapon:8`

## After Cleanup

- New active pose count: `180`
- Duplicate prompt skeletons: `170` unique skeletons, `10` duplicate groups, `20` duplicate-affected poses
- Source distribution: `v11_1_y_clean_core:117`, `v10_0_3_no_item_showcase_pack:16`, `v10_0_1_ranged_weapon_pack:15`, `base110:11`, `v10_0_1_fallback_pack:9`, `cgl_new_glamour_addon_40:4`, `v10_0_1_male_neutral_pack:3`, `v10_0_1_long_item_pack:3`, `expansion5:1`, `collection_glamour_expansion:1`
- Category distribution: `weapon_action:43`, `universal_item_showcase:32`, `glamour_showcase:30`, `glamour:17`, `neutral_showcase:16`, `ranged_weapon:15`, `lifestyle_interaction:12`, `male_neutral_weapon:8`, `long_item:6`, `sitting:1`
- UI category distribution: `combat:45`, `camera_driven_glamour:30`, `ranged_weapon:20`, `closeup_bust:15`, `long_item:14`, `soft_motion:11`, `glamour_showcase:10`, `standing:9`, `male_neutral_weapon:8`, `sitting:7`, `leaning:5`, `thigh_knee_up:3`, `over_shoulder:3`

## Kept

- V11X camera-driven glamour/body showcase poses
- V115 advanced weapon-only active attack poses
- V117 weapon-family passive hold/rest poses
- V114 starter weapon action and lifestyle interaction poses
- Universal item showcase poses
- No-item showcase poses
- Ranged weapon, male/neutral weapon, long/heavy item, and a small curated legacy V9 core

## Not Loaded By Default

- Bulk `expansion5` glamour duplicates
- Bulk `safe60` glamour/villain/ritual/close-up duplicates
- Bulk `collection_glamour_expansion` duplicates
- Bulk `cgl_new_glamour_addon_40` duplicates except 4 visually distinct survivors
- Most old generic standing, bust, sitting, soft-motion, leaning, and over-shoulder variants whose main difference was title/flavor

## Metadata Fixes

- `active_attack` poses are forced to weapon-only compatibility.
- `ranged_weapon` poses are forced to weapon-only compatibility.
- Old fallback prompts that used negative wording such as "no aiming" or "not a magic attack" were reworded to non-combat/non-pointing language so non-weapon compatible poses do not carry attack/aiming skeleton text.
- Clean file fills missing `uiCategory` metadata for imported weapon poses so the picker does not show an undefined bucket.

## Compatibility Aliases

No compatibility aliases were added. No known saved-state dependency required preserving retired duplicate pose IDs as full active records.

## Validation

Passed:

```powershell
node --check poseLibraryV11_clean.js
node --check app.js
node --check tests/v11_1_y_pose_library_hard_cleanup_smoke_test.js
node tests/v11_1_y_pose_library_hard_cleanup_smoke_test.js
node v11_1_prompt_compression_smoke_test.js
node v11_1_1_pose_item_conflict_smoke_test.js
node tests/v11_1_3_itemrole_pose_lock_smoke_test.js
node tests/v11_1_7_weapon_family_pose_compatibility_smoke_test.js
```

Browser note: local in-app browser verification was attempted at `http://127.0.0.1:8765/index.html`, but the app browser blocked the localhost page with `ERR_BLOCKED_BY_CLIENT`. The new V11.1.Y smoke test covers the required character select -> pose select -> prompt generation flow in the same VM pattern used by existing repo smoke tests.
