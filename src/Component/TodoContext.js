import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext(); // crear contextos que son las herramientas para compartir por todos los componenetes de la app.

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []); // se puede guardar 
      
  const [searchValue, setSearchValue] =  React.useState(''); // se crea un estado, cambia estado...
      
  const [openModal, setOpenModal] = React.useState(false);// el modal "pantalla gris" no debe estar abierto por eso se envia false

  const completedTodos = todos.filter(todo => todo.complete === true).length;  // contar los todos completados.
    
  const totalTodos = todos.length; // contar el total de los todos.
    
  let searchedTodos = [];  // array
   
  
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  }else {
    searchedTodos = todos.filter(todo => {
      
      const todoText = todo.text.toLowerCase(); // variable, convertir todo a minusculas
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const addTodo = (text) => { // around function
    
    const newTodos = [...todos]; // nueva lista de todos, enviar los cambios a nuestro estado. // ... los 3 puntos se llaman sprint operation.
    
    newTodos.push({
      completed: false,
      text,  
    }); // entramos a la lista de todos
    saveTodos(newTodos);//
    
  };

 
  // Para marcar como completado un todo.
  const completeTodo = (text) => { // around function
    
    const todoIndex = todos.findIndex(todo => todo.text === text);// buscar index, buscar todo que tenga el mismo texto q el usuario busca.
    
    const newTodos = [...todos]; // nueva lista de todos, enviar los cambios a nuestro estado. // ... los 3 puntos se llaman sprint operation.
       
    newTodos[todoIndex].complete = true; // entramos a la lista de todos
    saveTodos(newTodos);//
  }; // cuando se ejecute esta funcion se va a re rendereizar para que reciba la nueva lista de todos.
      
  
  /* Para eliminar un todo. */
  const deleteTodo  = (text) => {
  const todoIndex = todos.findIndex(todo => todo.text === text);
  const newTodos = [...todos];
  newTodos.splice(todoIndex, 1); // "cortar o eliminar una rebanada de pan"
  saveTodos(newTodos);// actualizar la lista de todos.
  }; 
    
    
  return (
    <TodoContext.Provider value={{ // variables globales de la app, lo que se necesita la app.
      loading,
      error,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      todos
    }}>

    {props.children}
    </TodoContext.Provider>
  );
}

//<TodoContext.Consumer></TodoContext.Consumer>

export { TodoContext, TodoProvider }