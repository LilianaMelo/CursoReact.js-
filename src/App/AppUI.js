import React from "react";
import { TodoContext } from '../Component/TodoContext';
import { TodoCounter } from '../Component/TodoCounter';
import { TodoSearch } from "../Component/TodoSearch";
import { TodoList } from "../Component/TodoList";
import { TodoItem } from "../Component/TodoItem";
import { TodoForm } from "../Component/TodoForm";
import { CreateTodoButton } from "../Component/CreateTodoButton";
import { Modal } from "../Component/Modal";
import { TodosLoading } from "../Component/TodosLoading";
import { TodosError } from "../Component/TodosError";
import { EmptyTodos } from "../Component/EmptyTodos";


function AppUI(){
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal, // actualizador
  } = React.useContext(TodoContext);

  return(
    <React.Fragment> 
      <TodoCounter />
      <TodoSearch /> 
      
      <TodoList>
        {error && <TodosError />}
        {loading && new Array(6).fill(1).map((todos, totalTodos) => <TodosLoading key={totalTodos} />)}

        {(!loading && !searchedTodos.length) && <EmptyTodos />}
    
        {searchedTodos.map(todo => (
          
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.complete}  
            onComplete={() => completeTodo(todo.text) } //around function, se llama la funcion completetodo y se envia el texto de ese todo especifico()
            onDelete={() => deleteTodo(todo.text)}
            
          />
        ))}
      </TodoList> 

      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>     
      )} 
    
    <CreateTodoButton 
      setOpenModal={setOpenModal}
    />  
    </React.Fragment>
  ); 
}

export { AppUI };