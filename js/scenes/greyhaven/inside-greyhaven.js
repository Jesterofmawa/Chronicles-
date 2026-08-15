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
        "↩️ That's all for now"
    ]);

}

function myraRunsTheShop() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                "Most days."
            </p>

            <p>
                Myra glances around the shop.
            </p>

            <p>
                "My father started it."
            </p>

            <p>
                "I took over when he decided he'd rather spend his mornings shouting at gulls."
            </p>

            <p>
                She smiles.
            </p>

            <p>
                "He's very good at it."
            </p>

        </div>

    `;

    showChoices([
        "👤 What happened to your father?",
        "🏘️ Have you always lived in Greyhaven?",
        "↩️ Ask something else"
    ]);

}

function myraLivedInGreyhaven() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                "Nearly."
            </p>

            <p>
                Myra looks towards the shop window, where the masts of the harbour ships sway beyond the glass.
            </p>

            <p>
                "Born here. Left for a few years when I was younger."
            </p>

            <p>
                "Thought I'd seen enough of Greyhaven."
            </p>

            <p>
                She gives a small shrug.
            </p>

            <p>
                "Turns out Greyhaven hadn't finished with me."
            </p>

        </div>

    `;

    showChoices([
        "👤 What happened to your father?",
        "↩️ Ask something else"
    ]);

}

function myraFather() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                "Nothing dramatic."
            </p>

            <p>
                Myra waves a hand.
            </p>

            <p>
                "He's old. His knees complain. His back complains."
            </p>

            <p>
                She pauses.
            </p>

            <p>
                "Mostly his knees."
            </p>

            <p>
                "Eventually he decided retirement sounded better than lifting crates."
            </p>

            <p>
                She smiles.
            </p>

            <p>
                "Can't say I blame him."
            </p>

            <p>
                Myra reaches beneath the counter and pulls out a small glass jar.
            </p>

            <p>
                Hundreds of little buttons rattle inside.
            </p>

            <p>
                "Mind you, he still brings me these whenever he finds them."
            </p>

            <p>
                She gives the jar a little shake.
            </p>

            <p>
                <em>Click. Click. Click.</em>
            </p>

            <p>
                "Says I have enough."
            </p>

            <p>
                She looks at the jar.
            </p>

            <p>
                "He's wrong."
            </p>

        </div>

    `;

    showChoices([
        "🔘 Ask about the buttons",
        "↩️ Ask something else"
    ]);

}

function myraButtons() {
    
    rememberLongTerm(
    "myra_likes_buttons",
    "Myra Hoshle has collected buttons since she was a girl. She enjoys unusual buttons and likes wondering where they came from.",
    {
        topic: "myra",
        type: "character",
        importance: 3,
        pip: "Myra collects buttons. She's been doing it since she was a girl. She seems particularly fond of unusual ones."
    }
);
    
    document.getElementById("story").innerHTML = `
    
            <div class="story-panel">

            <p>
                Myra looks down at the jar.
            </p>

            <p>
                "Buttons?"
            </p>

            <p>
                She smiles.
            </p>

            <p>
                "I've been collecting them since I was a girl."
            </p>

            <p>
                She lifts the jar and gives it another little shake.
            </p>

            <p>
                <em>Click. Click. Click.</em>
            </p>

            <p>
                "People lose them. Coats, shirts, bags... sometimes entire lives, if you ask me."
            </p>

            <p>
                She picks one out and holds it between two fingers.
            </p>

            <p>
                "Every now and then, someone finds one interesting enough to bring here."
            </p>

            <p>
                She turns it over thoughtfully.
            </p>

            <p>
                "I like wondering where they came from."
            </p>

            <p>
                Then she drops it back into the jar.
            </p>

            <p>
                <em>Click.</em>
            </p>

            <p>
                "Besides, they're small."
            </p>

            <p>
                She shrugs.
            </p>

            <p>
                "Small things are easy to keep."
            </p>

        </div>

    `;

    showChoices([
        "↩️ Ask something else"
    ]);

}

function myraConversation() {

    showChoices([
        "👤 Do you run this place?",
        "🪝 What do you sell?",
        "↩️ That's all for now"
    ]);

}

function myraSells() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                Myra looks around the shop.
            </p>

            <p>
                "A bit of everything, really."
            </p>

            <p>
                She gestures towards the shelves.
            </p>

            <p>
                "Rope. Lanterns. Hooks. Fishing gear. Canvas. Spare fittings."
            </p>

            <p>
                "Things people need when they're going somewhere the ground isn't particularly interested in keeping them alive."
            </p>

            <p>
                She gives you a sideways glance.
            </p>

            <p>
                "Boats are especially good at finding ways to break things."
            </p>

            <p>
                "So I keep the things around that help people put them back together."
            </p>

            <p>
                She taps the counter.
            </p>

            <p>
                "Nothing glamorous."
            </p>

            <p>
                "But useful."
            </p>

        </div>

    `;

    showChoices([
        "🛒 Ask what she recommends",
        "↩️ Ask something else"
    ]);

}
    
    function myraRecommendations() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                "Depends what you're planning."
            </p>

            <p>
                Myra looks you over.
            </p>

            <p>
                "You don't strike me as someone who knows what they're looking for."
            </p>

            <p>
                She taps a finger against the counter.
            </p>

            <p>
                "That's not an insult. Most people don't."
            </p>

            <p>
                She gestures towards the shelves.
            </p>

            <p>
                "If you're staying near town, a good lantern won't hurt."
            </p>

            <p>
                "If you're heading along the coast, take rope."
            </p>

            <p>
                "And if you're going somewhere neither of those will help..."
            </p>

            <p>
                She shrugs.
            </p>

            <p>
                "Come back and tell me what you needed."
            </p>

        </div>

    `;

    showChoices([
        "🏮 Ask about the lanterns",
        "🪢 Ask about the rope",
        "🎣 Ask about fishing equipment",
        "↩️ Ask something else"
    ]);

}

function myraLanterns() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                "Lanterns?"
            </p>

            <p>
                Myra reaches behind her and lifts one from the shelf.
            </p>

            <p>
                "These are the sensible sort."
            </p>

            <p>
                She turns it over in her hands.
            </p>

            <p>
                "Heavy enough that the wind won't knock them over. Glass is thick. Oil reservoir doesn't leak unless someone's been particularly creative with it."
            </p>

            <p>
                She gives you a look.
            </p>

            <p>
                "People are surprisingly creative."
            </p>

            <p>
                She sets it back down.
            </p>

            <p>
                "If you're going anywhere after dark, take one."
            </p>

            <p>
                "The coast has a habit of making familiar places look very different once the sun goes down."
            </p>

        </div>

    `;

    showChoices([
        "🪢 Ask about the rope",
        "🎣 Ask about fishing equipment",
        "↩️ Ask something else"
    ]);

}

function myraRope() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                "Rope?"
            </p>

            <p>
                Myra reaches for a coil hanging from the wall.
            </p>

            <p>
                "Now this is something I wouldn't leave town without."
            </p>

            <p>
                She tests the rope between her hands.
            </p>

            <p>
                "Good hemp. Properly treated. Won't turn to mush the first time it gets wet."
            </p>

            <p>
                She gives the coil a thoughtful tug.
            </p>

            <p>
                "Useful for tying things down, hauling things up, climbing things..."
            </p>

            <p>
                She pauses.
            </p>

            <p>
                "Getting yourself out of places you probably shouldn't have climbed into."
            </p>

            <p>
                She looks at you.
            </p>

            <p>
                "That last one's more common than you'd think."
            </p>

        </div>

    `;

    showChoices([
        "🎣 Ask about fishing equipment",
        "↩️ Ask something else"
    ]);

}

function myraFishingGear() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                "Fishing gear?"
            </p>

            <p>
                Myra points towards a rack near the back of the shop.
            </p>

            <p>
                "Hooks, lines, floats, nets. Whatever you need."
            </p>

            <p>
                She picks up a small bundle of hooks.
            </p>

            <p>
                "Though if you're asking me which ones catch the most fish..."
            </p>

            <p>
                She shrugs.
            </p>

            <p>
                "Ask a fisherman."
            </p>

            <p>
                She puts them back.
            </p>

            <p>
                "I sell the equipment. I don't make the fish cooperate."
            </p>

            <p>
                A small smile crosses her face.
            </p>

            <p>
                "Wouldn't be much of a business if I did."
            </p>

        </div>

    `;

    showChoices([
        "↩️ Ask something else"
    ]);

}

function browseEquipment() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                Myra gestures towards the shelves lining the walls.
            </p>

            <p>
                "Take a look."
            </p>

            <p>
                "Everything here has earned its place."
            </p>

            <p>
                "Mostly because someone broke something and needed to fix it."
            </p>

        </div>

    `;

    showChoices([
        "🪢 Rope — 5 silver",
        "🏮 Storm Lantern — 8 silver",
        "🧰 Sailor's Tool Kit — 12 silver",
        "🎣 Fishing Kit — 6 silver",
        "🧤 Work Gloves — 3 silver",
        "🪝 Bent Grappling Hook — 15 silver",
        "↩️ Back to the Shop"
    ]);

}

function browseSupplies() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                Myra points towards another set of shelves.
            </p>

            <p>
                "Supplies are over there."
            </p>

            <p>
                "Nothing fancy. Just things people tend to wish they'd packed after they've already left town."
            </p>

        </div>

    `;

    showChoices([
        "🛢️ Lamp Oil — 2 silver",
        "🍞 Travel Rations — 3 silver",
        "🩹 Basic First Aid Kit — 5 silver",
        "🧵 Repair Thread & Canvas — 3 silver",
        "🪝 Spare Hooks & Line — 2 silver",
        "🧂 Salt Packet — 1 silver",
        "↩️ Back to the Shop"
    ]);

}

function openInventory() {

    if (document.getElementById("inventoryPanel")) {
        return;
    }

    document.getElementById("story").innerHTML += `

        <div id="inventoryPanel" class="story-panel">

            <h2>🎒 Inventory</h2>

            <p>
                <strong>Money:</strong> 50 silver
            </p>

            <p>
                <em>Your inventory is empty.</em>
            </p>

            <button onclick="closeInventory()">
                ✕ Close
            </button>

        </div>

    `;

}

function closeInventory() {

    const panel = document.getElementById("inventoryPanel");

    if (panel) {
        panel.remove();
    }

}