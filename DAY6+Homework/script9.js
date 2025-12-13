let img = document.getElementById("img");
let smallBtn = document.getElementById("small");
let largeBtn = document.getElementById("large");

smallBtn.addEventListener("click", function () {
  img.setAttribute("width", "150");
});

largeBtn.addEventListener("click", function () {
  img.setAttribute("width", "300");
});
