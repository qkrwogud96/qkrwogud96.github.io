const processBar = document.querySelector(".process-bar");
const boxObj = document.querySelector(".box");
const scrollEvent = () => {
  const bodyHeight = document.documentElement.scrollHeight;
  const scrollHeight = window.innerHeight;
  const curScroll = document.documentElement.scrollTop; // == pageYOffset

  const barPercent = (curScroll / (bodyHeight - scrollHeight)) * 100;
  processBar.style.width = barPercent + "%";

  const boxPercent = -500 + (curScroll / (bodyHeight - scrollHeight)) * 995;
  boxObj.style.transform = `translateZ(${boxPercent}vw)`;
};
const moveEvent = (e) => {
  //   console.log(e.clientX-(window.innerWidth * 0.5), e.clientY- (window.innerHeight * 0.5));
  const pointX = -1 + (e.clientX / window.innerWidth) * 2;
  const pointY = 1 - (e.clientY / window.innerHeight) * 2;
    // console.log(pointX,pointY);

  boxObj.style.transform = `rotateX(${3 * pointY}deg) rotateY(${3 * pointX}deg)`;
  console.log(boxObj.style.transform);
};
const init = () => {
  window.addEventListener("mousemove", moveEvent);
  window.addEventListener("scroll", scrollEvent);
};
init();
