window.onload = function() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks"));
  if (savedTasks) {
    savedTasks.forEach(task => {
      const taskList = document.getElementById("taskList");
      const li = document.createElement("li");
      li.innerHTML = `
        <span onclick="toggleComplete(event)" class="${task.completed ? 'completed' : ''}">${task.text}</span>
        <span class="delete" onclick="deleteTask(event)">Delete</span>
      `;
      taskList.appendChild(li);
    });
  }
};

function addTask() {
  const taskInput = document.getElementById("newTask");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleComplete(event)">${taskText}</span>
    <span class="delete" onclick="deleteTask(event)">Delete</span>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
  saveTasks();
}

function toggleComplete(event) {
  const task = event.target;
  task.classList.toggle("completed");
  saveTasks();
}

function deleteTask(event) {
  const taskItem = event.target.parentElement;
  taskItem.remove();
  saveTasks();
}

function saveTasks() {
  const taskItems = document.querySelectorAll("#taskList li");
  const tasks = [];

  taskItems.forEach(item => {
    const text = item.querySelector("span").textContent;
    const completed = item.querySelector("span").classList.contains("completed");
    tasks.push({ text, completed });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}
