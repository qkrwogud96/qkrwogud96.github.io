const wrapElem = document.querySelector("#wrap");
const pageElem = document.querySelectorAll(".page");
const gnbElem = document.querySelector(".gnb");
const logoElem = document.querySelector(".logo");

let pageCount = 0;
let scrollPosition = 0;

function saveLocal(value) {
  window.localStorage.setItem("pageCount", value);
}

function wheelEvent(e) {
  e.preventDefault();
  // 아래로 스크롤
  if (e.deltaY >= 0) {
    pageCount++;
    if (pageCount >= pageElem.length - 1) {
      pageCount = pageElem.length - 1;
    }
  }
  // 위로 스크롤
  if (e.deltaY < 0) {
    pageCount--;
    if (pageCount <= 0) {
      pageCount = 0;
    }
  }
  //현재 pageCount 값 로컬 저장
  saveLocal(pageCount);
  //wheel 한 번에 이동하는 스크롤값 저장
  scrollPosition = pageCount * window.innerHeight;
  //scroll시 이동
  window.scrollTo({ left: 0, top: scrollPosition, behavior: "smooth" });
}

function ClickEvent(e) {
  const target = e.target;

  const pageIdArray = [];
  pageElem.forEach((obj) => pageIdArray.push("#" + obj.id));

  for (let i = 0; i < pageIdArray.length; i++) {
    if (pageIdArray[i] == target.getAttribute("href")) {
      pageCount = i;
      saveLocal(i);
    }
  }
}
function reloadEvent() {
  const localStr = JSON.parse(localStorage.getItem("pageCount"));
  pageCount = localStr;
  scrollPosition = pageCount * window.innerHeight;
  window.scrollTo({ left: 0, top: scrollPosition, behavior: "smooth" });
}
const init = () => {
  //초기 scroll값 맞추기
  //wheel 이벤트 처리
  wrapElem.addEventListener("wheel", wheelEvent, { passive: false });

  //gnb 클릭시 pageCount 값 맞춰주기
  gnbElem.addEventListener("click", ClickEvent);
  logoElem.addEventListener("click", ClickEvent);

  //새로고침 시 pageCount 값 가져오기
  window.addEventListener("load", reloadEvent);
};
init();
