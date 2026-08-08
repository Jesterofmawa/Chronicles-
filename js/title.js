function beginGame() {

    document.getElementById("titleScreen").style.display = "none";

    document.getElementById("pipIntro").style.display = "block";

    startDialogue(pipIntro, {
    name: "Pip",
    revealNameAt: 7,
    character: "pip"
});

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