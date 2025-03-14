document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('new-task');
  const addTaskButton = document.getElementById('add-task');
  const taskList = document.getElementById('task-list');

  // Function to create a new task item
  function createTaskItem(taskContent) {
    const li = document.createElement('li');

    // Task content
    const span = document.createElement('span');
    span.textContent = taskContent;
    li.appendChild(span);

    // Edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = () => {
      const newTaskContent = prompt('Edit your task:', taskContent);
      if (newTaskContent) {
        span.textContent = newTaskContent;
      }
    };
    li.appendChild(editButton);

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.onclick = () => {
      taskList.removeChild(li);
    };
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  }

  // Add task on button click
  addTaskButton.addEventListener('click', () => {
    const taskContent = taskInput.value.trim();
    if (taskContent) {
      createTaskItem(taskContent);
      taskInput.value = ''; // Clear input after adding
    } else {
      alert('Please enter a task!');
    }
  });

  // Add task on pressing "Enter" key
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTaskButton.click();
    }
  });
});
