import React from "react";
import { TodoContext } from '../Component/TodoContext';
import '../Styles/TodoForm.css'

function TodoForm() {
  const [newTodo, setNewTodoValue] = React.useState('');
  
  const {
    todos, // lista
    totalTodos, // tamaño de la lista.
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const alreadyExist = () => { // ya existe el todo
   // return !(newTodos.indexOf(newTodo) === todo );
    
    for (let i = 0; i < totalTodos; i++) { // marca error
      if (todos[i].text === newTodo) {
        return true;
      } 
    } 
    return false;
  }
  

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };
    
  const onSubmit = (event) => {
    event.preventDefault(); // cuando el formulario se envie 
    
    if (newTodo.length <= 0 || alreadyExist()) { // error
      alert("No puedes agregar TODOs vacíos o duplicados.");
    } else {
      addTodo(newTodo);
      setOpenModal(false); // es para cerrar la ventana de agregar tarea.
    }   
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea 
        value={newTodo}
        onChange={onChange}
        placeholder="Escribe una nueva tarea" // 
      />
      <div className="TodoForm-buttonContainer">
        <button 
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button-add"  
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };