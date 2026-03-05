const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const prioritySelect = document.getElementById("priority");
const taskList = document.getElementById("taskList");

let currentFilter = "all";

function render() {
  const tasks = TaskManager.getFiltered(currentFilter);
  UI.render(tasks);
}

addTaskBtn.addEventListener("click", () => {
  if (!taskInput.value.trim()) return;
  TaskManager.addTask(taskInput.value, prioritySelect.value);
  taskInput.value = "";
  render();
});

// 🔥 EVENT DELEGATION (A MÁGICA ACONTECE AQUI)
taskList.addEventListener("click", event => {
  const action = event.target.dataset.action;
  if (!action) return;

  const taskItem = event.target.closest("li");
  const taskId = Number(taskItem.dataset.id);

  if (action === "toggle") {
    TaskManager.toggleTask(taskId);
  }

  if (action === "delete") {
    if (confirm("Deseja realmente excluir esta tarefa?")) {
      TaskManager.deleteTask(taskId);
    }
  }

  if (action === "edit") {
    const newTitle = prompt("Editar tarefa:");
    if (newTitle) {
      TaskManager.updateTask(taskId, newTitle);
    }
  }

  render();
});

document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentFilter = btn.dataset.filter;
    render();
  });
});

render();