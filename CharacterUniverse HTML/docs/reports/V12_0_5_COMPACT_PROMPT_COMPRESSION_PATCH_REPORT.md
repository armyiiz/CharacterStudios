# V12.0.5 Compact Prompt Compression Patch Report

Date: 2026-05-19

## Scope

- Changed compact prompt assembly only in `app.js`.
- Did not edit character data, ids, names, pose data, item schema, or faction data.
- Preserved `Full Debug` behavior as the verbose inspection path.

## Problem

Compact prompts were still too long because the generator repeated safety intent across character, identity, guard, complexity, and negative blocks. Non-weapon personal items also leaked their long item names into repeated negative phrases, making the negative prompt overly fear-based.

## Changes

- Added compact-only base negative and compact-only complexity lock constants.
- Shortened compact style wording while keeping the same style intent.
- Reworked compact character output so outfit and aura are declared once instead of repeated inside identity specifics.
- Shortened compact identity and figure blocks.
- Compressed pose wording to keep pose intent without reusing long pose guard sentences.
- Replaced long non-weapon item negative phrases with generic item-role terms such as `weaponized staff`, `melee attack`, `swinging`, `slashing`, `stabbing`, `striking`, and `blocking`.
- Merged repeated guard language into one `Composition guard` block.
- Preserved full debug prompt generation for deeper troubleshooting.

## Rosalia Baseline Check

Case: `Rosalia Atherblood` + `Neutral Hero Three-Quarter` + `with_item` + compact mode.

| Version | Positive | Negative | Total |
| --- | ---: | ---: | ---: |
| Before patch | 3362 | 1784 | 5146 |
| After patch | 1972 | 807 | 2779 |

Result: compact prompt total is now 54.0% of the measured baseline.

## Regression Validation

- `node --check app.js` passed.
- `node v11_1_prompt_compression_smoke_test.js` passed.
- `node v11_1_1_pose_item_conflict_smoke_test.js` passed.

Named prompt-compression smoke results:

| Case | Before | After | Reduction |
| --- | ---: | ---: | ---: |
| Gaela Cross / with_item / Balcony Lean with Hip Emphasis | 5076 | 2117 | 58.3% |
| Artemis / no_item / Universal Close-Up Shoulder Turn | 4627 | 1852 | 60.0% |
| Mika Sparkbeat / with_item / Relaxed Idol Baton Pose | 4478 | 1929 | 56.9% |
| Brock Titan / no_item / Universal No-Item Hero Standing | 2507 | 1495 | 40.4% |
| Professor Hemlock / with_item / Professional Tool Side Presentation | 2759 | 1358 | 50.8% |

## Notes

- Compact mode now favors a single clear declaration of item identity in the positive prompt.
- Negative prompt avoids repeating long item descriptions and uses generic role-based risk terms instead.
- Weapon-role characters still keep weapon-family conflict protection through existing pose compatibility and negative suppression checks.
