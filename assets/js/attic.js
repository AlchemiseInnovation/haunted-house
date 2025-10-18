const toys = document.getElementById("toys");
const clowns = document.getElementById("clowns");
const spiders = document.getElementById("spiders");
const monsters = document.getElementById("monsters");
const chaos = document.getElementById("chaos");

function spawnToy() {
  const toy = document.createElement("img");
  toy.src = "assets/media/doll.gif";
  toy.className = "toy";
  toy.style.top = `${Math.random() * 80}%`;
  toy.style.left = `${Math.random() * 80}%`;
  toys.appendChild(toy);
}

function spawnClown() {
  const clown = document.createElement("img");
  clown.src = "assets/media/clown.gif";
  clown.className = "clown";
  clowns.appendChild(clown);
}

function spawnSpider() {
  const spider = document.createElement("img");
  spider.src = "assets/media/spider.gif";
  spider.className = "spider";
  spiders.appendChild(spider);
}

function unleashChaos() {
  monsters.style.display = "block";
  chaos.play();
  const types = ["mummy", "banshee", "ghost", "chef", "skeleton"];
  types.forEach(type => {
    const img = document.createElement("img");
    img.src = `assets/media/${type}.gif`;
    img.className = "monster";
    monsters.appendChild(img);
  });
  document.body.classList.add("chaos");
}

setInterval(spawnToy, 3000);
setInterval(spawnClown, 5000);
setInterval(spawnSpider, 4000);
setTimeout(unleashChaos, 15000);
