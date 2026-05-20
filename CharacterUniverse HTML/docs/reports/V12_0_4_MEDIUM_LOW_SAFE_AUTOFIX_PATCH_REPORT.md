# V12.0.4 Medium / Low Safe Autofix Patch Report

Date: 2026-05-19

## Summary

Applied only the approved V12.0.4 safe auto-fix scope:

1. Deduped exact duplicate terms in `personalItem.noItemRemove`.
2. Removed `characterCore.identityLock` entries only when the entire entry exactly matched `personalItem.name` or `personalItem.description`.

No mixed `identityLock` lines were edited. No human-review or false-positive cases were edited. No item role/family, name/id/faction, face/hair/outfit/body, `app.js`, or pose file was changed.

## Files Changed

- `data/characters/characters_solar_necropolis_egypt.js`
- `data/characters/characters_solar_necropolis_egypt_expansion_2.js`
- `data/characters/characters_heavenly_kami_war_court_expansion_2.js`
- `data/characters/characters_heavenly_kami_war_court_expansion_3.js`
- `docs/reports/V12_0_4_MEDIUM_LOW_SAFE_AUTOFIX_PATCH_REPORT.md`

## noItemRemove Dedupe

- Duplicate `noItemRemove` terms before: 61
- Duplicate `noItemRemove` terms after: 0
- Duplicate entries removed: 61
- Characters changed by `noItemRemove` dedupe: 61

The dedupe preserved first occurrence order and removed only exact normalized duplicate terms.

## identityLock Exact Duplicate Removals

- Exact duplicate `identityLock` entries removed: 187
- Characters changed by exact `identityLock` removal: 187

Important note: the V12.0.4 proposal listed 237 safe candidates from a broader detector bucket, but this patch applied the user's stricter rule: remove only entries where the full `identityLock` string exactly equals `personalItem.name` or `personalItem.description`. Mixed identity/item lines were left untouched.

## Skipped

- Human-review findings skipped: 25
- False-positive / acceptable findings skipped: 148
- Mixed `identityLock` lines skipped: all
- Repeated aura/extra review case skipped: 1
- Duplicate guard phrase findings: 0 found in proposal
- Overlong repeated `withItemPrompt` findings: 0 found in proposal

## Tests Run

- PASS `node --check data/characters/characters_solar_necropolis_egypt.js`
- PASS `node --check data/characters/characters_solar_necropolis_egypt_expansion_2.js`
- PASS `node --check data/characters/characters_heavenly_kami_war_court_expansion_2.js`
- PASS `node --check data/characters/characters_heavenly_kami_war_court_expansion_3.js`
- PASS `node tests/v12_0_3_final_policy_role_family_polish_smoke_test.js`
- PASS runtime count / duplicate / prompt sample validation

Runtime validation results:

- Active character count: 685
- Active pose count: 279
- Duplicate character IDs: 0
- Duplicate character names: 0
- Duplicate pose IDs: 0
- V12 watched high-risk sample remains 0:
  - Ra
  - Konohanasakuya Ash Bloom
  - Takemikazuchi War Marshal
- No-item prompt sample had no item leak for:
  - Horus
  - Tamamo Foxfire Courtesan
  - Odin
  - Isis
  - Alicia von Heimdall
- With-item prompt sample retained each character's main item for the same sample set.

## Remaining Risks

- The 25 human-review findings remain deferred because they may touch identity semantics, mythology symbols, outfit motifs, or character concept.
- The 148 false-positive / acceptable findings remain intentionally untouched.
- Medium/low heuristic warnings outside the two approved safe patterns remain out of scope.
- A future patch may review mixed `identityLock` lines manually, but it should not be automated without explicit per-character approval.
