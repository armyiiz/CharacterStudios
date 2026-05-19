# Same Character Complexity Lock Report

## Summary

Added a permanent Same Character Complexity Lock to prompt generation so same-character pose or framing iterations preserve the same identity and same visual complexity level instead of escalating ornament density.

No character objects, faction data, IDs, names, item guards, no-item guards, or pose data were rewritten.

## Files Changed

- `app.js`
- `docs/reference/CHARACTER_DATA_SCHEMA.md`
- `docs/reports/SAME_CHARACTER_COMPLEXITY_LOCK_REPORT.md`

## Insertion Points

- `app.js`
  - Added `SAME_CHARACTER_COMPLEXITY_LOCK_POSITIVE`.
  - Added `SAME_CHARACTER_COMPLEXITY_LOCK_NEGATIVE`.
  - Added the positive lock to `buildDebugPrompts()`.
  - Added the positive lock to `buildCompactPrompts()`.
  - Added the negative lock to `buildNegative()`.
  - Added the negative lock to `buildCompactNegative()`.
- `docs/reference/CHARACTER_DATA_SCHEMA.md`
  - Added a Same Character Complexity Lock note explaining that pose changes are not redesigns and same-character iterations must not increase ornament/detail density.

## Final Positive Lock Text

```txt
Complexity lock: preserve the same character design and same visual complexity level. Change only the requested pose, framing, or camera angle. Do not upgrade the outfit, do not add extra ornaments, do not add extra armor layers, do not add extra spikes, horns, chains, feathers, roots, ribbons, particles, floating shards, background structures, or decorative effects. Keep details broad, grouped, clean, and readable. Maintain a simple clear silhouette. Background must stay soft, simple, and secondary. no visual escalation, no detail density increase, no ornate redesign.
```

## Final Negative Lock Text

```txt
detail escalation, visual escalation, ornate redesign, upgraded outfit, extra ornaments, extra armor layers, excessive decoration, excessive spikes, excessive thorns, excessive chains, excessive feathers, excessive ribbons, excessive roots, too many particles, floating shards, noisy micro-details, dense background, busy background, chaotic silhouette, cluttered costume, overdesigned armor, background merging with hair, item merging with body, unreadable silhouette
```

## Prompt Content Validation

Validated compact recommended-pose prompts for both `with_item` and `no_item` modes.

| Character | With Item | No Item |
| --- | --- | --- |
| Nidhogg | pass | pass |
| Fafnir | pass | pass |
| Cerberus | pass | pass |
| Gaia | pass | pass |
| Zeus | pass | pass |

Each checked prompt included:

- `Complexity lock:`
- `no visual escalation`
- `no detail density increase`
- `no ornate redesign`
- negative terms for detail escalation, visual escalation, ornate redesign, excessive roots, excessive spikes, too many particles, dense background, busy background, and unreadable silhouette

## Validation Results

Syntax checks:

- `node --check app.js`: pass
- `node --check data/characters/index.js`: pass

Smoke tests:

- `node v11_1_prompt_compression_smoke_test.js`: pass
- `node v11_1_1_pose_item_conflict_smoke_test.js`: pass

Data integrity:

- `charactersReworkedFinalV3`: `435`
- `charactersReworkedFinalV2`: `435`
- `charactersReworkedFinalV2 === charactersReworkedFinalV3`: pass
- Duplicate IDs: none

## Notes

- Existing character identity, item guard, pose guard, and no-item guard behavior remains in place.
- The lock is global and applies by default through both Compact and Full Debug prompt paths.
