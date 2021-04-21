const addItems = document.querySelector('.add-items');
const todoList = document.querySelector('.todo-list');
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();

  const text = (this.querySelector("[name=item]")).value;
  const item = {
    text,
    done: false
  };
  items.push(item);
  populateList(items, todoList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(todos = [], todosList) {
  todosList.innerHTML = todos.map((todo, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${todo.done ? 'checked' : ''}/>
        <label for="item${i}">${todo.text}</label>
      </li>
    `;
  }).join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, todoList);
}

addItems.addEventListener("submit", addItem);
todoList.addEventListener("click", toggleDone)

populateList(items, todoList)