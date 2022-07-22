import React from 'react';
import { ToDoContext } from '../ToDoContext/ToDoContext';
import { TodoCounter } from '../CounterComponent/TodoCounter';
import { TodoSearch } from '../SearchComponent/TodoSearch';
import { TodoList } from '../ListComponent/TodoList';
import { TodoItem } from '../ItemComponent/TodoItem';
import { CreateTodoButton } from '../CreateBottonComponent/CreateTodoButton';



function AppUI() {

  const {searchedTodos,complete,deleteTodo} = React.useContext(ToDoContext);

  return (
    <React.Fragment>
    <TodoCounter/>
      <TodoSearch/>  
          <TodoList>
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
      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
