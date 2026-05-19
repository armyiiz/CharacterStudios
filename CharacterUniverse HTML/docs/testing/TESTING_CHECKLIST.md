# Testing Checklist

Use this checklist after every character data integration.

## Syntax And Smoke Tests

Run these from the project root:

```powershell
node --check data/characters/index.js
node --check app.js
node v11_1_prompt_compression_smoke_test.js
node v11_1_1_pose_item_conflict_smoke_test.js
node tests/v11_1_3_itemrole_pose_lock_smoke_test.js
node tests/v11_1_7_weapon_family_pose_compatibility_smoke_test.js
node tests/v11_1_y_pose_library_hard_cleanup_smoke_test.js
node tests/v11_1_z_post_cleanup_pose_expansion_79_smoke_test.js
node tests/v11_1_x2_kami_expansions_camera_glamour_pose_pack_smoke_test.js
node tests/character_selection_unified_thai_faction_ui_smoke_test.js
```

Also run `node --check` on every new or changed character data file.

## Data Checks

Verify from runtime data, not hardcoded guesses:

```txt
final active character count
charactersReworkedFinalV2 alias count
new batch count
new batch ID range
duplicate IDs
missing IDs in requested continuity range
old duplicate expansion references
```

## Browser Flow Checks

Do not stop at "site loads" or "search finds the character".

Verify:

```txt
1. Header character count is correct.
2. Character grid has visible cards.
3. Character cards use data-character-id.
4. Character cards do not have malformed inline onclick.
5. Click first visible old character.
6. Step 2 becomes active.
7. Character summary contains the selected character.
8. Pose cards render.
9. Search for several newly added characters.
10. Click each new character.
11. Each new character reaches Step 2.
12. Each new character summary contains its name.
13. Each new character has pose cards.
14. Return to Step 1 or change character, then select another character again.
```

## V11.1.3 ItemRole / Pose Lock Checks

Verify after itemRole or pose filtering changes:

```txt
1. Weapon characters still see compatible combat / active attack poses.
2. Non-weapon characters do not see active_attack, slash, thrust, aiming, or weapon-swing poses.
3. No-item mode excludes item-required poses and keeps hands empty.
4. Instrument characters can still use performer / instrument / ceremonial poses.
5. Document characters can still use reading / scholarly / presenting poses.
6. Daily and accessory characters can still use lifestyle / glamour / royal poses.
7. combat_ready poses behave as battle_presence, not active_attack.
8. Generated non-weapon prompts do not weaponize horn, fan, scroll, teacup, lyre, apple, handbag, mirror, lantern, or similar items.
9. Complexity Lock appears in positive and negative prompt output.
10. V11.1.2 desktop floating copy panel and mobile sticky copy bar still work.
```

Future V11.1.4 should add separate weapon active attack poses and lifestyle item interaction poses rather than broadening non-weapon compatibility with combat poses.

## V11.1.4 Starter Pose Pack Checks

Run the dedicated pose-pack smoke test after any pose-library change:

```powershell
node tests/v11_1_4_pose_pack_smoke_test.js
```

Verify:

```txt
1. Pose count increases by exactly the intended pack size compared with the previous report baseline.
2. Weapon active attack poses require item, are not no-item safe, use itemActionType active_attack, include only weapon compatibility, and avoid all non-weapon itemRole values.
3. Lifestyle interaction poses require item, are not active_attack, avoid weapon, and support non-weapon roles.
4. Weapon samples such as Thor, Athena, and Nemesis can see matching weapon action poses.
5. Non-weapon samples such as Heimdall, Bragi, Hera, Aphrodite, Nyx, and Tyche cannot see weapon action poses.
6. Fan, document, instrument, cup/tray, and tool characters can see matching lifestyle poses.
7. Non-weapon generated prompts do not use weaponized wording such as attack with horn, swing fan as weapon, or slash with teacup.
```

## V11.1.7 Weapon-Family Pose Compatibility Checks

Run after prompt placement, passive weapon pose, or pose-pack filtering changes:

```powershell
node tests/v11_1_7_weapon_family_pose_compatibility_smoke_test.js
```

Verify:

```txt
1. V11X-BS-01 through V11X-BS-04 remain no-item-safe, item-free, non-attack, and compressed.
2. Susanoo/tachi does not see generic Weapon-at-Side Rest in with-item mode.
3. Susanoo/tachi can see katana sheathed hip rest and katana low side hold.
4. Katana/tachi passive prompts include scabbard/hip or visible-hand blade placement.
5. Tsukuyomi no-item spellcasting still suppresses katana/sword/blade/sheath/scabbard aliases.
6. Benzaiten/instrument and other non-weapon items do not see weapon-family passive poses.
7. Daikokuten/heavy, Hachiman/bow, spear, rifle, and dagger samples see only matching family-safe passive poses.
8. No duplicate pose IDs are introduced.
```

## V11.1.5 Egypt + Kami Integration Checks

Run the dedicated integration smoke test after Egypt, Kami, or V11.1.5 pose-pack changes:

```powershell
node tests/v11_1_5_egypt_kami_pose_integration_smoke_test.js
```

Verify:

```txt
1. Active characters increase from the current runtime baseline by 150.
2. Faction 24 has 100 characters and faction 25 has 50 characters.
3. IDs 2402-2451, 2452-2501, and 2502-2551 are present.
4. V115-WA-01 through V115-WA-24 are present.
5. No duplicate character IDs or pose IDs exist.
6. All V11.1.5 poses are weapon-only active_attack poses.
7. Benzaiten and Egypt non-weapon samples do not see V11.1.5 weapon attack poses.
8. Amaterasu, Hachiman, Daikokuten, Shuten-doji, and Egypt weapon samples see compatible weapon action poses.
9. Benzaiten positive prompt does not weaponize the biwa.
10. Browser QA checks desktop, tablet, and mobile selection/copy flow.
```

## Browser Console Helper

The optional browser-console helper is:

```txt
docs/testing/character_selection_flow_regression_debug.js
```

If browser validation appears stale, use a fresh localhost port/origin or clear site storage before retesting.
