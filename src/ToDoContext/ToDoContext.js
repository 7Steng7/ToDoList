import React from 'react';
import { useHookLocalStorage } from './HookLocalStorage';

const ToDoContext = React.createContext();

function ToDoProvider(props){
  const {
    item: todos,
    changeItem,
    loading,
    error,
  } = useHookLocalStorage('todosVersion1', []);
  
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo => todo.completed === true).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  const complete = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newListTodo = [...todos];
      if(newListTodo[todoIndex].completed === true){
        newListTodo[todoIndex].completed = false;
      }else{
        newListTodo[todoIndex].completed = true;
      }
      changeItem(newListTodo);
  };
      
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newListTodo = [...todos];
        newListTodo.splice(todoIndex, 1);
        changeItem(newListTodo);
    };

    const addToDo = (text, important, urgent) => {
      console.log(todos)
      const newListTodo = [...todos];
      newListTodo.push({
        completed : false,
        important : important,
        urgent : urgent,
        text,
      })
      changeItem(newListTodo);
  };

    return(
        <ToDoContext.Provider value={{
            loading,
            error,
            totalTodos,
            complete,
            searchValue,
            setSearchValue,
            searchedTodos,
            completedTodos,
            deleteTodo,
            addToDo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </ToDoContext.Provider>
    );
};
export { ToDoContext , ToDoProvider };