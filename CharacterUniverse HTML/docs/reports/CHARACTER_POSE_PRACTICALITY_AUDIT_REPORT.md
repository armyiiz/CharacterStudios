# Character / Pose Practicality Deep Audit

Date: 2026-05-19

## Scope

- Characters scanned: 685
- Active runtime poses scanned: 279
- Character source files scanned: 12
- Active pose source files scanned: 3
- This report is an audit only. No character or pose source data was changed.

## Executive Summary

- Character records with at least one practicality risk: 552 (high 14, medium 204, low 334)
- Pose records with at least one practicality risk: 48 (high 0, medium 3, low 45)
- Most common character issue types: effect/aura overload, nonphysical or over-detailed personal items, and removable item/action language leaking into characterCore.
- Most common pose issue types: extreme camera/body distortion, no-item-safe metadata attached to item/action language in older poses, and active/combat poses that should be stricter about required items.

## Character Findings

### Top Fix Candidates

- 2578 Konohanasakuya Ash Bloom [score 16] (data/characters/characters_heavenly_kami_war_court_expansion_2.js:2164)
  - item: role=weapon, family=katana; physically rigid cherry-blossom flame katana with visible metal edge physically rigid cherry-blossom flame katana with visible metal edge
  - issues: effect/aura overload (3 effect terms; aura 49 chars; extra 271 chars); identityLock binds many effects (3 terms), so no-item/simple poses may still carry visual clutter; characterCore may contain removable item/action language: katana; personal item may be hard to draw/read (1 complexity terms; nonphysical: aura, flame, floating)
  - core/effects sample: ash and sakura flame halo glowing behind the body Konohanasakuya-hime expansion aspect redesign: Konohanasakuya Ash Bloom ? Ashen Blossom Flame Empress. volcanic sakura empress, beautiful but dangerous. Adult female mythic reinterpretation with clear Japane...
- 2606 Takemikazuchi War Marshal [score 16] (data/characters/characters_heavenly_kami_war_court_expansion_3.js:337)
  - item: role=weapon, family=katana; physically rigid lightning katana with bronze guard and command thunder seals physically rigid lightning katana with bronze guard and command thunder seals
  - issues: effect/aura overload (3 effect terms; aura 108 chars; extra 277 chars); identityLock binds many effects (3 terms), so no-item/simple poses may still carry visual clutter; characterCore may contain removable item/action language: katana; personal item may be hard to draw/read (1 complexity terms; nonphysical: aura, lightning, floating)
  - core/effects sample: organized thunder seal halo and small command banner fragments behind her body, not random lightning clutter Takemikazuchi expansion aspect redesign: Takemikazuchi War Marshal ? Thunder Banner War Marshal. imperial thunder field commander, not just a thunde...
- 2404 Isis [score 13] (data/characters/characters_solar_necropolis_egypt.js:211)
  - item: role=ritual_item, family=staff; gold ankh staff gold ankh staff
  - issues: effect/aura overload (1 effect terms; aura 97 chars; extra 177 chars); characterCore may contain removable item/action language: staff; non-weapon item has weapon-like wording: blade, weapon
  - core/effects sample: soft wing-shaped light behind her back, clean and separated from face, hands, body, and main item Isis — Winged Mother of Magic; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divin...
- 2411 Thoth [score 13] (data/characters/characters_solar_necropolis_egypt.js:881)
  - item: role=document_item, family=scroll; papyrus scroll and reed pen papyrus scroll and reed pen
  - issues: effect/aura overload (1 effect terms; aura 93 chars; extra 183 chars); characterCore may contain removable item/action language: scroll; non-weapon item has weapon-like wording: blade, weapon
  - core/effects sample: thin moon glyphs behind the scroll, clean and separated from face, hands, body, and main item Thoth — Moon Scribe of Sacred Words; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian div...
- 2467 Renenet [score 13] (data/characters/characters_solar_necropolis_egypt_expansion_2.js:1491)
  - item: role=document_item, family=scroll; name scroll name scroll
  - issues: effect/aura overload (1 effect terms; aura 91 chars; extra 192 chars); characterCore may contain removable item/action language: scroll; non-weapon item has weapon-like wording: blade, weapon
  - core/effects sample: subtle name glyphs behind scroll, clean and separated from face, hands, body, and main item Renenet — Name-Nurse of Fortune; adult female fantasy reinterpretation of the Egyptian mythic or legendary figure; single-character SSR-style card; dark luxury Egypt...
- 2474 Andjety [score 13] (data/characters/characters_solar_necropolis_egypt_expansion_2.js:2159)
  - item: role=ritual_item, family=staff; crook staff crook staff
  - issues: effect/aura overload (1 effect terms; aura 95 chars; extra 195 chars); characterCore may contain removable item/action language: staff; non-weapon item has weapon-like wording: blade, weapon
  - core/effects sample: subtle green field glow behind staff, clean and separated from face, hands, body, and main item Andjety — Lord of the Eastern Nome; adult female fantasy reinterpretation of the Egyptian mythic or legendary figure; single-character SSR-style card; dark luxur...
- 2485 Ipy [score 13] (data/characters/characters_solar_necropolis_egypt_expansion_2.js:3237)
  - item: role=daily_item, family=cup; milk cup milk cup
  - issues: effect/aura overload (1 effect terms; aura 86 chars; extra 190 chars); characterCore may contain removable item/action language: cup; non-weapon item has weapon-like wording: blade, weapon
  - core/effects sample: warm hearth glow behind cup, clean and separated from face, hands, body, and main item Ipy — Nursing Hearth Guardian; adult female fantasy reinterpretation of the Egyptian mythic or legendary figure; single-character SSR-style card; dark luxury Egyptian div...
- 2494 Hatshepsut [score 13] (data/characters/characters_solar_necropolis_egypt_expansion_2.js:4107)
  - item: role=ritual_item, family=staff; ceremonial crook staff ceremonial crook staff
  - issues: effect/aura overload (1 effect terms; aura 96 chars; extra 203 chars); characterCore may contain removable item/action language: staff; non-weapon item has weapon-like wording: blade, weapon
  - core/effects sample: terrace-shaped gold glow behind staff, clean and separated from face, hands, body, and main item Hatshepsut — Pharaoh of the Divine Terrace; adult female fantasy reinterpretation of the Egyptian mythic or legendary figure; single-character SSR-style card; d...
- 2499 Nefertari [score 13] (data/characters/characters_solar_necropolis_egypt_expansion_2.js:4606)
  - item: role=document_item, family=scroll; star map scroll star map scroll
  - issues: effect/aura overload (1 effect terms; aura 91 chars; extra 188 chars); characterCore may contain removable item/action language: scroll; non-weapon item has weapon-like wording: blade, weapon
  - core/effects sample: soft painted stars behind scroll, clean and separated from face, hands, body, and main item Nefertari — Star Tomb Queen; adult female fantasy reinterpretation of the Egyptian mythic or legendary figure; single-character SSR-style card; dark luxury Egyptian ...
- 2302 Odin [score 12] (data/characters/characters_norse_valkyrie_dominion.js:9)
  - item: role=ritual_item, family=spear; a physically rigid dark rune spear a physically rigid dark metal spear with visible shaft, sharp spearhead, and small carved rune plates
  - issues: effect/aura overload (0 effect terms; aura 101 chars; extra 165 chars); characterCore may contain removable item/action language: spear; non-weapon item has weapon-like wording: spear, weapon
  - core/effects sample: one clean rune circle and two small raven silhouettes behind shoulders, separated from body and spear Odin — All-Mother of Runes, adult female Norse fantasy reinterpretation focused on dark luxury Valkyrie glamour, clean silhouette, and simple readable pers...
- 2402 Ra [score 12] (data/characters/characters_solar_necropolis_egypt.js:21)
  - item: role=accessory_item, family=fan; gold sun disk fan gold sun disk fan
  - issues: effect/aura overload (2 effect terms; aura 95 chars; extra 184 chars); personal item may be hard to draw/read (1 complexity terms; nonphysical: aura, floating); non-weapon item has weapon-like wording: blade, weapon
  - core/effects sample: soft solar halo behind her shoulders, clean and separated from face, hands, body, and main item Ra — Solar Empress of the First Dawn; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian ...
- 2423 Seshat [score 12] (data/characters/characters_solar_necropolis_egypt.js:1999)
  - item: role=document_item, family=book; star-marked papyrus book star-marked papyrus book
  - issues: effect/aura overload (0 effect terms; aura 93 chars; extra 187 chars); characterCore may contain removable item/action language: book; non-weapon item has weapon-like wording: blade, weapon
  - core/effects sample: subtle ruled lines behind the book, clean and separated from face, hands, body, and main item Seshat — Mistress of the House of Books; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian...
- 2450 Wadj-Wer [score 12] (data/characters/characters_solar_necropolis_egypt.js:4617)
  - item: role=daily_item, family=cup; shell cup shell cup
  - issues: effect/aura overload (0 effect terms; aura 85 chars; extra 174 chars); characterCore may contain removable item/action language: cup; non-weapon item has weapon-like wording: blade, weapon
  - core/effects sample: subtle wave arc behind cup, clean and separated from face, hands, body, and main item Wadj-Wer — Great Green Sea; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card; dark luxury Egyptian divine court aesthet...
- 2555 Yuki-onna Reika [score 12] (data/characters/characters_heavenly_kami_war_court_expansion_2.js:267)
  - item: role=weapon, family=katana; physically rigid ice-blue katana with white lacquer scabbard physically rigid ice-blue katana with white lacquer scabbard
  - issues: identityLock binds many effects (3 terms), so no-item/simple poses may still carry visual clutter; characterCore may contain removable item/action language: katana; personal item may be hard to draw/read (2 complexity terms; nonphysical: aura, smoke, floating)
  - core/effects sample: clean snow crystal halo behind her body Yuki-onna Reika — Blizzard Veil Duelist. Adult female mythic reinterpretation with clear Japanese visual identity. Yuki-onna Reika,Blizzard Veil Duelist,dark luxury shrine-war court outfit with lacquer armor plates, e...
- 2239 Hebe [score 11] (data/characters/characters_elysian_apex_expansion_v2_simple_items.js:1506)
  - item: role=daily_item, family=cup; a physically solid golden nectar cup a physically solid golden cup with visible rim, bowl, and stem
  - issues: effect/aura overload (0 effect terms; aura 61 chars; extra 178 chars); characterCore may contain removable item/action language: serving; personal item may be hard to draw/read (2 complexity terms; nonphysical: floating, liquid)
  - core/effects sample: small sparkling nectar ring behind shoulders, very restrained Hebe — Cupbearer of Eternal Youth, adult female Greco-Roman fantasy reinterpretation focused on beauty-first divine glamour, clear silhouette, and readable character-card design.
- 2405 Osiris [score 11] (data/characters/characters_solar_necropolis_egypt.js:308)
  - item: role=ritual_item, family=staff; crook and flail held ceremonially crook and flail held ceremonially
  - issues: effect/aura overload (1 effect terms; aura 115 chars; extra 186 chars); non-weapon item has weapon-like wording: blade, weapon; item name encodes hand placement (held), which can fight pose hand placement
  - core/effects sample: subtle emerald rebirth glow behind her throne silhouette, clean and separated from face, hands, body, and main item Osiris — Green Throne Queen of Rebirth; adult female fantasy reinterpretation of the Egyptian mythic figure; single-character SSR-style card;...
- 2495 Tutankhamun [score 11] (data/characters/characters_solar_necropolis_egypt_expansion_2.js:4208)
  - item: role=prop, family=mask; gold death mask held beside body gold death mask held beside body
  - issues: effect/aura overload (1 effect terms; aura 92 chars; extra 195 chars); non-weapon item has weapon-like wording: blade, weapon; item name encodes hand placement (held), which can fight pose hand placement
  - core/effects sample: subtle tomb gold glow behind mask, clean and separated from face, hands, body, and main item Tutankhamun — Golden Mask Princess; adult female fantasy reinterpretation of the Egyptian mythic or legendary figure; single-character SSR-style card; dark luxury E...
- 2535 Yuki-onna [score 11] (data/characters/characters_heavenly_kami_war_court.js:3138)
  - item: role=weapon, family=sword; ice-white katana ice-white katana
  - issues: effect/aura overload (3 effect terms; aura 107 chars; extra 193 chars); characterCore may contain removable item/action language: katana; personal item may be hard to draw/read (0 complexity terms; nonphysical: aura, mist)
  - core/effects sample: soft frost mist behind katana, not covering face, clean and separated from face, hands, body, and main item Yuki-onna — Frost Iaido Beauty; adult female fantasy reinterpretation in a combat-heavy Japanese kami and yokai war court; single-character SSR-style...
- 2554 Kiyohime Bell-Burning Bride [score 11] (data/characters/characters_heavenly_kami_war_court_expansion_2.js:178)
  - item: role=weapon, family=naginata; physically solid crimson naginata with small bell charm below the blade physically solid crimson naginata with small bell charm below the blade
  - issues: effect/aura overload (1 effect terms; aura 43 chars; extra 265 chars); characterCore may contain removable item/action language: weapon; personal item may be hard to draw/read (1 complexity terms; nonphysical: aura, floating)
  - core/effects sample: bell-shaped serpent flame behind the weapon Kiyohime expansion aspect redesign: Kiyohime Bell-Burning Bride ? Bell-Burning Serpent Bride. tragic bridal flame duelist with restrained madness. Adult female mythic reinterpretation with clear Japanese visual id...
- 2562 Futakuchi-onna [score 11] (data/characters/characters_heavenly_kami_war_court_expansion_2.js:856)
  - item: role=weapon, family=dagger; physically solid hairpin dagger held clearly in one hand physically solid hairpin dagger held clearly in one hand
  - issues: characterCore may contain removable item/action language: dagger; personal item may be hard to draw/read (2 complexity terms; nonphysical: aura, smoke, floating); item name encodes hand placement (one hand, held), which can fight pose hand placement
  - core/effects sample: hair forms one clean arc behind her Futakuchi-onna — Hidden-Mouth Hair Blade. Adult female mythic reinterpretation with clear Japanese visual identity. Futakuchi-onna,Hidden-Mouth Hair Blade,dark luxury shrine-war court outfit with lacquer armor plates, ele...
- 2566 Kamo no Yasunori [score 11] (data/characters/characters_heavenly_kami_war_court_expansion_2.js:1181)
  - item: role=ritual_item, family=scroll; physically solid folded star chart scroll held near waist level physically solid folded star chart scroll held near waist level
  - issues: characterCore may contain removable item/action language: scroll; personal item may be hard to draw/read (2 complexity terms; nonphysical: aura, smoke, floating); item name encodes hand placement (held), which can fight pose hand placement
  - core/effects sample: small gold star seals behind her shoulders Kamo no Yasunori — Imperial Star Diviner. Adult female mythic reinterpretation with clear Japanese visual identity. Kamo no Yasunori,Imperial Star Diviner,dark luxury shrine-war court outfit with lacquer armor plat...
- 2576 Sarutahiko Roadgate Vanguard [score 11] (data/characters/characters_heavenly_kami_war_court_expansion_2.js:1995)
  - item: role=weapon, family=spear; physically solid red-lacquer tengu spear with road-marker charms physically solid red-lacquer tengu spear with road-marker charms
  - issues: effect/aura overload (1 effect terms; aura 52 chars; extra 293 chars); characterCore may contain removable item/action language: spear; personal item may be hard to draw/read (1 complexity terms; nonphysical: aura, floating)
  - core/effects sample: directional road-marker light sigils behind her body Sarutahiko expansion aspect redesign: Sarutahiko Roadgate Vanguard ? Battlefield Pathfinder Vanguard. road-opening scout commander who leads armies through impossible routes. Adult female mythic reinterpr...
- 2607 Futsunushi Blade Arbiter [score 11] (data/characters/characters_heavenly_kami_war_court_expansion_3.js:425)
  - item: role=weapon, family=katana; physically rigid ceremonial execution katana with white judgment cord physically rigid ceremonial execution katana with white judgment cord
  - issues: effect/aura overload (1 effect terms; aura 74 chars; extra 282 chars); characterCore may contain removable item/action language: katana; personal item may be hard to draw/read (1 complexity terms; nonphysical: aura, floating)
  - core/effects sample: thin white blade-line aura arranged behind the body in clean vertical cuts Futsunushi expansion aspect redesign: Futsunushi Blade Arbiter ? Imperial Execution Blade Arbiter. cold sacred judge who ends divine disputes with one precise cut. Adult female mythi...
- 2612 Izanami-no-Mikoto [score 11] (data/characters/characters_heavenly_kami_war_court_expansion_3.js:844)
  - item: role=weapon, family=katana; physically rigid black underworld katana with bone-white guard physically rigid black underworld katana with bone-white guard
  - issues: effect/aura overload (1 effect terms; aura 31 chars; extra 122 chars); characterCore may contain removable item/action language: katana; personal item may be hard to draw/read (2 complexity terms; nonphysical: aura, smoke, floating)
  - core/effects sample: dark yomi gate halo behind body Izanami-no-Mikoto — Underworld Mother of Blades. Adult female mythic reinterpretation with clear Japanese visual identity. Izanami-no-Mikoto,Underworld Mother of Blades,dark luxury shrine-war court outfit with lacquer armor p...
- 2640 Ame-no-Habakiri Stormfang [score 11] (data/characters/characters_heavenly_kami_war_court_expansion_3.js:3125)
  - item: role=weapon, family=katana; physically rigid heaven-forged serpent-slaying katana with relic sheath physically rigid heaven-forged serpent-slaying katana with relic sheath
  - issues: effect/aura overload (1 effect terms; aura 59 chars; extra 277 chars); characterCore may contain removable item/action language: katana; personal item may be hard to draw/read (1 complexity terms; nonphysical: aura, floating)
  - core/effects sample: storm-fang sigils behind the blade, no serpent body clutter Ame-no-Habakiri expansion aspect redesign: Ame-no-Habakiri Stormfang ? Stormfang Serpent-Slayer Relic. sacred relic bearer and serpent-slayer execution blade. Adult female mythic reinterpretation w...
- 1608 Xuejian [score 10] (data/characters/characters_core.js:10927)
  - item: role=weapon, family=sword; a physically rigid ice-blue Chinese jian sword with a visible hilt, straight narrow blade, and readable blade edge a physically rigid ice-blue Chinese jian sword with a visible hilt, straight narrow blade, and readable blade edge
  - issues: effect/aura overload (7 effect terms; aura 63 chars; extra 0 chars); identityLock binds many effects (7 terms), so no-item/simple poses may still carry visual clutter; personal item may be hard to draw/read (0 complexity terms; nonphysical: none)
  - core/effects sample: soft frost mist and small ice crystals glowing behind the blade Long silver-white hair with icy blue sheen,a white and ice-blue snow immortal hanfu with crystal trims, layered sleeves, and flowing frost ribbons,frost-blue eyes; angelic face; distant calm ex...
- 2011 Justina Argentlaw [score 10] (data/characters/characters_core.js:13153)
  - item: role=ritual_item, family=large_weapon; physically solid glowing silver scales in one hand and a heavy ceremonial axe resting beside her with readable handle and blade physically solid glowing silver scales in one hand and a heavy ceremonial axe resting beside her with readable handle and blade
  - issues: personal item may be hard to draw/read (0 complexity terms; nonphysical: aura); non-weapon item has weapon-like wording: blade, axe; item name encodes hand placement (one hand), which can fight pose hand placement
  - core/effects sample: clean balance beam halo and white verdict lines behind her black bob hair,hourglass figure in fitted black court suit with deep but elegant neckline,sharp gray eyes behind glasses,clean balance beam halo and white verdict lines behind her
- 2489 Iabet [score 10] (data/characters/characters_solar_necropolis_egypt_expansion_2.js:3622)
  - item: role=ritual_item, family=tool; incense burner incense burner
  - issues: effect/aura overload (0 effect terms; aura 110 chars; extra 191 chars); personal item may be hard to draw/read (0 complexity terms; nonphysical: aura, smoke); non-weapon item has weapon-like wording: blade, weapon
  - core/effects sample: thin incense trail behind burner, not covering face, clean and separated from face, hands, body, and main item Iabet — Eastern Dawn Priestess; adult female fantasy reinterpretation of the Egyptian mythic or legendary figure; single-character SSR-style card;...
- 2504 Susanoo [score 10] (data/characters/characters_heavenly_kami_war_court.js:207)
  - item: role=weapon, family=sword; storm-forged tachi storm-forged tachi
  - issues: effect/aura overload (1 effect terms; aura 98 chars; extra 194 chars); characterCore may contain removable item/action language: sword; personal item may be hard to draw/read (0 complexity terms; nonphysical: aura, lightning)
  - core/effects sample: clean thundercloud arc behind the tachi, clean and separated from face, hands, body, and main item Susanoo — Storm Sea Sword Queen; adult female fantasy reinterpretation in a combat-heavy Japanese kami and yokai war court; single-character SSR-style card; d...
- 2506 Izanami [score 10] (data/characters/characters_heavenly_kami_war_court.js:397)
  - item: role=weapon, family=sword; black funeral katana black funeral katana
  - issues: effect/aura overload (1 effect terms; aura 107 chars; extra 191 chars); characterCore may contain removable item/action language: katana; personal item may be hard to draw/read (0 complexity terms; nonphysical: aura, flame)
  - core/effects sample: contained blue-black funeral flame behind katana, clean and separated from face, hands, body, and main item Izanami — Yomi Flame Empress; adult female fantasy reinterpretation in a combat-heavy Japanese kami and yokai war court; single-character SSR-style c...

### Character Risk Counts

- By itemRole among flagged records: weapon: 241; accessory_item: 80; ritual_item: 69; daily_item: 58; tool_item: 49; document_item: 31; instrument_item: 19; prop: 5
- By itemFamily among flagged records: sword: 53; spear: 39; other: 35; dagger: 33; tool: 25; katana: 20; cup: 17; fan: 17; large_weapon: 17; staff: 16; hammer: 15; bow: 13; instrument: 13; mirror: 13; shield: 11; flower: 10; scroll: 10; brooch: 9

## Pose Findings

### Top Fix Candidates

- V11X2-CG-03 V11X2-CG-03 - Extreme Low-Angle Reach [score 9] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:192)
  - metadata: uiCategory=camera_driven_glamour, itemActionType=none, requiresItem=false, noItemSafe=true
  - issues: high anatomy/camera difficulty: extreme, low-angle, floor-level, kneeling; face/body occlusion or lens distortion risk: cover the face, foreground hand; prompt/negative text is long (prompt 1423; negative 650)
  - prompt sample: extreme low-angle floor-level view, camera near the ground looking upward, character kneeling above the viewer, torso leaning over the lens, one arm reaching toward the camera with a large foreground hand and elegant spread fingers, hand near lens but not covering the face, ot...
- V11X-CG-03 Extreme Low-Angle Kneeling Reach [score 8] (poselibraryv11_clean.js:150)
  - metadata: uiCategory=camera_driven_glamour, itemActionType=none, requiresItem=false, noItemSafe=true
  - issues: high anatomy/camera difficulty: extreme, worm's-eye, low-angle, floor-level, foreshortening, kneeling, over the camera, reaching toward the lens
  - prompt sample: Camera/framing first: floor-level worm's-eye; thigh_up / full_body. extreme low-angle floor-level camera looking upward, character kneeling with one knee forward, torso leaning over the camera, one arm reaching toward the lens with dramatic foreshortening, other hand resting n...
- V11X2-CG-01 V11X2-CG-01 - Top-Down Spiral Recline [score 7] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:6)
  - metadata: uiCategory=camera_driven_glamour, itemActionType=none, requiresItem=false, noItemSafe=true
  - issues: high anatomy/camera difficulty: bird's-eye, top-down, spiral, s-curve, diagonal; prompt/negative text is long (prompt 1451; negative 650)
  - prompt sample: top-down bird's-eye view, full-body diagonal recline, character lying diagonally across an elegant dark surface, body forming a spiral S-curve, face turned upward toward the viewer with direct eye contact, one arm bent near the head, other arm extended diagonally along the bod...
- SSE-02 Rear Three-Quarter Over-Shoulder Curve [score 6] (pose_packs/post_cleanup_pose_expansion_final_79.js:3606)
  - metadata: uiCategory=sensual_editorial, itemActionType=none, requiresItem=false, noItemSafe=true
  - issues: high anatomy/camera difficulty: low-angle, foreshortening, arched, s-curve; prompt/negative text is long (prompt 616; negative 133)
  - prompt sample: low-angle rear three-quarter camera, character looking back over the shoulder with a confident teasing expression, arched lower back creating a clean waist-to-hip curve, one leg slightly extended with elegant foreshortening, shoulders turned enough to keep the face visible, st...
- SSE-10 Balcony Night Over-Shoulder Arch [score 6] (pose_packs/post_cleanup_pose_expansion_final_79.js:3759)
  - metadata: uiCategory=sensual_editorial, itemActionType=none, requiresItem=false, noItemSafe=true
  - issues: high anatomy/camera difficulty: low-angle, arched, arch, s-curve; prompt/negative text is long (prompt 624; negative 133)
  - prompt sample: slightly low-angle medium-full camera, character standing at a balcony railing facing away, torso twisting sharply to look back over the shoulder at the viewer, one hand resting on the railing, arched back creating a confident elegant silhouette, moonlight rim light tracing th...
- V11X-CG-01 Top-Down Spiral Recline [score 6] (poselibraryv11_clean.js:6)
  - metadata: uiCategory=camera_driven_glamour, itemActionType=none, requiresItem=false, noItemSafe=true
  - issues: high anatomy/camera difficulty: bird's-eye, top-down, twisted, spiral, s-curve, reclining
  - prompt sample: Camera/framing first: true bird's-eye / top-down; full_body / thigh_up. top-down bird's-eye camera view, character reclining diagonally across the frame, body arranged in a graceful spiral S-curve, torso gently twisted, one arm above or beside the head, the other hand near wai...
- V11X-CGV2-09 Low-Angle Palace Floor Lounge Raised-Hand [score 6] (pose_packs/post_cleanup_pose_expansion_final_79.js:3476)
  - metadata: uiCategory=camera_driven_glamour, itemActionType=none, requiresItem=false, noItemSafe=true
  - issues: high anatomy/camera difficulty: low-angle, foreshortening, s-curve, reclining; prompt/negative text is long (prompt 725; negative 0)
  - prompt sample: low-to-mid camera angle near glossy floor level, character reclining in a luxury floor-lounge pose, torso leaning back diagonally toward the viewer, one supporting hand placed on the polished floor beside the hip, one leg extended toward the foreground with elegant foreshorten...
- V11X2-CG-04 V11X2-CG-04 - Worm's-Eye Standing Arch [score 6] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:285)
  - metadata: uiCategory=camera_driven_glamour, itemActionType=none, requiresItem=false, noItemSafe=true
  - issues: high anatomy/camera difficulty: worm's-eye, arched, arch, behind the head; prompt/negative text is long (prompt 1434; negative 650)
  - prompt sample: worm's-eye view from below waist level, character standing tall above the viewer, torso arched slightly backward, fitted waist curved inward, hips shifted to one side, one leg closer to camera creating long-leg perspective, one arm raised above or behind the head, other hand n...
- V11X2-CG-08 V11X2-CG-08 - Dutch-Angle Floating Diagonal [score 6] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:657)
  - metadata: uiCategory=camera_driven_glamour, itemActionType=none, requiresItem=false, noItemSafe=true
  - issues: high anatomy/camera difficulty: twisted, arched, dutch-angle, diagonal; prompt/negative text is long (prompt 1441; negative 650)
  - prompt sample: dutch-angle floating diagonal composition, tilted camera angle, character floating diagonally across the frame, torso slightly arched and twisted, chest partly facing viewer, hips angled opposite shoulders, one leg extended diagonally behind, other leg slightly bent, one arm e...
- V11X2-CG-20 V11X2-CG-20 - Extreme Low-Angle Foreshorten [score 6] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:1773)
  - metadata: uiCategory=camera_driven_glamour, itemActionType=none, requiresItem=false, noItemSafe=true
  - issues: high anatomy/camera difficulty: extreme, low-angle, foreshortening, foreshortened; prompt/negative text is long (prompt 1533; negative 650)
  - prompt sample: extreme low-angle foreshortened composition, camera placed very low near the character's lower body looking sharply upward, one leg or knee closest to the camera creating strong foreshortening, torso rising farther back above the viewer, chest and face clearly visible and not ...
- V11X-CG-04 Worm's-Eye Standing Arch [score 5] (poselibraryv11_clean.js:222)
  - metadata: uiCategory=camera_driven_glamour, itemActionType=none, requiresItem=false, noItemSafe=true
  - issues: high anatomy/camera difficulty: worm's-eye, low-angle, arched, arch, behind the head
  - prompt sample: Camera/framing first: low-angle below waist level; thigh_up / full_body. worm's-eye low-angle camera from below waist level, character standing tall with torso arched upward, arms raised above or curved behind the head, hips shifted to one side, elongated waist and legs.
- V11X2-CG-09 V11X2-CG-09 - Close Foreground Hand Frame [score 5] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:750)
  - metadata: uiCategory=camera_driven_glamour, itemActionType=none, requiresItem=false, noItemSafe=true
  - issues: face/body occlusion or lens distortion risk: cover the face, foreground hand; prompt/negative text is long (prompt 1371; negative 650)
  - prompt sample: close-up foreground hand frame, tight upper-body crop, one hand raised close to the lens framing the face with elegant fingers, fingers placed beside the face without covering eyes or mouth, face sharp behind the hand, direct eye contact, other hand near shoulder or waist, sho...
- CGL-NEW-031 Glamour Sword Slash Half‑Body [score 4] (poselibraryv11_clean.js:12615)
  - metadata: uiCategory=combat, itemActionType=combat_ready, requiresItem=false, noItemSafe=true
  - issues: noItemSafe pose still contains item/weapon gesture terms: weapon, sword
  - prompt sample: Thigh‑up glamour combat pose where the heroine executes a controlled sword slash. The torso rotates moderately to convey motion yet preserves the full bust silhouette and fitted waist. The sword finishes beside the body, not across the chest or face, and the free hand remains ...
- V11X-CG-08 Dutch-Angle Floating Diagonal [score 4] (poselibraryv11_clean.js:510)
  - metadata: uiCategory=camera_driven_glamour, itemActionType=none, requiresItem=false, noItemSafe=true
  - issues: high anatomy/camera difficulty: twisted, s-curve, dutch-angle, diagonal
  - prompt sample: Camera/framing first: tilted dutch angle; full_body. tilted dutch-angle camera, full body arranged diagonally across the frame, one leg extended long across the composition, the other softly bent, torso twisted into a graceful S-curve, elegant motion, non-combat fashion energy.
- V11X-CG-09 Close Foreground Hand Frame [score 3] (poselibraryv11_clean.js:582)
  - metadata: uiCategory=camera_driven_glamour, itemActionType=none, requiresItem=false, noItemSafe=true
  - issues: face/body occlusion or lens distortion risk: foreground hand, near the lens
  - prompt sample: Camera/framing first: close-up foreground perspective; bust / waist_up. close foreground perspective, one hand near the lens creating depth and framing the face without fully covering it, face visible behind the foreground hand, other hand resting near shoulder, collarbone, or...
- CGL-TK-08 Knee-Up Side Step [score 2] (poselibraryv11_clean.js:12479)
  - metadata: uiCategory=combat, itemActionType=combat_ready, requiresItem=false, noItemSafe=true
  - issues: prompt/negative text is long (prompt 887; negative 106)
  - prompt sample: Thigh-up tasteful fantasy glamour pose based on Knee-Up Side Step. Use elegant fantasy action framing with moderate torso rotation and readable stance. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line under the outfit. Hand...
- CO-12 Kneeling Battle Recovery [score 2] (poselibraryv11_clean.js:12201)
  - metadata: uiCategory=combat, itemActionType=combat_ready, requiresItem=false, noItemSafe=true
  - issues: prompt/negative text is long (prompt 893; negative 106)
  - prompt sample: Knee-up tasteful fantasy glamour pose based on Kneeling Battle Recovery. Use elegant fantasy action framing with moderate torso rotation and readable stance. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line under the outfit...
- EXP-CB-23 Weapon Handle Bust Safe [score 2] (poselibraryv11_clean.js:12409)
  - metadata: uiCategory=combat, itemActionType=combat_ready, requiresItem=false, noItemSafe=true
  - issues: prompt/negative text is long (prompt 898; negative 106)
  - prompt sample: Bust portrait tasteful fantasy glamour pose based on Weapon Handle Bust Safe. Use elegant fantasy action framing with moderate torso rotation and readable stance. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line under the o...
- GL-05 Leg-Forward Showcase [score 2] (poselibraryv11_clean.js:12269)
  - metadata: uiCategory=thigh_knee_up, itemActionType=optional, requiresItem=false, noItemSafe=true
  - issues: prompt/negative text is long (prompt 682; negative 106)
  - prompt sample: Full-body tasteful fantasy glamour pose based on Leg-Forward Showcase. Use subtle low-angle three-quarter framing with hip shift and readable upper legs. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line under the outfit. On...
- SI-01 Chair Cross-Legged Noble [score 2] (poselibraryv11_clean.js:12061)
  - metadata: uiCategory=sitting, itemActionType=optional, requiresItem=false, noItemSafe=true
  - issues: prompt/negative text is long (prompt 701; negative 106)
  - prompt sample: Seated full-body tasteful fantasy glamour pose based on Chair Cross-Legged Noble. Use seated queenly composition with torso slightly turned toward the viewer. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line under the outfi...
- SI-08 Ground One-Knee Seat [score 2] (poselibraryv11_clean.js:12131)
  - metadata: uiCategory=sitting, itemActionType=optional, requiresItem=false, noItemSafe=true
  - issues: prompt/negative text is long (prompt 688; negative 106)
  - prompt sample: Knee-up tasteful fantasy glamour pose based on Ground One-Knee Seat. Use seated queenly composition with torso slightly turned toward the viewer. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line under the outfit. Hands rest...
- SSE-01 Glossy Floor Reclined S-Curve [score 2] (pose_packs/post_cleanup_pose_expansion_final_79.js:3555)
  - metadata: uiCategory=sensual_editorial, itemActionType=none, requiresItem=false, noItemSafe=true
  - issues: prompt/negative text is long (prompt 602; negative 133)
  - prompt sample: low ground-level camera near a glossy polished floor, character reclining diagonally in a glamorous fashion-editorial pose, legs bent gracefully, elegant S-curve posture, arched back, soft specular skin highlights, fitted outfit following the body silhouette, calm alluring eye...
- SSE-06 Low-Angle Cross-Leg Lounge Smirk [score 2] (pose_packs/post_cleanup_pose_expansion_final_79.js:3657)
  - metadata: uiCategory=sensual_editorial, itemActionType=none, requiresItem=false, noItemSafe=true
  - issues: prompt/negative text is long (prompt 583; negative 133)
  - prompt sample: low-angle wide-lens fashion shot, character sitting in a relaxed lounge pose with legs crossed and extended slightly toward the camera, torso leaning back with confident posture, one hand near the side of the face or hair, direct eye contact with a confident smirk, long leg pe...
- SSE-08 Luxury Floor Lounge Raised-Hand [score 2] (pose_packs/post_cleanup_pose_expansion_final_79.js:3708)
  - metadata: uiCategory=sensual_editorial, itemActionType=none, requiresItem=false, noItemSafe=true
  - issues: prompt/negative text is long (prompt 719; negative 133)
  - prompt sample: low-to-mid camera near polished floor level, character reclining in a luxury floor-lounge pose, torso leaning back diagonally toward the viewer, one supporting hand placed on the glossy floor beside the hip, one leg extended toward the foreground with elegant foreshortening, t...
- ST-01 Neutral Hero Three-Quarter [score 2] (poselibraryv11_clean.js:11642)
  - metadata: uiCategory=standing, itemActionType=presenting, requiresItem=false, noItemSafe=true
  - issues: prompt/negative text is long (prompt 710; negative 106)
  - prompt sample: Full-body tasteful fantasy glamour pose based on Neutral Hero Three-Quarter. Use three-quarter standing orientation with one hip shifted and shoulders open toward the viewer. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line...
- ST-04 Over-Shoulder Turn [score 2] (poselibraryv11_clean.js:11712)
  - metadata: uiCategory=over_shoulder, itemActionType=optional, requiresItem=false, noItemSafe=true
  - issues: prompt/negative text is long (prompt 702; negative 106)
  - prompt sample: Full-body tasteful fantasy glamour pose based on Over-Shoulder Turn. Use looking back over one shoulder while keeping the face, waist, and body line readable. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line under the outfi...
- ST-05 Walking Forward Entrance [score 2] (poselibraryv11_clean.js:11782)
  - metadata: uiCategory=soft_motion, itemActionType=optional, requiresItem=false, noItemSafe=true
  - issues: prompt/negative text is long (prompt 693; negative 106)
  - prompt sample: Full-body tasteful fantasy glamour pose based on Walking Forward Entrance. Use soft moving pose with flowing hair, dress, cape, or fabric arranged in clean large shapes. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line unde...
- ST-10 Relaxed Lean [score 2] (poselibraryv11_clean.js:11852)
  - metadata: uiCategory=leaning, itemActionType=optional, requiresItem=false, noItemSafe=true
  - issues: prompt/negative text is long (prompt 664; negative 106)
  - prompt sample: Full-body tasteful fantasy glamour pose based on Relaxed Lean. Use elegant leaning pose with torso angled, one hip offset, and balanced support. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line under the outfit. Hands suppo...
- ST-11 Royal Fan Stand [score 2] (poselibraryv11_clean.js:11922)
  - metadata: uiCategory=closeup_bust, itemActionType=optional, requiresItem=false, noItemSafe=true
  - issues: prompt/negative text is long (prompt 700; negative 106)
  - prompt sample: Bust portrait tasteful fantasy glamour pose based on Royal Fan Stand. Use upper-body three-quarter portrait with angled shoulders and clear face. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line under the outfit. Hands fram...
- ST-12 Weapon-at-Side Rest [score 2] (poselibraryv11_clean.js:11991)
  - metadata: uiCategory=combat, itemActionType=combat_ready, requiresItem=false, noItemSafe=true
  - issues: prompt/negative text is long (prompt 890; negative 106)
  - prompt sample: Full-body tasteful fantasy glamour pose based on Weapon-at-Side Rest. Use elegant fantasy action framing with moderate torso rotation and readable stance. Preserve a full bust silhouette, fitted narrow waist, soft curvy hips, and elegant hourglass body line under the outfit. H...
- V11X-CGV2-02 Low-Angle Cross-Leg Peace Sign [score 2] (pose_packs/post_cleanup_pose_expansion_final_79.js:3190)
  - metadata: uiCategory=camera_driven_glamour, itemActionType=none, requiresItem=false, noItemSafe=true
  - issues: prompt/negative text is long (prompt 597; negative 0)
  - prompt sample: low-angle wide-lens fashion shot, character sitting relaxed and leaning back, legs crossed with one leg extended slightly toward the camera for dynamic perspective, one hand showing a V-sign near the face without covering eyes or lips, confident playful smirk, direct eye conta...
- V11X-CGV2-03 Over-Shoulder Prone Daybed Twist [score 2] (pose_packs/post_cleanup_pose_expansion_final_79.js:3229)
  - metadata: uiCategory=camera_driven_glamour, itemActionType=none, requiresItem=false, noItemSafe=true
  - issues: prompt/negative text is long (prompt 632; negative 0)
  - prompt sample: eye-level camera from behind, character lying prone on an elegant chaise lounge or daybed surface, upper body twisting back over one shoulder to look at the viewer, one hand resting near the face without covering it, back and torso forming a graceful clothed curve, dramatic ci...
- V11X-CGV2-10 Glossy Floor Horizontal Recline Perspective [score 2] (pose_packs/post_cleanup_pose_expansion_final_79.js:3516)
  - metadata: uiCategory=camera_driven_glamour, itemActionType=none, requiresItem=false, noItemSafe=true
  - issues: prompt/negative text is long (prompt 724; negative 0)
  - prompt sample: floor-level low camera perspective across a glossy polished floor, character reclining more horizontally with the body weight resting on one hip and one elbow, shoulders slightly reclined, torso angled diagonally across the frame, one leg extended toward the foreground and the...
- V11X2-CG-02 V11X2-CG-02 - High-Angle Kneel Forward [score 2] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:99)
  - metadata: uiCategory=camera_driven_glamour, itemActionType=none, requiresItem=false, noItemSafe=true
  - issues: prompt/negative text is long (prompt 1448; negative 650)
  - prompt sample: high-angle three-quarter view, character kneeling on both knees and leaning forward toward the viewer, one hand placed palm-down on the floor near the lower foreground, other hand raised near the cheek without covering the face, face looking upward to the camera, full-bust sil...
- V11X2-CG-05 V11X2-CG-05 - Rear Three-Quarter Look Back [score 2] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:378)
  - metadata: uiCategory=camera_driven_glamour, itemActionType=none, requiresItem=false, noItemSafe=true
  - issues: prompt/negative text is long (prompt 1404; negative 650)
  - prompt sample: rear three-quarter view from a slightly low angle, character facing away with elegant back and shoulder line visible, hips angled toward viewer, upper body twisting sharply over one shoulder, face turned back toward camera with direct eye contact, one hand near hip or waist, o...

### Pose Risk Counts

- By itemActionType among flagged records: none: 34; optional: 7; combat_ready: 6; presenting: 1
- By UI/category among flagged records: camera_driven_glamour: 29; combat: 6; sensual_editorial: 5; sitting: 2; closeup_bust: 1; leaning: 1; over_shoulder: 1; soft_motion: 1; standing: 1; thigh_knee_up: 1

## Recommended Fix Order

1. Clean characterCore first: move removable item/action terms out of characterCore into personalItem, especially where core text says holding/wielding/weapon/book/cup/staff.
2. Simplify the highest-score personal items: make each item a readable physical object, then keep aura/effects separated from item shape.
3. Add an effect budget: core aura should describe one dominant effect plus one secondary accent; long orbiting/floating multi-object effects should move to optional promptProfile or be shortened.
4. Tighten old active/combat pose metadata: active_attack/aim/block_guard should require a physical item and should not be noItemSafe.
5. Split extreme camera glamour poses into safe and advanced tiers. Keep severe foreshortening/top-down/worm-eye poses available, but do not mix them into generic/random pose pools without anatomy guards.
6. For lens-reaching or foreground-hand poses, add explicit guards that face, torso landmarks, and both hands remain readable; otherwise these are likely to produce oversized hands or broken wrists.

## Prompt-Length / Redundancy Audit

### What Is Causing Long Prompts

- The compact prompt builder already adds style, Character, Identity lock, Figure emphasis, Selected pose, Item mode, Guard, Complexity lock, and Global quality blocks.
- Some newer camera-glamour poses also embed their own camera core, original aura guard, empty-hands rule, no-passive-placement rule, figure emphasis, and readability guard inside `prompt` / `noItemPrompt`.
- Result: the final prompt repeats the same semantic guard in multiple places. Repeating a guard can help once, but after two or three versions it starts competing with the actual pose instruction.
- In the supplied Ukanomitama example, the longest overlap is: pose block says empty hands and aura behind/beside; Item mode says empty hands; Guard says face/body/effects readable; Complexity lock says no added ornaments/effects; Negative repeats weapon/item/effect suppression with character-specific weapon aliases.

### Top Prompt-Bloat Pose Sources

- V11X2-CG-20 V11X2-CG-20 - Extreme Low-Angle Foreshorten [score 27] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:1773)
  - lengths: prompt=1533, noItemPrompt=1582, negativeAdditions=650
  - embedded builder-like blocks: figure emphasis, camera glamour pose core, original aura, both hands are empty, no passive placement
  - repeated phrases: original aura x6; behind or beside x4; waist curve x4; both hands are empty x3; figure emphasis x2; follow the selected camera angle x2
- V11X2-CG-14 V11X2-CG-14 - Worm's-Eye Sitting Sprawl [score 27] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:1215)
  - lengths: prompt=1503, noItemPrompt=1552, negativeAdditions=650
  - embedded builder-like blocks: figure emphasis, camera glamour pose core, original aura, both hands are empty, no passive placement
  - repeated phrases: original aura x6; behind or beside x4; waist curve x4; both hands are empty x3; figure emphasis x2; follow the selected camera angle x2
- V11X2-CG-01 V11X2-CG-01 - Top-Down Spiral Recline [score 27] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:6)
  - lengths: prompt=1451, noItemPrompt=1500, negativeAdditions=650
  - embedded builder-like blocks: figure emphasis, camera glamour pose core, original aura, both hands are empty, no passive placement
  - repeated phrases: original aura x6; behind or beside x4; both hands are empty x3; clean readable silhouette x2; figure emphasis x2; follow the selected camera angle x2
- V11X2-CG-19 V11X2-CG-19 - Side High-Angle Leg Fold [score 27] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:1680)
  - lengths: prompt=1440, noItemPrompt=1489, negativeAdditions=650
  - embedded builder-like blocks: figure emphasis, camera glamour pose core, original aura, both hands are empty, no passive placement
  - repeated phrases: original aura x6; behind or beside x4; waist curve x4; both hands are empty x3; face readable x2; figure emphasis x2
- V11X2-CG-13 V11X2-CG-13 - High-Angle Back Arch [score 27] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:1122)
  - lengths: prompt=1414, noItemPrompt=1463, negativeAdditions=650
  - embedded builder-like blocks: figure emphasis, camera glamour pose core, original aura, both hands are empty, no passive placement
  - repeated phrases: original aura x6; waist curve x6; behind or beside x4; both hands are empty x3; face readable x2; figure emphasis x2
- V11X2-CG-02 V11X2-CG-02 - High-Angle Kneel Forward [score 26] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:99)
  - lengths: prompt=1448, noItemPrompt=1497, negativeAdditions=650
  - embedded builder-like blocks: figure emphasis, camera glamour pose core, original aura, both hands are empty, no passive placement
  - repeated phrases: original aura x6; behind or beside x4; waist curve x4; both hands are empty x3; figure emphasis x2; follow the selected camera angle x2
- V11X2-CG-08 V11X2-CG-08 - Dutch-Angle Floating Diagonal [score 26] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:657)
  - lengths: prompt=1441, noItemPrompt=1490, negativeAdditions=650
  - embedded builder-like blocks: figure emphasis, camera glamour pose core, original aura, both hands are empty, no passive placement
  - repeated phrases: original aura x6; behind or beside x4; waist curve x4; both hands are empty x3; figure emphasis x2; follow the selected camera angle x2
- V11X2-CG-12 V11X2-CG-12 - Low Side Hip Pop [score 26] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:1029)
  - lengths: prompt=1440, noItemPrompt=1489, negativeAdditions=650
  - embedded builder-like blocks: figure emphasis, camera glamour pose core, original aura, both hands are empty, no passive placement
  - repeated phrases: original aura x6; behind or beside x4; waist curve x4; both hands are empty x3; figure emphasis x2; follow the selected camera angle x2
- V11X2-CG-10 V11X2-CG-10 - Low-Angle Step Up [score 26] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:843)
  - lengths: prompt=1436, noItemPrompt=1485, negativeAdditions=650
  - embedded builder-like blocks: figure emphasis, camera glamour pose core, original aura, both hands are empty, no passive placement
  - repeated phrases: original aura x6; behind or beside x4; both hands are empty x3; figure emphasis x2; follow the selected camera angle x2; fully clothed x2
- V11X2-CG-04 V11X2-CG-04 - Worm's-Eye Standing Arch [score 26] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:285)
  - lengths: prompt=1434, noItemPrompt=1483, negativeAdditions=650
  - embedded builder-like blocks: figure emphasis, camera glamour pose core, original aura, both hands are empty, no passive placement
  - repeated phrases: original aura x6; behind or beside x4; waist curve x4; both hands are empty x3; figure emphasis x2; follow the selected camera angle x2
- V11X2-CG-17 V11X2-CG-17 - Tight Body Crop Twist [score 26] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:1494)
  - lengths: prompt=1433, noItemPrompt=1482, negativeAdditions=650
  - embedded builder-like blocks: figure emphasis, camera glamour pose core, original aura, both hands are empty, no passive placement
  - repeated phrases: original aura x6; behind or beside x4; waist curve x4; both hands are empty x3; figure emphasis x2; follow the selected camera angle x2
- V11X2-CG-03 V11X2-CG-03 - Extreme Low-Angle Reach [score 26] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:192)
  - lengths: prompt=1423, noItemPrompt=1472, negativeAdditions=650
  - embedded builder-like blocks: figure emphasis, camera glamour pose core, original aura, both hands are empty, no passive placement
  - repeated phrases: original aura x6; behind or beside x4; waist curve x4; both hands are empty x3; figure emphasis x2; follow the selected camera angle x2
- V11X2-CG-07 V11X2-CG-07 - Seated Edge High-Angle Twist [score 26] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:564)
  - lengths: prompt=1413, noItemPrompt=1462, negativeAdditions=650
  - embedded builder-like blocks: figure emphasis, camera glamour pose core, original aura, both hands are empty, no passive placement
  - repeated phrases: original aura x6; behind or beside x4; hand placement x4; both hands are empty x3; figure emphasis x2; follow the selected camera angle x2
- V11X2-CG-05 V11X2-CG-05 - Rear Three-Quarter Look Back [score 26] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:378)
  - lengths: prompt=1404, noItemPrompt=1453, negativeAdditions=650
  - embedded builder-like blocks: figure emphasis, camera glamour pose core, original aura, both hands are empty, no passive placement
  - repeated phrases: original aura x6; behind or beside x4; both hands are empty x3; figure emphasis x2; follow the selected camera angle x2; fully clothed x2
- V11X2-CG-11 V11X2-CG-11 - Overhead Curled Side Lie [score 26] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:936)
  - lengths: prompt=1397, noItemPrompt=1446, negativeAdditions=650
  - embedded builder-like blocks: figure emphasis, camera glamour pose core, original aura, both hands are empty, no passive placement
  - repeated phrases: original aura x6; behind or beside x4; both hands are empty x3; figure emphasis x2; follow the selected camera angle x2; fully clothed x2
- V11X2-CG-15 V11X2-CG-15 - Rear Low-Angle Overlook [score 26] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:1308)
  - lengths: prompt=1397, noItemPrompt=1446, negativeAdditions=650
  - embedded builder-like blocks: figure emphasis, camera glamour pose core, original aura, both hands are empty, no passive placement
  - repeated phrases: original aura x6; behind or beside x4; both hands are empty x3; figure emphasis x2; follow the selected camera angle x2; fully clothed x2
- V11X2-CG-16 V11X2-CG-16 - Close-Up Face & Shoulders [score 26] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:1401)
  - lengths: prompt=1388, noItemPrompt=1437, negativeAdditions=650
  - embedded builder-like blocks: figure emphasis, camera glamour pose core, original aura, both hands are empty, no passive placement
  - repeated phrases: original aura x6; both hands are empty x3; behind or beside x2; figure emphasis x2; follow the selected camera angle x2; fully clothed x2
- V11X2-CG-18 V11X2-CG-18 - Top-Down Leg Extend [score 26] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:1587)
  - lengths: prompt=1388, noItemPrompt=1437, negativeAdditions=650
  - embedded builder-like blocks: figure emphasis, camera glamour pose core, original aura, both hands are empty, no passive placement
  - repeated phrases: original aura x6; behind or beside x4; both hands are empty x3; figure emphasis x2; follow the selected camera angle x2; fully clothed x2
- V11X2-CG-06 V11X2-CG-06 - Side-Lying Editorial Curve [score 26] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:471)
  - lengths: prompt=1385, noItemPrompt=1434, negativeAdditions=650
  - embedded builder-like blocks: figure emphasis, camera glamour pose core, original aura, both hands are empty, no passive placement
  - repeated phrases: original aura x6; behind or beside x4; both hands are empty x3; figure emphasis x2; follow the selected camera angle x2; fully clothed x2
- V11X2-CG-09 V11X2-CG-09 - Close Foreground Hand Frame [score 26] (pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js:750)
  - lengths: prompt=1371, noItemPrompt=1420, negativeAdditions=650
  - embedded builder-like blocks: figure emphasis, camera glamour pose core, original aura, both hands are empty, no passive placement
  - repeated phrases: original aura x6; both hands are empty x3; behind or beside x2; figure emphasis x2; follow the selected camera angle x2; fully clothed x2
- EXP-CB-23 Weapon Handle Bust Safe [score 7] (poselibraryv11_clean.js:12409)
  - lengths: prompt=898, noItemPrompt=374, negativeAdditions=106
  - repeated phrases: waist curve x3; fully clothed x2
- CO-12 Kneeling Battle Recovery [score 7] (poselibraryv11_clean.js:12201)
  - lengths: prompt=893, noItemPrompt=368, negativeAdditions=106
  - repeated phrases: waist curve x3; fully clothed x2
- ST-12 Weapon-at-Side Rest [score 7] (poselibraryv11_clean.js:11991)
  - lengths: prompt=890, noItemPrompt=370, negativeAdditions=106
  - repeated phrases: waist curve x3; fully clothed x2
- VI-07 Weapon Drag [score 7] (poselibraryv11_clean.js:12338)
  - lengths: prompt=889, noItemPrompt=377, negativeAdditions=106
  - repeated phrases: waist curve x3; fully clothed x2
- CGL-TK-08 Knee-Up Side Step [score 7] (poselibraryv11_clean.js:12479)
  - lengths: prompt=887, noItemPrompt=369, negativeAdditions=106
  - repeated phrases: waist curve x3; fully clothed x2

### System-Level Recommendations

1. Make pose data atomic. A pose should describe only camera, body staging, hand/leg placement, expression, and one short local safety note. Move generic lines like `Figure emphasis`, `Original aura stays behind`, `Both hands are empty`, and `No passive placement` out of pose records.
2. Add a prompt block budget in `buildCompactPrompts`: style <= 1 block, character <= 1 block, identity <= 1 block, figure <= 1 block, pose <= 2-3 sentences, item <= 1 block, guard <= 1 block, complexity/global <= 1 combined block.
3. Normalize guard taxonomy before joining text: merge repeated concepts into buckets such as anatomy, identity, item, aura/effects, no-escalation, and negative item aliases. Emit only one sentence per bucket.
4. Split negative prompts into core negative + context negative + item-alias negative. Deduplicate by normalized token/phrase, and cap character-specific item aliases to the selected character's active/no-item risk instead of listing many unrelated weapon families every time.
5. Treat camera-glamour poses as `advanced_pose` tier. For random/default use, select a shorter safe variant; for explicit user-selected advanced pose, allow the full camera instruction but still remove duplicated global guards.
6. Add a smoke test for generated prompt length and repeated guard phrases. Target positive prompt under roughly 1,600-2,000 characters for compact mode, and fail if a key guard phrase appears more than once.

### Supplied Pose Text Comparison

- Current generated version: more defensive and system-heavy. It contains the pose, then repeats pose accuracy, identity preservation, item mode, guard, complexity lock, global quality, and a large negative list. It is safer for preventing items/effects from appearing, but it dilutes the acting direction.
- Revised user-written version: more pose-intent-heavy. It clarifies attitude and weight: `sits heavily`, `not polite or ceremonial`, `wider asymmetrical spread`, `relaxed shoulders`, `hips settled`, `confident, slightly dangerous, and challenging`. This is better for the actual image result because it describes physical weight, mood, and asymmetry instead of mostly restrictions.
- Best hybrid: keep the revised pose as the pose sentence, then add only one short guard: `hands empty, face/waist/hands readable, aura behind body, fully clothed`. Put the rest in a deduped negative system block.

## Camera-Driven Glamour Gender Audit

### Runtime Result

- Active characters scanned through the runtime: 685.
- Runtime gender split from `inferGender()`: female 655, male 30.
- Active camera-driven glamour poses: 69.
- Camera-driven glamour poses with explicit `genderFit` / `targetGender` metadata: 0.
- Male characters in no-item mode that can see camera-driven glamour poses: 30/30.
- Typical male no-item result: 68 camera-driven glamour poses visible out of 122 compatible poses.
- Female no-item result sample: 69 camera-driven glamour poses visible out of 138 compatible poses.
- With-item mode mostly hides camera poses for weapon/item users, but male no-item mode exposes them because the no-item showcase shortcut treats the whole `camera_driven_glamour` category as safe.

### Why Male Characters Can Use Them

- `NO_ITEM_SHOWCASE_CATEGORIES` includes `camera_driven_glamour`, so no-item mode gives the category broad visibility.
- `poseGenderFit()` only blocks male characters when a pose has `genderFit`/`targetGender`, or when fallback text checks find female-coded signals.
- The 69 camera poses have no explicit gender metadata.
- Most camera pose titles/subcategories use neutral wording like `Top-Down Spiral Recline`, `High-Angle Kneeling Floor-Hand`, or `Worm's-Eye Sitting Sprawl`; the male fallback filter does not scan the full prompt deeply enough to catch phrases like `prominent full bust`, `curvy hips`, `feminine fantasy proportions`, or `SSR pin-up energy`.
- The V11X/V11X2 camera packs are also not marked as collection poses by `isCollectionPose()`, so the stricter male collection gate does not run.

### Recommended Fix

1. Add explicit metadata to camera-glamour pose records:
   - `genderFit: { female: "recommended", male: "hidden", other: "optional", unknown: "optional" }`
   - or `targetGenders: ["female"]` for the poses that are truly female-only.
2. In `poseGenderFit()`, add a direct rule before the collection fallback:
   - if `gender === "male"` and `poseUiCategory(p) === "camera_driven_glamour"`, hide unless the pose explicitly opts in with `male: "allow"` or `male: "optional"`.
3. If male camera poses are desired later, split them into a separate category/subcategory such as `camera_driven_male_editorial` with male-safe body language: heroic low-angle stance, shoulder-led portrait, seated command pose, coat/armor silhouette, no `full bust/hourglass/curvy hips` figure text.
4. Add a smoke test: choose a known male character in no-item mode and assert `compatiblePosesFor(male).filter(camera_driven_glamour).length === 0`, unless testing the future male-editorial opt-in category.

## V12 Prompt Generator Proposal Review

### What To Keep

- The profile idea is correct: `V12_CAMERA_GLAMOUR_PROMPT_PROFILE` should own style, figure, identity, no-item, camera guard, complexity, and negative blocks. This avoids every camera pose re-declaring the same guard language.
- The new pose object shape is much better than the current V11X2 records because it keeps the actual pose intent in `promptSnippet` and moves repeated system behavior out of the pose.
- The revised sprawl wording is stronger than the current generated prompt because it gives physical acting direction: weight, asymmetry, settled hips, relaxed shoulders, gaze, attitude, and a non-ceremonial intent.
- The metadata fields `poseFamily`, `glamourIntensity`, and `anatomyRisk` are useful. They can drive UI badges, random-pool safety, and stricter anatomy guards without bloating the final prompt.

### What To Change Before Implementation

- Add gender metadata directly to the profile and pose:
  - `targetGenders: ["female"]`
  - `genderFit: { female: "recommended", male: "hidden", other: "optional", unknown: "optional" }`
  This fixes the current bug where all 30 male characters can see camera glamour poses in no-item mode.
- Keep `negativeBlock` and `negativeAdditions` as arrays until final assembly. Joining them early into strings makes dedupe weaker and makes it harder to remove repeated terms like `weapon`, `item in hand`, `wrong camera angle`, or anatomy terms.
- Do not let `curvyFigureBlock` default to the full curvy profile for every character. Use it only when `inferGender(character) === "female"` and the pose/profile explicitly targets female glamour. Otherwise fall back to a neutral figure block or hide the pose.
- Merge `figureBlock` and `cameraGlamourGuardBlock` slightly. They both say chest/waist/hip/hands/face readable. Emit one figure sentence plus one guard sentence instead of two overlapping long lists.
- Keep `identityLockBlock` shorter in compact mode. The current profile version is good semantically, but the compact generator can say: `Identity lock: same face, hair, outfit/armor, body silhouette, aura language, and species traits; new pose only, not redesign.`
- Keep `withItemModeBehavior` in metadata, but enforce it through `compatiblePosesFor()` / `poseGenderFit()` rather than relying on prompt text.

### Recommended Integration Shape

- Add a profile registry, for example `PROMPT_PROFILE_REGISTRY.v12_camera_glamour_curvy_model`.
- Add `promptProfileId: "v12_camera_glamour_curvy_model"` to the camera glamour pose pack.
- In `buildCompactPrompts()`, branch only when `poseUiCategory(p) === "camera_driven_glamour"` and the pose has that profile ID.
- Generate the pose block from `pose.promptSnippet` only. Do not also include old pose text that already contains `Camera glamour pose core`, `Original aura`, `Both hands are empty`, or `Figure emphasis`.
- Add a `dedupePromptTerms()` / `dedupeNegativeTerms()` pass after profile + pose assembly.
- Add tests for:
  - camera glamour hidden for male characters by default;
  - camera glamour positive prompt under roughly 1,600-2,000 characters;
  - `both hands empty`, `aura behind`, `figure emphasis`, and `cover the face/chest/waist` emitted no more than once;
  - Ukanomitama no-item output contains no naginata/katana/bow/item-in-hand aliases.

### Best Short Hybrid For The Example Pose

Use this as the selected-pose payload, then let the profile provide the rest:

`Selected pose: very low-angle dominant relaxed sprawl, full-body seated pose, camera near floor level looking up. The character sits heavily and confidently on an elegant platform, not polite or ceremonial; one knee close to the camera with strong foreshortening, the other leg angled outward in a wider asymmetrical spread; torso leans back naturally with relaxed shoulders, hips settled into the seat, one hand braced beside or slightly behind the hip, the other hand empty and relaxed; chin slightly lowered, eyes looking down toward the viewer, expression confident, slightly dangerous, and challenging. Fully clothed, elegant, powerful, tasteful, fashion-editorial SSR glamour.`

This keeps the secretary proposal's best part: attitude and body staging. The system should provide identity, item/no-item, guard, and negative behavior once, not inside every pose.

## Audit Heuristics Used

- Character risks were detected from effect-term density, aura/extra length, identityLock effect binding, core item/action leakage, item physical readability, role/family contradictions, and item names that hard-code hand placement.
- Pose risks were detected from camera/anatomy difficulty terms, occlusion terms, active action metadata contradictions, no-item-safe prompts with item/weapon gestures, broad non-weapon compatibility on active poses, and very long prompt text.
- Scores are triage weights, not pass/fail judgments. High-score rows are where human cleanup will likely have the biggest impact.
