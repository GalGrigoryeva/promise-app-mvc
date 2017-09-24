export class EventDispatcher {

  callbacks = {};

  addEventListener(eventName, callback) {
    this.callbacks[eventName] = callback;
  }

  emit(eventName) {
    if (this.callbacks[eventName]) {
      this.callbacks[eventName]();
    }
  }
}