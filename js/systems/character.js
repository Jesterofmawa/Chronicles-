// =====================================
// CHRONICLES CHARACTER SYSTEM
// =====================================

// The player's character.
// This currently exists only for the current session.
// Save/load will be added later.

let playerCharacter = null;


// =====================================
// CHRONICLES ATTRIBUTE MODIFIER
// =====================================

function getAttributeModifier(score) {

    return Math.floor((score - 10) / 2);

}


// =====================================
// CHARACTER DERIVED VALUES
// =====================================

function calculateCharacterValues() {

    if (!playerCharacter) {
        return null;
    }

    const attributes = playerCharacter.attributes;

    const mightMod =
        getAttributeModifier(attributes.might);

    const agilityMod =
        getAttributeModifier(attributes.agility);

    const enduranceMod =
        getAttributeModifier(attributes.endurance);

    /*
     * These formulas are intentionally kept here in one place.
     *
     * This means we can change Chronicles' mathematics later
     * without having to rewrite the character sheet or combat.
     */

    playerCharacter.maxVitality =
        10 + enduranceMod;

    playerCharacter.guard =
        10 +
        agilityMod +
        getPlayerProtection();

    playerCharacter.initiative =
        agilityMod;

    return playerCharacter;

}


// =====================================
// CHARACTER CREATION
// =====================================

function openCharacterSheet() {

    if (!playerCharacter) {

        openCharacterCreation();

        return;

    }

    calculateCharacterValues();

    renderCharacterSheet();

}


// =====================================
// CHARACTER CREATION SCREEN
// =====================================

function openCharacterCreation() {

    if (document.getElementById("characterScreen")) {
        return;
    }

    const screen =
        document.createElement("div");

    screen.id = "characterScreen";

    screen.innerHTML = `

        <div class="chronicles-character parchment-character">

            <div class="character-header">

                <div class="character-brand">

                    <div class="character-title">
                        CHRONICLES
                    </div>

                    <div class="character-tagline">
                        Every choice writes a new story.
                    </div>

                </div>

                <div class="character-identity-form">

                    <label>
                        Name
                        <input
                            id="characterName"
                            type="text"
                            maxlength="40"
                            placeholder="Your name">
                    </label>

                    <label>
                        Title / Alias
                        <input
                            id="characterTitle"
                            type="text"
                            maxlength="40"
                            placeholder="Optional">
                    </label>

                    <label>
                        Race / Origin
                        <input
                            id="characterOrigin"
                            type="text"
                            maxlength="40"
                            placeholder="Your origin">
                    </label>

                    <label>
                        Background
                        <input
                            id="characterBackground"
                            type="text"
                            maxlength="60"
                            placeholder="Your background">
                    </label>

                </div>

            </div>


            <div class="character-creation-intro">

                <h2>Create Your Character</h2>

                <p>
                    Every story begins with someone.
                    Tell Chronicles who that someone is.
                </p>

                <p>
                    Set each attribute between 8 and 18.
                    Your choices will shape how your character
                    interacts with the world.
                </p>

            </div>


            <div class="character-attributes creation-attributes">

                ${createAttributeInput(
                    "might",
                    "Might",
                    "Physical power and raw strength."
                )}

                ${createAttributeInput(
                    "agility",
                    "Agility",
                    "Speed, balance and reflexes."
                )}

                ${createAttributeInput(
                    "endurance",
                    "Endurance",
                    "Stamina, health and resilience."
                )}

                ${createAttributeInput(
                    "reason",
                    "Reason",
                    "Logic, knowledge and problem solving."
                )}

                ${createAttributeInput(
                    "awareness",
                    "Awareness",
                    "Insight, perception and intuition."
                )}

                ${createAttributeInput(
                    "presence",
                    "Presence",
                    "Force of personality, charm and influence."
                )}

            </div>


            <div class="character-creation-footer">

                <button onclick="createPlayerCharacter()">
                    ✒️ Begin Your Story
                </button>

                <button onclick="closeCharacterScreen()">
                    ↩️ Back
                </button>

            </div>

        </div>

    `;

    document.body.appendChild(screen);

}


// =====================================
// ATTRIBUTE INPUT
// =====================================

function createAttributeInput(
    id,
    name,
    description
) {

    return `

        <div class="creation-attribute">

            <div class="creation-attribute-info">

                <strong>
                    ${name}
                </strong>

                <span>
                    ${description}
                </span>

            </div>

            <input
                id="attribute-${id}"
                type="number"
                min="8"
                max="18"
                value="10">

        </div>

    `;

}


// =====================================
// CREATE PLAYER CHARACTER
// =====================================

function createPlayerCharacter() {

    const name =
        document
            .getElementById("characterName")
            .value
            .trim();

    const title =
        document
            .getElementById("characterTitle")
            .value
            .trim();

    const origin =
        document
            .getElementById("characterOrigin")
            .value
            .trim();

    const background =
        document
            .getElementById("characterBackground")
            .value
            .trim();


    if (!name) {

        alert(
            "Your character needs a name."
        );

        return;

    }


    const attributes = {};

    const attributeNames = [
        "might",
        "agility",
        "endurance",
        "reason",
        "awareness",
        "presence"
    ];


    for (const attribute of attributeNames) {

        const input =
            document.getElementById(
                `attribute-${attribute}`
            );

        let value =
            parseInt(input.value, 10);


        if (
            isNaN(value) ||
            value < 8 ||
            value > 18
        ) {

            alert(
                "Each attribute must be between 8 and 18."
            );

            return;

        }


        attributes[attribute] = value;

    }


    playerCharacter = {

        name: name,

        title: title,

        origin: origin,

        background: background,

        level: 1,

        xp: 0,

        attributes: attributes,

        currentVitality: 0,

        maxVitality: 0,

        guard: 0,

        initiative: 0,

        skills: {},

        proficiencies: {

            weapons: [],

            armour: [],

            tools: [],

            other: []

        },

        abilities: [],

        equipment: [],

        notes: "",

        wealth: {

            coin: 0,

            valuables: "",

            other: ""

        },

        conditions: [],

        storyThreads: []

    };


    calculateCharacterValues();


    playerCharacter.currentVitality =
        playerCharacter.maxVitality;


    closeCharacterScreen();

document.getElementById("mainMenu").style.display = "flex";

}


// =====================================
// RENDER CHARACTER SHEET
// =====================================

// =====================================
// RENDER CHARACTER SHEET
// =====================================

function renderCharacterSheet() {

    closeCharacterScreen();


    const screen =
        document.createElement("div");

    screen.id = "characterScreen";


    const c =
        playerCharacter;

    const a =
        c.attributes;


    screen.innerHTML = `

        <div class="chronicles-character parchment-character">


            <!-- HEADER -->

            <div class="character-sheet-top">

                <div class="character-brand">

                    <div class="character-title">
                        CHRONICLES
                    </div>

                    <div class="character-tagline">
                        Every choice writes a new story.
                    </div>

                </div>


                <div class="character-identity">

                    <div>
                        <strong>Name:</strong>
                        ${escapeCharacterText(c.name)}
                    </div>

                    <div>
                        <strong>Title / Alias:</strong>
                        ${escapeCharacterText(c.title)}
                    </div>

                    <div>
                        <strong>Race / Origin:</strong>
                        ${escapeCharacterText(c.origin)}
                    </div>

                    <div>
                        <strong>Background:</strong>
                        ${escapeCharacterText(c.background)}
                    </div>

                    <div>
                        <strong>Level:</strong>
                        ${c.level}
                        &nbsp;&nbsp;
                        <strong>XP:</strong>
                        ${c.xp}
                    </div>

                </div>

            </div>


            <!-- CORE STATS -->

            <div class="character-core-stats">


                <div class="character-stat-card">

                    <h3>
                        VITALITY
                    </h3>

                    <div class="compact-stat">
                        ${c.currentVitality}
                        /
                        ${c.maxVitality}
                    </div>

                </div>


                <div class="character-stat-card">

                    <h3>
                        GUARD
                    </h3>

                    <div class="compact-stat">
                        ${c.guard}
                    </div>

                </div>


                <div class="character-stat-card">

                    <h3>
                        INITIATIVE
                    </h3>

                    <div class="compact-stat">
                        ${formatModifier(c.initiative)}
                    </div>

                </div>


            </div>


            <!-- ATTRIBUTES -->

            <div class="character-attributes">

                <div class="character-section-title">
                    ATTRIBUTES
                </div>


                ${renderAttribute(
                    "Might",
                    a.might
                )}


                ${renderAttribute(
                    "Agility",
                    a.agility
                )}


                ${renderAttribute(
                    "Endurance",
                    a.endurance
                )}


                ${renderAttribute(
                    "Reason",
                    a.reason
                )}


                ${renderAttribute(
                    "Awareness",
                    a.awareness
                )}


                ${renderAttribute(
                    "Presence",
                    a.presence
                )}

            </div>


            <!-- LOWER SECTIONS -->

            <div class="character-lower-grid">


                <!-- PROFICIENCIES -->

                <div class="character-box">

                    <div class="character-section-title">
                        PROFICIENCIES
                    </div>

                    <p>
                        <strong>Weapons:</strong>
                        ${renderList(
                            c.proficiencies.weapons
                        )}
                    </p>

                    <p>
                        <strong>Armor:</strong>
                        ${renderList(
                            c.proficiencies.armour
                        )}
                    </p>

                    <p>
                        <strong>Tools:</strong>
                        ${renderList(
                            c.proficiencies.tools
                        )}
                    </p>

                    <p>
                        <strong>Other:</strong>
                        ${renderList(
                            c.proficiencies.other
                        )}
                    </p>

                </div>


                <!-- SKILLS -->

                <div class="character-box">

                    <div class="character-section-title">
                        SKILLS & TALENTS
                    </div>

                    ${renderSkill(
                        "Athletics",
                        "might"
                    )}

                    ${renderSkill(
                        "Acrobatics",
                        "agility"
                    )}

                    ${renderSkill(
                        "Stealth",
                        "agility"
                    )}

                    ${renderSkill(
                        "Investigation",
                        "reason"
                    )}

                    ${renderSkill(
                        "Lore",
                        "reason"
                    )}

                    ${renderSkill(
                        "Survival",
                        "awareness"
                    )}

                    ${renderSkill(
                        "Perception",
                        "awareness"
                    )}

                    ${renderSkill(
                        "Persuasion",
                        "presence"
                    )}

                    ${renderSkill(
                        "Performance",
                        "presence"
                    )}

                    ${renderSkill(
                        "Crafting",
                        "reason"
                    )}

                </div>


                <!-- ABILITIES -->

                <div class="character-box">

                    <div class="character-section-title">
                        ABILITIES & FEATURES
                    </div>

                    ${renderList(
                        c.abilities
                    )}

                </div>


                <!-- EQUIPMENT -->

                <div class="character-box">

                    <div class="character-section-title">
                        EQUIPMENT & GEAR
                    </div>

                    ${renderEquipmentList()}

                    <button
                        class="character-sheet-link"
                        onclick="openCarriedItems()"
                    >
                        Carried Items
                    </button>

                </div>


                <!-- NOTES -->

                <div class="character-box">

                    <div class="character-section-title">
                        NOTES
                    </div>

                    <div class="character-notes">
                        ${escapeCharacterText(c.notes)}
                    </div>

                </div>


                <!-- WEALTH -->

                <div class="character-box">

                    <div class="character-section-title">
                        WEALTH
                    </div>

                    <p>
                        <strong>Silver:</strong>
                        ${
                            typeof playerSilver !== "undefined"
                                ? playerSilver
                                : 0
                        }
                    </p>

                    <p>
                        <strong>Gems / Valuables:</strong>
                        ${escapeCharacterText(
                            c.wealth.valuables
                        )}
                    </p>

                    <p>
                        <strong>Other Treasure:</strong>
                        ${escapeCharacterText(
                            c.wealth.other
                        )}
                    </p>

                </div>


                <!-- CONDITIONS -->

                <div class="character-box">

                    <div class="character-section-title">
                        CONDITIONS
                    </div>

                    ${
                        c.conditions.length
                            ? renderList(
                                c.conditions
                            )
                            : "None"
                    }

                </div>


                <!-- STORY THREADS -->

                <div class="character-box story-thread-box">

                    <div class="character-section-title">
                        STORY THREADS
                    </div>

                    <small>
                        Goals, bonds, secrets and quests.
                    </small>

                    ${
                        c.storyThreads.length
                            ? renderList(
                                c.storyThreads
                            )
                            : "<em>No story threads yet.</em>"
                    }

                </div>


            </div>


            <!-- FOOTER -->

            <div class="character-sheet-footer">

                <button onclick="closeCharacterScreen()">
                    Close Character
                </button>

            </div>


        </div>

    `;


    document.body.appendChild(screen);

}


// =====================================
// ATTRIBUTE DISPLAY
// =====================================

function renderAttribute(
    name,
    score
) {

    const modifier =
        getAttributeModifier(score);


    return `

        <div class="character-attribute-row">

            <div class="attribute-name">
                ${name}
            </div>

            <div class="attribute-description">
                ${getAttributeDescription(name)}
            </div>

            <div class="attribute-score">
                ${score}
            </div>

            <div class="attribute-mod">
                ${formatModifier(modifier)}
            </div>

        </div>

    `;

}


function getAttributeDescription(name) {

    const descriptions = {

        Might:
            "Physical power and raw strength.",

        Agility:
            "Speed, balance and reflexes.",

        Endurance:
            "Stamina, health and resilience.",

        Reason:
            "Logic, knowledge and problem solving.",

        Awareness:
            "Insight, perception and intuition.",

        Presence:
            "Force of personality, charm and influence."

    };

    return descriptions[name] || "";

}


// =====================================
// SKILLS
// =====================================

function renderSkill(
    name,
    attribute
) {

    const modifier =
        getAttributeModifier(
            playerCharacter.attributes[attribute]
        );


    return `

        <div class="character-skill-row">

            <span class="skill-circle">
                ○
            </span>

            <span>
                ${name}
            </span>

            <span class="skill-mod">
                ${formatModifier(modifier)}
            </span>

        </div>

    `;

}


// =====================================
// EQUIPMENT
// =====================================

function renderEquipmentList() {
    
    if (
        typeof playerEquipment === "undefined"
    ) {
        
        return "<em>No equipment.</em>";
        
    }
    
    
    const equippedEntries =
        Object.entries(playerEquipment)
        .filter(([slot, item]) => item);
    
    
    if (!equippedEntries.length) {
        
        return "<em>No equipment.</em>";
        
    }
    
    
    return equippedEntries
        .map(([slot, item]) => {
            
            return `

                <div class="character-equipment-row">

                    <strong>
                        ${getEquipmentSlotName(slot)}:
                    </strong>

                    ${escapeCharacterText(item.name)}

                    <br>

                    <button
                        class="character-equipment-action"
                        onclick="unequipFromCharacter('${slot}')"
                    >
                        Unequip
                    </button>

                </div>

            `;
            
        })
        .join("");
    
}

function getEquipmentSlotName(slot) {

    const names = {

        head: "Head",

        body: "Body",

        arms: "Arms / Hands",

        legs: "Legs",

        jewellery1: "Jewellery",

        jewellery2: "Jewellery",

        weapon: "Weapon",

        offhand: "Offhand"

    };

    return names[slot] || slot;

}

function unequipFromCharacter(slot) {

    if (
        typeof combatActive !== "undefined" &&
        combatActive
    ) {

        return;

    }


    if (
        typeof unequipItem !== "function"
    ) {

        return;

    }


    if (
        unequipItem(slot)
    ) {

        openCharacterSheet();

    }

}


// =====================================
// RENDER CARRIED ITEMS
// =====================================

function renderCarriedItems(items) {

    return `

        <div class="carried-items-list">

            ${
                items.map(item => `

                    <div class="carried-item">

                        <div class="carried-item-name">

                            <strong>
                                ${escapeCharacterText(
                                    item.name
                                )}
                            </strong>

                            ${
                                item.quantity > 1
                                    ?
                                    ` ×${item.quantity}`
                                    :
                                    ""
                            }

                        </div>


                        ${
                            item.id ===
                            "basic_lock_pick_set"
                                ?
                                `
                                    <div class="carried-item-detail">
                                        Usable picks:
                                        ${item.picks}
                                    </div>
                                `
                                :
                                ""
                        }


                        ${
                            item.description
                                ?
                                `
                                    <div class="carried-item-description">
                                        ${escapeCharacterText(
                                            item.description
                                        )}
                                    </div>
                                `
                                :
                                ""
                        }


                        ${
                            item.effect
                                ?
                                `
                                    <div class="carried-item-effect">
                                        ${escapeCharacterText(
                                            item.effect
                                        )}
                                    </div>
                                `
                                :
                                ""
                        }


                        ${
                            item.category === "equipment" &&
                            item.identified &&
                            item.equipable !== false
                                ?
                                `
                                    <button
    class="carried-item-action"
    onclick="showCharacterEquipOptions('${item.id}')"
>
    Equip
</button>
                                `
                                :
                                ""
                        }

                    </div>

                `).join("")
            }

        </div>

    `;

}

// =====================================
// OPEN CARRIED ITEMS
// =====================================

function openCarriedItems() {

    closeCharacterScreen();


    if (
        document.getElementById(
            "carriedItemsScreen"
        )
    ) {

        return;

    }


    const screen =
        document.createElement("div");

    screen.id =
        "carriedItemsScreen";


    const carriedItems =
        typeof playerInventory !== "undefined"
            ? playerInventory
            : [];


    screen.innerHTML = `

        <div class="chronicles-character parchment-character">

            <div class="character-sheet-top">

                <div class="character-brand">

                    <div class="character-title">
                        CHRONICLES
                    </div>

                    <div class="character-tagline">
                        Every choice writes a new story.
                    </div>

                </div>


                <div class="character-identity">

                    <div>
                        <strong>Name:</strong>
                        ${escapeCharacterText(
                            playerCharacter.name
                        )}
                    </div>

                    <div>
                        <strong>Silver:</strong>
                        ${playerSilver}
                    </div>

                </div>

            </div>


            <div class="character-box carried-items-box">

                <div class="character-section-title">
                    CARRIED ITEMS
                </div>


                <p class="carried-items-introduction">
                    Items you are carrying that are not
                    currently equipped.
                </p>


                ${
                    carriedItems.length
                        ?
                        renderCarriedItems(
                            carriedItems
                        )
                        :
                        `
                            <p>
                                <em>
                                    You are not carrying
                                    any items.
                                </em>
                            </p>
                        `
                }

            </div>


            <div class="character-sheet-footer">

                <button
                    onclick="closeCarriedItems()"
                >
                    Back to Character
                </button>

            </div>

        </div>

    `;


    document.body.appendChild(screen);

}

function showCharacterEquipOptions(itemId) {

    const item =
        playerInventory.find(
            item => item.id === itemId
        );


    if (!item) {

        return;

    }


    if (!item.identified) {

        return;

    }


    if (
        typeof combatActive !== "undefined" &&
        combatActive
    ) {

        return;

    }


    const slots = [];


    if (item.equipSlot === "weapon") {

        slots.push("weapon");

    }


    if (item.equipSlot === "head") {

        slots.push("head");

    }


    if (item.equipSlot === "body") {

        slots.push("body");

    }


    if (item.equipSlot === "arms") {

        slots.push("arms");

    }


    if (item.equipSlot === "legs") {

        slots.push("legs");

    }


    if (item.equipSlot === "offhand") {

        slots.push("offhand");

    }


    if (item.equipSlot === "jewellery") {

        slots.push(
            "jewellery1",
            "jewellery2"
        );

    }


    if (!slots.length) {

        return;

    }


    const screen =
    document.getElementById(
        "carriedItemsScreen"
    );

if (!screen) {

    return;

}


screen.innerHTML = `

        <div class="chronicles-character parchment-character">

            <div class="character-sheet-top">

                <div class="character-brand">

                    <div class="character-title">
                        CHRONICLES
                    </div>

                    <div class="character-tagline">
                        Every choice writes a new story.
                    </div>

                </div>


                <div class="character-identity">

                    <div>
                        <strong>Name:</strong>
                        ${escapeCharacterText(
                            playerCharacter.name
                        )}
                    </div>

                    <div>
                        <strong>Silver:</strong>
                        ${playerSilver}
                    </div>

                </div>

            </div>


            <div class="character-box carried-items-box">

                <div class="character-section-title">
                    EQUIP ITEM
                </div>


                <p>

                    <strong>
                        ${escapeCharacterText(item.name)}
                    </strong>

                </p>


                <p>
                    Choose where you want to equip it.
                </p>


                <div class="character-equip-options">

                    ${
                        slots.map(slot => {

                            const equipped =
                                playerEquipment[slot];


                            if (equipped) {

                                return `

                                    <button
                                        class="character-sheet-link"
                                        onclick="
                                            equipFromCharacter(
                                                '${item.id}',
                                                '${slot}',
                                                true
                                            )
                                        "
                                    >

                                        Replace
                                        ${escapeCharacterText(
                                            equipped.name
                                        )}

                                        with

                                        ${escapeCharacterText(
                                            item.name
                                        )}

                                        in

                                        ${getEquipmentSlotName(slot)}

                                    </button>

                                `;

                            }


                            return `

                                <button
                                    class="character-sheet-link"
                                    onclick="
                                        equipFromCharacter(
                                            '${item.id}',
                                            '${slot}',
                                            false
                                        )
                                    "
                                >

                                    Equip in
                                    ${getEquipmentSlotName(slot)}

                                </button>

                            `;

                        }).join("")
                    }

                </div>


                <button
                    class="character-sheet-link"
                    onclick="openCarriedItems()"
                >
                    Back to Carried Items
                </button>

            </div>

        </div>

    `;

}

function equipFromCharacter(
    itemId,
    slot,
    replacing
) {
    
    if (
        typeof combatActive !== "undefined" &&
        combatActive
    ) {
        
        return;
        
    }
    
    
    let success = false;
    
    
    if (replacing) {
        
        success =
            replaceEquipment(
                itemId,
                slot
            );
        
    } else {
        
        success =
            equipItem(
                itemId,
                slot
            );
        
    }
    
    
    if (!success) {
        
        return;
        
    }
    
    
    calculateCharacterValues();
    
    
    const carriedScreen =
        document.getElementById(
            "carriedItemsScreen"
        );
    
    
    if (carriedScreen) {
        
        carriedScreen.remove();
        
    }
    
    
    renderCharacterSheet();
    
}


// =====================================
// CLOSE CARRIED ITEMS
// =====================================

function closeCarriedItems() {

    const screen =
        document.getElementById(
            "carriedItemsScreen"
        );

    if (screen) {

        screen.remove();

    }

    openCharacterSheet();

}

// =====================================
// LIST HELPERS
// =====================================

function renderList(list) {

    if (!list || !list.length) {

        return "<em>None</em>";

    }

    return list
        .map(item =>
            escapeCharacterText(item)
        )
        .join("<br>");

}


function formatModifier(value) {

    if (value >= 0) {

        return `+${value}`;

    }

    return `${value}`;

}


// =====================================
// CLOSE
// =====================================

function closeCharacterScreen() {

    const screen =
        document.getElementById("characterScreen");

    if (screen) {

        screen.remove();

    }

}


// =====================================
// BASIC HTML SAFETY
// =====================================

function escapeCharacterText(text) {

    if (text === undefined || text === null) {

        return "";

    }

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}