const display = document.querySelector('.display');
let intervalId;
let elapsedTime = 0;

function updateDisplay() {
  const hours = Math.floor(elapsedTime / 3600);
  const minutes = Math.floor((elapsedTime % 3600) / 60);
  const seconds = elapsedTime % 60;

  display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startStopwatch() {
  intervalId = setInterval(() => {
    elapsedTime++;
    updateDisplay();
  }, 1000);
}

function pauseStopwatch() {
  clearInterval(intervalId);
}

function resetStopwatch() {
  clearInterval(intervalId);
  elapsedTime = 0;
  updateDisplay();
}

document.querySelector('.start').addEventListener('click', startStopwatch);
document.querySelector('.pause').addEventListener('click', pauseStopwatch);
document.querySelector('.reset').addEventListener('click', resetStopwatch);