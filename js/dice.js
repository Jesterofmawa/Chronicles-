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

function pipRoll(sides) {

    let result = roll(sides);

    return `
${randomRollMessage()}

🎲 Pip rolls a d${result.sides}...

🎲 Result: ${result.value}
`;

}

function rollDice(expression) {

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

        total: total,

        rolls: rolls,

        sides: sides

    };

}

let result = rollDice("4d8");

alert(JSON.stringify(result));