const submenuLogoElem = document.querySelector(".logo");
const navElem = document.querySelector("header nav ul");
const scrollEvent = () => {
//   console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 100) {
    submenuLogoElem.style.top = "-10rem";
    navElem.style.flexDirection = 'column';
  } else {
    submenuLogoElem.style.top = "0";
    navElem.style.flexDirection = 'row';
  }
};

window.addEventListener("scroll", scrollEvent);
