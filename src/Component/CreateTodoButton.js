import React from 'react';
import '../Styles/CreateTodoButton.css'

function CreateTodoButton(props) {
  const onClickButton = () => { // arroy function
    props.setOpenModal(prevState => !prevState); // around funcion actualiza el estado si es false la pasa a true y viseversa, para que abra y cierra la ventana gris.
  };
  
  
  return (
    <button     
      className='CreateTodoButton'
      onClick={onClickButton} // función
    >+</button> 
  );
}

export { CreateTodoButton };