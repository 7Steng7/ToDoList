import React from 'react';
import { ToDoContext } from '../ToDoContext/ToDoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(ToDoContext);

  return (
    <h2 className="TodoCounter">You're completed {completedTodos} of {totalTodos} TO DOs</h2>
  );
}

export { TodoCounter };
