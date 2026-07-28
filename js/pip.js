let actions = [

    "📖 Pip eagerly flips open the Chronicle.",
    "🐿️ Pip's tail swishes excitedly as he opens his journal.",
    "🍃 Pip brushes a leaf from the cover of the Chronicle.",
    "✏️ Pip quickly sharpens his pencil.",
    "📚 Pip hugs the Chronicle before opening it."

];

let writingActions = [

    "✏️ Scratch... scratch... scratch...",
    "✏️ Pip's pencil dances across the page.",
    "✏️ Pip carefully dots the final full stop.",
    "✏️ Tiny scribbles quickly fill another page."

];

let proudMoments = [

    "🐿️ Pip smiles proudly.",
    "🐿️ Pip beams with excitement.",
    "🐿️ Pip gives a happy little nod.",
    "🐿️ Pip hugs the Chronicle for a moment."

];

let responses = [

    "I'll remember that.",
    "Into the Chronicle it goes!",
    "Ooh! That's worth writing down.",
    "I'll keep that safe.",
    "Another page filled."

];

function handleName(message) {

    let name = message.replace("My name is ", "");

    let oldName = recall("playerName");

    let reply;

    if (oldName === "I don't remember that yet.") {

        remember("playerName", name, "name");

        reply = "It's wonderful to meet you, " + name + "!";

    }
    else if (oldName === name) {

        reply = "Of course! I remember you, " + name + "!";

    }
    else {

        reply = "Hmm... I thought your name was " +
            oldName +
            ". Have I got something muddled?";

    }

    return reply;

}

function handleGreeting(message) {
    
    let name = recall("playerName");
    
    if (name === "I don't remember that yet.") {
        
        return "Hello! It's lovely to see you again.";
        
    }
    
    return "Hello, " + name + "! It's lovely to see you again.";
    
}

function handleQuestion(message) {

    let question = message.trim().toLowerCase();

    if (question === "what's my name?" ||
        question === "what is my name?") {

        let name = recall("playerName");

        if (name === "I don't remember that yet.") {

            return "You haven't told me your name yet.";

        }

        return "Your name is " + name + ".";

    }

    if (question === "do you remember me?") {

        let name = recall("playerName");

        if (name === "I don't remember that yet.") {

            return "I don't think we've met yet.";

        }

        return "Of course! I remember you, " + name + ".";

    }

    return "I'm not sure how to answer that yet.";

}

function handleNote(message) {

    remember("note", message, "note");

    return buildChronicleEntry(message);

}

function buildChronicleEntry(message) {

    let randomAction =
        Math.floor(Math.random() * actions.length);

    let randomWriting =
        Math.floor(Math.random() * writingActions.length);

    let randomProud =
        Math.floor(Math.random() * proudMoments.length);

    return actions[randomAction] +

        "<br><br>" +

        writingActions[randomWriting] +

        "<br><br>" +

        proudMoments[randomProud] +

        "<br><br><strong>\"Our newest memory...\"</strong>" +

        "<br><br>\"" + message + "\"" +

        "<br><br>📚 <strong>The Chronicle grows!</strong>";

}

function think(message) {

    if (message.startsWith("My name is ")) {

        return handleName(message);

    }

    if (message.trim().toLowerCase() === "hello") {

        return handleGreeting(message);

    }

    if (message.trim().endsWith("?")) {

        return handleQuestion(message);

    }

    return handleNote(message);

}