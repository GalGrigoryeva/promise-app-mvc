import "./index.css";
import {ObserverValue} from "./ObserverValue";
import {EventDispatcher} from "./examples/EventDispatcher";

let observerValue = new ObserverValue(false); // Создали модель



let checkbox = document.getElementById("checkbox"); // Получили ссылку на отображение

checkbox.addEventListener("change", () => {
  observerValue.value = checkbox.checked; // Update модели в соответствии с изменением отображения
});


function updateCheckbox () {
  checkbox.checked = observerValue.value; // Меняет отображение в соответствии с моделью
}
updateCheckbox();

observerValue.addListener("change", updateCheckbox);


observerValue.value = true;

//       Click on checkbox -> 11th line -> 21st line -> 17th line (если нет проверки в сеттере, то -> 11th line -> ...)




function testFunc() {
  alert(123);
}

function testFunc2() {
  alert(321);
}

let foo = new EventDispatcher();
foo.addEventListener( "kokoko", testFunc );
foo.callbacks["kokoko"] = testFunc;
foo.addEventListener( "kokoko", testFunc2 );
foo.addEventListener( "ne_kokoko", testFunc );

foo.emit( "kokoko" );
foo.emit( "kokoko" );
foo.emit( "kokoko" );
foo.emit( "kokoko" );
foo.emit( "kokoko" );
foo.emit( "kokoko" );
foo.emit( "kokoko" );
foo.emit( "kokoko" );
foo.emit( "kokoko" );
foo.emit( "kokoko" );
foo.emit( "ne_kokoko" );


