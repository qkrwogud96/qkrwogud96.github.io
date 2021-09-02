const todoFormElem = document.querySelector("#to-do-form");
const todoInputElem = todoFormElem.querySelector("input");
const todoUl = document.querySelector("#to-do-ul");
const TODOLIST_KEY = "todos";
let TODOS = [];
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
const saveLocal = (id, value) => {
  const newObj = {
    'id': id,
    value: value,
  };
  TODOS.push(newObj);
  saveTodoStorage();
};
const addTodoList = (id, value) => {
  const li = document.createElement("li");
  li.id = id;
  const btn = document.createElement("button");
  const span = document.createElement("span");

  todoInputElem.value = "";
  span.innerText = value;
  btn.innerText = "❌";
  li.appendChild(btn);
  li.appendChild(span);
  todoUl.appendChild(li);
  saveLocal(id, value);

  btn.addEventListener("click", deleteBtnEvent);
};
const todoSubmitEvent = (event) => {
  event.preventDefault();
  const value = todoInputElem.value;
  addTodoList(Date.now(), value);
};
const loadTodoStorage = () => {
  const loadTodos = localStorage.getItem(TODOLIST_KEY);
  if (loadTodos) {
    const objTodos = JSON.parse(loadTodos);
    objTodos.forEach((item) => {
      addTodoList(item.id, item.value);
    });
  }
};
loadTodoStorage();
todoFormElem.addEventListener("submit", todoSubmitEvent);
