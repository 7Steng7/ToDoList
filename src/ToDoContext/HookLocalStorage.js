import React from "react";

function useHookLocalStorage(itemLocal, initialItem){

    const localStorageItem = localStorage.getItem(itemLocal);
  
    let parsedItem;
  
    if(!localStorageItem){
      localStorage.setItem(itemLocal, JSON.stringify(initialItem));
      parsedItem = initialItem;
    }else{
      parsedItem = JSON.parse(localStorageItem);
    }
  
    const changeItem = (change) => {
      const todoToString = JSON.stringify(change); 
      localStorage.setItem(itemLocal, todoToString);
      setItem(change);
    };
    const [item, setItem] = React.useState(parsedItem);
    return [
      item,
      changeItem
    ];
  };
export { useHookLocalStorage };