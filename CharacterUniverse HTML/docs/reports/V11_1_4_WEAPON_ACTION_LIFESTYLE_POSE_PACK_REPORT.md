# Character Prompt Studio V11.1.4 Weapon Action + Lifestyle Pose Pack Report

## Patch Summary

V11.1.4 adds a small starter pose expansion pack: 12 weapon-only active attack poses and 12 non-weapon lifestyle item interaction poses. The patch preserves V11.1.3 non-weapon locking and does not change character data.

## Files Changed

- app.js
- poseLibraryV9.js
- v11_1_prompt_compression_smoke_test.js
- v11_1_1_pose_item_conflict_smoke_test.js
- v11_1_2_ux_cleanup_smoke_test.js
- tests/v11_1_4_pose_pack_smoke_test.js
- docs/reference/CHARACTER_DATA_SCHEMA.md
- docs/testing/TESTING_CHECKLIST.md
- docs/reports/V11_1_4_WEAPON_ACTION_LIFESTYLE_POSE_PACK_REPORT.md

## Pose Counts

| Metric | Count |
| --- | ---: |
| V11.1.3 baseline pose count | 503 |
| New V11.1.4 pose count | 527 |
| Poses added | 24 |
| Weapon active attack starter poses | 12 |
| Lifestyle interaction starter poses | 12 |

## Weapon Active Attack Poses

| ID | Title | Thai Title | itemActionType | compatibleItemRoles | avoidItemRoles |
| --- | --- | --- | --- | --- | --- |
| V114-WA-01 | Sword Diagonal Slash | ฟันดาบเฉียง | active_attack | weapon | instrument_item, document_item, daily_item, accessory_item, ritual_item, tool_item, prop, none |
| V114-WA-02 | Katana Iaido Draw | ชักคาตานะอิไอโด | active_attack | weapon | instrument_item, document_item, daily_item, accessory_item, ritual_item, tool_item, prop, none |
| V114-WA-03 | Spear Forward Thrust | แทงหอกไปข้างหน้า | active_attack | weapon | instrument_item, document_item, daily_item, accessory_item, ritual_item, tool_item, prop, none |
| V114-WA-04 | Rapier Piercing Lunge | ลันจ์แทงเรเปียร์ | active_attack | weapon | instrument_item, document_item, daily_item, accessory_item, ritual_item, tool_item, prop, none |
| V114-WA-05 | Dual Dagger Cross Strike | มีดคู่ไขว้โจมตี | active_attack | weapon | instrument_item, document_item, daily_item, accessory_item, ritual_item, tool_item, prop, none |
| V114-WA-06 | Axe Wide Swing | เหวี่ยงขวานวงกว้าง | active_attack | weapon | instrument_item, document_item, daily_item, accessory_item, ritual_item, tool_item, prop, none |
| V114-WA-07 | Hammer Overhead Smash | ยกค้อนทุบลง | active_attack | weapon | instrument_item, document_item, daily_item, accessory_item, ritual_item, tool_item, prop, none |
| V114-WA-08 | Shield Guard Bash | ตั้งโล่กระแทก | active_attack | weapon | instrument_item, document_item, daily_item, accessory_item, ritual_item, tool_item, prop, none |
| V114-WA-09 | Bow Full Draw | ง้างธนูเต็มสาย | active_attack | weapon | instrument_item, document_item, daily_item, accessory_item, ritual_item, tool_item, prop, none |
| V114-WA-10 | Gun Side Aim | เล็งปืนเฉียงข้าง | active_attack | weapon | instrument_item, document_item, daily_item, accessory_item, ritual_item, tool_item, prop, none |
| V114-WA-11 | Scythe Crescent Sweep | กวาดเคียวรูปจันทร์เสี้ยว | active_attack | weapon | instrument_item, document_item, daily_item, accessory_item, ritual_item, tool_item, prop, none |
| V114-WA-12 | Greatsword Shoulder Charge | พุ่งพร้อมดาบใหญ่พาดไหล่ | active_attack | weapon | instrument_item, document_item, daily_item, accessory_item, ritual_item, tool_item, prop, none |

## Lifestyle Interaction Poses

| ID | Title | Thai Title | itemActionType | compatibleItemRoles | avoidItemRoles |
| --- | --- | --- | --- | --- | --- |
| V114-LI-01 | Teacup Sip | จิบชา | serve_carry | daily_item, accessory_item, document_item, instrument_item, tool_item, prop, ritual_item | weapon |
| V114-LI-02 | Serving Tray Presentation | ยื่นถาดเสิร์ฟ | serve_carry | daily_item, accessory_item, document_item, instrument_item, tool_item, prop, ritual_item | weapon |
| V114-LI-03 | Fan Covering Smile | พัดปิดรอยยิ้ม | glamour_showcase | daily_item, accessory_item, document_item, instrument_item, tool_item, prop, ritual_item | weapon |
| V114-LI-04 | Hand Mirror Check | ส่องกระจกมือ | glamour_showcase | daily_item, accessory_item, document_item, instrument_item, tool_item, prop, ritual_item | weapon |
| V114-LI-05 | Perfume Presenting | โชว์ขวดน้ำหอม | present_item | daily_item, accessory_item, document_item, instrument_item, tool_item, prop, ritual_item | weapon |
| V114-LI-06 | Flower Offering | ยื่นดอกไม้ | present_item | daily_item, accessory_item, document_item, instrument_item, tool_item, prop, ritual_item | weapon |
| V114-LI-07 | Book Reading | อ่านหนังสือ | read_write | daily_item, accessory_item, document_item, instrument_item, tool_item, prop, ritual_item | weapon |
| V114-LI-08 | Scroll Writing | เขียนบนม้วนคัมภีร์ | read_write | daily_item, accessory_item, document_item, instrument_item, tool_item, prop, ritual_item | weapon |
| V114-LI-09 | Lantern Walk | เดินถือโคมไฟ | hold_item | daily_item, accessory_item, document_item, instrument_item, tool_item, prop, ritual_item | weapon |
| V114-LI-10 | Key Unlocking | ไขกุญแจ | present_item | daily_item, accessory_item, document_item, instrument_item, tool_item, prop, ritual_item | weapon |
| V114-LI-11 | Broom Sweeping | กวาดพื้น | tool_use | daily_item, accessory_item, document_item, instrument_item, tool_item, prop, ritual_item | weapon |
| V114-LI-12 | Instrument Performance | เล่นเครื่องดนตรี | play_instrument | daily_item, accessory_item, document_item, instrument_item, tool_item, prop, ritual_item | weapon |

## Compatibility Behavior

- Weapon poses use requiresItem true, noItemSafe false, itemActionType active_attack, compatibleItemRoles weapon only, and avoid all non-weapon item roles.
- Lifestyle poses use requiresItem true, noItemSafe false, avoid weapon, and use non-attack action types such as serve_carry, glamour_showcase, present_item, read_write, hold_item, tool_use, and play_instrument.
- app.js now prefers the longest loaded pose library so the standalone poseLibraryV9.js expansion is active even when legacy data.js is loaded first.
- Item-family compatibility aliases were expanded for real current data values such as hammer, spear, trident, horn, lyre, fan, scroll, lantern, key, broom, and tray-like accessory items.

## Test Results

- PASS node --check app.js
- PASS node --check data.js
- PASS node --check poseLibraryV9.js
- PASS node --check data/characters/index.js
- PASS node --check data/characters/*.js
- PASS node --check tests/v11_1_4_pose_pack_smoke_test.js
- PASS node v11_1_prompt_compression_smoke_test.js
- PASS node v11_1_1_pose_item_conflict_smoke_test.js
- PASS node v11_1_2_ux_cleanup_smoke_test.js
- PASS node tests/v11_1_3_itemrole_pose_lock_smoke_test.js
- PASS node tests/v11_1_4_pose_pack_smoke_test.js

## Browser QA Results

Browser QA was attempted on the local static server. The page loaded without captured console errors, but the in-app browser automation could not complete the interactive character/pose search flow reliably because the page restored to a hidden step state and Playwright interactions on the hidden search input timed out. The VM smoke tests cover the same V11.1.4 compatibility logic, including prompt generation, weapon/non-weapon visibility, and pose count. Re-run manual browser QA at desktop 1440, tablet 1024, and mobile 390 before a visual release.

## Known Limitations

- This is a starter pack, not the full large pose expansion. It intentionally adds only 24 poses.
- Weapon family matching is still conservative; future packs can add deeper family-specific scoring for rapier, scythe, shield, and dual-dagger specialists.
- Lifestyle poses are broad non-weapon interactions; future packs can add more exact variants for specific pantheons and factions.

## Future Recommendation

After browser QA passes, the project is safer for Solar Necropolis of Egypt. A larger future pose pack can expand Egyptian-specific weapon actions and ritual/lifestyle interactions after the new faction lands.
