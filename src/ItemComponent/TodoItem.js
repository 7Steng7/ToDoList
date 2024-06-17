import React from 'react';
import './TodoItem.css';
import { IoMdCheckmarkCircleOutline, IoIosArrowDroprightCircle, IoMdRemoveCircle } from 'react-icons/io';

function TodoItem(props) {
  return (
    <>
    { props.urgent ?
    <>
        <li className="TodoItem">
          <span
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}
          >
            <p>{props.completed ? <IoMdCheckmarkCircleOutline /> : <IoIosArrowDroprightCircle/>}</p>
          </span>
          <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}
          </p>
          <p>{props.important ? "Es importante" : "No es importante"}</p>
          <p>{props.urgent ? "Es urgente" : "No es urgente"}</p>
          <span
            className="Icon Icon-delete"
            onClick={props.onDelete}
          >
          <IoMdRemoveCircle />
          </span>
        </li>
        </> 
        : 
        <></>
    }
    </>
  );
}

export { TodoItem };
