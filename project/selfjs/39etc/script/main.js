//mode 색상 바꾸기

//search 검색 활성화 / 비활성화

//logo submenu호출

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
  submenuElem.style.top = "0";
};
const closeSubmenu = () => {
  submenuElem.style.top = "-80vh";
};
const clickBtnEvent = () => {
  modeBtn.addEventListener("click", changeColor);
  searchBtn.addEventListener("click", openSearch);
  closeSearchBtn.addEventListener("click", closeSearch);
  logoElem.addEventListener("click", openSubmenu);
  closesubBtn.addEventListener("click", closeSubmenu);
  gnbElem[0].addEventListener('click', function (){
    alert("준비중입니다.");
  });
};
const init = () => {
  clickBtnEvent();
};
init();
