const music = document.getElementById("bgMusic");

// Try to unlock audio by playing silent sound first
function unlockAudio() {
    const silentAudio = new Audio();
    silentAudio.src =
        "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA=";
    silentAudio.play().catch(() => {});
}

// Attempt autoplay immediately
function autoPlayMusic() {
    music.volume = 1;
    music.play().then(() => {
        console.log("Music autoplayed!");
    }).catch(err => {
        console.log("Autoplay blocked:", err);
    });
}

window.addEventListener("load", () => {
    unlockAudio();          // unlock audio context
    setTimeout(autoPlayMusic, 200); // try autoplay right after
});


// ❄ Snow Effect
function createSnow() {
    const snow = document.getElementById("snow");
    const flake = document.createElement("div");
    flake.classList.add("snowflake");
    flake.innerHTML = "❄";

    flake.style.left = Math.random() * window.innerWidth + "px";
    flake.style.fontSize = Math.random() * 15 + 10 + "px";
    flake.style.animationDuration = Math.random() * 3 + 2 + "s";

    snow.appendChild(flake);
    setTimeout(() => flake.remove(), 5000);
}
setInterval(createSnow, 100);
