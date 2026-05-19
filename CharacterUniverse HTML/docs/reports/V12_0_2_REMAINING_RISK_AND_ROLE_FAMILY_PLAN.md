# V12.0.2 Remaining Risk And Role-Family Plan

Date: 2026-05-19

## Scope

- Planning report only.
- Source data should not be changed in this pass.
- Inputs reviewed:
  - `docs/reports/V12_0_1_COMBINED_PRACTICALITY_CAMERA_PROMPT_HOTFIX_REPORT.md`
  - `docs/reports/CHARACTER_POSE_PRACTICALITY_AUDIT_REPORT.md`
- Current V12.0.1 baseline from report: 685 active characters, 279 active poses, high-risk characters reduced from 14 to 3, camera gender gate passing.

## 1. Remaining High-Risk Characters

| ID | Character | File | Current risk | Should fix? | Recommended handling |
| --- | --- | --- | --- | --- | --- |
| 2402 | Ra | `data/characters/characters_solar_necropolis_egypt.js` | Score 12. Accessory `gold sun disk fan` is non-weapon, but audit still sees weapon-like wording such as blade/weapon, plus aura/floating effect density. | Yes, but small and safe-first. | Auto-safe cleanup should remove weapon-like guard wording from non-weapon fan language and keep aura behind body. Do not change role/family unless reviewer wants fan treated as weapon, which is not recommended. |
| 2578 | Konohanasakuya Ash Bloom | `data/characters/characters_heavenly_kami_war_court_expansion_2.js` | Score 12. Weapon katana is valid, but flame/sakura aura plus identityLock effects remain dense; item text repeats a physically rigid flame katana and can overdrive no-item/detail guards. | Yes, mostly auto-safe. | Compact aura/effect language further and dedupe item description/noItem aliases. Keep weapon/katana role-family. Human review only if reducing "flame katana" concept strength. |
| 2606 | Takemikazuchi War Marshal | `data/characters/characters_heavenly_kami_war_court_expansion_3.js` | Score 12. Weapon katana is valid, but thunder seal halo, banner fragments, lightning katana, and long extra/identity effect wording still create clutter risk. | Yes, mostly auto-safe. | Compact thunder/banner aura to one clean effect anchor and dedupe item aliases. Keep weapon/katana role-family and the "imperial thunder field commander" concept marker. |

Short read: these 3 are worth fixing, but they do not require broad redesign. They are good V12.0.2 pilot targets because they are contained and measurable.

## 2. Odin / Isis / Andjety / Hatshepsut Role-Family Decision

| Character | Current item | Recommendation | Why | Approval level |
| --- | --- | --- | --- | --- |
| Isis | `ritual_item` / `staff`, gold ankh staff | Keep `ritual_item` / `staff`. | An ankh staff is a ritual focus/regalia object. It should not unlock melee staff/spear poses by default. Improve prompt wording to "ceremonial focus, display/readable object, not strike/block." | Human approve before changing prompt semantics; do not change role/family automatically. |
| Andjety | `ritual_item` / `staff`, crook staff | Keep `ritual_item` / `staff`. | Crook is royal/ritual authority icon, not a combat staff. If a `crook` family does not exist, keep `staff` but enforce non-weapon handling. | Human approve for wording; role/family can remain. |
| Hatshepsut | `ritual_item` / `staff`, ceremonial crook staff | Keep `ritual_item` / `staff`. | It is pharaonic regalia. Weaponizing it would damage concept and pose compatibility. | Human approve for wording; role/family can remain. |
| Odin | `ritual_item` / `spear`, dark rune spear | Needs explicit product decision. Default recommendation: keep `ritual_item` / `spear` only if it is Gungnir-like ritual regalia; switch to `weapon` / `spear` only if reviewer wants Odin to access spear attack poses. | This is the only ambiguous one. It has a sharp spearhead and physical spear wording, but the concept says runic/all-mother ritual authority. Changing to weapon would materially alter pose compatibility. | Human approve required. |

Recommended V12.0.2 default: keep Isis/Andjety/Hatshepsut as non-weapon ritual staff cases; defer Odin unless reviewer explicitly chooses "ritual spear regalia" vs "combat spear weapon."

## 3. Older Non-V11X2 Camera Prompts Not Yet Compressed

V12.0.1 compressed V11X2 output through shared profile/snippet behavior. Older camera records are gender-gated now, but most still use legacy `prompt` / `noItemPrompt` text and do not have `promptProfileId` or `promptSnippet`.

Current older non-V11X2 camera-driven glamour groups:

- `V11X-CG-*`: 26 poses in `poselibraryv11_clean.js`.
- `V11X-BS-*`: 4 poses in `poselibraryv11_clean.js`.
- `PCA-CAM-*`: 10 poses in `pose_packs/post_cleanup_pose_expansion_final_79.js`.
- `V11X-CGV2-*`: 9 active poses in `pose_packs/post_cleanup_pose_expansion_final_79.js`.

Compression priority:

1. `V11X-CGV2-09` and `V11X-CGV2-10`: longest older camera prompts, around 724-725 chars, with low-angle floor/lounge foreshortening.
2. `V11X-CGV2-03` and `V11X-CGV2-02`: still longer than the rest and camera/body staging heavy.
3. Anatomy-risk older V11X set: `V11X-CG-03`, `V11X-CG-01`, `V11X-CG-04`, `V11X-CG-08`, `V11X-CG-09`, `V11X-CG-26`.
4. `PCA-CAM-*`: shorter, but should receive the same profile metadata for consistency.
5. `SSE-*` sensual editorial poses are not `camera_driven_glamour`, but several are long and camera-heavy. Treat them as a separate editorial-profile cleanup, not part of camera glamour unless category rules change.

Important distinction: older non-V11X2 camera prompts are not as bloated as pre-hotfix V11X2. The main issue is consistency and profile migration, not emergency prompt-length failure.

## 4. Auto-Safe vs Human-Approved Work

Auto-safe candidates:

- Add `promptProfileId` / `promptSnippet` / concise negative metadata to older camera-driven glamour poses without changing pose IDs, title, category, no-item locks, or visible behavior.
- Convert older camera pose text into atomic pose snippets: camera angle, body staging, hand/leg placement, expression only.
- Dedupe repeated noItem/remove aliases and non-conceptual guard phrases.
- Compact Ra / Konohanasakuya / Takemikazuchi aura text only where the same meaning is preserved.
- Add tests for generated prompt length and repeated guard phrase count.

Human approval required:

- Any `itemRole` or `itemFamily` change.
- Odin ritual spear vs weapon spear decision.
- Any change to mythic object identity: ankh, crook, spear, katana, sun disk fan.
- Any concept-strength reduction such as removing flame/thunder/sakura/banner identity rather than merely compacting it.
- Any new male camera category or male opt-in to glamour poses.

Do not touch in V12.0.2:

- IDs, names, display names, factions, mythology, face/hair/outfit/body fields.
- Medium/low-risk mass cleanup.
- Pose deletion or merging.
- Thai-only faction UI rules.

## 5. Recommended Next Patch

Recommended patch label:

`V12.0.2 Remaining High-Risk Cleanup + Legacy Camera Prompt Profile Migration Plan`

Recommended implementation scope:

1. Clean the remaining 3 high-risk characters with approved-safe text-only cleanup.
2. Keep Isis/Andjety/Hatshepsut role-family unchanged; only add review notes or non-weapon wording if approved.
3. Leave Odin role-family deferred unless reviewer chooses one of two explicit modes:
   - `ritual_item / spear`: non-attack regalia, vertical/readable beside body.
   - `weapon / spear`: unlock spear-compatible weapon poses.
4. Migrate older camera-driven glamour prompts to the V12 shared profile shape, starting with `V11X-CGV2-*`, then `V11X-CG-*`, `V11X-BS-*`, and `PCA-CAM-*`.
5. Add/extend smoke tests:
   - active characters remain 685;
   - active poses remain 279;
   - duplicate IDs remain 0;
   - male no-item camera glamour remains 0;
   - female no-item camera glamour remains visible;
   - generated compact camera positive prompt stays under target length for representative V11X2 and older camera poses;
   - no repeated guard phrase exceeds one occurrence.

Recommended order:

1. V12.0.2A: remaining 3 high-risk character cleanup proposal + safe patch.
2. V12.0.2B: legacy camera prompt profile migration, no pose count changes.
3. V12.0.2C: human-approved role-family pass for Odin / Egyptian ritual staff cases, if reviewer approves.

## Residual Risk

- Audit count may still show many medium/low risks after V12.0.2 because the detector is intentionally broad and flags readable but effect-heavy fantasy characters.
- Some camera poses are anatomically advanced by design. Compression improves prompt clarity but does not make extreme low-angle/foreshortened poses easy.
- Role-family decisions affect runtime compatibility more than prompt text, so they should stay review-gated.
