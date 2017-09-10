import "./index.css";
//import {ObserverValue} from "./ObserverValue";
import {ToDoStorage} from "./ToDoStorage";
import {ToDoModel} from "./ToDoModel";

// let observerValue = new ObserverValue(false); // Создали модель
//
//
//
// let checkbox = document.getElementById("checkbox"); // Получили ссылку на отображение
//
// checkbox.addEventListener("change", () => {
//   observerValue.value = checkbox.checked; // Update модели в соответствии с изменением отображения
// });
//
//
// function updateCheckbox () {
//   checkbox.checked = observerValue.value; // Меняет отображение в соответствии с моделью
// }
// updateCheckbox();
//
// observerValue.addListener("change", updateCheckbox);
//
//
//
//
//
// observerValue.value = true;

// Click on checkbox -> 11th line -> 21st line -> 17th line (если нет проверки в сеттере, то -> 11th line -> ...)


let toDoStorage = new ToDoStorage();



let addToDoForm = document.getElementById("addToDoForm");

addToDoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let toDoText = document.getElementById("toDo").value;
  if (toDoText.length < 3) {
    return;
  }

  let toDo = new ToDoModel(toDoText, false);
  toDoStorage.addToDo(toDo);

  document.getElementById("toDo").value = "";
});



toDoStorage.addListener("todo_added", (todoModel) => {
  let toDoList = document.getElementById("toDoList");

  var html = `
    <div class="col-lg-12">
      <div class="input-group">
        <span class="input-group-addon">
          <input type="checkbox" ${todoModel.completed}>
        </span>
        <input class="form-control" id="toDoText" type="text" value="${todoModel.toDoText}">
        <span class="input-group-btn">
          <button class="btn btn-secondary delete" type="button"></button>
        </span>
      </div>
    </div>
  `;

  var li = document.createElement("li");
  li.innerHTML = html;
  li.setAttribute("id", todoModel.id);
  toDoList.appendChild(li);
});


// let toDo = new ToDoModel("Some test text", false);
//
// let toDoCheckbox = document.getElementById("toDoCheckbox");
// let toDoText = document.getElementById("toDoText");
//
// toDoCheckbox.addEventListener("change", () => {
//   toDo.completed = toDoCheckbox.checked;
// });
//
// toDoText.addEventListener("change", () => {
//   toDo.toDoText = toDoText.value;
// });
//
// function updateToDoView () {
//   toDoCheckbox.checked = toDo.completed;
//   toDoText.value = toDo.toDoText;
// }
// updateToDoView();
//
//
// toDo.addListener("change", updateToDoView);