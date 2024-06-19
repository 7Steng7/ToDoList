import React from 'react';
import './TodoItem.css';
import { IoMdCheckmarkCircleOutline, IoIosArrowDroprightCircle, IoMdRemoveCircle } from 'react-icons/io';

const TodoItem = (props) => {
  //Pregunta el nivel de importancia y urgencia para acomodarlo en la matriz
  const shouldRenderItem = (important, urgent, index) => {
    return (
      (!!important && !!urgent && index === 0) ||
      (!!important && !urgent && index === 1) ||
      (!important && !!urgent && index === 2) ||
      (!important && !urgent && index === 3)
    );
  };
  //Retorna null para los que no renderiza por lo que no renderiza nada
  if (!shouldRenderItem(props.important, props.urgent, props.index)) {
    return null;
  }
  
  //Matriz
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.onComplete}
      >
        <p>{props.completed ? <IoMdCheckmarkCircleOutline /> : <IoIosArrowDroprightCircle />}</p>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span onClick={props.changeImportant}>
        {props.important ? "Es importante" : "No es importante"}
      </span>
      <span onClick={props.changeUrgent}>
        {props.urgent ? "Es urgente" : "No es urgente"}
      </span>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
        <IoMdRemoveCircle />
      </span>
    </li>
  );
};

export { TodoItem };
