# V12.0.9 Remaining Identity Red-Flag Cleanup Report

Date: 2026-05-19

## Scope

- Applied after V12.0.8 in the same working session.
- Used `V12_0_8_RANDOM_20_PERCENT_FACTION_IDENTITY_AUDIT.md` as the cleanup source.
- Updated only `characterCore.face`, `hair`, `outfit`, `body`, `aura`, `extra`, and `identityLock`.
- Did not change ids, names, factions, personal items, item roles, item families, tags, prompt profiles, imports, or exports.

## Cleaned Records

| ID | Character | Audit Issue Addressed |
| ---: | --- | --- |
| 40 | Razortail | item-word hair red flag |
| 58 | Zania Epoch | weak/empty hair |
| 59 | Nova Bell | weak/empty hair |
| 62 | Elise Bloodvial | weak/empty hair |
| 71 | Mirage Nocturne | weak/empty outfit |
| 402 | Lisabel Velnoir | empty aura+extra |
| 603 | Lumia Saintrose | weak face/hair and empty aura+extra |
| 605 | Ephael Eve Mercyrain | empty aura+extra |
| 804 | Kira Noway | empty aura+extra |
| 905 | Leora Timelayer | weak hair |
| 1003 | Selga Roundhorn | weak/empty outfit |
| 1006 | Voran Graysin | empty aura+extra |
| 1603 | Xiaoran | weak/empty hair |
| 1707 | Enma | weak face |
| 1806 | Rook Marblevale | weak/empty hair |
| 1807 | Dormea Teasleep | weak/empty outfit |
| 2007 | Valeria Stormrein | weak face |

## Red-Flag Gate

Post-cleanup scan across all 234 core characters:

| Gate | Result |
| --- | ---: |
| weak/empty face | 0 |
| weak/empty hair | 0 |
| weak/empty outfit | 0 |
| suspicious item word in hair | 0 |
| empty aura+extra | 0 |
| `identityLock < 3` | 0 |
| exact personalItem name/description in identityLock | 0 |

## Spot Checks

- Mara no-item compact prompt keeps face/expression, real hair, beast-hide raider armor, raider role, and battlefield aura.
- Mara no-item compact prompt strips the axe item term.
- Captain Valerius hair does not say `staff hair`.
- Captain Valerius no-item compact prompt strips the staff item term.
- Mirage Nocturne now has a stage magician outfit and six compact identity anchors.

## Validation

- `node --check data/characters/characters_core.js` passed.
- `node --check app.js` passed.
- `node v11_1_prompt_compression_smoke_test.js` passed.
- `node v11_1_1_pose_item_conflict_smoke_test.js` passed.

## Notes

- This cleanup intentionally preserves personal-item semantics. Identity fields describe the character, silhouette, role, aura, and faction identity, while item details remain in `personalItem`.
