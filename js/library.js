let libraryIndex = {};

async function loadLibraryIndex() {
    
    try {
        
        const response = await fetch("GreatLibrary/index.json");
        
        libraryIndex = await response.json();
        
        const dragonBook = await readBook("creatures/dragons.md");

alert(dragonBook);
        
        console.log("📚 Great Library loaded.");
        
    }
    
    catch (error) {
        
        console.error("Failed to load Great Library:", error);
        
    }
    
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

let libraryBooks = {

    dragons:
        "Dragons are ancient creatures of legend. Some breathe fire, while others are said to command storms.",

    squirrel:
        "Squirrels are surprisingly clever climbers and excellent at remembering where they hide food.",

    pirate:
        "Pirates sailed the seas in search of fortune, but many legends tell of cursed captains and haunted ships."

};

function askLibrary(question) {

    let text = question.toLowerCase();

    for (let topic in libraryBooks) {

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