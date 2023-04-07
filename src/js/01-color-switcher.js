const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
let intervalId;

startBtn.addEventListener('click', () => {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  intervalId = setInterval(() => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  stopBtn.disabled = true;
  startBtn.disabled = false;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
