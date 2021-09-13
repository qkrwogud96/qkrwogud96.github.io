//mode 색상 바꾸기

//search 검색 활성화 / 비활성화

//logo submenu호출

const modeBtn = document.querySelector(".fa-lightbulb");
const searchBtn = document.querySelector(".fa-search");
const closeSearchBtn = document.querySelector("label i");

const mainElem = document.querySelector(".mainmenu ul");
const bodyElem = document.querySelector("body");
const domainElem = document.querySelector("#wrap > h1");
const logoElem = document.querySelector(".logo >h1");
const labelElem = document.querySelector("label");
const inputElem = labelElem.querySelector("input");
const gnbElem = document.querySelectorAll(".gnb li");
const bagItemList = document.querySelector(".your-list");

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
  domainElem.classList.toggle("changeTextColor");
  logoElem.classList.toggle("changeTextColor");
  modeBtn.classList.toggle("changeTextColor");
  searchBtn.classList.toggle("changeTextColor");
  inputElem.classList.toggle("changeTextColor");
  if (check) {
    domainElem.style.border = "2px solid #fff";
    inputElem.style.borderBottom = "2px solid #fff";
    check = false;
  } else {
    inputElem.style.borderBottom = "2px solid #11010d";
    domainElem.style.border = "2px solid #11010d";
    check = true;
  }
  closeSearchBtn.classList.toggle("changeTextColor");
  bagItemList.classList.toggle("changeTextColor");
  gnbElem.forEach((element) => element.classList.toggle("changeTextColor"));
};

const clickBtnEvent = () => {
  modeBtn.addEventListener("click", changeColor);
  searchBtn.addEventListener("click", openSearch);
  closeSearchBtn.addEventListener("click", closeSearch);
  gnbElem[0].addEventListener('click', function (){
    alert("준비중입니다.");
  });
};
const init = () => {
  clickBtnEvent();
};
init();
