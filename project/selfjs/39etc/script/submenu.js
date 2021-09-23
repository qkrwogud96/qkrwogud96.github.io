const barsBtn = document.querySelector(".fa-bars");
const submenuElem = document.querySelector(".submenu");
const closesubmenuBtn = document.querySelector(".submenu .fa-times");

//submenu 호출하기
const slideDownSubMenu = () => {
  submenuElem.style.top = "0";
  barsBtn.style.opacity = '0';
};
const slideUpSubMenu = () => {
  submenuElem.style.top = "-100vh";
  barsBtn.style.opacity = '1';
};



function submenuEvent() {
  barsBtn.addEventListener("click", slideDownSubMenu);
  closesubmenuBtn.addEventListener("click", slideUpSubMenu);
}
submenuEvent();

//reseize시 submenu 처리하기
//서브메뉴아닌 곳을 클릭시 메뉴창 올라가는 것도 추가하기.
