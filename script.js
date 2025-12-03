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

  snow.appendChild(flake);

  setTimeout(() => flake.remove(), 5000);
}
setInterval(createSnow, 100);


function enableMusic() {
  music.play().catch(() => {});
  document.removeEventListener("click", enableMusic);
  document.removeEventListener("touchstart", enableMusic);
}

document.addEventListener("click", enableMusic);
document.addEventListener("touchstart", enableMusic);


music.volume = 1;
music.loop = true;
