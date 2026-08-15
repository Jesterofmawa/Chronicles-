function showChoices(choices) {

    let html = "";

    for (let i = 0; i < choices.length; i++) {

        html += `
<button onclick="choose('${choices[i]}')">
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

}