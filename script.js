// script.js
function addTodo() {
    var todoInput = document.getElementById('todoInput');
    var todoText = todoInput.value.trim();
    
    if (todoText === '') {
        alert("Please enter a task!");
        return;
    }

    var todoList = document.getElementById('todoList');
    
    // Create a new list item
    var li = document.createElement('li');
    li.innerHTML = `
        ${todoText} 
        <button class="delete-btn" onclick="deleteTodo(this)">Delete</button>
    `;

    // Append the new task to the list
    todoList.appendChild(li);

    // Clear the input field after adding the task
    todoInput.value = '';
}

function deleteTodo(button) {
    var li = button.parentElement;
    li.remove();
}
