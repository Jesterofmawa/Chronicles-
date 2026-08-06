function showChoices(choices) {

    let html = "";

    for (let i = 0; i < choices.length; i++) {

        html += `
<button onclick="choose('${choices[i]}')">
    ${choices[i]}
</button>
`;

    }

    document.getElementById("choices").innerHTML = html;

}

function choose(choice) {

    if (choice === "⚔️ Attack") {

        document.getElementById("pip").innerHTML =
            pipRoll("1d20");

        return;

    }

    document.getElementById("pip").innerHTML =
        "<p>You chose: <strong>" + choice + "</strong></p>";

}