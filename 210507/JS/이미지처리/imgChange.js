const largePic = document.querySelector(".large");
const smallPics = document.querySelectorAll(".small");
const IMAGE_LEN = smallPics.length;
let curIndex = 0;
let isOpen = 0;
const changePicActive = (obj) => {
  const active = document.querySelector(".pic_active");
  active.classList.remove("pic_active");
  obj.classList.add("pic_active");
};

const clickEventNext = () => {
  curIndex++;
  if (curIndex >= IMAGE_LEN) {
    curIndex = 0;
  }
  largePic.setAttribute(
    "src",
    `/project/HomeWork/test06/Image/img${curIndex + 4}.jpg`
  );
  changePicActive(smallPics[curIndex]);
};
const clickEventPrev = () => {
  curIndex--;
  if (curIndex < 0) {
    curIndex = IMAGE_LEN - 1;
  }
  largePic.setAttribute(
    "src",
    `/project/HomeWork/test06/Image/img${curIndex + 4}.jpg`
  );
  changePicActive(smallPics[curIndex]);
};
function btnClickEvent() {
  // 버튼 클릭시 클릭 처리
  const btnPrev = document.querySelector(".btn_prev");
  const btnNext = document.querySelector(".btn_next");
  btnPrev.addEventListener("click", clickEventPrev);
  btnNext.addEventListener("click", clickEventNext);
}
const getPicIndex = (obj) => {
  for (let i = 0; i < IMAGE_LEN; i++) {
    if (obj == smallPics[i]) {
      return i;
    }
  }
};
function thumnailClickEvent() {
  // 이미지 썸네일 클릭 처리
  for (let obj of smallPics) {
    obj.addEventListener("click", function () {
      largePic.setAttribute("src", this.getAttribute("src"));
      curIndex = getPicIndex(this); // for문 돌려서 this의 인덱스 값 찾기

      //   let picIndex = this.getAttribute("pic_index"); // class를 추가해서 this의 인덱스 값 찾기
      //   curIndex = Number(picIndex);
      changePicActive(this);
    });
  }
}
const clickDetail = () => {
  const showDetail = document.querySelector(".show_detail");
  showDetail.addEventListener("click", clickDetail);
  const Detail = document.querySelector("#detail");
  console.log(Detail);
  if (!isOpen) {
    Detail.style.display = "none";
    showDetail.innerHTML = "상세 설명 보기";
    isOpen = 1;
  } else {
    Detail.style.display = "block";
    showDetail.innerHTML = "상세 설명 닫기";
    isOpen = 0;
  }
};
const init = () => {
  thumnailClickEvent();
  btnClickEvent();
  clickDetail();
};

init();
