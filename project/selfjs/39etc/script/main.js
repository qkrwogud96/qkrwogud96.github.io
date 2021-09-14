const modeBtn = document.querySelector(".fa-lightbulb");
const searchBtn = document.querySelector(".fa-search");
const closeSearchBtn = document.querySelector("label i");

const mainElem = document.querySelector(".mainmenu ul");
const bodyElem = document.querySelector("body");

const logoElem = document.querySelector(".logo h1");
const labelElem = document.querySelector("label");
const inputElem = labelElem.querySelector("input");
const gnbElem = document.querySelectorAll(".gnb li");
const submenuElem = document.querySelector(".submenu");
const closesubBtn = submenuElem.querySelector("button");

let check = true;
const closeSearch = () => {
  mainElem.style.display = "flex";
  labelElem.style.display = "none";
};
const openSearch = () => {
  inputElem.value = "";
  mainElem.style.display = "none";
  labelElem.style.display = "block";
};
const changeColor = () => {
  bodyElem.classList.toggle("changeBgColor");
  logoElem.classList.toggle("changeTextColor");
  modeBtn.classList.toggle("changeTextColor");
  searchBtn.classList.toggle("changeTextColor");
  inputElem.classList.toggle("changeTextColor");
  if (check) {
    inputElem.style.borderBottom = "2px solid #fff";
    check = false;
  } else {
    inputElem.style.borderBottom = "2px solid #11010d";
    check = true;
  }
  closeSearchBtn.classList.toggle("changeTextColor");
  gnbElem.forEach((element) => element.classList.toggle("changeTextColor"));
};
const openSubmenu = () => {
  submenuElem.classList.add("on");
};
const closeSubmenu = () => {
  submenuElem.classList.remove("on");
};
const clickBtnEvent = () => {
  modeBtn.addEventListener("click", changeColor);
  searchBtn.addEventListener("click", openSearch);
  closeSearchBtn.addEventListener("click", closeSearch);
  logoElem.addEventListener("click", openSubmenu);
  closesubBtn.addEventListener("click", closeSubmenu);
  gnbElem[0].addEventListener("click", function () {
    alert("준비중입니다.");
  });
};
const init = () => {
  clickBtnEvent();
};
init();

//추가해보고싶은것들

//submenu 닫는 부분 확장
//mode 클릭시 이미지 색상 반전
//colorchange 간소화
//swiper 이미지 클릭으로 넘기는 방식
