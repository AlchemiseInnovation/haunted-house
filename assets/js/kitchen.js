const utensils = document.getElementById("utensils");
const pots = document.getElementById("pots");
const jars = document.getElementById("jars");
const recipes = document.getElementById("recipes");
const chef = document.getElementById("chef");
const blood = document.getElementById("blood-drip");

function glintUtensils() {
  const types = ["knife", "ladle", "fork"];
  const utensil = document.createElement("img");
  utensil.src = `assets/media/${types[Math.floor(Math.random() * types.length)]}.png`;
  utensil.className = "utensil";
  utensil.style.top = `${Math.random() * 80}%`;
  utensil.style.left = `${Math.random() * 80}%`;
  utensils.appendChild(utensil);
}

function throwUtensil() {
  chef.style.opacity = 1;
  setTimeout(() => {
    chef.style.opacity = 0;
    blood.style.opacity = 1;
  }, 1000);
}

function steamBurst() {
  const steam = document.createElement("div");
  steam.className = "steam";
  steam.style.left = `${Math.random() * 80}%`;
  pots.appendChild(steam);
  setTimeout(() => steam.remove(), 3000);
}

function spawnJar() {
  const jar = document.createElement("img");
  jar.src = "assets/media/eye-jar.gif";
  jar.className = "jar";
  jar.style.top = `${Math.random() * 70}%`;
  jar.style.left = `${Math.random() * 70}%`;
  jars.appendChild(jar);
}

function spawnRecipe() {
  const scroll = document.createElement("img");
  scroll.src = "assets/media/evil-recipe.gif";
  scroll.className = "recipe";
  scroll.style.top = `${Math.random() * 70}%`;
  scroll.style.left = `${Math.random() * 70}%`;
  recipes.appendChild(scroll);
}

setInterval(glintUtensils, 3000);
setInterval(throwUtensil, 7000);
setInterval(steamBurst, 2000);
setInterval(spawnJar, 6000);
setInterval(spawnRecipe, 8000);
