import React from 'react';
import { ToDoContext } from '../ToDoContext/ToDoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(ToDoContext);

  return (
    <h2 className="TodoCounter">You've completed {completedTodos} out of {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };
