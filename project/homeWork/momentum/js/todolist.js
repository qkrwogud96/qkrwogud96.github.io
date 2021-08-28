const todoFormElem = document.querySelector("#to-do-form");
const todoInputElem = todoFormElem.querySelector("input");
const todoUl = document.querySelector("#to-do-ul");

let curList = 0;

const deleteBtnEvent = (e) => {
  const target = e.target.parentElement;
  target.remove();
  curList--;
};
const saveLocal = () =>{
  const lastList = todoUl.lastChild;
  const Text = lastList.lastChild.innerText;
  window.localStorage.setItem(curList+1, Text);
  curList++;
}
const addTodoList = (value) => {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  const span = document.createElement("span");

  if(curList > 9){
    curList = 9;
    todoUl.lastChild.remove();
    localStorage.removeItem(10);
  }
  todoInputElem.value = '';
  span.innerText = value;
  btn.innerText = "❌";
  li.appendChild(btn);
  li.appendChild(span);
  todoUl.appendChild(li);
  saveLocal();
  btn.addEventListener('click', deleteBtnEvent);
};
const todoSubmitEvent = (event) => {
  event.preventDefault();
  const value = todoInputElem.value;
  addTodoList(value);
};
const checkey = () =>{
  if(localStorage.length){
    for(let i = 1; i <= localStorage.length; i++){
        const checkListValue = localStorage.getItem(i);
        addTodoList(checkListValue);
    }
  }
}
window.addEventListener('load', checkey);
todoFormElem.addEventListener("submit", todoSubmitEvent);
