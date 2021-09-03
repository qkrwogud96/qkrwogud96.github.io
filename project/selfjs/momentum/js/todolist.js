const todoFormElem = document.querySelector("#to-do-form");
const todoInputElem = todoFormElem.querySelector("input");
const todoUl = document.querySelector("#to-do-ul");


// 개수 최대 처리 및 저장된 값 불러오기 해야함
const LISTVALUE_KEY = "listvalue";
let TODOS = [];
let curList = 0;

const todosStrorage = () =>{
  const todosStr = JSON.stringify(TODOS);
  localStorage.setItem(LISTVALUE_KEY, todosStr);
}
const deleteBtnEvent = (e) => {
  const target = e.target.parentElement;
  TODOS = TODOS.filter((item) =>{
    return item.id != target.id
  });
  todosStrorage();  
  target.remove();  
};
const saveLocal = (value) => {
  const todosForm = {
    'id' : curList + 1,
    'value' : value
  };
  curList++;
  TODOS.push(todosForm);
  todosStrorage();  
};
const addTodoList = (value) => {
  const li = document.createElement("li");
  li.id = curList + 1;
  const btn = document.createElement("button");
  const span = document.createElement("span");

  todoInputElem.value = "";
  span.innerText = value;
  btn.innerText = "❌";
  li.appendChild(btn);
  li.appendChild(span);
  todoUl.appendChild(li);
  saveLocal(value);
  btn.addEventListener("click", deleteBtnEvent);
};
const todoSubmitEvent = (event) => {
  event.preventDefault();
  const value = todoInputElem.value;
  addTodoList(value);
};

todoFormElem.addEventListener("submit", todoSubmitEvent);
