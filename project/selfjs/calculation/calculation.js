const clickEvent = () => {
  const numberPad = document.querySelectorAll(".pad1");
  for (let obj of numberPad) {
    obj.addEventListener("click", function () {
      console.log(obj);
      //  클릭 시 눌렀다 떼는 모션 처리
      //obj.style.boxShadow = "2px 2px 2px rgb(238, 110, 131)"; 
      //obj.style.transform = "translate(2px, 2px)"; 
    });
  }
};
const init = () => {
  clickEvent();
};
init();
