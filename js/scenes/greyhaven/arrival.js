let old_harbour_damage_examined = false;

let oldHarbourDiscovery = "";

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

function examineOldHarbour() {

    document.getElementById("story").innerHTML = `
        <div class="story-panel">

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

    const diceRoll = createPipRoll("1d20");
const roll = diceRoll.result.total;

    old_harbour_damage_examined = true;

    let outcome = "";
    
let discoveryMemory = "";

    if (roll === 20) {

discoveryMemory =
    "The damage is more complex than it first appears. Four deep parallel scratches are accompanied by a second set of shallower marks. The shallower marks stop abruptly at the edge of the stone, suggesting whatever caused the damage passed across the harbour rather than simply striking it. Whatever made the marks was considerably larger than a person.";

        outcome = `

            <p>
                You examine the stonework carefully, tracing the damage
                with your eyes rather than your hands.
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
                But there is something else.
            </p>

            <p>
                Almost hidden beneath the deeper grooves are several
                much shallower marks.
            </p>

            <p>
                They follow the same direction, but they don't quite
                match the larger scratches.
            </p>

            <p>
                At first they look like damage caused by debris.
            </p>

            <p>
                Then you notice that they stop abruptly at the edge
                of the stone.
            </p>

            <p>
                Whatever made them did not simply strike the harbour.
                It passed across it.
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