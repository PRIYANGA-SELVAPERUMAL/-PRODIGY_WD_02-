# -PRODIGY_WD_02-
STOPWATCH WEB APPLICATION

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stopwatch</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-color: #e0e0e0;
    }

    .half-circle {
      position: relative;
      width: 100px;
      height: 100px;
      margin-bottom: 2rem;
    }

    .half-circle:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 50%;
      background: linear-gradient(to right, red, yellow);
      border-radius: 100% 100% 0 0;
    }

    .stopwatch {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 3rem;
      margin-top: 5rem;
    }

    .display {
      margin-bottom: 2rem;
    }

    button {
      font-size: 1.5rem;
      padding: 0.5rem 1rem;
      margin: 0.5rem;
      cursor: pointer;
    }

    .description {
      font-size: 1.2rem;
      text-align: center;
      margin-top: 2rem;
    }
  </style>
</head>
<body>
  <div class="half-circle"></div>
  <div class="stopwatch">
    <div class="display">00:00:00</div>
    <button class="start">Start</button>
    <button class="pause">Pause</button>
    <button class="reset">Reset</button>
  </div>
  <div class="description">
    <p>Use this simple stopwatch to measure time intervals.</p>
    <p>Click "Start" to begin, "Pause" to stop, and "Reset" to restart the stopwatch.</p>
  </div>

  <script>
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
  </script>
</body>
</html>
