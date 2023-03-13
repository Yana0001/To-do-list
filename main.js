const submitBtn = document.querySelector(".list__btn");
const taskInput = document.querySelector("#task-input");
const tasksList = document.querySelector("#tasksList");

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const taskText = taskInput.value;
  console.log(taskText);

  const taskHTML = `<div class="input-wrapper">
              <input
                class="list__task__item-text"
                type="text"
                value='${taskText}'
              />
              <ul class="list__wrapper">
                <li class="li__item-first">
                  <button class="btn__f btn" type="button">
                    <svg class="list__task__svg-trash" width="20" height="20">
                      <use href="./img/symbol-defs.svg#trash"></use>
                    </svg>
                  </button>
                </li>
                <li class="li__item-second">
                  <button class="btn__s btn" type="button">
                    <svg class="list__task__svg-pencil" width="20" height="20">
                      <use href="./img/symbol-defs.svg#pencil"></use>
                    </svg>
                  </button>
                </li>
                <li class="li__item-third">
                  <button class="btn__th btn" type="button">
                    <svg class="list__task__svg-check" width="20" height="20">
                      <use href="./img/symbol-defs.svg#check-circle"></use>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>`;

  tasksList.insertAdjacentHTML("beforeend", taskHTML);

  taskInput.value = "";
  taskInput.focus();
});
