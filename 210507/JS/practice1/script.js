const imgWrap = document.querySelector(".img_wrap");
const imgContents = document.querySelectorAll(".img_contents");
const WIDTH = 300; // 이미지 크기
const SLIDESPEED = 300; //슬라이드 속도
const IMAGE_LEN = imgContents.length; //슬라이드 이미지 길이
let imgCurIndex = 0; //슬라이드 이미지 위치
console.log(IMAGE_LEN);

const cloneobj = () => {
  const firstChildNode = imgWrap.firstElementChild;
  const lastChildNode = imgWrap.lastElementChild;
  const cloneFirst = firstChildNode.cloneNode(true);
  const cloneLast = lastChildNode.cloneNode(true);
  imgWrap.appendChild(cloneFirst);
  imgWrap.insertBefore(cloneLast, firstChildNode);
};

//Next 버튼 이벤트
function clickEventNext() {
  imgCurIndex++;
  if (imgCurIndex <= IMAGE_LEN + 1) {
    console.log(imgCurIndex);

    imgWrap.style.transition = SLIDESPEED + "ms";
    imgWrap.style.transform = `translateX(-${WIDTH * (imgCurIndex + 1)}px)`;
  }
  if (imgCurIndex === IMAGE_LEN) {
    setTimeout(function () {
      imgWrap.style.transition = 0 + "ms";
      imgWrap.style.transform = `translateX(-${WIDTH}px)`;
    }, SLIDESPEED);
    imgCurIndex = 0;
    console.log(imgCurIndex);
  }
}
//Prev 버튼 이벤트
function clickEventPrev() {
  imgCurIndex--;
  if (imgCurIndex >= -1) {
    console.log(imgCurIndex);
    imgWrap.style.transition = SLIDESPEED + "ms";
    imgWrap.style.transform = `translateX(-${WIDTH * (imgCurIndex + 1)}px)`;
  }
  if (imgCurIndex === -1) {
    console.log(imgCurIndex);
    setTimeout(function () {
      imgWrap.style.transition = 0 + "ms";
      imgWrap.style.transform = `translateX(-${WIDTH * IMAGE_LEN}px)`;
    }, SLIDESPEED);
    imgCurIndex = IMAGE_LEN-1;
  }
}

//버튼 클릭 처리 함수선언
const clickEventBtn = () => {
  const btnPrev = document.querySelector(".btn_prev");
  const btnNext = document.querySelector(".btn_next");
  btnPrev.addEventListener("click", clickEventPrev);
  btnNext.addEventListener("click", clickEventNext);
};
const init = () => {
  clickEventBtn();
  cloneobj();
  imgWrap.style.width = WIDTH * (IMAGE_LEN + 2) + "px";
  imgWrap.style.transform = `translateX(-${WIDTH}px)`;
};
init();
