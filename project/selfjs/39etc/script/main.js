const subElem = document.querySelector('.logo h1');
const submenuElem = document.querySelector('.submenu');
const closeSubmenuBtn = document.querySelector('.submenu .fa-times');
const downSubmenuEvent = () =>{
  submenuElem.style.top = '0';
}
const UpSubmenuEvent = () => {
  submenuElem.style.top = '-80vh';
}
const clickBtnEvent = () => {
  subElem.addEventListener('click', downSubmenuEvent);
  closeSubmenuBtn.addEventListener('click',UpSubmenuEvent);
};
const init = () => {
  clickBtnEvent();
};
init();

//추가해보고싶은것들

//submenu 닫는 부분 확장
//mode 클릭시 이미지 색상 반전
//swiper 이미지 클릭으로 넘기는 방식


//submenu 클릭시 처리하기.