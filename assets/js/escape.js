let startTime = localStorage.getItem("startTime") || Date.now();
let endTime;

function checkGrid() {
  const input = document.getElementById("grid-answer").value.toLowerCase();
  const feedback = document.getElementById("grid-feedback");
  if (input === "glyph-x7" || input.includes("x7")) {
    feedback.textContent = "The door creaks open...";
    endTime = Date.now();
    showFinalScene();
  } else {
    feedback.textContent = "Incorrect grid. Try again.";
  }
}

function showFinalScene() {
  document.getElementById("grid-puzzle").style.display = "none";
  document.getElementById("final-scene").style.display = "block";

  const duration = Math.floor((endTime - startTime) / 1000);
  const summary = document.getElementById("summary");
  summary.innerHTML = `<p>You took ${duration} seconds to complete the house.</p>`;
}
