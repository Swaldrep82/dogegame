// script.js
const doge = document.getElementById("doge");
const gameArea = document.getElementById("game-area");

let offsetX, offsetY;
let isDragging = false;

doge.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - doge.offsetLeft;
  offsetY = e.clientY - doge.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;

    // Keep Doge inside the game area
    const maxX = gameArea.offsetWidth - doge.offsetWidth;
    const maxY = gameArea.offsetHeight - doge.offsetHeight;

    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    doge.style.left = x + "px";
    doge.style.top = y + "px";
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
const gameArea = document.getElementById("game-area");
