import {EventEmitter} from "events";

export class ToDoModel extends EventEmitter {
  _toDoText;
  _completed;
  _id = 0;

  constructor (id, defaultToDoText, defaultCompleted) {
    super();

    this._toDoText = defaultToDoText;
    this._completed = defaultCompleted;
    this._id = id;
  }

  get toDoText() {
    return this._toDoText;
  }

  set toDoText(value) {
    if (this._toDoText === value) { // Эта проверка нужна, чтобы код не закольцевался
      return;
    }

    this._toDoText = value;

    this.emit("change", this);
  }

  get completed() {
    return this._completed;
  }

  set completed(value) {
    if (this._completed === value) { // Эта проверка нужна, чтобы код не закольцевался
      return;
    }

    this._completed = value;

    this.emit("change", this);
  }


  get id() {
    return this._id;
  }
}
