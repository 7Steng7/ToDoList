import React from "react";
import { VscAdd, VscDebugLineByLine } from "react-icons/vsc";
import './ToDoEmpty.css';

function ToDoEmpty (){
    return(
        <div className="container">
            <div className="iconsContainer">
                <VscAdd className="iconPlus icon" /> 
                <VscDebugLineByLine className="iconlibrary icon" /> 
            </div>
            <h1>Create a new task!</h1>
        </div>
    );
}
export { ToDoEmpty };