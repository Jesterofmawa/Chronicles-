const COMBAT_DELAY = 3000;

// =====================================
// CHRONICLES COMBAT SYSTEM
// =====================================

// Combat state

let combatActive = false;

let combatPlayer = {
    name: "Player",
    hp: 20,
    maxHp: 20,
    weapon: {
        id: "standard_sword",
        name: "Standard Sword",
        damage: "1d6"
    }
};

let combatEnemies = [];
let combatEncounter = [];
let combatTurnOrder = [];
let combatTurnIndex = 0;

let combatResult = null;

let playerDefending = false;

let combatPipReactions = {
    criticalHit: false,
    criticalFailure: false,
    heavyDamage: false,
    creatureDesperate: false,
    playerBadlyWounded: false,
    creatureFleeing: false
};

let currentAttack = {
    enemy: null,
    attackRoll: null,
    defenceRoll: null,
    damageRoll: null,
    result: null,
    damage: 0,
    critical: false
};

// =====================================
// START COMBAT
// =====================================

// =====================================
// GREYHAVEN SEA CREATURE
// =====================================

function createGreyhavenSeaCreature() {

    return {

        id: "greyhaven_sea_creature",

        name: "Unknown Sea Creature",

        maxHp: 18,

        fleeDifficulty: 16,

        description: `
            A tall, hunched figure emerges from the shallows.
            Its skin is dark and leathery, slick with seawater.
            Long arms hang almost to its knees, ending in webbed hands.
            Its large, dark eyes reflect the light as it watches you.
        `

    };

}

// =====================================
// PIP — GREYHAVEN SEA CREATURE
// =====================================

function getGreyhavenCreaturePipComment() {

    if (
        hasLongTermMemory(
            "greyhaven_strange_material_discovered"
        )
    ) {

        return `

            <div class="story-panel">

                <p>
                    🐿️ <strong>Pip stares at the creature.</strong>
                </p>

                <p>
                    "Wait..."
                </p>

                <p>
                    His ears flatten.
                </p>

                <p>
                    "That skin."
                </p>

                <p>
                    "We've seen that before."
                </p>

            </div>

        `;

    }


    return `

        <div class="story-panel">

            <p>
                🐿️ <strong>Pip goes very quiet.</strong>
            </p>

            <p>
                His eyes follow the creature.
            </p>

            <p>
                "That's... not a fish."
            </p>

            <p>
                "I don't think it's supposed to be here."
            </p>

        </div>

    `;

}

function startCombat(enemies) {

pausePipObservations();

    // =====================================
    // GET EQUIPPED WEAPON
    // =====================================

    if (playerEquipment.weapon) {

        combatPlayer.weapon = {
            ...playerEquipment.weapon
        };

    } else {

        combatPlayer.weapon = {
            id: "unarmed",
            name: "Unarmed",
            damage: "1d4"
        };

    }

    combatActive = true;
    combatResult = null;

combatPipReactions = {
    criticalHit: false,
    criticalFailure: false,
    heavyDamage: false,
    creatureDesperate: false,
    playerBadlyWounded: false,
    creatureFleeing: false
};

combatEncounter = enemies.map(enemy => ({
    ...enemy
}));

    combatPlayer.hp = combatPlayer.maxHp;

    combatEnemies = enemies.map(enemy => ({
        ...enemy,
        currentHp: enemy.maxHp,
        defeated: false,
        initiative: null
    }));

    combatTurnOrder = [];
    combatTurnIndex = 0;

    rollCombatInitiative();

}


// =====================================
// INITIATIVE
// =====================================

function rollCombatInitiative() {

    let initiativeResults = [];

    // Player initiative

    const playerRoll = createPipRoll("1d20");

    initiativeResults.push({
        type: "player",
        name: combatPlayer.name,
        roll: playerRoll.result.total
    });


    // Enemy initiative

    combatEnemies.forEach((enemy, index) => {

        const enemyRoll = createPipRoll("1d20");

        enemy.initiative = enemyRoll.result.total;

        initiativeResults.push({
            type: "enemy",
            index: index,
            name: enemy.name,
            roll: enemyRoll.result.total
        });

    });


    // Check for ties

    const rollValues = initiativeResults.map(result => result.roll);

    const duplicateRolls = rollValues.filter(
        (roll, index) => rollValues.indexOf(roll) !== index
    );


    // If there is an initiative tie, roll again.

    if (duplicateRolls.length > 0) {

        rollCombatInitiative();

        return;

    }


    // Sort highest initiative first.

    initiativeResults.sort((a, b) => b.roll - a.roll);

    combatTurnOrder = initiativeResults;

    combatTurnIndex = 0;

    showInitiativeResults();

}


// =====================================
// SHOW INITIATIVE
// =====================================

function showInitiativeResults() {

    let initiativeText = "";

    combatTurnOrder.forEach((combatant, index) => {

        initiativeText += `

            <p>
                <strong>
                    ${index + 1}. ${combatant.name}
                </strong>
                — Initiative: ${combatant.roll}
            </p>

        `;

    });


    document.getElementById("story").innerHTML = `

    <div class="story-panel">

        <h2>⚔️ Combat Begins</h2>

        <p>
            Initiative is rolled.
        </p>

        ${initiativeText}

        <p>
            <strong>
                ${combatTurnOrder[0].name} goes first.
            </strong>
        </p>

    </div>

    ${
        combatEnemies.some(
            enemy => enemy.id === "greyhaven_sea_creature"
        )
        ? getGreyhavenCreaturePipComment()
        : ""
    }

`;


    showChoices([
        "▶️ Begin Combat"
    ]);

}

// =====================================
// BEGIN COMBAT TURN
// =====================================

function beginCombatTurn() {

    const currentCombatant = combatTurnOrder[combatTurnIndex];

    if (currentCombatant.type === "player") {

        showPlayerCombatTurn();

    } else {

        showEnemyCombatTurn();

    }

}

// =====================================
// PLAYER COMBAT TURN
// =====================================

function showPlayerCombatTurn() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <h2>⚔️ Your Turn</h2>

            <p>
                You have the initiative.
            </p>

            <p>
                <strong>
                    HP: ${combatPlayer.hp} / ${combatPlayer.maxHp}
                </strong>
            </p>

        </div>

    `;

    showChoices([
        "⚔️ Attack",
        "🛡️ Defend",
        "🎒 Inventory",
        "🏃 Flee"
    ]);

}

// =====================================
// ENEMY COMBAT TURN
// =====================================

function showEnemyCombatTurn() {

document.getElementById("choices").innerHTML = "";

    const enemy = combatEnemies[combatTurnOrder[combatTurnIndex].index];

    if (!enemy || enemy.defeated) {

        advanceCombatTurn();

        return;

    }

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <h2>⚔️ ${enemy.name}</h2>

            <p>
                <strong>${enemy.name} prepares to attack.</strong>
            </p>

            <p>
                HP: ${enemy.currentHp} / ${enemy.maxHp}
            </p>

        </div>

    `;

    setTimeout(() => {

        enemyAttackRoll();

    }, COMBAT_DELAY);

}

// =====================================
// ENEMY FLEE CHECK
// =====================================

function attemptEnemyFlee(enemy) {

    const fleeRoll = rollDice("1d20");

    let pipReaction =
        getCombatPipReaction("creatureFleeing");


    // =====================================
    // SUCCESSFUL ESCAPE
    // =====================================

    if (fleeRoll.total >= enemy.fleeDifficulty) {

        combatActive = false;
        combatResult = "escaped";
        playerDefending = false;


        rememberLongTerm(
            "greyhaven_sea_creature_escaped_" + Date.now(),
            "The unknown sea creature was badly wounded during the Greyhaven shoreline encounter and escaped back into the sea.",
            {
                topic: "greyhaven",
                type: "creature_escape",
                importance: 3,
                pip: "It got away from us at Greyhaven. I don't think that was the last we've seen of it."
            }
        );


        document.getElementById("story").innerHTML = `

            <div class="story-panel">

                <h2>🌊 The Creature Escapes</h2>

                <p>
                    The creature staggers backwards.
                </p>

                <p>
                    Its dark eyes flick towards the sea.
                </p>

                <p>
                    Then it turns and scrambles towards the shallows.
                </p>

                <p>
                    It disappears beneath the water.
                </p>

            </div>

            <div class="story-panel">

                <p>
                    🎲 <strong>Flee Roll — d20</strong>
                </p>

                <p>
                    <strong>${fleeRoll.total}</strong>
                </p>

                ${
                    fleeRoll.total === 20
                    ? `
                        <p>
                            <strong>🌟 Desperate Escape!</strong>
                        </p>

                        <p>
                            The creature vanishes into the water before you can react.
                        </p>
                    `
                    : `
                        <p>
                            The creature escapes into the sea.
                        </p>
                    `
                }

            </div>

            ${pipReaction}

        `;


        showChoices([
            "↩️ Return to the Beach"
        ]);

        return true;

    }


    // =====================================
    // FAILED ESCAPE
    // =====================================

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <h2>🌊 The Creature Hesitates</h2>

            <p>
                The creature looks towards the sea.
            </p>

            <p>
                For a moment, it seems ready to flee.
            </p>

            <p>
                Then it turns back towards you.
            </p>

            <p>
                It refuses to give up.
            </p>

        </div>

        <div class="story-panel">

            <p>
                🎲 <strong>Flee Roll — d20</strong>
            </p>

            <p>
                <strong>${fleeRoll.total}</strong>
            </p>

            <p>
                The creature remains and continues the fight.
            </p>

        </div>

    `;


    return false;

}

// =====================================
// ENEMY ATTACK ROLL
// =====================================

function enemyAttackRoll() {

    const enemy = combatEnemies[combatTurnOrder[combatTurnIndex].index];

    if (!enemy || enemy.defeated) {

        advanceCombatTurn();

        return;

    }

// =====================================
// BADLY WOUNDED CREATURE MAY FLEE
// =====================================

if (
    enemy.id === "greyhaven_sea_creature" &&
    enemy.currentHp > 0 &&
    enemy.currentHp <= 5
) {

    const escaped = attemptEnemyFlee(enemy);

    if (escaped) {

        return;

    }

}

    const result = rollDice("1d20");

    enemy.currentAttackRoll = result.total;

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <h2>⚔️ Enemy Attack Roll</h2>

            <p>
                <strong>${enemy.name} attacks.</strong>
            </p>

            <p>
                🎲 <strong>Attack Roll — d20</strong>
            </p>

            <p>
                <strong>${result.total}</strong>
            </p>

        </div>

    `;

    setTimeout(() => {

        enemyDefenceRoll();

    }, COMBAT_DELAY);

}


// =====================================
// PLAYER DEFENCE AGAINST ENEMY
// =====================================

function enemyDefenceRoll() {

    const enemy = combatEnemies[combatTurnOrder[combatTurnIndex].index];

    if (!enemy || enemy.defeated) {

        advanceCombatTurn();

        return;

    }

    let result;

if (playerDefending) {

    result = rollDice("2d20");

    enemy.playerDefenceRoll = Math.max(
        ...result.rolls
    );

} else {

    result = rollDice("1d20");

    enemy.playerDefenceRoll = result.total;

}

    let outcome = "";


    // =====================================
    // NATURAL 1
    // =====================================

    if (result.total === 1) {

        outcome = `

            <p>
                <strong>💀 Critical Failure!</strong>
            </p>

            <p>
                Your defence fails completely.
            </p>

        `;

        enemy.attackResult = "hit";

    }


    // =====================================
    // NATURAL 20
    // =====================================

    else if (result.total === 20) {

        outcome = `

            <p>
                <strong>🌟 Critical Defence!</strong>
            </p>

            <p>
                You successfully avoid the attack.
            </p>

        `;

        enemy.attackResult = "miss";

    }


    // =====================================
    // PLAYER WINS
    // =====================================

    else if (result.total > enemy.currentAttackRoll) {

        outcome = `

            <p>
                <strong>🛡️ Defence succeeds!</strong>
            </p>

            <p>
                You avoid the attack.
            </p>

        `;

        enemy.attackResult = "miss";

    }


    // =====================================
    // TIE
    // =====================================

    else if (result.total === enemy.currentAttackRoll) {

        outcome = `

            <p>
                <strong>⚔️ The rolls are tied.</strong>
            </p>

            <p>
                The attack connects, but only partially.
            </p>

            <p>
                Half damage will be dealt.
            </p>

        `;

        enemy.attackResult = "half_hit";

    }


    // =====================================
    // ENEMY WINS
    // =====================================

    else {

        outcome = `

            <p>
                <strong>❌ Defence fails.</strong>
            </p>

            <p>
                ${enemy.name}'s attack gets through.
            </p>

        `;

        enemy.attackResult = "hit";

    }


    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <h2>🛡️ Defence Roll</h2>

            <p>
    🎲 <strong>
        Defence Roll — ${playerDefending ? "2d20" : "d20"}
    </strong>
</p>

<p>
    <strong>
        Rolls: ${result.rolls.join(", ")}
    </strong>
</p>

<p>
    <strong>
        Defence Result: ${enemy.playerDefenceRoll}
    </strong>
</p>

${
    playerDefending
    ? `
        <p>
            You take the higher of the two rolls.
        </p>
    `
    : ""
}

            ${outcome}

        </div>

    `;


    // =====================================
    // DEFENCE SUCCESSFUL
    // =====================================

    if (enemy.attackResult === "miss") {

        setTimeout(() => {

            finishEnemyTurn();

        }, COMBAT_DELAY);

        return;

    }


    // =====================================
    // ATTACK CONNECTED
    // =====================================

    setTimeout(() => {

        enemyDamageRoll();

    }, COMBAT_DELAY);

}


// =====================================
// ENEMY DAMAGE ROLL
// =====================================

function enemyDamageRoll() {

    const enemy = combatEnemies[combatTurnOrder[combatTurnIndex].index];

    if (!enemy || enemy.defeated) {

        advanceCombatTurn();

        return;

    }

    const result = rollDice("1d6");

    let damage = result.total;


    // =====================================
    // HALF DAMAGE ON TIE
    // =====================================

    if (enemy.attackResult === "half_hit") {

        damage = Math.floor(damage / 2);

    }

combatPlayer.hp -= damage;

if (combatPlayer.hp < 0) {

    combatPlayer.hp = 0;

}

let pipWoundedReaction = "";

if (
    combatPlayer.hp > 0 &&
    combatPlayer.hp <= Math.floor(combatPlayer.maxHp * 0.25)
) {

    pipWoundedReaction =
        getCombatPipReaction("playerBadlyWounded");

}

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <h2>💥 Damage</h2>

            <p>
                🎲 <strong>Damage Roll — d6</strong>
            </p>

            <p>
                <strong>${result.total}</strong>
            </p>

            ${
                enemy.attackResult === "half_hit"
                ? `
                    <p>
                        Half damage is applied.
                    </p>
                `
                : ""
            }

            <p>
                <strong>
                    You take ${damage} damage.
                </strong>
            </p>

            <p>
                <strong>
                    Your HP:
                    ${combatPlayer.hp} / ${combatPlayer.maxHp}
                </strong>
            </p>

        </div>

${pipWoundedReaction}

    `;


    // =====================================
    // PLAYER DEFEATED
    // =====================================

    if (combatPlayer.hp <= 0) {

        setTimeout(() => {

            showDefeatScreen();

        }, COMBAT_DELAY);

        return;

    }


    // =====================================
    // FINISH ENEMY TURN
    // =====================================

    setTimeout(() => {

        finishEnemyTurn();

    }, COMBAT_DELAY);

}


// =====================================
// FINISH ENEMY TURN
// =====================================
function finishEnemyTurn() {

    playerDefending = false;

    advanceCombatTurn();

}

// =====================================
// PLAYER ATTACK
// =====================================

// =====================================
// PLAYER ATTACK
// =====================================

// =====================================
// PLAYER ATTACK
// =====================================

function playerAttack() {

    // Find the first living enemy.
    // Target selection will be expanded when
    // multiple enemies are introduced.

    const enemy = combatEnemies.find(enemy => !enemy.defeated);

    if (!enemy) {

        return;

    }

    currentAttack = {
        enemy: enemy,
        attackRoll: null,
        defenceRoll: null,
        damageRoll: null,
        result: null,
        damage: 0,
        critical: false
    };


    // =====================================
    // ATTACK ROLL
    // =====================================

    const attackRoll = createPipRoll("1d20");

    currentAttack.attackRoll = attackRoll.result.total;


    // =====================================
    // NATURAL 1
    // =====================================

    if (currentAttack.attackRoll === 1) {

        currentAttack.result = "critical_failure";

const pipReaction =
    getCombatPipReaction("criticalFailure");

        document.getElementById("story").innerHTML = `

            <div class="story-panel">

                <h2>⚔️ Attack Roll</h2>

                <p>
    You attack <strong>${enemy.name}</strong>
    with your <strong>${combatPlayer.weapon.name}</strong>.
</p>

                ${attackRoll.html}

                <p>
                    <strong>Your Attack Roll: 1</strong>
                </p>

                <p>
                    <strong>💀 Critical Failure!</strong>
                </p>

                <p>
                    Your attack misses completely.
                </p>

            </div>

${pipReaction}

        `;

        showChoices([
            "▶️ End Turn"
        ]);

        return;

    }


    // =====================================
    // NATURAL 20
    // =====================================

    if (currentAttack.attackRoll === 20) {

        currentAttack.result = "critical_hit";
        currentAttack.critical = true;

const pipReaction =
    getCombatPipReaction("criticalHit");

        document.getElementById("story").innerHTML = `

            <div class="story-panel">

                <h2>⚔️ Attack Roll</h2>

<p>
    You attack <strong>${enemy.name}</strong>
    with your <strong>${combatPlayer.weapon.name}</strong>.
</p>

                ${attackRoll.html}

                <p>
                    <strong>Your Attack Roll: 20</strong>
                </p>

                <p>
                    <strong>🌟 Critical Hit!</strong>
                </p>

                <p>
                    Your attack automatically hits.
                </p>

                <p>
                    Your critical damage will be rolled separately.
                </p>

            </div>

${pipReaction}

        `;

        showChoices([
            "▶️ Roll Critical Damage"
        ]);

        return;

    }


    // =====================================
    // NORMAL ATTACK
    // =====================================

    currentAttack.result = "awaiting_defence";

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <h2>⚔️ Attack Roll</h2>

            <p>
    You attack <strong>${enemy.name}</strong>
    with your <strong>${combatPlayer.weapon.name}</strong>.
</p>

            ${attackRoll.html}

            <p>
                <strong>
                    Your Attack Roll: ${currentAttack.attackRoll}
                </strong>
            </p>

            <p>
                The attack roll is complete.
            </p>

        </div>

    `;

    showChoices([
        "▶️ Continue"
    ]);

}

// =====================================
// PLAYER ATTACK — DEFENCE ROLL
// =====================================

function resolvePlayerDefence() {

    const enemy = currentAttack.enemy;

    if (!enemy) {

        return;

    }


    const defenceRoll = createPipRoll("1d20");

    currentAttack.defenceRoll = defenceRoll.result.total;


    // =====================================
    // ATTACKER WINS
    // =====================================

    if (currentAttack.attackRoll > currentAttack.defenceRoll) {

        currentAttack.result = "hit";

        document.getElementById("story").innerHTML = `

            <div class="story-panel">

                <h2>🛡️ Defence Roll</h2>

                ${defenceRoll.html}

                <p>
                    <strong>
                        ${enemy.name}'s Defence Roll:
                        ${currentAttack.defenceRoll}
                    </strong>
                </p>

                <p>
                    <strong>⚔️ Hit!</strong>
                </p>

                <p>
                    Your attack breaks through the defence.
                </p>

            </div>

        `;

        showChoices([
            "▶️ Roll Damage"
        ]);

        return;

    }


    // =====================================
    // TIE
    // =====================================

    if (currentAttack.attackRoll === currentAttack.defenceRoll) {

        currentAttack.result = "half_hit";

        document.getElementById("story").innerHTML = `

            <div class="story-panel">

                <h2>🛡️ Defence Roll</h2>

                ${defenceRoll.html}

                <p>
                    <strong>
                        ${enemy.name}'s Defence Roll:
                        ${currentAttack.defenceRoll}
                    </strong>
                </p>

                <p>
                    <strong>⚔️ The rolls are tied.</strong>
                </p>

                <p>
                    Your attack connects, but only partially.
                </p>

                <p>
                    Half damage will be dealt.
                </p>

            </div>

        `;

        showChoices([
            "▶️ Roll Damage"
        ]);

        return;

    }


    // =====================================
    // DEFENDER WINS
    // =====================================

    currentAttack.result = "miss";

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <h2>🛡️ Defence Roll</h2>

            ${defenceRoll.html}

            <p>
                <strong>
                    ${enemy.name}'s Defence Roll:
                    ${currentAttack.defenceRoll}
                </strong>
            </p>

            <p>
                <strong>❌ Miss!</strong>
            </p>

            <p>
                The defence holds.
            </p>

        </div>

    `;

    showChoices([
        "▶️ End Turn"
    ]);

}

// =====================================
// PLAYER ATTACK — DAMAGE ROLL
// =====================================

function resolvePlayerDamage() {

    const enemy = currentAttack.enemy;

    if (!enemy) {

        return;

    }


    let damageExpression =
    combatPlayer.weapon.damage || "1d6";


    if (currentAttack.critical) {
    
    const match = damageExpression.match(
        /^(\d+)d(\d+)$/
    );
    
    if (match) {
        
        const diceCount = Number(match[1]);
        const diceSize = match[2];
        
        damageExpression =
            `${diceCount * 2}d${diceSize}`;
        
    }
    
}


    const damageRoll = createPipRoll(damageExpression);

    currentAttack.damageRoll = damageRoll.result.total;


    // =====================================
    // CALCULATE DAMAGE
    // =====================================

    if (currentAttack.result === "half_hit") {

        currentAttack.damage = Math.floor(
            currentAttack.damageRoll / 2
        );

    } else {

        currentAttack.damage = currentAttack.damageRoll;

    }


    enemy.currentHp -= currentAttack.damage;


    if (enemy.currentHp < 0) {

        enemy.currentHp = 0;

    }
    
    let pipHeavyDamageReaction = "";

if (currentAttack.damage >= 5) {

    pipHeavyDamageReaction =
        getCombatPipReaction("heavyDamage");

}


    // =====================================
    // CHECK DEFEAT
    // =====================================

    if (enemy.currentHp <= 0) {

        enemy.currentHp = 0;
        enemy.defeated = true;

    }


    // =====================================
    // DISPLAY DAMAGE
    // =====================================

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <h2>💥 Damage Roll</h2>

            ${damageRoll.html}

            <p>
                <strong>
                    Damage Roll: ${currentAttack.damageRoll}
                </strong>
            </p>

            ${
                currentAttack.result === "half_hit"
                ? `
                    <p>
                        Half damage is applied.
                    </p>
                `
                : ""
            }

            <p>
                <strong>
                    ${enemy.name} takes
                    ${currentAttack.damage} damage.
                </strong>
            </p>

            <p>
                <strong>
                    ${enemy.name} HP:
                    ${enemy.currentHp} / ${enemy.maxHp}
                </strong>
            </p>

        </div>

${pipHeavyDamageReaction}

    `;


    // =====================================
    // ENEMY DEFEATED
    // =====================================

    if (enemy.defeated) {

        showChoices([
            "🏆 Victory"
        ]);

        return;

    }


    showChoices([
        "▶️ End Turn"
    ]);

}

// =====================================
// ADVANCE COMBAT TURN
// =====================================

function advanceCombatTurn() {

    combatTurnIndex++;

    // End of the current round.
    // Start again from the first combatant.

    if (combatTurnIndex >= combatTurnOrder.length) {

        combatTurnIndex = 0;

    }

    beginCombatTurn();

}

// =====================================
// VICTORY
// =====================================

// =====================================
// VICTORY
// =====================================

function showVictoryScreen() {

    combatActive = false;
    combatResult = "victory";

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <h2>🏆 Victory</h2>

            <p>
                The creature lies motionless in the shallows.
            </p>

            <p>
                You remain standing.
            </p>

            <p>
                Something about the creature still feels wrong.
            </p>

        </div>

    `;

    showChoices([
        "🔎 Search the Creature",
        "↩️ Return to the Beach"
    ]);

}

// =====================================
// SEARCH DEFEATED SEA CREATURE
// =====================================

function searchGreyhavenSeaCreature() {

    // =====================================
    // PREVENT REPEATED SEARCHING
    // =====================================

    if (hasLongTermMemory("greyhaven_sea_creature_searched")) {

        document.getElementById("story").innerHTML = `

            <div class="story-panel">

                <h2>🔎 Search the Creature</h2>

                <p>
                    You search the creature again.
                </p>

                <p>
                    There is nothing more to find.
                </p>

            </div>

        `;

        showChoices([
            "↩️ Return to the Beach"
        ]);

        return;

    }


    // =====================================
    // SEARCH ROLL
    // =====================================

    const searchRoll = createPipRoll("1d20");
    const roll = searchRoll.result.total;

    let silverFound = 0;
    let foundRing = false;
    let foundBoneToken = false;
    let foundGreaterKits = false;


    // =====================================
    // 1–4
    // =====================================

    if (roll <= 4) {

        silverFound =
            Math.floor(Math.random() * 4) + 6;

    }


    // =====================================
    // 5–9
    // =====================================

    else if (roll <= 9) {

        silverFound =
            Math.floor(Math.random() * 4) + 6;

        foundRing = true;

    }


    // =====================================
    // 10–14
    // =====================================

    else if (roll <= 14) {

        silverFound =
            Math.floor(Math.random() * 6) + 15;

        foundRing = true;

    }


    // =====================================
    // 15–19
    // =====================================

    else if (roll < 20) {

        silverFound =
            Math.floor(Math.random() * 6) + 15;

        foundBoneToken = true;

    }


    // =====================================
    // NATURAL 20
    // =====================================

    else {

        silverFound =
            Math.floor(Math.random() * 6) + 15;

        foundBoneToken = true;
        foundGreaterKits = true;

    }


    // =====================================
    // ADD SILVER
    // =====================================

    addSilver(silverFound);


    // =====================================
    // ADD RING
    // =====================================

    if (foundRing) {

        addItem(
            "strange_ring",
            "Strange Ring",
            "equipment",
            false
        );

    }


    // =====================================
    // ADD BONE TOKEN
    // =====================================

    if (foundBoneToken) {

        addItem(
            "blackened_bone_token",
            "Blackened Bone Token",
            "unusual"
        );

    }


    // =====================================
    // ADD GREATER FIRST AID KITS
    // =====================================

    if (foundGreaterKits) {

        addItem(
            "greater_first_aid_kit",
            "Greater First Aid Kit",
            "supplies"
        );

        addItem(
            "greater_first_aid_kit",
            "Greater First Aid Kit",
            "supplies"
        );

    }


    // =====================================
    // REMEMBER SEARCH
    // =====================================

    rememberLongTerm(
        "greyhaven_sea_creature_searched",
        "The player searched the defeated sea creature and recovered items from it.",
        {
            topic: "greyhaven",
            type: "creature_search",
            importance: 3,
            pip: "We already searched that creature. There wasn't anything more to find."
        }
    );


    // =====================================
    // BUILD RESULT
    // =====================================

    let discoveries = `

        <p>
            🪙 <strong>${silverFound} silver added to your bag.</strong>
        </p>

    `;


    if (foundRing) {

        discoveries += `

            <p>
                💍 <strong>Strange Ring added to your bag.</strong>
            </p>

            <p>
                The ring gives off a faint, almost imperceptible glow.
            </p>

            <p>
                You have no idea what it does.
            </p>

        `;

    }


    if (foundBoneToken) {

        discoveries += `

            <p>
                🦴 <strong>Blackened Bone Token added to your bag.</strong>
            </p>

            <p>
                A strange mark has been carved into its surface.
            </p>

        `;

    }


    if (foundGreaterKits) {

        discoveries += `

            <p>
                🧰 <strong>2 Greater First Aid Kits added to your bag.</strong>
            </p>

            <p>
                Each kit can restore 15 HP when used.
            </p>

        `;

    }


    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <h2>🔎 Search the Creature</h2>

            ${searchRoll.html}

            <p>
                <strong>
                    Search Roll: ${roll}
                </strong>
            </p>

            ${discoveries}

        </div>

    `;


    showChoices([
        "↩️ Return to the Beach"
    ]);

}

// =====================================
// DEFEAT
// =====================================

function showDefeatScreen() {

    combatActive = false;
    combatResult = "defeat";
    playerDefending = false;


    // =====================================
    // CALCULATE SILVER LOSS
    // =====================================

    const lossPercentage =
        Math.floor(Math.random() * 6) + 5;

    let silverLost =
        Math.floor(playerSilver * (lossPercentage / 100));


    // If the player has silver but the percentage
    // would result in zero, take at least 1 silver.

    if (playerSilver > 0 && silverLost < 1) {

        silverLost = 1;

    }


    removeSilver(silverLost);


    // =====================================
    // REMEMBER THE DEFEAT
    // =====================================

    const enemyNames = combatEnemies
        .map(enemy => enemy.name)
        .join(", ");

    rememberLongTerm(
        "combat_defeat_" + Date.now(),
        `The player was defeated in combat against ${enemyNames}. They lost ${silverLost} silver afterwards.`,
        {
            topic: "combat",
            type: "defeat",
            importance: 3,
            pip: `We didn't exactly cover ourselves in glory there. We were defeated by ${enemyNames}.`
        }
    );


    // =====================================
    // DISPLAY DEFEAT
    // =====================================

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <h2>💀 Defeated</h2>

            <p>
                The fight ends badly.
            </p>

            <p>
                Bruised and battered, you are forced to retreat.
            </p>

            ${
                silverLost > 0
                ? `
                    <p>
                        In the aftermath, you lose
                        <strong>${silverLost} silver</strong>.
                    </p>
                `
                : `
                    <p>
                        You have no silver to lose.
                    </p>
                `
            }

            <p>
                <em>
                    Pip quietly makes a note in the Chronicle.
                </em>
            </p>

        </div>

    `;


    showChoices([
        "🔄 Retry"
    ]);

}

// =====================================
// RETRY COMBAT
// =====================================

function retryCombat() {

    combatActive = false;
    playerDefending = false;

    currentAttack = {
        enemy: null,
        attackRoll: null,
        defenceRoll: null,
        damageRoll: null,
        result: null,
        damage: 0,
        critical: false
    };


    startCombat(combatEncounter);

}

// =====================================
// PLAYER DEFEND
// =====================================

function playerDefend() {

    playerDefending = true;

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <h2>🛡️ Defensive Stance</h2>

            <p>
                You steady yourself and prepare for the enemy's attack.
            </p>

            <p>
                Your next defence roll will use <strong>2d20</strong>,
                taking the higher result.
            </p>

        </div>

    `;

    // End the player's turn automatically.

    setTimeout(() => {

        advanceCombatTurn();

    }, COMBAT_DELAY);

}

// =====================================
// ATTEMPT FLEE
// =====================================

function attemptFlee() {

    const enemy = combatEnemies.find(enemy => !enemy.defeated);

    if (!enemy) {

        return;

    }

    const fleeDifficulty = enemy.fleeDifficulty ?? 10;

    const fleeRoll = createPipRoll("1d20");

    const roll = fleeRoll.result.total;

    let escaped = false;


    // =====================================
    // NATURAL 1
    // =====================================

    if (roll === 1) {

        escaped = false;

    }


    // =====================================
    // NATURAL 20
    // =====================================

    else if (roll === 20) {

        escaped = true;

    }


    // =====================================
    // NORMAL RESULT
    // =====================================

    else if (roll >= fleeDifficulty) {

        escaped = true;

    }


    // =====================================
    // DISPLAY RESULT
    // =====================================

    if (escaped) {

        combatActive = false;
        combatResult = "fled";

        document.getElementById("story").innerHTML = `

            <div class="story-panel">

                <h2>🏃 Escape</h2>

                ${fleeRoll.html}

                <p>
                    <strong>
                        Flee Roll: ${roll}
                    </strong>
                </p>

                <p>
                    You find an opening and break away from the fight.
                </p>

                <p>
                    <strong>You escaped!</strong>
                </p>

            </div>

        `;

        showChoices([
            "↩️ Return to the Beach"
        ]);

        return;

    }


    // =====================================
    // FAILED FLEE
    // =====================================

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <h2>🏃 Escape</h2>

            ${fleeRoll.html}

            <p>
                <strong>
                    Flee Roll: ${roll}
                </strong>
            </p>

            <p>
                <strong>❌ You fail to escape.</strong>
            </p>

            <p>
                The creature cuts off your escape.
            </p>

        </div>

    `;


    setTimeout(() => {

        advanceCombatTurn();

    }, COMBAT_DELAY);

}

// =====================================
// COMBAT INVENTORY
// =====================================

function combatInventory() {

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <h2>🎒 Inventory</h2>

            <p>
                <strong>
                    HP: ${combatPlayer.hp} / ${combatPlayer.maxHp}
                </strong>
            </p>

            <h3>Usable in Combat</h3>

            <div id="combatInventoryItems"></div>

        </div>

    `;

    const inventoryContainer =
        document.getElementById("combatInventoryItems");

    const firstAid =
        playerInventory.find(item => item.id === "first_aid_kit");

if (greaterFirstAid && greaterFirstAid.quantity > 0) {

    inventoryContainer.innerHTML += `

        <p>
            <strong>
                Greater First Aid Kit ×${greaterFirstAid.quantity}
            </strong>
        </p>

        <p>
            Restores 15 HP.
        </p>

    `;

    showChoices([
        "❤️ Use Greater First Aid Kit",
        "↩️ Back to Combat"
    ]);

    return;

}

    if (firstAid && firstAid.quantity > 0) {

        inventoryContainer.innerHTML += `

            <p>
                <strong>
                    Basic First Aid Kit ×${firstAid.quantity}
                </strong>
            </p>

            <p>
                Restores 5 HP.
            </p>

const greaterFirstAid =
    playerInventory.find(
        item => item.id === "greater_first_aid_kit"
    );

        `;

        showChoices([
            "❤️ Use First Aid Kit",
            "↩️ Back to Combat"
        ]);

        return;

    }


    inventoryContainer.innerHTML += `

        <p>
            <em>
                You have nothing that can currently be used in combat.
            </em>
        </p>

    `;

    showChoices([
        "↩️ Back to Combat"
    ]);

}

// =====================================
// USE FIRST AID KIT
// =====================================

function useCombatFirstAidKit() {

    const firstAid =
        playerInventory.find(item => item.id === "first_aid_kit");

    if (!firstAid || firstAid.quantity <= 0) {

        combatInventory();

        return;

    }


    // =====================================
    // FULL HEALTH
    // =====================================

    if (combatPlayer.hp >= combatPlayer.maxHp) {

        document.getElementById("story").innerHTML = `

            <div class="story-panel">

                <h2>❤️ First Aid Kit</h2>

                <p>
                    You are already at full health.
                </p>

                <p>
                    You don't need to use the kit yet.
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Combat"
        ]);

        return;

    }


    // =====================================
    // HEAL
    // =====================================

    const oldHp = combatPlayer.hp;

    const healingAmount = 5;

    combatPlayer.hp = Math.min(
        combatPlayer.hp + healingAmount,
        combatPlayer.maxHp
    );

    const actualHealing =
        combatPlayer.hp - oldHp;


    // =====================================
    // CONSUME ITEM
    // =====================================

    firstAid.quantity--;

    if (firstAid.quantity <= 0) {

        const index =
            playerInventory.indexOf(firstAid);

        if (index !== -1) {

            playerInventory.splice(index, 1);

        }

    }


    // =====================================
    // DISPLAY RESULT
    // =====================================

    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <h2>❤️ First Aid Kit</h2>

            <p>
                You use the First Aid Kit.
            </p>

            <p>
                You recover
                <strong>${actualHealing} HP</strong>.
            </p>

            <p>
                <strong>
                    HP: ${combatPlayer.hp} / ${combatPlayer.maxHp}
                </strong>
            </p>

            <p>
                The First Aid Kit has been used.
            </p>

        </div>

    `;


    // =====================================
    // END PLAYER TURN
    // =====================================

    setTimeout(() => {

        advanceCombatTurn();

    }, COMBAT_DELAY);

}

// =====================================
// USE GREATER FIRST AID KIT
// =====================================

function useCombatGreaterFirstAidKit() {

    const greaterFirstAid =
        playerInventory.find(
            item => item.id === "greater_first_aid_kit"
        );

    if (
        !greaterFirstAid ||
        greaterFirstAid.quantity <= 0
    ) {

        combatInventory();

        return;

    }


    // =====================================
    // FULL HEALTH
    // =====================================

    if (combatPlayer.hp >= combatPlayer.maxHp) {

        document.getElementById("story").innerHTML = `

            <div class="story-panel">

                <h2>🧰 Greater First Aid Kit</h2>

                <p>
                    You are already at full health.
                </p>

                <p>
                    You don't need to use the kit yet.
                </p>

            </div>

        `;

        showChoices([
            "↩️ Back to Combat"
        ]);

        return;

    }


    const previousHp = combatPlayer.hp;


    combatPlayer.hp += 15;


    if (combatPlayer.hp > combatPlayer.maxHp) {

        combatPlayer.hp = combatPlayer.maxHp;

    }


    greaterFirstAid.quantity -= 1;


    if (greaterFirstAid.quantity <= 0) {

        const index =
            playerInventory.indexOf(greaterFirstAid);

        playerInventory.splice(index, 1);

    }


    const healing =
        combatPlayer.hp - previousHp;


    document.getElementById("story").innerHTML = `

        <div class="story-panel">

            <h2>🧰 Greater First Aid Kit</h2>

            <p>
                You use the Greater First Aid Kit.
            </p>

            <p>
                You recover
                <strong>${healing} HP</strong>.
            </p>

            <p>
                <strong>
                    HP:
                    ${combatPlayer.hp} / ${combatPlayer.maxHp}
                </strong>
            </p>

        </div>

    `;


    showChoices([
        "▶️ End Turn"
    ]);

}

// =====================================
// PIP — COMBAT REACTIONS
// =====================================

function getCombatPipReaction(type) {

    if (combatPipReactions[type]) {

        return "";

    }

    combatPipReactions[type] = true;


    if (type === "criticalHit") {

        return `

            <div class="story-panel">

                <p>
                    🐿️ <strong>Pip:</strong>
                    "Ha! Yes!"
                </p>

            </div>

        `;

    }


    if (type === "criticalFailure") {

        return `

            <div class="story-panel">

                <p>
                    🐿️ <strong>Pip:</strong>
                    "...Oh."
                </p>

            </div>

        `;

    }


    if (type === "heavyDamage") {

        return `

            <div class="story-panel">

                <p>
                    🐿️ <strong>Pip:</strong>
                    "Oh. That definitely hurt it."
                </p>

            </div>

        `;

    }


    if (type === "creatureDesperate") {

        return `

            <div class="story-panel">

                <p>
                    🐿️ <strong>Pip:</strong>
                    "It's getting desperate."
                </p>

            </div>

        `;

    }


    if (type === "playerBadlyWounded") {

        return `

            <div class="story-panel">

                <p>
                    🐿️ <strong>Pip:</strong>
                    "You're hurt."
                </p>

                <p>
                    "Really hurt."
                </p>

            </div>

        `;

    }

if (type === "creatureFleeing") {

    return `

        <div class="story-panel">

            <p>
                🐿️ <strong>Pip:</strong>
                "I don't think we've seen the last of it."
            </p>

        </div>

    `;

}

    return "";

}