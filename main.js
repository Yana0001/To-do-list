const submitBtn = document.querySelector(".list__btn");
const taskInput = document.querySelector("#task-input");
const tasksList = document.querySelector("#tasksList");
const emptyList = document.querySelector("#emptyList");

let tasks = [];

submitBtn.addEventListener("click", addTask);

tasksList.addEventListener("click", deleteTask);

tasksList.addEventListener("click", doneTask);

function addTask(event) {
  event.preventDefault();

  const taskText = taskInput.value;

  const newTask = {
    id: Date.now(),
    text: taskText,
    done: false,
  };

  tasks.push(newTask);

  saveToLocalStorage();

  const cssClass = newTask.done ? "task-title task-title--done" : "task-title";

  const taskHTML = `
              <li id="${newTask.id}"
                class="list-group-item d-flex justify-content-between task-item"
              >
                <span class="${cssClass}">${newTask.text}</span>
                <div class="task-item__buttons">
                  <button type="button" data-action="delete" class="btn-action">
                    <svg class="btn-trash" width="20" height="20">
                      <use href="./img/symbol-defs.svg#trash"></use>
                    </svg>
                  </button>
                  <button type="button" data-action="done" class="btn-action">
                    <svg class="btn-check" width="20" height="20">
                      <use href="./img/symbol-defs.svg#check-circle"></use>
                    </svg>
                  </button>
                </div>
              </li>`;

  tasksList.insertAdjacentHTML("beforeend", taskHTML);

  taskInput.value = "";
  taskInput.focus();
}

function deleteTask(event) {
  if (event.target.dataset.action !== "delete") return;
  const parentNode = event.target.closest(".list-group-item");

  const id = Number(parentNode.id);

  const index = tasks.findIndex((task) => task.id === id);

  tasks.splice(index, 1);

  saveToLocalStorage();

  parentNode.remove();
}

function doneTask(event) {
  if (event.target.dataset.action !== "done") return;
  const parentNode = event.target.closest(".list-group-item");
  const id = Number(parentNode.id);
  const task = tasks.find((task) => task.id === id);

  task.done = !task.done;

  saveToLocalStorage();

  const taskTitle = parentNode.querySelector(".task-title");
  taskTitle.classList.toggle("task-title--done");
  console.log(taskTitle);
}

function saveToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
