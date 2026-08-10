let old_harbour_damage_examined = false;

let oldHarbourDiscovery = "";

let old_iron_dagger_acquired = false;

function startGreyhaven() {
  
  document.getElementById("story").innerHTML = `
        <div class="story-panel">

            <h2>Greyhaven</h2>

            <p>
                The first thing you notice is the smell.
            </p>

            <p>
                Salt. Tar. Smoke.
            </p>

            <p>
                Somewhere beyond the narrow streets, gulls cry over the harbour.
            </p>

            <p>
                Greyhaven lies before you, huddled against the coast beneath a sky the colour of old iron.
            </p>

            <p>
                Ships crowd the harbour. Their masts rise above the rooftops, swaying gently against the horizon.
            </p>

        </div>
    `;
  
  showChoices([
    "👀 Look Around",
    "🚪 Enter Greyhaven",
    "📖 Talk with Pip"
  ]);
  
  startPipObservations();
  
}

function lookAroundGreyhaven() {

    document.getElementById("story").innerHTML = `
        <div class="story-panel">

            <p>
                You pause before entering Greyhaven and take a closer look at the town.
            </p>

            <p>
                From here, the harbour is easier to see.
            </p>

            <p>
                The docks stretch along the waterfront, crowded with fishing boats and small merchant vessels.
            </p>

            <p>
                But beyond them, something else catches your attention.
            </p>

            <p>
                An older section of harbour extends into the water.
                <br>
                Or what remains of it.
            </p>

            <p>
                Broken timbers jut from the waves. A length of stone pier has collapsed into the shallows, and several old posts lean at impossible angles beneath the weight of years.
            </p>

            <p>
                The newer harbour seems to have simply grown around it.
            </p>

            <p>
                Nobody appears to be working there.
            </p>

            <p>
                Nobody appears to have bothered removing it either.
            </p>

            <p>
                The old pier is considerably larger than the harbour Greyhaven has today.
            </p>

            <p>
                Whatever happened to it, it must have been significant.
            </p>

            <p>
                The wind carries the sound of the water striking the ruined timbers.
            </p>

            <p>
                Then silence.
            </p>

        </div>
    `;

    showChoices([
        "⚓ Examine the Old Harbour",
        "🚪 Enter Greyhaven",
        "🐿️ Ask Pip about the ruins"
    ]);

}

function examineOldHarbour(returning = false) {
    
        let harbourDescription;

    if (returning) {

        harbourDescription = `

            <p>
                You make your way back towards the old harbour.
            </p>

            <p>
                The tide has shifted while you were away.
            </p>

            <p>
                More of the old stonework now lies exposed beneath the receding water.
            </p>

            <p>
                The broken timbers cast long shadows across the shallows.
            </p>

            <p>
                From here, the shoreline looks strangely quiet.
            </p>

            <p>
                Whatever drew your attention among the rocks is hidden from view now.
            </p>

            <p>
                The ruined harbour waits ahead.
            </p>

            <p>
                Silent.
            </p>

            <p>
                Patient.
            </p>

            <p>
                There is still more to find here, if you choose to look.
            </p>

        `;

    } else {

        harbourDescription = `

            <p>
                You make your way closer to the ruined harbour.
            </p>

            <p>
                The tide has pulled back far enough to expose parts of the old stonework.
            </p>

            <p>
                Up close, the damage is even stranger.
            </p>

            <p>
                Some of the timbers have rotted away naturally.
            </p>

            <p>
                Others have not.
            </p>

            <p>
                Several have been snapped clean through.
            </p>

            <p>
                One enormous beam has been driven sideways into the stonework, as though something struck it with tremendous force.
            </p>

            <p>
                Near the waterline, half-buried beneath wet sand, an old iron mooring ring has been pulled almost completely from the stone.
            </p>

            <p>
                The metal is bent.
            </p>

            <p>
                Not rusted.
            </p>

            <p>
                Bent.
            </p>

            <p>
                There is more to find here, if you care to look.
            </p>

        `;

    }

        document.getElementById("story").innerHTML = `
        <div class="story-panel">

            ${harbourDescription}

        </div>
    `;

    showChoices([
        "🔎 Investigate the Damage",
        "🌊 Search the Shoreline",
        "🐿️ Ask Pip",
        "↩️ Leave the Old Harbour"
    ]);

}

function enterGreyhaven() {
  
  setPipLocation("greyhaven");
  
  document.getElementById("story").innerHTML = `
        <div class="story-panel">

            <p>
                You make your way toward the town.
            </p>

            <p>
                Greyhaven waits below.
            </p>

        </div>
    `;
  
  document.getElementById("choices").innerHTML = "";
  
}

function investigateOldHarbourDamage() {

    pausePipObservations();

    const diceRoll = createPipRoll("1d20");
const roll = diceRoll.result.total;

    old_harbour_damage_examined = true;

    let outcome = "";
    
let discoveryMemory = "";

    if (roll === 20) {

    outcome = `

        <p>
            The tide has left more than driftwood behind.
        </p>

        <p>
            Marks begin at the waterline.
        </p>

        <p>
            Something has dragged itself ashore.
        </p>

        <p>
            The trail leads away from the water and toward the rocks.
        </p>

        <p>
            It disappears between two large stones.
        </p>

        <p>
            You move closer.
        </p>

        <p>
            Something is wedged in the gap.
        </p>

        <p>
            At first, it looks like another piece of debris.
        </p>

        <p>
            Then you notice something beneath it.
        </p>

        <p>
            A piece of strange, leathery material.
        </p>

        <p>
            And beneath the wet sand beside it, something catches the light.
        </p>

        <p>
            Whatever came ashore did not leave everything behind.
        </p>

    `;

}

    else if (roll >= 15) {

discoveryMemory =
    "The grooves were dragged across the stone rather than simply striking it. Their size and arrangement suggest something very large caused the damage.";

        outcome = `

            <p>
                You study the damaged stone more carefully.
            </p>

            <p>
                There are marks in the stone.
            </p>

            <p>
                Deep grooves.
                <br>
                Too wide to have been made by a tool.
            </p>

            <p>
                Four parallel scratches.
                <br>
                Then another four beneath them.
            </p>

            <p>
                Whatever made them was considerably larger than a person.
            </p>

            <p>
                The stone around the marks is worn differently from
                the surrounding damage.
            </p>

            <p>
                Whatever caused this did not merely break the stone.
                It dragged across it.
            </p>

        `;

    }

    else if (roll >= 8) {

discoveryMemory =
    "There are four parallel scratches in the stone, followed by another four beneath them. The marks are too wide to have been made by a tool, suggesting something considerably larger than a person caused them.";

        outcome = `

            <p>
                There are marks in the stone.
            </p>

            <p>
                Deep grooves.
                <br>
                Too wide to have been made by a tool.
            </p>

            <p>
                Four parallel scratches.
                <br>
                Then another four beneath them.
            </p>

            <p>
                Whatever made them was considerably larger than a person.
            </p>

        `;

    }

    else {

discoveryMemory =
    "The damage to the old harbour is very old. Several deep grooves cross the stonework, and whatever caused them was not small.";
    
        outcome = `

            <p>
                You examine the damaged stone, but much of it is
                difficult to make sense of.
            </p>

            <p>
                The damage is old.
                <br>
                Very old.
            </p>

            <p>
                Several deep grooves run across the stonework.
            </p>

            <p>
                Whatever caused them was not something small.
            </p>

        `;

    }

rememberLongTerm(
    "greyhaven_old_harbour_damage",
    discoveryMemory
);

    document.getElementById("story").innerHTML = `

    <div class="story-panel">

        ${diceRoll.html}

        ${outcome}

    </div>

`;

    showChoices([
        "🐿️ Ask Pip",
        "↩️ Leave the Old Harbour"
    ]);

}

function searchShoreline() {

    pausePipObservations();

    document.getElementById("story").innerHTML = `

            <p>
                You leave the old stonework behind and follow the shoreline away from the ruined harbour.
            </p>

            <p>
                The beach narrows here, squeezed between the water and a line of dark rocks.
            </p>

            <p>
                The tide has left a scattered trail of driftwood, seaweed and broken fragments of timber across the wet sand.
            </p>

            <p>
                Pools of seawater glimmer between the rocks.
            </p>

            <p>
                A few gulls pick through the debris, fighting over something you cannot quite make out from here.
            </p>

            <p>
                There are plenty of places for something small to have been washed ashore.
            </p>

            <p>
                Or for something larger to have come looking.
            </p>

            <p>
                Nothing immediately catches your attention.
            </p>

            <p>
                If there's anything worth finding here, you'll need to look carefully.
            </p>

        </div>
    `;


    // Pip rolls the perception check

    const diceRoll = createPipRoll("1d20");

    const roll = diceRoll.result.total;


    // Determine what the player discovers

    let outcome = "";


    if (roll === 20) {

        outcome = `

            <p>
                The tide has left more than driftwood behind.
            </p>

            <p>
                Marks begin at the waterline.
            </p>

            <p>
                Something has dragged itself ashore.
            </p>

            <p>
                The trail leads away from the water and toward the rocks.
            </p>

            <p>
                It disappears between two large stones.
            </p>

            <p>
                Something appears to be wedged in the gap.
            </p>

        `;

    }

    else if (roll >= 15) {

        outcome = `

            <p>
                Something catches your attention beneath the sand.
            </p>

            <p>
                A piece of strange, leathery material lies among the debris.
            </p>

            <p>
                Nearby, something glints beneath the wet sand.
            </p>

        `;

    }

    else if (roll >= 8) {

        outcome = `

            <p>
                Beneath the wet sand, you find a length of old rope.
            </p>

            <p>
                It is badly damaged, but the damage does not appear to be entirely natural.
            </p>

        `;

    }

    else {

        outcome = `

            <p>
                You search the shoreline carefully.
            </p>

            <p>
                Driftwood, rope and broken timber litter the beach.
            </p>

            <p>
                Nothing appears significant.
            </p>

        `;

    }


    // Show Pip's dice roll and the discovery together

        document.getElementById("story").innerHTML += `

    ${diceRoll.html}

    <div class="story-panel">

        ${outcome}

    </div>

`;

    if (roll === 20) {

    document.getElementById("choices").innerHTML = "";

    showChoices([
        "🔍 Search Between the Rocks"
    ]);

}

else if (roll >= 15 && roll <= 19) {

    document.getElementById("choices").innerHTML = "";

    showChoices([
        "🔎 Examine the Material",
        "🗡️ Dig Out the Object",
        "↩️ Leave It"
    ]);

}

}

function examineShorelineMaterial() {

    const discoveryMemory =
        "A strange leathery fragment was found on the Greyhaven shoreline. It is thin but unusually tough, covered in fine ridges, darker and damp underneath, and appears to have been torn from a living creature.";

    rememberLongTerm(
        "greyhaven_strange_material",
        discoveryMemory
    );

    const outcome = `

        <p>
            You crouch beside the debris and carefully lift the strange material.
        </p>

        <p>
            It's thin, but surprisingly tough.
        </p>

        <p>
            It isn't leather, though it resembles it.
        </p>

        <p>
            The surface is covered in tiny ridges, running in almost perfect lines.
        </p>

        <p>
            You turn it over.
        </p>

        <p>
            The underside is darker.
        </p>

        <p>
            Damp.
        </p>

        <p>
            Almost warm.
        </p>

        <p>
            One edge has been torn rather than cut.
        </p>

        <p>
            Whatever this came from was alive.
        </p>

        <p>
            And whatever tore it away was not gentle.
        </p>

    `;

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            ${outcome}

        </div>

    `;

    showPipComment(
        "That's definitely not something I've seen before."
    );

    showChoices([
        "🗡️ Dig Out the Object",
        "↩️ Leave It"
    ]);

}

function digOutShorelineObject() {

    old_iron_dagger_acquired = true;

    rememberLongTerm(
        "greyhaven_old_iron_dagger",
        "The player uncovered an old iron dagger beneath the wet sand on the Greyhaven shoreline. The blade is heavily weathered but surprisingly intact, and the handle is wrapped in faded black leather."
    );

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                You kneel beside the glint and carefully dig through the wet sand.
            </p>

            <p>
                Your fingers close around something cold.
            </p>

            <p>
                You pull it free.
            </p>

            <p>
                An old iron dagger.
            </p>

            <p>
                The blade is heavily weathered, but surprisingly intact.
            </p>

            <p>
                The handle is wrapped in faded black leather.
            </p>

            <p>
                It isn't particularly impressive.
            </p>

            <p>
                But it is usable.
            </p>

            <p>
                <strong>ITEM ACQUIRED: OLD IRON DAGGER</strong>
            </p>

        </div>

    `;

    showChoices([
        "↩️ Leave It"
    ]);

}

function searchBetweenRocks() {

    let old_harbour_key_acquired = true;

    rememberLongTerm(
        "greyhaven_old_harbour_key",
        "The player found a small iron key between the rocks on the Greyhaven shoreline. It is badly corroded but still intact. A tiny brass tag attached to it bears the number 7."
    );

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                You squeeze carefully between the two rocks and reach into the gap.
            </p>

            <p>
                Your fingers find something cold beneath the damp sand.
            </p>

            <p>
                You pull it free.
            </p>

            <p>
                A small iron key.
            </p>

            <p>
                It is badly corroded, but still intact.
            </p>

            <p>
                A tiny brass tag hangs from it.
            </p>

            <p>
                One number is stamped into the metal.
            </p>

            <p>
                <strong>7</strong>
            </p>

            <p>
                <strong>ITEM ACQUIRED: OLD HARBOUR KEY</strong>
            </p>

        </div>

    `;

    showChoices([
        "↩️ Leave the Shoreline"
    ]);

}