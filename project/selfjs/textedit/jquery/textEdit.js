$(function () {
  const buttons = $("button");
  const showtext = $("span");
  const textsize = $("p");
  const inputboxs = $("input");
  const checkedcolor = $(".check_color div");
 
  let savecolor = "white";
  let savevalue = "color";
  let cursize = 16;
  let check = false;

  function fontsize() {
    showtext.css("fontSize", cursize);
    textsize.text(cursize + "px");
  }
  function fontweight() {
    if (check) {
      showtext.css("fontWeight", "normal");
      check = false;
    } else {
      showtext.css("fontWeight", "bolder");
      check = true;
    }
  }
  function fontstyle() {
    if (check) {
      showtext.css("fontStyle", "normal");
      check = false;
    } else {
      showtext.css("fontStyle", "italic");
      check = true;
    }
  }
  function textdecoration() {
    if (check) {
      showtext.css("textDecoration", "none");
      check = false;
    } else {
      showtext.css("textDecoration", "underline");
      check = true;
    }
  }
  function activecolor(e) {
    const active = $(".active");
    active.toggleClass("active");
    $(e).toggleClass("active");
  }
  function changevalue() {
    showtext.css(savevalue, savecolor);
  }
  checkedcolor.on("click", function () {
    activecolor(this);
    const color = $(this).attr("color");
    savecolor = color;
  });
  inputboxs.on("click", function () {
    const inputvalue = $(this).val();
    if (inputvalue == "배경") {
      savevalue = "backgroundColor";
    } else {
      savevalue = "color";
    }
  });
  buttons.on("click", function () {
    const btnvalue = $(this).attr("val");
    switch (btnvalue) {
      case "dec":
        cursize--;
        fontsize();
        break;
      case "inc":
        cursize++;
        fontsize();
        break;
      case "change":
        changevalue();
        break;
      case "obli":
        fontstyle();
        break;
      case "bold":
        fontweight();
        break;
      case "under":
        textdecoration();
        break;
      default:
        cursize = 16;
        fontsize();
        break;
    }
  });
});
