import {EventEmitter} from "events";

export class ObserverValue extends EventEmitter {
  _value;

  constructor (defaultValue) {
    super();

    this._value = defaultValue;
  }


  get value() {
    return this._value;
  }

  set value(value) {
    if (this._value === value) { // Эта проверка нужна, чтобы код не закольцевался
      return;
    }

    this._value = value;

    this.emit("change");

    console.log(this._value);
  }
}