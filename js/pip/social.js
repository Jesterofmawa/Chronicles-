function socialBrain(message) {

    let text = message.trim().toLowerCase();

    if (text === "hello") {

        return handleGreeting();

    }

    if (text === "hi") {

        return handleGreeting();

    }

    if (text === "hey") {

        return handleGreeting();

    }

    if (text === "thanks" ||
        text === "thank you") {

        return "🐿️ Pip smiles warmly.<br><br>\"You're very welcome.\"";

    }

    if (text === "bye" ||
        text === "goodbye") {

        return "🐿️ Pip closes the Chronicle with a gentle smile.<br><br>\"Until next time, traveller.\"";

    }

    return null;

}