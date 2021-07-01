const imgWrap = document.querySelector(".img_wrap");
const imgContents = document.querySelectorAll(".img_contents");
const WIDTH = 300; // 이미지 크기
const SLIDESPEED = 300; //슬라이드 속도
const IMAGE_LEN = imgContents.length; //슬라이드 이미지 길이
let imgCurIndex = 0; //슬라이드 이미지 위치 


//Next 버튼 이벤트
function clickEventNext() {
  console.log("click btn next");
  imgCurIndex++;
  if(imgCurIndex >= 5){
      imgCurIndex = 0;
  }
  imgWrap.style.transition = SLIDESPEED + 'ms';
  imgWrap.style.transform = `translateX(-${WIDTH * imgCurIndex}px)`; 
  console.log( imgWrap.style.transform );
}
//Prev 버튼 이벤트
function clickEventPrev() {
  console.log("click btn prev");
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

  imgWrap.style.width = WIDTH * IMAGE_LEN + "px";
};
init();
