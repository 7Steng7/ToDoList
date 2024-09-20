import React from 'react';
import './TodoItem.css';
import { IoMdCheckmarkCircleOutline, IoIosArrowDroprightCircle, IoMdRemoveCircle } from 'react-icons/io';


const TodoItem = (props) => {

  const shouldRenderItem = (important, urgent, index) => {
    return (
      (!!important && !!urgent && index === 0) ||
      (!!important && !urgent && index === 1) ||
      (!important && !!urgent && index === 2) ||
      (!important && !urgent && index === 3)
    );
  };

  if (!shouldRenderItem(props.important, props.urgent, props.index)) {
    return null;
  }

  const shouldRenderEmpty = (category, index) =>{
    props.quadrant.forEach(item => {
      if(category === item.category && item.quadrants[index] >= 0){
        return true;
      }
    });
  } 
  
  return (
  <>
    {props.category === props.activeCategory ? (
      <li className="TodoItem">
        <span
          className={`Icon Icon-check ${props.completed ? 'Icon-check--active' : ''}`}
          onClick={props.onComplete}
        >
          <p>{props.completed ? <IoMdCheckmarkCircleOutline /> : <IoIosArrowDroprightCircle />}</p>
        </span>
        <p className={`TodoItem-p ${props.completed ? 'TodoItem-p--complete' : ''}`}>
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
        ) : (
          shouldRenderEmpty(props.activeCategory, props.index) ? (
            <li className="TodoItem">No hay items :(</li>
          ) : (
            <></>
          )
        )}
      </>
  );
};

export { TodoItem };
