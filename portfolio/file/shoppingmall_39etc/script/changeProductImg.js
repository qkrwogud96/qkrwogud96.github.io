const product = document.querySelectorAll(".product");

let curIdx = 1;
let nextIdx = 2;
let IMG_SRC = [];

// // 각 div마다 src 읽기

product.forEach((element) => {
  const image = element.children[0].getAttribute("src");
  IMG_SRC.push(image);
});
let isStop = false;

const mouseEvent = (e) => {
  isStop = false;
  const playInterval = setInterval(function () {
    if (!isStop) {
      let targetSrc = e.target.getAttribute("src");

      targetSrc = targetSrc.replace(curIdx, nextIdx);
      e.target.setAttribute("src", targetSrc);
      if (nextIdx < 3) {
        curIdx = nextIdx;
        nextIdx++;
      } else {
        curIdx = nextIdx;
        nextIdx = 1;
      }
    } else {
      clearInterval(playInterval);
    }
  }, 500);
};

//이미지 변경 함수
const stopInterval = () => {
  isStop = true;
};
IMG_SRC.forEach((item, idx) => {
  const image = product[idx].children[0];
  image.addEventListener("mouseover", mouseEvent);
  image.addEventListener("mouseout", stopInterval);
});
