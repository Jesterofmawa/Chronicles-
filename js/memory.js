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
    
    pip: metadata.pip || null,
    
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
    pip: memory.pip,
    topic: memory.topic,
    type: memory.type,
    importance: memory.importance
};

        })

        .sort((a, b) => {

            return b.importance - a.importance;

        });

}

function determineMemoryIntent(query) {

    const text = query.toLowerCase();


    // =========================
    // ITEM / OBJECT QUESTIONS
    // =========================

    const itemConcepts = [

        "item",
        "object",
        "thing",
        "anything useful",
        "useful",
        "pick up",
        "picked up",
        "pick",
        "picked",
        "take",
        "took",
        "carry",
        "carried",
        "weapon",
        "dagger",
        "key",
        "under the sand",
        "beneath the sand",
        "buried",
        "pulled out",
        "pull out",
        "between the rocks",
"in the rocks",
"between those rocks",
"inside the rocks",
"in that gap",
"what was in the gap"

    ];


    if (
        itemConcepts.some(concept =>
            text.includes(concept)
        )
    ) {

        return "item";

    }


    // =========================
    // DISCOVERY QUESTIONS
    // =========================

    const discoveryConcepts = [

        "find",
        "found",
        "discover",
        "discovered",
        "notice",
        "noticed",
        "see",
        "saw",
        "spot",
        "spotted",
        "come across",
        "what did we find"

    ];


    if (
        discoveryConcepts.some(concept =>
            text.includes(concept)
        )
    ) {

        return "discovery";

    }


    // =========================
    // INFORMATION QUESTIONS
    // =========================

    const informationConcepts = [

        "learn",
        "learned",
        "tell",
        "told",
        "said",
        "heard",
        "know",
        "knew",
        "information",
        "what did they say",
        "what was I told"

    ];


    if (
        informationConcepts.some(concept =>
            text.includes(concept)
        )
    ) {

        return "information";

    }


    // =========================
    // ACTION / EVENT QUESTIONS
    // =========================

    const actionConcepts = [

        "happen",
        "happened",
        "when did",
        "examined",
        "examining",
        "searched",
        "searching",
        "investigated",
        "investigating"

    ];


    if (
        actionConcepts.some(concept =>
            text.includes(concept)
        )
    ) {

        return "action";

    }


    return null;

}


function searchMemories(query) {

    const text = query
        .toLowerCase()
        .replace(/[^\w\s]/g, "");


    const words = text
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
                "from",
                "anything",
                "something"
            ].includes(word)
        );


    const intent = determineMemoryIntent(query);


    let results = recallStoryMemories()

        .map(memory => {

            let score = 0;


            const searchableText = (

                memory.key + " " +
                memory.value + " " +
                memory.topic + " " +
                memory.type

            ).toLowerCase();


            words.forEach(word => {

                if (searchableText.includes(word)) {

                    score += 1;

                }

            });


            // Topic match

            if (
                memory.topic &&
                words.some(word =>
                    memory.topic.toLowerCase().includes(word)
                )
            ) {

                score += 3;

            }


            // Intent match

            if (
                intent &&
                memory.type === intent
            ) {

                score += 4;

            }


            // Additional type relevance

            if (
                intent === "item" &&
                memory.type === "item"
            ) {

                score += 2;

            }


            if (
                intent === "discovery" &&
                memory.type === "discovery"
            ) {

                score += 2;

            }


            if (
                intent === "information" &&
                memory.type === "information"
            ) {

                score += 2;

            }


            // Importance provides a small tie-breaker.

            score += memory.importance * 0.25;


            return {
                ...memory,
                score: score
            };

        })


        .filter(memory => memory.score > 0)


        .sort((a, b) => b.score - a.score);


    // =====================================
    // REMOVE DUPLICATE MEMORY CONTENT
    // =====================================

    const seen = new Set();

    results = results.filter(memory => {

        const normalised = memory.value
            .toLowerCase()
            .replace(/\s+/g, " ")
            .trim();

        if (seen.has(normalised)) {

            return false;

        }

        seen.add(normalised);

        return true;

    });


    // =====================================
    // LIMIT RESULTS
    // =====================================

    const broadQuestion =
        text.includes("what did we find") ||
        text.includes("what did we discover") ||
        text.includes("what did we learn") ||
        text.includes("what happened") ||
        text.includes("what did you write");


    const resultLimit = broadQuestion ? 4 : 2;


    return results.slice(0, resultLimit);

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