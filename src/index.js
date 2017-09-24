import "./index.css";
import {ToDoStorage} from "./ToDoStorage";

import {createToDoStorageViewLogic}  from "./createToDoStorageViewLogic"

import {syncToDoStorageAndLocalStorage} from "./syncToDoStorageAndLocalStorage";

import {initAddToDoForm} from "./initAddToDoForm";

// создали туду сторадж
// повесили на него логику вью
// положить в туду стораж данные из локал сторадж
// посчитать startId для генератора id
// подключить форму

const toDoStorage = new ToDoStorage();

createToDoStorageViewLogic(toDoStorage);

syncToDoStorageAndLocalStorage(toDoStorage);

initAddToDoForm(toDoStorage);
