const armourDefinitions = {

    padded_cap: {
        id: "padded_cap",
        name: "Padded Cap",
        category: "equipment",
        equipSlot: "head",
        protection: 1,
        price: 15,
        description: "A simple padded cap offering basic protection to the head without restricting movement."
    },

    padded_cuirass: {
        id: "padded_cuirass",
        name: "Padded Cuirass",
        category: "equipment",
        equipSlot: "body",
        protection: 2,
        price: 30,
        description: "A sturdy padded cuirass offering dependable protection while remaining light enough for everyday travel."
    },

    padded_bracers: {
        id: "padded_bracers",
        name: "Padded Bracers",
        category: "equipment",
        equipSlot: "arms",
        protection: 1,
        price: 15,
        description: "Thickly padded bracers designed to protect the forearms from glancing blows and rough treatment."
    },

    padded_greaves: {
        id: "padded_greaves",
        name: "Padded Greaves",
        category: "equipment",
        equipSlot: "legs",
        protection: 1,
        price: 20,
        description: "Reinforced padded coverings that protect the legs without making movement unnecessarily difficult."
    },

    round_shield: {
        id: "round_shield",
        name: "Round Shield",
        category: "equipment",
        equipSlot: "offhand",
        defenceBonus: 2,
        attackModifier: 0,
        price: 25,
        description: "A practical wooden shield reinforced with a metal rim. Compact enough to remain useful without getting in the way."
    },

    tall_shield: {
        id: "tall_shield",
        name: "Tall Shield",
        category: "equipment",
        equipSlot: "offhand",
        defenceBonus: 3,
        attackModifier: -2,
        price: 40,
        description: "A large shield offering excellent protection. Its size makes it cumbersome to fight around, however, hindering attacks."
    }

};

function getPlayerProtection() {

    let protection = 0;

    const armourSlots = [
        "head",
        "body",
        "arms",
        "legs"
    ];

    armourSlots.forEach(slot => {

        const item = playerEquipment[slot];

        if (!item) {
            return;
        }

        if (item.protection) {
            protection += item.protection;
        }

    });

    return protection;

}

function getPlayerDefenceBonus() {

    let defenceBonus = 0;

    const shield = playerEquipment.offhand;

    if (!shield) {
        return defenceBonus;
    }

    if (shield.defenceBonus) {
        defenceBonus += shield.defenceBonus;
    }

    return defenceBonus;

}