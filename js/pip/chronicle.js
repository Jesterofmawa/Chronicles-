function chronicleBrain(message) {

    if (!looksLikeANote(message)) {

        return null;

    }

    return handleNote(message);

}