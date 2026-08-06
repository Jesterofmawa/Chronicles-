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