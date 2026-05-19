# V12.0.1 Combined Practicality + Camera Gender Gate + Prompt Compression Hotfix Report

Date: 2026-05-19

## Summary

- Applied combined safe hotfix only.
- High risk 14 character safe patch was already applied in this patch sequence: identityLock item leakage cleanup, compact aura/extra, and noItemRemove dedupe.
- Added female-default gender metadata to active camera-driven glamour poses.
- Added runtime male gate for `camera_driven_glamour` unless a pose explicitly opts male in.
- Added V12 camera glamour compact profile support and `promptSnippet` / compact negative metadata for V11X2 camera glamour prompts.
- Tightened no-item compact prompt cleanup so item terms do not leak through blank aura/extra fallbacks or no-item pose text.
- Did not add factions, poses, or delete pose records.

## Files Changed

- `app.js`
- `poselibraryv11_clean.js`
- `pose_packs/post_cleanup_pose_expansion_final_79.js`
- `pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js`
- `data/characters/characters_heavenly_kami_war_court_expansion_2.js`
- `data/characters/characters_heavenly_kami_war_court_expansion_3.js`
- `data/characters/characters_solar_necropolis_egypt.js`
- `data/characters/characters_solar_necropolis_egypt_expansion_2.js`
- `data/characters/characters_norse_valkyrie_dominion.js`
- `tests/v11_1_x2_kami_expansions_camera_glamour_pose_pack_smoke_test.js`
- `tests/v12_v11x2_camera_glamour_character_agnostic_audit_smoke_test.js`

## Safe Character Patch List

- Applied only approved-safe fields for high risk 14: `characterCore.identityLock`, `characterCore.aura`, `characterCore.extra`, and `personalItem.noItemRemove`.
- Did not change id/name/displayName/gender/faction/factionId/mythology/face/hair/outfit/body/presentationMode/itemRole/itemFamily/personalItem.name/personalItem.description.

## Deferred Risky Edits

- Deferred Odin itemRole/itemFamily.
- Deferred staff/crook/ankh/spear role decisions for Isis, Andjety, Hatshepsut, and Odin.
- Deferred all medium/low risk character cleanup.

## Counts And Duplicate Checks

- Active characters: 685
- Active poses: 279
- Kami faction 25: 150
- Duplicate character IDs: 0
- Duplicate character names: 0
- Duplicate pose IDs: 0

## Risk Count

- High risk before: 14
- High risk after: 3
- Character findings after: 552 total (`high: 3`, `medium: 212`, `low: 337`)

## Camera Gender Gate

- Male camera glamour visible count before: typical male no-item result was 68 camera poses from prior audit.
- Male + no_item camera glamour visible count after: 0
- Female + no_item camera glamour visible count after: 69
- Weapon/item female + with_item camera glamour visible count after: 0
- Camera poses with missing gender metadata after: 0

## Prompt Compression Example

- Before: V11X2 camera records carried prompt text around 1,300-1,500 chars plus repeated guard text and long negative additions around 650 chars.
- After sample: Alicia von Heimdall / V11X2-CG-01
  - Positive length: 2580
  - Negative length: 1253
  - "both hands empty" occurrences: 0
  - "original aura" occurrences: 0
  - Weapon/item leakage in no-item positive: NO

## Tests Run

- PASS node --check app.js
- PASS node --check data.js
- PASS node --check poseLibraryV9.js
- PASS node --check poselibraryv11_clean.js
- PASS node --check data/characters/index.js
- PASS node --check data/characters/characters_core.js
- PASS node --check data/characters/characters_elysian_apex.js
- PASS node --check data/characters/characters_elysian_apex_expansion_v2_simple_items.js
- PASS node --check data/characters/characters_elysian_apex_expansion_2.js
- PASS node --check data/characters/characters_elysian_apex_expansion_3.js
- PASS node --check data/characters/characters_norse_valkyrie_dominion.js
- PASS node --check data/characters/characters_norse_valkyrie_dominion_expansion_2.js
- PASS node --check data/characters/characters_solar_necropolis_egypt.js
- PASS node --check data/characters/characters_solar_necropolis_egypt_expansion_2.js
- PASS node --check data/characters/characters_heavenly_kami_war_court.js
- PASS node --check data/characters/characters_heavenly_kami_war_court_expansion_2.js
- PASS node --check data/characters/characters_heavenly_kami_war_court_expansion_3.js
- PASS node --check pose_packs/post_cleanup_pose_expansion_final_79.js
- PASS node --check pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js
- PASS node --check tests/character_selection_unified_thai_faction_ui_smoke_test.js
- PASS node --check tests/v11_1_3_itemrole_pose_lock_smoke_test.js
- PASS node --check tests/v11_1_4_pose_pack_smoke_test.js
- PASS node --check tests/v11_1_5_egypt_kami_pose_integration_smoke_test.js
- PASS node --check tests/v11_1_6_1_with_item_passive_placement_smoke_test.js
- PASS node --check tests/v11_1_6_2_weapon_with_item_pose_filter_smoke_test.js
- PASS node --check tests/v11_1_6_pose_intent_item_suppression_smoke_test.js
- PASS node --check tests/v11_1_7_weapon_family_pose_compatibility_smoke_test.js
- PASS node --check tests/v11_1_x2_kami_expansions_camera_glamour_pose_pack_smoke_test.js
- PASS node --check tests/v11_1_x_custom_body_showcase_pose_pack_smoke_test.js
- PASS node --check tests/v11_1_y_pose_library_hard_cleanup_smoke_test.js
- PASS node --check tests/v11_1_z_post_cleanup_pose_expansion_79_smoke_test.js
- PASS node --check tests/v12_kami_12_duplicate_concept_redesign_smoke_test.js
- PASS node --check tests/v12_v11x2_camera_glamour_character_agnostic_audit_smoke_test.js
- PASS node v11_1_1_pose_item_conflict_smoke_test.js
- PASS node v11_1_prompt_compression_smoke_test.js
- PASS node tests/character_selection_unified_thai_faction_ui_smoke_test.js
- PASS node tests/v11_1_3_itemrole_pose_lock_smoke_test.js
- PASS node tests/v11_1_4_pose_pack_smoke_test.js
- PASS node tests/v11_1_5_egypt_kami_pose_integration_smoke_test.js
- PASS node tests/v11_1_6_1_with_item_passive_placement_smoke_test.js
- PASS node tests/v11_1_6_2_weapon_with_item_pose_filter_smoke_test.js
- PASS node tests/v11_1_6_pose_intent_item_suppression_smoke_test.js
- PASS node tests/v11_1_7_weapon_family_pose_compatibility_smoke_test.js
- PASS node tests/v11_1_x2_kami_expansions_camera_glamour_pose_pack_smoke_test.js
- PASS node tests/v11_1_x_custom_body_showcase_pose_pack_smoke_test.js
- PASS node tests/v11_1_y_pose_library_hard_cleanup_smoke_test.js
- PASS node tests/v11_1_z_post_cleanup_pose_expansion_79_smoke_test.js
- PASS node tests/v12_kami_12_duplicate_concept_redesign_smoke_test.js
- PASS node tests/v12_v11x2_camera_glamour_character_agnostic_audit_smoke_test.js

## Remaining Risks

- Medium/low character practicality risks remain intentionally untouched.
- Staff/crook/ankh/spear role semantics still need human review before any itemRole/itemFamily changes.
- Older non-V11X2 camera prompts are metadata-gated but not fully rewritten.

## Recommendation For Next Patch

- Review the remaining 3 high-risk characters after this audit pass.
- Do a separate human-approved role-family pass for ritual staff/spear/crook/ankh cases.
- If desired, create a male-specific `camera_driven_male_editorial` pack instead of opting male into the current female glamour category.