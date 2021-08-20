(function () {
  const gnbList = document.querySelectorAll(".gnb>ul>li");
  const itemObj = document.querySelector("#container");
  const mainMenu = document.querySelector("#main-menu");
  const btnMenu = document.querySelector(".btn-menu");
  const sns = document.querySelectorAll("#container>div>.sns a i");
  //main-menu click event
  gnbList.forEach((liElem, idx) => {
    liElem.addEventListener("click", function () {
      clickUserButton("1");
      itemOn(idx);
    });
  });
  btnMenu.addEventListener("click", function () {
    if (mainMenu.classList.contains("on")) {
      clickUserButton("0");
    }
  });
  const clickUserButton = (strDisplay) => {
    //container
    itemObj.classList.toggle("on");
    //bar
    mainMenu.classList.toggle("on");
    //menu button
    btnMenu.style.opacity = strDisplay;
  };
  const itemOn = (idx) => {
    const item = itemObj.children[idx];
    const active = itemObj.querySelector("#container > div.on");
    active.classList.remove("on");
    item.classList.add("on");
  };
})();
