/* LINKS TO HTML */
const imgsBoxEl = document.querySelector(".imgs-box");

/* PROCESS */
const imgs = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

let imgsHtml = "";
for (let i = 0; i < imgs.length; i++) {
  const img = imgs[i];

  let selectedClass;
  if (i == 0) {
    selectedClass = "selected";
  } else {
    selectedClass = "";
  }
  imgsHtml += `<img src="./img/${img}" class="img ${selectedClass}" alt="img ${i}" />`;
}

imgsBoxEl.innerHTML = imgsHtml;
