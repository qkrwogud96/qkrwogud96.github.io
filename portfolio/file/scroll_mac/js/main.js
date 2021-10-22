//현재 스크롤 위치를 저장할 변수
let yOffset = 0;
// 현재 보여지고있는 영역을 저장할 변수
let currentScene = 0;
// 지나간 스크롤 영역들 높이를 저장할 변수
let preScrollHeight = 0;

// 영역들 세팅 변수
const sceneInfo = [
  // section-0
  {
    //애니메이션 처리 하는 영역
    type: "sticky",
    //영역의 높이 조정
    heightNum: 5,
    //영역의 높이 값 저장
    scrollHeight: 0,
    objs: {
      container: document.querySelector("#scroll-section-0"),
      messageA: document.querySelector("#scroll-section-0 .main-message.a"),
      messageB: document.querySelector("#scroll-section-0 .main-message.b"),
      messageC: document.querySelector("#scroll-section-0 .main-message.c"),
      messageD: document.querySelector("#scroll-section-0 .main-message.d"),
      canvas: document.querySelector("#video-canvas-0"),
      context: document.querySelector("#video-canvas-0").getContext("2d"),
      videoImages: [],
    },
    values: {
      // 객체 : [시작 명암 , 끝 명암, { 임의의 비율 설정 ( 실제 비율x ) }],
      messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
      messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
      messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
      messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
      messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
      messageC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
      messageD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
      messageD_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],

      messageA_translateY_in: [50, 0, { start: 0.1, end: 0.2 }],
      messageA_translateY_out: [0, -50, { start: 0.25, end: 0.3 }],
      messageB_translateY_in: [50, 0, { start: 0.3, end: 0.4 }],
      messageB_translateY_out: [0, -50, { start: 0.45, end: 0.5 }],
      messageC_translateY_in: [50, 0, { start: 0.5, end: 0.6 }],
      messageC_translateY_out: [0, -50, { start: 0.65, end: 0.7 }],
      messageD_translateY_in: [50, 0, { start: 0.7, end: 0.8 }],
      messageD_translateY_out: [0, -50, { start: 0.85, end: 0.9 }],

      videoImagesCount: 117,
      imageSequence: [0, 116],
      image_opacity: [1, 0, { start: 0.92, end: 0.95 }],
    },
  },
  // section-1
  {
    //일반 영역
    type: "normal",
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector("#scroll-section-1"),
    },
  },
  // section-2
  {
    type: "sticky",
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector("#scroll-section-2"),
      mainMessage: document.querySelector("#scroll-section-2 .main-message"),
      descMessageA: document.querySelector("#scroll-section-2 .desc-message.a"),
      descMessageB: document.querySelector("#scroll-section-2 .desc-message.b"),
      canvas: document.querySelector("#video-canvas-2"),
      context: document.querySelector("#video-canvas-2").getContext("2d"),
      videoImages: [],
    },
    values: {
      mainMessage_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
      mainMessage_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
      descMessageA_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
      descMessageA_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
      descMessageB_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
      descMessageB_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],

      mainMessage_translateY_in: [50, 0, { start: 0.1, end: 0.2 }],
      mainMessage_translateY_out: [0, -50, { start: 0.25, end: 0.3 }],
      descMessageA_translateY_in: [50, 0, { start: 0.3, end: 0.4 }],
      descMessageA_translateY_out: [0, -50, { start: 0.45, end: 0.5 }],
      descMessageB_translateY_in: [50, 0, { start: 0.5, end: 0.6 }],
      descMessageB_translateY_out: [0, -50, { start: 0.65, end: 0.7 }],

      videoImagesCount: 117,
      imageSequence: [0, 116],
      image_opacity_in: [0, 1, { start: 0, end: 0.15 }],
      image_opacity_out: [1, 0, { start: 0.85, end: 1 }],
    },
  },

  // section-3
  {
    type: "sticky",
    heightNum: 1.3,
    scrollHeight: 0,
    objs: {
      container: document.querySelector("#scroll-section-3"),
    },
  },
];

//canvas 세팅
const setCanvasImages = () => {
  let imgElem;

  for (let i = 0; i < sceneInfo[0].values.videoImagesCount; i++) {
    imgElem = new Image();
    imgElem.src = `./images/${i}.jpg`;
    sceneInfo[0].objs.videoImages.push(imgElem);
    sceneInfo[2].objs.videoImages.push(imgElem);
  }
};

//영역 비율 세팅
const calcValues = (values, currentYOffset) => {
  //보여지고있는 영역의 높이
  const scrollHeight = sceneInfo[currentScene].scrollHeight;
  //보여지고있는 영역의 높이 비율( 0 ~ 1)
  const scrollRatio = currentYOffset / scrollHeight;
  // console.log(scrollRatio);
  let rv;
  if (values.length === 3) {
    // 영역 내 실제 시작과 끝의 비율
    const partScrollStart = values[2].start * scrollHeight;
    const partScrollEnd = values[2].end * scrollHeight;
    //실제 처리되는 스크롤의 비율
    const partScrollHeight = partScrollEnd - partScrollStart;
    //영역 내
    if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) {
      const temp = (currentYOffset - partScrollStart) / partScrollHeight;
      rv = temp * (values[1] - values[0]) + values[0];
      // console.log(rv);
    }
    //영역 전
    else if (currentYOffset < partScrollStart) {
      rv = values[0];
    }
    //영역 후
    else if (currentYOffset > partScrollEnd) {
      rv = values[1];
    }
  } else if (values.length === 2) {
    rv = scrollRatio * (values[1] - values[0]) + values[0];
  }
  return rv;
};

//영역 구간마다 호출
const playAnimation = () => {
  const values = sceneInfo[currentScene].values;
  //영역의 YOffset 값
  const currentYOffset = yOffset - preScrollHeight;
  const objs = sceneInfo[currentScene].objs;
  const scrollHeight = sceneInfo[currentScene].scrollHeight;
  //영역의 총 비율(0~1)
  const scrollRatio = currentYOffset / scrollHeight;

  switch (currentScene) {
    case 0:
      //이미지 애니메이션
      objs.context.drawImage(
        objs.videoImages[
          Math.round(calcValues(values.imageSequence, currentYOffset))
        ],
        0,
        0
      );
      //이미지 사라지기
      objs.canvas.style.opacity = calcValues(
        values.image_opacity,
        currentYOffset
      );
      if (scrollRatio <= 0.22) {
        //메세지 명암 설정
        objs.messageA.style.opacity = calcValues(
          values.messageA_opacity_in,
          currentYOffset
        );

        //메세지 올리기 설정
        objs.messageA.style.transform = `translate3d(0, ${calcValues(
          values.messageA_translateY_in,
          currentYOffset
        )}%,0)`;
      } else {
        objs.messageA.style.opacity = calcValues(
          values.messageA_opacity_out,
          currentYOffset
        );

        //메세지 내리기 설정
        objs.messageA.style.transform = `translate3d(0, ${calcValues(
          values.messageA_translateY_out,
          currentYOffset
        )}%,0)`;
      }
      if (scrollRatio <= 0.42) {
        //메세지 명암 설정
        objs.messageB.style.opacity = calcValues(
          values.messageB_opacity_in,
          currentYOffset
        );

        //메세지 올리기 설정
        objs.messageB.style.transform = `translate3d(0, ${calcValues(
          values.messageB_translateY_in,
          currentYOffset
        )}%,0)`;
      } else {
        objs.messageB.style.opacity = calcValues(
          values.messageB_opacity_out,
          currentYOffset
        );

        //메세지 내리기 설정
        objs.messageB.style.transform = `translate3d(0, ${calcValues(
          values.messageB_translateY_out,
          currentYOffset
        )}%,0)`;
      }
      if (scrollRatio <= 0.62) {
        //메세지 명암 설정
        objs.messageC.style.opacity = calcValues(
          values.messageC_opacity_in,
          currentYOffset
        );

        //메세지 올리기 설정
        objs.messageC.style.transform = `translate3d(0, ${calcValues(
          values.messageC_translateY_in,
          currentYOffset
        )}%,0)`;
      } else {
        objs.messageC.style.opacity = calcValues(
          values.messageC_opacity_out,
          currentYOffset
        );

        //메세지 내리기 설정
        objs.messageC.style.transform = `translate3d(0, ${calcValues(
          values.messageC_translateY_out,
          currentYOffset
        )}%,0)`;
      }
      if (scrollRatio <= 0.85) {
        //메세지 명암 설정
        objs.messageD.style.opacity = calcValues(
          values.messageD_opacity_in,
          currentYOffset
        );

        //메세지 올리기 설정
        objs.messageD.style.transform = `translate3d(0, ${calcValues(
          values.messageD_translateY_in,
          currentYOffset
        )}%,0)`;
      } else {
        objs.messageD.style.opacity = calcValues(
          values.messageD_opacity_out,
          currentYOffset
        );

        //메세지 내리기 설정
        objs.messageD.style.transform = `translate3d(0, ${calcValues(
          values.messageD_translateY_out,
          currentYOffset
        )}%,0)`;
      }
      // console.log("scene play - 0");
      break;
    case 1:
      // console.log("scene play - 1");
      break;
    case 2:
      //이미지 애니메이션
      objs.context.drawImage(
        objs.videoImages[
          Math.round(calcValues(values.imageSequence, currentYOffset))
        ],
        0,
        0
      );
      if (scrollRatio < 0.22) {
        //이미지 보여지기
        objs.canvas.style.opacity = calcValues(
          values.image_opacity_in,
          currentYOffset
        );
      } else if (scrollRatio > 0.77) {
        // 이미지 사라지기
        objs.canvas.style.opacity = calcValues(
          values.image_opacity_out,
          currentYOffset
        );
      }

      if (scrollRatio <= 0.22) {
        //메세지 명암 설정
        objs.mainMessage.style.opacity = calcValues(
          values.mainMessage_opacity_in,
          currentYOffset
        );

        //메세지 올리기 설정
        objs.mainMessage.style.transform = `translate3d(0, ${calcValues(
          values.mainMessage_translateY_in,
          currentYOffset
        )}%,0)`;
      } else {
        objs.mainMessage.style.opacity = calcValues(
          values.mainMessage_opacity_out,
          currentYOffset
        );
        //메세지 내리기 설정
        objs.mainMessage.style.transform = `translate3d(0, ${calcValues(
          values.mainMessage_translateY_out,
          currentYOffset
        )}%,0)`;
      }
      if (scrollRatio <= 0.44) {
        //메세지 명암 설정
        objs.descMessageA.style.opacity = calcValues(
          values.descMessageA_opacity_in,
          currentYOffset
        );

        //메세지 올리기 설정
        objs.descMessageA.style.transform = `translate3d(0, ${calcValues(
          values.descMessageA_translateY_in,
          currentYOffset
        )}%,0)`;
      } else {
        objs.descMessageA.style.opacity = calcValues(
          values.descMessageA_opacity_out,
          currentYOffset
        );
        //메세지 내리기 설정
        objs.descMessageA.style.transform = `translate3d(0, ${calcValues(
          values.descMessageA_translateY_out,
          currentYOffset
        )}%,0)`;
      }
      if (scrollRatio <= 0.66) {
        //메세지 명암 설정
        objs.descMessageB.style.opacity = calcValues(
          values.descMessageB_opacity_in,
          currentYOffset
        );

        //메세지 올리기 설정
        objs.descMessageB.style.transform = `translate3d(0, ${calcValues(
          values.descMessageB_translateY_in,
          currentYOffset
        )}%,0)`;
      } else {
        objs.descMessageB.style.opacity = calcValues(
          values.descMessageB_opacity_out,
          currentYOffset
        );
        //메세지 내리기 설정
        objs.descMessageB.style.transform = `translate3d(0, ${calcValues(
          values.descMessageB_translateY_out,
          currentYOffset
        )}%,0)`;
      }
      // console.log("scene play - 2");
      break;
    case 3:
      // console.log("scene play - 3");
      break;
  }
};

//스크롤 영역 세팅
const scrollLoop = () => {
  preScrollHeight = 0;
  //보여져야할 영역의 전 구간 높이들 저장
  for (let i = 0; i < currentScene; i++) {
    preScrollHeight += sceneInfo[i].scrollHeight;
  }
  //바뀌는 순간의 영역을 저장
  if (yOffset > preScrollHeight + sceneInfo[currentScene].scrollHeight) {
    currentScene++;
  }
  if (yOffset < preScrollHeight) {
    currentScene--;
  }
  // console.log('currentScene >>' + currentScene);
  document.body.setAttribute("id", `show-scene-${currentScene}`);
  playAnimation();
};

//load될 때 영역의 높이 설정하기
const setLayout = () => {
  for (let i = 0; i < sceneInfo.length; i++) {
    if (sceneInfo[i].type == "sticky") {
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
    } else if (sceneInfo[i].type === "normal") {
      console.log(
        sceneInfo[i].objs.container.offsetHeight,
        window.innerHeight * 0.5
      );

      sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight;
    }
    sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
  }
  // console.log(sceneInfo);

  // 새로고침했을때 currentScene 설정하기
  yOffset = window.pageYOffset;
  let totalHeight = 0;

  for (let i = 0; i < sceneInfo.length; i++) {
    totalHeight += sceneInfo[i].scrollHeight;
    if (totalHeight >= yOffset) {
      currentScene = i;
      break;
    }
  }
  document.body.setAttribute("id", `show-scene-${currentScene}`);

  //canvas scale 설정
  // 100vh / 설정한 canvas 높이값;
  let heightRatio = window.innerHeight / 1080;
  sceneInfo[0].objs.canvas.style.transform = `translate(-50%,-50%) scale(${heightRatio})`;
  sceneInfo[2].objs.canvas.style.transform = `translate(-50%,-50%) scale(${heightRatio})`;
};

//스크롤 이벤트
const scrollEvent = () => {
  yOffset = window.pageYOffset;
  scrollLoop();
};

const init = () => {
  //캔버스 이미지 세팅
  setCanvasImages();

  window.addEventListener("scroll", scrollEvent);
  window.addEventListener("load", () => {
    setLayout();
    sceneInfo[0].objs.context.drawImage(sceneInfo[0].objs.videoImages[0], 0, 0);
    // sceneInfo[2].objs.context.drawImage(sceneInfo[2].objs.videoImages[0], 0, 0);
  });
  window.addEventListener("resize", () => {
    window.location.reload();
  });
};
init();
