# Jules Command — Rebuild Character Prompt Studio V12 as React

## Mission

You are working with the uploaded current plain-script web project:

```txt
PromptStudio.zip
CharacterUniverse/
```

Build a new React version from scratch while preserving the current project behavior, data, rules, and validated runtime counts.

This is not a visual redesign task first. This is a controlled rebuild of the current Character Prompt Studio into a maintainable React/Vite architecture.

The current plain-script app is a data-driven character prompt generator with a 3-step flow:

```txt
1. Select character
2. Select compatible pose
3. Generate/copy positive and negative prompt
```

The React version must reproduce the current behavior before adding new features.

---

## Current Project Snapshot From Uploaded ZIP

Project root:

```txt
CharacterUniverse/
```

Main files:

```txt
index.html
styles.css
app.js
data.js
poselibraryv11_clean.js
poseLibraryV9.js
```

Current script loading order in `index.html`:

```txt
data.js
data/characters/characters_core.js
data/characters/characters_elysian_apex.js
data/characters/characters_elysian_apex_expansion_v2_simple_items.js
data/characters/characters_elysian_apex_expansion_2.js
data/characters/characters_elysian_apex_expansion_3.js
data/characters/characters_norse_valkyrie_dominion.js
data/characters/characters_norse_valkyrie_dominion_expansion_2.js
data/characters/characters_solar_necropolis_egypt.js
data/characters/characters_solar_necropolis_egypt_expansion_2.js
data/characters/characters_heavenly_kami_war_court.js
data/characters/characters_heavenly_kami_war_court_expansion_2.js
data/characters/characters_heavenly_kami_war_court_expansion_3.js
data/characters/index.js
poseLibraryV11_clean.js / poselibraryv11_clean.js
pose_packs/post_cleanup_pose_expansion_final_79.js
pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js
app.js
```

Important casing note:

```txt
The uploaded ZIP contains `poselibraryv11_clean.js` with lowercase `l`, while `index.html` references `poseLibraryV11_clean.js`.
On case-sensitive systems this can break. Normalize this in the React rebuild and document the final filename.
```

Validated runtime counts from the uploaded files:

```txt
Active characters: 685
Active poses: 279
Duplicate character IDs: 0
Duplicate character names: 0
Duplicate pose IDs: 0
```

Character module counts:

```txt
coreCharacters: 234
elysianApexCharacters: 16
elysianApexExpansionV2Characters: 30
elysianApexExpansion2Characters: 25
elysianApexExpansion3Characters: 30
norseValkyrieDominionCharacters: 50
norseValkyrieDominionExpansion2Characters: 50
solarNecropolisEgyptCharacters: 50
solarNecropolisEgyptExpansion2Characters: 50
heavenlyKamiWarCourtCharacters: 50
heavenlyKamiWarCourtExpansion2Characters: 50
heavenlyKamiWarCourtExpansion3Characters: 50
```

Pose source counts:

```txt
poseLibraryV11Clean / poseLibraryV11_clean: 180
postCleanupPoseExpansionFinal79: 79
v11x2CameraDrivenGlamourPosePack20: 20
Total active poses: 279
```

Do not use `data.js` alone as the final visible character source. `data.js` is legacy/support data. The active character source must include the modular character files.

---

## Current Character Data Architecture

Current stable schema reference:

```txt
docs/reference/CHARACTER_DATA_SCHEMA.md
```

Every new React data adapter must preserve the current schema shape.

Core character fields used by the project:

```txt
id
name
title
displayName
gender
factionId
factionName
faction
mythology
sourceType
conversionType
subgroup
powerDomain
tags
presentationMode
characterCore
personalItem
promptProfile
```

`characterCore` is identity-only and should remain stable in both with-item and no-item modes:

```txt
face
hair
outfit
body
aura
extra
identityLock
```

`personalItem` is the toggleable item/weapon/prop layer:

```txt
name
itemRole
itemFamily
description
withItemPrompt
noItemRemove
itemGuard
```

Common `itemRole` values:

```txt
weapon
ritual_item
document_item
daily_item
accessory_item
instrument_item
tool_item
prop
none
```

Common `itemFamily` values:

```txt
none
sword
katana
tachi
dagger
large_weapon
spear
bow
gun
rifle
staff
book
document
cup
instrument
tool
accessory
shield
other
```

Critical rule:

```txt
Do not move removable/toggleable items into characterCore.
Do not place `holding`, `wielding`, `carrying`, `presenting`, or other item-action instructions inside characterCore.
```

---

## Current Pose Architecture

Active pose library should be built from these sources:

```txt
poselibraryv11_clean.js
pose_packs/post_cleanup_pose_expansion_final_79.js
pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js
```

Do not load the old full `poseLibraryV9.js` as active runtime unless explicitly requested. It is a legacy/reference source and is much larger.

Current pose metadata used by app logic includes fields such as:

```txt
id
title
titleTH
descriptionTH
category
subcategory
uiCategory
uiCategoryTH
targetGenders
genderFit
requiresItem
noItemSafe
itemActionType
compatibleItemRoles
avoidItemRoles
compatiblePresentationModes
avoidRiskTags
compatibleWeaponFamilies
avoidWeaponFamilies
weaponHandPlacement
explicitItemHold
weaponPresentation
holdStyle
restStyle
familySpecificItemPrompts
prompt
noItemPrompt
promptSnippet
negativeAdditions
compactNegativeAdditions
collectionTags
riskHints
```

Important pose behavior to preserve:

```txt
1. Non-weapon items must not use active attack / slash / thrust / aiming / weapon swing / block-guard poses.
2. Weapon characters can use active attack poses only when compatible with item family.
3. `combat_ready` / `battle_presence` is not the same as active attack.
4. Camera-driven glamour poses are no-item showcases and are female-only in current V12 behavior.
5. Male + no_item should not see camera-driven glamour poses.
6. Weapon/item + with_item should not see camera-driven glamour poses.
7. Female + no_item should see camera-driven glamour poses.
8. No-item mode must suppress personal item leakage from prompts.
9. With-item mode must not force items into hands-busy / spellcasting / item-incompatible poses.
10. Katana/tachi style weapons must not be sent to generic greatsword / grounded weapon rest poses.
```

Current validated V12.0.2 behavior:

```txt
Male + no_item camera_driven_glamour: 0
Female + no_item camera_driven_glamour: 69
Weapon/item + with_item camera_driven_glamour: 0
High-risk character audit: 0 high-risk remaining
```

---

## Current UI / UX Behavior To Preserve

Current `index.html` layout is a 3-step Thai UI:

### Step 1 — Character Selection

Features:

```txt
- header stats: character count / pose count
- faction filter
- gender filter
- role filter
- character search
- character grid
- load more characters, page size currently 36
- clear filters
- selected character hint
```

### Step 2 — Pose Selection

Features:

```txt
- character summary card
- pose view tabs:
  - Recommended
  - Glamour / collection
  - All compatible poses
  - Favorites
- pose category filter
- pose search
- suggest random pose
- item mode toggle:
  - with_item
  - no_item
- pose grid
- load more poses, page size currently 48
- quick copy panel after pose selection
```

### Step 3 — Prompt Output

Features:

```txt
- final summary card
- style selector
- prompt mode toggle:
  - compact
  - full_debug
- compatibility warning/note
- positive / negative prompt tabs
- copy positive
- copy negative
- copy both
- copy both + return to pose selection
- prompt history, last 10 entries in localStorage
```

Global UX features:

```txt
- desktop floating copy panel
- collapsed floating copy button
- mobile sticky copy bar
- toast on copy
- localStorage state persistence
- favorites for poses
- no inline onclick on character cards
- character cards use data-character-id / equivalent stable event model
```

React can redesign the internal component structure, but the first version must preserve these functions.

---

## Recommended React Stack

Use:

```txt
Vite
React
TypeScript
Vitest
Playwright or equivalent browser-flow tests
ESLint / Prettier if available
```

Suggested new root:

```txt
CharacterUniverseReact/
```

Suggested structure:

```txt
src/
  app/
    App.tsx
    AppProviders.tsx

  components/
    layout/
      HeaderStats.tsx
      Stepper.tsx
      Panel.tsx
    characters/
      CharacterFilters.tsx
      CharacterGrid.tsx
      CharacterCard.tsx
      CharacterSummary.tsx
    poses/
      PoseToolbar.tsx
      PoseViewTabs.tsx
      PoseCategoryFilter.tsx
      PoseGrid.tsx
      PoseCard.tsx
      ItemModeToggle.tsx
    prompt/
      StyleSelector.tsx
      PromptModeToggle.tsx
      PromptTabs.tsx
      PromptPreview.tsx
      CopyButtons.tsx
      PromptHistory.tsx
      FloatingCopyPanel.tsx
      MobileCopyBar.tsx
    shared/
      Toast.tsx
      LoadMoreButton.tsx
      SearchInput.tsx

  data/
    characters/
    poses/
    legacy/
    index.ts

  engine/
    characterSource.ts
    factionEngine.ts
    poseSource.ts
    poseFilterEngine.ts
    poseRecommendationEngine.ts
    itemRoleEngine.ts
    weaponFamilyEngine.ts
    genderGateEngine.ts
    promptBuilder.ts
    promptCompression.ts
    promptWarnings.ts
    historyEngine.ts
    validationEngine.ts

  state/
    studioStore.ts
    localStoragePersistence.ts

  types/
    character.ts
    pose.ts
    faction.ts
    prompt.ts
    studioState.ts

  tests/
    dataValidation.test.ts
    poseFilterEngine.test.ts
    promptBuilder.test.ts
    genderGate.test.ts
    weaponFamilyCompatibility.test.ts
```

State management:

```txt
Use React state / Context / Zustand as preferred.
Keep engine functions pure and testable.
Do not bury filtering and prompt logic inside JSX components.
```

---

## Build Strategy

### Phase 0 — Audit and Normalize Source Files

Before coding, inspect:

```txt
README.md
docs/reference/CHARACTER_DATA_SCHEMA.md
docs/testing/TESTING_CHECKLIST.md
docs/reports/V12_0_2_REMAINING_HIGH_RISK_AND_LEGACY_CAMERA_MIGRATION_REPORT.md
app.js
data/characters/index.js
index.html
poselibraryv11_clean.js
pose_packs/post_cleanup_pose_expansion_final_79.js
pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js
```

Confirm:

```txt
Active character count = 685
Active pose count = 279
Duplicate character IDs = 0
Duplicate character names = 0
Duplicate pose IDs = 0
```

Also check filename casing around:

```txt
poselibraryv11_clean.js
poseLibraryV11_clean.js
```

Normalize this in the React project so imports work on case-sensitive systems.

### Phase 1 — Create React Scaffold

Create a new React/Vite/TS app without deleting the original plain-script project.

The original project should remain available for reference and regression comparison.

### Phase 2 — Data Adapter Layer

Convert or wrap existing plain-script data into importable TypeScript modules.

Allowed options:

```txt
Option A: mechanically convert existing JS arrays to ES module exports.
Option B: keep raw JS data files and write a build-time/runtime adapter to import/evaluate them safely.
```

Preferred long-term option:

```txt
Create ES module exports while preserving data content exactly.
```

Do not manually redesign character objects.
Do not infer missing values unless the existing app already does so at runtime.
Do not change IDs, names, titles, itemRole, itemFamily, gender, factionId, or prompt text unless a test reveals a pure import/typing issue.

Data source target:

```txt
export const activeCharacters = [all 685 modular characters]
export const activePoses = [180 clean + 79 post-cleanup + 20 V11X2 camera poses]
```

### Phase 3 — Port Engine Logic Before UI Polish

Port these concepts from `app.js` into pure engine modules:

```txt
characterSchema accessors
activeCharacterSource / activeCharacterViews
faction display and counts
activePoseLibrary
pose UI category inference
pose gender compatibility
itemRole compatibility
non-weapon attack lock
weapon family compatibility
pose item gesture conflict detection
no-item suppression
with-item weapon pose hiding
pose recommendation scoring
compact prompt builder
full debug prompt builder
negative prompt builder
prompt warnings
history formatting
```

Do not reduce these to simplistic filters.
The React version must preserve the nuanced V11/V12 safeguards.

### Phase 4 — Rebuild UI Components

Implement the 3-step flow:

```txt
Step 1: Character selection
Step 2: Pose selection
Step 3: Prompt generation/copy
```

Keep Thai labels where present.
Keep the current UX semantics.
Visual design can be cleaned up, but do not block engine validation on style polishing.

### Phase 5 — Persistence and Copy UX

Preserve localStorage behavior conceptually:

```txt
selected character
selected pose
item mode
style id
prompt mode
prompt tab
search/filter state if practical
prompt history last 10
favorite poses
floating copy collapsed state if practical
```

Use a new storage key for React to avoid corrupting old V12 state, for example:

```txt
characterPromptStudio_v13_react_state
characterPromptStudio_v13_react_prompt_history
```

### Phase 6 — Tests and Validation

Create tests equivalent to the current smoke tests.

Minimum required test set:

```txt
1. active character count is 685
2. active pose count is 279
3. no duplicate character IDs
4. no duplicate character names
5. no duplicate pose IDs
6. `charactersReworkedFinalV2` alias behavior is no longer required internally, but imported legacy aliases must not be broken if raw data still uses them
7. male + no_item sees 0 camera_driven_glamour poses
8. female + no_item sees camera_driven_glamour poses
9. weapon/item + with_item sees 0 camera_driven_glamour poses
10. non-weapon item characters do not see active weapon attack poses
11. weapon characters still see compatible weapon poses
12. instrument characters can use instrument/performance/lifestyle-compatible poses
13. document characters can use reading/scholarly/presenting-compatible poses
14. daily/accessory characters can use lifestyle/glamour/royal-compatible poses where allowed
15. no-item prompt suppresses item terms for weapon characters
16. with-item weapon prompt does not force incompatible hands-busy pose placement
17. katana/tachi avoids generic greatsword rest poses
18. prompt output includes Complexity Lock behavior
19. compact prompt mode works
20. full debug prompt mode works
```

Browser-flow tests should verify:

```txt
1. Header count renders 685 characters and 279 poses.
2. Character grid renders.
3. Select an old/core character and Step 2 opens.
4. Select a modular character such as Odin / Ra / Amaterasu / Tsukuyomi / Benzaiten and Step 2 opens.
5. Pose cards render after character selection.
6. Switching item mode revalidates selected pose.
7. Step 3 renders positive and negative prompt.
8. Copy buttons work.
9. Mobile sticky copy bar or equivalent works on narrow viewport.
10. No console errors.
```

---

## Critical Migration Rules

### Data Rules

```txt
Do not redesign character data.
Do not rewrite lore or visual identity.
Do not change itemRole/itemFamily/gender/factionId/name/title unless explicitly asked.
Do not merge character modules into one huge hand-edited file.
Do not use only cU1 + cU2 / data.js as active character source.
Do not reintroduce duplicate IDs or duplicate names.
```

### Pose Rules

```txt
Do not re-enable old full V9 pose library by default.
Do not remove the hard-cleanup baseline.
Do not broaden non-weapon compatibility with combat poses.
Do not let non-weapon items become active attack items.
Do not let no-item mode include personal items.
Do not show camera-driven glamour to male characters.
Do not show camera-driven no-item glamour to with-item weapon/item mode.
```

### Prompt Rules

```txt
Preserve compact prompt behavior.
Preserve full debug prompt behavior.
Preserve same-character complexity lock.
Preserve figure/silhouette guard behavior.
Preserve no-item suppression.
Preserve weapon-family placement logic.
Prefer positive instructions first, concise negative terms second.
Do not make prompts longer unless necessary for safety/compatibility.
```

### UI Rules

```txt
No inline onclick.
Use stable React event handlers.
Keep selectable cards accessible.
Keep search/filter responsive.
Keep step navigation guarded: cannot access Step 2 without character, cannot access Step 3 without character + pose.
```

---

## Important Current Logic Areas In `app.js`

When porting, search these function names and preserve behavior as closely as possible:

```txt
characterSchemaList
characterSchema
schemaCore
schemaItem
schemaProfile
schemaGender
schemaPresentationMode
schemaItemRole
schemaItemFamily
schemaTags
schemaIdentityLock
schemaHasToggleItem
schemaMainItemName
schemaItemPrompt
schemaItemGuard
schemaRiskTags
schemaCorePrompt
schemaIdentityPrompt
activeCharacterSource
activeCharacterViews
allFactions
selectedChar
selectedPose
activePoseLibrary
normalizedItemModeForCompatibility
characterItemFamilyForCompatibility
characterItemRoleForCompatibility
getWeaponFamily
getWeaponSubtype
isKatanaLike
weaponFamilyAliasesFor
poseWeaponFamilyKeys
normalizedPoseActionType
combatAttackAllowedForCharacter
poseIsActiveAttackPose
poseIsBlockGuardPose
poseIsBattlePresencePose
nonWeaponAttackLockReason
detectPoseItemGesture
getPoseItemCompatibility
isPoseCompatibleWithCharacterItem
sanitizePosePromptForItemConflict
resolvePoseForPrompt
poseUiCategory
poseGenderFit
isGenderCompatiblePose
figurePresetFor
figurePromptBlocks
compatiblePosesFor
recommendationScore
recommendedPosesFor
collectionPosesFor
visiblePoses
ensureValidSelection
shouldSuppressItemForPose
shouldHideWeaponWithItemPose
resolveWeaponPlacementPrompt
resolveItemPlacementPrompt
stripItemTermsFromSuppressedText
compactCharacterCoreBlock
compactIdentityBlock
buildCompactPosePrompt
compactItemBlock
compactGuardBlock
buildCompactPrompts
buildNegative
buildCompactNegative
promptWarnings
```

These are not all good final function names, but they identify the important behavior to preserve.

---

## Suggested React Milestone Definition

### Milestone 1 — Data and Engine Pass

Done when:

```txt
npm test passes data validation
activeCharacters.length === 685
activePoses.length === 279
all duplicate checks pass
pose compatibility samples match current V12 behavior
prompt builder can generate positive/negative for representative characters
```

No fancy UI required yet.

### Milestone 2 — Basic React UI

Done when:

```txt
Step 1 character grid works
filters/search work
select character works
Step 2 compatible pose list works
item mode toggle works
select pose works
Step 3 prompt output works
copy buttons work
```

### Milestone 3 — UX Parity

Done when:

```txt
recommended / glamour / all / favorites tabs work
pose category counts work
load more works
prompt history works
floating copy / mobile copy UX exists
state persists safely
browser-flow tests pass
```

### Milestone 4 — Polish

Only after behavior parity:

```txt
UI polish
responsive refinements
virtualized grids if needed
search performance improvements
better debug panel
import/export settings
```

---

## Performance Notes

Current data size is modest for React:

```txt
685 characters
279 active poses
```

This should run fine with normal React if filtering is memoized.

Use:

```txt
useMemo for filtered character and pose lists
memoized selectors for compatibility checks
debounced search input
pagination / load more as current app does
virtualization only if future character count reaches thousands
```

Do not prematurely optimize at the cost of correctness.

---

## Representative Characters For Manual Testing

Use these to cover system rules:

```txt
Ester Organ — old/core male weapon character
Odin — Norse high-profile character; note Odin itemRole decision may be deferred in reports
Thor — weapon / hammer sample
Ra — Egypt solar accessory/daily/ceremonial sample after V12 cleanup
Benzaiten — instrument_item sample
Amaterasu — Japanese weapon / katana sample
Tsukuyomi — katana + spell/no-item suppression sample
Daikokuten — heavy weapon sample
Ptah — tool_item hammer sample
Heimdall — non-weapon horn-like symbolic item sample if present
```

Test both:

```txt
with_item
no_item
```

And at least these pose classes:

```txt
camera_driven_glamour
active_attack
battle_presence / combat_ready
instrument / performer
reading / document
lifestyle / glamour / royal
```

---

## Deliverables

Create:

```txt
CharacterUniverseReact/
README_REACT_MIGRATION.md
src/...
package.json
vite config
test setup
migration report
```

The migration report should include:

```txt
1. Exact files read from old project
2. Data import strategy used
3. Active character count
4. Active pose count
5. Duplicate ID/name results
6. Known differences from old app
7. Tests run
8. Browser QA notes
9. Remaining risks
10. Next recommended tasks
```

Do not delete the original `CharacterUniverse/` folder.

---

## Final Acceptance Criteria

The React rebuild is acceptable only when:

```txt
- It loads all 685 active characters.
- It loads all 279 active poses.
- It does not fall back to only 250 legacy data.js characters.
- It reproduces the 3-step workflow.
- It preserves with_item / no_item behavior.
- It preserves itemRole and weapon-family pose filtering.
- It preserves female-only camera glamour behavior.
- It generates compact positive/negative prompts.
- It provides copy buttons.
- It has data/engine tests.
- It has at least one browser-flow test for character -> pose -> prompt.
- It documents any intentional differences.
```

If any acceptance criterion fails, report it clearly and do not call the migration complete.
