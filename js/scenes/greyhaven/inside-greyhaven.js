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

function visitDocksideTraders() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                You follow the waterfront towards the cluster of canvas awnings.
            </p>

            <p>
                The sound of the harbour fades slightly beneath the constant murmur of traders and customers.
            </p>

            <p>
                Goods are piled beneath the awnings, stacked in crates, hung from hooks and spread across rough wooden tables.
            </p>

            <p>
                Three stalls immediately catch your attention.
            </p>

            <p>
                The first is remarkably orderly.
            </p>

            <p>
                Everything has been arranged neatly, with a handwritten price board hanging behind a broad-shouldered man with a greying beard.
            </p>

            <p>
                The second is far more colourful.
            </p>

            <p>
                Fabrics, bottles and unfamiliar trinkets hang from every available surface.
            </p>

            <p>
                A woman in a weathered travelling coat watches the passing crowds with an amused smile.
            </p>

            <p>
                The third stall appears to have been constructed from whatever pieces of wood its owner could find.
            </p>

            <p>
                Crates are stacked at odd angles beneath a patched canvas sheet.
            </p>

            <p>
                A young man is currently halfway inside one of them.
            </p>

            <p>
                He emerges holding something you can't quite identify.
            </p>

            <p>
                He looks at it.
            </p>

            <p>
                Then at you.
            </p>

            <p>
                Then quickly puts it back.
            </p>

            <p>
                There are three traders here.
            </p>

        </div>

    `;

    showChoices([
        "🧔 Visit Bram's Stall",
        "👩 Visit Sella's Stall",
        "🧑‍🦱 Visit Tovin's Stall",
        "↩️ Leave the Traders"
    ]);

}

function visitBramStall() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                Bram's stall is exactly as orderly as it looked from the walkway.
            </p>

            <p>
                Everything has a place.
            </p>

            <p>
                Wooden crates are stacked neatly beneath the awning, while smaller goods have been arranged in rows across the counter.
            </p>

            <p>
                A handwritten price board hangs behind the stall.
            </p>

            <p>
                Behind it stands the broad-shouldered merchant you noticed earlier.
            </p>

            <p>
                His greying beard is neatly trimmed, though his weathered face suggests he's spent considerably more time outdoors than in.
            </p>

            <p>
                A small brass bell sits on the counter.
            </p>

            <p>
                You can't immediately see any reason for it to be there.
            </p>

            <p>
                Bram notices you looking at it.
            </p>

            <p>
                "Don't."
            </p>

            <p>
                He goes back to arranging a row of small tools.
            </p>

            <p>
                After a moment, he looks up.
            </p>

            <p>
                "Buying something?"
            </p>

        </div>

    `;

    showChoices([
    "🛒 Browse Bram's Goods",
    "💬 Talk to Bram",
    "🏘️ Ask about Greyhaven",
    "🔔 Ask about the Bell",
    "↩️ Leave the Stall"
]);

}

function askBramAboutGreyhaven() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                Bram folds his arms.
            </p>

            <p>
                "Greyhaven?"
            </p>

            <p>
                He looks out across the harbour.
            </p>

            <p>
                "I've been here most of my life."
            </p>

            <p>
                "Seen the town change. Seen people come and go."
            </p>

            <p>
                He gives a small shrug.
            </p>

            <p>
                "If you want to know something about Greyhaven, I might know."
            </p>

            <p>
                He pauses.
            </p>

            <p>
                "Might."
            </p>

        </div>

    `;

    showChoices([
        "⚓ Ask about the harbour",
        "🏘️ Ask about the town",
        "👥 Ask about the locals",
        "🌊 Ask about strange things he's seen",
        "↩️ Back to Bram"
    ]);

}

function bramHarbourKnowledge() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                Bram glances towards the harbour.
            </p>

            <p>
                "What about it?"
            </p>

            <p>
                He rests both hands on the counter.
            </p>

            <p>
                "Been here longer than most of the buildings."
            </p>

            <p>
                "The old harbour used to be further along the coast."
            </p>

            <p>
                He points vaguely towards the ruins.
            </p>

            <p>
                "Storm took most of it."
            </p>

            <p>
                He pauses.
            </p>

            <p>
                "Or fire."
            </p>

            <p>
                He scratches his beard.
            </p>

            <p>
                "Could've been both."
            </p>

            <p>
                "Either way, the town built this one afterwards."
            </p>

            <p>
                Bram looks back towards the water.
            </p>

            <p>
                "New harbour's been here ever since."
            </p>

            <p>
                "Never had much trouble with it."
            </p>

            <p>
                He pauses again.
            </p>

            <p>
                "Not much."
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Greyhaven Questions"
    ]);

}

function bramTownKnowledge() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                Bram looks past you towards the streets climbing away from the harbour.
            </p>

            <p>
                "Town's changed."
            </p>

            <p>
                "Used to be smaller."
            </p>

            <p>
                He gestures vaguely inland.
            </p>

            <p>
                "Most of the older buildings are up that way."
            </p>

            <p>
                "Market square's been there forever."
            </p>

            <p>
                He pauses.
            </p>

            <p>
                "Or nearly forever."
            </p>

            <p>
                "There was a fire once."
            </p>

            <p>
                "Big one."
            </p>

            <p>
                "Rebuilt most of the centre afterwards."
            </p>

            <p>
                Bram shrugs.
            </p>

            <p>
                "You can still tell which buildings survived."
            </p>

            <p>
                He considers this for a moment.
            </p>

            <p>
                "At least, I think you can."
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Greyhaven Questions"
    ]);

}

function bramLocalKnowledge() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                Bram gives a short laugh.
            </p>

            <p>
                "Locals?"
            </p>

            <p>
                "That's a dangerous question."
            </p>

            <p>
                He leans against the counter.
            </p>

            <p>
                "Everyone knows everyone here."
            </p>

            <p>
                "Or thinks they do."
            </p>

            <p>
                "Fishermen know the sailors. Sailors know the merchants. Merchants know everyone else's business."
            </p>

            <p>
                He shakes his head.
            </p>

            <p>
                "Best way to learn about someone is to ask somebody who doesn't like them."
            </p>

            <p>
                "You'll get a completely different story."
            </p>

            <p>
                Bram smiles.
            </p>

            <p>
                "Usually more interesting, too."
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Greyhaven Questions"
    ]);

}

function bramStrangeKnowledge() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                Bram's expression changes slightly.
            </p>

            <p>
                "Strange things?"
            </p>

            <p>
                He looks towards the water.
            </p>

            <p>
                "Depends what you mean by strange."
            </p>

            <p>
                "Ships disappearing isn't strange."
            </p>

            <p>
                "Storms aren't strange."
            </p>

            <p>
                "People hearing voices when they've had too much rum isn't strange."
            </p>

            <p>
                He pauses.
            </p>

            <p>
                "But there was that one winter..."
            </p>

            <p>
                Bram falls quiet for a moment.
            </p>

            <p>
                "Fog came in."
            </p>

            <p>
                "Stayed for three days."
            </p>

            <p>
                "Couldn't see ten feet past the end of the dock."
            </p>

            <p>
                He rubs his beard.
            </p>

            <p>
                "People said they heard bells out on the water."
            </p>

            <p>
                "Probably a buoy."
            </p>

            <p>
                He looks towards the harbour.
            </p>

            <p>
                "Probably."
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Greyhaven Questions"
    ]);

}

function bramBell() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                You glance towards the brass bell on the counter.
            </p>

            <p>
                "That?"
            </p>

            <p>
                Bram looks at it.
            </p>

            <p>
                "Old thing."
            </p>

            <p>
                He picks it up.
            </p>

            <p>
                "Had it years."
            </p>

            <p>
                He turns it over in his hand.
            </p>

            <p>
                "Can't remember where it came from."
            </p>

            <p>
                He puts it back down.
            </p>

            <p>
                "Doesn't work properly anyway."
            </p>

            <p>
                You notice there is no visible clapper inside it.
            </p>

            <p>
                Bram notices you looking.
            </p>

            <p>
                "Don't."
            </p>

            <p>
                He goes back to arranging his tools.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Bram"
    ]);

}

function browseBramGoods() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                Bram gestures towards the neatly arranged shelves.
            </p>

            <p>
                "Everything here is useful."
            </p>

            <p>
                He pauses.
            </p>

            <p>
                "That's generally the point."
            </p>

            <p>
                "If you want something decorative, try Sella."
            </p>

            <p>
                "If you want something questionable, try Tovin."
            </p>

            <p>
                He nods towards his shelves.
            </p>

            <p>
                "If you want something that works, you're in the right place."
            </p>

        </div>

    `;

    showChoices([
        "🪢 Basic Rope — 4 silver",
        "🧰 Simple Tool Set — 8 silver",
        "🧤 Heavy Work Gloves — 3 silver",
        "🔪 Utility Knife — 6 silver",
        "🍞 Travel Rations — 3 silver",
        "🛢️ Lamp Oil — 2 silver",
        "🧵 Basic Repair Kit — 4 silver",
        "🧂 Salt — 1 silver",
        "↩️ Back to Bram"
    ]);

}
