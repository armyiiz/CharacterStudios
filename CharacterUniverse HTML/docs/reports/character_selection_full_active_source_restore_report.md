# Character Selection Full Active Source Restore Report

Date: 2026-05-19

## Root Cause

The unified Thai faction UI patch rebuilt the visible character list from the legacy `data.js` arrays only:

- `cU1`: 71
- `cU2`: 179
- Visible total: 250

That bypassed the runtime active character source already wired through `data/characters/index.js`.

## Restore

The character selection UI now uses the active runtime source when it is available:

- Active source: `charactersReworkedFinalV3`
- Restored visible count: 585
- Legacy fallback count: 250

Legacy characters still receive `u1_*` / `u2_*` display faction keys through a lookup against `cU1` and `cU2`. Modular characters receive `f*` keys from their `factionId`.

## Faction Summary

Validated active modular factions:

- `f22`: `วิหารเทพจุติ`
- `f23`: `อาณาจักรวัลคีรีนอร์ส`, 100 characters
- `f24`: `นครสุสานสุริยา`, 100 characters
- `f25`: `ศาลเจ้าเทวะสวรรค์`, 50 characters

The six reserved future labels remain defined for future use, but they are not shown in the normal active filter because the current filter is a normal select menu without disabled waiting-option support.

## Thai Encoding

Validated:

- Faction filter labels contain no mojibake markers.
- Faction filter labels contain no emoji.
- Faction filter labels do not expose English faction names.
- `data/characters/index.js` Norse Valkyrie metadata was restored to clean UTF-8 Thai.

## Click Flow

Smoke test confirms:

- Selecting a character moves to Step 2.
- Selected character has compatible poses.
- Prompt generation returns positive and negative prompts.

## Verification

Passed:

```powershell
node --check app.js
node --check data/characters/index.js
node --check tests/character_selection_unified_thai_faction_ui_smoke_test.js
node tests/character_selection_unified_thai_faction_ui_smoke_test.js
node v11_1_2_ux_cleanup_smoke_test.js
```

