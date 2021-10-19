const modalArray = [
  //불러오는 이미지, 가져오는 동영상, 사이트 설명, 개요, 특징, 활용 라이브러리
  //publishing
  {
    img: "39etc",
    video: "",
    title: "누구나 쉽게 사용 가능한 쇼핑몰",
    summary: "반응형으로 동작하는 쇼핑몰을 퍼블리싱 하였습니다.",
    point: [
      "Media query를 활용하여 반응형 웹(PC/Tablet/Mobile) 구현",
      "LocalStorage와 Json을 활용하여 이미지와 텍스트 저장",
      "Swiper API를 이용해 이미지 fade효과",
      "Js toggle을 활용하여 색상 반전",
      "Js를 이용한 이미지 자동 슬라이드",
    ],
    library: ["HTML5", "CSS3", "Javascript"],
  },
  {
    img: "animalshelter",
    video: "",
    title: "한 번쯤은 클릭해보고 싶은 3D효과",
    summary: "카드 뒤집는 모션을 활용한 동물보호소 웹페이지를 구현했습니다.",
    point: [
      "CSS3 grid 활용",
      "CSS3 transform 3D를 이용한 이미지 rotate",
      "Js toggle을 활용하여 HTML classList toggle",
    ],
    library: ["HTML5", "CSS3", "Javascript"],
  },
  {
    img: "interactive",
    video: "",
    title: "어디서든 열어볼 수 있는 반응형 사이트",
    summary: "반응형으로 동작하는 메인 홈페이지를 퍼블리싱 했습니다.",
    point: [
      "HTML5 input과 label을 이용한 navigation",
      "Media query를 활용하여 반응형 웹(PC/Tablet/Mobile) 구현",
      "fontawesome 활용한 sns 구현",
    ],
    library: ["HTML5", "CSS3"],
  },
  {
    img: "mac",
    video: "",
    title: "스크롤에 눈이 즐거운 사이트",
    summary: "MacBook Pro를 소개하는 반응형 스크롤 웹사이트를 구현했습니다.",
    point: [
      "HTML5 canvas 활용",
      "Media query를 활용하여 반응형 웹(PC/Mobile) 구현",
      "CSS3 transform을 이용한 text fade in-out 효과",
      "Js 객체와 배열을 사용",
      "Js eventlistener scroll을 활용한 canvas 이미지 출력",
    ],
    library: ["HTML5", "CSS3", "Javascript"],
  },
  {
    img: "momentum",
    video: "",
    title: "하루의 일과를 작성하는 확장 프로그램",
    summary: "구글 확장 프로그램 Momentum을 클론코딩 하였습니다.",
    point: [
      "HTML5 form 활용",
      "Js date를 활용한 현재 시간 구현",
      "LocalStorage를 활용한 메모지 구현",
      "Emailjs API로 문의사항 구현",
      "OpenWeatherMap API로 날씨 및 지역 구현",
    ],
    library: ["HTML5", "CSS3", "Javascript"],
  },
  {
    img: "vogue",
    video: "",
    title: "브랜드를 소개하는 태블릿 광고",
    summary: "Vogue의 웹사이트를 소개하는 영상을 구현했습니다.",
    point: ["fontawesome 활용한 sns 구현", "flex 활용", "CSS3 keyframes 사용"],
    library: ["HTML5", "CSS3"],
  },
  //design
  { img: "calexo", video: "" },
  { img: "leaflet", video: "" },
  { img: "weeding", video: "" },
  {
    img: "hanatour",
    video: "",
  },
];

const button = document.querySelector("button");
const modalElem = document.querySelector("#modal");

function closeModal() {
  modalElem.style.display = "none";

  document.body.classList.remove("modal-open");
}
button.addEventListener("click", closeModal);

const publishingWrap = document.querySelector(".publishing-wrap");
const designWrap = document.querySelector(".design-wrap");

function openModal(e) {
  document.body.classList.add('modal-open');
  modalElem.style.display = 'block';

  console.log(e.target.children[0].getAttribute("src"));
}

publishingWrap.addEventListener("click", openModal);
designWrap.addEventListener("click", openModal);
