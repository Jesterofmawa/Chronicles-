let dialogue = [];

let dialogueIndex = 0;

let dialogueName = null;

let revealNameAt = null;

function startDialogue(lines, options = {}) {

    dialogue = lines;

    dialogueIndex = 0;

    dialogueName = options.name || null;
    revealNameAt = options.revealNameAt ?? null;

    document.getElementById("continueButton").innerHTML =
        "Next";

    document.getElementById("continueButton").onclick =
        nextDialogue;

    if (dialogueName) {

        document.getElementById("pipName").innerHTML =
            dialogueName;

        document.getElementById("pipName").style.display =
            "none";

    }

    showDialogue();

}

function showDialogue() {

    document.getElementById("dialogueText").innerHTML =
        dialogue[dialogueIndex];

    if (dialogueIndex === dialogue.length - 1) {

        document.getElementById("continueButton").innerHTML =
            "📖 Begin Our Adventure";

        document.getElementById("continueButton").onclick =
            beginAdventure;

    }

}

function nextDialogue() {

    dialogueIndex++;

    if (
        dialogueName &&
        dialogueIndex === revealNameAt
    ) {

        document.getElementById("pipName").style.display =
            "block";

    }

    if (dialogueIndex < dialogue.length) {

        showDialogue();

    }

}