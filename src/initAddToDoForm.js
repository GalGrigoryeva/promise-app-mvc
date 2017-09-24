import {createIdGenerator} from "./createIdGenerator";
import {ToDoModel} from "./ToDoModel";

export function initAddToDoForm (toDoStorage) {
  let maxId = 0;
  for (let toDoId in toDoStorage.toDoMap) {
    maxId = Math.max(maxId, toDoId);
  }

  const generateId = createIdGenerator(maxId + 1);
  const addToDoForm = document.getElementById("addToDoForm");

  addToDoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let toDoText = document.getElementById("toDo").value;
    if (toDoText.length < 3) {
      return;
    }

    let toDo = new ToDoModel(generateId(), toDoText, false);
    toDoStorage.addToDo(toDo);

    document.getElementById("toDo").value = "";
  });
}