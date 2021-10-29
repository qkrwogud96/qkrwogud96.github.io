$(function () {
  const buttons = $("button");
  const displayElement = $("input");
  let displayContent = "";
    function updateDisplay(){
        displayElement.val(displayContent);
    }
  function clear() {
    displayContent = "";
    updateDisplay();

    // let str = displayContent.substring(0, displayContent.length-1);
    // displayContent = str;
    // updateDisplay();
}
  function addDisplay(text) {
    displayContent += text;
    updateDisplay();
}
function calc(){
    let value = eval( displayContent );
    displayContent = value;
    updateDisplay();
}
  buttons.on("click", function () {
    const type = $(this).attr("sign");
    switch (type) {
      case "ac":
          clear();
        break;
      case "eq":
          calc();
        break;
      case "oper":
      default:
        addDisplay($(this).text());
        break;
    }
  });
});
