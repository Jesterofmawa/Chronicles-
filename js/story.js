function startStory() {

    document.getElementById("story").innerHTML = `
<div class="story-panel">

<h2>📜 The Storyteller</h2>

<p>The harbour is strangely quiet. A lone pirate watches you from the end of the pier. His hand rests on the hilt of his cutlass.</p>

<p><strong>🐿️ Pip whispers:</strong><br>
"What do you think we should do?"</p>

</div>
`;

    showChoices([
        "⚔️ Attack",
        "🗣️ Talk",
        "👀 Look Around",
        "🏃 Run"
    ]);

}

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

}

function lookAroundGreyhaven() {

    document.getElementById("story").innerHTML = `
        <div class="story-panel">

            <p>
                The town reveals itself slowly.
            </p>

            <p>
                Greyhaven stretches along the coast below you, its buildings packed tightly together beneath weathered roofs.
            </p>

            <p>
                The harbour dominates the waterfront. Ships sit shoulder to shoulder along the piers, their ropes creaking softly as they sway.
            </p>

            <p>
                Farther along the coast, a steep path climbs toward a windswept overlook.
            </p>

            <p>
                To the other side of the harbour, dark warehouses stand in a row beside the water.
            </p>

            <p>
                Somewhere amongst the noise of the harbour, a bell rings once.
            </p>

            <p>
                Then falls silent.
            </p>

        </div>
    `;

    showChoices([
        "👀 Look Around",
        "🚪 Enter Greyhaven",
        "📖 Talk with Pip"
    ]);

}

function enterGreyhaven() {

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

function talkWithPip() {

    document.getElementById("pip").innerHTML = `
        <div class="pip-panel">

            <p>
                <strong>Pip</strong>
            </p>

            <p>
                "Greyhaven? Oh, I've got plenty written down about this place."
            </p>

        </div>
    `;

}