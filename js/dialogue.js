let dialogue = [];

let dialogueIndex = 0;

let dialogueName = null;

let revealNameAt = null;

const pipExpressions = {
    default: "images/pip.png",
    surprised: "images/pip-surprised.png",
    amused: "images/pip-amused.png",
    cheeky: "images/pip-cheeky.png",
    happy: "images/pip-happy.png",
    thoughtful: "images/pip-thoughtful.png"
};

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

const pipWriting = document.getElementById("pipWriting");
const pipPortrait = document.getElementById("pipPortrait");

if (dialogueIndex === 0) {

    pipWriting.style.display = "block";
    pipPortrait.style.display = "none";

} else {

    pipWriting.style.display = "none";
    pipPortrait.style.display = "block";

}

let portrait = pipExpressions.default;

const currentLine = dialogue[dialogueIndex];

if (currentLine === "\"Oh!\"") {

    portrait = pipExpressions.surprised;

}

else if (currentLine === "\"Hello!\"") {

    portrait = pipExpressions.happy;

}

else if (currentLine.includes("It's nice to see a new face")) {

    portrait = pipExpressions.happy;

}

else if (currentLine.includes("I'm a Chronicler")) {

    portrait = pipExpressions.thoughtful;

}

else if (currentLine.includes("I've still got rather a lot to learn")) {

    portrait = pipExpressions.thoughtful;

}

else if (currentLine.includes("Every town has a tale")) {

    portrait = pipExpressions.thoughtful;

}

else if (currentLine.includes("Every road remembers")) {

    portrait = pipExpressions.thoughtful;

}

else if (currentLine.includes("Every person has a story worth telling")) {

    portrait = pipExpressions.happy;

}

else if (currentLine.includes("Interesting places")) {

    portrait = pipExpressions.happy;

}

else if (currentLine.toLowerCase().includes("recipes")) {

    portrait = pipExpressions.amused;

}

else if (currentLine.includes("Probably ask far too many questions")) {

    portrait = pipExpressions.cheeky;

}

else if (currentLine.includes("borrow one of my lucky dice")) {

    portrait = pipExpressions.cheeky;

}

else if (currentLine.includes("The Storyteller")) {

    portrait = pipExpressions.thoughtful;

}

else if (currentLine.includes("help uncover a few stories of our own")) {

    portrait = pipExpressions.happy;

}

else if (currentLine.includes("There are an awful lot of stories waiting out there")) {

    portrait = pipExpressions.thoughtful;

}

else if (currentLine.includes("I suppose we'd better go and find one")) {

    portrait = pipExpressions.happy;

}

else if (currentLine.includes("Shall we?")) {

    portrait = pipExpressions.happy;

}

    // Update Pip's portrait
    if (dialogueIndex > 0) {
    
    if (pipPortrait.src.endsWith(portrait)) {
        
        pipPortrait.style.opacity = "1";
        
    } else {
        
        pipPortrait.style.opacity = "0";
        
        setTimeout(() => {
            
            pipPortrait.src = portrait;
            pipPortrait.style.opacity = "1";
            
        }, 100);
        
    }
    
}

const newPortrait = portrait;

if (pipPortrait.src.endsWith(newPortrait)) {
    
    // Same expression, so don't animate
    pipPortrait.style.opacity = "1";
    
} else {
    
    // Expression is changing
    pipPortrait.style.opacity = "0";
    
    setTimeout(() => {
        
        pipPortrait.src = newPortrait;
        pipPortrait.style.opacity = "1";
        
    }, 100);
    
}


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