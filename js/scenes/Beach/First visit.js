let beach_feathers_searched = false;
let beach_debris_searched = false;

function exploreGreyhavenBeach() {
    
    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                The beach stretches along the coast beyond Greyhaven.
            </p>

            <p>
                A handful of townsfolk enjoy the afternoon, while children play
                close to the water. To most of them, this is simply another
                familiar part of life in Greyhaven.
            </p>

            <p>
                Still, there are things here that might reward a closer look.
            </p>

        </div>

    `;
    
    showChoices([
        "👀 Watch the Beach",
        "🌊 Observe the Sea",
        "🐦 Watch the Gulls",
        "🔎 Search the Sand",
        "↩️ Back to the Beach"
    ]);
    
}

function investigateBeachArea() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                You take a closer look around the beach.
            </p>

            <p>
                There are several things here that may be worth investigating.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to the Beach"
    ]);

}

function exploreBeachRocks() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                A stretch of rocks breaks the beach further along the coast.
            </p>

            <p>
                The rocks may be worth exploring more closely.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to the Beach"
    ]);

}

function followCoastToLighthouse() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                The coastline continues beyond the beach.
            </p>

            <p>
                Somewhere further along the coast, the old lighthouse stands above the water.
            </p>

            <p>
                The route ahead has yet to be explored.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to the Beach"
    ]);

}

function watchGreyhavenBeach() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                For a while, you simply watch the beach.
            </p>

            <p>
                There are fewer people here than you might expect, but those who
                have come seem entirely at ease.
            </p>

            <p>
                A few children chase one another along the water's edge, their
                laughter carrying above the sound of the waves.
            </p>

            <p>
                Further up the beach, several townsfolk sit together and talk.
                Others wander along the sand, collecting shells or watching the
                sea.
            </p>

            <p>
                Nobody seems particularly concerned by the water.
            </p>

            <p>
                For the people of Greyhaven, this is simply the beach.
                They know the coast. They know when the sea is safe.
            </p>

            <p>
                Yet as you watch, a few details begin to catch your attention.
            </p>

        </div>

    `;

    let choices = [];

    if (!beach_feathers_searched) {

        choices.push("🪶 Investigate the Disturbed Feathers");

    }

    if (!beach_debris_searched) {

        choices.push("🪵 Investigate the Washed-Up Debris");

    }

    choices.push("↩️ Back to Explore the Beach");

    showChoices(choices);

}

function investigateDisturbedFeathers() {

    beach_feathers_searched = true;

    const diceRoll = createPipRoll("1d20");
    const roll = diceRoll.result.total;

    let outcome = "";

    // =====================================
    // POOR RESULT
    // =====================================

    if (roll <= 5) {

        outcome = `

            <p>
                You search carefully through the scattered feathers.
            </p>

            <p>
                Whatever happened here has left little behind.
            </p>

            <p>
                You find nothing of value.
            </p>

        `;

    }

    // =====================================
    // MODERATE RESULT
    // =====================================

    else if (roll <= 10) {

        addSilver(8);

        outcome = `

            <p>
                You search beneath the feathers and disturbed sand.
            </p>

            <p>
                Something catches your fingers.
            </p>

            <p>
                A few silver coins lie half buried beneath the sand.
            </p>

            <p>
                You collect the coins and put them into your bag.
            </p>

            <p>
                <strong>💰 8 silver added to your bag.</strong>
            </p>

        `;

    }

    // =====================================
    // GOOD RESULT
    // =====================================

    else if (roll <= 14) {

        addItem(
            "beach_jewellery",
            "Small Silver Brooch",
            "unusual"
        );

        outcome = `

            <p>
                You search carefully through the feathers and disturbed sand.
            </p>

            <p>
                Something catches the light beneath one of the feathers.
            </p>

            <p>
                You uncover a small silver brooch.
            </p>

            <p>
                It is worn, but appears to have survived the elements surprisingly well.
            </p>

            <p>
                You put the brooch into your bag.
            </p>

            <p>
                <strong>💍 Small Silver Brooch added to your bag.</strong>
            </p>

        `;

    }

    // =====================================
    // HIGH RESULT
    // =====================================

    else if (roll < 20) {

        addItem(
            "beach_jewellery",
            "Small Silver Brooch",
            "unusual"
        );

        addItem(
            "myra_button",
            "Button",
            "unusual"
        );

        outcome = `

            <p>
                You search carefully through the feathers and disturbed sand.
            </p>

            <p>
                Beneath them, you uncover a small silver brooch.
            </p>

            <p>
                You put the brooch into your bag.
            </p>

            <p>
                <strong>💍 Small Silver Brooch added to your bag.</strong>
            </p>

            <p>
                As you retrieve it, something else catches your attention nearby.
            </p>

            <p>
                A button lies half buried in the sand.
            </p>

            <p>
                It is worn and unremarkable.
            </p>

            <p>
                You pick it up and put it into your bag.
            </p>

            <p>
                <strong>🔘 Button added to your bag.</strong>
            </p>

        `;

    }

    // =====================================
    // NATURAL 20
    // =====================================

    else {

        addSilver(12);

        addItem(
            "beach_jewellery",
            "Small Silver Brooch",
            "unusual"
        );

        addItem(
            "myra_button",
            "Button",
            "unusual"
        );

        addItem(
            "beach_exceptional_jewellery",
            "Fine Silver Pendant",
            "unusual"
        );

        outcome = `

            <p>
                You search every inch of the disturbed ground.
            </p>

            <p>
                Beneath the feathers, you uncover a small silver brooch.
            </p>

            <p>
                You put the brooch into your bag.
            </p>

            <p>
                <strong>💍 Small Silver Brooch added to your bag.</strong>
            </p>

            <p>
                Nearby, a button lies half buried in the sand.
            </p>

            <p>
                You pick it up and put it into your bag.
            </p>

            <p>
                <strong>🔘 Button added to your bag.</strong>
            </p>

            <p>
                Then your fingers strike something beneath the loose sand.
            </p>

            <p>
                You dig carefully and uncover a finely crafted silver pendant.
            </p>

            <p>
                You place it carefully into your bag.
            </p>

            <p>
                <strong>✨ Fine Silver Pendant added to your bag.</strong>
            </p>

            <p>
                A handful of silver coins are scattered around it.
            </p>

            <p>
                You gather them up.
            </p>

            <p>
                <strong>💰 12 silver added to your bag.</strong>
            </p>

            <p>
                Whatever happened here, you have found considerably more than you expected.
            </p>

        `;

    }

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            ${diceRoll.html}

            ${outcome}

        </div>

    `;

    showChoices([
        "↩️ Back to Explore the Beach"
    ]);

}

function investigateWashedUpDebris() {

    beach_debris_searched = true;

    const diceRoll = createPipRoll("1d20");
    const roll = diceRoll.result.total;

    let outcome = "";

    // =====================================
    // POOR RESULT
    // =====================================

    if (roll <= 5) {

        outcome = `

            <p>
                You pick through the washed-up debris carefully.
            </p>

            <p>
                Most of it is little more than driftwood, seaweed and broken rope.
            </p>

            <p>
                Nothing seems worth taking.
            </p>

        `;

    }

    // =====================================
    // MODERATE RESULT
    // =====================================

    else if (roll <= 10) {

        addSilver(8);

        outcome = `

            <p>
                Beneath a piece of broken timber, you notice something caught in the sand.
            </p>

            <p>
                A small leather pouch.
            </p>

            <p>
                Inside are a few silver coins.
            </p>

            <p>
                You gather them up and put them into your bag.
            </p>

            <p>
                <strong>💰 8 silver added to your bag.</strong>
            </p>

        `;

    }

    // =====================================
    // GOOD RESULT
    // =====================================

    else if (roll <= 14) {

        addItem(
            "beach_rope",
            "Usable Rope",
            "unusual"
        );

        outcome = `

            <p>
                You work your way through the debris.
            </p>

            <p>
                Beneath the broken timber, you find a length of rope that has somehow
                escaped the worst of the damage.
            </p>

            <p>
                Most of it is still strong enough to be useful.
            </p>

            <p>
                You coil it up and put it into your bag.
            </p>

            <p>
                <strong>🪢 Usable Rope added to your bag.</strong>
            </p>

        `;

    }

    // =====================================
    // HIGH RESULT
    // =====================================

    else if (roll < 20) {

        addSilver(8);

        addItem(
            "myra_button",
            "Button",
            "unusual"
        );

        outcome = `

            <p>
                You search deeper among the driftwood and seaweed.
            </p>

            <p>
                You find a small leather pouch containing several silver coins.
            </p>

            <p>
                You gather the coins and put them into your bag.
            </p>

            <p>
                <strong>💰 8 silver added to your bag.</strong>
            </p>

            <p>
                As you move the pouch aside, something catches your eye in the sand.
            </p>

            <p>
                A button lies amongst the debris.
            </p>

            <p>
                You pick it up and put it into your bag.
            </p>

            <p>
                <strong>🔘 Button added to your bag.</strong>
            </p>

        `;

    }

    // =====================================
    // NATURAL 20
    // =====================================

    else {

        addSilver(12);

        addItem(
            "myra_button",
            "Button",
            "unusual"
        );

        addItem(
            "beach_locked_box",
            "Small Locked Wooden Box",
            "unusual"
        );

        outcome = `

            <p>
                You search carefully through the entire stretch of washed-up debris.
            </p>

            <p>
                Beneath a tangle of seaweed and broken timber, your fingers find something
                solid.
            </p>

            <p>
                You uncover a small wooden box.
            </p>

            <p>
                The wood is swollen from seawater, but the box itself appears remarkably intact.
            </p>

            <p>
                A small corroded lock prevents you from opening it.
            </p>

            <p>
                You put the locked box into your bag.
            </p>

            <p>
                <strong>🔒 Small Locked Wooden Box added to your bag.</strong>
            </p>

            <p>
                Nearby, you find a button half buried in the sand.
            </p>

            <p>
                You pick it up and put it into your bag.
            </p>

            <p>
                <strong>🔘 Button added to your bag.</strong>
            </p>

            <p>
                A handful of silver coins are scattered beneath the debris.
            </p>

            <p>
                You collect them.
            </p>

            <p>
                <strong>💰 12 silver added to your bag.</strong>
            </p>

            <p>
                You have no idea how the box came to be here.
            </p>

        `;

    }

    // =====================================
    // DISPLAY RESULT
    // =====================================

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            ${diceRoll.html}

            ${outcome}

        </div>

    `;

    showChoices([
        "↩️ Back to Explore the Beach"
    ]);

}

function observeGreyhavenSea() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                You turn your attention towards the sea.
            </p>

            <p>
                From here, it looks much as it always has.
                Greyhaven's waters stretch towards the horizon beneath the open sky.
            </p>

            <p>
                The tide is coming in slowly, each wave rolling across the sand
                before retreating again.
            </p>

            <p>
                Yet after watching for a while, something begins to feel wrong.
            </p>

            <p>
                The waves are strangely uneven.
            </p>

            <p>
                Every few moments, one reaches considerably further up the beach
                than the others, only to withdraw again as though nothing happened.
            </p>

            <p>
                You watch for several moments.
            </p>

            <p>
                Then the sea settles back into its ordinary rhythm.
            </p>

            <p>
                Perhaps it was nothing.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Explore the Beach"
    ]);

}

function watchGreyhavenGulls() {
    
    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                You watch the gulls for a while.
            </p>

            <p>
                At first, there is nothing unusual about them.
                They squabble over scraps, call to one another and pick through
                the wet sand along the water's edge.
            </p>

            <p>
                Then, without warning, several of them take flight.
            </p>

            <p>
                Not one or two.
            </p>

            <p>
                A whole cluster rises from the beach at once.
            </p>

            <p>
                They wheel sharply over the water, crying out as though something
                has disturbed them.
            </p>

            <p>
                You follow their flight and stare towards the sea.
            </p>

            <p>
                There is nothing there.
            </p>

            <p>
                The gulls circle once more before settling further along the beach.
            </p>

            <p>
                A moment later, everything seems normal again.
            </p>

            <p>
                Whatever frightened them may still be nearby.
            </p>

        </div>

    `;
    
    showChoices([
        "🔎 Investigate What Frightened the Gulls",
        "↩️ Back to Explore the Beach"
    ]);
    
}

function investigateGullDisturbance() {

    const diceRoll = createPipRoll("1d20");
    const roll = diceRoll.result.total;

    let outcome = "";
    let choices = [];

    // =====================================
    // LOW RESULT
    // =====================================

    if (roll <= 5) {

        outcome = `

            <p>
                You move towards the place where the gulls had gathered.
            </p>

            <p>
                The sand is disturbed, but you can find nothing that explains
                what frightened them.
            </p>

            <p>
                Whatever happened here, it has already passed.
            </p>

        `;

    }

    // =====================================
    // LOW-MID RESULT
    // =====================================

    else if (roll <= 10) {

        outcome = `

            <p>
                You approach the water and study the shallows.
            </p>

            <p>
                For a moment, you see nothing.
            </p>

            <p>
                Then something moves beneath the surface.
            </p>

            <p>
                Before you can make sense of it, the water erupts.
            </p>

            <p>
                Something is coming towards you.
            </p>

        `;

        choices.push("⚔️ Fight");

    }

    // =====================================
    // MID RESULT
    // =====================================

    else if (roll <= 14) {

        outcome = `

            <p>
                You watch the shallows carefully.
            </p>

            <p>
                Something moves beneath the water.
            </p>

            <p>
                It is too large to be a fish.
            </p>

            <p>
                Before you can get a better look, the water suddenly churns.
            </p>

            <p>
                Whatever is beneath it is moving towards the shore.
            </p>

        `;

        choices.push("⚔️ Fight");

    }

    // =====================================
    // HIGH RESULT
    // =====================================

    else if (roll < 20) {

        outcome = `

            <p>
                You remain still and watch the shallows.
            </p>

            <p>
                There.
            </p>

            <p>
                Something moves beneath the surface.
            </p>

            <p>
                For an instant, you catch the outline of a figure.
            </p>

            <p>
                It is humanoid.
            </p>

            <p>
                But something about the shape is horribly wrong.
            </p>

            <p>
                You realise it has not noticed you.
            </p>

        `;

        choices.push("👁️ Look Closer");

    }

    // =====================================
    // NATURAL 20
    // =====================================

    else {

        outcome = `

            <p>
                You watch the water without moving.
            </p>

            <p>
                Slowly, something rises beneath the surface.
            </p>

            <p>
                You see it clearly.
            </p>

            <p>
                A humanoid shape moves through the shallows.
            </p>

            <p>
                Its movements are strangely deliberate, almost cautious.
            </p>

            <p>
                For several seconds, you watch it without being noticed.
            </p>

            <p>
                Then it disappears beneath the water.
            </p>

            <p>
                Whatever it is, it knows these waters.
            </p>

        `;

        choices.push("👁️ Look Closer");

    }

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            ${diceRoll.html}

            ${outcome}

        </div>

    `;

    choices.push("↩️ Back to Explore the Beach");

    showChoices(choices);

}

function lookCloserAtCreature() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                You edge closer to the water, careful not to make a sound.
            </p>

            <p>
                The shape has disappeared beneath the surface.
            </p>

            <p>
                You wait.
            </p>

            <p>
                Nothing.
            </p>

            <p>
                For a moment, you wonder if you imagined it.
            </p>

            <p>
                Then something breaks the surface farther out.
            </p>

            <p>
                Two dark eyes meet yours.
            </p>

            <p>
                You barely have time to react before the creature slips beneath
                the waves and disappears.
            </p>

            <p>
                Whatever you saw, it clearly had no intention of coming ashore.
            </p>

            <p>
                The water settles.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Explore the Beach"
    ]);

}