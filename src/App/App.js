import React from "react";
//import '../App/App.js'
import { AppUI } from "./AppUI";
import { TodoProvider } from "../Component/TodoContext";

/*const defaultTodos = [
  { text: 'Tomar agua', complete: true },
  { text: 'Hacer ejercicio', complete: false },
  { text: 'Leer una hora', complete: false },
  { text: 'Sacar a pasear al perro', complete: true },
  { text: 'Tomar curso de intro a React', complete: false },
  { text: 'Llorar con la llorona', complete: false },
];*/


function App() { // componente empieza con mayus y son invisibles para html y visibles para react y se usa para renderizar internamente.
// persitir la informacion con la ultima version de la aplicacion
 
  /*const [patito, savePatito] = useLocalStorage('PATITO_V1', 'FERNANDO'); // se puede guardar*/   

  
  /*console.log("Render (antes del use effect.)")
  React.useEffect(() => {  // ejecuta el codigo antes de renderizar.
    console.log('use effect');
  }, [totalTodos]); // se escucha todas las veces que se hace un llamado o cambio en el estado.
  console.log("Render (despues del use effect.)") */

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
    
  );
}

export default App;
