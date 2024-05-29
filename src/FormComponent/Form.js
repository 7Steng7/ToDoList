import React from "react";
import './Form.css';
import { ToDoContext } from '../ToDoContext/ToDoContext';
import { Checkbox } from '@mui/material';

function ToDoForm(){

    const [formValue, setformValue ] = React.useState('');

    const {
        addToDo,
        setOpenModal
    } = React.useContext(ToDoContext);

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setformValue(event.target.value);
    };

    const onAdd = (event) => {
        event.preventDefault();
        addToDo(formValue);
        setOpenModal(false);
    };

    return(
        <>  
        <form onSubmit={onAdd} className="containerForm">

            <div className="labelTask">
                <label>Create a task</label>
            </div>
            <div className="containerAreaAndChecks">
                <div className="textAreaContainer">
                    <textarea
                        value={formValue}
                        onChange={onChange}
                        placeholder="Describe the job"
                    />
                </div>
                <div className="checkboxContainer">
                   <div className="checkBox">
                     <Checkbox style={{color : 'white'}}/>
                     <p>Is this duty important?</p>
                   </div>
                   <div className="checkBox">
                     <Checkbox style={{color : 'white'}} />
                     <p>Is this duty urgent?</p>
                   </div>
                </div>
            </div>
            <div className="buttonConfig">
                <button
                    type="button"
                    onClick={onCancel}
                >Cancel</button>
                <button type="submit">Add occupation</button>
            </div>
        </form>
        </>
    );
}
export { ToDoForm };