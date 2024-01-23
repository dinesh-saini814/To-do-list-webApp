const todoList = [
  {
    name: "wash cloths",
    dueDate: "2023-09-20",
  },
  { name: "complete js", dueDate: "2023-09-16" },
];

renderTodoList();

function renderTodoList() {
  let todoListHtml = "";

  todoList.forEach((todoObj, index) => {
    // const name = todoObj.name;
    // const DueDate = todoObj.DueDate
    const { name, dueDate } = todoObj;

    const html = `
      <div class="to-do-work">${name} </div>
      <div> ${dueDate} </div>
      <button class="delete-button js-delete-button">Delete</button>
      
    `;

    todoListHtml += html;
  });

  document.querySelector(".js-todoList").innerHTML = todoListHtml;

  document
    .querySelectorAll(".js-delete-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

// using event listner for button

document.querySelector(".js-add-button").addEventListener("click", () => {
  AddTodo();
});

function AddTodo() {
  const inputEle = document.querySelector(".js-nameInput");
  const name = inputEle.value;

  const dateinputEle = document.querySelector(".js-due-date");
  const dueDate = dateinputEle.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate,
    name,
    dueDate,
  });

  console.log(todoList);

  inputEle.value = "";

  renderTodoList();
}