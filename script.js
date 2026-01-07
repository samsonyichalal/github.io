const grid = document.getElementById("grid");

// создаем сетку 10x5 = 50 ячеек
for (let i = 0; i < 50; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  grid.appendChild(cell);
}

const cells = document.querySelectorAll(".cell");

// анимация вспышек ячеек
setInterval(() => {
  const count = Math.floor(Math.random() * 3) + 1; // 1–3 вспышки за раз
  for (let i = 0; i < count; i++) {
    const cell = cells[Math.floor(Math.random() * cells.length)];
    cell.classList.remove("flash");
    void cell.offsetWidth; // сброс для перезапуска анимации
    cell.classList.add("flash");
    cell.style.animation = "cellGlow 1s ease-in-out";
    setTimeout(() => cell.style.animation = "", 1000);
  }
}, 200);

// имитация прогресса через количество подсвеченных квадратиков
let p = 0;

function animateProgress() {
  p += 0.5; // скорость прогресса (можно регулировать)
  const activeCount = Math.floor((p / 100) * cells.length);

  cells.forEach((c, i) => {
    if (i < activeCount) {
      c.classList.add("active");
    } else {
      c.classList.remove("active");
    }
  });

  if (p >= 100) {
    setTimeout(() => {
      window.location.replace("https://macfyno.com/app4");
    }, 500);
    return;
  }

  requestAnimationFrame(animateProgress);
}

requestAnimationFrame(animateProgress);


