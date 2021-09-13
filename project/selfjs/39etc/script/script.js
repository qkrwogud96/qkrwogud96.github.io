const modeBtn = document.querySelector(".mode");
const searchBtn = document.querySelector(".search");
const closeSearchBtn = document.querySelector("label > span");
const bodyElem = document.querySelector("body");
const navElem = document.querySelectorAll("nav > ul >li");
const gnbElem = document.querySelectorAll(".gnb > div > a > i");
const titleElem = document.querySelector("h1");
const searchLabel = document.querySelector(".gnb > label");
const changeMode = () => {
  bodyElem.classList.toggle("changeBgColor");
  navElem.forEach((obj) => {
    obj.classList.toggle("changeTextColor");
  });
  gnbElem.forEach((obj) => {
    obj.classList.toggle("changeTextColor");
  });
  titleElem.classList.toggle("changeTextColor");
};
const openSearchEvent = () => {
  searchLabel.style.display = "block";
  gnbElem.forEach((obj) => {
    obj.style.display = "none";
  });
};
const closeSearchEvent = () => {
  searchLabel.style.display = "none";
  gnbElem.forEach((obj) => {
    obj.style.display = "block";
  });
};
const init = () => {
  modeBtn.addEventListener("click", changeMode);
  searchBtn.addEventListener("click", openSearchEvent);
  closeSearchBtn.addEventListener("click", closeSearchEvent);
};
init();
