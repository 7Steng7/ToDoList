import React from "react";
import './Form.css';
import { ToDoContext } from '../ToDoContext/ToDoContext';
import { Checkbox } from '@mui/material';

function ToDoForm(){

    const [ formValue, setformValue ] = React.useState('');
    const [ important, setImportant ] = React.useState(false);
    const [ urgent, setUrgent ] = React.useState(false);

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
        const evaluateEmpty = formValue.trim();
        if(evaluateEmpty.length > 0){
            addToDo(formValue, important, urgent);
            setOpenModal(false);
        }
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
                        placeholder="Describe the activity"
                    />
                </div>
                <div className="checkboxContainer">
                   <div className="checkBox">
                     <Checkbox 
                        style={{color : 'white'}}
                        value={important}
                        onChange={() => setImportant(!important)}
                     />
                     <p>Is this duty important?</p>
                   </div>
                   <div className="checkBox">
                     <Checkbox 
                        style={{color : 'white'}} 
                        value={urgent}
                        onChange={() => setUrgent(!urgent)}
                     />
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