const bodyElem = document.querySelector("body");
const wrapElem = document.querySelector("#wrap");
const logoElem = document.querySelector("#wrap > h1");
const inputElem = wrapElem.querySelectorAll("input");
const labelElem = wrapElem.querySelectorAll("label");
const buttonElem = wrapElem.querySelector("button");

const modeBtn = wrapElem.querySelector(".fa-lightbulb");

const DARKMODE = {
  color: "#fff",
  bgcolor: "#11010d",
  border: "2px solid #fff",
};
const LIGHTMODE = {
  color: "#11010d",
  bgcolor: "#fff",
  border: "2px solid #11010d",
};
let check = false;
const modeChange = () => {
  bodyElem.classList.toggle("changeBgColor");
  wrapElem.classList.toggle("changeTextColor");
  if (buttonElem != null) {
    buttonElem.classList.toggle("changeBgColor-light");
    buttonElem.classList.toggle("changeTextColor-dark");
  }

  if (check) {
    inputElem.forEach((obj) => {
      obj.style.borderBottom = LIGHTMODE.border;
      obj.style.color = LIGHTMODE.color;
    });
    labelElem.forEach((obj) => {
      obj.style.color = LIGHTMODE.color;
    });
    if (logoElem != null) {
      logoElem.style.border = LIGHTMODE.border;
    }
    check = false;
  } else {
    inputElem.forEach((obj) => {
      obj.style.borderBottom = DARKMODE.border;
      obj.style.color = DARKMODE.color;
    });
    labelElem.forEach((obj) => {
      obj.style.color = DARKMODE.color;
    });
    if (logoElem != null) {
      logoElem.style.border = DARKMODE.border;
    }
    check = true;
  }
};
modeBtn.addEventListener("click", modeChange);
