const screen = document.querySelector("#calc-screen");

let calc = "";
let calcNum = 0;
let saveNum = 0;

const calcNumClickEvent = (e) => {
  const targetNum = e.target.getAttribute("num");
  screen.innerText += targetNum;
  calcNum = Number(screen.textContent);
};
const calcClickEvent = () => {
  let value = saveCalc(calc, calcNum, saveNum);
  screen.innerText = "" + value;
};
const clearClickEvent = () => {
  console.log("clear");
  screen.innerText = "";
  calcNum = 0;
  saveNum = 0;
  calc = "";
};
const calcAlgClickEvent = (e) => {
  calc = e.target.getAttribute("id");
  let value = saveCalc(calc, calcNum, saveNum);
  saveNum = value;
  calcNum = 0;
  screen.innerText = "";
};
const saveCalc = (calc, cur, save) => {
  if (calc == "mul" || calc == "div") {
    if (cur == 0) {
      cur = 1;
    }
    if (save == 0) {
      save = 1;
    }
  }
  switch (calc) {
    case "add":
      return save + cur;
    case "sub":
      return save - cur;
    case "mul":
      return save * cur;
    case "div":
      return save / cur;
    default:
      return calcNum;
      break;
  }
};
const mouseEvent = (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.classList.toggle("active");
  }
};
const btnObjClick = () => {
  const calcNumber = document.querySelectorAll(".number");
  const calculate = document.querySelector(".calc");
  const calcClear = document.querySelector(".clear");
  const calcAlgorithm = document.querySelectorAll(".algorithm");

  for (let obj of calcNumber) obj.addEventListener("click", calcNumClickEvent);
  calculate.addEventListener("click", calcClickEvent);
  calcClear.addEventListener("click", clearClickEvent);
  for (let obj of calcAlgorithm)
    obj.addEventListener("click", calcAlgClickEvent);
};
const init = () => {
  btnObjClick();
  const wrap = document.querySelector("#calc-wrap");
  wrap.addEventListener("mouseup", mouseEvent);
  wrap.addEventListener("mousedown", mouseEvent);
};
init();
