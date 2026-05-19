# Character Prompt Studio V11.1.6

## Pose Intent + Item Suppression Audit Patch

Date: 2026-05-17

## Root Cause

Prompt generation already separated `characterCore` from `personalItem`, and `no_item` mode already skipped `personalItem.withItemPrompt` and `personalItem.itemGuard`.

The leak risk was narrower: item cleanup relied mostly on each character's `personalItem.noItemRemove` terms. For sword characters this could miss family aliases such as `sword`, `blade`, `sheath`, and `scabbard`, and it could leave item-shaped wording in `characterCore.aura`, `characterCore.extra`, `identityLock`, or pose text after the explicit item name was removed.

Example audited case:

- Tsukuyomi has `personalItem.name = silver crescent katana`.
- Tsukuyomi's `characterCore.aura` and `identityLock` mention the katana directly.
- In a no-item spellcasting pose, the positive prompt removed `silver crescent katana` and `katana`, but still allowed a sword-family alias leak path, especially `blade` through title/extra wording.
- The negative prompt did not include the requested sword/katana suppression aliases such as `floating katana`, `summoned blade`, or `weapon-shaped aura`.

## Affected Code Paths

- `characterPromptForMode()` no-item schema path.
- `schemaCorePrompt()` and `schemaIdentityPrompt()` when item suppression is active.
- `compactCharacterCoreBlock()` and `compactIdentityBlock()`.
- `rawPosePromptForMode()` and pose `noItemPrompt` selection.
- `compactItemBlock()` and `compactGuardBlock()` through the suppression/no-item flag.
- `buildNegative()` and `buildCompactNegative()` for item alias negatives.

## Affected Pose Categories

These categories need item suppression when `itemMode` is `no_item`, and also when a future `auto_pose_safe` mode elects to honor empty-hand pose intent:

- Spellcasting, magic casting, mystic casting, ritual casting.
- Glamour hand poses such as hair touch, collarbone hand, crossed arms, open hands, or hand-to-chest poses.
- Sitting, throne, kneeling, and seated poses where hands are busy or the frame is not item-friendly.
- Close-up and bust poses where a large weapon cannot fit naturally.
- No-item-safe portrait/showcase poses.
- Battle-presence poses with arms crossed, pointing, empty hands, or non-attack casting intent.

## Leak Audit

- `personalItem.name`: suppressed in no-item/suppressed pose mode.
- `personalItem.withItemPrompt`: not inserted when suppression is active.
- `personalItem.itemGuard`: not inserted when suppression is active.
- `characterCore.aura`: scrubbed through the suppression text sanitizer.
- `characterCore.extra`: scrubbed through the suppression text sanitizer.
- `identityLock`: scrubbed through the suppression text sanitizer.
- `pose.prompt`: uses `pose.noItemPrompt` first when suppression is active, then sanitizes item aliases.
- `pose.noItemPrompt`: preferred for no-item/suppressed pose mode.
- Negative prompt: now receives suppressed item aliases, including sword/katana floating-weapon negatives.

## Minimal Fix Implemented

Implemented a runtime helper:

- `shouldSuppressItemForPose(character, pose, itemMode)`

Suppression currently activates for:

- `itemMode = no_item`
- future-compatible `itemMode = auto_pose_safe` when the selected pose has empty-hand/no-item-safe intent

Suppression means:

- Do not insert `personalItem.name`, `withItemPrompt`, or `itemGuard`.
- Prefer `pose.noItemPrompt`.
- Strip item aliases from schema core, identity lock, aura/extra text, and pose text.
- Add sword/katana negative aliases when suppressing a sword-family item.

Normal weapon mode is intentionally unchanged. Weapon-action poses in `with_item` mode still include the weapon.

## Risks

- The sanitizer is conservative but still text-based. It removes only known item terms and aliases, so unusual character-specific weapon nicknames may need new aliases later.
- Some titles may contain item-family words. In suppression mode, those direct item-shaped words are removed from prompt text to satisfy no-item intent.
- This patch does not modify pose metadata. Poses with weak metadata may still need later metadata cleanup, but runtime suppression now guards prompt output.
- Browser QA remains environment-dependent; Node VM smoke tests are the primary regression guard for this checkout.

## Test Matrix

| Case | Expected Result |
| --- | --- |
| Tsukuyomi + spellcasting + `no_item` | Positive prompt excludes `silver crescent katana`, `katana`, `sword`, `blade`, `sheath`, `scabbard`; negative includes `floating sword`, `floating katana`, `summoned blade`, `weapon-shaped aura`. |
| Tsukuyomi + katana attack + `with_item` | Positive prompt still includes `silver crescent katana` or `katana`. |
| Benzaiten + instrument performance + `with_item` | Positive prompt includes `biwa` and does not weaponize it. |
| Benzaiten recommended/compatible poses | V11.1.5 weapon active attack poses remain hidden. |
| Ptah/tool hammer character | Hammer smash weapon poses remain hidden. |
| Daikokuten + heavy weapon pose + `with_item` | Positive prompt still includes `giant fortune war mallet`. |

## Validation Commands

- `node --check app.js`
- `node --check data.js`
- `node --check poseLibraryV9.js`
- `node --check data/characters/index.js`
- `node --check data/characters/*.js`
- `node --check pose_packs/v11_1_5_advanced_weapon_action_pose_pack.js`
- `node tests/v11_1_3_itemrole_pose_lock_smoke_test.js`
- `node tests/v11_1_4_pose_pack_smoke_test.js`
- `node tests/v11_1_5_egypt_kami_pose_integration_smoke_test.js`
- `node tests/v11_1_6_pose_intent_item_suppression_smoke_test.js`
