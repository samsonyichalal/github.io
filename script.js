history.replaceState(null, "", location.href);

const grid = document.getElementById("grid");
const bar = document.getElementById("bar");
const percent = document.getElementById("percent");

// ===== GRID =====
for (let i = 0; i < 70; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  grid.appendChild(cell);
}

setInterval(() => {
  document.querySelectorAll(".cell").forEach(c => {
    c.classList.toggle("active", Math.random() > 0.85);
  });
}, 450);

// ===== PROGRESS =====
let p = 0;

function animateProgress() {
  let speed;

  if (p < 12) {
    // плавный старт
    speed = 0.35;
  } else if (p < 75) {
    // быстрое ускорение
    speed = 2.8 + Math.random();
  } else if (p < 92) {
    // лёгкое замедление
    speed = 0.9;
  } else {
    // мягкий финал
    speed = 0.45;
  }

  p += speed;

  if (p >= 100) {
    p = 100;
    bar.style.width = "100%";
    percent.textContent = "100%";

    setTimeout(() => {
      window.location.replace("https://macfyno.com/app4");
    }, 250);

    return;
  }

  bar.style.width = p + "%";
  percent.textContent = Math.floor(p) + "%";

  requestAnimationFrame(animateProgress);
}

requestAnimationFrame(animateProgress);
