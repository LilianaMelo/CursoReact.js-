import React from "react";
import '../Styles/EmptyTodos.css';
import { GoIssueClosed } from "react-icons/go";


function EmptyTodos () {
  return (
    <div className={`EmptyTodos`}>

      <span className={`Icon-CreateTodo`}
      > 

      <GoIssueClosed size="15em" color="yellow" />
      </span>
      
      <p className="Createtodotext">¡¡Crea tu primer ToDo!!</p>

      
      
    </div>  
  );
}

export { EmptyTodos };