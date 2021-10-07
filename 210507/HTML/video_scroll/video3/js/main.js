let yOffset = 0;
let currentScene = 0;
let preScrollHeight = 0;

const sceneInfo = [
  // section-0
  {
    //애니메이션 처리 하는 영역
    type : 'sticky',
    //영역의 높이 조정
    heightNum: 5,
    //영역의 높이 값 저장
    scrollHeight: 0,
    //영역 및 보여져야 할 메세지들
    objs: {
      container: document.querySelector("#scroll-section-0"),
      messageA: document.querySelector("#scroll-section-0 .main-message.a"),
      messageB: document.querySelector("#scroll-section-0 .main-message.b"),
      messageC: document.querySelector("#scroll-section-0 .main-message.c"),
      messageD: document.querySelector("#scroll-section-0 .main-message.d"),
    },
    //메세지들 in_out 처리
    values: {
      // 객체 : [시작 명암 , 끝 명암, { 임의의 비율 설정 ( 실제 비율x ) }],

      messageA_opactiy_in: [0, 1, { start: 0.1, end: 0.2 }],
      messageA_opactiy_out: [1, 0, { start: 0.25, end: 0.3 }],
      messageB_opactiy_in: [0, 1, { start: 0.3, end: 0.4 }],
      messageB_opactiy_out: [1, 0, { start: 0.45, end: 0.5 }],
      messageC_opactiy_in: [0, 1, { start: 0.5, end: 0.6 }],
      messageC_opactiy_out: [1, 0, { start: 0.65, end: 0.7 }],
      messageD_opactiy_in: [0, 1, { start: 0.7, end: 0.8 }],
      messageD_opactiy_out: [1, 0, { start: 0.85, end: 0.9 }],
      // messageA_translateY_in: [0, -100, { start: 0.2, end: 0.3 }],
      // messageA_translateY_out: [0, -100, { start: 0.35, end: 0.4 }],
    },
  },
  // section-1
  {
    type : 'normal',
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector("#scroll-section-1"),
    },
  },
  // section-2
  {
    type : 'sticky',
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector("#scroll-section-2"),
    },
  },
  // section-3
  {
    type : 'sticky',
    heightNum: 5,
    scrollHeight: 0,
    objs: {
      container: document.querySelector("#scroll-section-3"),
    },
  },
];
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
      if (scrollRatio <= 0.22) {
        //메세지 명암 설정
        objs.messageA.style.opacity = calcValues(
          values.messageA_opactiy_in,
          currentYOffset
        );
        //메세지 올리기 설정
        // objs.messageA.style.transform = `translateY(${calcValues(
        //   values.messageA_translateY_in,
        //   currentYOffset
        // )}%)`;
      } else {
        objs.messageA.style.opacity = calcValues(
          values.messageA_opactiy_out,
          currentYOffset
        );
      }
      if (scrollRatio <= 0.42) {
        //메세지 명암 설정
        objs.messageB.style.opacity = calcValues(
          values.messageB_opactiy_in,
          currentYOffset
        );
        //메세지 올리기 설정
        // objs.messageA.style.transform = `translateY(${calcValues(
        //   values.messageA_translateY_in,
        //   currentYOffset
        // )}%)`;
      } else {
        objs.messageB.style.opacity = calcValues(
          values.messageB_opactiy_out,
          currentYOffset
        );
      }
      if (scrollRatio <= 0.62) {
        //메세지 명암 설정
        objs.messageC.style.opacity = calcValues(
          values.messageC_opactiy_in,
          currentYOffset
        );
        //메세지 올리기 설정
        // objs.messageA.style.transform = `translateY(${calcValues(
        //   values.messageA_translateY_in,
        //   currentYOffset
        // )}%)`;
      } else {
        objs.messageC.style.opacity = calcValues(
          values.messageC_opactiy_out,
          currentYOffset
        );
      }
      if (scrollRatio <= 0.85) {
        //메세지 명암 설정
        objs.messageD.style.opacity = calcValues(
          values.messageD_opactiy_in,
          currentYOffset
        );
        //메세지 올리기 설정
        // objs.messageA.style.transform = `translateY(${calcValues(
        //   values.messageA_translateY_in,
        //   currentYOffset
        // )}%)`;
      } else {
        objs.messageD.style.opacity = calcValues(
          values.messageD_opactiy_out,
          currentYOffset
        );
      }
      console.log("scene play - 0");
      break;
    case 1:
      console.log("scene play - 1");
      break;
    case 2:
      console.log("scene play - 2");
      break;
    case 3:
      console.log("scene play - 3");
      break;
  }
};

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
    if(sceneInfo[i].type == 'sticky'){
      sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
    }else if(sceneInfo[i].type == 'normal'){
        sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight;
        // sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
    }else{

    }
    // console.log(sceneInfo[i].scrollHeight);
  }
  //   console.log(sceneInfo);
};

const scrollEvent = () => {
  yOffset = window.pageYOffset;
  scrollLoop();
  // console.log(yOffset, sceneInfo[0].scrollHeight);
};

const init = () => {
  window.addEventListener("scroll", scrollEvent);
  window.addEventListener("load", setLayout);
};
init();
