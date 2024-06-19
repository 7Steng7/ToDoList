import React from 'react';
import './TodoItem.css';
import { IoMdCheckmarkCircleOutline, IoIosArrowDroprightCircle, IoMdRemoveCircle } from 'react-icons/io';

function TodoItem(props) {
  return (
    <>
    { !!props.important && !!props.urgent && props.index === 0 ?
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
          <span onClick={props.changeImportant}>{props.important ? "Es importante" : "No es importante"}</span>
          <span onClick={props.changeUrgent}>{props.urgent ? "Es urgente" : "No es urgente"}</span>
          <span
            className="Icon Icon-delete"
            onClick={props.onDelete}
          >
          <IoMdRemoveCircle />
          </span>
        </li>
        </> 
        : 
    <>
    </>
    }
    { !!props.important && !props.urgent && props.index === 1 ?
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
          <span onClick={props.changeImportant}>{props.important ? "Es importante" : "No es importante"}</span>
          <span onClick={props.changeUrgent}>{props.urgent ? "Es urgente" : "No es urgente"}</span>
          <span
            className="Icon Icon-delete"
            onClick={props.onDelete}
          >
          <IoMdRemoveCircle />
          </span>
        </li>
        </> 
        : 
    <>
    </>
    }
    { !props.important && !!props.urgent && props.index === 2 ?
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
          <span onClick={props.changeImportant}>{props.important ? "Es importante" : "No es importante"}</span>
          <span onClick={props.changeUrgent}>{props.urgent ? "Es urgente" : "No es urgente"}</span>
          <span
            className="Icon Icon-delete"
            onClick={props.onDelete}
          >
          <IoMdRemoveCircle />
          </span>
        </li>
        </> 
        : 
    <>
    </>
    }
    { !props.important && !props.urgent && props.index === 3 ?
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
          <span onClick={props.changeImportant}>{props.important ? "Es importante" : "No es importante"}</span>
          <span onClick={props.changeUrgent}>{props.urgent ? "Es urgente" : "No es urgente"}</span>
          <span
            className="Icon Icon-delete"
            onClick={props.onDelete}
          >
          <IoMdRemoveCircle />
          </span>
        </li>
        </> 
        : 
    <>
    </>
    }
    </>
  );
}

export { TodoItem };
