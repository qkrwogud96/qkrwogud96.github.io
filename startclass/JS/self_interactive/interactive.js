


const scrollEvent = () =>{
    const totalHeight = document.documentElement.scrollHeight-window.innerHeight;    
    const percent = pageYOffset / totalHeight * 900; //스크롤 남은 퍼센테이지

    const zBoxObj = document.querySelector('#box');
    zBoxObj.style.transform = `translateZ(${-500 + percent}vh)`
}
const init = () =>{
    window.addEventListener('scroll', scrollEvent);
}
init();