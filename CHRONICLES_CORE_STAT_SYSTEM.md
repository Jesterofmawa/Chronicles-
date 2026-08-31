CHRONICLES CORE STAT SYSTEM

Version 1.0

> This document defines the core character statistics, combat mathematics, equipment rules and progression systems used by Chronicles.

Locked rules should not be changed during implementation without deliberately revisiting the design decision.

---

1. Core Attributes

Chronicles uses six primary attributes.

Traditional concept	Chronicles name

Strength	Might
Dexterity	Agility
Constitution	Endurance
Intelligence	Reason
Wisdom	Awareness
Charisma	Presence


These are Chronicles terminology and should be used throughout the game.

---

2. Attribute Modifiers

Each attribute has a corresponding modifier.

The exact attribute-generation method is currently not locked.

The modifier system should be consistent throughout Chronicles.

Modifier

Modifier = floor((Attribute - 10) / 2)

This produces the familiar progression:

Attribute	Modifier

1	-5
2–3	-4
4–5	-3
6–7	-2
8–9	-1
10–11	0
12–13	+1
14–15	+2
16–17	+3
18–19	+4
20	+5

---

3. Vitality

Vitality represents the character's ability to withstand harm.

Maximum Vitality

Vitality = 8 + (Endurance Modifier × 2)

Vitality is calculated when character statistics are established.

Current Vitality may decrease during combat.

---

4. Guard

Guard represents how difficult the character is to hit.

Guard is influenced by equipment and other applicable modifiers.

The exact final Guard formula is not yet locked.

Existing armour and shield values must be preserved.

---

5. Initiative

Initiative determines combat order.

Initiative

Initiative = Agility Modifier

No additional attribute is currently added to Initiative.

---

6. Attack Rolls

An attack roll determines whether an attack successfully strikes its intended target.

The basic attack roll uses:

d20
+ relevant Attribute Modifier
+ Weapon Proficiency Bonus
+ Equipment Modifiers
+ Situational Modifiers

The exact method for determining the relevant attribute is weapon-dependent.

---

7. Weapon Attributes

Weapons may use different attributes for their attack rolls.

Current decisions:

Weapon	Attribute

Simple Dagger	Agility
Short Sword	Might
Spear	Might
Hand Axe	Might
Long Sword	Might
Fine Cutlass	Agility


The Fine Cutlass specifically uses Agility because its design favours precision and finesse.

---

8. Weapon Traits

Some weapons possess special traits.

Precise

A weapon with Precise is designed around accuracy and controlled attacks.

Adaptive

A weapon with Adaptive can change its attack method depending upon how it is wielded.

Current weapons possessing these traits should retain their existing behaviour.

---

9. One-Handed and Two-Handed Weapons

Some weapons support different attack methods depending upon how they are wielded.

Current examples:

Spear

Long Sword


These weapons may provide different damage dice when used one-handed or two-handed.

Their existing behaviour must be preserved.

---

10. Weapon Damage

Weapon damage is determined by the weapon's own damage definition.

One-handed and two-handed damage may use different dice.

Important

Attack modifiers affect the ability to hit.

They do not reduce weapon damage.

---

11. Critical Hits

Critical hits are handled separately from ordinary successful attacks.

Current Familiarity rule:

Normal successful attack = +1 Familiarity
Critical hit = +2 Familiarity

The existing critical-hit damage behaviour should be preserved.

---

12. Weapon Familiarity

Weapon Familiarity represents a character's growing experience with a particular type of weapon.

Familiarity is gained through actual use during play.

All characters begin with:

Familiarity = 0

Characters therefore begin Untrained.

Familiarity is persistent and does not reset between encounters.

---

13. Weapon Familiarity Groups

Current weapon groups:

Blades

Simple Dagger

Short Sword

Long Sword

Fine Cutlass


Polearms

Spear


Axes

Hand Axe


A weapon's Familiarity Group remains attached to the weapon when it moves between:

Definition
→ Inventory
→ Equipped
→ Unequipped
→ Inventory

---

14. Familiarity Gain

Successful attacks increase Familiarity.

Normal successful attack

+1 Familiarity

Critical hit

+2 Familiarity

Miss

+0 Familiarity

Familiarity is only awarded when an attack successfully reaches damage resolution.

---

15. Encounter Familiarity Limit

A character can gain a maximum of:

+3 Familiarity

from any individual weapon group during a single encounter.

This limit resets when a new encounter begins.

The character's accumulated Familiarity does not reset.

Example:

Encounter 1
Blades: 0 → 3

Encounter 2
Blades: 3 → 6

---

16. Maximum Familiarity

The maximum Familiarity for any weapon group is:

100

Familiarity cannot exceed 100.

---

17. Familiarity Progression

Weapon Familiarity has five stages.

Familiarity	Stage	Attack Bonus

0–10	Untrained	+0
11–25	Familiar	+1
26–45	Trained	+2
46–70	Skilled	+3
71–100	Expert	+4


The proficiency bonus is automatically determined from the character's current Familiarity.

---

18. Armour

Armour does not use Familiarity or Proficiency.

Armour values are inherent properties of the individual item.

Armour should use hard-coded values for things such as:

Protection

Guard

Agility penalties

Special effects


Existing armour Protection values must be preserved.

---

19. Heavy Armour

Future heavier armour may impose an Agility/attack penalty.

Example:

Heavy Armour
Protection: +5
Attack: -2

The penalty represents restricted movement and difficulty fighting effectively while heavily armoured.

Important

Armour penalties affect:

Attack rolls

They do not reduce:

Weapon damage

---

20. Shields

Shields do not use Familiarity or Proficiency.

Shield defensive values are inherent properties of individual shields.

Existing shield values must be preserved.

Example: Tall Shield

Defence: +3
Attack: -2

The attack penalty is an inherent property of the shield.

---

21. Equipment Modifier Stacking

Applicable equipment modifiers stack unless a specific item or rule states otherwise.

Example:

Tall Shield     -2 Attack
Ring            +1 Attack
-------------------------
Total           -1 Attack

The player therefore receives:

+3 Defence
-1 Attack

when wearing the Tall Shield and the applicable ring together.

---

22. Jewellery

Jewellery does not use Familiarity or Proficiency.

Jewellery provides individual item-specific effects.

Effects may include:

Attack bonuses

Guard bonuses

Attribute bonuses

Other special effects


Example

An appraised ring may provide:

+1 Attack

when worn.

Jewellery bonuses stack with applicable weapon, armour and shield modifiers.

---

23. Equipment Philosophy

Chronicles intentionally separates learned ability from equipment characteristics.

Weapons

Weapons improve through use.

Use → Familiarity → Proficiency

Armour

Armour has inherent strengths and weaknesses.

Equipment → Protection / Guard / Agility effects

Shields

Shields provide defensive trade-offs.

Equipment → Defence / Attack effects

Jewellery

Jewellery provides unique bonuses and effects.

Equipment → Special modifiers

This allows players to develop their character through play style and equipment choices rather than requiring every equipment category to have a proficiency progression system.

---

24. Currently Unlocked / To Be Designed

The following areas remain open for future development:

Exact Guard formula

Exact character attribute generation

Complete damage mathematics

Critical damage mathematics

Full armour catalogue

Full shield catalogue

Jewellery catalogue

Additional weapon groups

Additional weapon traits

Non-combat applications of attributes

Skills and other character abilities


These should not be assumed or implemented until deliberately designed and locked.

---

25. Design Principle

Chronicles should reward player choice and experimentation.

A character should not simply become powerful because a number went up.

The player's choices should shape the character.

> Use the weapons you enjoy.

Choose the equipment that suits your style.

Experiment with combinations.

Build the character through the way you play.