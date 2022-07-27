import React from "react";

function useHookLocalStorage(itemLocal, initialItem){

  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialItem);

    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemLocal);
          let parsedItem;
          
          if (!localStorageItem) {
            localStorage.setItem(itemLocal, JSON.stringify(initialItem));
            parsedItem = initialItem;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
        } catch(error) {
          setError(error);
        }
      }, 1000);
    });
  
    const changeItem = (change) => {
      try{
        const todoToString = JSON.stringify(change); 
        localStorage.setItem(itemLocal, todoToString);
        setItem(change);
      }catch(error){
        setError(error);
      }
    };
    
    return {
      item,
      changeItem,
      loading,
      error,
    };
  };
export { useHookLocalStorage };