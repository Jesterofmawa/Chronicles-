function teachPip() {

    let message =
        document.getElementById("memoryInput").value;

    let reply = think(message);

    document.getElementById("output").innerHTML = reply;

}