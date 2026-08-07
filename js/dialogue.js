let dialogue = [];

let dialogueIndex = 0;

function startDialogue(lines) {

    dialogue = lines;
    dialogueIndex = 0;

    document.getElementById("continueButton").innerHTML = "Next";
    document.getElementById("continueButton").onclick = nextDialogue;

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

    if (dialogueIndex < dialogue.length) {

        showDialogue();

    }

}