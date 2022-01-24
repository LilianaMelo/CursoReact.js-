import React from "react";
import '../Styles/TodoSearch.css'
import { TodoContext } from "./TodoContext";

function TodoSearch() {

  const {searchValue, setSearchValue} = React.useContext(TodoContext);
    
  const onSearchValueChange = (event) => { // escuchar los cambios al valor del input de la busqueda. devuelve el valor del input, lo que usuario ingreso.
  console.log(event.target.value);
        setSearchValue(event.target.value);
  };

  return ( 
    <input 
      className="TodoSearch" // 
      placeholder="Buscar tarea"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };