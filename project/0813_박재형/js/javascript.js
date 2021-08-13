$(function () {
  $("#head > .h_menu >ul > li").on("mouseover", function () {
    $(".h_submenu").stop().slideDown();
  });
  $("#head > .h_menu >ul > li").on("mouseout", function () {
    $(".h_submenu").stop().slideUp();
  });
  
  let curPos = 0;
  setInterval(function(){
    
    $("#slide > .imgbox-slide").css('transform',`translate(${-1200 * curPos}px)`);
    // curPos++;
    // if(curPos >= 4){
    //     curPos = 0;
    // }
    // else{
    //     curPos++;
    // }
},1000);
});
