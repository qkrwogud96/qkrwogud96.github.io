const IMAGE_WIDTH = 300; //이미지 크기
const SLIDE_SPEED = 200; //슬라이드 속도
const slide_list = document.querySelector(".slide_list");
const slide_contents = document.querySelectorAll(".slide_contents");
let dotIndex; //도트 배열 처리
const SLIDE_LEN = slide_contents.length; // 이미지 개수
let curIndex = 0; //이미지 슬라이드 처리

function clickBtnNext() { //NEXT버튼 처리
  if (curIndex <= SLIDE_LEN - 1) {
    //이동
    slide_list.style.transition = SLIDE_SPEED+"ms";
    slide_list.style.transform =
      "translateX(-" + IMAGE_WIDTH * (curIndex + 2) + "px)";
  }
  if (curIndex === SLIDE_LEN - 1) {
    setTimeout(function () { //이미지를 제자리로 돌아가는데 자연스럽게 만듬
      slide_list.style.transition = "0ms";
      slide_list.style.transform = "translateX(-" + IMAGE_WIDTH + "px)"; 
    },SLIDE_SPEED);
    curIndex = -1;
    //처음으로 이동
  }
  dotIndex[curIndex === -1 ? SLIDE_LEN-1 : curIndex].classList.remove('dot_active'); //NEXT버튼 처리시 도트 처리
  curIndex++;
  dotIndex[curIndex].classList.add('dot_active');
}
function clickBtnPrev() { //PREV버튼 처리
  if (curIndex >= 0) {
    slide_list.style.transition = SLIDE_SPEED+"ms";
    slide_list.style.transform =
      "translateX(-" + IMAGE_WIDTH * curIndex + "px)";
  }
  if (curIndex === 0) {
    //마지막으로 이동
    setTimeout(function () {
        slide_list.style.transition = "0ms";
        slide_list.style.transform = "translateX(-" + IMAGE_WIDTH*SLIDE_LEN + "px)";
      },SLIDE_SPEED);
    curIndex = SLIDE_LEN;
  }
  dotIndex[curIndex === SLIDE_LEN ? 0 : curIndex].classList.remove('dot_active');
  curIndex--;   
  dotIndex[curIndex].classList.add('dot_active');
}
function btnEvent() { 
  const btnNext = document.querySelector(".slide_btn_next");
  const btnPrev = document.querySelector(".slide_btn_prev");
  btnNext.addEventListener("click", clickBtnNext);
  btnPrev.addEventListener("click", clickBtnPrev);
}
function cloneImageNode() {
  const firstNode = slide_list.firstElementChild;
  const lastNode = slide_list.lastElementChild;
  const cloneFirst = firstNode.cloneNode(true);
  const cloneLast = lastNode.cloneNode(true);
  slide_list.append(cloneFirst);
  slide_list.insertBefore(cloneLast, firstNode);
}
function clickDotIndex(){
    // console.log( 'click dot event');
    const curDot = document.querySelector('.dot_active');
    curDot.classList.remove('dot_active'); // 도트 클릭시 다른 도트에 있는 액티브 삭제
    let idxCurDot = Number(this.getAttribute('dot_index'));
    this.classList.add('dot_active'); 
    curIndex = idxCurDot;
    slide_list.style.transition = SLIDE_SPEED+"ms";
    slide_list.style.transform = "translateX(-" + IMAGE_WIDTH * (curIndex+1) + "px)";
}
function createDot(){
    let dotTag = '';
    for(let i=0; i<SLIDE_LEN; i++){
        dotTag += `<a href="#" class="dot ${(i === curIndex) ? 'dot_active' : ''}" dot_index="${i}"></a>`;
        // dotTag += '<a href="#" class="dot ';
        // dotTag += (i === curIndex) ? 'dot_active' : '';  
        // dotTag += '" dot_inner="';
        // dotTag += i;
        // dotTag += '"></a>';
    }
    const dots = document.querySelector('.slide_current_circle');
    dots.innerHTML = dotTag; //저장한 값 HTML로 추가
    dotIndex = document.querySelectorAll('.dot'); //추가한 a태그 찾기 (배열로 저장)
    for( let obj of dotIndex){ // obj에 a태그 저장(자식)
        obj.addEventListener('click', clickDotIndex);
    }
} 
    
function init() {
  btnEvent();
  cloneImageNode();
  createDot();
  //slide list 전체 width 설정
  slide_list.style.width = IMAGE_WIDTH * (SLIDE_LEN + 2) + "px";
  slide_list.style.transform = "translateX(-" + IMAGE_WIDTH + "px)";
}
init();
