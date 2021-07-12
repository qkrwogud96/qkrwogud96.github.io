
const scrollEvent = () =>{
    const totalHeight = document.documentElement.scrollHeight-window.innerHeight;    
    const percent = pageYOffset / totalHeight * 1000; //스크롤 남은 퍼센테이지

    const zBoxObj = document.querySelector('#zbox');
    zBoxObj.style.transform = `translateZ(${-500 + percent}px)`
}
const init = () =>{
    window.addEventListener('scroll', scrollEvent);
}
init();