let old_harbour_damage_examined = false;

let shoreline_searched = false;

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

function lookAroundGreyhaven(returning = false) {

    let greyhavenDescription;

if (returning) {
    
    greyhavenDescription = `

        <p>
            You make your way back towards Greyhaven.
        </p>

        <p>
            The town looks different now that you've seen what lies beyond its harbour.
        </p>

        <p>
            The streets are still busy, but you find yourself noticing things you hadn't before.
        </p>

        <p>
            Fishermen move between the docks.
        </p>

        <p>
            Merchants haul crates towards the waterfront.
        </p>

        <p>
            Doors open and close as people go about their business.
        </p>

        <p>
            Somewhere nearby, someone laughs.
        </p>

        <p>
            For a moment, Greyhaven seems almost ordinary.
        </p>

        <p>
            Then your eyes drift towards the rooftops.
        </p>

        <p>
            The lighthouse is still there.
        </p>

        <p>
            Dark.
        </p>

        <p>
            Watching over the town.
        </p>

    `;
    
} else {
    
    greyhavenDescription = `

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

    `;
    
}

document.getElementById("story").innerHTML = `

    <div class="story-panel">

        ${greyhavenDescription}

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

    if (old_harbour_damage_examined && shoreline_searched) {

    showChoices([
        "🐿️ Ask Pip",
        "↩️ Leave the Old Harbour"
    ]);

} else if (old_harbour_damage_examined) {

    showChoices([
        "🌊 Search the Shoreline",
        "🐿️ Ask Pip",
        "↩️ Leave the Old Harbour"
    ]);

} else if (shoreline_searched) {

    showChoices([
        "🔎 Investigate the Damage",
        "🐿️ Ask Pip",
        "↩️ Leave the Old Harbour"
    ]);

} else {

    showChoices([
        "🔎 Investigate the Damage",
        "🌊 Search the Shoreline",
        "🐿️ Ask Pip",
        "↩️ Leave the Old Harbour"
    ]);

}

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
    discoveryMemory,
    {
        topic: "old_harbour",
        type: "discovery",
        importance: 5
    }
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

shoreline_searched = true;

    const diceRoll = createPipRoll("1d20");
    const roll = diceRoll.result.total;

rememberLongTerm(
    "greyhaven_strange_material_discovered",
    "The player discovered a strange, dark, leathery fragment tangled among the debris on the Greyhaven shoreline. They did not yet know what it was.",
    {
        topic: "shoreline",
        type: "discovery",
        importance: 3,
        pip: "Oh, we did find that strange leathery fragment on the shoreline. It was tangled up among the debris. We didn't know what it was at the time."
    }
);

    // The leathery material is now guaranteed.
    // The roll determines what else is discovered.
    window.shorelineObjectVisible = roll >= 15;

    document.getElementById("story").innerHTML = `

    <div class="story-panel">

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


    let outcome = "";


    // =====================================
    // NATURAL MATERIAL — ALWAYS FOUND
    // =====================================

    if (roll < 8) {

        outcome = `

            <p>
                Something unusual catches your attention among the debris.
            </p>

            <p>
                A fragment of dark, leathery material is tangled around a piece of driftwood.
            </p>

            <p>
                It doesn't appear to be fish skin.
            </p>

            <p>
                You aren't sure what it is.
            </p>

        `;

    }


    // =====================================
    // MODERATE RESULT
    // =====================================

    else if (roll < 15) {

        outcome = `

            <p>
                Something unusual catches your attention among the debris.
            </p>

            <p>
                A fragment of dark, leathery material is tangled around a piece of driftwood.
            </p>

            <p>
                It doesn't appear to be fish skin.
            </p>

            <p>
                You aren't sure what it is.
            </p>

            <p>
                Nearby, you notice a length of old rope beneath the wet sand.
            </p>

            <p>
                It is badly damaged.
            </p>

            <p>
                Several strands have been pulled apart as though something caught hold of it with considerable force.
            </p>

        `;

    }


    // =====================================
    // HIGH RESULT
    // =====================================

    else if (roll < 20) {

        outcome = `

            <p>
                Something unusual catches your attention among the debris.
            </p>

            <p>
                A fragment of dark, leathery material is tangled around a piece of driftwood.
            </p>

            <p>
                It doesn't appear to be fish skin.
            </p>

            <p>
                You aren't sure what it is.
            </p>

            <p>
                Then something catches the light beneath the wet sand nearby.
            </p>

            <p>
                A small metallic glint.
            </p>

        `;

    }


    // =====================================
    // EXCEPTIONAL RESULT
    // =====================================

    else {

        outcome = `

            <p>
                Something unusual catches your attention among the debris.
            </p>

            <p>
                A fragment of dark, leathery material is tangled around a piece of driftwood.
            </p>

            <p>
                It doesn't appear to be fish skin.
            </p>

            <p>
                You aren't sure what it is.
            </p>

            <p>
                Further along the shoreline, something else catches your attention.
            </p>

            <p>
                Marks begin at the waterline.
            </p>

            <p>
                Something has dragged itself ashore.
            </p>

            <p>
                The trail leads away from the water and towards the rocks.
            </p>

            <p>
                It disappears between two large stones.
            </p>

            <p>
                Something appears to be wedged in the gap.
            </p>

        `;

    }


    // =====================================
    // SHOW RESULT
    // =====================================

    document.getElementById("story").innerHTML += `

        ${diceRoll.html}

        <div class="story-panel">

            ${outcome}

        </div>

    `;


    // =====================================
    // FOLLOW-UP CHOICES
    // =====================================

    if (roll === 20) {

        document.getElementById("choices").innerHTML = "";

        showChoices([
            "🔎 Examine the Material",
            "🔍 Search Between the Rocks",
            "↩️ Leave It"
        ]);

    }

    else if (roll >= 15) {

        document.getElementById("choices").innerHTML = "";

        showChoices([
            "🔎 Examine the Material",
            "🗡️ Dig Out the Object",
            "↩️ Leave It"
        ]);

    }

    else {

        document.getElementById("choices").innerHTML = "";

        showChoices([
            "🔎 Examine the Material",
            "↩️ Leave It"
        ]);

    }

}

function examineShorelineMaterial() {

    const discoveryMemory =
        "A strange leathery fragment was found on the Greyhaven shoreline. It is thin but unusually tough, covered in fine ridges, darker and damp underneath, and appears to have been torn from a living creature.";

    rememberLongTerm(
    "greyhaven_strange_material_examined",
    discoveryMemory,
    {
        topic: "shoreline",
        type: "discovery",
        importance: 4,
    pip: "Oh, that strange leathery fragment? I remember that one. It wasn't leather, but it felt almost like it. Those tiny ridges were very odd... and the underside was still warm. Whatever it came from was alive."
}
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

    if (window.shorelineObjectVisible) {

    showChoices([
        "🗡️ Dig Out the Object",
        "↩️ Leave It"
    ]);

} else {

    showChoices([
        "↩️ Leave It"
    ]);

}

}

function digOutShorelineObject() {

    old_iron_dagger_acquired = true;

    rememberLongTerm(
    "greyhaven_old_iron_dagger",
    "The player uncovered an old iron dagger beneath the wet sand on the Greyhaven shoreline. The blade is heavily weathered but surprisingly intact, and the handle is wrapped in faded black leather.",
    {
    topic: "shoreline",
    type: "item",
    importance: 4,
    pip: "Oh! That was the old iron dagger. You pulled it out from beneath the wet sand. It's battered, but it looked perfectly usable."
}
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
    "🎒 Take the Dagger",
    "↩️ Leave the Shoreline"
]);

}

function searchBetweenRocks() {

    let old_harbour_key_acquired = true;

    rememberLongTerm(
    "greyhaven_old_harbour_key",
    "The player found a small iron key between the rocks on the Greyhaven shoreline. It is badly corroded but still intact. A tiny brass tag attached to it bears the number 7.",
    {
        topic: "shoreline",
        type: "item",
        importance: 4,
        pip: "Oh, the little iron key! You found it wedged between the rocks. It was badly corroded, but still intact. And there was that tiny brass tag on it... number seven. I remember that part."
    }
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
    "🎒 Take the Key",
    "↩️ Leave the Shoreline"
]);

}