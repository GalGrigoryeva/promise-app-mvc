import {EventEmitter} from "events";

export class ToDoStorage extends EventEmitter {
  toDoMap = {};

  addToDo = (toDoModel) => {
    this.toDoMap[toDoModel.id] = toDoModel;
    this.emit("todo_added", toDoModel);
  };

  removeToDoById = (toDoId) => {
    let toDoModel = this.getToDo(toDoId);

    delete this.toDoMap[toDoId]; // Удаление объекта из хранилища
    this.emit("todo_removed", toDoModel);
  };

  getToDo = (toDoId) => {
    return this.toDoMap[toDoId];
  };

  hasToDo = (toDoId) => {
    return this.toDoMap.hasOwnProperty(toDoId);
  };
}