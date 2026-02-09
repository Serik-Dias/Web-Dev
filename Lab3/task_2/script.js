const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const text = taskInput.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.className = "task-item";

    const left = document.createElement("div");
    left.className = "task-left";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = text;

    checkbox.addEventListener("change", function () {
        span.classList.toggle("done");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "🗑";

    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    left.appendChild(checkbox);
    left.appendChild(span);

    li.appendChild(left);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    taskInput.value = "";
}
