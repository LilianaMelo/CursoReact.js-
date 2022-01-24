import React from "react";

// Custom Hooks react: permite usar estados y otras caracteristicas de react sin escribir una clase. permite extraer la logica del componenten en funciones reutilizables.
function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false); // estado de carga api
    const [loading, setLoading] = React.useState(true); // estado de carga api
    const [item, setItem] = React.useState(initialValue);// se crea un estado para cambiar las variables. 
  
  
    React.useEffect(() => {
      setTimeout(() => {
  
        try {
          const localStorageItem = localStorage.getItem(itemName);// guardar info en el navegador usando persistencia de datos. // se usa a localStorage para traer algun elemento
  
        let parsedItem;  // variable de la nueva lista "array" de todos
  
        if (!localStorageItem) { // aqui se cambia a item, y trataen los todos.
          localStorage.setItem(itemName, JSON.stringify(initialValue));// JSON.stringify es para enviar informacion convertida en string y adentro un array 
          parsedItem = initialValue; // estado de la app, array vacio, cuando no hayan todos.
        }else {
          parsedItem = JSON.parse(localStorageItem);// JSON.parse se convierte la información en string.
        }
  
        setItem(parsedItem);
        setLoading(false);
  
        } catch(error) {
          setError(error);
        }
        
      }, 2000 ); // 3 segundos en la animacion de carga de las cajitas.
    });
  
    
    // guardar todos, 
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem); // convertir todos los todos en string
        localStorage.setItem(itemName, stringifiedItem);// guardarlo en localstorage con el nuevo todo actualizarlo
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  
  }

  export { useLocalStorage };