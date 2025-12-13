let btn = document.getElementById("btn");
let quote = document.getElementById("quote");

let quotes = [
  "Believe in yourself",
  "Never give up",
  "Practice makes perfect",
  "JavaScript is easy"
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[random];
});
