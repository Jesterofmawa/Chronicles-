let dialogue = [];

let dialogueIndex = 0;

let dialogueName = null;

let revealNameAt = null;

let currentCharacter = "pip";


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

    currentCharacter = options.character || "pip";

    document.getElementById("continueButton").innerHTML =
        "Next";

    document.getElementById("continueButton").onclick =
        nextDialogue;

// Set character name

const nameElement =
    document.getElementById("pipName");

if (dialogueName) {

    nameElement.innerHTML =
        dialogueName;

}

nameElement.classList.remove("storyteller-name");

if (currentCharacter === "storyteller") {

    nameElement.classList.add("storyteller-name");

}

    // Pip setup

    if (currentCharacter === "pip") {

        document.getElementById("pipName").style.display =
            "none";

        document.getElementById("storytellerPortrait").style.display =
            "none";

    }

    // Storyteller setup

    if (currentCharacter === "storyteller") {

        document.getElementById("pipName").style.display =
            "none";

        document.getElementById("pipWriting").style.display =
            "none";

        document.getElementById("pipPortrait").style.display =
            "none";

        document.getElementById("storytellerPortrait").style.display =
            "block";

        document.getElementById("storytellerPortrait").src =
            "images/storyteller-forward.png";

    }


    showDialogue();

}


function showDialogue() {

    document.getElementById("dialogueText").innerHTML =
        dialogue[dialogueIndex];


    // =========================
    // PIP
    // =========================

    if (currentCharacter === "pip") {

        const pipWriting =
            document.getElementById("pipWriting");

        const pipPortrait =
            document.getElementById("pipPortrait");


        if (dialogueIndex === 0) {

            pipWriting.style.display =
                "block";

            pipPortrait.style.display =
                "none";

        } else {

            pipWriting.style.display =
                "none";

            pipPortrait.style.display =
                "block";


            let portrait =
                pipExpressions.default;

            const currentLine =
                dialogue[dialogueIndex];


            if (currentLine === "\"Oh!\"") {

                portrait =
                    pipExpressions.surprised;

            }

            else if (currentLine === "\"Hello!\"") {

                portrait =
                    pipExpressions.happy;

            }

            else if (
                currentLine.includes(
                    "It's nice to see a new face"
                )
            ) {

                portrait =
                    pipExpressions.happy;

            }

            else if (
                currentLine.includes(
                    "I'm a Chronicler"
                )
            ) {

                portrait =
                    pipExpressions.thoughtful;

            }

            else if (
                currentLine.includes(
                    "I've still got rather a lot to learn"
                )
            ) {

                portrait =
                    pipExpressions.thoughtful;

            }

            else if (
                currentLine.includes(
                    "Every town has a tale"
                )
            ) {

                portrait =
                    pipExpressions.thoughtful;

            }

            else if (
                currentLine.includes(
                    "Every road remembers"
                )
            ) {

                portrait =
                    pipExpressions.thoughtful;

            }

            else if (
                currentLine.includes(
                    "Every person has a story worth telling"
                )
            ) {

                portrait =
                    pipExpressions.happy;

            }

            else if (
                currentLine.includes(
                    "Interesting places"
                )
            ) {

                portrait =
                    pipExpressions.happy;

            }

            else if (
                currentLine.toLowerCase().includes(
                    "recipes"
                )
            ) {

                portrait =
                    pipExpressions.amused;

            }

            else if (
                currentLine.includes(
                    "Probably ask far too many questions"
                )
            ) {

                portrait =
                    pipExpressions.cheeky;

            }

            else if (
                currentLine.includes(
                    "borrow one of my lucky dice"
                )
            ) {

                portrait =
                    pipExpressions.cheeky;

            }

            else if (
                currentLine.includes(
                    "The Storyteller"
                )
            ) {

                portrait =
                    pipExpressions.thoughtful;

            }

            else if (
                currentLine.includes(
                    "help uncover a few stories of our own"
                )
            ) {

                portrait =
                    pipExpressions.happy;

            }

            else if (
                currentLine.includes(
                    "There are an awful lot of stories waiting out there"
                )
            ) {

                portrait =
                    pipExpressions.thoughtful;

            }

            else if (
                currentLine.includes(
                    "I suppose we'd better go and find one"
                )
            ) {

                portrait =
                    pipExpressions.happy;

            }

            else if (
                currentLine.includes(
                    "Shall we?"
                )
            ) {

                portrait =
                    pipExpressions.happy;

            }


            // Smooth expression transition

            if (pipPortrait.src.endsWith(portrait)) {

                pipPortrait.style.opacity =
                    "1";

            } else {

                pipPortrait.style.opacity =
                    "0";

                setTimeout(() => {

                    pipPortrait.src =
                        portrait;

                    pipPortrait.style.opacity =
                        "1";

                }, 100);

            }

        }

    }


    // =========================
    // STORYTELLER
    // =========================

    if (currentCharacter === "storyteller") {
    
    const storytellerPortrait =
        document.getElementById("storytellerPortrait");
    
    storytellerPortrait.style.display =
        "block";
    
    let storytellerImage =
        "images/storyteller-forward.png";
    
    const currentLine =
        dialogue[dialogueIndex];
    
    
    if (
        currentLine.includes(
            "That was a most generous introduction"
        )
    ) {
        
        storytellerImage =
            "images/storyteller-slight-turn.png";
        
    }
    
    else if (
        currentLine.includes(
            "People call me the Storyteller"
        )
    ) {
        
        storytellerImage =
            "images/storyteller-left.png";
        
    }
    
    else if (
        currentLine.includes(
            "I suppose that is as good a name as any"
        )
    ) {
        
        storytellerImage =
            "images/storyteller-right.png";
        
    }
    
    else if (
        currentLine.includes(
            "What you hear"
        )
    ) {
        
        storytellerImage =
            "images/storyteller-slight-turn.png";
        
    }
    
    else if (
        currentLine.includes(
            "The places you visit"
        )
    ) {
        
        storytellerImage =
            "images/storyteller-left.png";
        
    }
    
    else if (
        currentLine.includes(
            "But what you do"
        )
    ) {
        
        storytellerImage =
            "images/storyteller-dark-left.png";
        
    }
    
    else if (
        currentLine.includes(
            "That is yours to decide"
        )
    ) {
        
        storytellerImage =
            "images/storyteller-right.png";
        
    }
    
    else if (
        currentLine.includes(
            "Pip will walk beside you"
        )
    ) {
        
        storytellerImage =
            "images/storyteller-forward.png";
        
    }
    
    else if (
        currentLine.includes(
            "I will tell the tale"
        )
    ) {
        
        storytellerImage =
            "images/storyteller-slight-turn.png";
        
    }
    
    else if (
        currentLine.includes(
            "And you"
        )
    ) {
        
        storytellerImage =
            "images/storyteller-dark-forward.png";
        
    }
    
    else if (
        currentLine.includes(
            "...will live it"
        )
    ) {
        
        storytellerImage =
            "images/storyteller-dark-forward.png";
        
    }
    
    
    // Smooth portrait transition
    
    if (
        storytellerPortrait.src.endsWith(
            storytellerImage
        )
    ) {
        
        storytellerPortrait.style.opacity =
            "1";
        
    } else {
        
        storytellerPortrait.style.opacity =
            "0";
        
        setTimeout(() => {
            
            storytellerPortrait.src =
                storytellerImage;
            
            storytellerPortrait.style.opacity =
                "1";
            
        }, 100);
        
    }
    
}

    // =========================
    // FINAL BUTTON
    // =========================

    if (
        dialogueIndex ===
        dialogue.length - 1
    ) {

        if (currentCharacter === "pip") {

            document.getElementById(
                "continueButton"
            ).innerHTML =
                "Meet the Storyteller";

            document.getElementById(
                "continueButton"
            ).onclick =
                meetStoryteller;

        }


        if (currentCharacter === "storyteller") {

            document.getElementById(
                "continueButton"
            ).innerHTML =
                "📖 Begin Our Adventure";

            document.getElementById(
                "continueButton"
            ).onclick =
                beginAdventure;

        }

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


    if (
    dialogueIndex <
    dialogue.length
) {

    showDialogue();


    // Give the Storyteller's final line
    // a little room to breathe

    if (
        currentCharacter === "storyteller" &&
        dialogueIndex === dialogue.length - 1
    ) {

        const continueButton =
            document.getElementById("continueButton");

        continueButton.style.display =
            "none";


        setTimeout(() => {

            continueButton.innerHTML =
                "📖 Begin Our Adventure";

            continueButton.onclick =
                beginAdventure;

            continueButton.style.display =
                "block";

        }, 900);

    }

}

}
