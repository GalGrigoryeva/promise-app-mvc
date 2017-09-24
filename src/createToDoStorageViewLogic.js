import {showYesNoModal} from "./showYesNoModal";

const toDoList = document.getElementById("toDoList");

export function createToDoStorageViewLogic(toDoStorage) {
  toDoStorage.addListener("todo_added", createToDoViewLogic);
  toDoStorage.addListener("todo_removed", removeToDoView);

  function createToDoViewLogic(todoModel) {
    const html = `
      <div class="col-lg-12">
        <div class="input-group">
          <span class="input-group-addon">
            <input type="checkbox">
          </span>
          <input class="form-control" id="toDoText" type="text">
          <span class="input-group-btn">
            <button class="btn btn-secondary delete" type="button"></button>
          </span>
        </div>
      </div>
    `;

    let li = document.createElement("li");
    li.innerHTML = html;
    li.setAttribute("id", todoModel.id);
    toDoList.appendChild(li);

    let toDoCheckbox = li.querySelector("input");
    let toDoText = li.querySelector(".form-control");
    let deleteBtn = li.querySelector("button");

    toDoCheckbox.addEventListener("change", () => {
      todoModel.completed = toDoCheckbox.checked;
    });

    toDoText.addEventListener("change", () => {
      todoModel.toDoText = toDoText.value;
    });

    function updateToDoView () {
      toDoCheckbox.checked = todoModel.completed;
      toDoText.value = todoModel.toDoText;
    }
    updateToDoView();

    todoModel.addListener("change", updateToDoView);

    deleteBtn.addEventListener("click", function() {
      let modalText = "";
      if (toDoCheckbox.checked) {
        modalText = "Are you sure you want to delete this promise forever?";
      } else {
        modalText = "Are you sure you want to delete this unfulfilled promise?";
      }

      showYesNoModal(modalText, function() { toDoStorage.removeToDoById(todoModel.id); });
    });
  }

  function removeToDoView(toDoModel) {
    let toDo = document.getElementById(toDoModel.id);
    toDoList.removeChild(toDo);
  }
}

