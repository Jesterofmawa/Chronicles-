let pipObservationTimer = null;

let pipObservationActive = false;

let pipObservationPaused = false;

let pipCurrentLocation = "arrival";

// Random delay between 10 and 30 seconds
// TEMPORARY TEST TIMING

function getObservationDelay() {

    const minimum = 10000;
    const maximum = 30000;

    return Math.floor(
        Math.random() *
        (maximum - minimum + 1)
    ) + minimum;

}


// Start Pip's ambient observations

function startPipObservations() {

    stopPipObservations();

    pipObservationActive = true;

    scheduleNextPipObservation();

}


// Stop Pip's ambient observations

function stopPipObservations() {

    pipObservationActive = false;

    if (pipObservationTimer !== null) {

        clearTimeout(
            pipObservationTimer
        );

        pipObservationTimer = null;

    }

}

// Pause Pip's ambient observations

function pausePipObservations() {

    pipObservationPaused = true;

    if (pipObservationTimer !== null) {

        clearTimeout(
            pipObservationTimer
        );

        pipObservationTimer = null;

    }

    const pip = document.getElementById("pip");

    if (pip) {

        pip.innerHTML = "";

    }

}


// Resume Pip's ambient observations

function resumePipObservations() {

    pipObservationPaused = false;

    scheduleNextPipObservation();

}

// Schedule the next observation

function scheduleNextPipObservation() {

    if (!pipObservationActive || pipObservationPaused) {

        return;

    }

    pipObservationTimer =
        setTimeout(
            triggerPipObservation,
            getObservationDelay()
        );

}


// Trigger Pip's observation

function triggerPipObservation() {

    if (!pipObservationActive || pipObservationPaused) {

        return;

    }


    // Never interrupt the Pip introduction

    const pipIntro =
        document.getElementById("pipIntro");

    if (
        pipIntro &&
        pipIntro.style.display !== "none"
    ) {

        scheduleNextPipObservation();

        return;

    }


    // Make sure the observation pool exists

    if (
        typeof observationsComments === "undefined" ||
        observationsComments.length === 0
    ) {

        console.log(
            "Pip observations are unavailable."
        );

        scheduleNextPipObservation();

        return;

    }


    let availableComments = [
    ...observationsComments
];


// Add location-specific comments

if (
    pipCurrentLocation === "greyhaven" &&
    typeof townGreyhavenComments !== "undefined"
) {

    availableComments = [
        ...availableComments,
        ...townGreyhavenComments
    ];

}


// Choose a random comment

const randomIndex =
    Math.floor(
        Math.random() *
        availableComments.length
    );


const observation =
    availableComments[randomIndex];


    showPipObservation(
        observation
    );


    // Start a new countdown

    scheduleNextPipObservation();

}


// Display Pip's observation

function showPipObservation(
    observation
) {
    
    const pip =
        document.getElementById("pip");
    
    if (!pip) {
        
        return;
        
    }
    
    pip.innerHTML = `
        <div class="pip-observation">

    <div class="pip-observation-character">

        <img
            src="images/pip-thoughtful.png"
            alt="Pip"
            class="pip-thoughtful"
        >

        <strong>Pip</strong>

    </div>

    <div class="pip-observation-text">
        "${observation}"
    </div>

</div>
    `;
    
}

function setPipLocation(location) {

    pipCurrentLocation = location;

}

function triggerFishermansRowComment() {

    if (
        typeof fishermansRowComments === "undefined" ||
        fishermansRowComments.length === 0
    ) {

        console.log(
            "Fisherman's Row Pip comments are unavailable."
        );

        return;

    }

    const randomIndex =
        Math.floor(
            Math.random() *
            fishermansRowComments.length
        );

    const comment =
        fishermansRowComments[randomIndex];

    showPipObservation(
        comment
    );

}