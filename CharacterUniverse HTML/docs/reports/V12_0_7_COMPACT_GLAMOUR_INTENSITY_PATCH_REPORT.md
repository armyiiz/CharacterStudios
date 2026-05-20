# V12.0.7 Compact Glamour Intensity Patch Report

Date: 2026-05-19

## Scope

- Updated compact prompt wording in `app.js`.
- Did not edit character data, ids, names, pose data, item schema, or faction data.
- Kept the direction adult, clothed, non-explicit, and character-card focused.

## Problem

After the compact compression and anti-clutter patches, the prompt became cleaner but slightly too restrained. The compact figure language emphasized readability more than glamour, so repeated renders could look safe but less attractive than the intended fantasy character-card direction.

## Changes

- Changed compact style wording from `otome character-card art` to `otome glamour card art`.
- Strengthened female compact figure language with:
  - `attractive adult feminine glamour`
  - `confident sensual posture`
  - `alluring gaze`
  - `elegant S-curve`
  - `waist-to-hip line`
  - `readable clothed curves`
- Preserved clothed/non-explicit framing by keeping the wording focused on posture, gaze, silhouette, and character-card appeal.
- Improved non-glamour female and male figure wording so default prompts feel more attractive without becoming explicit.

## Sample Check

Case: `Rosalia Atherblood` + `Neutral Hero Three-Quarter` + `with_item` + compact mode.

| Version | Positive | Negative | Total |
| --- | ---: | ---: | ---: |
| V12.0.6 baseline | 1933 | 792 | 2725 |
| V12.0.7 after patch | 1996 | 792 | 2788 |

The compact output now includes glamour-intensity language and does not include explicit/nudity terms.

Additional checked cases:

| Case | Positive | Negative | Total | Glamour cue present | Explicit term present |
| --- | ---: | ---: | ---: | --- | --- |
| Gaela Cross / with_item / Balcony Lean with Hip Emphasis | 2141 | 788 | 2929 | yes | no |
| Artemis / no_item / Universal Close-Up Shoulder Turn | 1876 | 972 | 2848 | yes | no |

## Regression Validation

- `node --check app.js` passed.
- `node v11_1_prompt_compression_smoke_test.js` passed.
- `node v11_1_1_pose_item_conflict_smoke_test.js` passed.
- `node --check tests/v12_v11x2_camera_glamour_character_agnostic_audit_smoke_test.js` passed.
- `node tests/v12_v11x2_camera_glamour_character_agnostic_audit_smoke_test.js` passed.

Named prompt-compression smoke results:

| Case | Before | After | Reduction |
| --- | ---: | ---: | ---: |
| Gaela Cross / with_item / Balcony Lean with Hip Emphasis | 5076 | 2141 | 57.8% |
| Artemis / no_item / Universal Close-Up Shoulder Turn | 4627 | 1876 | 59.5% |
| Mika Sparkbeat / with_item / Relaxed Idol Baton Pose | 4478 | 1953 | 56.4% |
| Brock Titan / no_item / Universal No-Item Hero Standing | 2507 | 1503 | 40.0% |
| Professor Hemlock / with_item / Professional Tool Side Presentation | 2759 | 1366 | 50.5% |

## Notes

- This patch increases glamour intensity through pose, gaze, camera-card appeal, and clothed silhouette language.
- It intentionally avoids nudity, lingerie, explicit bedroom framing, or anatomy-only prompting.
