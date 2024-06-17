import React from 'react';
import './App.css';
import { ToDoContext } from '../ToDoContext/ToDoContext';
import { TodoCounter } from '../CounterComponent/TodoCounter';
import { TodoSearch } from '../SearchComponent/TodoSearch';
import { TodoList } from '../ListComponent/TodoList';
import { TodoItem } from '../ItemComponent/TodoItem';
import { CreateTodoButton } from '../CreateBottonComponent/CreateTodoButton';
import { Modal } from '../Modal/index';
import { ToDoForm } from '../FormComponent/Form';
import { ToDoEmpty } from '../EmptyComponent/ToDoEmpty';
import { ToDoError } from '../ToDoError/Error';
import { ToDoLoader } from '../ToDoLoading/Loader';

function AppUI() {
  //Context Consumer
  const {error,loading,searchedTodos,complete,deleteTodo,openModal,setOpenModal} = React.useContext(ToDoContext);

  return (
    <React.Fragment>
    {/* Header with general information - Number - Finished tasks - Add news "To Do"*/}
    <TodoCounter/>
    <div className='searchAndButton'>
      <TodoSearch/>  
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </div>
    {/* Add UI at the component */}
    <p>Urgentes</p>
          <TodoList> 
          {/* If there is an error */}
          {error && <ToDoError />}
          {/* Loading status */}
          {loading && <ToDoLoader />}
          {/* The list is empty */}
          {(!loading && !searchedTodos.length) && <ToDoEmpty />}
          {/* Loop each item in the list */}
          {searchedTodos.map((todo, index) => (
            <TodoItem
              key={index}
              text={todo.text}
              completed={todo.completed}
              urgent={todo.urgent}
              onComplete = {() => complete(todo.text)}
              onDelete = {() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>      
      {/* Add task modal */}
      {!!openModal && (
        <Modal>
          <ToDoForm/>
        </Modal>
      )}
    </React.Fragment>
  );
}

export { AppUI };
