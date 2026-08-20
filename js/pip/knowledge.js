function knowledgeBrain(message) {

    let text = message.trim();

    if (!text.endsWith("?")) {

        return null;

    }

    return handleQuestion(text);

}