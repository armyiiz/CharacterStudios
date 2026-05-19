# Character Data Schema

Use this as the stable reference when adding new pantheon or expansion character files.

## File Pattern

Character data files live in:

```txt
data/characters/
```

Each file should expose one clear array variable:

```js
const somePantheonCharacters = [
  { /* character object */ }
];

if (typeof window !== "undefined") {
  window.somePantheonCharacters = somePantheonCharacters;
}

if (typeof module !== "undefined") {
  module.exports = { somePantheonCharacters };
}
```

Then load the file in `index.html` before:

```txt
data/characters/index.js
```

And combine it in `data/characters/index.js`.

## Required Character Fields

These fields should exist for every new character unless the user explicitly provides a different schema.

```txt
id
name
title
displayName
gender
factionId
factionName
faction
mythology
sourceType
conversionType
subgroup
powerDomain
tags
presentationMode
characterCore
personalItem
promptProfile
```

## Field Notes

| Field | Expected Shape | Notes |
| --- | --- | --- |
| `id` | string or number | Must be unique across `charactersReworkedFinalV3`. Do not change existing IDs. |
| `name` | string | Canonical display/search name. |
| `title` | string | Short epithet or role title. |
| `displayName` | string | Usually `Name — Title`. |
| `gender` | string | Existing values include `female`, `male`, `other`, `unknown`. |
| `factionId` | number | Must match the faction used by the UI filters. |
| `factionName` | string | English faction/pantheon name. |
| `faction` | string | Localized faction label used for display/search. |
| `mythology` | string | Example: `Greco-Roman`, `Norse`, `Egyptian`, `Japanese`. |
| `sourceType` | string | Example: `deity_or_mythic_figure`, `hero`, `monster`, `spirit`. |
| `conversionType` | string | Describes adaptation type, if applicable. |
| `subgroup` | string | Internal pantheon group, council, clan, domain group, etc. |
| `powerDomain` | string[] | Domain keywords such as `storm`, `law`, `death`, `moon`. |
| `tags` | string[] | Search/filter/prompt-risk tags. Keep simple and consistent. |
| `presentationMode` | string | Existing examples include `regal`, `royal`, `glamour`, `combat`, `ritual`. |
| `characterCore` | object | Identity-only visual/personality core. Do not put removable held-item instructions here. |
| `personalItem` | object | Toggleable item/weapon/prop data. |
| `promptProfile` | object | Pose/framing recommendation hints. |

## `characterCore`

`characterCore` is for stable identity traits that should remain in both with-item and no-item modes.

Recommended keys:

```txt
face
hair
outfit
body
aura
extra
identityLock
```

Rules:

- Keep hairstyle, outfit, face, body silhouette, aura, species traits, and iconic non-removable identity here.
- Do not put instructions like `holding`, `carrying`, `wielding`, or `presenting` here.
- If an item is removable/toggleable, it belongs in `personalItem`, not `characterCore`.
- `identityLock` should repeat only the traits that must not drift when item mode changes.

## `personalItem`

`personalItem` is for the character's removable or toggleable item.

Recommended keys:

```txt
name
itemRole
itemFamily
description
withItemPrompt
noItemRemove
itemGuard
```

Rules:

- The item should be a readable physical object unless the user explicitly asks otherwise.
- Keep wording precise and silhouette-safe.
- `withItemPrompt` should describe where/how the item appears without blocking face, chest silhouette, waist, or body outline.
- `noItemRemove` should list terms removed in no-item mode.
- `itemGuard` should protect readability and prevent merging with body, effects, or clothing.

Common `itemRole` examples:

```txt
none
weapon
ritual_item
accessory_item
tool_item
document_item
instrument_item
daily_item
prop
```

Common `itemFamily` examples:

```txt
none
sword
katana
tachi
dagger
large_weapon
spear
bow
gun
rifle
staff
book
document
cup
instrument
tool
accessory
shield
other
```

If unsure, use the closest existing enum from current character files and flag uncertainty in the integration report. Do not invent broad new enums casually.

## V11.1.7 Weapon-Family Pose Compatibility

Prompt generation now resolves weapon placement from `personalItem.itemFamily`, item name/description, and pose metadata instead of relying on a single generic weapon-rest sentence.

Supported pose metadata includes:

```txt
compatibleWeaponFamilies
avoidWeaponFamilies
weaponHandPlacement
explicitItemHold
weaponPresentation
holdStyle
restStyle
familySpecificItemPrompts
```

Use these fields for passive weapon hold/rest/carry poses. Katana-like weapons (`katana`, `tachi`, `nodachi`, `odachi`, `wakizashi`, and item names such as moonblade or crescent katana) should use sheathed-hip, low-side-hold, ready-guard, draw, or slash metadata. Do not send katana/tachi weapons to generic grounded or greatsword-style rest poses.

Weapon-family pose packs should keep non-weapon roles out of `compatibleItemRoles`; instrument, document, daily, accessory, ritual, and tool items must not become active weapon poses unless the character item is explicitly marked `itemRole: "weapon"`.

## V11.1.3 ItemRole And Pose Compatibility

Use these normalized `itemRole` categories for new or corrected character metadata:

```txt
weapon
ritual_item
document_item
daily_item
accessory_item
instrument_item
tool_item
prop
none
```

`combatAttackAllowed` is derived by runtime unless a future schema explicitly adds it. `weapon` derives `true`; `ritual_item` and `tool_item` derive `false` by default and should only be treated as limited with explicit compatible metadata; `instrument_item`, `document_item`, `daily_item`, `accessory_item`, `prop`, and `none` derive `false`.

Non-weapon items must not be used for active attack, slash, thrust, weapon swing, aiming, or block/guard poses. `combat_ready` pose metadata is treated as `battle_presence`, which means heroic or ceremonial readiness without striking with the item.

Recommended promptProfile hints:

```txt
weapon: combat, active_attack, battle_presence
ritual_item: ritual, ceremonial, mystic, battle_presence
document_item: reading, writing, scholarly, presenting
daily_item: lifestyle, serving, glamour, royal
accessory_item: glamour, royal, showcase, portrait
instrument_item: performer, play_instrument, ceremonial herald
tool_item: professional, tool-use, lifestyle
prop: present_item, glamour, symbolic showcase
none: portrait, standing, glamour, no-item safe
```

## `promptProfile`

Recommended keys:

```txt
preferredFraming
preferredPoseCategories
avoidPoseCategories
figurePreset
```

Common framing values:

```txt
bust
waist_up
thigh_up
knee_up
full_body
```

Common pose category hints:

```txt
glamour_showcase
portrait
standing
ceremonial
combat
ritual
book_reading
instrument
```

Common `figurePreset` values:

```txt
glamour_voluptuous
balanced_feminine
masculine_hero
neutral
```

## Integration Requirements

When adding a new pantheon or batch:

1. Do not modify existing character content.
2. Keep the new batch in its own file.
3. Add the new script before `data/characters/index.js`.
4. Add the new array to `charactersReworkedFinalV3` in `data/characters/index.js`.
5. Keep `charactersReworkedFinalV2` as an alias to V3.
6. Validate count, duplicate IDs, and requested ID ranges.
7. Browser-test selecting old and new characters through Step 2.

## Same Character Complexity Lock

Same-character iterations must preserve the existing character identity and the same visual complexity level. Pose, framing, and camera changes are not redesign requests.

When regenerating the same character, do not escalate ornament density, costume complexity, armor layering, spikes, roots, particles, background structures, or micro-detail noise unless the user explicitly asks for a redesign. Keep details broad, grouped, clean, and readable so the silhouette stays simple and clear across repeated generations.

## Pose Expansion Rules

New pose packs should append poses to the active pose library without changing existing pose IDs. Use string IDs with a patch-specific prefix, such as `V114-WA-01` for weapon action poses and `V114-LI-01` for lifestyle interaction poses.

V11.1.5 uses `V115-WA-01` to `V115-WA-24` for advanced weapon-only active attack poses. These poses live in:

```txt
pose_packs/v11_1_5_advanced_weapon_action_pose_pack.js
```

Weapon active attack poses should use:

```txt
requiresItem: true
noItemSafe: false
itemActionType: active_attack
compatibleItemRoles: weapon only
avoidItemRoles: instrument_item, document_item, daily_item, accessory_item, ritual_item, tool_item, prop, none
```

Lifestyle interaction poses should use:

```txt
requiresItem: true
noItemSafe: false
itemActionType: hold_item, present_item, serve_carry, read_write, play_instrument, glamour_showcase, or tool_use
compatibleItemRoles: non-weapon item roles
avoidItemRoles: weapon
```

Keep `titleTH` and `descriptionTH` filled for UI display. New prompts must keep the face, hands, item silhouette, chest silhouette, waist, and body outline readable.

## Minimal Example

```js
{
  "id": "2302",
  "name": "Example",
  "title": "Keeper of the Placeholder",
  "displayName": "Example — Keeper of the Placeholder",
  "gender": "female",
  "factionId": 23,
  "factionName": "Example Pantheon",
  "faction": "Example Pantheon",
  "mythology": "Example",
  "sourceType": "deity_or_mythic_figure",
  "conversionType": "female_fantasy_reinterpretation",
  "subgroup": "Example Council",
  "powerDomain": ["light", "memory"],
  "tags": ["female", "glamour", "aura_effect"],
  "presentationMode": "regal",
  "characterCore": {
    "face": "stable face description",
    "hair": "stable hair description",
    "outfit": "stable outfit description",
    "body": "stable body silhouette description",
    "aura": "stable aura description separated from face and body",
    "extra": "short identity summary",
    "identityLock": [
      "stable hair description",
      "stable outfit description",
      "stable aura description separated from face and body"
    ]
  },
  "personalItem": {
    "name": "a physically solid example item",
    "itemRole": "accessory_item",
    "itemFamily": "accessory",
    "description": "a readable physical object with a clear silhouette",
    "withItemPrompt": "holding the item near shoulder or waist level, not covering the face, chest silhouette, waist, or body outline",
    "noItemRemove": ["holding", "carrying", "presenting", "item"],
    "itemGuard": "Keep the item readable, physical, and separate from face, body, clothing, and effects."
  },
  "promptProfile": {
    "preferredFraming": ["waist_up", "thigh_up", "full_body"],
    "preferredPoseCategories": ["glamour_showcase", "standing", "ceremonial"],
    "avoidPoseCategories": ["instrument", "book_reading"],
    "figurePreset": "glamour_voluptuous"
  }
}
```
