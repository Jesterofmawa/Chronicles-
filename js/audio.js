let frontEndMusic = null;

function startFrontEndMusic() {

    if (!frontEndMusic) {

        frontEndMusic = new Audio(
            "assets/audio/the-hollow-between-stars.mp3"
        );

        frontEndMusic.loop = true;
        frontEndMusic.volume = 0.25;

    }

    frontEndMusic.play().catch(error => {

        console.log("Music could not start:", error);

    });

}

function fadeOutFrontEndMusic(duration = 1800) {

    if (!frontEndMusic) {
        return;
    }

    const startingVolume = frontEndMusic.volume;
    const startTime = performance.now();

    function fade(timestamp) {

        const elapsed = timestamp - startTime;

        const progress =
            Math.min(elapsed / duration, 1);

        frontEndMusic.volume =
            startingVolume * (1 - progress);

        if (progress < 1) {

            requestAnimationFrame(fade);

        } else {

            frontEndMusic.pause();

            frontEndMusic.currentTime = 0;

            frontEndMusic.volume = 0.25;

        }

    }

    requestAnimationFrame(fade);

}