let playerSilver = 50;

let playerInventory = [];

function addItem(id, name, category) {

    const existingItem = playerInventory.find(item => item.id === id);

    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        playerInventory.push({
            id: id,
            name: name,
            category: category,
            quantity: 1
        });

    }

}

function hasItem(id) {

    return playerInventory.some(item => item.id === id);

}

function getItemQuantity(id) {

    const item = playerInventory.find(item => item.id === id);

    if (!item) {
        return 0;
    }

    return item.quantity;

}

function openInventory() {

    if (document.getElementById("inventoryPanel")) {
        return;
    }

    const equipment = playerInventory.filter(item => item.category === "equipment");
    const supplies = playerInventory.filter(item => item.category === "supplies");
    const keyItems = playerInventory.filter(item => item.category === "key");

    function buildItemList(items) {

        if (items.length === 0) {
            return `<p><em>None</em></p>`;
        }

        return `
            <ul>
                ${items.map(item => `
                    <li>
                        ${item.name} ×${item.quantity}
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