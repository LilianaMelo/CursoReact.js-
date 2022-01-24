import React from 'react';
import '../Styles/TodoCounter.css';
import { TodoContext } from './TodoContext';


function TodoCounter() { // se reciben las propiedades
    const {totalTodos, completedTodos} = React.useContext(TodoContext );

    return (
        //<title className='TodoCounter1'>Tus tareas</title>, //
        <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

export { TodoCounter };