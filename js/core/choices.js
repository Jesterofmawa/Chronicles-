let activeShop = null;

let currentChoices = [];
let previousChoices = [];

function showChoices(choices) {

currentChoices = [...choices];

    let html = "";

    for (let i = 0; i < choices.length; i++) {

        html += `
<button onclick="choose(this.textContent.trim())">
    ${choices[i]}
</button>
`;

    }

    document.getElementById("choices").innerHTML = html;

}

function choose(choice) {

    if (choice === "👀 Look Around") {

        lookAroundGreyhaven();

        return;

    }

    if (choice === "🚪 Enter Greyhaven") {

        enterGreyhaven();

        return;

    }

    if (choice === "📖 Talk with Pip") {

        talkWithPip();

        return;

    }

    if (choice === "⚓ Go to the Old Harbour") {
    examineOldHarbour();
    return;
}

    if (choice === "🐿️ Ask Pip about the ruins") {

    openPipChat();

    return;

}

    if (choice === "🔎 Investigate the Damage") {

        investigateOldHarbourDamage();

        return;

    }

    if (choice === "🌊 Search the Shoreline") {

       searchShoreline();

        return;

    }

if (choice === "🔎 Examine the Material") {

    examineShorelineMaterial();

    return;

}

if (choice === "🗡️ Dig Out the Object") {

    digOutShorelineObject();

    return;

}

if (choice === "↩️ Leave It") {

    examineOldHarbour(true);

    return;

}

if (choice === "🔍 Search Between the Rocks") {

    searchBetweenRocks();

    return;

}

if (choice === "↩️ Leave the Shoreline") {

    examineOldHarbour(true);

    return;

}

    if (choice === "🐿️ Ask Pip") {

    openPipChat();

    return;

}

if (choice === "↩️ Back to the Old Harbour") {

    examineOldHarbour(true);

    return;

}

if (choice === "↩️ Leave the Old Harbour") {

    resumePipObservations();

    lookAroundGreyhaven(true);

    return;

}

if (choice === "🧭 Look Around") {

    lookAroundHarbour();

    return;

}

if (choice === "↩️ Back to the Harbour") {

    enterInsideGreyhaven();

    return;

}

if (choice === "🪝 Visit the Ship's Supply Shop") {

    visitShipSupplyShop();

    return;

}

if (choice === "↩️ Leave the Ship's Supply Shop") {

    lookAroundHarbour(true);

    return;

}

if (choice === "💬 Talk to Myra") {

    talkToMyra();

    return;

}

if (choice === "👤 Do you run this place?") {

    myraRunsTheShop();

    return;

}

if (choice === "🏘️ Have you always lived in Greyhaven?") {

    myraLivedInGreyhaven();

    return;

}

if (choice === "👤 What happened to your father?") {

    myraFather();

    return;

}

if (choice === "🔘 Ask about the buttons") {

    myraButtons();

    return;

}

if (choice === "↩️ Ask something else") {

    myraConversation();

    return;

}

if (choice === "🪝 What do you sell?") {

    myraSells();

    return;

}

if (choice === "🛒 Ask what she recommends") {

    myraRecommendations();

    return;

}

if (choice === "🏮 Ask about the lanterns") {

    myraLanterns();

    return;

}

if (choice === "🪢 Ask about the rope") {

    myraRope();

    return;

}

if (choice === "🎣 Ask about fishing equipment") {

    myraFishingGear();

    return;

}

if (choice === "↩️ That's all for now") {

    visitShipSupplyShop();

    return;

}

if (choice === "🪝 Browse Equipment") {

activeShop = "myra";

    browseEquipment();

    return;

}

if (choice === "↩️ Back to the Shop") {

    visitShipSupplyShop();

    return;

}

if (choice === "🏮 Browse Supplies") {

activeShop = "myra";

    browseSupplies();

    return;

}

if (choice === "🪢 Rope — 5 silver") {

    buyRope();

    return;

}

if (choice === "↩️ Back to Equipment") {

    browseEquipment();

    return;

}

if (choice === "🎒 Open Inventory") {

    openInventory();

    return;

}

if (playerSilver < 5) {

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                You don't have enough silver for that.
            </p>

            <p>
                Myra gives you an apologetic shrug.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Equipment"
    ]);

    return;

}

if (choice === "🏮 Storm Lantern — 8 silver") {

    buyStormLantern();

    return;

}

if (choice === "🧰 Sailor's Tool Kit — 12 silver") {

    buySailorToolKit();

    return;

}

if (choice === "🎣 Fishing Kit — 6 silver") {

    buyFishingKit();

    return;

}

if (choice === "🧤 Work Gloves — 3 silver") {

    buyWorkGloves();

    return;

}

if (choice === "🪝 Bent Grappling Hook — 15 silver") {

    buyGrapplingHook();

    return;

}

if (activeShop === "myra" && choice === "🛢️ Lamp Oil — 2 silver") {

    buyLampOil();

    return;

}

if (activeShop === "myra" && choice === "🍞 Travel Rations — 3 silver") {

    buyTravelRations();

    return;

}

if (choice === "🩹 Basic First Aid Kit — 5 silver") {

    buyFirstAidKit();

    return;

}

if (choice === "🧵 Repair Thread & Canvas — 3 silver") {

    buyRepairSupplies();

    return;

}

if (choice === "🪝 Spare Hooks & Line — 2 silver") {

    buySpareHooks();

    return;

}

if (activeShop === "myra" && choice === "🧂 Salt Packet — 1 silver") {

    buySalt();

    return;

}

if (choice === "↩️ Back to Supplies") {

    browseSupplies();

    return;

}

if (choice === "🛒 Browse the Dockside Traders") {

    visitDocksideTraders();

    return;

}

if (choice === "↩️ Leave the Traders") {

    lookAroundHarbour(true);

    return;

}

if (choice === "🧔 Visit Bram's Stall") {

    visitBramStall();

    return;

}

if (choice === "↩️ Leave the Stall") {

    visitDocksideTraders();

    return;

}

if (choice === "💬 Talk to Bram") {

    talkToBram();

    return;

}

if (choice === "🏘️ Ask about Greyhaven") {

    askBramAboutGreyhaven();

    return;

}

if (choice === "↩️ Back to Greyhaven Questions") {

    askBramAboutGreyhaven();

    return;

}

if (choice === "↩️ Back to Bram") {

    visitBramStall();

    return;

}

if (choice === "⚓ Ask about the harbour") {

    bramHarbourKnowledge();

    return;

}

if (choice === "⚓ Ask Tovin about the harbour") {

    tovinHarbourKnowledge();

    return;

}

if (choice === "👀 Ask what he means") {

    tovinWhatHeMeans();

    return;

}

if (choice === "🌊 Ask about the water") {

    tovinWaterKnowledge();

    return;

}

if (choice === "⚓ Ask Tovin about the old harbour") {

    tovinOldHarbourKnowledge();

    return;

}

if (choice === "👀 Ask Tovin what shouldn't be touched") {

    tovinWhatShouldntBeTouched();

    return;

}

if (choice === "💰 Ask Tovin what he has found there") {

    tovinWhatHeFound();

    return;

}

if (choice === "👀 Ask Tovin about the mark") {

    tovinAboutTheMark();

    return;

}

if (choice === "🧑‍🦱 Ask Tovin about something else") {

    talkToTovin();

    return;

}

if (choice === "↩️ Back to Tovin") {

    visitTovinStall();

    return;

}

if (choice === "🧭 Ask about his travels") {

    tovinTravels();

    return;

}

if (choice === "👀 Ask Tovin where he's been") {

    tovinWhereHesBeen();

    return;

}

if (choice === "💰 Ask where he gets his goods") {

    tovinWhereHeGetsGoods();

    return;

}

if (choice === "👀 Ask Tovin what he means by that") {

    tovinWhatHeMeansByThat();

    return;

}

if (choice === "👀 Ask about his strangest find") {

    tovinStrangestFind();

    return;

}

if (choice === "👀 Ask what happens when someone knocks back") {

    tovinWhatHappensWhenKnockingBack();

    return;

}

if (choice === "🏘️ Ask about the town") {

    bramTownKnowledge();

    return;

}

if (choice === "👥 Ask about the locals") {

    bramLocalKnowledge();

    return;

}

if (choice === "🌊 Ask about strange things he's seen") {

    bramStrangeKnowledge();

    return;

}

if (choice === "🔔 Ask about the Bell") {

    bramBell();

    return;

}

if (choice === "🛒 Browse Bram's Goods") {

    browseBramGoods();

activeShop = "bram";

    return;

}

if (choice === "🪢 Basic Rope — 4 silver") {

    buyBramRope();

    return;

}

if (choice === "🧰 Simple Tool Set — 8 silver") {

    buySimpleToolSet();

    return;

}

if (choice === "🧤 Heavy Work Gloves — 3 silver") {

    buyHeavyWorkGloves();

    return;

}

if (choice === "🔪 Utility Knife — 6 silver") {

    buyUtilityKnife();

    return;

}

if (activeShop === "bram" && choice === "🍞 Travel Rations — 3 silver") {

    buyBramTravelRations();

    return;

}

if (activeShop === "bram" && choice === "🛢️ Lamp Oil — 2 silver") {

    buyBramLampOil();

    return;

}

if (choice === "🧵 Basic Repair Kit — 4 silver") {

    buyBasicRepairKit();

    return;

}

if (choice === "🧂 Salt — 1 silver") {

    buyBramSalt();

    return;

}

if (choice === "↩️ Back to Bram's Goods") {

    browseBramGoods();

    return;

}

if (choice === "🍞 Travel Rations — 3 silver") {

    if (activeShop === "bram") {
        buyBramTravelRations();
    } else {
        buyTravelRations();
    }

    return;

}

if (choice === "🛢️ Lamp Oil — 2 silver") {

    if (activeShop === "bram") {
        buyBramLampOil();
    } else {
        buyLampOil();
    }

    return;

}

if (choice === "🧵 Basic Repair Kit — 4 silver") {

    buyBasicRepairKit();

    return;

}

if (choice === "🧂 Salt — 1 silver") {

    buyBramSalt();

    return;

}

if (choice === "👩 Visit Sella's Stall") {

    visitSellaStall();

    return;

}

if (choice === "↩️ Leave Sella's Stall") {

    visitDocksideTraders();

    return;

}

if (choice === "🌍 Ask about her travels") {

    sellaTravels();

    return;

}

if (choice === "🗺️ Ask about places she's visited") {

    sellaPlaces();

    return;

}

if (choice === "↩️ Back to Sella's Travels") {

    sellaTravels();

    return;

}

if (choice === "🚢 Ask about the ships she travels with") {

    sellaShips();

    return;

}

if (choice === "🗣️ Ask what she's heard") {

    sellaRumours();

    return;

}

if (choice === "⚓ Ask about the old harbour") {

    sellaOldHarbour();

    return;

}

if (choice === "↩️ Back to Sella's Rumours") {

    sellaRumours();

    return;

}

if (choice === "📦 Ask about missing cargo") {

    sellaMissingCargo();

    return;

}

if (choice === "🔔 Ask about the bells") {

    sellaBells();

    return;

}

if (choice === "💬 Talk to Sella") {

    talkToSella();

    return;

}

if (choice === "↩️ Back to Sella") {

    visitSellaStall();

    return;

}

if (choice === "🛒 What do you sell?") {

    sellaSells();

    return;

}

if (choice === "↩️ Back to Sella") {

    talkToSella();

    return;

}

if (choice === "🌍 Why do you travel?") {

    sellaWhyTravels();

    return;

}

if (choice === "🏘️ What do you think of Greyhaven?") {

    sellaGreyhavenOpinion();

    return;

}

if (choice === "🛒 Browse Sella's Goods") {

    browseSellaGoods();

    return;

}

if (choice === "💍 Ask Sella to appraise the Strange Ring") {

    appraiseStrangeRing();

    return;

}

if (choice === "↩️ Back to Sella's Stall") {

    visitSellaStall();

    return;

}

if (choice === "🕯️ Scented Travel Candle — 3 silver") {

    buySellaTravelCandle();

    return;

}

if (choice === "🧭 Pocket Compass — 18 silver") {

    buySellaCompass();

    return;

}

if (choice === "🧵 Fine Thread & Needle — 16 silver") {

    buySellaThread();

    return;

}

if (choice === "🍵 Dried Traveller's Tea — 9 silver") {

    buySellaTea();

    return;

}

if (choice === "↩️ Back to Sella's Goods") {

    browseSellaGoods();

    return;

}

if (choice === "🪙 Foreign Coin — 12 silver") {

    buySellaForeignCoin();

    return;

}

if (choice === "🧿 Carved Luck Charm — 13 silver") {

    buySellaLuckCharm();

    return;

}

if (choice === "🗺️ Unmarked Map Fragment — 26 silver") {

    buySellaMapFragment();

    return;

}

if (choice === "❓ Sealed Little Box — 15 silver") {

    buySellaSealedBox();

    return;

}

if (choice === "🧑‍🦱 Visit Tovin's Stall") {

    visitTovinStall();

    return;

}

if (choice === "💬 Talk to Tovin") {

    talkToTovin();

    return;

}

if (choice === "🛒 Browse Tovin's Goods") {

    browseTovinGoods();

    return;

}

if (choice === "⚔️ Ornate Sword in Sealed Scabbard — 90 silver") {

    inspectTovinSword();

    return;

}

if (choice === "💰 Buy the sword — 90 silver") {

    buyTovinSword();

    return;

}

if (choice === "↩️ Back to Tovin's Goods") {

    browseTovinGoods();

    return;

}

if (choice === "🔭 Barnacled Brass Spyglass — 34 silver") {

    inspectTovinSpyglass();

    return;

}

if (choice === "🗝️ Key with No Known Lock — 28 silver") {

    inspectTovinKey();

    return;

}

if (choice === "📖 Waterlogged Captain's Journal — 32 silver") {

    inspectTovinJournal();

    return;

}

if (choice === "🫙 Bottle of Black Sand — 24 silver") {

    inspectTovinBlackSand();

    return;

}

if (choice === "🏅 Corroded Naval Medal — 27 silver") {

    inspectTovinMedal();

    return;

}

if (choice === "🎲 Carved Bone Die — 19 silver") {

    inspectTovinDie();

    return;

}

if (choice === "🔔 Silent Brass Bell — 45 silver") {

    inspectTovinBell();

    return;

}

if (choice === "💰 Buy the spyglass — 34 silver") {

    buyTovinSpyglass();

    return;

}

if (choice === "💰 Buy the key — 28 silver") {

    buyTovinKey();

    return;

}

if (choice === "💰 Buy the journal — 32 silver") {

    buyTovinJournal();

    return;

}

if (choice === "💰 Buy the black sand — 24 silver") {

    buyTovinBlackSand();

    return;

}

if (choice === "💰 Buy the medal — 27 silver") {

    buyTovinMedal();

    return;

}

if (choice === "💰 Buy the bone die — 19 silver") {

    buyTovinDie();

    return;

}

if (choice === "💰 Buy the bell — 45 silver") {

    buyTovinBell();

    return;

}

if (choice === "↩️ Leave Tovin's Stall") {

    visitDocksideTraders();

    return;

}

if (choice === "↩️ Back to Tovin's Stall") {

    visitTovinStall();

    return;

}

if (choice === "🧭 Explore Greyhaven") {

    exploreGreyhaven();

    return;

}

if (choice === "↩️ Return to Greyhaven") {

    enterInsideGreyhaven();

    return;

}

if (choice === "⚓ Explore the Harbour") {

    lookAroundHarbour();

    return;

}

if (choice === "🏘️ Explore the Streets") {

    exploreGreyhavenStreets();

    return;

}

if (choice === "🎣 Fisherman's Row") {

    visitFishermansRow();

    return;

}

if (choice === "🧂 Salt Market") {

    visitSaltMarket();

    return;

}

if (choice === "⛪ Bellwatch Church") {

    visitBellwatchChurch();

    return;

}

if (choice === "🌊 Widow's Bluff") {

    visitWidowsBluff();

    return;

}

if (choice === "⚓ Black Gull Docks") {

    visitBlackGullDocks();

    return;

}

if (choice === "🍺 The Bent Anchor") {

    visitBentAnchor();

    return;

}

if (choice === "↩️ Back to Explore the Streets") {

    exploreGreyhavenStreets();

    return;

}

if (choice === "🧔 Talk to a Fisherman") {

    talkToFisherman();

    return;

}

if (choice === "📚 Look for the Harbourmaster") {

    lookForHarbourmaster();

    return;

}

if (choice === "↩️ Back to Greyhaven") {

    enterInsideGreyhaven();

    return;

}

if (choice === "🐟 Visit the Fish Market") {

    visitFishMarket();

    return;

}

if (choice === "↩️ Back to the Harbour") {

    lookAroundHarbour();

    return;

}

if (choice === "🧭 Look at the Charts") {

    visitCharts();

    return;

}

if (choice === "🗺️ Study the Current Harbour Chart") {

    studyCurrentHarbourChart();

    return;

}

if (choice === "🏚️ Study the Old Harbour Chart") {

    studyOldHarbourChart();

    return;

}

if (choice === "↩️ Leave the Charts") {

    lookAroundHarbour();

    return;

}

if (choice === "↩️ Back to the Charts") {

    visitCharts();

    return;

}

if (choice === "📚 Visit the Harbourmaster's Office") {

    visitHarbourmastersOffice();

    return;

}

if (choice === "👀 Look Around the Harbourmaster's Office") {

    lookAroundHarbourmastersOffice();

    return;

}

if (choice === "↩️ Back to the Office") {

    visitHarbourmastersOffice();

    return;

}

if (choice === "↩️ Leave the Office") {
    
    leaveHarbourmastersOffice();
    
    return;
    
}

if (choice === "➡️ Continue into Greyhaven") {

    enterInsideGreyhaven();

    return;

}

if (choice === "🗃️ Examine the Desk") {

    examineHarbourmasterDesk();

    return;

}

if (choice === "🗃️ Examine the Unlabelled Drawer") {

    examineHarbourmasterDrawer();

    return;

}

if (choice === "🔐 Attempt to Unlock the Drawer") {

    attemptHarbourmasterDrawerLock();

    return;

}

if (choice === "↩️ Leave It Alone") {

    lookAroundHarbourmastersOffice();

    return;

}

if (choice === "🐟 Speak with a Fishmonger") {

    speakWithFishmonger();

    return;

}

if (choice === "👀 Look at the Catch") {

    lookAtFishMarketCatch();

    return;

}

if (choice === "🐟 Ask the Fishmonger about the day's catch") {

    askFishmongerAboutCatch();

    return;

}

if (choice === "🌊 Ask the Fishmonger about the sea") {

    askFishmongerAboutSea();

    return;

}

if (choice === "⚓ Ask the Fishmonger about the harbour") {

    askFishmongerAboutHarbour();

    return;

}

if (choice === "↩️ Back to Fishmonger") {

    speakWithFishmonger();

    return;

}

if (choice === "↩️ Back to the Fish Market") {

    visitFishMarket();

    return;

}

if (choice === "↩️ Leave the Fish Market") {

    enterInsideGreyhaven();

    return;

}

if (choice === "🍺 The Bent Anchor") {

    visitBentAnchor();

    return;

}

if (choice === "🌊 Head towards the Beach") {

    headTowardsBeach();

    return;

}

if (choice === "↩️ Back to Explore Greyhaven") {

    exploreGreyhaven();

    return;

}

if (choice === "🎒 Take the Dagger") {

    addItem("old_iron_dagger", "Old Iron Dagger", "equipment");

    showChoices([
        "↩️ Back to the Old Harbour"
    ]);

    return;

}

if (choice === "🎒 Take the Key") {

    addItem("old_harbour_key", "Old Harbour Key", "unusual");

    showChoices([
        "↩️ Back to the Old Harbour"
    ]);

    return;

}

if (choice === "↩️ Leave Greyhaven") {

    startGreyhaven();

    return;

}

if (choice === "👀 Look Around the Tavern") {

    lookAroundBentAnchor();

    return;

}

if (choice === "🗣️ Talk to the Innkeeper") {

    talkToInnkeeper();

    return;

}

if (choice === "🍺 Talk to the Patrons") {

    talkToTavernPatrons();

    return;

}

if (choice === "↩️ Back to the Tavern") {

    visitBentAnchor();

    return;

}

if (choice === "🗣️ Speak with the Fisherman") {

    speakWithFisherman();

    return;

}

if (choice === "🎣 Ask the Fisherman about the harbour") {

    askFishermanAboutHarbour();

    return;

}

if (choice === "🏘️ Ask the Fisherman about Greyhaven") {

    askFishermanAboutGreyhaven();

    return;

}

if (choice === "🌊 Ask the Fisherman about the sea") {

    askFishermanAboutTheSea();

    return;

}

if (choice === "🏚️ Ask the Fisherman about the old harbour") {

    askFishermanAboutOldHarbour();

    return;

}

if (choice === "🐟 Ask the Fisherman about fishing around Greyhaven") {

    askFishermanAboutFishing();

    return;

}

if (choice === "↩️ Back to Fisherman Questions") {

    showFishermanTopics();

    return;

}

if (choice === "↩️ Back to the Fisherman") {

    talkToFisherman();

    return;

}

if (choice === "↩️ Leave the Fisherman") {

    lookAroundHarbour();

    return;

}

if (choice === "❓ Ask What sort of wrong things?") {

    askFishermanAboutWrongThings();

    return;

}

if (choice === "👀 Look Around the Church") {

    lookAroundBellwatchChurch();

    return;

}

if (choice === "📜 Search for the Old Records") {

    searchForOldRecords();

    return;

}

if (choice === "↩️ Back to Bellwatch Church") {

    visitBellwatchChurch();

    return;

}

if (choice === "↩️ Leave Bellwatch Church") {

    exploreGreyhavenStreets();

    return;

}

if (choice === "👀 Explore the Beach") {

    exploreGreyhavenBeach();

    return;

}

if (choice === "🔎 Investigate the Area") {

    investigateBeachArea();

    return;

}

if (choice === "🪨 Explore the Rocks") {

    exploreBeachRocks();

    return;

}

if (choice === "🗼 Follow the Coast") {

   followCoastToLighthouse();

    return;

}

if (choice === "↩️ Back to the Beach") {

    headTowardsBeach();

    return;

}

if (choice === "👀 Watch the Beach") {

    watchGreyhavenBeach();

    return;

}

if (choice === "↩️ Back to Explore the Beach") {

    exploreGreyhavenBeach();

    return;

}

if (choice === "🪶 Investigate the Disturbed Feathers") {

    investigateDisturbedFeathers();

    return;

}

if (choice === "🪵 Investigate the Washed-Up Debris") {

    investigateWashedUpDebris();

    return;

}

if (choice === "🌊 Observe the Sea") {

    observeGreyhavenSea();

    return;

}

if (choice === "🐦 Watch the Gulls") {

    watchGreyhavenGulls();

    return;

}

if (choice === "🔎 Investigate What Frightened the Gulls")
{
    investigateGullDisturbance();
    return;
}

if (choice === "👁️ Look Closer") {

    lookCloserAtCreature();

    return;

}

if (choice === "▶️ Begin Combat") {

    beginCombatTurn();

    return;

}

if (choice === "⚔️ Attack") {
    
    choosePlayerAttackGrip();
    
    return;
    
}

if (choice.startsWith("⚔️ One-Handed Attack")) {

    beginPlayerAttackWithGrip("one-handed");

    return;

}

if (choice.startsWith("👐 Two-Handed Attack")) {

    beginPlayerAttackWithGrip("two-handed");

    return;

}

if (choice === "🛡️ Defend") {

    playerDefend();

    return;

}

if (choice === "🎒 Inventory") {

    combatInventory();

    return;

}

if (choice === "❤️ Use First Aid Kit") {

    useCombatFirstAidKit();

    return;

}

if (choice === "❤️ Use Greater First Aid Kit") {

    useCombatGreaterFirstAidKit();

    return;

}

if (choice === "↩️ Back to Combat") {

    showPlayerCombatTurn();

    return;

}

if (choice === "🏃 Flee") {

    attemptFlee();

    return;

}

if (choice === "⚔️ Fight") {

    startCombat([
        createGreyhavenSeaCreature()
    ]);

    return;

}

if (choice === "▶️ Continue") {

    resolvePlayerDefence();

    return;

}

if (choice === "▶️ Roll Damage") {

    resolvePlayerDamage();

    return;

}

if (choice === "▶️ Roll Critical Damage") {

    resolvePlayerDamage();

    return;

}

if (choice === "▶️ End Turn") {

    advanceCombatTurn();

    return;

}

if (choice === "🏆 Victory") {

    showVictoryScreen();

    return;

}

if (choice === "🔎 Search the Creature") {

    searchGreyhavenSeaCreature();

    return;

}

if (choice === "↩️ Return to the Beach") {

    exploreGreyhavenBeach();

    return;

}

if (choice === "🛡️ Defend") {

    playerDefend();

    return;

}

if (choice === "🏃 Flee") {

    attemptFlee();

    return;

}

if (choice === "🔄 Retry") {

    retryCombat();

    return;

}

if (choice.startsWith("⚔️ Replace ") && choice.includes(" with ")) {
    
    const match = choice.match(
        /^⚔️ Replace (.+) with (.+)$/
    );
    
    if (match) {
        
        const newItemName = match[2];
        
        const item = playerInventory.find(
            item => item.name === newItemName
        );
        
        if (
            item &&
            replaceEquipment(
                item.id,
                "weapon"
            )
        ) {
            
            openCharacterSheet();
            
        }
        
    }
    
    return;
    
}

if (choice.startsWith("💍 Replace ") && choice.includes(" in Jewellery 1")) {

    const match = choice.match(
        /^💍 Replace (.+) with (.+) in Jewellery 1$/
    );

    if (match) {

        const newItemName = match[2];

        const item = playerInventory.find(
            item => item.name === newItemName
        );

        if (
            item &&
            replaceEquipment(
                item.id,
                "jewellery1"
            )
        ) {

            openCharacterSheet();

        }

    }

    return;

}

// =====================================
// ARMOUR EQUIP
// =====================================

if (choice.startsWith("🪖 Equip ") && choice.endsWith(" in Head")) {

    const itemName = choice
        .replace("🪖 Equip ", "")
        .replace(" in Head", "");

    const item = playerInventory.find(
        item => item.name === itemName
    );

    if (
        item &&
        equipItem(item.id, "head")
    ) {

        openCharacterSheet();

    }

    return;
}

if (choice.startsWith("🛡️ Equip ") && choice.endsWith(" in Body")) {

    const itemName = choice
        .replace("🛡️ Equip ", "")
        .replace(" in Body", "");

    const item = playerInventory.find(
        item => item.name === itemName
    );

    if (
        item &&
        equipItem(item.id, "body")
    ) {

        openCharacterSheet();

    }

    return;
}

if (choice.startsWith("🧤 Equip ") && choice.endsWith(" in Arms / Hands")) {

    const itemName = choice
        .replace("🧤 Equip ", "")
        .replace(" in Arms / Hands", "");

    const item = playerInventory.find(
        item => item.name === itemName
    );

    if (
        item &&
        equipItem(item.id, "arms")
    ) {

        openCharacterSheet();

    }

    return;
}

if (choice.startsWith("👢 Equip ") && choice.endsWith(" in Legs")) {

    const itemName = choice
        .replace("👢 Equip ", "")
        .replace(" in Legs", "");

    const item = playerInventory.find(
        item => item.name === itemName
    );

    if (
        item &&
        equipItem(item.id, "legs")
    ) {

        openCharacterSheet();

    }

    return;
}

// =====================================
// SHIELD / OFFHAND EQUIP
// =====================================

if (choice.startsWith("🛡️ Equip ") && choice.endsWith(" in Offhand")) {

    const itemName = choice
        .replace("🛡️ Equip ", "")
        .replace(" in Offhand", "");

    const item = playerInventory.find(
        item => item.name === itemName
    );

    if (
        item &&
        equipItem(item.id, "offhand")
    ) {

        openCharacterSheet();

    }

    return;
}

// =====================================
// ARMOUR REPLACEMENT
// =====================================

if (
    choice.startsWith("🪖 Replace ") &&
    choice.includes(" in Head")
) {

    const match = choice.match(
        /^🪖 Replace (.+) with (.+) in Head$/
    );

    if (match) {

        const item = playerInventory.find(
            item => item.name === match[2]
        );

        if (
            item &&
            replaceEquipment(item.id, "head")
        ) {

            openCharacterSheet();

        }

    }

    return;
}

if (
    choice.startsWith("🛡️ Replace ") &&
    choice.includes(" in Body")
) {

    const match = choice.match(
        /^🛡️ Replace (.+) with (.+) in Body$/
    );

    if (match) {

        const item = playerInventory.find(
            item => item.name === match[2]
        );

        if (
            item &&
            replaceEquipment(item.id, "body")
        ) {

            openCharacterSheet();

        }

    }

    return;
}

if (
    choice.startsWith("🧤 Replace ") &&
    choice.includes(" in Arms / Hands")
) {

    const match = choice.match(
        /^🧤 Replace (.+) with (.+) in Arms \/ Hands$/
    );

    if (match) {

        const item = playerInventory.find(
            item => item.name === match[2]
        );

        if (
            item &&
            replaceEquipment(item.id, "arms")
        ) {

            openCharacterSheet();

        }

    }

    return;
}

if (
    choice.startsWith("👢 Replace ") &&
    choice.includes(" in Legs")
) {

    const match = choice.match(
        /^👢 Replace (.+) with (.+) in Legs$/
    );

    if (match) {

        const item = playerInventory.find(
            item => item.name === match[2]
        );

        if (
            item &&
            replaceEquipment(item.id, "legs")
        ) {

            openCharacterSheet();

        }

    }

    return;
}

// =====================================
// SHIELD / OFFHAND REPLACEMENT
// =====================================

if (
    choice.startsWith("🛡️ Replace ") &&
    choice.includes(" in Offhand")
) {

    const match = choice.match(
        /^🛡️ Replace (.+) with (.+) in Offhand$/
    );

    if (match) {

        const item = playerInventory.find(
            item => item.name === match[2]
        );

        if (
            item &&
            replaceEquipment(item.id, "offhand")
        ) {

            openCharacterSheet();

        }

    }

    return;
}

if (choice.startsWith("⚔️ Equip ") && choice.endsWith(" as Weapon")) {

    const itemName = choice
        .replace("⚔️ Equip ", "")
        .replace(" as Weapon", "");

    const item = playerInventory.find(
        item => item.name === itemName
    );

    if (
        item &&
        equipItem(
            item.id,
            "weapon"
        )
    ) {

        openCharacterSheet();

    }

    return;

}

if (
    choice.startsWith("💍 Replace ") &&
    choice.includes(" in Jewellery 1")
) {
    
    const match = choice.match(
        /^💍 Replace (.+) with (.+) in Jewellery 1$/
    );
    
    if (match) {
        
        const newItemName = match[2];
        
        const item = playerInventory.find(
            item => item.name === newItemName
        );
        
        if (
            item &&
            replaceEquipment(
                item.id,
                "jewellery1"
            )
        ) {
            
            openCharacterSheet();
            
        }
        
    }
    
    return;
    
}

if (
    choice.startsWith("💍 Equip ") &&
    choice.includes(" in Jewellery 1")
) {

    const itemName = choice
        .replace("💍 Equip ", "")
        .replace(" in Jewellery 1", "");

    const item = playerInventory.find(
        item => item.name === itemName
    );

    if (
        item &&
        equipItem(
            item.id,
            "jewellery1"
        )
    ) {

        openCharacterSheet();

    }

    return;

}

if (
    choice.startsWith("💍 Replace ") &&
    choice.includes(" in Jewellery 2")
) {
    
    const match = choice.match(
        /^💍 Replace (.+) with (.+) in Jewellery 2$/
    );
    
    if (match) {
        
        const newItemName = match[2];
        
        const item = playerInventory.find(
            item => item.name === newItemName
        );
        
        if (
            item &&
            replaceEquipment(
                item.id,
                "jewellery2"
            )
        ) {
            
            openCharacterSheet();
            
        }
        
    }
    
    return;
    
}

if (
    choice.startsWith("💍 Equip ") &&
    choice.includes(" in Jewellery 2")
) {

    const itemName = choice
        .replace("💍 Equip ", "")
        .replace(" in Jewellery 2", "");

    const item = playerInventory.find(
        item => item.name === itemName
    );

    if (
        item &&
        equipItem(
            item.id,
            "jewellery2"
        )
    ) {

        openCharacterSheet();

    }

    return;

}

if (choice === "✖️ Cancel") {

    const panel =
        document.getElementById("equipOptionsPanel");

    if (panel) {

        panel.remove();

    }

    showChoices(previousChoices);

    return;

}

if (choice === "↩️ Back to Office") {

    visitHarbourmastersOffice();

    return;

}

if (choice === "📜 Read the Letter") {

    readHarbourmasterLetter();

    return;

}

if (choice === "🗺️ Examine the Charts") {

    examineHarbourmasterCharts();

    return;

}

if (choice === "📚 Examine the Shelves") {

    examineHarbourmasterShelves();

    return;

}

if (choice === "🏘️ Wander the Old Streets") {

    wanderOldStreets();

    return;

}

if (choice === "👀 Look Around the Old Streets") {

    lookAroundOldStreets();

    return;

}

if (choice === "↩️ Back to Wander the Old Streets") {

    wanderOldStreets();

    return;

}

if (choice === "↩️ Return to Explore the Streets") {

    exploreGreyhavenStreets();

    return;

}

if (choice === "⚔️ Visit The Sword and Anchor") {

    visitSwordAndAnchor();

    return;

}

if (choice === "⚔️ Browse Weapons") {

    browseSwordAndAnchorWeapons();

    return;

}

if (choice === "🗡️ Simple Dagger — 15 silver") {
    inspectSwordAndAnchorWeapon("dagger");
    return;
}

if (choice === "🗡️ Spear — 25 silver") {
    inspectSwordAndAnchorWeapon("spear");
    return;
}

if (choice === "🪓 Hand Axe — 30 silver") {
    inspectSwordAndAnchorWeapon("hand_axe");
    return;
}

if (choice === "⚔️ Short Sword — 35 silver") {
    inspectSwordAndAnchorWeapon("short_sword");
    return;
}

if (choice === "⚔️ Long Sword — 60 silver") {
    inspectSwordAndAnchorWeapon("long_sword");
    return;
}

if (choice === "🏴‍☠️ Fine Cutlass — 75 silver") {
    inspectSwordAndAnchorWeapon("fine_cutlass");
    return;
}

if (choice === "↩️ Back to Weapons") {
    browseSwordAndAnchorWeapons();
    return;
}

if (choice === "💰 Buy Spear") {

    purchaseSwordAndAnchorWeapon("spear");

    return;

}

if (choice === "💰 Buy Long Sword") {
    
    purchaseSwordAndAnchorWeapon("long_sword");
    
    return;
}

if (choice === "💰 Buy Fine Cutlass") {

    purchaseSwordAndAnchorWeapon("fine_cutlass");

    return;
}

if (choice === "💰 Buy Hand Axe") {

    purchaseSwordAndAnchorWeapon("hand_axe");

    return;
}

if (choice === "💰 Buy Simple Dagger") {

    purchaseSwordAndAnchorWeapon("dagger");

    return;
}

if (choice === "⚔️ Continue Shopping") {

    browseSwordAndAnchorWeapons();

    return;

}

if (choice === "💰 Sell Weapons") {

    sellSwordAndAnchorWeapons();

    return;

}

if (choice === "🛡️ Sell Armour") {

    sellArmour();

    return;

}

if (choice === "🏹 Sell Shields") {

    sellShields();

    return;

}

if (choice === "🏹 Sell Another Shield") {

    sellShields();

    return;

}

if (choice.startsWith("🏹 Sell ")) {

    const shieldName = choice
        .replace("🏹 Sell ", "")
        .split(" — ")[0];

    const shield = Object.values(armourDefinitions).find(
        item => item.name === shieldName &&
                item.equipSlot === "offhand"
    );

    if (shield) {

        sellShieldChoice(shield.id);

    }

    return;
}

if (choice === "💰 Sell Another Weapon") {

    sellSwordAndAnchorWeapons();

    return;
}

if (choice.startsWith("💰 Sell ")) {

    const armourName = choice
        .replace("💰 Sell ", "")
        .split(" — ")[0];

    const armour = Object.values(armourDefinitions).find(
        item => item.name === armourName
    );

    if (armour) {

        sellArmourChoice(armour.id);

    }

    return;
}

if (choice.startsWith("💰 Sell ")) {

    const weaponName = choice
        .replace("💰 Sell ", "")
        .split(" — ")[0];

    const weapon = Object.values(weaponDefinitions).find(
        weapon => weapon.name === weaponName
    );

    if (weapon) {

        sellSwordAndAnchorWeapon(weapon.id);

    }

    return;
}

if (choice === "↩️ Back to Selling") {

    sellSwordAndAnchorWeapons();

    return;
}

if (choice === "🔨 Ask about Repairs") {

    askSwordAndAnchorRepairs();

    return;
}

if (choice === "↩️ Back to The Sword & Anchor") {

    visitSwordAndAnchor();

    return;

}

if (choice === "💬 Speak with the Smith") {

    speakWithHarlan();

    return;
}

if (choice === "💬 Ask about his work") {

    harlanWork();

    return;

}

if (choice === "⚔️ Ask about the weapons") {

    harlanWeapons();

    return;

}

if (choice === "↩️ Back to Harlan") {

    speakWithHarlan();

    return;

}

if (choice === "↩️ Leave the Smithy") {

    wanderOldStreets();

    return;

}

if (choice === "🛡️ Visit The Padded Cuirass") {

    visitPaddedCuirassShop();

    return;
}

if (choice === "↩️ Leave") {

    wanderOldStreets();

    return;
}

if (choice === "🛡️ Browse Armour") {

    browsePaddedCuirassArmour();

    return;
}

if (choice === "🪖 Padded Cap — 15 silver") {

    inspectPaddedCuirassArmour("padded_cap");

    return;
}

if (choice === "🛡️ Padded Cuirass — 30 silver") {

    inspectPaddedCuirassArmour("padded_cuirass");

    return;
}

if (choice === "🧤 Padded Bracers — 15 silver") {

    inspectPaddedCuirassArmour("padded_bracers");

    return;
}

if (choice === "👢 Padded Greaves — 20 silver") {

    inspectPaddedCuirassArmour("padded_greaves");

    return;
}

if (choice === "↩️ Back to Armour") {

    browsePaddedCuirassArmour();

    return;
}

if (choice === "↩️ Back to The Padded Cuirass") {

    visitPaddedCuirassShop();

    return;
}

if (choice === "🛡️ Browse Shields") {

    browsePaddedCuirassShields();

    return;
}

if (choice === "🛡️ Round Shield — 25 silver") {

    inspectPaddedCuirassShield("round_shield");

    return;
}

if (choice === "🛡️ Tall Shield — 40 silver") {

    inspectPaddedCuirassShield("tall_shield");

    return;
}

if (choice === "↩️ Back to Shields") {

    browsePaddedCuirassShields();

    return;
}

if (choice.startsWith("💰 Buy ")) {

    const itemName = choice.replace("💰 Buy ", "");

    const item = Object.values(armourDefinitions).find(
        item => item.name === itemName
    );

    if (item) {

        purchasePaddedCuirassItem(item.id);

    }

    return;
}

if (choice === "🛡️ Continue Shopping") {

    visitPaddedCuirassShop();

    return;
}

if (choice === "🛡️ Sell Armour") {

    sellArmour();

    return;
}

if (choice === "🛡️ Sell Another Armour") {

    sellArmour();

    return;
}

if (choice.startsWith("🛡️ ") && choice.includes(" silver")) {

    const armourName = choice
        .replace("🛡️ ", "")
        .split(" — ")[0];

    const armour = Object.values(armourDefinitions).find(
        item => item.name === armourName
    );

    if (armour) {

        sellArmourChoice(armour.id);

    }

    return;
}

if (choice === "↩️ Back to Selling Armour") {

    sellArmour();

    return;
}

if (choice === "↩️ Leave The Padded Cuirass") {

    wanderOldStreets();

    return;
}

if (choice === "💬 Speak with the Shopkeeper") {

    talkToMara();

    return;
}

if (choice === "🛡️ Ask about the shop") {

    maraAskAboutShop();

    return;
}

if (choice === "↩️ Back to Mara") {

    talkToMara();

    return;
}

if (choice === "↩️ Back to The Padded Cuirass") {

    visitPaddedCuirassShop();

    return;
}

if (choice === "🔨 Ask how she got into the trade") {

    maraAskHowSheStarted();

    return;
}

if (choice === "🔨 Ask about her work") {

    maraAskAboutWork();

    return;
}

if (choice === "🛡️ Ask what makes good armour") {

    maraAskWhatMakesGoodArmour();

    return;
}

if (choice === "🧵 Ask about repairs") {

    maraAskAboutRepairs();

    return;
}
if (choice === "⚔️ Ask about armour") {
    
    maraAskAboutArmour();
    
    return;
}

if (choice === "⚔️ Ask about armour") {

    maraAskAboutArmour();

    return;
}

if (choice === "🏹 Ask about shields") {

    maraAskAboutShields();

    return;
}

if (choice === "👤 Ask about Mara") {

    maraAskAboutMara();

    return;
}

}
