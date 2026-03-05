const TaskManager = {
  tasks: Storage.getTasks(),

  addTask(title, priority) {
    this.tasks.push({
      id: Date.now(),
      title,
      priority,
      completed: false,
      createdAt: new Date().toLocaleDateString()
    });
    Storage.saveTasks(this.tasks);
  },

  updateTask(id, newTitle) {
    this.tasks = this.tasks.map(task =>
      task.id === id ? { ...task, title: newTitle } : task
    );
    Storage.saveTasks(this.tasks);
  },

  toggleTask(id) {
    this.tasks = this.tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    Storage.saveTasks(this.tasks);
  },

  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    Storage.saveTasks(this.tasks);
  },

  getFiltered(filter) {
    if (filter === "completed") return this.tasks.filter(t => t.completed);
    if (filter === "pending") return this.tasks.filter(t => !t.completed);
    return this.tasks;
  }
};