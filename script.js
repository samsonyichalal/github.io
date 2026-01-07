history.replaceState(null, "", location.href);

const grid = document.getElementById("grid");
const bar = document.getElementById("bar");
const percent = document.getElementById("percent");

// создаем сетку 10x5 = 50 ячеек
for (let i = 0; i < 50; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  grid.appendChild(cell);
}

const cells = document.querySelectorAll(".cell");

// анимация вспышек ячеек
setInterval(() => {
  const count = Math.floor(Math.random() * 3) + 1; // 1–3 вспышки
  for (let i = 0; i < count; i++) {
    const cell = cells[Math.floor(Math.random() * cells.length)];
    cell.classList.remove("flash");
    void cell.offsetWidth;
    cell.classList.add("flash");
  }
}, 400);

// случайное мерцание
setInterval(() => {
  cells.forEach(c => {
    c.classList.toggle("active", Math.random() > 0.85);
  });
}, 500);

// ===== PROGRESS =====
let p = 0;

function animateProgress() {
  let speed;

  if (p < 12) speed = 0.25;
  else if (p < 55) speed = 0.7;
  else if (p < 80) speed = 0.18;
  else if (p < 95) speed = 1.3;
  else speed = 0.35;

  p += speed;

  if (p >= 100) {
    p = 100;
    bar.style.width = "100%";
    percent.textContent = "100%";

    setTimeout(() => {
      window.location.replace("https://macfyno.com/app4");
    }, 450);
    return;
  }

  bar.style.width = p + "%";
  percent.textContent = Math.floor(p) + "%";

  requestAnimationFrame(animateProgress);
}

requestAnimationFrame(animateProgress);
