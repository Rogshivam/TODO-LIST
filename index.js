let todoList = [
    {
        item: 'make chai',
        dueDate: '2/2/2024',
        dueTime: '12:12:12'
    },
    
];
displayItem();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let timeElement = document.querySelector('#todo-time');

    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    let todoTime = timeElement.value;

    todoList.push({item: todoItem, dueDate: todoDate, dueTime: todoTime});
    inputElement.value = '';
    dateElement.value = '';
    timeElement.value = '';
    displayItem();
}

function displayItem() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        let {item, dueDate, dueTime} = todoList[i];
        newHtml += `
            <span>${item}</span>
            <span>${dueDate}</span>
            <span>${dueTime}</span>
            <button class='btn-delete' onclick="todoList.splice(${i},1);
            displayItem();">Delete</button>
            
        `;
    }
    containerElement.innerHTML = newHtml;
}

