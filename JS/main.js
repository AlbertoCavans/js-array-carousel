/* LINKS TO HTML */
const imgsBoxLink = document.querySelector(".imgs-box");
const arrowDownLink = document.querySelector(".arrow-down");
const arrowUpLink = document.querySelector(".arrow-up");
const sideColumn = document.querySelector(".side-column-slides");

/* PROCESS */
const imgs = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

const allMiniImgs = document.getElementsByClassName("mini-img");

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
  selfClickDown();

  /*   let miniImgHtml = "";
  for (let i = 0; i < imgs.length; i++) {
    const img = imgs[i];

    let selectedClass;
    if (i == currentIndex) {
      selectedClass = "selected";
    } else {
      selectedClass = "";
    }
    miniImgHtml += `<div class="mini-slide">
  <img src="./img/${img}" class="mini-img ${selectedClass}" alt="img 01" />
</div>`;
  }
  sideColumn.innerHTML = miniImgHtml; */
});

/* ARROW UP */

arrowUpLink.addEventListener("click", function () {
  const oldMiniImg = allMiniImgs[currentIndex];
  oldMiniImg.classList.remove("selected");

  const allImgs = document.getElementsByClassName("img");
  let prevImg = allImgs[currentIndex];
  prevImg.classList.remove("selected");

  if (currentIndex <= 0) {
    currentIndex = allImgs.length - 1;
  } else {
    currentIndex--;
  }

  const newMiniImg = allMiniImgs[currentIndex];
  newMiniImg.classList.add("selected");

  const nextImg = allImgs[currentIndex];
  nextImg.classList.add("selected");

  /*   let miniImgHtml = "";
  for (let i = 0; i < imgs.length; i++) {
    const img = imgs[i];

    let selectedClass;
    if (i == currentIndex) {
      selectedClass = "selected";
    } else {
      selectedClass = "";
    }
    miniImgHtml += `<div class="mini-slide">
  <img src="./img/${img}" class="mini-img ${selectedClass}" alt="img 01" />
</div>`;
  }
  sideColumn.innerHTML = miniImgHtml; */
});

/* CREATE MINI-IMGS */
let miniImgHtml = "";
for (let i = 0; i < imgs.length; i++) {
  const img = imgs[i];

  let selectedClass;
  if (i == currentIndex) {
    selectedClass = "selected";
  } else {
    selectedClass = "";
  }
  miniImgHtml += `<div class="mini-slide"">
  <img src="./img/${img}" class="mini-img ${selectedClass}" alt="img 01  data-selected-image="${i}"/>
</div>`;
}
sideColumn.innerHTML = miniImgHtml;

/* CLICK MINI-IMGS */

/* for (let i = 0; i < allMiniImgs.length; i++) {
  const miniImg = allMiniImgs[i];
  miniImg.addEventListener("click", function () {
    const oldMiniImg = allMiniImgs[currentIndex];
    oldMiniImg.classList.remove("selected");

    currentIndex = parseInt(miniImg.getAttribute("data-selected-image"));

    const newMiniImg = allMiniImgs[currentIndex];
    newMiniImg.classList.add("selected");

    const img = imgs[currentIndex];
    const imgsHtml = `<img src="./img/${img}" class="img ${selectedClass}" alt="img ${i}"  data-selected-image="${i} />`;
    imgsBoxLink.innerHTML = imgsHtml;
  });
} */

/* INTERVALS */

setInterval(function () {
  selfClickDown();
  /*   const oldMiniImg = allMiniImgs[currentIndex];
  oldMiniImg.classList.remove("selected");

  const allImgs = document.getElementsByClassName("img");
  let prevImg = allImgs[currentIndex];
  prevImg.classList.remove("selected");

  if (currentIndex >= allImgs.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  const newMiniImg = allMiniImgs[currentIndex];
  newMiniImg.classList.add("selected");

  const nextImg = allImgs[currentIndex];
  nextImg.classList.add("selected"); */
}, 3000);

/* SELFCLICK */

function selfClickDown() {
  const oldMiniImg = allMiniImgs[currentIndex];
  oldMiniImg.classList.remove("selected");

  const allImgs = document.getElementsByClassName("img");
  let prevImg = allImgs[currentIndex];
  prevImg.classList.remove("selected");

  if (currentIndex >= allImgs.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  const newMiniImg = allMiniImgs[currentIndex];
  newMiniImg.classList.add("selected");

  const nextImg = allImgs[currentIndex];
  nextImg.classList.add("selected");
}
