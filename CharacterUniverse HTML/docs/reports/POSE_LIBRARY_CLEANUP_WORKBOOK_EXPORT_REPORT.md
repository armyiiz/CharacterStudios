# Pose Library Cleanup Workbook Export Report

Date: 2026-05-18

## Summary

- Active pose count exported: 562
- Runtime-equivalent source collections scanned: 4
- Source files scanned:
  - `poseLibraryV9.js`
  - `pose_packs/v11_1_5_advanced_weapon_action_pose_pack.js`
  - `pose_packs/v11_1_x_custom_body_showcase_pose_pack.js`
  - `pose_packs/v11_1_7_weapon_family_pose_pack.js`
- Workbook created: `docs/exports/POSE_LIBRARY_CLEANUP_WORKBOOK.xlsx`
- Tabs created: POSE_MASTER, DUPLICATE_REVIEW, CATEGORY_SUMMARY, ROLE_COMPATIBILITY_MATRIX, WEAPON_FAMILY_MATRIX, PROMPT_COMPRESSION, EXPORT_MAP, CHANGELOG, README

## Validation

- Active poses collected before export: 562
- POSE_MASTER rows written: 562
- Every active pose appears in POSE_MASTER: yes
- Duplicate pose IDs found across raw loaded sources before runtime de-dupe: 0
  - none
- Missing required metadata count: 0
- Risky compatibility flag count: 24
- Duplicate candidate rows: 15375
- Prompt bloat candidates count: 412
- Formula error scan completed: no obvious formula error tokens found
- Visual render pass completed for all workbook tabs.

## Round-Trip Import Instructions

1. Review `POSE_MASTER` and use `decision`, `mergeIntoId`, `qaStatus`, `exportStatus`, and `notes` for cleanup choices.
2. Keep `id`, `sourceFile`, `originalObjectJson`, and `extraFieldsJson` intact unless intentionally remapping a pose.
3. Use `newId` only when a pose should be renamed during import. Leave blank to preserve the original ID.
4. Keep JSON-string array fields valid. These include compatible roles, weapon families, presentation modes, risk tags, and negative additions.
5. Use `EXPORT_MAP` as the source-file routing table when converting approved rows back into JS pose objects.
6. Treat `DUPLICATE_REVIEW` and `PROMPT_COMPRESSION` as advisory review tabs only. No source pose was merged, deleted, or rewritten during this export.

## Notes

- The workbook preserves original pose objects in `originalObjectJson` and non-master extra fields in `extraFieldsJson`.
- Syntax checks were not required because no runtime JS source files were changed.
- Inspection sample captured for POSE_MASTER A1:J8 during export.
