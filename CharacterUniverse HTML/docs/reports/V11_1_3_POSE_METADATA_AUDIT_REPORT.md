# Character Prompt Studio V11.1.3 Pose Metadata Audit Report

## Summary

| Metric | Count |
| --- | ---: |
| Total poses | 503 |
| Poses with complete metadata | 503 |
| Poses missing metadata | 0 |
| Poses requiring item | 35 |
| No-item safe poses | 468 |
| Optional item poses | 0 |
| Active attack poses | 28 |
| Battle presence poses | 38 |
| Lifestyle poses | 476 |
| Ritual poses | 84 |
| Performer/instrument poses | 21 |
| Reading/document poses | 13 |
| Serving/daily item poses | 428 |
| Glamour/showcase poses | 484 |
| Poses manually fixed | 0 |

## Action Taxonomy Mapping

Existing pose metadata is preserved and mapped in runtime:

| Existing itemActionType | V11.1.3 Derived Type |
| --- | --- |
| presenting | present_item |
| holding | hold_item |
| magical_activation | ritual_cast |
| combat_ready | battle_presence |
| active_attack | active_attack |
| optional | optional |
| none | none |

## Derived Action Counts

| Derived Action | Count |
| --- | ---: |
| optional | 204 |
| none | 96 |
| ritual_cast | 79 |
| hold_item | 48 |
| battle_presence | 38 |
| present_item | 29 |
| active_attack | 9 |

## Source Category Counts

| Category | Count |
| --- | ---: |
| glamour | 425 |
| universal_item_showcase | 32 |
| neutral_showcase | 16 |
| ranged_weapon | 15 |
| male_neutral_weapon | 8 |
| long_item | 6 |
| sitting | 1 |

## Metadata Coverage

Every active pose currently has the core metadata fields required for V11.1.3 filtering: id, title, category, subcategory, intensity, framing, prompt, noItemPrompt, requiresItem, noItemSafe, itemActionType, compatibleItemRoles, and avoidItemRoles.

No pose count change was made. V11.1.3 derives stricter compatibility in app.js rather than rewriting the 503-pose library.

## Conservative Inference Rules

- active_attack, ranged weapon UI categories, and attack-language poses are treated as active attack or aim poses.
- combat_ready is treated as battle_presence, not active attack.
- presenting, holding, and magical_activation remain non-attack unless attack language is present.
- Negative safety text such as no aggressive aiming is not treated as an aiming action.
