const taskList = document.getElementById("taskList");
const counter = document.getElementById("counter");

const UI = {
  render(tasks) {
    taskList.innerHTML = "";

    tasks.forEach(task => {
      const li = document.createElement("li");
      li.className = `${task.completed ? "completed" : ""} ${task.priority}`;
      li.dataset.id = task.id;

      li.innerHTML = `
        <div>
          <strong>${task.title}</strong><br>
          <small>${task.createdAt} • Prioridade: ${task.priority}</small>
        </div>
        <div class="actions">
          <button data-action="edit">✏️</button>
          <button data-action="toggle">✔</button>
          <button data-action="delete">🗑</button>
        </div>
      `;

      taskList.appendChild(li);
    });

    counter.innerText = `${tasks.length} tarefa(s)`;
  }
};