# Chronicles --- Current State

**Baseline:** Chronicles 20.45\
**Purpose:** This document records what the current build actually
contains and what has been deliberately established. It is the working
compass for future development.

> **Important:** This is a state document, not a wish list. If a feature
> is listed under "Working", it should be treated as part of Chronicles
> and protected from accidental regression.

## 1. What Chronicles Is

Chronicles is a text-driven fantasy adventure built around:

-   Adventure
-   Mystery
-   Choice
-   Friendship
-   Legacy

The player creates a character and explores a narrated world through
player-facing choices.

The **Storyteller** provides the main narrative voice.

**Pip** is the player's woodland chronicler and companion. Pip can
comment, remember, converse, record events, and assist with dice rolls,
but Pip does **not** replace the Storyteller as narrator.

# 2. Working Game Structure

## Title / Front End

Currently working:

-   Chronicles title screen
-   Begin button
-   Main menu
-   New Game
-   Character Sheet
-   Continue placeholder
-   Options placeholder
-   Opening transition
-   Pip introduction
-   Begin Adventure flow

The project remains deliberately simple and SPCK-friendly, using
ordinary script tags and global functions.

## Character Creation

Currently working:

-   Character name
-   Title / Alias
-   Race / Origin
-   Background
-   Six attributes
-   Attribute range of 8--18
-   Character creation
-   Initial Vitality
-   Initial derived values

### Attributes

  Attribute   Meaning
  ----------- -------------------------------------------
  Might       Physical power and raw strength
  Agility     Speed, balance and reflexes
  Endurance   Stamina, health and resilience
  Reason      Logic, knowledge and problem solving
  Awareness   Insight, perception and intuition
  Presence    Force of personality, charm and influence

### Attribute Modifier

`floor((Attribute - 10) / 2)`

# 3. Character Statistics

## Vitality

Locked formula:

`Maximum Vitality = 8 + (Endurance Modifier × 2)`

Current Vitality is tracked separately and is reduced by combat damage.

## Initiative

Locked formula:

`Initiative = Agility Modifier`

No additional attribute is added.

## Guard

Guard represents how difficult the character is to hit.

Current code calculates the character's base Guard using:

`10 + Agility Modifier + Armour Protection`

Shield defensive bonuses are applied separately during player defence
resolution.

**Design decision:** Armour and shields do not use Familiarity or
Proficiency. Their defensive values are inherent properties of the
individual items.

# 4. Equipment

Chronicles currently has a functioning equipment and inventory system.

Working:

-   Inventory
-   Silver
-   Buying equipment
-   Equipping equipment
-   Unequipping equipment
-   Equipment slots
-   Weapon slot
-   Offhand slot
-   Armour slots
-   Jewellery slots
-   Equipment inspection
-   Equipment restrictions during combat
-   Selling equipment in supported shops

### Equipment slots

-   Head
-   Body
-   Arms / Hands
-   Legs
-   Jewellery 1
-   Jewellery 2
-   Weapon
-   Offhand

# 5. Weapons

Current weapon definitions include:

-   Simple Dagger
-   Spear
-   Hand Axe
-   Short Sword
-   Long Sword
-   Fine Cutlass

Current weapon groups:

-   Blades
-   Polearms
-   Axes

Current one/two-handed weapons include:

-   Spear
-   Long Sword

Their existing damage behaviour must be preserved.

### Current weapon attributes

  Weapon          Attack Attribute
  --------------- ------------------
  Simple Dagger   Agility
  Short Sword     Might
  Spear           Might
  Hand Axe        Might
  Long Sword      Might
  Fine Cutlass    Agility

The Fine Cutlass is intentionally Agility-based because it is a
finesse/precision weapon.

# 6. Armour and Shields

Armour currently uses hard-coded protection values.

Current armour examples include:

-   Padded Cap
-   Padded Cuirass
-   Padded Bracers
-   Padded Greaves

Current shields include:

-   Round Shield
-   Tall Shield

The Tall Shield currently provides:

-   Defence Bonus: +3
-   Attack Modifier: -2

### Locked design direction

Armour and shields do **not** gain Familiarity or Proficiency.

Future heavier armour may have hard-coded Agility/Attack penalties.

Those penalties affect the **ability to hit**, not weapon damage.

# 7. Jewellery

Jewellery is part of the equipment structure.

The current Greyhaven content includes the **Ring of Slight Edge**,
which is discovered and appraised through Sella.

Once identified and worn, it provides:

`+1 Attack while worn`

Equipment modifiers stack.

Example:

-   Tall Shield: -2 Attack
-   Ring of Slight Edge: +1 Attack
-   Combined effect: -1 Attack

This is deliberate.

# 8. Weapon Familiarity

Weapon Familiarity is a persistent progression system.

All characters begin with:

`0 Familiarity`

Therefore every character begins **Untrained**.

Familiarity is gained through actual weapon use.

It does not reset between encounters.

### Familiarity groups

  Group      Weapons
  ---------- ------------------------------------------------------
  Blades     Simple Dagger, Short Sword, Long Sword, Fine Cutlass
  Polearms   Spear
  Axes       Hand Axe

The Familiarity Group remains attached to a weapon as it moves through:

`Definition → Inventory → Equipped → Unequipped → Inventory`

## Familiarity Gain

-   Normal successful attack: +1
-   Critical hit: +2
-   Miss: +0

Familiarity is awarded when an attack reaches damage resolution.

## Encounter Limit

A maximum of **+3 Familiarity per weapon group per encounter** can be
gained.

The encounter limit resets when a new encounter begins.

Accumulated Familiarity does not reset.

## Maximum

Maximum Familiarity is:

`100`

## Familiarity Progression

    Familiarity Stage         Attack Bonus
  ------------- ----------- --------------
          0--10 Untrained               +0
         11--25 Familiar                +1
         26--45 Trained                 +2
         46--70 Skilled                 +3
        71--100 Expert                  +4

The bonus is calculated automatically from the current Familiarity.

# 9. Combat

Combat is functioning.

Current working combat flow includes:

1.  Combat begins
2.  Weapon is taken from equipped equipment
3.  Combat Familiarity tracking resets
4.  Initiative is rolled
5.  Turn order is established
6.  Player and enemy turns alternate
7.  Player can attack
8.  Player can defend
9.  Player can open combat inventory
10. Player can flee
11. Enemy can attack
12. Enemy can flee
13. Attack defence is resolved
14. Damage is rolled
15. Victory and defeat states are handled

### Combat outcomes

Currently supported:

-   Normal hit
-   Miss
-   Critical hit
-   Critical failure
-   Tied attack/defence result producing half damage
-   Damage resolution
-   Enemy defeat
-   Enemy escape
-   Player defeat

Pip has combat reactions for appropriate events.

# 10. Dice System

The existing Chronicles dice engine is working and should be reused
rather than replaced.

Supported dice include:

-   d4
-   d6
-   d8
-   d10
-   d12
-   d20

The engine supports standard expressions such as `1d20` and `2d6`.

The Pip dice presentation provides:

-   Narrative roll message
-   Dice description
-   Individual dice results
-   Modifier when applicable
-   Total

This existing engine is the foundation for Action Checks.

# 11. Action Checks

A working Action Check foundation now exists.

## Core mechanic

An Action Check uses:

`d20 + Attribute Modifier`

against a hidden Difficulty.

The Difficulty is never shown to the player.

## Hidden Difficulty

The game determines:

`Contextual Base Difficulty + Hidden Variation`

The hidden variation is:

`-2 to +2`

Therefore the same contextual situation can have a slightly different
actual Difficulty on different attempts.

The player does not know the exact target number.

This prevents the player from learning a fixed target through repeated
attempts.

## Current Action Check result

The Action Check system currently records:

-   Action
-   Attribute
-   Roll
-   Modifier
-   Total
-   Success / Failure
-   Critical
-   Fumble

The hidden Difficulty is intentionally not included in the player-facing
result.

# 12. Player Choices and Narrative

This is an important part of Chronicles and must be preserved.

The player is presented with **narrative choices**.

The player does not choose:

> "Make an Awareness Check."

The player chooses what they want to do.

Example:

> Investigate the Disturbed Feathers

or:

> Investigate the Washed-Up Debris

The game can eventually determine whether a selected choice requires an
Action Check and, if so, which attribute and contextual Difficulty
apply.

### Important design rule

**Not every choice needs a roll.**

Some choices simply produce narrative consequences.

Action Checks should be used when the outcome of the attempted action is
uncertain or mechanically meaningful.

# 13. Storyteller vs Pip

This distinction is locked.

### Storyteller

The Storyteller:

-   Narrates the world
-   Describes scenes
-   Presents consequences
-   Delivers the main story
-   Narrates Action Check outcomes

### Pip

Pip:

-   Travels with the player
-   Comments on events
-   Remembers things
-   Records important moments
-   Searches the Great Library
-   Reacts during combat
-   Can converse with the player
-   Provides dice-roll presentation

Pip should not become the narrator of the game.

# 14. Pip Systems

Currently present:

-   Pip dialogue
-   Pip social interactions
-   Pip memory
-   Long-term memory
-   Chronicle/journal
-   Pip knowledge
-   Great Library interaction
-   Location/feature observations
-   Combat reactions
-   Pip intro sequence

Pip is intended to feel like a companion and character, not an interface
assistant.

# 15. Great Library

The Great Library system is present and functioning as a lore/content
system.

Current structure includes categories for:

-   Creatures
-   People
-   Places
-   Factions
-   History
-   Items
-   Legends
-   Miscellaneous
-   Plants
-   Religions
-   Songs

Current lore files include material for:

-   Dragons
-   Squirrels
-   Pirates
-   Greyhaven

The library is deliberately kept as content/data separate from the main
JavaScript systems.

# 16. Greyhaven

Greyhaven is the current major playable setting.

The current build contains substantial interactive content for:

-   Arrival
-   Greyhaven exploration
-   Old Harbour
-   Harbour
-   Shoreline
-   Beach
-   Fisherman's Row
-   Salt Market
-   Fish Market
-   Bellwatch Church
-   Widow's Bluff
-   Black Gull Docks
-   Old streets
-   Shops and traders
-   Ship's Supply Shop
-   Armour and shield shop
-   Sword and weapon shop
-   Harbourmaster's Office
-   Harbourmaster investigation
-   Sella and item appraisal
-   Myra and ship supplies
-   Tovin and unusual goods
-   Fisherman conversations
-   Tavern/inn interactions
-   Beach investigation
-   Gulls
-   Disturbed feathers
-   Washed-up debris
-   Strange shoreline material
-   Unknown sea creature encounter

The Greyhaven content is already substantial and should be treated as
existing game content, not disposable prototype material.

# 17. Current File Architecture

``` text
Chronicles/
├── index.html
├── css/
├── images/
├── assets/
│   └── audio/
├── GreatLibrary/
├── docs/
├── backups/
└── js/
    ├── core/
    │   ├── choices.js
    │   ├── dialogue.js
    │   ├── script.js
    │   ├── story.js
    │   └── title.js
    ├── library/
    │   └── library.js
    ├── pip/
    │   ├── chronicle.js
    │   ├── knowledge.js
    │   ├── pip.js
    │   ├── pipComments.js
    │   ├── pipIntro.js
    │   └── social.js
    ├── systems/
    │   ├── armour_systems.js
    │   ├── audio.js
    │   ├── character.js
    │   ├── combat.js
    │   ├── dice.js
    │   ├── inventory.js
    │   ├── memory.js
    │   ├── rollmessages.js
    │   └── weapon_systems.js
    └── scenes/
        ├── greyhaven/
        │   ├── arrival.js
        │   └── inside-greyhaven.js
        └── Beach/
            ├── First visit.js
            ├── second visit.js
            └── ...
```

# 18. Things Deliberately NOT Yet Implemented

These are ideas or systems that should not be treated as current
features yet.

## Action Check integration

The Action Check engine works in isolation.

It is **not yet integrated into ordinary player choices**.

That is the next architectural step, but it should only happen after the
current choice structure is understood and protected.

## Contextual Action Check definitions

We have not yet established a complete library of:

-   Contextual base Difficulties
-   Which actions use which attributes
-   Success consequences
-   Failure consequences
-   Critical Action Check consequences
-   Fumble consequences

These should be designed before being scattered through scene code.

## Save / Load

Not yet implemented.

## Continue

Currently a placeholder.

## Options

Currently a placeholder.

## Broader progression

Not yet fully implemented:

-   XP progression
-   Level progression
-   Character advancement
-   General skill progression
-   Abilities/talents system

# 19. Known Reconciliation Items

These are **not instructions to change immediately**. They are items
where the current implementation and the latest design direction need to
be reconciled deliberately.

### Armour / Shield Familiarity fields

The current character data structure still contains armour and shield
Familiarity fields.

The current design decision is:

> Armour and shields do not use Familiarity or Proficiency.

Those unused fields can be cleaned up later.

### Terminology

The current code still uses function names such as:

-   `getProficiencyLevel()`
-   `getProficiencyBonus()`

The player-facing system is now called **Weapon Familiarity**.

The underlying naming can be cleaned up later without changing the
actual Familiarity rules.

### Attack calculation

The locked rules define attacks as using:

`d20 + relevant Attribute Modifier + Familiarity Bonus + Equipment Modifiers + Situational Modifiers`

The current combat implementation should be reviewed against this
complete formula before further combat expansion.

Do not assume that a rules document and current code are identical
simply because both exist.

### Guard calculation

The rules document does not yet define one final universal Guard
formula.

The current implementation uses the character's Agility modifier and
armour protection, with shield defence applied separately during combat.

This should be deliberately reconciled before Guard is expanded further.

# 20. Development Principles Going Forward

## Protect working content

Do not replace functioning Chronicles content simply to make a new
system easier to implement.

## Build underneath the game

New mechanics should support the existing narrative and choice
structure.

## Keep player-facing language natural

Players should choose actions, not rules terminology.

## Keep hidden mechanics hidden

Difficulty targets should remain behind the scenes.

## Reuse existing systems

Especially the existing dice engine, choice system, Pip presentation,
inventory, and combat foundations.

## Make small changes

One system at a time.

Test it.

Commit it.

Then move on.

## Keep documentation current

When a major system becomes working or a design decision becomes locked,
update this document rather than relying on memory or scattered
conversation history.

# 21. Current Development Position

Chronicles is no longer just a prototype.

The project currently contains:

**A functioning character system + inventory/equipment + combat + weapon
Familiarity + Pip systems + Great Library + substantial Greyhaven
adventure content + a working Action Check foundation.**

The next phase is therefore **integration and refinement**, not
rebuilding the game from scratch.

The immediate priority is to understand and extend the existing
player-choice architecture so Action Checks can be attached to
appropriate choices without damaging the established Chronicles
experience.

## Final Rule

When in doubt:

> **Protect the game first. Improve the systems second.**

Chronicles should remain a game about **Adventure, Mystery, Choice,
Friendship and Legacy**, not become a collection of mechanics looking
for somewhere to live.
