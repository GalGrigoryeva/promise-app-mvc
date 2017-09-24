import {ToDoModel} from "./ToDoModel";

export function syncToDoStorageAndLocalStorage(toDoStorage) {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let toDoObject = JSON.parse(localStorage.getItem(key));
    let toDoModel = new ToDoModel(toDoObject.id, toDoObject.toDoText, toDoObject.completed);
    toDoStorage.addToDo(toDoModel);
  }

  toDoStorage.addListener("todo_added", addToDoToLocalStorage);
  toDoStorage.addListener("todo_removed", removeToDoFromLocalStorage);
}

function addToDoToLocalStorage(toDoModel) {
  saveToDoModel(toDoModel);
  toDoModel.addListener("change", saveToDoModel);
}

function removeToDoFromLocalStorage(toDoModel) {
  localStorage.removeItem(toDoModel.id);
  toDoModel.removeListener("change", saveToDoModel);
}

function saveToDoModel(toDoModel) {
  let toDoObject = {
    id: toDoModel.id,
    toDoText: toDoModel.toDoText,
    completed: toDoModel.completed
  };

  let toDoJson = JSON.stringify(toDoObject);
  localStorage.setItem(toDoObject.id, toDoJson);
}