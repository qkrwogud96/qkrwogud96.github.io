let sections = [];
const secObj = document.querySelectorAll("section");
// const aObj =  document.querySelectorAll('a');
const menuObj = document.querySelector("#gnb");
const secLength = secObj.length;

const saveSections = () => {
  for (let i = 0; i < secObj.length; i++) {
    sections[i] = secObj[i].offsetTop - window.innerHeight * 0.5;
  }
  sections[secLength] = document.documentElement.scrollHeight;
};
const menuActive = (idx) => {
  const prev = document.querySelector(".active");
  prev.classList.remove("active");
  menuObj.children[idx].classList.add("active");
};
const scrollEvent = () => {
  for (let i = 0; i < sections.length; i++) {
    if (pageYOffset >= sections[i] && pageYOffset <= sections[i + 1]) {
      menuActive(i);
    }
  }
};
const getMenuIndex = (target) => {
  for (let i = 0; i < menuObj.children.length; i++) {
    if (menuObj.children[i] === target) {
      return i;
    }
  }
};
const clickEvent = (e) => {
  e.preventDefault(); // 그 태그의 모든 기능을 초기화해서 빈값을 만드는 함수.
  if (e.target.tagName === "A") {
    const idx = getMenuIndex(e.target);
    menuActive(idx);
    window.scrollTo(0, sections[idx] + innerHeight * 0.5);
  }
};
const init = () => {
  saveSections();
  menuObj.addEventListener("click", clickEvent);
  window.addEventListener("scroll", scrollEvent);
};
init();
