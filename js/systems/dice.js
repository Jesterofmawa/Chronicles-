function rollDie(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function roll(dieSides) {

    let value = rollDie(dieSides);

    return {
        value: value,
        sides: dieSides
    };

}

function rollD4() {
    return roll(4);
}

function rollD6() {
    return roll(6);
}

function rollD8() {
    return roll(8);
}

function rollD10() {
    return roll(10);
}

function rollD12() {
    return roll(12);
}

function rollD20() {
    return roll(20);
}

let attack = rollD20();

const diceRollDescriptions = [

    // Normal rolls

    "The dice tumble smoothly, rolling until they come to rest.",
    "The dice bounce lightly before settling into place.",
    "The dice roll in steady arcs, gradually slowing to a stop.",
    "The dice tumble end over end before falling still.",
    "The dice roll cleanly, their edges clicking softly as they settle.",
    "The dice bounce once or twice, then come to rest.",
    "The dice tumble across the surface, slowing with each rotation.",
    "The dice roll steadily before finally coming to a stop.",
    "The dice spin and tumble, then settle into their final positions.",
    "The dice roll naturally, each one slowing before coming to rest.",

    // Clumsy rolls

    "The dice wobble and tumble awkwardly, bumping into one another.",
    "The dice roll unevenly, veering off in awkward little directions.",
    "The dice bounce and wobble before finally settling.",
    "The dice tumble clumsily, spinning far longer than they should.",
    "The dice skitter and stumble across the surface, coming to rest at odd angles."

];

function randomDiceRollDescription() {

    return diceRollDescriptions[
        Math.floor(Math.random() * diceRollDescriptions.length)
    ];

}

function createPipRoll(expression, modifier = 0) {

    let result = rollDice(expression, modifier);

    let html = `
<div class="pip-roll">

${randomRollMessage()}

<p>🎲 <strong>${randomDiceRollDescription()}</strong></p>

<p><strong>Roll:</strong> ${expression}</p>

<p>🎲 Rolls: <strong>${result.rolls.join(", ")}</strong></p>

${modifier !== 0 ? `
<p>➕ Modifier: <strong>${modifier > 0 ? "+" : ""}${modifier}</strong></p>
` : ""}

<p>✨ <strong>Total: ${result.total}</strong></p>

</div>
`;

    return {
        result: result,
        html: html
    };

}

function pipRoll(sides, modifier = 0) {

    let result = rollDice(sides, modifier);

    return `
<div class="pip-roll">

${randomRollMessage()}

<p>🎲 <strong>${randomDiceRollDescription()}</strong></p>

<p><strong>Roll:</strong> ${sides}</p>

<p>🎲 Rolls: <strong>${result.rolls.join(", ")}</strong></p>

${modifier !== 0 ? `
<p>➕ Modifier: <strong>${modifier > 0 ? "+" : ""}${modifier}</strong></p>
` : ""}

<p>✨ <strong>Total: ${result.total}</strong></p>

</div>
`;

}

function rollDice(expression, modifier = 0) {

    let parts = expression.split("d");

    let numberOfDice = Number(parts[0]);

    let sides = Number(parts[1]);

    let total = 0;

    let rolls = [];

    for (let i = 0; i < numberOfDice; i++) {

        let result = rollDie(sides);

        rolls.push(result);

        total += result;

    }

    return {

    total: total + modifier,

    rawTotal: total,

    modifier: modifier,

    rolls: rolls,

    sides: sides

};

}