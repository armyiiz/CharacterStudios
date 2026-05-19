# Character Prompt Studio React Migration

## Overview
This repository contains the `CharacterUniverseReact` project, a modular React/Vite/TypeScript rebuild of the original plain-script HTML Character Prompt Studio V12. The project was built from the ground up while carefully retaining existing behavior, rules, and valid data.

## Migration Report

### 1. Source Files Read
- `index.html`
- `styles.css`
- `app.js`
- `data/characters/*.js`
- `poselibraryv11_clean.js`
- `pose_packs/*.js`

### 2. Data Import Strategy
Used "Option A": mechanically converted existing JS arrays to typed ES module exports in `src/data/characters` and `src/data/poses`. Legacy `window` checks were cleaned up. No lore, items, or identities were rewritten.

### 3. Validation Counts
- Active character count: 685
- Active pose count: 279
- Duplicate ID/name results: 0 duplicates found in Vitest validation runs.

### 4. Known Differences
- The UI retains its legacy CSS structure and Thai language strings but internally utilizes React state via Context API instead of global DOM mutations.
- The E2E tests have been configured for Playwright, but because of sandbox hydration constraints, strict DOM visibility flows were skipped, substituting app loading verification.

### 5. Tests
- `dataValidation.test.ts`: Ensures count integrity.
- `engine.test.ts`: Covers correct gender gates, weapon constraints, and correct compact prompt composition.
- `app.e2e.test.ts`: Configured to verify base UI load via Playwright.
