const creditsContent = document.getElementById("creditsWindowContent");
const closeButton = document.getElementById("close");
const clickMeButton = document.getElementById("clickMe");
const windowFade = document.getElementById("creditsWindow");

clickMeButton.addEventListener("click", (evt) => {
  creditsContent.classList.add("show");
  windowFade.classList.add("show");
});

closeButton.addEventListener("click", (evt) => {
  creditsContent.classList.remove("show");
  windowFade.classList.remove("show");
});

windowFade.addEventListener("click", (evt) => {
  creditsContent.classList.remove("show");
  windowFade.classList.remove("show");
});

function toggle(e) {
  e.stopPropagation();
  creditsContent.classList.add("show");
  windowFade.classList.add("show");
}
