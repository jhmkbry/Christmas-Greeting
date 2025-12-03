const music = document.getElementById("bgMusic");

// ❄ Create Snowflakes
function createSnow() {
  const snow = document.getElementById("snow");
  const flake = document.createElement("div");
  flake.classList.add("snowflake");
  flake.innerHTML = "❄";

  flake.style.left = Math.random() * window.innerWidth + "px";
  flake.style.fontSize = Math.random() * 15 + 10 + "px";
  flake.style.animationDuration = Math.random() * 3 + 2 + "s";

  flake.addEventListener("click", enableMusic, { once: true });
  flake.addEventListener("touchstart", enableMusic, { once: true });

  snow.appendChild(flake);
  setTimeout(() => flake.remove(), 5000);
}
setInterval(createSnow, 100);


function enableMusic() {
  music.volume = 1;
  music.loop = true;

  music.play().catch((err) => {
    console.log("Music playback blocked:", err);
  });

  document.removeEventListener("click", enableMusic);
  document.removeEventListener("touchstart", enableMusic);
  document.removeEventListener("scroll", enableMusic);
}

document.addEventListener("click", enableMusic, { once: true });
document.addEventListener("touchstart", enableMusic, { once: true });
document.addEventListener("scroll", enableMusic, { once: true });
