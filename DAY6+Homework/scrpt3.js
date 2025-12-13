// create image element
let img = document.createElement("img");
img.src = "https://i.ytimg.com/vi/BFkcXCXBGno/sddefault.jpg";

// IMPORTANT: size do
img.style.width = "300px";
img.style.height = "auto";
img.style.display = "block";
img.style.marginBottom = "10px";

// add image to body
document.body.prepend(img);

// buttons
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");

nextBtn.addEventListener("click", function () {
  img.src = "https://i.ytimg.com/vi/D4kktXvtq9I/maxresdefault.jpg";
});

prevBtn.addEventListener("click", function () {
  img.src = "https://i.ytimg.com/vi/BFkcXCXBGno/sddefault.jpg";
});
