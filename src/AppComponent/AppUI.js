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
    <TodoCounter/>
    <div className='searchAndButton'>
      <TodoSearch/>  
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </div>

          <TodoList>
          {error && <ToDoError />}
          {loading && <ToDoLoader />}
          {(!loading && !searchedTodos.length) && <ToDoEmpty />}
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete = {() => complete(todo.text)}
              onDelete = {() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>      

      {!!openModal && (
        <Modal>
          <ToDoForm/>
        </Modal>
      )}
    </React.Fragment>
  );
}

export { AppUI };
