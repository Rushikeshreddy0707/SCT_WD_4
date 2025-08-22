const taskInput = document.getElementById("taskInput");
const taskDateTime = document.getElementById("taskDateTime");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  const dateTime = taskDateTime.value;

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");

  const taskContent = document.createElement("span");
  taskContent.innerText = taskText;

  const dateTimeSpan = document.createElement("div");
  dateTimeSpan.classList.add("datetime");
  dateTimeSpan.innerText = dateTime ? `⏰ ${new Date(dateTime).toLocaleString()}` : "";

  const actions = document.createElement("div");
  actions.classList.add("task-actions");

  const completeBtn = document.createElement("button");
  completeBtn.innerText = "✔";
  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const editBtn = document.createElement("button");
  editBtn.innerText = "✎";
  editBtn.addEventListener("click", () => {
    taskInput.value = taskContent.innerText;
    taskDateTime.value = dateTime;
    taskList.removeChild(li);
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "🗑";
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(taskContent);
  li.appendChild(dateTimeSpan);
  li.appendChild(actions);

  taskList.appendChild(li);

  taskInput.value = "";
  taskDateTime.value = "";
}
