const music = document.getElementById("bgMusic");
let musicEnabled = false;

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

function enableMusic() {
  if (musicEnabled) return;
  musicEnabled = true;

  music.volume = 1;
  music.loop = true;


  music.load();


  const playPromise = music.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        console.log("Music playing successfully");
      })
      .catch((err) => {
        console.log("Music playback blocked:", err);
        musicEnabled = false; // Allow retry
      });
  }
}


document.addEventListener("click", enableMusic, { once: true });
document.addEventListener("touchend", enableMusic, { once: true }); // Changed from touchstart
document.addEventListener("keydown", enableMusic, { once: true });
