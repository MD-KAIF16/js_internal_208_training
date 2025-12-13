let clock = document.getElementById("clock");

setInterval(function () {
  let time = new Date().toLocaleTimeString();
  clock.textContent = time;
}, 1000);
