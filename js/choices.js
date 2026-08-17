let activeShop = null;

function showChoices(choices) {

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

}