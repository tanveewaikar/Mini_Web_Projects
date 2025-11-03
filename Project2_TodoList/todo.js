// Get elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addbtn");
const taskList = document.getElementById("taskList");

// Load tasks from local storage when page loads
window.onload = function() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => createTask(task.text, task.completed));
};

// Function to create a new task
function createTask(taskText, completed = false) {
  if (taskText.trim() === "") return;

  // Create <li> element
  const li = document.createElement("li");
  li.textContent = taskText;

  // If completed, add class
  if (completed) li.classList.add("completed");

  // Toggle completion on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    saveTasks();
  });

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete");

  // Delete task on click
  deleteBtn.addEventListener("click", () => {
    li.remove();
    saveTasks();
  });

  // Append everything
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  saveTasks();
}

// Save tasks to local storage
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push({
      text: li.firstChild.textContent,
      completed: li.classList.contains("completed")
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add task on button click
addBtn.addEventListener("click", () => {
  createTask(taskInput.value);
  taskInput.value = "";
});

// Add task on Enter key
taskInput.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    createTask(taskInput.value);
    taskInput.value = "";
  }
});
