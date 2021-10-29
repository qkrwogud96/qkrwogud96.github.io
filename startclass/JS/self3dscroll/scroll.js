

const mouseMoveEvent = (e) =>{
    const pointX = -1 + (e.clientX / window.innerWidth) * 2;
    const pointY = 1 - (e.clientY / window.innerHeight) * 2;

    console.log(pointX, pointY);
}

const scrollEvent = () =>{
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    const percent = -500 + pageYOffset / totalHeight * 955;

    const Zmove = document.querySelector('#box-move');
    Zmove.style.transform = `translateZ(${percent}vh)`;
}
const init = () =>{
window.addEventListener('scroll', scrollEvent);
window.addEventListener('mousemove', mouseMoveEvent);
}
init();