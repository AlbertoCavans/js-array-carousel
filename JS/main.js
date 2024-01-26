/* LINKS TO HTML */
const imgsBoxLink = document.querySelector(".imgs-box");
const arrowDownLink = document.querySelector(".arrow-down");
const arrowUpLink = document.querySelector(".arrow-up");
const sideColumn = document.querySelector(".side-column-slides");

/* PROCESS */
const imgs = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

/* IMG CURRENTLY SHOWN */
let currentIndex = 0;

/* CREATE IMGS */
let imgsHtml = "";
for (let i = 0; i < imgs.length; i++) {
  const img = imgs[i];

  let selectedClass;
  if (i == currentIndex) {
    selectedClass = "selected";
  } else {
    selectedClass = "";
  }
  imgsHtml += `<img src="./img/${img}" class="img ${selectedClass}" alt="img ${i}" />`;
}
imgsBoxLink.innerHTML = imgsHtml;

/* ARROW DOWN */

arrowDownLink.addEventListener("click", function () {
  const allImgs = document.getElementsByClassName("img");
  /*   const allMiniSlides = document.getElementsByClassName("mini-slide"); */
  let prevImg = allImgs[currentIndex];
  prevImg.classList.remove("selected");

  /*   const prevMiniSlide = allMiniSlides[currentIndex];
  prevMiniSlide.classList.remove("selected"); */

  if (currentIndex >= allImgs.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  const nextImg = allImgs[currentIndex];
  nextImg.classList.add("selected");

  /*   const nextMiniSlide = allMiniSlides[currentIndex];
  nextMiniSlide.classList.add("selected"); */
});

/* ARROW UP */

/* arrowUpLink.addEventListener("click", function () {
  alert("vai alla precedente");
}); */

arrowUpLink.addEventListener("click", function () {
  const allImgs = document.getElementsByClassName("img");
  /*   const allMiniSlides = document.getElementsByClassName("mini-slide"); */
  let prevImg = allImgs[currentIndex];
  prevImg.classList.remove("selected");

  /*   const prevMiniSlide = allMiniSlides[currentIndex];
  prevMiniSlide.classList.remove("selected");
 */
  if (currentIndex <= 0) {
    currentIndex = allImgs.length - 1;
  } else {
    currentIndex--;
  }

  const nextImg = allImgs[currentIndex];
  nextImg.classList.add("selected");

  /*   const nextMiniSlide = allMiniSlides[currentIndex];
  nextMiniSlide.classList.add("selected"); */
});

/* ATTIVO LE SLIDE LATERALI */
/* let miniSlideHtml = "";
for (let i = 0; i < imgs.length; i++) {
  const img = imgs[i];
  let selectedClass = i === currentIndex ? "selected" : "";

  miniSlideHtml += `<div class="mini-slide ${selectedClass}">
  <img src="./img/${img}" class="img" alt="img ${i}" />
  </div>`;
}
sideColumn.innerHTML = miniSlideHtml; */
