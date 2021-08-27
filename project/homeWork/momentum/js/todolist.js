const todoFormElem = document.querySelector("#to-do-form");
const todoInputElem = todoFormElem.querySelector("input");
const todoUl = document.querySelector("#to-do-ul");

const deleteBtnEvent = (e) => {
    const target = e.target.parentElement;
    target.remove();    
};
const addTodoList = () => {
  const value = todoInputElem.value;
  todoInputElem.value = "";
  const li = document.createElement("li");
  const btn = document.createElement("button");
  const span = document.createElement("span");
  span.innerText = value;
  btn.innerText = "❌";
//   li.append(btn, span);
  li.appendChild(btn);
  li.appendChild(span);
  todoUl.appendChild(li);

  btn.addEventListener('click', deleteBtnEvent);
};
const todoSubmitEvent = (event) => {
  event.preventDefault();
  addTodoList();
};
todoFormElem.addEventListener("submit", todoSubmitEvent);
