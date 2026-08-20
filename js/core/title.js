function beginGame() {

    startFrontEndMusic();

    document.getElementById("titleScreen").style.display = "none";

    document.getElementById("mainMenu").style.display = "flex";

}

function startNewGame() {

    const menu = document.getElementById("mainMenu");
    const opening = document.getElementById("storyOpening");
    const openingText = document.querySelector(".story-opening-text");
    const pip = document.getElementById("pipIntro");

    // Fade the music over 3 seconds
    fadeOutFrontEndMusic(3000);


    // Fade the menu away
    menu.animate(
        [
            { opacity: 1 },
            { opacity: 0 }
        ],
        {
            duration: 3000,
            easing: "ease",
            fill: "forwards"
        }
    );


    // Remove the menu after the fade
    setTimeout(() => {

        menu.style.display = "none";

    }, 3000);


    // Reveal the opening sentence once the menu is gone
    setTimeout(() => {

        opening.style.display = "flex";

    }, 3000);


    // Give the sentence time to appear and breathe,
    // then fade it away
    setTimeout(() => {

        openingText.animate(
            [
                { opacity: 1 },
                { opacity: 0 }
            ],
            {
                duration: 1000,
                easing: "ease",
                fill: "forwards"
            }
        );

    }, 6500);


// Once the sentence has faded away, begin the transition to the library
setTimeout(() => {

    opening.style.display = "none";

    pip.style.display = "block";

    // Keep Pip's content hidden while the library appears
    pip.classList.add("pip-waiting");

    startDialogue(pipIntro, {
        name: "Pip",
        revealNameAt: 7,
        character: "pip"
    });

    // Reveal Pip once the library transition is complete
    setTimeout(() => {

        pip.classList.remove("pip-waiting");

    }, 1250);

}, 7500);

}

function beginAdventure() {

    document.getElementById("pipIntro").style.display = "none";

    document.getElementById("game").style.display = "block";

    startGreyhaven();

}

function meetStoryteller() {

    startDialogue(storytellerIntro, {
        name: "The Storyteller",
        revealNameAt: 2,
        character: "storyteller"
    });

}

function showFutureFeature(featureName) {

    document.getElementById("mainMenu").style.display = "none";

    document.getElementById("futureFeatureScreen").style.display = "flex";

    document.getElementById("futureFeatureTitle").textContent = featureName;

}


function returnToMenu() {

    document.getElementById("futureFeatureScreen").style.display = "none";

    document.getElementById("mainMenu").style.display = "flex";

}