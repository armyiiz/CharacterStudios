# Codex Character Expansion Handoff

Read this file first when a new Codex chat is asked to integrate more character batches into this project.

For field-level schema rules, also read:

```txt
docs/reference/CHARACTER_DATA_SCHEMA.md
```

## Current Data Architecture

The site is a plain-script web app. Character files are loaded by `index.html` before `app.js`.

Active character database:

```txt
data/characters/characters_core.js
data/characters/characters_elysian_apex.js
data/characters/characters_elysian_apex_expansion_v2_simple_items.js
data/characters/characters_elysian_apex_expansion_2.js
data/characters/characters_elysian_apex_expansion_3.js
data/characters/index.js
```

`data/characters/index.js` combines:

```txt
coreCharacters
elysianApexCharacters
elysianApexExpansionV2Characters
elysianApexExpansion2Characters
elysianApexExpansion3Characters
```

`charactersReworkedFinalV2` must remain a backward-compatible alias to `charactersReworkedFinalV3`.

Current expected active count after Elysian Apex integration:

```txt
charactersReworkedFinalV3 = 335
charactersReworkedFinalV2 = 335
Active Elysian Apex IDs 2201-2301 = 101
Duplicate IDs = 0
```

## Non-Negotiable Rules

- Do not edit existing character object content unless the user explicitly asks for content changes.
- Do not change IDs, names, titles, `characterCore`, `personalItem`, `tags`, `promptProfile`, or `itemGuard`.
- Do not use or create combined expansion files unless the user explicitly asks.
- Keep expansion batches as separate data files.
- Keep script load order correct: every character data file must load before `data/characters/index.js`, and `data/characters/index.js` must load before `app.js`.
- Preserve `charactersReworkedFinalV2` compatibility.

## Known Past Bug To Avoid

The selection flow broke once because character cards used inline `onclick` with string IDs. A rendered card became malformed:

```html
onclick="selectCharacter("2297")"
```

This made clicks fail before `selectCharacter()` ran.

Current fix in `app.js`:

- Character cards use `data-character-id`.
- `renderCharacters()` attaches direct click listeners after `innerHTML`.
- `selectCharacter(id)` resolves the target from `allActiveCharacters()`.
- `selectedChar()` resolves from `allActiveCharacters()`, not only the visible filtered grid.
- `safeScrollToStep()` wraps step scrolling.
- Static controls are also bound directly by `bindStaticControls()`.
- Important functions are exposed on `window` for plain-script compatibility.

When adding future batches, do not reintroduce inline character-card `onclick`.

## Required Integration Checklist

When integrating a new batch:

1. Inspect the project structure and confirm the current loading style is still plain script globals with CommonJS compatibility.
2. Read `docs/reference/CHARACTER_DATA_SCHEMA.md` before touching a new character batch.
3. Verify the new data file exists under `data/characters/`.
4. Verify the exported/global variable name is correct.
5. Add the file to `index.html` before `data/characters/index.js`.
6. Add the array to `data/characters/index.js` in the requested order.
7. Do not include duplicate or combined expansion arrays.
8. Search for old or duplicate files/references if the user names any.
9. Validate counts from actual runtime data, not hardcoded assumptions.
10. Check duplicate IDs.
11. Check requested ID continuity/ranges.
12. Run syntax checks and smoke tests.
13. Browser-test the complete click flow, not only search/count rendering.
14. Create or update a report file for the integration.

## Required Commands

Run these at minimum after a character integration:

```powershell
node --check data/characters/index.js
node --check app.js
node v11_1_prompt_compression_smoke_test.js
node v11_1_1_pose_item_conflict_smoke_test.js
```

Also run `node --check` on every new or changed character data file.

If `package.json` exists in a future version, inspect available scripts and run relevant ones such as:

```powershell
npm test
npm run build
npm run lint
```

## Required Browser Flow Test

Do not finish by checking only that the site loads and count renders.

Start a temporary static server, open the site, then verify all of this:

```txt
1. Header count renders correctly.
2. Character grid renders visible cards.
3. Character cards have data-character-id and no malformed inline onclick.
4. Click first visible old character.
5. Step 2 becomes active.
6. #characterSummary contains the selected character.
7. #poseList has at least 1 .pose-card.
8. Search for multiple newly added characters.
9. Click each searched new character.
10. Each one reaches Step 2.
11. Each summary contains the selected name.
12. Each has pose cards.
13. Return to Step 1 / change character, then select another character again.
```

There is a browser-console helper for this flow:

```txt
docs/testing/character_selection_flow_regression_debug.js
```

Use it as a reference or paste it into the browser console when useful. If automation has trouble clicking hidden panels because the app stores the current step in localStorage, use a fresh port/origin or clear site storage before each browser validation.

For a shorter testing-only checklist, read:

```txt
docs/testing/TESTING_CHECKLIST.md
```

## Reports To Read Before Future Work

Read these before editing future character integrations:

```txt
docs/reports/ELYSIAN_APEX_REFACTOR_REPORT.md
docs/reports/ELYSIAN_APEX_EXPANSION_INTEGRATION_REPORT.md
docs/reports/CHARACTER_SELECTION_FLOW_FIX_REPORT.md
```

## Suggested Prompt For A New Codex Chat

If this project is opened in a new chat, paste this:

```txt
Before integrating new character batches, read docs/reference/CODEX_CHARACTER_EXPANSION_HANDOFF.md.
Follow its integration checklist exactly.
Do not edit character object content unless I explicitly ask.
After integration, validate full browser click flow: old character and new characters must reach Step 2 with summary and pose cards.
```
