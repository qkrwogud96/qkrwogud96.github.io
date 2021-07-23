// jQuery 기본 연습들

$(function () {
  // let obj = $( 'h1' );
  // obj.css('color', 'red');
  // obj.eq(0).css('color', 'red');  >> eq 배열 선택

  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  // $('#title').next().css('color', 'red'); // 인접 태그중 다음 것
  // $('#title').prev().css('color', 'red'); // 인접 태그중 전에 것
  // let obj = $('p:nth-of-type(1)').parent(); //객체의 부모
  // console.log( obj );

  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  // $('h1').text('제목변경'); // text변경
  //     $('h1').html('<i>제목변경</i>'); // html 변경

  //////////////////////////////////////////////////////////////////////////////////////////////////////////

  // let attr1 = $('img').attr('alt'); // getAttribute
  // let attr2 = $('img').attr('src', '/project/cafe/Image/map.jpg'); // setAttribute
  //   $("img").attr({
  //     src: "/project/cafe/Image/map.jpg",  //기본적으로 string이므로 ''안적어도 됨
  //     alt: "지도 이미지",
  //     width: "500px", // 단위를 안붙여도 된다. ( 500 )으로도 가능
  //   });

  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  $("img").attr({
    width: "200px",
  });

  let index = 1;
  $("button").on("click", function(){
    index++;
    if (index > 7) {
      index = 1;
    }
    $("img").attr("src", "/images/image-0" + index + ".png");
  });
});
