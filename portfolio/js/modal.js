const button = document.querySelector(".modal-close-button");
const modalElem = document.querySelector("#modal");
const publishingWrap = document.querySelector(".publishing-wrap");
const designWrap = document.querySelector(".design-wrap");
const navButton = document.querySelector("label[for=nav-button]");
let startWidth;
const modalArray = [
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
  { img: "wedding", video: "" },
  {
    img: "hanatour",
    video: "",
  },
];

function findImgIndex(value) {
  for (let i = 0; i < modalArray.length; i++) {
    if (modalArray[i].img == value) {
      return i;
    }
  }
}
function setModalTitle(index) {
  const title = document.querySelector(".modal-detail");
  const firstContents = document.querySelector(".contents");
  //초기화
  if (title.querySelector("h1") != null) {
    title.removeChild(title.querySelector("h1"));
  }

  const h1 = document.createElement("h1");
  h1.innerText = modalArray[index].title;
  title.insertBefore(h1, firstContents);
}
function setModalSummary(index) {
  const summary = document.querySelector(".summary");
  const li = document.createElement("li");

  //초기화
  while (summary.querySelector("li") != null) {
    summary.removeChild(summary.querySelector("li"));
  }

  li.innerHTML = modalArray[index].summary;
  summary.appendChild(li);
}
function setModalPoint(index) {
  const point = document.querySelector(".point");

  //초기화
  while (point.querySelector("li") != null) {
    point.removeChild(point.querySelector("li"));
  }
  for (let i = 0; i < modalArray[index].point.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = modalArray[index].point[i];
    point.appendChild(li);
  }
}
function setModalLibrary(index) {
  const library = document.querySelector(".library");

  //초기화
  while (library.querySelector("li") != null) {
    library.removeChild(library.querySelector("li"));
  }
  for (let i = 0; i < modalArray[index].library.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = modalArray[index].library[i];
    library.appendChild(li);
  }
}
function openModal(e) {
  //초기 width값
  startWidth = document.body.clientWidth;
  document.body.classList.add("modal-open");
  modalElem.style.display = "block";
  //modal 오픈 후 width값
  const nowWidth = document.body.clientWidth;
  //스크롤바 너비
  const scrollBarWidth = nowWidth - startWidth;
  //body width값 변경 막기
  document.body.style.paddingRight = scrollBarWidth + "px";
  modalElem.style.width = `calc(100% - ${scrollBarWidth}px)`;
  navButton.classList.add("modal-on");

  //img index 찾기
  const target = e.target.children[0].getAttribute("alt");
  const INDEX = findImgIndex(target);

  //modal detail 설정
  setModalTitle(INDEX);
  setModalSummary(INDEX);
  setModalPoint(INDEX);
  setModalLibrary(INDEX);
}

function closeModal() {
  modalElem.style.display = "none";
  document.body.classList.remove("modal-open");
  document.body.style.paddingRight = 0;

  navButton.classList.remove("modal-on");
}

const modalEvent = () => {
  button.addEventListener("click", closeModal);
  publishingWrap.addEventListener("click", openModal);
  designWrap.addEventListener("click", openModal);
};

modalEvent();
