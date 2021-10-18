const radioBtn = document.querySelectorAll("input[type=radio]");
const chooseInput = document.querySelector('.find');
const checkRadioValue = (event) => {
  const value = event.target.value;
  if(value == 'Phone'){
    chooseInput.setAttribute('type', 'text');
  }
  else{
    chooseInput.setAttribute('type', 'email');
  }
    chooseInput.setAttribute('placeholder', value);
};
radioBtn.forEach((obj) => {
  obj.addEventListener("click", checkRadioValue);
});
