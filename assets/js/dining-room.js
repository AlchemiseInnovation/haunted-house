function checkAnswer() {
  const input = document.getElementById("riddle-answer").value.toLowerCase();
  const feedback = document.getElementById("riddle-feedback");
  if (input.includes("plate")) {
    feedback.textContent = "The gate creaks open...";
    document.getElementById("riddle-gate").style.display = "none";
    document.getElementById("dining-room").style.display = "block";
    spawnFeast();
    spawnGuests();
    spawnUtensils();
  } else {
    feedback.textContent = "The room rejects you. Try again.";
  }
}

function spawnFeast() {
  const feast = document.getElementById("feast");
  const items = ["zombie-turkey", "cursed-pie", "undead-salad"];
  items.forEach(item => {
    const img = document.createElement("img");
    img.src = `assets/media/${item}.gif`;
    img.className = "feast-item";
    feast.appendChild(img);
  });
}

function spawnGuests() {
  const guests = document.getElementById("guests");
  for (let i = 0; i < 4; i++) {
    const skeleton = document.createElement("img");
    skeleton.src = "assets/media/skeleton-guest.gif";
    skeleton.className = "guest";
    guests.appendChild(skeleton);
  }
}

function spawnUtensils() {
  const utensils = document.getElementById("utensils");
  const types = ["fork", "knife", "spoon"];
  types.forEach(type => {
    const img = document.createElement("img");
    img.src = `assets/media/lore-${type}.gif`;
    img.className = "utensil";
    utensils.appendChild(img);
  });
}
