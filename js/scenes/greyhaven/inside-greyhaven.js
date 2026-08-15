function enterInsideGreyhaven() {
  
  setPipLocation("greyhaven");
  
  document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                The road into Greyhaven ends at the waterfront.
            </p>

            <p>
                The first thing you encounter is the dock.
            </p>

            <p>
                The harbour is louder than the streets behind you.
            </p>

            <p>
                Ropes creak.
            </p>

            <p>
                Wood knocks against wood as the boats shift with the tide.
            </p>

            <p>
                Fishermen move between the vessels, carrying crates, coiling lines and shouting instructions over the wind.
            </p>

            <p>
                The smell of salt is stronger here.
            </p>

            <p>
                So is the smell of fish.
            </p>

            <p>
                This is the newer harbour.
            </p>

            <p>
                Beyond the working docks, you can still see the ruined harbour you just left.
            </p>

            <p>
                Nobody seems to pay it much attention.
            </p>

            <p>
                Beyond the waterfront, the streets of Greyhaven climb towards the heart of the town.
            </p>

            <p>
                A weathered sign hangs from a nearby post.
            </p>

            <p>
                <strong>GREYHAVEN HARBOUR</strong>
            </p>

            <p>
                The paint is faded almost completely away.
            </p>

        </div>

    `;
  
  document.getElementById("choices").innerHTML = "";
  
  showChoices([
    "🧭 Look Around",
    "🧔 Talk to a Fisherman",
    "📚 Look for the Harbourmaster",
    "🐿️ Ask Pip",
    "↩️ Return to the Town"
  ]);
  
}

function lookAroundHarbour() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                You take a moment to look beyond the boats and the busy dockside.
            </p>

            <p>
                There's more happening here than you noticed at first.
            </p>

            <p>
                Fishermen work around piles of nets and coils of rope. Crates are loaded and unloaded from larger vessels, while merchants haggle with dockworkers over their cargo.
            </p>

            <p>
                Small shops and stalls have been built along the waterfront, catering to the people who make their living from the sea.
            </p>

            <p>
                A fish market occupies one of the busier sections of the dock, the air thick with salt and the unmistakable smell of freshly caught fish.
            </p>

            <p>
                Further along, you notice a small shop with coils of rope, lanterns and fishing equipment displayed outside.
            </p>

            <p>
                A handful of traders have set up beneath canvas awnings, their goods spread across rough wooden tables.
            </p>

            <p>
                Nearby, a narrow shop displays maps and coastal charts in its windows.
            </p>

            <p>
                You also notice a larger building overlooking the docks.
            </p>

            <p>
                A weathered sign beside the entrance reads:
            </p>

            <p>
                <strong>HARBOURMASTER</strong>
            </p>

            <p>
                There is plenty to explore here.
            </p>

        </div>

    `;

    showChoices([
        "🪝 Visit the Ship's Supply Shop",
        "🛒 Browse the Dockside Traders",
        "🐟 Visit the Fish Market",
        "🧭 Look at the Charts",
        "📚 Visit the Harbourmaster's Office",
        "↩️ Back to the Harbour"
    ]);

}

function visitShipSupplyShop() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                The shop is smaller than you expected.
            </p>

            <p>
                Coils of rope hang from hooks outside, alongside fishing nets, lanterns and bundles of canvas.
            </p>

            <p>
                Inside, the walls are crowded with shelves and racks of equipment.
            </p>

            <p>
                Everything has a practical purpose.
            </p>

            <p>
                Nothing appears particularly new.
            </p>

            <p>
                Behind the counter stands a woman in her late thirties, dark hair tied back with a faded blue strip of cloth.
            </p>

            <p>
                A leather apron is covered in scratches, stains and what looks suspiciously like dried salt.
            </p>

            <p>
                She is carefully arranging a collection of brass fittings.
            </p>

            <p>
                She glances up.
            </p>

            <p>
                "Looking for something useful, or just looking?"
            </p>

            <p>
                She gives you a small smile.
            </p>

            <p>
                "Either's fine. Just don't lean on the counter. It has opinions."
            </p>

        </div>

    `;

    showChoices([
        "🪝 Browse Equipment",
        "🏮 Browse Supplies",
        "💬 Talk to Myra",
        "↩️ Leave the Shop"
    ]);

}

function talkToMyra() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                Myra sets down the brass fittings she has been sorting.
            </p>

            <p>
                "Go on, then. Ask away."
            </p>

            <p>
                She leans against the counter.
            </p>

            <p>
                "Though if you're about to ask whether I've got anything that'll make you look important, I'm afraid you're out of luck."
            </p>

            <p>
                She glances around the shop.
            </p>

            <p>
                "Most things in here are designed to keep people alive. Looking important is extra."
            </p>

        </div>

    `;

    showChoices([
        "👤 Do you run this place?",
        "🪝 What do you sell?",
        "🔘 What's with the buttons?",
        "⚓ Have you lived in Greyhaven long?",
        "↩️ That's all for now"
    ]);

}