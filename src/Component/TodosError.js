import React from "react";
import { FiAlertCircle } from "react-icons/fi";

function TodosError () {
  return (
    <div className="ContainerError"> 
      <span className="Icon-Error"> 
        
      <FiAlertCircle size="15em" color="red" />

      </span>

     <p className="ErrorText">Desespérate, hubo un error!!!</p>;
        
    </div>
    
  )  
}

export { TodosError };