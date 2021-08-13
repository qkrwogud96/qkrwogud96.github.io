$(function(){
    $('header > ul > li').on('mouseover', function(){
        $(this).css('background-color', 'pink');
        $(this).find('.submenu').stop().slideDown();
    });
    $('header > ul > li').on('mouseout', function(){
        $(this).find('.submenu').stop().slideUp();
    });
    let curPos = 0;
    setInterval(function(){
        if(curPos < 2){
            curPos++;
        }
        else{
            curPos = 0;
        }
        $('.slideImg').eq(curPos).siblings().fadeOut();
        $('.slideImg').eq(curPos).fadeIn();

    },3000);
});
