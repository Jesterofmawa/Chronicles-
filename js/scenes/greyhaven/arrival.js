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

function lookAroundGreyhaven() {

    document.getElementById("story").innerHTML = `
        <div class="story-panel">

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

        </div>
    `;

    showChoices([
        "⚓ Examine the Old Harbour",
        "🚪 Enter Greyhaven",
        "🐿️ Ask Pip about the ruins"
    ]);

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