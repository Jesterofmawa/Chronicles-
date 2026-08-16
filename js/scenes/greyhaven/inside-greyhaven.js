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

function talkToBram() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                Bram studies you for a moment.
            </p>

            <p>
                "You don't look like you're here to buy rope."
            </p>

            <p>
                He pauses.
            </p>

            <p>
                "Most people who ask questions aren't."
            </p>

            <p>
                He leans against the counter.
            </p>

            <p>
                "So."
            </p>

            <p>
                "What is it you actually want to know?"
            </p>

        </div>

    `;

    showChoices([
        "⚓ Ask about the harbour",
        "🏘️ Ask about Greyhaven",
        "🌊 Ask about the sea",
        "👀 Ask what Bram thinks of strangers",
        "↩️ Back to Bram"
    ]);

}

function visitSellaStall() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                Sella's stall is almost impossible to take in at once.
            </p>

            <p>
                Coloured fabrics hang from the awning, small bottles catch the light and unfamiliar trinkets cover almost every available surface.
            </p>

            <p>
                Some things are clearly useful.
            </p>

            <p>
                Others are difficult to identify.
            </p>

            <p>
                A woman in a weathered travelling coat sits behind the counter.
            </p>

            <p>
                Several rings glint on her fingers as she sorts through a collection of small coins.
            </p>

            <p>
                She looks up as you approach.
            </p>

            <p>
                Her eyes briefly travel over you.
            </p>

            <p>
                Then she smiles.
            </p>

            <p>
                "You don't look like you're from Greyhaven."
            </p>

            <p>
                She pauses.
            </p>

            <p>
                "That's either very interesting or very unfortunate."
            </p>

        </div>

    `;

    showChoices([
        "🛒 Browse Sella's Goods",
        "💬 Talk to Sella",
        "🌍 Ask about her travels",
        "🗣️ Ask what she's heard",
        "↩️ Leave Sella's Stall"
    ]);

}

function sellaTravels() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                Sella smiles.
            </p>

            <p>
                "My travels?"
            </p>

            <p>
                She glances around her stall.
            </p>

            <p>
                "Most of these things have travelled farther than some people I know."
            </p>

            <p>
                She laughs softly.
            </p>

            <p>
                "I've been north, south and further east than I usually admit."
            </p>

            <p>
                "Ports, islands, little villages that barely appear on maps."
            </p>

            <p>
                "You learn something everywhere."
            </p>

            <p>
                She taps one of the unfamiliar coins on the counter.
            </p>

            <p>
                "Though sometimes what you learn is that the person selling you a map had never been there either."
            </p>

        </div>

    `;

    showChoices([
        "🗺️ Ask about places she's visited",
        "🚢 Ask about the ships she travels with",
        "↩️ Back to Sella"
    ]);

}

function sellaPlaces() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                "Places?"
            </p>

            <p>
                Sella thinks for a moment.
            </p>

            <p>
                "There's a little island called Merrow's Rest."
            </p>

            <p>
                "Beautiful place."
            </p>

            <p>
                "Terrible wine."
            </p>

            <p>
                She considers another memory.
            </p>

            <p>
                "There's also Greyhook."
            </p>

            <p>
                "Ugly little port. Excellent food."
            </p>

            <p>
                She smiles.
            </p>

            <p>
                "And somewhere beyond the eastern waters there's a city built almost entirely on bridges."
            </p>

            <p>
                "Never found it myself."
            </p>

            <p>
                "Three different captains swear it's real."
            </p>

            <p>
                She shrugs.
            </p>

            <p>
                "Three different captains also swear they saw a sea serpent."
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Sella's Travels"
    ]);

}

function sellaShips() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                Sella leans back slightly.
            </p>

            <p>
                "Ships?"
            </p>

            <p>
                "Never trust a ship that looks too comfortable."
            </p>

            <p>
                She smiles.
            </p>

            <p>
                "I've travelled on merchant vessels, fishing boats, ferries and one particularly unfortunate vessel that the captain insisted was still seaworthy."
            </p>

            <p>
                She pauses.
            </p>

            <p>
                "It wasn't."
            </p>

            <p>
                "These days I prefer ships with captains who know the difference between confidence and optimism."
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Sella's Travels"
    ]);

}

function sellaRumours() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                Sella's smile changes.
            </p>

            <p>
                "Ah."
            </p>

            <p>
                "Now that's a dangerous question."
            </p>

            <p>
                She glances towards the other stalls.
            </p>

            <p>
                "Travellers hear things."
            </p>

            <p>
                "Some are true."
            </p>

            <p>
                "Some aren't."
            </p>

            <p>
                "Most become something in between by the time they reach the next port."
            </p>

            <p>
                She lowers her voice.
            </p>

            <p>
                "I've heard sailors talking about ships that refuse to enter the old harbour."
            </p>

            <p>
                "I've heard merchants complain about cargo going missing."
            </p>

            <p>
                "And I've heard someone claim that the bells on the water sometimes ring when there are no ships nearby."
            </p>

            <p>
                She raises an eyebrow.
            </p>

            <p>
                "That last one's probably nonsense."
            </p>

            <p>
                "Probably."
            </p>

        </div>

    `;

    showChoices([
        "⚓ Ask about the old harbour",
        "📦 Ask about missing cargo",
        "🔔 Ask about the bells",
        "↩️ Back to Sella"
    ]);

}

function sellaOldHarbour() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                Sella's expression becomes more thoughtful.
            </p>

            <p>
                "The old harbour?"
            </p>

            <p>
                "I've never been inside it."
            </p>

            <p>
                "I've seen the ruins, though."
            </p>

            <p>
                "Most sailors I know avoid it."
            </p>

            <p>
                She shrugs.
            </p>

            <p>
                "Some say the place is unstable."
            </p>

            <p>
                "Others say it's cursed."
            </p>

            <p>
                "Personally, I think sailors enjoy having something to blame when they don't want to explain themselves."
            </p>

            <p>
                She smiles.
            </p>

            <p>
                "Still..."
            </p>

            <p>
                "I wouldn't go wandering around there after dark."
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Sella's Rumours"
    ]);

}

function sellaMissingCargo() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                "Missing cargo?"
            </p>

            <p>
                Sella shrugs.
            </p>

            <p>
                "Cargo goes missing everywhere."
            </p>

            <p>
                "Bad manifests. Bad bookkeeping. Bad dockworkers."
            </p>

            <p>
                She counts them off on her fingers.
            </p>

            <p>
                "Sometimes bad luck."
            </p>

            <p>
                She pauses.
            </p>

            <p>
                "But apparently there's been more of it here lately."
            </p>

            <p>
                "Small things mostly."
            </p>

            <p>
                "Tools. Supplies. Personal belongings."
            </p>

            <p>
                She gives you a knowing look.
            </p>

            <p>
                "Nothing worth making a fuss over."
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Sella's Rumours"
    ]);

}

function sellaBells() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                Sella's smile fades slightly.
            </p>

            <p>
                "The bells?"
            </p>

            <p>
                "That's one I've heard before."
            </p>

            <p>
                She looks towards the harbour.
            </p>

            <p>
                "A sailor told me he heard one ringing from somewhere out beyond the old harbour."
            </p>

            <p>
                "He swore there was nothing there."
            </p>

            <p>
                She pauses.
            </p>

            <p>
                "Another sailor told me the same thing."
            </p>

            <p>
                "Different ship."
            </p>

            <p>
                "Different year."
            </p>

            <p>
                Sella gives a small shrug.
            </p>

            <p>
                "Could be coincidence."
            </p>

            <p>
                "Could be the same story getting passed around."
            </p>

            <p>
                She looks at you.
            </p>

            <p>
                "Or perhaps there really is a bell out there."
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Sella's Rumours"
    ]);

}

function talkToSella() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                Sella sets aside the coins she has been sorting.
            </p>

            <p>
                "Go on."
            </p>

            <p>
                "I'm listening."
            </p>

            <p>
                She smiles.
            </p>

            <p>
                "Though if you're about to ask whether everything I sell is genuine..."
            </p>

            <p>
                She pauses.
            </p>

            <p>
                "Define genuine."
            </p>

        </div>

    `;

    showChoices([
        "🛒 What do you sell?",
        "🌍 Why do you travel?",
        "🏘️ What do you think of Greyhaven?",
        "↩️ Back to Sella"
    ]);

}

function sellaSells() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                Sella glances over the collection of goods surrounding her.
            </p>

            <p>
                "A little bit of everything."
            </p>

            <p>
                She gestures towards the stall.
            </p>

            <p>
                "Things people need."
            </p>

            <p>
                "Things people want."
            </p>

            <p>
                "And occasionally things people didn't know they needed until they saw them."
            </p>

            <p>
                She smiles.
            </p>

            <p>
                "Mostly things I've picked up on my travels."
            </p>

            <p>
                "If it looks interesting and I can carry it, I'll probably sell it."
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Sella"
    ]);

}

function sellaWhyTravels() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                Sella leans back against the stall.
            </p>

            <p>
                "Why?"
            </p>

            <p>
                She considers the question.
            </p>

            <p>
                "I suppose I've never been very good at staying in one place."
            </p>

            <p>
                "There's always another road."
            </p>

            <p>
                "Another ship."
            </p>

            <p>
                "Another town with something I've never seen before."
            </p>

            <p>
                She smiles.
            </p>

            <p>
                "And if I can make a little silver while I'm doing it, all the better."
            </p>

            <p>
                "Besides..."
            </p>

            <p>
                She glances towards the harbour.
            </p>

            <p>
                "Staying anywhere too long means people start expecting you to behave sensibly."
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Sella"
    ]);

}

function sellaGreyhavenOpinion() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                Sella looks out towards the harbour.
            </p>

            <p>
                "Greyhaven?"
            </p>

            <p>
                She smiles faintly.
            </p>

            <p>
                "It's a strange place."
            </p>

            <p>
                "Not the strangest I've seen."
            </p>

            <p>
                "But it's trying."
            </p>

            <p>
                She gestures towards the town.
            </p>

            <p>
                "Most ports are loud. Busy. Always trying to prove they're important."
            </p>

            <p>
                "Greyhaven doesn't seem to care quite as much."
            </p>

            <p>
                She pauses.
            </p>

            <p>
                "There's something about it."
            </p>

            <p>
                "Hard to explain."
            </p>

            <p>
                She shrugs.
            </p>

            <p>
                "Perhaps it's just the weather."
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Sella"
    ]);

}

function browseSellaGoods() {

    activeShop = "sella";

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                Sella spreads one hand across the assortment of goods surrounding her.
            </p>

            <p>
                "Nothing here was made in Greyhaven."
            </p>

            <p>
                She picks up a small carved charm.
            </p>

            <p>
                "Some of it wasn't even made anywhere I've heard of."
            </p>

            <p>
                She smiles.
            </p>

            <p>
                "That's what makes it interesting."
            </p>

        </div>

    `;

    showChoices([
        "🪙 Foreign Coin — 12 silver",
        "🧿 Carved Luck Charm — 13 silver",
        "🕯️ Scented Travel Candle — 3 silver",
        "🧭 Pocket Compass — 18 silver",
        "🧵 Fine Thread & Needle — 16 silver",
        "🍵 Dried Traveller's Tea — 9 silver",
        "🗺️ Unmarked Map Fragment — 26 silver",
        "❓ Sealed Little Box — 15 silver",
        "↩️ Back to Sella"
    ]);

}