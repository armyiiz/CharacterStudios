# V11.1.2 UX Cleanup + Desktop Floating Copy Panel Report

## Summary

Patch name: V11.1.2 Desktop Floating Copy Panel + UX Cleanup + Static Control Binding Patch

This patch keeps the character data, pose library, modular character loading, schema bridge, prompt compression, pose-item conflict guard, no-item filter, Glamour Showcase, and mobile sticky copy bar intact. The work is scoped to static controls, copy UI, step locking, debug visibility, state migration, smoke coverage, and desktop/mobile UX wiring.

## Files Changed

- `index.html`
- `styles.css`
- `app.js`
- `v11_1_2_ux_cleanup_smoke_test.js`
- `V11_1_2_UX_CLEANUP_FLOATING_COPY_REPORT.md`

## HTML Changes

- Bumped visible version text to `Character Prompt Studio V11.1.2`.
- Removed inline static handlers from the main UI:
  - `onclick`
  - `onchange`
  - `oninput`
- Replaced static control wiring with `data-action` attributes.
- Added the desktop floating copy panel:
  - `#desktopFloatingCopyPanel`
  - `#floatingCopyCollapsedButton`
  - copy buttons for Positive, Negative, Both, and full prompt view
- Preserved `#mobileCopyBar` and rewired its buttons through the shared `data-action` copy handlers.

## CSS Changes

- Added `.desktop-floating-copy-panel` as a fixed right-side desktop copy panel.
- Added `.floating-copy-collapsed` for the collapsed desktop copy state.
- Hid desktop floating copy UI at `max-width: 1024px`.
- Hid duplicate desktop copy panels at `min-width: 1025px`:
  - `#step2QuickCopy`
  - `#step3 .prompt-copy-panel`
  - `#step3 .copy-actions`
- Added `.step-pill.is-disabled` and disabled button styling.
- Added clearer focus-visible styling.
- Preserved mobile sticky copy layout and safe-area behavior.

## JavaScript Changes

- Added idempotent static control binding:
  - `staticControlsBound`
  - `handleStaticControlClick()`
  - one delegated `document.addEventListener('click', ...)`
- Added centralized copy functions:
  - `copyPositivePrompt()`
  - `copyNegativePrompt()`
  - `copyBothPrompts()`
- Preserved existing quick-copy aliases for compatibility, but routed them through the central copy path.
- Added step access gating:
  - `canAccessStep()`
  - `updateStepPills()`
- Changed character selection so it no longer auto-selects the first pose. Step 3 and copy remain disabled until the user selects a pose.
- Added floating copy panel state and syncing:
  - `floatingCopyCollapsed`
  - `updateFloatingCopyPanel()`
  - `toggleFloatingCopyPanel()`
- Bumped storage keys:
  - `characterPromptStudio_v11_1_2`
  - `characterPromptStudio_v11_1_2_prompt_history`
- Gated developer-facing UI text behind Full Debug mode:
  - `item-guard hidden`
  - `Recommended ตอนนี้ดัน collection/glamour...`
  - `pose-item conflict: ...`

## Inline Onclick Removal

Result: no `onclick`, `onchange`, or `oninput` remains in `index.html`, `app.js`, or `styles.css`.

Static and generated controls now use `data-action`, including:

- step buttons
- copy buttons
- mobile sticky copy buttons
- prompt mode toggle
- prompt tab buttons
- pose view buttons
- item mode buttons
- dynamic character cards
- dynamic pose cards
- history copy buttons
- load-more buttons

## Copy Button Cleanup

Desktop now uses the floating copy panel as the primary copy surface.

On desktop, duplicate copy regions are hidden:

- Step 2 Quick Copy
- Step 3 prompt-copy panel
- Step 3 bottom copy-actions

Mobile keeps the existing sticky copy bar. Copy actions still route through the same central copy functions.

## Floating Copy Panel Behavior

Fresh desktop state:

- Panel is visible.
- Copy buttons are disabled.
- Helper text says the user must choose a character first.

After selecting a character:

- Step 2 is enabled.
- Step 3 remains disabled.
- Copy buttons remain disabled until a pose is selected.

After selecting a pose:

- Floating panel shows character, pose, and item/style mode.
- Copy Positive, Copy Negative, Copy Both, and full prompt view are enabled.
- Collapsing the panel shows the compact `Copy` button.

## Step Disabled Behavior

- Step 1 is always enabled.
- Step 2 is disabled until a character is selected.
- Step 3 is disabled until both character and pose are selected.
- Disabled step controls set:
  - `disabled`
  - `aria-disabled="true"`
  - `.is-disabled`
  - title helper text

## Debug Text Visibility

Default mode uses user-facing copy:

- `แนะนำ ... ท่า`
- `ท่าแนะนำที่เข้ากับตัวละครนี้`
- `ผ่านตัวกรองท่า`

Full Debug mode preserves technical details for inspection:

- `item-guard hidden`
- `Recommended ตอนนี้ดัน collection/glamour...`
- `pose-item conflict: ...`

## Node Syntax Checks

Passed:

- `node --check app.js`
- `node --check data.js`
- `node --check poseLibraryV9.js`
- `node --check data/characters/*.js`
- `node --check v11_1_2_ux_cleanup_smoke_test.js`

## Smoke Tests

Passed:

- `node v11_1_2_ux_cleanup_smoke_test.js`
  - 435 active characters
  - 503 poses
  - no inline static handlers
  - single delegated click binding
  - floating copy panel exists
  - mobile sticky bar remains
  - debug jargon gated
  - desktop duplicate copy panels hidden

- `node v11_1_prompt_compression_smoke_test.js`
  - Gaela Cross, Artemis, Mika Sparkbeat, Brock Titan, and Professor Hemlock all passed
  - pose count stayed 503
  - active web character count matches schema

- `node v11_1_1_pose_item_conflict_smoke_test.js`
  - 435 active characters
  - 503 poses
  - min compatible poses: 29
  - Gaela dual blade guard passed
  - Artemis no-item bow/arrow removal passed
  - Artemis with-item bow pose allowed
  - Professor Hemlock syringe/tool behavior passed
  - Mika matching idol/lifestyle pose allowed

## Browser QA

Checked with the local site served over HTTP.

Desktop 1440px:

- Fresh page starts on Step 1.
- Step 2 and Step 3 are disabled.
- Desktop floating copy panel is visible by default.
- Floating copy buttons are disabled before a character and pose are selected.
- Default UI has no `item-guard hidden` or `Recommended ตอนนี้...` text.
- No inline handlers found in the DOM.
- Selecting a pose enables Step 3 and floating copy buttons.
- Copy Positive creates one history entry and one toast.
- Desktop duplicate Step 3 copy regions have no visible copy buttons.
- No console errors were reported.

Tablet 1024px:

- Floating copy panel is hidden.
- Collapsed floating copy button is hidden.
- Mobile sticky copy node remains available.

Mobile 390px:

- Floating copy panel is hidden.
- Collapsed floating copy button is hidden.
- Mobile sticky copy bar remains available and displays when prompt is ready.

## Known Limitations

- The app still loads Tailwind from CDN, and the browser keeps the existing production warning. This patch did not change asset tooling.
- Browser automation could not reliably clear old localStorage in-place, so the patch bumps the storage key to V11.1.2 to avoid stale V11.1 UI state.
