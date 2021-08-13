$(function () {
  $("header > ul > li").on("mouseover", function () {
    $(this).find(".submenu").stop().slideDown();
  });
  $("header > ul > li").on("mouseout", function () {
    $(this).find(".submenu").stop().slideUp();
  });
  let curPos = 0;
  setInterval(function () {
    if (curPos < 2) {
      curPos++;
    } else {
      curPos = 0;
    }
    $(".slideImg").eq(curPos).siblings().fadeOut();
    $(".slideImg").eq(curPos).fadeIn();
  }, 3000);

  $("#img-section > content > .menu").on("click", function () {
    $(".active").removeClass("active");
    $(this).addClass("active");
    $(".on").removeClass("on");
    $(this).next(".contents").addClass("on");
  });

  $("#img-section > content > .contents1 > div")
    .eq(0)
    .on("click", function () {
      $(".pop-up").fadeIn();
    });
  $(".modal > .exit").on("click", function () {
    $(".pop-up").fadeOut();
  });
});
