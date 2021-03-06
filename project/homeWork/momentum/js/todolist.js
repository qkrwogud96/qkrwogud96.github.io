const todoFormElem = document.querySelector("#to-do-form");
const todoInputElem = todoFormElem.querySelector("input");
const todoUl = document.querySelector("#to-do-ul");
const TODOLIST_KEY = "todos";
let TODOS = [];
let curIdx = 1;
// [{id:length, value:Input.value},{id:length + 1, value:Input.value}] >> length로 할때 id값이 중복이 된다. 해결 : 전역변수 curIdx 선언
// id : Date.now;
const deleteBtnEvent = (e) => {
  const target = e.target.parentElement;
  target.remove();
  TODOS = TODOS.filter((item) => {
    return item.id !== parseInt(target.id);
  });
  saveTodoStorage();
};
const saveTodoStorage = () => {
  const strTodo = JSON.stringify(TODOS);
  localStorage.setItem(TODOLIST_KEY, strTodo);
};
const saveLocal = (value) => {
  const newObj = {
    id: curIdx,
    value: value,
  };
  TODOS.push(newObj);
  saveTodoStorage();
  curIdx++;
};
const addTodoList = (value) => {
  const li = document.createElement("li");
  li.id = curIdx;
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
