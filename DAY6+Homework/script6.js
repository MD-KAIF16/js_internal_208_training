let btn = document.getElementById("add");

btn.addEventListener("click", function () {
  let box = document.createElement("div");

  box.textContent = "I am a box";
  box.style.border = "2px solid black";
  box.style.padding = "10px";
  box.style.margin = "10px";
  box.style.backgroundColor = "lightblue";

  document.body.appendChild(box);
});
