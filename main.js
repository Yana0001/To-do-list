const submitBtn = document.querySelector(".list__btn");
const taskInput = document.querySelector("#task-input");
const tasksList = document.querySelector("#tasksList");
const emptyList = document.querySelector("#emptyList");

// add task
submitBtn.addEventListener("click", addTask);

// delete task
tasksList.addEventListener("click", deleteTask);

// done task
tasksList.addEventListener("click", doneTask);

// functions
function addTask(event) {
  event.preventDefault();

  const taskText = taskInput.value;
  console.log(taskText);

  const taskHTML = `
              <li
                class="list-group-item d-flex justify-content-between task-item"
              >
                <span class="task-title task-title--done">${taskText}</span>
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
  if (event.target.dataset.action === "delete") {
    const parentNode = event.target.closest(".list-group-item");
    parentNode.remove();
  }
}

function doneTask(event) {
  if (event.target.dataset.action === "done") {
    const parentNode = event.target.closest(".list-group-item");
    const taskTitle = parentNode.querySelector(".task-title");
    taskTitle.classList.toggle("task-title--done");
    console.log(taskTitle);
  }
}
