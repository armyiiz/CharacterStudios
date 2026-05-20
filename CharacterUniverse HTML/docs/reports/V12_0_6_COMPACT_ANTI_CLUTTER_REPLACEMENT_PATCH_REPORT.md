# V12.0.6 Compact Anti-Clutter Replacement Patch Report

Date: 2026-05-19

## Scope

- Updated compact prompt assembly only in `app.js`.
- Replaced the compact complexity lock rather than adding a new guard block.
- Kept `Full Debug` prompt generation unchanged.
- Did not edit character data, ids, names, pose data, item schema, or faction data.

## Changes

- Added `COMPACT_CLUTTER_POLICY` as a short internal policy marker for future maintenance:
  - outfit: `preserve_identity_no_new_detail`
  - background: `simple_secondary`
  - effects: `soft_low_particle`
- Replaced compact complexity lock with:
  - `Complexity lock: same design, lower clutter. No new embellishment, upgrades, or detail density. Keep identity jewelry, trims, and motifs; do not add new ones. Use clean large shapes, simple background, soft low-particle effects.`
- Replaced compact negative clutter terms with concise added/new wording:
  - `visual clutter, detail escalation, ornate upgrade, added ornaments, added trims, new decorative clutter, busy background, dense particles, noisy texture`
- Replaced compact dark-luxury background wording with:
  - `minimal dark-luxury setting, subtle reflection, soft simple background`

## Validation

Case: `Rosalia Atherblood` + `Neutral Hero Three-Quarter` + `with_item` + compact mode.

| Version | Positive | Negative | Total |
| --- | ---: | ---: | ---: |
| V12.0.5 baseline | 1972 | 807 | 2779 |
| V12.0.6 after patch | 1933 | 792 | 2725 |

Result: V12.0.6 is shorter than V12.0.5 and stays below the allowed 5% ceiling of 2918 characters.

Full Debug check:

- Full Debug still contains the original full complexity lock.
- Full Debug does not contain the compact `same design, lower clutter` replacement lock.

Regression checks:

- `node --check app.js` passed.
- `node v11_1_prompt_compression_smoke_test.js` passed.
- `node v11_1_1_pose_item_conflict_smoke_test.js` passed.

Named prompt-compression smoke results:

| Case | Before | After | Reduction |
| --- | ---: | ---: | ---: |
| Gaela Cross / with_item / Balcony Lean with Hip Emphasis | 5076 | 2078 | 59.1% |
| Artemis / no_item / Universal Close-Up Shoulder Turn | 4627 | 1813 | 60.8% |
| Mika Sparkbeat / with_item / Relaxed Idol Baton Pose | 4478 | 1890 | 57.8% |
| Brock Titan / no_item / Universal No-Item Hero Standing | 2507 | 1456 | 41.9% |
| Professor Hemlock / with_item / Professional Tool Side Presentation | 2759 | 1319 | 52.2% |

## Notes

- The negative prompt now avoids `extra jewelry` and `extra trims`.
- The compact lock protects existing identity jewelry, trims, and motifs while blocking newly added clutter.
