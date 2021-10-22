const modalElem = document.querySelector("#modal");
const closeButton = document.querySelector(".modal-close-button");
const htmlButton = modalElem.querySelector(".my-html");
const githubButton = modalElem.querySelector(".my-github");
const publishingWrap = document.querySelector(".publishing-wrap");
const designWrap = document.querySelector(".design-wrap");
const navButton = document.querySelector("label[for=nav-button]");
let startWidth;
const modalArray = [
  {
    gitlink: "https://github.com/qkrwogud96/qkrwogud96.github.io/tree/main/portfolio/file/shoppingmall_39etc",
    htmllink: "https://qkrwogud96.github.io/portfolio/file/shoppingmall_39etc/index.html",
    img: "39etc",
    type: "publishing",
    video: "images/39etc.mp4",
    title: "누구나 쉽게 사용 가능한 쇼핑몰",
    summary: "반응형으로 동작하는 쇼핑몰을 퍼블리싱 하였습니다.",
    point: [
      "반응형 웹(PC/Tablet/Mobile) 구현",
      "LocalStorage를 활용하여 이미지와 텍스트 저장",
      "외부 API를 이용해 이미지 fade효과",
    ],
    library: ["HTML5", "CSS3", "Media query", "Javascript", "Swiper API"],
  },
  {
    link: "https://github.com/qkrwogud96/qkrwogud96.github.io/tree/main/portfolio/file/gird_animalshelter",
    htmllink: "https://qkrwogud96.github.io/portfolio/file/gird_animalshelter/index.html",
    img: "animalshelter",
    type: "publishing",
    video: "images/animalshelter.mp4",
    title: "한 번쯤은 클릭해보고 싶은 3D효과",
    summary: "gird와 3d를 활용한 동물보호소 웹페이지를 구현했습니다.",
    point: [
      "CSS3 grid 활용",
      "CSS3 transform 3D를 이용한 이미지 rotate",
      "Vanilla Js toggle을 활용하여 HTML classList toggle",
    ],
    library: ["HTML5", "CSS3", "Javascript"],
  },
  {
    link: "https://github.com/qkrwogud96/qkrwogud96.github.io/tree/main/portfolio/file/interactive_web",
    htmllink: "https://qkrwogud96.github.io/portfolio/file/interactive_web/index.html",
    img: "interactive",
    type: "publishing",
    video: "images/interactive.mp4",
    title: "어디서든 열어볼 수 있는 쇼핑몰",
    summary: "반응형으로 동작하는 쇼핑몰 홈페이지를 퍼블리싱 했습니다.",
    point: ["반응형 웹(PC/Tablet/Mobile) 구현", "fontawesome 활용한 sns 구현"],
    library: ["HTML5", "CSS3", "Media query"],
  },
  {
    link: "https://github.com/qkrwogud96/qkrwogud96.github.io/tree/main/portfolio/file/scroll_mac",
    htmllink: "https://qkrwogud96.github.io/portfolio/file/scroll_mac/index.html",
    img: "mac",
    type: "publishing",
    video: "images/mac.mp4",
    title: "스크롤에 눈이 즐거운 사이트",
    summary:
      "Apple의 MacBook Pro를 소개하는 반응형 스크롤 웹사이트를 클론코딩 하였습니다.",
    point: [
      "반응형 웹(PC/Mobile) 구현",
      "Vanilla Js scroll을 활용한 canvas 이미지 출력",
    ],
    library: ["HTML5", "CSS3", "Media query", "Javascript"],
  },
  {
    link: "https://github.com/qkrwogud96/qkrwogud96.github.io/tree/main/portfolio/file/google_momentum",
    htmllink: "https://qkrwogud96.github.io/portfolio/file/google_momentum/index.html",
    img: "momentum",
    type: "publishing",
    video: "images/momentum.mp4",
    title: "하루의 일과를 작성하는 확장 프로그램",
    summary: "구글 확장 프로그램 Momentum을 클론코딩 하였습니다.",
    point: [
      "LocalStorage를 활용한 메모지,시간 구현",
      "외부 API로 문의사항 구현,날씨,지역 구현",
    ],
    library: [
      "HTML5",
      "CSS3",
      "Javascript",
      "OpenWeatherMap API",
      "Emailjs API",
    ],
  },
  {
    link: "https://github.com/qkrwogud96/qkrwogud96.github.io/tree/main/portfolio/file/css_vogue",
    htmllink: "https://qkrwogud96.github.io/portfolio/file/css_vogue/index.html",
    img: "vogue",
    type: "publishing",
    video: "images/vogue.mp4",
    title: "브랜드를 소개하는 태블릿 광고",
    summary: "Vogue의 웹사이트를 소개하는 영상을 구현했습니다.",
    point: ["fontawesome 활용한 sns 구현", "flex layout을 활용한 구현"],
    library: ["HTML5", "CSS3"],
  },
  //design
  {
    img: "calexo",
    type: "design",
    show: "images/calexo.jpg",
    title: "주류회사 메인 홈페이지",
  },
  {
    img: "leaflet",
    type: "design",
    show: "images/leaflet.jpg",
    title: "헬스장 광고지",
  },
  {
    img: "wedding",
    type: "design",
    show: "images/wedding.jpg",
    title: "결혼식 초대장",
  },
  {
    img: "hanatour",
    type: "design",
    show: "images/hanatour.jpg",
    title: "여행사 메인 홈페이지",
  },
];

function findImgIndex(value) {
  for (let i = 0; i < modalArray.length; i++) {
    if (modalArray[i].img == value) {
      return i;
    }
  }
}
//design
function setModalImage(index) {
  const modalImg = modalElem.querySelector("img");
  const modalVideo = modalElem.querySelector("video");
  if (modalImg.getAttribute("src") != null) {
    modalImg.setAttribute("src", "");
  }
  if (modalVideo.getAttribute("src") != null) {
    modalVideo.setAttribute("src", "");
  }
  const SRC = modalArray[index].show;
  modalImg.setAttribute("src", SRC, "alt", modalArray[index].img);
}

//publishing
function setModalVideo(index) {
  const modalImg = modalElem.querySelector("img");
  const modalVideo = modalElem.querySelector("video");
  if (modalImg.getAttribute("src") != null) {
    modalImg.setAttribute("src", "");
  }
  if (modalVideo.getAttribute("src") != null) {
    modalVideo.setAttribute("src", "");
  }

  const SRC = modalArray[index].video;
  modalVideo.setAttribute("src", SRC);
}
function setModalTitle(index) {
  const title = document.querySelector(".modal-popup");
  const firstContents = document.querySelector(".modal-img");
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
  //modal 세팅 준비
  const Detail = modalElem.querySelector(".modal-detail");
  const video = modalElem.querySelector("video");
  Detail.style.display = "none";
  video.style.display = "none";
  htmlButton.style.display = "none";
  githubButton.style.display = "none";

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
  // modalElem.style.width = `calc(100% - ${scrollBarWidth}px)`;
  navButton.classList.add("modal-on");

  //img index 찾기
  const target = e.target.children[0].getAttribute("alt");
  const INDEX = findImgIndex(target);

  //modal detail 설정
  const targetType = modalArray[INDEX].type;
  if (targetType == "publishing") {
    Detail.style.display = "block";
    video.style.display = "block";
    htmlButton.style.display = "inline-block";
    githubButton.style.display = "inline-block";
    setModalVideo(INDEX);
    setModalTitle(INDEX);
    setModalSummary(INDEX);
    setModalPoint(INDEX);
    setModalLibrary(INDEX);
  } else {
    setModalImage(INDEX);
    setModalTitle(INDEX);
  }

  //click button event
  htmlButton.addEventListener("click", () => {
    window.open(modalArray[INDEX].htmllink);
  });
  githubButton.addEventListener("click", () => {
    window.open(modalArray[INDEX].gitlink);
  });
}
function closeModal() {
  modalElem.style.display = "none";
  document.body.classList.remove("modal-open");
  document.body.style.paddingRight = 0;

  navButton.classList.remove("modal-on");
}

const modalEvent = () => {
  publishingWrap.addEventListener("click", openModal);
  designWrap.addEventListener("click", openModal);
  closeButton.addEventListener("click", closeModal);
};

modalEvent();
