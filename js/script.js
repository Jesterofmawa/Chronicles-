async function teachPip() {

    let message =
        document.getElementById("memoryInput").value;

    let reply = await think(message);

    document.getElementById("output").innerHTML = reply;

}