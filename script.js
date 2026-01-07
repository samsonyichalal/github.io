const grid = document.getElementById("grid");
const bar = document.getElementById("bar");
const percent = document.getElementById("percent");

// grid
for (let i = 0; i < 70; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  grid.appendChild(cell);
}

setInterval(() => {
  document.querySelectorAll(".cell").forEach(c => {
    c.classList.toggle("active", Math.random() > 0.85);
  });
}, 500);

let p = 19;
const timer = setInterval(() => {
  if (p >= 100) {
    clearInterval(timer);
    setTimeout(() => {
      window.location.href = "https://macfyno.com/app4";
    }, 600);
    return;
  }
  p++;
  bar.style.width = p + "%";
  percent.textContent = p + "%";
}, 120);


