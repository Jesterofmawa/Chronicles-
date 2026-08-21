function exploreGreyhavenBeach() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <p>
                The beach stretches along the coast beyond Greyhaven.
            </p>

            <p>
                There is plenty here that might be worth investigating.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to the Beach"
    ]);

}