const IMAGE_WIDTH = 300;
const btnPrev = document.querySelector(".slide_btn_prev");
const btnNext = document.querySelector(".slide_btn_next");

//이미지 개수
const slide_contents = document.querySelectorAll(".slide_contents");
const slide_list = document.querySelector(".slide_list");
const SLIDE_LEN = slide_contents.length;
let curIndex = 0; // 현재 보여지고 있는 이미지의 index

function clickBtnPrev() {
  curIndex--;
  if (curIndex < 0) {
    curIndex = 0;
  }
  btnNext.removeAttribute("disabled");
  slide_list.style.transition = "300ms";
  slide_list.style.transform = "translateX(-" + IMAGE_WIDTH * curIndex + "px)";

  if (curIndex === 0) btnPrev.setAttribute("disabled", "true");
}
function clickBtnNext() {
  if (curIndex >= SLIDE_LEN - 1) {
    curIndex = SLIDE_LEN - 1;
    btnNext.setAttribute("disabled", "true");
  } else {
    curIndex++;
    btnPrev.removeAttribute("disabled");
    slide_list.style.transition = "300ms";
    slide_list.style.transform =
      "translateX(-" + IMAGE_WIDTH * curIndex + "px)";
  }
  if (curIndex === SLIDE_LEN - 1) btnNext.setAttribute("disabled", "true");
}

//button 이벤트 처리
function btnEvent() {
  btnPrev.addEventListener("click", clickBtnPrev);
  btnNext.addEventListener("click", clickBtnNext);
}

function init() {
  btnEvent(); //버튼 이벤트 함수 호출

  //slide_list width 설정
  slide_list.style.width = IMAGE_WIDTH * SLIDE_LEN + "px";
  slide_list.style.transform = "trasnlateX(0px)";
  btnPrev.setAttribute("disabled", "true");
}

init();
