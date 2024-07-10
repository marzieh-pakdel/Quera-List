const openAddTodo = document.querySelector(".app__add-btn");
const addTodoBox = document.querySelector(".add-todo");
const priorityTagsBtn = document.getElementById("tag-btn");
const taskPriorityBox = document.getElementById("task-priority");
const tagBtnIcon = document.getElementById("tag-btn-icon");
const taskTitleInput = document.getElementById("task-title");
const taskDescriptionInput = document.getElementById("task-description");
const addTodoBtn = document.getElementById("add-todo-btn");
const bgImage = document.querySelector(".empty-list");
const todosContainer = document.querySelector(".todos-container");
const priorities = document.getElementsByName("priority");
// const todoCardPriorityParent = document.querySelector(
//   ".todos-container__task__details__explanations__top"
// );
const taskCounter = document.getElementById("task-counter")
const stylesheet = document.styleSheets[0];

openAddTodo.addEventListener("click", openAddTodoBox);

function openAddTodoBox() {
  this.style.display = "none";
  addTodoBox.style.display = "block";
}

if (todosContainer.childElementCount) {
  bgImage.style.display = "none";
}

priorityTagsBtn.addEventListener("click", openPriorityTagsBox);

function openPriorityTagsBox() {
  taskPriorityBox.classList.toggle("priorityBoxToggle");
  tagBtnIcon.classList.toggle("tagToggle");
}

taskTitleInput.addEventListener("keyup", enableAddTaskBtn);
taskDescriptionInput.addEventListener("keyup", enableAddTaskBtn);

function enableAddTaskBtn() {
  if (taskTitleInput.value.length || taskDescriptionInput.value.length) {
    addTodoBtn.disabled = false;
    addTodoBtn.style.opacity = "100%";
    addTodoBtn.style.cursor = "pointer";
  } else {
    addTodoBtn.disabled = true;
    addTodoBtn.style.opacity = "60%";
    addTodoBtn.style.cursor = "default";
  }
}

addTodoBtn.addEventListener("click", addTodoToList);

const inProgressToDos = JSON.parse(
  localStorage.getItem("inProgressToDos") || []
);

function addTodoToList() {
  let selectedPriority;
  for (let i = 0; i < priorities.length; i++) {
    if (priorities[i].checked) {
      selectedPriority = priorities[i].value;
    }
  }

  const inProgressToDo = {
    title: taskTitleInput.value,
    description: taskDescriptionInput.value,
    priority: selectedPriority,
  };

  inProgressToDos.unshift(inProgressToDo);

  // const inProgressToDosCache = JSON.parse(
  //   localStorage.getItem("inProgressToDos") || []
  // );

  // inProgressToDos.push(inProgressToDosCache);

  // inProgressToDosCache.forEach((toDo) => {
  //   inProgressToDos.push(toDo);
  // })

  localStorage.setItem("inProgressToDos", JSON.stringify(inProgressToDos));
}

document.addEventListener("DOMContentLoaded", inProgressToDoCardHandler);

function inProgressToDoCardHandler() {
  const inProgressToDoList = JSON.parse(
    localStorage.getItem("inProgressToDos")
  );

  inProgressToDoList.forEach((todo) => {
    let todoPriority;

    for (i = 0; i < priorities.length; i++) {
      if (todo.priority == priorities[i].value) {
        selectedPriority = priorities[i].parentElement;
        todoPriority = selectedPriority.cloneNode(true);
      }
    }

    const todoCard = document.createElement("div");
    todoCard.innerHTML = `<div class="todos-container__task__details">
              <div class="todos-container__task__details__check-input">
                <input type="checkbox" name="" id="" />
              </div>
              <div class="todos-container__task__details__explanations">
                <div class="todos-container__task__details__explanations__top">
                  <h3
                    class="todos-container__task__details__explanations__top__title"
                  >
                    ${todo.title}
                  </h3>
                </div>
                <p
                  class="todos-container__task__details__explanations__description"
                >
                  ${todo.description}
                </p>
              </div>
            </div>
            <div class="todos-container__task__options">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="4"
                height="18"
                viewBox="0 0 4 18"
                fill="none"
              >
                <circle cx="2" cy="2" r="2" fill="#525252" />
                <circle cx="2" cy="9" r="2" fill="#525252" />
                <circle cx="2" cy="16" r="2" fill="#525252" />
              </svg>
            </div>`;

    todoCard.classList.add("todos-container__task");

    todoCard.children[0].children[1].children[0].append(todoPriority);

    // const beforeToDoCardStyles = window.getComputedStyle(todoCard, ":before");
    // console.log(beforeToDoCardStyles);

    for (let i = 0; i < stylesheet.cssRules.length; i++) {
      let rule = stylesheet.cssRules[i];
      if (rule.selectorText === '.todos-container__task::before') {
        switch (todo.priority) {
          case "high-priority":
            rule.style.backgroundColor = 'blue';
            break;
          case "medium-priority":
            rule.style.backgroundColor = 'blue';
            break;
          case "low-priority":
            rule.style.backgroundColor = 'blue';
            break;
        }
      }
  }

    todosContainer.append(todoCard);
  });
}


taskCounter.innerHTML = inProgressToDos.length