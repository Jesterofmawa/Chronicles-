function beginGame() {

    document.getElementById("titleScreen").style.display = "none";

    document.getElementById("pipIntro").style.display = "block";

    startDialogue(pipIntro, {
    name: "Pip",
    revealNameAt: 7
});

}

function beginAdventure() {

    document.getElementById("pipIntro").style.display = "none";
    
    document.getElementById("game").style.display = "block";

}