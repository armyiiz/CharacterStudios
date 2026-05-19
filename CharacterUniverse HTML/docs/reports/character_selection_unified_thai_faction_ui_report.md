# Character Selection Unified Thai Faction UI Report

Date: 2026-05-19

## Scope

Unified the Step 1 character selection UI around the original `data.js` character source:

- Visible character source: `cU1 + cU2`
- Faction source: `fU1 + fU2`
- No modular 585-character expansion is added to the visible selector in this patch.
- Original character objects are not mutated; display-only metadata is derived in view models.

## Before / After

| Area | Before | After |
| --- | --- | --- |
| Character selection source | Universe-separated selector state | Unified list from `cU1 + cU2` |
| Visible character count | Split by universe | 250 total, unchanged |
| Faction filter key | Numeric faction id could collide across universes | `displayFactionKey` such as `u1_1`, `u2_1` |
| Faction labels | Mixed source labels | Thai-only display labels |
| Universe controls | Step 1 universe segmented buttons | Removed from Step 1 UI |
| Search | Character text and item text | Also searches original faction name and Thai display faction |

## Display Metadata

Each derived character view now carries:

- `sourceUniverse`
- `displayFactionKey`
- `displayFactionTH`
- `originalFactionName`

The original `f` value stays intact. U1 and U2 faction ids are not merged by number.

## Count Validation

Runtime data count:

- `cU1`: 71
- `cU2`: 179
- Total visible characters: 250

Validated requested faction counts:

- `u1_1`: 6
- `u1_2`: 3
- `u2_7`: 7
- `u2_20`: 22
- `u2_22`: 16
- `u2_23`: visible as `อาณาจักรวัลคีรีนอร์ส`

Waiting-for-update factions now shown:

- `(รออัพเดต) ตำหนักฟ้าบรรพกาล`
- `(รออัพเดต) ภาคีจอกศักดิ์สิทธิ์`
- `(รออัพเดต) ลัทธิสุริยัน`
- `(รออัพเดต) สภาเทพศักติ`
- `(รออัพเดต) จักรวรรดิดารา`
- `(รออัพเดต) ดินแดนราชันย์แห่งพงไพร`

## UI Validation

- The first faction option is `all` / Thai "ทั้งหมด".
- Faction options are source ordered: U1 factions first, then U2 factions, then the requested waiting-for-update factions.
- Faction option labels contain no emoji.
- Faction option labels do not expose English faction names.
- Faction option labels contain no mojibake markers.
- The character grid is a single unified display list.
- Step 1 HTML no longer contains universe selector controls.

## Search And Flow Validation

The new smoke test validates:

- Search by original faction name.
- Search by Thai display faction name.
- Selecting a character moves to Step 2.
- Selected character has compatible poses.
- Prompt generation still returns positive and negative prompts.

## Files Changed

- `app.js`
- `index.html`
- `styles.css`
- `v11_1_2_ux_cleanup_smoke_test.js`
- `tests/character_selection_unified_thai_faction_ui_smoke_test.js`
- `docs/testing/TESTING_CHECKLIST.md`
- `docs/reports/CHARACTER_SELECTION_UNIFIED_THAI_FACTION_UI_REPORT.md`

## Verification

Passed:

```powershell
node --check app.js
node --check tests/character_selection_unified_thai_faction_ui_smoke_test.js
node tests/character_selection_unified_thai_faction_ui_smoke_test.js
node v11_1_2_ux_cleanup_smoke_test.js
```
