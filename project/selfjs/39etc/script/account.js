const modeBtn = document.querySelector(".fa-lightbulb");
const searchBtn = document.querySelector(".fa-search");
const closeSearchBtn = document.querySelector("label i");
const wrapElem = document.querySelectorAll('#wrap');
const mainElem = document.querySelector(".mainmenu ul");
const labelElem = document.querySelector("label");
const inputElem = document.querySelectorAll("input");
const bodyElem = document.querySelector("body");
const domainElem = document.querySelector("#wrap > h1");
const gnbElem = document.querySelectorAll(".gnb li");
const idElem = document.querySelector("input[name=id]");
const passElem = document.querySelector("input[name=password]");
const signElem = document.querySelector("button[type=submit]");
const signUpElem = document.querySelector('.sign-up');


console.log(inputElem)
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
  wrapElem.forEach(obj => obj.classList.toggle('changeTextColor'));
  bodyElem.classList.toggle("changeBgColor");
  signElem.classList.toggle('changeBgColor-light');
  signElem.classList.toggle('changeTextColor-dark');
  idElem.classList.toggle('changeTextColor');
  passElem.classList.toggle('changeTextColor');
  if (check) {
    domainElem.style.border = "2px solid #fff";
    inputElem.forEach(obj => obj.style.borderBottom = "2px solid #fff");
    idElem.style.borderBottom = "2px solid #fff";
    passElem.style.borderBottom = "2px solid #fff";
    check = false;
  } else {
    inputElem.forEach(obj => obj.style.borderBottom = "2px solid #11010d");
    domainElem.style.border = "2px solid #11010d";
    idElem.style.borderBottom = "2px solid #11010d";
    passElem.style.borderBottom = "2px solid #11010d";
    check = true;
  }
};

const clickBtnEvent = () => {
  modeBtn.addEventListener("click", changeColor);
  searchBtn.addEventListener("click", openSearch);
  closeSearchBtn.addEventListener("click", closeSearch);
  gnbElem[0].addEventListener("click", function () {
    alert("준비중입니다.");
  });
};
const loginEvent = (event) => {
  event.preventDefault();
};
const submitEvent = () => {
  const formElem = document.querySelector("form");
  formElem.addEventListener("submit", loginEvent);
  const signInBtn = document.querySelector("button[type=submit]");
  signInBtn.addEventListener("click", function () {
    alert("준비중입니다.");
  });
};
const init = () => {
  clickBtnEvent();
  submitEvent();
};
init();
