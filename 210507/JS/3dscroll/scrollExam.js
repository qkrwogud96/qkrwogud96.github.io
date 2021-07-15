const processBar = document.querySelector(".process-bar");
const boxObj = document.querySelector(".box");
const stageObj = document.querySelector(".stage");
const menuObj = document.querySelector('#gnb');
const zMoveFocus = [-500, -300, 20, 300, 500];

const getViewIndex = (curPos) => {
  for (let i = 0; i < zMoveFocus.length; i++) {
    if (curPos >= zMoveFocus[i] && curPos < zMoveFocus[i + 1]) {
      return i;
    }
  }
};
const menuActive = (idx) =>{
  const activeObj = document.querySelector('.active');
  activeObj.classList.remove('active');
  menuObj.children[idx].classList.add('active');
}
const resizeEvent = () => {
  contentScroll = document.documentElement.scrollHeight - window.innerHeight;
};
const scrollEvent = () => {
  const bodyHeight = document.documentElement.scrollHeight;
  const scrollHeight = window.innerHeight;
  const curScroll = document.documentElement.scrollTop; // == pageYOffset

  const barPercent = (curScroll / (bodyHeight - scrollHeight)) * 100;
  processBar.style.width = barPercent + "%";

  const boxPercent = -500 + (curScroll / (bodyHeight - scrollHeight)) * 995;
  boxObj.style.transform = `translateZ(${boxPercent}vw)`;

  const index = getViewIndex(boxPercent);
  menuActive(index);

};
const moveEvent = (e) => {
  //   console.log(e.clientX-(window.innerWidth * 0.5), e.clientY- (window.innerHeight * 0.5));
  const pointX = -1 + (e.clientX / window.innerWidth) * 2;
  const pointY = 1 - (e.clientY / window.innerHeight) * 2;

  stageObj.style.transform = `rotateX(${5 * pointY}deg) rotateY(${5 * pointX}deg)`;
};
const menuClickEvent = (e) =>{
  e.preventDefault();
  const target = e.target;
  if( target.tagName === 'A'){
    const idx = target.getAttribute('href');
    boxObj.style.transform = `translateZ(${zMoveFocus[idx]}vw)`;
    menuActive(idx);
  }
}
const init = () => {
  resizeEvent();
  window.addEventListener("resize", resizeEvent);
  window.addEventListener("scroll", scrollEvent);
  window.addEventListener("mousemove", moveEvent);
  menuObj.addEventListener('click', menuClickEvent);
};
init();
