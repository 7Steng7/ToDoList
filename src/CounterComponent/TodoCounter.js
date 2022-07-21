import React from 'react';
import './TodoCounter.css';

function TodoCounter(props) {
  return (
    <h2 className="TodoCounter">You're completed {props.completed} of {props.total} TO DOs</h2>
  );
}

export { TodoCounter };
