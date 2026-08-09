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


function createPipRoll(expression, modifier = 0) {

    let result = rollDice(expression, modifier);

    let html = `
<div class="pip-roll">

${randomRollMessage()}

<p>🎲 <strong>The dice tumble across the table...</strong></p>

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

<p>🎲 <strong>The dice tumble across the table...</strong></p>

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