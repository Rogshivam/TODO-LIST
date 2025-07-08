let todoList = [
  {
    item: 'make chai',
    dueDate: '2/2/2024',
    dueTime: '12:12:12',
  },
];

displayItem();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let timeElement = document.querySelector('#todo-time');

  let todoItem = inputElement.value.trim();
  let todoDate = dateElement.value;
  let todoTime = timeElement.value;

  if (!todoItem || !todoDate || !todoTime) return;

  todoList.push({ item: todoItem, dueDate: todoDate, dueTime: todoTime });

  inputElement.value = '';
  dateElement.value = '';
  timeElement.value = '';
  displayItem();
}

function displayItem() {
  const container = document.querySelector('.todo-container');
  container.innerHTML = ''; // Clear current contents

  todoList.forEach((todo, index) => {
    const row = document.createElement('div');
    row.className = 'todo-row';

    const itemSpan = document.createElement('span');
    itemSpan.textContent = todo.item;

    const dateSpan = document.createElement('span');
    dateSpan.textContent = todo.dueDate;

    const timeSpan = document.createElement('span');
    timeSpan.textContent = todo.dueTime;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'btn-delete';
    deleteBtn.addEventListener('click', () => {
      todoList.splice(index, 1);
      displayItem();
    });

    row.appendChild(itemSpan);
    row.appendChild(dateSpan);
    row.appendChild(timeSpan);
    row.appendChild(deleteBtn);

    container.appendChild(row);
  });
}
