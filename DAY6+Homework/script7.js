let input = document.getElementById("name");
let btn = document.getElementById("btn");
let output = document.getElementById("output");

btn.addEventListener("click", function () {
  let userName = input.value;
  output.textContent = "Hello " + userName;
});
