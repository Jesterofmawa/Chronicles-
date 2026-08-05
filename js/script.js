async function teachPip() {

    let message =
        document.getElementById("memoryInput").value;

    let reply = await think(message);

    document.getElementById("output").innerHTML =
    `<div class="pip-roll">${reply}</div>`;

}

function testRoll(notation) {

    document.getElementById("output").innerHTML =
        pipRoll(notation);

}