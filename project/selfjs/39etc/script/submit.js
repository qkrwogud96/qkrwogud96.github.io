const formElem = document.querySelector("form");
const inputs = formElem.querySelectorAll("input");
const submitBtn = formElem.querySelector("button[type=submit]");

const PTAG = document.createElement("p");
PTAG.innerText = "공백란을 입력하세요.";

const checkNullInput = () => {
  for (let element of inputs) {
    const value = element.value;
    if (value == "") {
      element.after(PTAG);
      break;
    }
  }
};
//공백 없으면 마지막 PTAG 삭제하기.
const submitEvent = (event) => {
  event.preventDefault();
  // alert('준비중입니다.');
};

formElem.addEventListener("submit", submitEvent);
submitBtn.addEventListener("click", checkNullInput);
