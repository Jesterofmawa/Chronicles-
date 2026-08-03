let currentBook = null;
let currentSection = "SUMMARY";

let libraryIndex = {};

let librarySession = {

    book: null,

    section: null

};

async function loadLibraryIndex() {

    try {

        const response = await fetch("GreatLibrary/index.json");


        libraryIndex = await response.json();


        for (let topic in libraryIndex) {

            let summary = await readSection(
                libraryIndex[topic].path,
                "SUMMARY"
            );

            libraryBooks[topic] = summary;

        }

        console.log("📚 Great Library loaded.");

    }

    catch (error) {

        console.error("Failed to load Great Library:", error);

    }

}

function findBook(question) {
    
    let text = question.toLowerCase();
    
    
    for (let topic in libraryIndex) {
        
        
        let book = libraryIndex[topic];
        
        if (!book.path) {
            continue;
        }
        
        if (text.includes(topic)) {
            
            return topic;
            
        }
        
    }
    return null;
    
}

async function readBook(path) {

    try {

        const response = await fetch("GreatLibrary/" + path);

        return await response.text();

    }

    catch (error) {

        return "🐿️ Pip couldn't find that book.";

    }

}

async function readSection(path, section) {

    const book = await readBook(path);

    const startTag = "[" + section + "]";

    const start = book.indexOf(startTag);

    if (start === -1) {

        return "🐿️ Pip couldn't find that page.";

    }

    const text = book.substring(start + startTag.length);

    const nextSection = text.match(/\[[A-Z ]+\]/);

    if (nextSection) {

        return text.substring(0, nextSection.index).trim();

    }

    return text.trim();

}

let libraryBooks = {};

function askLibrary(question) {

    let text = question.toLowerCase();

let section = "SUMMARY";

if (text.includes("founding")) {
    section = "FOUNDING";
}

    for (let topic in libraryBooks) {

        let book = libraryIndex[topic];

        if (!book || !book.path) {
            continue;
        }

        if (text.includes(topic)) {

            return {
                found: true,
                answer:
                    "📚 Pip adjusts his tiny satchel." +
                    "<br><br>" +
                    "\"I think I've seen a book about that...\"" +
                    "<br><br>" +
                    "He disappears into the Great Library." +
                    "<br><br>" +
                    "🐿️ \"Aha! Here it is!\"" +
                    "<br><br>" +
                    libraryBooks[topic]
            };

        }

        if (book.aliases) {

            for (let alias of book.aliases) {

                if (text.includes(alias.toLowerCase())) {

                    return {
                        found: true,
                        answer:
                            "📚 Pip adjusts his tiny satchel." +
                            "<br><br>" +
                            "\"I think I've seen a book about that...\"" +
                            "<br><br>" +
                            "He disappears into the Great Library." +
                            "<br><br>" +
                            "🐿️ \"Aha! Here it is!\"" +
                            "<br><br>" +
                            libraryBooks[topic]
                    };

                }

            }

        }

    }

    return {
        found: false,
        answer:
            "📚 Pip adjusts his tiny satchel." +
            "<br><br>" +
            "\"I don't know that one...\"" +
            "<br><br>" +
            "He scampers into the Great Library between towering shelves." +
            "<br><br>" +
            "After a few moments he returns, looking slightly embarrassed." +
            "<br><br>" +
            "🐿️ \"I'm afraid I couldn't find anything just yet.\""
    };

}