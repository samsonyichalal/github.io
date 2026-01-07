const grid = document.getElementById("grid");

// создаем сетку 10x5 = 50 ячеек
for (let i = 0; i < 50; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  grid.appendChild(cell);
}

const cells = document.querySelectorAll(".cell");

// случайные вспышки с пульсацией
setInterval(() => {
  const count = Math.floor(Math.random() * 3) + 1;
  for (let i = 0; i < count; i++) {
    const cell = cells[Math.floor(Math.random() * cells.length)];
    cell.classList.remove("flash");
    void cell.offsetWidth; // сброс анимации
    cell.classList.add("flash");
    cell.style.animation = "cellGlow 1s ease-in-out";
    setTimeout(() => cell.style.animation = "", 1000);
  }
}, 200);

// прогресс через подсвечивание квадратиков
let p = 0;
function animateProgress() {
  p += 0.5; // скорость прогресса
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
