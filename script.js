history.replaceState(null, "", location.href);

const grid = document.getElementById("grid");
const bar = document.getElementById("bar");
const percent = document.getElementById("percent");

const cells = document.querySelectorAll(".cell");

setInterval(() => {
  const count = Math.floor(Math.random() * 4) + 2; // 2–5 вспышек
  for (let i = 0; i < count; i++) {
    const cell = cells[Math.floor(Math.random() * cells.length)];
    cell.classList.remove("flash"); // перезапуск
    void cell.offsetWidth;
    cell.classList.add("flash");
  }
}, 320);


setInterval(() => {
  document.querySelectorAll(".cell").forEach(c => {
    c.classList.toggle("active", Math.random() > 0.85);
  });
}, 500);

// ===== PROGRESS =====
let p = 0;
let holdPhase = false;

function animateProgress() {
  let speed;

  if (p < 10) {
    speed = 0.25;              // мягкий старт
  } else if (p < 55) {
    speed = 0.9;               // нормальная загрузка
  } else if (p < 80) {
    speed = 0.18;              // 🔥 удержание
    holdPhase = true;
  } else if (p < 92) {
    speed = 1.4;               // ускорение
  } else {
    speed = 0.35;              // финал
  }

  p += speed;

  if (p >= 100) {
    p = 100;
    bar.style.width = "100%";
    percent.textContent = "100%";

    setTimeout(() => {
      window.location.replace("https://macfyno.com/app4");
    }, 400);

    return;
  }

  bar.style.width = p + "%";
  percent.textContent = Math.floor(p) + "%";

  requestAnimationFrame(animateProgress);
}

requestAnimationFrame(animateProgress);
