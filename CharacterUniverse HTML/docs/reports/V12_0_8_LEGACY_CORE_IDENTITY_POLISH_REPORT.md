# V12.0.8 Legacy Core Identity Polish Report

Date: 2026-05-19

## Scope

- Applied `V12_0_8_LEGACY_CORE_FACTIONS_IDENTITY_POLISH_PATCH.md`.
- Updated only `characterCore.face`, `hair`, `outfit`, `body`, `aura`, `extra`, and `identityLock`.
- Covered legacy core faction characters `id 1` through `id 53`.
- Did not change character ids, names, genders, factions, tags, `presentationMode`, `personalItem`, item roles, item families, item prompts, `promptProfile`, imports, or exports.

## Result

| Check | Result |
| --- | ---: |
| Core characters loaded | 234 |
| V12.0.8 characterCore patches applied | 53 |
| Active web characters after patch | 685 |

## Notable Fixes

- Mara now has a real face/expression, real hair description, beast-hide raider armor details, raider role identity, and battlefield aura.
- Captain Valerius hair now reads `long black hair streaked with ash-gray`; it no longer has the `staff hair` typo.
- Legacy compact character blocks are richer than name + hair + outfit because each patched character now has face, body, aura, role/extra, and identityLock anchors.

## Validation

- `node --check data/characters/characters_core.js` passed.
- `node --check app.js` passed.
- `node v11_1_prompt_compression_smoke_test.js` passed.
- `node v11_1_1_pose_item_conflict_smoke_test.js` passed.
- Mara compact no-item prompt includes face/expression, hair, beast-hide raider armor, raider role, and battlefield aura.
- Captain Valerius no-item compact prompt strips the staff item term.

## Follow-Up

This patch was not shipped alone. V12.0.9 cleanup was applied in the same session to address the remaining post-audit red flags.
