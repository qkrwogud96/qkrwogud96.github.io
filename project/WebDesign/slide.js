//전역변수
(function(){
    //지역변수
    const gnbMenu = document.querySelectorAll('header > ul > li');
    gnbMenu.forEach((liElem, idx) =>{
        liElem.addEventListener('mouseover', function(){
            const obj = gnbMenu[idx].querySelector('.submenu');
            obj.style.height = "120px";
        });
        liElem.addEventListener('mouseout', function(){
            const obj = gnbMenu[idx].querySelector('.submenu');
            obj.style.height = '0';
        });
    });


    const slideImg = document.querySelector('#info-section > .slide-list');
    let curPos = 0;
    let posLeft = 0;
    
    setInterval(function(){
        if(curPos < 2){
            curPos++;
        }
        else{
            curPos = 0;
        }
        posLeft = (-1) * 1200 * curPos;
        slideImg.style.left = posLeft + 'px';
    }, 3000);
})();