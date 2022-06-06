class Task {
  constructor(name, completed) {
    this.name = name;
    this.completed = completed;
  }
}

// user interface class - contains all methods/fields for user interaction
class UI {
  constructor() {
    this.taskInput = document.getElementById("taskInput"); // input element for task name
    this.taskList = document.getElementById("taskList"); // table element for tasks
    this.sampleRow = document.getElementById("sampleRow"); // structure of task row (clone and edit values to append to taskList)
    this.tasks = JSON.parse(localStorage.getItem("tasks")); // list of tasks (stored as objects of class Task)
    if (this.tasks == undefined)
      this.tasks = [];
    this.sampleRow.remove();
    this.renderList();
  }

  // add task row to tasksList
  addRow() {
    let task = new Task(taskInput.value, false);
    for (let i = 0; i < this.tasks.length; i++) // check for duplicate task
      if (this.tasks[i].name == task.name)
        return;
    this.tasks.push(task);

    this.renderList();
  }

  // wipe taskList, re-add all tasks, add tasks to localStorage
  renderList() {
    this.taskList.innerHTML = "";

    for (let i = 0; i < this.tasks.length; i++) {
      let newRow = this.sampleRow.cloneNode(true);
      const taskName = newRow.children[0];
      const completedBtn = newRow.children[1].children[0];
      const deleteBtn = newRow.children[2].children[0];

      taskName.textContent = this.tasks[i].name; // set task name
      if (this.tasks[i].completed) completedBtn.checked = true; // create completed checkbox
      completedBtn.addEventListener("click", (action) => {
        this.tasks[i].completed = !this.tasks[i].completed;
        this.renderList();
      });
      deleteBtn.addEventListener("click", (action) => { // create delete button
        this.tasks = this.tasks.filter((t) => this.tasks[i] !== t);
        this.renderList();
      });

      this.taskList.appendChild(newRow);
    }
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}

// set up webpage
const userInterface = new UI();
const addTaskBtn = document.getElementById("addTask");
addTaskBtn.addEventListener("click", (action) => {
  action.preventDefault();
  userInterface.addRow();
});
