let playerSilver = 50;

let playerInventory = [];

// =====================================
// PLAYER EQUIPMENT
// =====================================

let playerEquipment = {

    head: null,

    body: null,

    arms: null,

    legs: null,

    jewellery1: null,

    jewellery2: null,

    weapon: {
    id: "short_sword",
    name: "Short Sword",
    damage: "1d6",
    effect: null,
    equipSlot: "weapon"
},

    offhand: null

};

const equipmentSlots = {

    head: "🪖 Head",

    body: "🛡️ Body",

    arms: "🧤 Arms / Hands",

    legs: "👢 Legs",

    jewellery1: "💍 Jewellery 1",

    jewellery2: "💍 Jewellery 2",

    weapon: "⚔️ Weapon",

    offhand: "🛡️ Offhand"

};

function addItem(
    id,
    name,
    category,
    identified = true,
    equipSlot = null,
    damage = null
) {

    const existingItem = playerInventory.find(item => item.id === id);

    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        playerInventory.push({
            id: id,
            name: name,
            category: category,
            quantity: 1,
            identified: identified,
            equipSlot: equipSlot,
            damage: damage
        });

    }

}

function hasItem(id) {

    return playerInventory.some(item => item.id === id);

}

// The player starts with the Short Sword equipped.
// It should not also appear in inventory.

function removeItem(id) {

    const item = playerInventory.find(
        item => item.id === id
    );

    if (!item) {

        return false;

    }

    if (item.quantity > 1) {

        item.quantity -= 1;

    } else {

        playerInventory = playerInventory.filter(
            item => item.id !== id
        );

    }

    return true;

}

function identifyItem(id, newName, description, effect) {

    const item = playerInventory.find(item => item.id === id);

    if (!item) {

        return false;

    }

    item.identified = true;
    item.name = newName;
    item.description = description;
    item.effect = effect;

    return true;

}

// =====================================
// EQUIP ITEM
// =====================================

function equipItem(itemId, slot) {
    
    const item = playerInventory.find(
        item => item.id === itemId
    );
    
    if (!item) {
        return false;
    }
    
    if (!item.identified) {
        return false;
    }
    
    if (!equipmentSlots[slot]) {
        return false;
    }
    
    // Prevent the same physical item
    // being equipped in two slots.
    const alreadyEquipped = Object.entries(playerEquipment)
        .some(([equippedSlot, equippedItem]) => {
            
            return (
                equippedSlot !== slot &&
                equippedItem &&
                equippedItem.id === item.id
            );
            
        });
    
    if (alreadyEquipped) {
        return false;
    }
    
    // Do not silently replace existing equipment.
    if (playerEquipment[slot]) {
        return false;
    }
    
    playerEquipment[slot] = {
    id: item.id,
    name: item.name,
    effect: item.effect || null,
    equipSlot: item.equipSlot || null,
    damage: item.damage || null
};
    
    return true;
}

function replaceEquipment(itemId, slot) {
    
    const item = playerInventory.find(
        item => item.id === itemId
    );
    
    if (!item) {
        
        return false;
        
    }
    
    if (!item.identified) {
        
        return false;
        
    }
    
    if (!equipmentSlots[slot]) {
        
        return false;
        
    }
    
    const alreadyEquipped = Object.entries(playerEquipment)
        .some(([equippedSlot, equippedItem]) => {
            
            return (
                equippedSlot !== slot &&
                equippedItem &&
                equippedItem.id === item.id
            );
            
        });
    
    if (alreadyEquipped) {
        
        return false;
        
    }
    
    const oldItem = playerEquipment[slot];
    
    if (!oldItem) {
        
        return equipItem(
            itemId,
            slot
        );
        
    }
    
    // Remove the new item from inventory.
    if (!removeItem(item.id)) {
        
        return false;
        
    }
    
    // Return the old item to inventory.
    addItem(
    oldItem.id,
    oldItem.name,
    "equipment",
    true,
    oldItem.equipSlot || null,
    oldItem.damage || null
);
    
    // Equip the new item.
    playerEquipment[slot] = {
    id: item.id,
    name: item.name,
    effect: item.effect || null,
    equipSlot: item.equipSlot || null,
    damage: item.damage || null
};
    
    return true;
    
}

// =====================================
// UNEQUIP ITEM
// =====================================

function unequipItem(slot) {
    
    const equippedItem = playerEquipment[slot];
    
    if (!equippedItem) {
        
        return false;
        
    }
    
    addItem(
    equippedItem.id,
    equippedItem.name,
    "equipment",
    true,
    equippedItem.equipSlot || null,
    equippedItem.damage || null
);
    
    playerEquipment[slot] = null;
    
    return true;
    
}

// =====================================
// EQUIPMENT ATTACK BONUS
// =====================================

function getEquipmentAttackBonus() {

    let bonus = 0;

    Object.values(playerEquipment).forEach(item => {

        if (!item) {
            return;
        }

        if (item.effect === "+1 Attack while worn") {

            bonus += 1;

        }

    });

    return bonus;

}

function getItemQuantity(id) {

    const item = playerInventory.find(item => item.id === id);

    if (!item) {
        return 0;
    }

    return item.quantity;

}

// EQUIPMENT OPTIONS
// =====================================

function showEquipOptions(itemId) {

    const item = playerInventory.find(
        item => item.id === itemId
    );

    if (!item) {

        return;

    }

    if (!item.identified) {

        return;

    }

    let choices = [];

    // =====================================
    // WEAPONS
    // =====================================

    if (item.equipSlot === "weapon") {
    
    if (playerEquipment.weapon) {
        
        choices.push(
            `⚔️ Replace ${playerEquipment.weapon.name} with ${item.name}`
        );
        
    } else {
        
        choices.push(
            `⚔️ Equip ${item.name} as Weapon`
        );
        
    }
    
}

    // =====================================
    // JEWELLERY
    // =====================================

    if (item.equipSlot === "jewellery") {
    
    if (playerEquipment.jewellery1) {
        
        choices.push(
            `💍 Replace ${playerEquipment.jewellery1.name} with ${item.name} in Jewellery 1`
        );
        
    } else {
        
        choices.push(
            `💍 Equip ${item.name} in Jewellery 1`
        );
        
    }
    
    if (playerEquipment.jewellery2) {
        
        choices.push(
            `💍 Replace ${playerEquipment.jewellery2.name} with ${item.name} in Jewellery 2`
        );
        
    } else {
        
        choices.push(
            `💍 Equip ${item.name} in Jewellery 2`
        );
        
    }
    
}

    // =====================================
    // NO VALID SLOT
    // =====================================

    if (choices.length === 0) {

        return;

    }

    previousChoices = [...currentChoices];

    choices.push(
        "✖️ Cancel"
    );

    closeInventory();

    document.getElementById("story").innerHTML += `

        <div id="equipOptionsPanel" class="story-panel">

            <h3>⚔️ Equip ${item.name}</h3>

            <p>
                Choose where you want to equip it.
            </p>

        </div>

    `;

    showChoices(choices);

}

function openInventory() {

    if (document.getElementById("inventoryPanel")) {
        return;
    }

    const equipment = playerInventory.filter(item => item.category === "equipment");
const supplies = playerInventory.filter(item => item.category === "supplies");
const unusual = playerInventory.filter(item => item.category === "unusual");
const keyItems = playerInventory.filter(item => item.category === "key");

// =====================================


    function buildItemList(items) {

        if (items.length === 0) {
            return `<p><em>None</em></p>`;
        }

        return `
            <ul>
                ${items.map(item => `
    <li>

    <div class="inventory-item-row">

        <strong>
            ${item.name} ×${item.quantity}
        </strong>

        ${
    item.category === "equipment" && item.identified ?
        `
        <button
            onclick="showEquipOptions('${item.id}')"
        >
            ⚔️ Equip
        </button>
    ` :
        ""
}

    </div>

    ${
        item.description
        ? `
            <br>
            <em>
                ${item.description}
            </em>
        `
        : ""
    }

    ${
        item.effect
        ? `
            <br>
            <strong>
                Effect: ${item.effect}
            </strong>
        `
        : ""
    }

</li>

`).join("")}
            </ul>
        `;

    }

    document.getElementById("story").innerHTML += `

        <div id="inventoryPanel" class="story-panel">

            <h2>🎒 Inventory</h2>

            <p>
                <strong>Money:</strong> ${playerSilver} silver
            </p>

            <h3>Equipment</h3>

            ${buildItemList(equipment)}

            <h3>Supplies</h3>

            ${buildItemList(supplies)}

<h3>Unusual</h3>

            ${buildItemList(unusual)}

            <h3>Key Items</h3>

            ${buildItemList(keyItems)}

            <button onclick="closeInventory()">
                ✕ Close
            </button>

        </div>

    `;

}

function closeInventory() {
  
  const panel = document.getElementById("inventoryPanel");
  
  if (panel) {
    panel.remove();
  }
  
}

function addSilver(amount) {

    playerSilver += amount;

}

function removeSilver(amount) {

    if (playerSilver < amount) {
        return false;
    }

    playerSilver -= amount;

    return true;

}

function buyRope() {

    if (playerSilver < 5) {

        showChoices([
            "❌ Not enough silver",
            "↩️ Back to the Shop"
        ]);

        return;

    }

    removeSilver(5);

    addItem("rope", "Rope", "equipment");

    document.getElementById("story").innerHTML += `

        <div id="purchaseMessage" class="story-panel">

            <p>
                Myra reaches for the coil of rope.
            </p>

            <p>
                "Good choice."
            </p>

            <p>
                She places it on the counter.
            </p>

            <p>
                "That'll be 5 silver."
            </p>

            <p>
                You hand over the coins.
            </p>

            <p>
                The rope is added to your belongings.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Equipment"
    ]);

}

function buyStormLantern() {

    if (playerSilver < 8) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Myra gives you an apologetic shrug.
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Equipment"
        ]);

        return;

    }

    removeSilver(8);

    addItem("storm_lantern", "Storm Lantern", "equipment");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                Myra reaches for one of the lanterns hanging behind the counter.
            </p>

            <p>
                "Eight silver."
            </p>

            <p>
                She checks the glass before handing it over.
            </p>

            <p>
                "Keep the oil topped up and it'll serve you well."
            </p>

            <p>
                The Storm Lantern is added to your belongings.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Equipment"
    ]);

}

function buySailorToolKit() {

    if (playerSilver < 12) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Myra gives you an apologetic shrug.
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Equipment"
        ]);

        return;

    }

    removeSilver(12);

    addItem("sailor_tool_kit", "Sailor's Tool Kit", "equipment");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                Myra reaches beneath the counter and produces a compact leather tool roll.
            </p>

            <p>
                "Twelve silver."
            </p>

            <p>
                She places it on the counter.
            </p>

            <p>
                "Nothing fancy. But it'll fix most things that aren't completely determined to stay broken."
            </p>

            <p>
                The Sailor's Tool Kit is added to your belongings.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Equipment"
    ]);

}

function buyFishingKit() {

    if (playerSilver < 6) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Myra gives you an apologetic shrug.
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Equipment"
        ]);

        return;

    }

    removeSilver(6);

    addItem("fishing_kit", "Fishing Kit", "equipment");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                Myra reaches towards the fishing equipment.
            </p>

            <p>
                "Six silver."
            </p>

            <p>
                She gathers the hooks, line and floats into a small canvas pouch.
            </p>

            <p>
                "Should be enough to get you started."
            </p>

            <p>
                The Fishing Kit is added to your belongings.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Equipment"
    ]);

}


function buyWorkGloves() {

    if (playerSilver < 3) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Myra gives you an apologetic shrug.
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Equipment"
        ]);

        return;

    }

    removeSilver(3);

    addItem("work_gloves", "Work Gloves", "equipment");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                Myra picks up a pair of sturdy work gloves.
            </p>

            <p>
                "Three silver."
            </p>

            <p>
                She gives them a quick inspection.
            </p>

            <p>
                "Good for rope, crates and anything else that doesn't appreciate bare hands."
            </p>

            <p>
                The Work Gloves are added to your belongings.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Equipment"
    ]);

}


function buyGrapplingHook() {

    if (playerSilver < 15) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Myra gives you an apologetic shrug.
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Equipment"
        ]);

        return;

    }

    removeSilver(15);

    addItem("bent_grappling_hook", "Bent Grappling Hook", "equipment");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                Myra reaches up and takes down a battered grappling hook.
            </p>

            <p>
                "Fifteen silver."
            </p>

            <p>
                She studies it for a moment.
            </p>

            <p>
                "It's bent."
            </p>

            <p>
                She looks at you.
            </p>

            <p>
                "Obviously."
            </p>

            <p>
                She turns it over in her hand.
            </p>

            <p>
                "Still works."
            </p>

            <p>
                A pause.
            </p>

            <p>
                "Mostly."
            </p>

            <p>
                The Bent Grappling Hook is added to your belongings.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Equipment"
    ]);

}

function buyLampOil() {

    if (playerSilver < 2) {

        document.getElementById("story").innerHTML += `

            <div id="purchaseMessage" class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Myra gives you an apologetic shrug.
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Supplies"
        ]);

        return;

    }

    removeSilver(2);

    addItem("lamp_oil", "Lamp Oil", "supplies");

    document.getElementById("story").innerHTML += `

        <div id="purchaseMessage" class="story-panel">

            <p>
                Myra reaches beneath the counter and produces a small bottle.
            </p>

            <p>
                "Two silver."
            </p>

            <p>
                "Keep it upright unless you fancy smelling like an oil lamp."
            </p>

            <p>
                The Lamp Oil is added to your belongings.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Supplies"
    ]);

}


function buyTravelRations() {

    if (playerSilver < 3) {

        document.getElementById("story").innerHTML += `

            <div id="purchaseMessage" class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Myra gives you an apologetic shrug.
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Supplies"
        ]);

        return;

    }

    removeSilver(3);

    addItem("travel_rations", "Travel Rations", "supplies");

    document.getElementById("story").innerHTML += `

        <div id="purchaseMessage" class="story-panel">

            <p>
                Myra gathers a small bundle of wrapped provisions.
            </p>

            <p>
                "Three silver."
            </p>

            <p>
                "They won't win any prizes, but they'll keep you fed."
            </p>

            <p>
                The Travel Rations are added to your belongings.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Supplies"
    ]);

}


function buyFirstAidKit() {

    if (playerSilver < 5) {

        document.getElementById("story").innerHTML += `

            <div id="purchaseMessage" class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Myra gives you an apologetic shrug.
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Supplies"
        ]);

        return;

    }

    removeSilver(5);

    addItem("first_aid_kit", "Basic First Aid Kit", "supplies");

    document.getElementById("story").innerHTML += `

        <div id="purchaseMessage" class="story-panel">

            <p>
                Myra places a small wrapped kit on the counter.
            </p>

            <p>
                "Five silver."
            </p>

            <p>
                "Hopefully you won't need it."
            </p>

            <p>
                She pauses.
            </p>

            <p>
                "But if you do, you'll be glad you bought it."
            </p>

            <p>
                The Basic First Aid Kit is added to your belongings.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Supplies"
    ]);

}


function buyRepairSupplies() {

    if (playerSilver < 3) {

        document.getElementById("story").innerHTML += `

            <div id="purchaseMessage" class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Myra gives you an apologetic shrug.
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Supplies"
        ]);

        return;

    }

    removeSilver(3);

    addItem("repair_thread_canvas", "Repair Thread & Canvas", "supplies");

    document.getElementById("story").innerHTML += `

        <div id="purchaseMessage" class="story-panel">

            <p>
                Myra pulls a small bundle of thread and folded canvas from a shelf.
            </p>

            <p>
                "Three silver."
            </p>

            <p>
                "Good for patching things up."
            </p>

            <p>
                She glances around the shop.
            </p>

            <p>
                "Which, around here, is generally useful."
            </p>

            <p>
                The Repair Thread & Canvas is added to your belongings.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Supplies"
    ]);

}


function buySpareHooks() {

    if (playerSilver < 2) {

        document.getElementById("story").innerHTML += `

            <div id="purchaseMessage" class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Myra gives you an apologetic shrug.
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Supplies"
        ]);

        return;

    }

    removeSilver(2);

    addItem("spare_hooks_line", "Spare Hooks & Line", "supplies");

    document.getElementById("story").innerHTML += `

        <div id="purchaseMessage" class="story-panel">

            <p>
                Myra reaches for a small packet of hooks and a neatly wound length of line.
            </p>

            <p>
                "Two silver."
            </p>

            <p>
                "Never hurts to have spares."
            </p>

            <p>
                The Spare Hooks & Line are added to your belongings.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Supplies"
    ]);

}


function buySalt() {

    if (playerSilver < 1) {

        document.getElementById("story").innerHTML += `

            <div id="purchaseMessage" class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Myra gives you an apologetic shrug.
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Supplies"
        ]);

        return;

    }

    removeSilver(1);

    addItem("salt_packet", "Salt Packet", "supplies");

    document.getElementById("story").innerHTML += `

        <div id="purchaseMessage" class="story-panel">

            <p>
                Myra slides a small packet across the counter.
            </p>

            <p>
                "One silver."
            </p>

            <p>
                She gives you a curious look.
            </p>

            <p>
                "It's salt."
            </p>

            <p>
                A pause.
            </p>

            <p>
                "You'd be surprised how often that's useful."
            </p>

            <p>
                The Salt Packet is added to your belongings.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Supplies"
    ]);

}

function buyBramRope() {

    if (playerSilver < 4) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Bram gives you a matter-of-fact shrug.
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Bram's Goods"
        ]);

        return;

    }

    removeSilver(4);

    addItem("rope", "Rope", "equipment");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                Bram cuts a length of rope from one of the coils behind him.
            </p>

            <p>
                "Four silver."
            </p>

            <p>
                He hands it across the counter.
            </p>

            <p>
                "Good rope. It'll do what rope's supposed to do."
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Bram's Goods"
    ]);

}

function buySimpleToolSet() {

    if (playerSilver < 8) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Bram gives you a matter-of-fact shrug.
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Bram's Goods"
        ]);

        return;

    }

    removeSilver(8);

    addItem("simple_tool_set", "Simple Tool Set", "equipment");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                Bram places a small wooden case on the counter.
            </p>

            <p>
                "Eight silver."
            </p>

            <p>
                "Nothing fancy. Hammer, pliers, screwdriver and a few bits that tend to disappear when you need them."
            </p>

            <p>
                The Simple Tool Set is added to your belongings.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Bram's Goods"
    ]);

}

function buyHeavyWorkGloves() {

    if (playerSilver < 3) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Bram gives you a matter-of-fact shrug.
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Bram's Goods"
        ]);

        return;

    }

    removeSilver(3);

    addItem("heavy_work_gloves", "Heavy Work Gloves", "equipment");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                Bram picks up a pair of thick leather gloves.
            </p>

            <p>
                "Three silver."
            </p>

            <p>
                He turns them over once before handing them to you.
            </p>

            <p>
                "These'll last longer than your hands will complain."
            </p>

            <p>
                The Heavy Work Gloves are added to your belongings.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Bram's Goods"
    ]);

}

function buyUtilityKnife() {

    if (playerSilver < 6) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Bram gives you a matter-of-fact shrug.
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Bram's Goods"
        ]);

        return;

    }

    removeSilver(6);

    addItem("utility_knife", "Utility Knife", "equipment");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                Bram takes a small folding knife from beneath the counter.
            </p>

            <p>
                "Six silver."
            </p>

            <p>
                "Useful thing to have."
            </p>

            <p>
                He pauses.
            </p>

            <p>
                "Just don't use it on anything that belongs to me."
            </p>

            <p>
                The Utility Knife is added to your belongings.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Bram's Goods"
    ]);

}

function buyBramTravelRations() {

    if (playerSilver < 3) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Bram gives you a matter-of-fact shrug.
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Bram's Goods"
        ]);

        return;

    }

    removeSilver(3);

    addItem("travel_rations", "Travel Rations", "supplies");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                Bram reaches beneath the counter and produces a neatly wrapped bundle.
            </p>

            <p>
                "Three silver."
            </p>

            <p>
                "Nothing exciting. That's usually a good thing when it comes to food."
            </p>

            <p>
                The Travel Rations are added to your belongings.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Bram's Goods"
    ]);

}


function buyBramLampOil() {

    if (playerSilver < 2) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Bram gives you a matter-of-fact shrug.
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Bram's Goods"
        ]);

        return;

    }

    removeSilver(2);

    addItem("lamp_oil", "Lamp Oil", "supplies");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                Bram takes a small bottle of oil from the shelf.
            </p>

            <p>
                "Two silver."
            </p>

            <p>
                "Keep the stopper tight."
            </p>

            <p>
                The Lamp Oil is added to your belongings.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Bram's Goods"
    ]);

}


function buyBasicRepairKit() {

    if (playerSilver < 4) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Bram gives you a matter-of-fact shrug.
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Bram's Goods"
        ]);

        return;

    }

    removeSilver(4);

    addItem("basic_repair_kit", "Basic Repair Kit", "supplies");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                Bram places a small repair kit on the counter.
            </p>

            <p>
                "Four silver."
            </p>

            <p>
                "Thread, patches, needles and a few bits of twine."
            </p>

            <p>
                He gives the kit a tap.
            </p>

            <p>
                "Nothing complicated."
            </p>

            <p>
                "That's why it works."
            </p>

            <p>
                The Basic Repair Kit is added to your belongings.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Bram's Goods"
    ]);

}


function buyBramSalt() {

    if (playerSilver < 1) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Bram gives you a matter-of-fact shrug.
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Bram's Goods"
        ]);

        return;

    }

    removeSilver(1);

    addItem("salt_packet", "Salt Packet", "supplies");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                Bram slides a small packet across the counter.
            </p>

            <p>
                "One silver."
            </p>

            <p>
                "It's salt."
            </p>

            <p>
                He looks at you.
            </p>

            <p>
                "Not much more to say about it."
            </p>

            <p>
                The Salt Packet is added to your belongings.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Bram's Goods"
    ]);

}

function buySellaTravelCandle() {

    if (playerSilver < 3) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Sella gives you an understanding smile.
                </p>

                <p>
                    "Perhaps next time."
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Sella's Goods"
        ]);

        return;

    }

    removeSilver(3);

    addItem("scented_travel_candle", "Scented Travel Candle", "supplies");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                Sella carefully wraps the candle in a scrap of cloth.
            </p>

            <p>
                "Three silver."
            </p>

            <p>
                "It smells like cedar and something I can't quite place."
            </p>

            <p>
                She smiles.
            </p>

            <p>
                "Makes long journeys considerably more pleasant."
            </p>

            <p>
                The Scented Travel Candle is added to your belongings.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Sella's Goods"
    ]);

}

function buySellaCompass() {

    if (playerSilver < 18) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Sella glances at the compass.
                </p>

                <p>
                    "It's a lovely thing."
                </p>

                <p>
                    "Perhaps when you've got the silver to match."
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Sella's Goods"
        ]);

        return;

    }

    removeSilver(18);

    addItem("pocket_compass", "Pocket Compass", "equipment");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                Sella places the small compass in your hand.
            </p>

            <p>
                The brass casing is worn but carefully polished.
            </p>

            <p>
                "Eighteen silver."
            </p>

            <p>
                "Been with me for years."
            </p>

            <p>
                She pauses.
            </p>

            <p>
                "Still points north, which is more than I can say for some captains I've travelled with."
            </p>

            <p>
                The Pocket Compass is added to your belongings.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Sella's Goods"
    ]);

}

function buySellaThread() {

    if (playerSilver < 16) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Sella gives you a sympathetic shrug.
                </p>

                <p>
                    "It's good thread."
                </p>

                <p>
                    "Unfortunately, good things rarely come cheaply."
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Sella's Goods"
        ]);

        return;

    }

    removeSilver(16);

    addItem("fine_thread_needle", "Fine Thread & Needle", "supplies");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                Sella produces a neatly wrapped bundle of fine thread and a slender needle.
            </p>

            <p>
                "Sixteen silver."
            </p>

            <p>
                "Made in a place where apparently even thread has standards."
            </p>

            <p>
                She smiles.
            </p>

            <p>
                "You'll notice the difference."
            </p>

            <p>
                The Fine Thread & Needle is added to your belongings.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Sella's Goods"
    ]);

}

function buySellaTea() {

    if (playerSilver < 9) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Sella gives you a sympathetic smile.
                </p>

                <p>
                    "It's tea, not treasure."
                </p>

                <p>
                    She pauses.
                </p>

                <p>
                    "Though some people would argue otherwise."
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Sella's Goods"
        ]);

        return;

    }

    removeSilver(9);

    addItem("travellers_tea", "Dried Traveller's Tea", "supplies");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                Sella scoops a small bundle of dried leaves into a paper packet.
            </p>

            <p>
                "Nine silver."
            </p>

            <p>
                "A little bitter."
            </p>

            <p>
                She smiles.
            </p>

            <p>
                "Good for keeping you awake on a long road."
            </p>

            <p>
                The Dried Traveller's Tea is added to your belongings.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Sella's Goods"
    ]);

}

function buySellaForeignCoin() {

    if (playerSilver < 12) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Sella glances at the coin.
                </p>

                <p>
                    "Perhaps another time."
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Sella's Goods"
        ]);

        return;

    }

    removeSilver(12);

    addItem("foreign_coin", "Foreign Coin", "unusual");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                Sella picks up the unusual coin and places it carefully in your hand.
            </p>

            <p>
                The metal is unfamiliar, and the markings on its surface mean nothing to you.
            </p>

            <p>
                "Twelve silver."
            </p>

            <p>
                She smiles.
            </p>

            <p>
                "Worth considerably less where it came from."
            </p>

            <p>
                "That's how these things work."
            </p>

            <p>
                The Foreign Coin is added to your unusual items.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Sella's Goods"
    ]);

}

function buySellaLuckCharm() {

    if (playerSilver < 13) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Sella gives the charm an approving glance.
                </p>

                <p>
                    "It's not going anywhere."
                </p>

                <p>
                    "Come back when you've got the silver."
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Sella's Goods"
        ]);

        return;

    }

    removeSilver(13);

    addItem("carved_luck_charm", "Carved Luck Charm", "unusual");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                Sella lifts the small carved charm from its hook.
            </p>

            <p>
                It is worn smooth in places, though the markings carved into it remain surprisingly sharp.
            </p>

            <p>
                "Thirteen silver."
            </p>

            <p>
                "Supposed to bring luck."
            </p>

            <p>
                She smiles.
            </p>

            <p>
                "Supposed to."
            </p>

            <p>
                The Carved Luck Charm is added to your unusual items.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Sella's Goods"
    ]);

}

function buySellaMapFragment() {

    if (playerSilver < 26) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Sella glances at the map fragment.
                </p>

                <p>
                    "It's expensive."
                </p>

                <p>
                    She shrugs.
                </p>

                <p>
                    "So is knowing where you're going."
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Sella's Goods"
        ]);

        return;

    }

    removeSilver(26);

    addItem("unmarked_map_fragment", "Unmarked Map Fragment", "unusual");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                Sella carefully unfolds the fragment.
            </p>

            <p>
                The parchment is old and faded.
            </p>

            <p>
                No names or markings identify the place it depicts.
            </p>

            <p>
                "Twenty-six silver."
            </p>

            <p>
                She watches you study it.
            </p>

            <p>
                "Don't ask me where it leads."
            </p>

            <p>
                She smiles.
            </p>

            <p>
                "If I knew, I'd have charged more."
            </p>

            <p>
                The Unmarked Map Fragment is added to your unusual items.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Sella's Goods"
    ]);

}

function buySellaSealedBox() {

    if (playerSilver < 15) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Sella taps the little box.
                </p>

                <p>
                    "You'll have to wonder about it for a while longer."
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Sella's Goods"
        ]);

        return;

    }

    removeSilver(15);

    addItem("sealed_little_box", "Sealed Little Box", "unusual");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                Sella places the little box on the counter.
            </p>

            <p>
                It is small enough to fit comfortably in your palm.
            </p>

            <p>
                There is no visible keyhole.
            </p>

            <p>
                "Fifteen silver."
            </p>

            <p>
                You turn it over in your hands.
            </p>

            <p>
                Sella watches you.
            </p>

            <p>
                "Yes."
            </p>

            <p>
                "It's sealed."
            </p>

            <p>
                She smiles.
            </p>

            <p>
                "That's generally why I call it that."
            </p>

            <p>
                The Sealed Little Box is added to your unusual items.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Sella's Goods"
    ]);

}

function buyTovinSword() {

    if (playerSilver < 90) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Tovin looks at the sword.
                </p>

                <p>
                    "Ninety silver."
                </p>

                <p>
                    He gives you a sympathetic smile.
                </p>

                <p>
                    "I did warn you it was special."
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Tovin's Goods"
        ]);

        return;

    }

    removeSilver(90);

    addItem("ornate_sealed_sword", "Ornate Sword in Sealed Scabbard", "equipment");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                Tovin carefully wraps the sword in a length of old cloth before handing it over.
            </p>

            <p>
                "Ninety silver."
            </p>

            <p>
                He watches you struggle slightly with its weight.
            </p>

            <p>
                "Worth every coin."
            </p>

            <p>
                He pauses.
            </p>

            <p>
                "Probably."
            </p>

            <p>
                The Ornate Sword in Sealed Scabbard is added to your belongings.
            </p>

        </div>

    `;

    showChoices([
        "↩️ Back to Tovin's Goods"
    ]);

}

function buyTovinSpyglass() {

    if (playerSilver < 34) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Tovin looks at the spyglass.
                </p>

                <p>
                    "Thirty-four silver."
                </p>

                <p>
                    "It's a very good spyglass."
                </p>

            </div>

        `;

        showChoices(["↩️ Back to Tovin's Goods"]);

        return;

    }

    removeSilver(34);

    addItem("barnacled_spyglass", "Barnacled Brass Spyglass", "equipment");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                You hand over the silver and take the spyglass.
            </p>

            <p>
                Tovin gives you a satisfied nod.
            </p>

            <p>
                "Thirty-four silver well spent."
            </p>

        </div>

    `;

    showChoices(["↩️ Back to Tovin's Goods"]);

}


function buyTovinKey() {

    if (playerSilver < 28) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for that.
                </p>

                <p>
                    Tovin shrugs.
                </p>

                <p>
                    "Someone'll buy it eventually."
                </p>

            </div>

        `;

        showChoices(["↩️ Back to Tovin's Goods"]);

        return;

    }

    removeSilver(28);

    addItem("unknown_harbour_key", "Key with No Known Lock", "unusual");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                You hand over the silver and take the old key.
            </p>

            <p>
                Tovin pockets the coins with a grin.
            </p>

        </div>

    `;

    showChoices(["↩️ Back to Tovin's Goods"]);

}

function buyTovinJournal() {

    if (playerSilver < 32) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for the journal.
                </p>

                <p>
                    Tovin shrugs.
                </p>

                <p>
                    "Probably just as well. It's mostly ruined."
                </p>

            </div>

        `;

        showChoices(["↩️ Back to Tovin's Goods"]);

        return;

    }

    removeSilver(32);

    addItem("waterlogged_captains_journal", "Waterlogged Captain's Journal", "unusual");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                You take the waterlogged journal.
            </p>

            <p>
                Tovin counts the silver before tucking it away.
            </p>

        </div>

    `;

    showChoices(["↩️ Back to Tovin's Goods"]);

}


function buyTovinBlackSand() {

    if (playerSilver < 24) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for the bottle.
                </p>

                <p>
                    Tovin looks genuinely disappointed.
                </p>

                <p>
                    "It's very unusual sand."
                </p>

            </div>

        `;

        showChoices(["↩️ Back to Tovin's Goods"]);

        return;

    }

    removeSilver(24);

    addItem("bottle_of_black_sand", "Bottle of Black Sand", "unusual");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                You take the small bottle.
            </p>

            <p>
                The black sand shifts slowly inside.
            </p>

        </div>

    `;

    showChoices(["↩️ Back to Tovin's Goods"]);

}


function buyTovinMedal() {

    if (playerSilver < 27) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for the medal.
                </p>

                <p>
                    Tovin shrugs.
                </p>

                <p>
                    "Still going to be here."
                </p>

            </div>

        `;

        showChoices(["↩️ Back to Tovin's Goods"]);

        return;

    }

    removeSilver(27);

    addItem("corroded_naval_medal", "Corroded Naval Medal", "unusual");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                You take the corroded medal.
            </p>

            <p>
                Tovin gives you a satisfied smile.
            </p>

        </div>

    `;

    showChoices(["↩️ Back to Tovin's Goods"]);

}


function buyTovinDie() {

    if (playerSilver < 19) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for the die.
                </p>

                <p>
                    Tovin rolls it once across the counter.
                </p>

                <p>
                    "Shame."
                </p>

            </div>

        `;

        showChoices(["↩️ Back to Tovin's Goods"]);

        return;

    }

    removeSilver(19);

    addItem("carved_bone_die", "Carved Bone Die", "unusual");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                You take the carved bone die.
            </p>

            <p>
                Tovin pockets the silver.
            </p>

            <p>
                "Lucky choice."
            </p>

        </div>

    `;

    showChoices(["↩️ Back to Tovin's Goods"]);

}


function buyTovinBell() {

    if (playerSilver < 45) {

        document.getElementById("story").innerHTML += `

            <div class="story-panel">

                <p>
                    You don't have enough silver for the bell.
                </p>

                <p>
                    Tovin looks disappointed.
                </p>

                <p>
                    "It's very quiet."
                </p>

            </div>

        `;

        showChoices(["↩️ Back to Tovin's Goods"]);

        return;

    }

    removeSilver(45);

    addItem("silent_brass_bell", "Silent Brass Bell", "unusual");

    document.getElementById("story").innerHTML += `

        <div class="story-panel">

            <p>
                You hand over the silver and take the silent bell.
            </p>

            <p>
                Tovin watches you carefully.
            </p>

            <p>
                "Don't lose that."
            </p>

        </div>

    `;

    showChoices(["↩️ Back to Tovin's Goods"]);

}

// =====================================
// CHARACTER SHEET
// =====================================

function openCharacterSheet() {
    
    if (document.getElementById("characterPanel")) {
        return;
    }
    
    const attackBonus = getEquipmentAttackBonus();
    
    const finalAttack = 0 + attackBonus;
    
    document.getElementById("story").innerHTML += `

        <div id="characterPanel" class="story-panel">

            <h2>📜 Character</h2>

            <h3>⚔️ Statistics</h3>

            <p>
                <strong>Attack:</strong>
                ${finalAttack}
            </p>

            <h3>🛡️ Equipment</h3>

            <p>
                🪖 <strong>Head:</strong>
                ${getEquipmentName("head")}
            </p>

            <p>
                🛡️ <strong>Body:</strong>
                ${getEquipmentName("body")}
            </p>

            <p>
                🧤 <strong>Arms / Hands:</strong>
                ${getEquipmentName("arms")}
            </p>

            <p>
                👢 <strong>Legs:</strong>
                ${getEquipmentName("legs")}
            </p>

            <p>
                💍 <strong>Jewellery 1:</strong>
                ${getEquipmentName("jewellery1")}
            </p>

            <p>
                💍 <strong>Jewellery 2:</strong>
                ${getEquipmentName("jewellery2")}
            </p>

            <p>
                ⚔️ <strong>Weapon:</strong>
                ${getEquipmentName("weapon")}
            </p>

            <p>
                🛡️ <strong>Offhand:</strong>
                ${getEquipmentName("offhand")}
            </p>

            <button onclick="closeCharacterSheet()">
                ✕ Close
            </button>

        </div>

    `;
    
}

function getEquipmentName(slot) {

    if (!playerEquipment[slot]) {

        return "";

    }

    return playerEquipment[slot].name;

}

function closeCharacterSheet() {

    const panel =
        document.getElementById("characterPanel");

    if (panel) {

        panel.remove();

    }

}