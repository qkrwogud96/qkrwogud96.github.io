const todoFormElem = document.querySelector("#to-do-form");
const todoInputElem = todoFormElem.querySelector("input");
const todoUl = document.querySelector("#to-do-ul");

// 개수 최대 처리 및 저장된 값 불러오기 해야함
const LISTVALUE_KEY = "listvalue";
const USERNAME_KEY = "username";
let TODOS = [];
let curList = 0;

const todosStrorage = () => {
  const todosStr = JSON.stringify(TODOS);
  localStorage.setItem(LISTVALUE_KEY, todosStr);
};
const deleteBtnEvent = (e) => {
  const target = e.target.parentElement;
  TODOS = TODOS.filter((item) => {
    return item.id != target.id;
  });
  todosStrorage();
  target.remove();
};
const saveLocal = (value) => {
  const todosForm = {
    id: curList + 1,
    value: value,
  };
  curList++;
  if (TODOS.length > 9) {
    const lastList = document.querySelector("#to-do-ul li:last-child");
    lastList.remove();
    TODOS.pop();
  }
  TODOS.push(todosForm);
  todosStrorage();
};
const addTodoList = (value) => {
  saveLocal(value);
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

  btn.addEventListener("click", deleteBtnEvent);
};
const todoSubmitEvent = (event) => {
  event.preventDefault();
  const value = todoInputElem.value;
  const username = localStorage.getItem(USERNAME_KEY);
  if (username) {
    addTodoList(value);
  }
  else{
    alert("이름을 입력하세요.");
  }
};
const loadTodos = () => {
  //localStorage value값 읽기
  //TODOS에 저장하기
  //li에 추가하기
  const loadValue = localStorage.getItem(LISTVALUE_KEY);
  if (loadValue) {
    const strValue = JSON.parse(loadValue);
    for (let i = 0; i < strValue.length; i++) {
      addTodoList(strValue[i].value);
    }
  }
};
loadTodos();
todoFormElem.addEventListener("submit", todoSubmitEvent);
