const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

let seconds = 0;
let minutes = 0;
let hours = 0;
let leadingSecond = 0;
let leadingMinute = 0;
let leadingHour = 0;

function stopWatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }
  if (seconds < 10) {
    leadingSecond = "0" + seconds.toString();
  } else {
    leadingSecond = seconds;
  }
  if (minutes < 10) {
    leadingMinute = "0" + minutes.toString();
  } else {
    leadingMinute = minutes;
  }
  if (hours < 10) {
    leadingHour = "0" + hours.toString();
  } else {
    leadingHour = hours;
  }
  document.getElementById("timer").innerText =
    leadingHour + ":" + leadingMinute + ":" + leadingSecond;
}

let timeInterval = null;
let timerStatus = "stopped";

startButton.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timeInterval = window.setInterval(stopWatch, 1000);
    timerStatus = "started";
  }
});
stopButton.addEventListener("click", function () {
  if (timerStatus === "started") {
    window.clearInterval(timeInterval);
    timeInterval = "stopped";
  }
});
resetButton.addEventListener("click", function () {
  if (timerStatus === "started") {
    document.getElementById("timer").innerText = "00:00:00";
    minutes = 0;
    seconds = 0;
    hours = 0;
    window.clearInterval(timeInterval);

    timerStatus = "stopped";
  }
});
