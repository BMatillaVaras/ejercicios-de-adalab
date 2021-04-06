const button = document.querySelector(".button");
const paragraph = document.querySelector(".p");
function firstClick() {
  paragraph.innerHTML = "Mi primer click, ¡olé yo y la mujer que me parió!";
}
button.addEventListener("click", firstClick);
