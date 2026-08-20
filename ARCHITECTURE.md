# Chronicles — Reorganised Project

This version is a structural cleanup of the existing working Chronicles project.

## Important
The original working ZIP/project is not modified. This is a separate copy intended for a new SPCK project/session.

## Structure

- `index.html` — main application shell and UI.
- `css/` — presentation/styles.
- `images/` — character, storyteller, title and environment images.
- `assets/audio/` — music and sound.
- `js/core/` — game flow, story display, dialogue and choices.
- `js/systems/` — reusable mechanics such as memory, dice, audio and inventory.
- `js/pip/` — Pip's behaviour and conversation systems.
- `js/pip/comments/` — location/feature-specific Pip observations.
- `js/library/` — Great Library integration.
- `js/scenes/greyhaven/` — Greyhaven scene content and scene logic.
- `GreatLibrary/` — lore/content data. This is deliberately kept outside the JavaScript engine.
- `docs/` — project notes, ideas, roadmap and changelog.
- `backups/` — copies of the previous HTML entry points for reference only.

## Design principle

For now this project still uses ordinary `<script>` tags and global functions/variables. That is intentional.

It means it should remain friendly to the current SPCK workflow while giving us clear places to put future code. We can migrate to a more advanced module architecture later if there is a real benefit.

## What NOT to do yet

Don't start rewriting everything into classes/modules just because the folders are cleaner.

The next stage should be incremental:
1. Test this reorganised copy.
2. Fix any broken paths/functions.
3. Establish a central game state.
4. Separate scene content from scene mechanics.
5. Add save/load.
6. Continue building Chronicles.

The eventual Android packaging step can be handled later.
