let yOffset = 0;
let currentScene = 0;

const sceneInfo = [
  // section-0
  {
    heightNum: 2,
    scrollHeight: 0,
    objs: {
      container: document.querySelector("#scroll-section-0"),
      messageA: document.querySelector("#scroll-section-0 .main-message.a"),
      messageB: document.querySelector("#scroll-section-0 .main-message.b"),
      messageC: document.querySelector("#scroll-section-0 .main-message.c"),
      messageD: document.querySelector("#scroll-section-0 .main-message.d"),
    },
  },
  // section-1
  {
    heightNum: 2,
    scrollHeight: 0,
    objs: {
      container: document.querySelector("#scroll-section-1"),
    },
  },
  // section-2
  {
    heightNum: 2,
    scrollHeight: 0,
    objs: {
      container: document.querySelector("#scroll-section-2"),
    },
  },
  // section-3
  {
    heightNum: 2,
    scrollHeight: 0,
    objs: {
      container: document.querySelector("#scroll-section-3"),
    },
  },
];

const playAnimation = () => {
  switch (currentScene) {
    case 0:
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
  let preScrollHeight = 0;
  for (let i = 0; i < currentScene; i++) {
    preScrollHeight += sceneInfo[i].scrollHeight;
  }
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

const setLayout = () => {
  for (let i = 0; i < sceneInfo.length; i++) {
    sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
    sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
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
  setLayout();
};
init();
