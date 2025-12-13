let input = document.getElementById("task");
let btn = document.getElementById("add");
let list = document.getElementById("list");

btn.addEventListener("click", function () {
  let taskText = input.value;

  if (taskText !== "") {
    let li = document.createElement("li");
    li.textContent = taskText;
    list.appendChild(li);
    input.value = "";
  }
});
