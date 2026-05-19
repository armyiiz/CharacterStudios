# Codex Read This First For Future Character Expansions

Before integrating any new character batch, read `docs/reference/CODEX_CHARACTER_EXPANSION_HANDOFF.md`.

Important current safeguards:

- Keep character data content unchanged unless explicitly requested.
- Add new batches as separate files under `data/characters/`.
- Load new character files before `data/characters/index.js`.
- Preserve `charactersReworkedFinalV2` as an alias to `charactersReworkedFinalV3`.
- Browser-test the full selection flow, not only the count/search:
  - click old character -> Step 2 active
  - click new characters -> Step 2 active
  - summary contains selected name
  - pose cards render
- Do not reintroduce inline `onclick` on character cards; use `data-character-id` plus direct event listeners.

See also:

- `docs/reference/CHARACTER_DATA_SCHEMA.md`
- `docs/testing/TESTING_CHECKLIST.md`
- `docs/reports/ELYSIAN_APEX_EXPANSION_INTEGRATION_REPORT.md`
- `docs/reports/CHARACTER_SELECTION_FLOW_FIX_REPORT.md`
- `docs/reports/NORSE_VALKYRIE_DOMINION_INTEGRATION_REPORT.md`

Current modular character additions include:

- `data/characters/characters_norse_valkyrie_dominion.js`
- `data/characters/characters_norse_valkyrie_dominion_expansion_2.js`
- `data/characters/characters_solar_necropolis_egypt.js`
- `data/characters/characters_solar_necropolis_egypt_expansion_2.js`
- `data/characters/characters_heavenly_kami_war_court.js`

## V11.1.5 Egypt + Heavenly Kami Integration

V11.1.5 adds 150 modular characters and 24 weapon-only active attack poses:

- Solar Necropolis of Egypt Core 50, IDs 2402-2451
- Solar Necropolis of Egypt Expansion 2, IDs 2452-2501
- Heavenly Kami War Court Core 50, IDs 2502-2551
- V11.1.5 Advanced Weapon Action Pose Pack, IDs V115-WA-01 to V115-WA-24

Current validated runtime counts:

- Active characters: 585
- Active poses: 551

See:

- `docs/reports/V11_1_5_EGYPT_KAMI_INTEGRATION_REPORT.md`
- `docs/reports/V11_1_5_ADVANCED_WEAPON_ACTION_POSE_INTEGRATION_REPORT.md`

---

# Arcadia Multiverse — Character Prompt Studio V11

V11 integrates Character Schema Final v2. Character identity is now separated into `characterCore`, while toggleable weapons/props/items live in `personalItem`. This fixes the previous class of bugs where no-item mode could accidentally weaken or redesign hair, outfit, aura, body silhouette, or other identity traits.

See `V11_CHARACTER_SCHEMA_FINAL_V2_REPORT.md` for integration details.

---

# Arcadia Multiverse — Character Prompt Studio V9

V9 เปลี่ยนจาก all-in-one selector เป็น Character-First 3-Step Flow:

1. เลือกตัวละคร
2. เลือกเฉพาะ pose ที่ compatible กับตัวละครนั้น
3. ดู prompt แล้ว copy

## สิ่งที่เปลี่ยนจาก V8.1

- เอา Basic/Advanced mode ออก แล้วใช้ flow 3 ขั้นตอนแทน
- Step 1 แสดงเฉพาะ character grid + filters
- Step 2 แสดง pose ที่เข้ากันกับตัวละครเท่านั้น
- Recommended แสดง 8–12 ท่าแรกเป็น “หน้าร้าน” แต่คลัง pose ทั้งหมดยังเข้าถึงได้ผ่านแท็บ “คลังที่ใช้ได้ทั้งหมด”
- Item mode เหลือ 2 แบบ: `with_item` และ `no_item`
- Step 3 มี Positive/Negative prompt tabs, style selector, copy buttons
- เพิ่ม history 10 prompt ล่าสุดผ่าน localStorage
- ใช้ `data.js` จาก V8.1 เดิมเพื่อรักษาฐานข้อมูลตัวละครและ pose library

## ไฟล์

- `index.html` — shell + layout V9
- `styles.css` — UI styles
- `data.js` — character / pose / style data จาก V8.1
- `app.js` — state, filtering, prompt builder, history, copy logic

เปิดใช้งานโดยเปิด `index.html` ใน browser หรือ serve ด้วย static server ก็ได้ค่ะ.

## V9 Final Patch Notes

ไฟล์ชุดนี้ผ่าน final QA patch แล้ว:

- เปลี่ยน storage key เป็น `arcadia_v9_character_prompt_studio_final_state`
- เปลี่ยน item mode แล้วระบบ validate selected pose ใหม่ทันที
- no-item mode จะหลีกเลี่ยง character description ที่มีคำถือของค้างอยู่
- with-item mode จะไม่รับท่า none-only เป็น fallback
- เพิ่มรายงาน `V9_FINAL_RELEASE_REPORT.md`


## V9.1.5 Figure Silhouette Lock Patch

เวอร์ชันนี้เพิ่มระบบล็อก body silhouette สำหรับตัวละครหญิง เพื่อแก้ปัญหาท่าต่อสู้/guard หนัก ๆ ไปกลบความตั้งใจด้านรูปร่างและเสน่ห์ของตัวละคร

- เพิ่ม `FIGURE_PRESETS` เช่น `glamour_voluptuous` และ `balanced_feminine`
- เพิ่ม Figure Signature / Figure Preservation / Figure Framing ใน positive prompt ก่อน pose
- เพิ่ม Glamour Action Override สำหรับท่าต่อสู้ของตัวละครหญิง
- ปรับ recommendation ให้ดันท่า bust / waist-up / thigh-up / knee-up / sitting / leaning / over-shoulder / low-angle มากขึ้น
- เพิ่ม negative เฉพาะทางกันอกแบน หุ่นตรง เอวหาย หรือ weapon บัง silhouette
- ปรับ base negative ให้กัน explicit/nude แบบเจาะจงขึ้น โดยไม่กด tasteful glamour เกินไป
- เปลี่ยน storage key เป็น `arcadia_v9_character_prompt_studio_v9_1_5_figure_silhouette_lock_state`

ดูรายละเอียดใน `V9_1_5_FIGURE_SILHOUETTE_LOCK_REPORT.md`
