function memoryBrain(message) {

    if (message.startsWith("My name is ")) {

        return handleName(message);

    }

    return null;

}


let shortTerm = {};

let longTerm = {};


// =========================
// SHORT-TERM MEMORY
// =========================

function rememberShortTerm(key, value) {

    shortTerm[key] = value;

}


// =========================
// LONG-TERM MEMORY
// =========================

function rememberLongTerm(key, value, metadata = {}) {

    longTerm[key] = {

        value: value,

        topic: metadata.topic || null,

        type: metadata.type || null,

        importance: metadata.importance || 1

    };

}


// =========================
// RECALL
// =========================

function recall(key) {

    if (shortTerm[key] !== undefined) {

        return shortTerm[key];

    }

    if (longTerm[key] !== undefined) {

        return longTerm[key].value;

    }

    return "I don't remember that yet.";

}

// =========================
// MEMORY SEARCH
// =========================

function recallStoryMemories() {

    return Object.entries(longTerm)

        .filter(([key, memory]) => {

            return memory.topic &&
                   memory.type &&
                   memory.type !== "name";

        })

        .map(([key, memory]) => {

            return {
                key: key,
                value: memory.value,
                topic: memory.topic,
                type: memory.type,
                importance: memory.importance
            };

        })

        .sort((a, b) => {

            return b.importance - a.importance;

        });

}


function searchMemories(query) {

    const words = query
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .split(/\s+/)
        .filter(word =>
            word.length > 2 &&
            ![
                "what",
                "did",
                "you",
                "write",
                "down",
                "the",
                "was",
                "were",
                "have",
                "has",
                "had",
                "find",
                "found",
                "our",
                "your",
                "about",
                "this",
                "that",
                "with",
                "from"
            ].includes(word)
        );


    return recallStoryMemories().filter(memory => {

        const searchableText = (

            memory.key + " " +
            memory.value + " " +
            memory.topic + " " +
            memory.type

        ).toLowerCase();


        return words.some(word =>
            searchableText.includes(word)
        );

    });

}

// =========================
// GENERAL MEMORY
// =========================

function remember(key, value, type) {

    if (type === "name") {

        rememberLongTerm(key, value, {

            topic: "player",

            type: "name",

            importance: 5

        });

    }

    else {

        rememberShortTerm(key, value);

    }

}