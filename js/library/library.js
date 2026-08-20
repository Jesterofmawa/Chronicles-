let currentBook = null;
let currentSection = "SUMMARY";

let libraryIndex = {};

librarySession = {

    book: null,

    pages: [],

    currentPage: 0

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
    
    if (!book || !book.path) {
        continue;
    }

        // Check the book name
        if (text.includes(topic)) {
            return topic;
        }

        // Check aliases
        if (book.aliases) {

            for (let alias of book.aliases) {

                if (text.includes(alias.toLowerCase())) {
                    return topic;
                }

            }

        }

        // Check contains
        if (book.contains) {

            for (let item of book.contains) {

                if (text.includes(item.toLowerCase())) {
                    return topic;
                }

            }

        }

    }

    return null;

}

function findSection(question, topic) {

    let text = question.toLowerCase();

    let book = libraryIndex[topic];

    if (!book || !book.contains) {
        return "SUMMARY";
    }

    for (let item of book.contains) {

        if (text.includes(item.toLowerCase())) {
            return item.toUpperCase();
        }

    }

    return "SUMMARY";

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

function getHeadings(markdown) {

    let headings = [];

    let lines = markdown.split("\n");

    for (let line of lines) {

        line = line.trim();

        if (line.startsWith("[") && line.endsWith("]")) {

            headings.push(
                line.substring(1, line.length - 1)
            );

        }

    }

    return headings;

}

function normalizeHeading(text) {

    return text
        .toLowerCase()
        .replace(/\[|\]/g, "")
        .replace(/^the\s+/i, "")
        .replace(/^a\s+/i, "")
        .replace(/^an\s+/i, "")
        .replace(/'/g, "")
        .replace(/\s+/g, " ")
        .trim();

}

async function readSection(path, heading) {

    let text = await readBook(path);

    let lines = text.split("\n");

    let reading = false;

    let result = [];

    for (let line of lines) {

        line = line.trim();

        if (normalizeHeading(line) === normalizeHeading(heading)) {

    reading = true;

    continue;

}

        if (reading &&
            line.startsWith("[") &&
            line.endsWith("]")) {

            break;

        }

        if (reading) {

            result.push(line);

        }

    }

    if (result.length === 0) {

        return "🐿️ Pip couldn't find that page.";

    }

    return result.join("<br>");
}




let libraryBooks = {};

async function askLibrary(question) {

    let topic = findBook(question);

let book = libraryIndex[topic];
let section = findSection(question, topic);

    if (topic === null) {

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

    librarySession.book = topic;
librarySession.section = findSection(question, topic);

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
            await readSection(book.path, section)
    };

}
async function turnPage() {

    if (librarySession.book === null) {

        return null;

    }

    return "Turning page...";

}