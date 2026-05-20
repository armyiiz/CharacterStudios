# V12.0.4 Medium / Low Practicality Audit Proposal Only

Date: 2026-05-19

## Scope

Proposal-only audit. No source character data, app logic, pose files, item roles, item families, names, or core identity fields were changed.

The audit was intentionally narrow and checked only these requested medium/low-risk patterns:

1. duplicate `personalItem.noItemRemove`
2. duplicate guard phrase
3. repeated `characterCore.aura` / `characterCore.extra` phrase
4. personal item terms repeated in `characterCore.identityLock`
5. overlong `personalItem.withItemPrompt` with repeated wording

## Runtime Inputs

- Active characters scanned: 685
- Scoped pattern checks: 3,425
- Scoped findings: 471
- Characters with at least one scoped finding: 409
- Risk levels in this scoped pass:
  - Medium: 25 findings
  - Low: 446 findings

## Classification Summary

### Findings By Bucket

| Bucket | Findings | Character-level count | Meaning |
| --- | ---: | ---: | --- |
| safe auto-fix | 298 | 237 | Exact or highly mechanical cleanup candidate; still proposal-only in this pass. |
| needs human review | 25 | 25 | Could touch identity semantics or meaningful visual motifs. |
| false positive / acceptable | 148 | 147 | Detector overlap, usually material/color/motif wording rather than a removable-item leak. |
| skip | 0 findings | 276 | No scoped medium/low pattern found for these characters. |

### Findings By Pattern

| Pattern | Findings | Proposed bucket |
| --- | ---: | --- |
| personal item terms in `identityLock` | 409 | 237 safe auto-fix, 24 needs review, 148 acceptable |
| duplicate `noItemRemove` | 61 | 61 safe auto-fix |
| repeated `aura` / `extra` phrase | 1 | 1 needs review |
| duplicate guard phrase | 0 | none found |
| overlong repeated `withItemPrompt` | 0 | none found under this strict detector |

## 1. Safe Auto-Fix Candidates

These are proposal-only candidates, not applied.

### Duplicate `noItemRemove`

- Count: 61 findings
- Bucket: safe auto-fix
- Proposed fix: dedupe exact duplicate terms only; preserve order and all non-duplicate aliases.
- Files involved:
  - `data/characters/characters_heavenly_kami_war_court_expansion_2.js`
  - `data/characters/characters_heavenly_kami_war_court_expansion_3.js`

Representative examples:

| ID | Character | File | Duplicate term |
| --- | --- | --- | --- |
| 2552 | Tamamo Foxfire Courtesan | `data/characters/characters_heavenly_kami_war_court_expansion_2.js:6` | `fan` |
| 2556 | Ame-onna | `data/characters/characters_heavenly_kami_war_court_expansion_2.js:347` | `spear` |
| 2557 | Hannya Crimson Avenger | `data/characters/characters_heavenly_kami_war_court_expansion_2.js:429` | `dagger` |
| 2560 | Oiwa | `data/characters/characters_heavenly_kami_war_court_expansion_2.js:690` | `katana` |
| 2565 | Doman Ashiya | `data/characters/characters_heavenly_kami_war_court_expansion_2.js:1098` | `staff` |

### Exact Personal Item Lines In `identityLock`

- Count: 237 findings
- Bucket: safe auto-fix candidate, but should still be applied by a narrow script with before/after review.
- Proposed fix: remove only identityLock entries that are exact duplicates of `personalItem.name` or `personalItem.description`; do not edit mixed identity lines.
- Main files involved:
  - `data/characters/characters_solar_necropolis_egypt.js`
  - `data/characters/characters_solar_necropolis_egypt_expansion_2.js`
  - `data/characters/characters_heavenly_kami_war_court_expansion_2.js`
  - `data/characters/characters_heavenly_kami_war_court_expansion_3.js`

Representative examples:

| ID | Character | File | Item terms detected |
| --- | --- | --- | --- |
| 2403 | Horus | `data/characters/characters_solar_necropolis_egypt.js` | `spear`, `falcon`, `shield` |
| 2407 | Hathor | `data/characters/characters_solar_necropolis_egypt.js` | `sistrum` |
| 2414 | Neith | `data/characters/characters_solar_necropolis_egypt.js` | `bow` |
| 2418 | Wepwawet | `data/characters/characters_solar_necropolis_egypt.js` | `spear`, `key` |
| 2424 | Ptah | `data/characters/characters_solar_necropolis_egypt.js` | `hammer`, `tool` |

Important constraint for a future patch: if an `identityLock` line mixes item wording with outfit, motif, symbol, title, body, aura, or mythology identity, do not auto-edit it.

## 2. Needs Human Review

- Count: 25 findings
- Reason: these findings may be real, but removing them could change identity, motif language, or character concept.
- Recommendation: review each line in context before editing.

Representative examples:

| ID | Character | File | Pattern | Detail |
| --- | --- | --- | --- | --- |
| 4 | Leo Craft | `data/characters/characters_core.js:187` | identityLock item term | `tool` |
| 401 | Ravenna Morcrest | `data/characters/characters_core.js:5416` | identityLock item term | `mask` |
| 1304 | Yuri Glassline | `data/characters/characters_core.js:9241` | identityLock item term | `instrument` |
| 1501 | Aurelia Valecrown | `data/characters/characters_core.js:10020` | identityLock item term | `crown` |
| 1804 | Lapan Chronowhite | `data/characters/characters_core.js:11668` | identityLock item term | `chain` |
| 2006 | Amara & Erosyne Twinbond | `data/characters/characters_core.js:12852` | repeated aura/extra phrase | `wing halo behind both` |
| 2203 | Athena | `data/characters/characters_elysian_apex.js:153` | identityLock item term | `shield` |
| 2204 | Artemis | `data/characters/characters_elysian_apex.js:219` | identityLock item term | `bow` |
| 2208 | Nyx | `data/characters/characters_elysian_apex.js:483` | identityLock item term | `map`, `scroll` |

Human-review rule: do not remove words like `crown`, `mask`, `chain`, `shield`, `bow`, or `scroll` if they are functioning as iconography, outfit motif, title identity, or mythic symbol rather than a toggleable held item.

## 3. False Positive / Acceptable

- Count: 148 findings
- Reason: detector saw overlap between `personalItem` words and `identityLock`, but the overlap appears to be material/color/motif/general language rather than removable held-item leakage.
- Proposed action: no source edit.

Common acceptable examples:

- material/color overlap: `brass`, `crystal`, `ruby`, `steel`, `silver`, `gold`
- generic phrase overlap: `and`, `with`, `visible`
- motif overlap: `rose`, `cross`, `conductor`, `battle`

These should not be auto-cleaned because removing them would create churn without a clear prompt-safety benefit.

## 4. Skip

- Characters skipped with no scoped finding: 276
- Meaning: no duplicate `noItemRemove`, duplicate guard phrase, repeated aura/extra phrase, identityLock item-term signal, or overlong repeated `withItemPrompt` was detected by this narrow pass.

## Files That Would Be In Scope For A Future Patch

Safe auto-fix files:

- `data/characters/characters_solar_necropolis_egypt.js`
- `data/characters/characters_solar_necropolis_egypt_expansion_2.js`
- `data/characters/characters_heavenly_kami_war_court_expansion_2.js`
- `data/characters/characters_heavenly_kami_war_court_expansion_3.js`

Human-review files:

- `data/characters/characters_core.js`
- `data/characters/characters_elysian_apex.js`

No `app.js`, pose pack, itemRole, itemFamily, name, face, hair, outfit, body, or core identity rewrite is proposed here.

## Recommended V12.0.4 Patch Plan

If approved, apply only these safe edits first:

1. Dedupe exact duplicate `noItemRemove` terms.
2. Remove identityLock entries only when the full entry is an exact duplicate of `personalItem.name` or `personalItem.description`.
3. Re-run this audit and the V12.0.3 smoke test.

Defer all mixed identityLock cases to a separate human-reviewed patch.

## Status

Proposal only. No source data was changed in this audit.
