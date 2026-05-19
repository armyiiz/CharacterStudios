# Character Prompt Studio V11.1.7

## Prompt Compression + Weapon Family Pose Compatibility

Date: 2026-05-18

## Summary

V11.1.7 moves the weapon-rest problem out of prompt bloat and into metadata-backed filtering plus placement resolution. The patch compresses the four V11X body showcase pose prompts, adds family-aware passive weapon pose variants, blocks unsafe generic weapon rest for katana/tachi users, and preserves the V11.1.3 non-weapon lock plus V11.1.6 no-item suppression behavior.

## Files Changed

- `app.js`
- `index.html`
- `pose_packs/v11_1_x_custom_body_showcase_pose_pack.js`
- `pose_packs/v11_1_7_weapon_family_pose_pack.js`
- `tests/v11_1_7_weapon_family_pose_compatibility_smoke_test.js`
- Existing smoke-test loaders updated to include the V11.1.7 pose pack.
- `tests/v11_1_x_custom_body_showcase_pose_pack_smoke_test.js`
- `docs/reference/CHARACTER_DATA_SCHEMA.md`
- `docs/testing/TESTING_CHECKLIST.md`
- `docs/reports/V11_1_7_PROMPT_COMPRESSION_WEAPON_FAMILY_COMPATIBILITY_REPORT.md`

## Pose Prompts Compressed

Compressed only `prompt` and `noItemPrompt` for:

- `V11X-BS-01`
- `V11X-BS-02`
- `V11X-BS-03`
- `V11X-BS-04`

Preserved IDs, category metadata, item flags, item-role restrictions, presentation modes, no-item safety, negative additions, and filtering behavior. The repeated guard language now remains in shared guard/negative blocks rather than each pose prompt.

## Metadata Fields Added Or Supported

The runtime now supports:

- `compatibleWeaponFamilies`
- `avoidWeaponFamilies`
- `weaponHandPlacement`
- `explicitItemHold`
- `weaponPresentation`
- `holdStyle`
- `restStyle`
- `familySpecificItemPrompts`

These are used by new passive weapon-family poses and by the prompt resolver to avoid vague generic placement.

## Weapon Family Resolver Behavior

Added runtime helpers to resolve weapon family/subtype from `personalItem.itemFamily`, item name, description, prompt text, and guard text.

Covered families include:

- katana/tachi-like swords
- standard sword
- large/heavy weapons
- hammer/axe/mace
- spear/polearm/naginata/lance/trident
- bow/yumi/longbow
- rifle/long gun
- gun/pistol
- dagger/knife
- staff/wand/rod

Katana/tachi-like weapons are blocked from grounded heavy rest, vertical planted rest, and generic Weapon-at-Side Rest unless the pose has katana-safe metadata.

## Poses Reclassified Or Filtered

- Unsafe generic passive/rest/carry poses now require family-safe metadata for weapon users.
- `Weapon-at-Side Rest` is hidden for Susanoo/tachi in with-item mode.
- Weapon characters no longer see hands-busy with-item poses unless the pose has explicit family-safe weapon placement.
- Existing active weapon attack poses remain available.
- Non-weapon items still cannot use weapon active attack poses.
- No-item mode still prefers `noItemPrompt` and suppresses item aliases.

## New Pose Variants

Added 7 V11.1.7 weapon-family passive variants:

- `V117-WF-KATANA-REST-01`
- `V117-WF-KATANA-HOLD-01`
- `V117-WF-HEAVY-REST-01`
- `V117-WF-BOW-CARRY-01`
- `V117-WF-SPEAR-REST-01`
- `V117-WF-RIFLE-CARRY-01`
- `V117-WF-DAGGER-HOLD-01`

Current active pose count after integration: `562`.

## Tests Added Or Updated

Added:

- `tests/v11_1_7_weapon_family_pose_compatibility_smoke_test.js`

Updated:

- V11.1.3, V11.1.4, V11.1.5, V11.1.6, V11.1.X, V11.1 prompt compression, V11.1.1, and V11.1.2 smoke-test loaders to include the new pose pack where runtime parity matters.
- V11.1.X body showcase test expectations to validate compressed pose intent instead of repeated guard text.

## Test Command Results

Passed syntax checks:

- `node --check app.js`
- `node --check data.js`
- `node --check poseLibraryV9.js`
- `node --check data/characters/index.js`
- `node --check data/characters/*.js`
- `node --check pose_packs/*.js`
- `node --check tests/v11_1_7_weapon_family_pose_compatibility_smoke_test.js`

Passed smoke tests:

- `node tests/v11_1_3_itemrole_pose_lock_smoke_test.js`
- `node tests/v11_1_4_pose_pack_smoke_test.js`
- `node tests/v11_1_5_egypt_kami_pose_integration_smoke_test.js`
- `node tests/v11_1_6_pose_intent_item_suppression_smoke_test.js`
- `node tests/v11_1_6_1_with_item_passive_placement_smoke_test.js`
- `node tests/v11_1_6_2_weapon_with_item_pose_filter_smoke_test.js`
- `node tests/v11_1_x_custom_body_showcase_pose_pack_smoke_test.js`
- `node tests/v11_1_7_weapon_family_pose_compatibility_smoke_test.js`
- `node v11_1_prompt_compression_smoke_test.js`
- `node v11_1_1_pose_item_conflict_smoke_test.js`
- `node v11_1_2_ux_cleanup_smoke_test.js`

Key V11.1.7 smoke-test results:

- `585` active characters.
- `562` active poses.
- `7` V11.1.7 poses present.
- Duplicate pose IDs: `0`.
- Susanoo/tachi does not see generic `Weapon-at-Side Rest`.
- Susanoo/tachi sees katana sheathed rest and katana low side hold.
- Tsukuyomi no-item spellcasting suppresses katana/sword/blade/sheath/scabbard aliases.
- Benzaiten/instrument does not see weapon-family passive poses.
- Daikokuten/heavy, Hachiman/bow, spear, rifle, and dagger samples see matching family-safe poses and not mismatched family rests.

## Known Limitations

- This is structural prompt and filtering safety, not a guarantee that every image model render will be perfect.
- Some legacy base pose prompts still contain broad wording. The new filter blocks unsafe generic weapon rest for weapon-family-sensitive cases rather than rewriting the entire legacy library.
- `itemFamily` values in older character data can still be broad. The resolver uses item names/descriptions to infer subtype when possible.
- Browser file URL verification was blocked by the in-app browser URL policy. Node VM smoke tests were used as the primary runtime verification path.

## Browser QA Notes

- Attempted to open `file:///D:/KOB/New%20folder/CharacterUniverse/index.html` in the in-app browser.
- Browser automation blocked the `file://` URL by policy, so no visual/browser interaction QA was completed in this run.
- Runtime-equivalent Node VM smoke tests loaded the same scripts in order and validated character counts, pose counts, pose filtering, and prompt output.
