# Character Selection Flow Fix Report

## Root Cause

The character cards were rendered with inline `onclick="selectCharacter(${JSON.stringify(c.id)})"`.

After the Elysian Apex expansion integration, many active character IDs are strings. Rendering a string ID inside a double-quoted HTML attribute produced malformed markup such as:

```html
onclick="selectCharacter("2297")"
```

That caused a syntax error before `selectCharacter()` could run, so clicking a character card did not move the UI to Step 2.

The selection path also depended too much on the currently visible universe/filter state. If stale filters hid the selected character, `selectedChar()` could return null even when the character existed in the active integrated database.

## Files Changed

- `app.js`
  - Fixed character card click binding.
  - Made character selection search the full active character database.
  - Added safe step scrolling.
  - Added direct event listeners for static controls used by the selection flow.
  - Exposed key functions on `window` for plain-script compatibility.
- `docs/testing/character_selection_flow_regression_debug.js`
  - Added a browser-console regression helper for the character selection flow.

No character data files were modified.

## Exact Functions Changed

- `scrollToStep(step, behavior)`
  - Kept existing behavior.
- `safeScrollToStep(step)`
  - New safe wrapper around `scrollToStep()`.
- `selectedChar()`
  - Now resolves from `allActiveCharacters()` instead of only `allChars()`.
- `selectCharacter(id)`
  - Now finds the target from `allActiveCharacters()`.
  - Switches universe when needed.
  - Clears stale faction/gender/role/search filters that could hide the selected character.
  - Stores `state.selectedCharId` as a string.
  - Resets pose paging and pose filters.
  - Ensures a valid pose is selected.
  - Verifies selection succeeded before entering Step 2.
  - Uses `safeScrollToStep(2)`.
- `goStep(step)`
  - Uses `safeScrollToStep(step)`.
- `renderCharacters()`
  - Character cards now use `data-character-id`.
  - Removed inline character-card `onclick`.
  - Adds direct click listeners after rendering cards.
- `bindStaticControls()`
  - New direct listener binding for step buttons, universe buttons, filters, and character search.
- `init()`
  - Calls `bindStaticControls()` before rendering.

## Browser Click-Flow Test Result

Result: pass.

Validated on temporary local servers with fresh ports to avoid stale browser cache and localStorage state.

| Case | Result |
| --- | --- |
| Initial character count renders `335` | pass |
| Character grid has visible cards | pass |
| Clicking first visible existing character moves to Step 2 | pass |
| First visible existing character renders pose cards | pass, `12` pose cards |
| Searching/selecting `Zeus` moves to Step 2 | pass |
| `Zeus` summary contains name | pass |
| `Zeus` pose cards render | pass, `12` pose cards |
| Searching/selecting `Helen` moves to Step 2 | pass |
| `Helen` summary contains name | pass |
| `Helen` pose cards render | pass, `12` pose cards |
| Searching/selecting `Gaia` moves to Step 2 | pass |
| `Gaia` summary contains name | pass |
| `Gaia` pose cards render | pass, `12` pose cards |
| Searching/selecting `Cerberus` moves to Step 2 | pass |
| `Cerberus` summary contains name | pass |
| `Cerberus` pose cards render | pass, `12` pose cards |
| Character cards no longer have inline `onclick` | pass |

Note: the browser automation driver emitted its own `dispatchEvent` syntax messages while using automated locator clicks. The app state still changed correctly, and character-card inline `onclick` was removed. No character-data or app-runtime error was found from the fixed selection path.

## Final Character Count

- `charactersReworkedFinalV3`: `335`
- `charactersReworkedFinalV2` alias: `335`

## Elysian Apex Count

- Active Elysian Apex IDs `2201-2301`: `101`

## Duplicate ID Check

Result: pass.

- Duplicate IDs in `charactersReworkedFinalV3`: none.

## Validation Result

- `node --check app.js`: pass
- `node --check data/characters/index.js`: pass
- `node --check docs/testing/character_selection_flow_regression_debug.js`: pass
- `node v11_1_prompt_compression_smoke_test.js`: pass
- `node v11_1_1_pose_item_conflict_smoke_test.js`: pass

## Manual Follow-Up

- None required for character data.
- If future browser tests use the same automation surface, ignore the automation-driver `dispatchEvent` message only when DOM state and app behavior pass and no malformed inline app handlers remain.
