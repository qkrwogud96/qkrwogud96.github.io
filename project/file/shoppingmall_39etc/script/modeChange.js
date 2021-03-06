const bodyElem = document.querySelector("body");
const wrapElem = document.querySelector("#wrap");
const logoElem = document.querySelector("#wrap > h1");
const inputElem = wrapElem.querySelectorAll("input");
const labelElem = wrapElem.querySelectorAll("label");
const buttonElem = wrapElem.querySelectorAll("button");
const submainElem = wrapElem.querySelector(".sub_main");
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
    buttonElem.forEach((obj) => {
      obj.classList.toggle("changeBgColor-light");
      if(buttonElem.length < 2){
      obj.classList.toggle("changeTextColor-dark");
      }
    });
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
    if (submainElem != null) {
      submainElem.style.borderTop = LIGHTMODE.border;
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
    if (submainElem != null) {
      submainElem.style.borderTop = DARKMODE.border;
    }
    check = true;
  }
};
modeBtn.addEventListener("click", modeChange);
