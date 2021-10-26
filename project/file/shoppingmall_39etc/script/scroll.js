const submenuLogoElem = document.querySelector(".logo");
const navElem = document.querySelector("header nav ul");
const scrollEvent = () => {
  //   console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 50) {
    submenuLogoElem.style.top = "-20rem";
    navElem.style.top = "-20rem";
  } else {
    submenuLogoElem.style.top = "0";
    navElem.style.top = "0";
  }
};
window.addEventListener("scroll", scrollEvent);

//스크롤 맨 위로 올리기

const scrollTopBtn =document.querySelector('.scroll_top button');

const moveScrollTop = () =>{
  document.documentElement.scrollTop = 0;
  
}
scrollTopBtn.addEventListener('click',moveScrollTop);