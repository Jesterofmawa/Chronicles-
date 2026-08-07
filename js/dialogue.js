let dialogue = [];

let dialogueIndex = 0;

function startDialogue(lines) {

    dialogue = lines;

    dialogueIndex = 0;

    showDialogue();

}

function showDialogue() {

    document.getElementById("dialogueText").innerHTML =
        dialogue[dialogueIndex];

}

function nextDialogue() {

    dialogueIndex++;

    if (dialogueIndex < dialogue.length) {

        showDialogue();

    }

}