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

    browseEquipment();

    return;

}

if (choice === "↩️ Back to the Shop") {

    visitShipSupplyShop();

    return;

}

if (choice === "🏮 Browse Supplies") {

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

if (choice === "🛢️ Lamp Oil — 2 silver") {

    buyLampOil();

    return;

}

if (choice === "🍞 Travel Rations — 3 silver") {

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

if (choice === "🧂 Salt Packet — 1 silver") {

    buySalt();

    return;

}

if (choice === "↩️ Back to Supplies") {

    browseSupplies();

    return;

}

}