// DOM references
const monster = document.getElementById("monster");
const glyph = document.getElementById("glyph");
const spray = document.getElementById("spray-overlay");
const blood = document.getElementById("blood-overlay");
const lighting = document.getElementById("lighting");

// Flash the monster briefly with scale variation
function flashMonster() {
  monster.style.opacity = 1;
  monster.style.transform = `translate(-50%, -50%) scale(${1 + Math.random() * 0.1})`;
  setTimeout(() => {
    monster.style.opacity = 0;
  }, 500);
}

// Pulse the glyph randomly
function pulseGlyph() {
  glyph.style.opacity = Math.random() > 0.5 ? 1 : 0;
}

// Activate the water spray overlay
function activateSpray() {
  spray.style.opacity = 1;
}

// Trigger blood overlay with random opacity
function triggerBloodOverlay() {
  blood.style.opacity = 0.4 + Math.random() * 0.3;
  setTimeout(() => {
    blood.style.opacity = 0;
  }, 2000);
}

// Flash lighting: bright → dingy → black
function flashLighting() {
  lighting.style.opacity = 1;
  setTimeout(() => {
    lighting.style.opacity = 0.3;
    setTimeout(() => {
      lighting.style.opacity = 0;
    }, 500);
  }, 200);
}

// Timed triggers
setInterval(flashMonster, 4000);         // Monster flashes every 4s
setInterval(pulseGlyph, 3000);           // Glyph pulses every 3s
setTimeout(activateSpray, 8000);         // Spray activates once after 8s
setInterval(triggerBloodOverlay, 9000);  // Blood overlay every 9s
setInterval(flashLighting, 6000);        // Lighting flashes every 6s
