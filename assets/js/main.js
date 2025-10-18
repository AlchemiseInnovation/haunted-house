window.onload = () => {
  const lantern = document.getElementById("lantern");
  const warning = document.getElementById("warning");
  const slam = document.getElementById("slam");
  const creak = document.getElementById("creak");

  // Fade out lantern
  setTimeout(() => {
    lantern.style.opacity = 0;
    warning.innerHTML += "<p>The door slams shut behind you...</p>";
    slam.play();
    creak.play();
    spawnCreatures();
  }, 3000);
};

function spawnCreatures() {
  const effects = document.getElementById("effects");
  const creatures = ["spider", "bat", "cockroach", "firefly"];
  creatures.forEach((creature) => {
    for (let i = 0; i < Math.floor(Math.random() * 5 + 3); i++) {
      const img = document.createElement("img");
      img.src = `assets/media/${creature}.gif`;
      img.className = "creature";
      img.style.top = `${Math.random() * 90}%`;
      img.style.left = `${Math.random() * 90}%`;
      effects.appendChild(img);
    }
  });
}
