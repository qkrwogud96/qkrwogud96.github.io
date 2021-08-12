const buttons = document.querySelectorAll("button");
const inputs = document.querySelectorAll("input");
const colors = document.querySelectorAll(".check_color div");
const editText = document.querySelector(".text_edit span");
const fontSize = document.querySelector("p");
let curSize = 16; // 폰트 사이즈
let curValue = inputs[0].value; // 초기 value값 및 변경값 저장
let curColor = colors[0].style.backgroundColor; // 초기 color값 및 변경값 저장
function fontValue() {
  fontSize.innerText = `${curSize}px`;
  editText.style.fontSize = `${curSize}px`;
} // 폰트 크기 변경 및 출력
function fontStyle(obj) {
  editText.classList.toggle(obj);
} // 폰트 스타일 변경
function active(obj) {
  const act = document.querySelector(".active");
  act.classList.toggle("active");
  obj.classList.toggle("active");
} //클릭 액티브 처리 함수
function change() {
  if (curValue === "color") {
    editText.style.color = curColor;
  } else {
    editText.style.backgroundColor = curColor;
  }
} // 변경( 색상 , 값 ) 처리함수
const targetEvent = (obj) => {
  switch (obj) {
    case "dec":
      curSize--;
      if (curSize <= 10) curSize = 10;
      fontValue();
      break;
    case "inc":
      curSize++;
      if (curSize >= 25) curSize = 25;
      fontValue();
      break;
    case "ori":
      curSize = 16;
      fontValue();
      break;
    case "obli":
    case "bold":
    case "under":
      fontStyle(obj);
      break;
    case "change":
      change();
      break;
    default:
      break;
  }
};
  const btnClickEvent = (e) => {
    const target = e.target.getAttribute("val");
    targetEvent(target);
  };
const inputClickEvent = (e) => {
  const target = e.target.value;
  if (target === "backgroundColor") {
    curValue = "backgroundColor";
  } else {
    curValue = "color";
  }
};
const colorClickEvent = (e) => {
  const target = e.target;
  curColor = target.style.backgroundColor;
  active(target);
};
const contentsList = () => {
  buttons.forEach((obj) => {
    obj.addEventListener("click", btnClickEvent);
  });
  inputs.forEach((obj) => {
    obj.addEventListener("change", inputClickEvent);
  });
  colors.forEach((obj) => {
    obj.addEventListener("click", colorClickEvent);
  });
};
const init = () => {
  contentsList();
};
init();


