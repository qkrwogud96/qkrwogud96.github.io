const buttons = document.querySelectorAll("button");
const editText = document.querySelector(".text_edit span");
const fontSize = document.querySelector("p");
const inputs = document.querySelectorAll("input");
const colors = document.querySelectorAll('.check_color div');

let curSize = 16;
let curValue = "color";
let curColor = "white";
function fontValue() {
  fontSize.innerText = `${curSize}px`;
  editText.style.fontSize = `${curSize}px`;
}
function fontStyle(obj) {
  editText.classList.toggle(obj);
}
function active(obj){
   const act = document.querySelector('.active');
   act.classList.toggle('active');
   obj.classList.toggle('active');
}
function change(){
   if(curValue == 'color'){
        editText.style.color = curColor;
   }
   else{
        editText.style.backgroundColor = curColor;
   }
}
const targetEvent = (obj) => {
    switch (obj) {
      case "dec":
        curSize--;
        fontValue();
        break;
      case "inc":
        curSize++;
        fontValue();
        break;
      case "ori":
        curSize = 16;
        fontValue();
        break;
      case "obli":
        fontStyle("obli");
        break;
      case "bold":
        fontStyle("bold");
        break;
      case "under":
        fontStyle("under");
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
    if (target == "배경") {
      curValue = "backgroundColor";
    } else {
      curValue = "color";
    }
  };
const colorsClickEvent = (e) =>{
    const target = e.target;
    curColor = target.getAttribute('color');
    active(target);
};
const init = () => {
  buttons.forEach((obj) => {
    obj.addEventListener("click", btnClickEvent);
  });
  inputs.forEach((obj) => {
    obj.addEventListener("change", inputClickEvent);
  });
  colors.forEach((obj) => {
    obj.addEventListener("click", colorsClickEvent);
  });
};
init();
