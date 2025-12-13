let para = document.getElementById("para");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  if (para.style.display === "none") {
    para.style.display = "block";
    btn.textContent = "Hide";
  } else {
    para.style.display = "none";
    btn.textContent = "Show";
  }
});
