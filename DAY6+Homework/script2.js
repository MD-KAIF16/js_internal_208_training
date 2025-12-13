let rbtn = document.getElementById("red");
let gbtn = document.getElementById("green");
let bbtn = document.getElementById("blue");


rbtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

gbtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});

bbtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});
