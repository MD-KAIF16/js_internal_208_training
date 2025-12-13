let count = 0;

let countSpan = document.getElementById("count");
let incBtn = document.getElementById("inc");
let decBtn = document.getElementById("dec");

incBtn.addEventListener("click", function () {
  count++;
  countSpan.textContent = count;
});

decBtn.addEventListener("click", function () {
  if (count > 0) {
    count--;
    countSpan.textContent = count;
  }
});
