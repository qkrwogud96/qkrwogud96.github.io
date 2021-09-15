const radioBtn = document.querySelectorAll("input[type=radio]");
const chooseInput = document.querySelectorAll('.find');
const checkRadioValue = (event) => {
  const value = event.target.value;
  const setInput = document.querySelector(`input.find[id=${value}]`);
    chooseInput.forEach(obj =>{
        obj.value = '';
        obj.style.display = 'none';
    });
  setInput.style.display = 'block';
};
radioBtn.forEach((obj) => {
  obj.addEventListener("click", checkRadioValue);
});


//email하고 phone input값 맞추기.
//email하고 phone input값 공백일때 나오는 PTAG 수정하기.