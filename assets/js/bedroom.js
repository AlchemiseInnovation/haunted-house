let timeLeft = 30;
const timerEl = document.getElementById("timer");
const alarm = document.getElementById("alarm");
const screech = document.getElementById("screech");
const flicker = document.getElementById("flicker");
const scaryGirl = document.getElementById("scary-girl");
const entities = document.getElementById("entities");

function updateTimer() {
  timeLeft--;
  timerEl.textContent = `00:${timeLeft < 10 ? "0" : ""}${timeLeft}`;
  if (timeLeft === 0) {
    alarm.play();
    scaryGirl.style.display = "none";
    alert("You survived the bedroom...");
  }
}

function spawnEntity(type) {
  const img = document.createElement("img");
  img.src = `assets/media/${type}.gif`;
  img.className = "entity";
  img.style.top = `${Math.random() * 80}%`;
  img.style.left = `${Math.random() * 80}%`;
  entities.appendChild(img);
}

function flickerLights() {
  document.body.classList.toggle("dark");
  flicker.play();
}

function rampUp() {
  spawnEntity("mummy");
  spawnEntity("banshee");
  spawnEntity("ghost");
  spawnEntity("glyph");
  scaryGirl.style.opacity = parseFloat(scaryGirl.style.opacity || 0) + 0.1;
  screech.volume = Math.min(1, parseFloat(screech.volume || 0.1) + 0.1);
  screech.play();
}

setInterval(updateTimer, 1000);
setInterval(flickerLights, 1500);
setInterval(rampUp, 3000);
