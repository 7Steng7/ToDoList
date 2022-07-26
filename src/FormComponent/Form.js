import React from "react";
import { ToDoContext } from '../ToDoContext/ToDoContext';
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
        <form onSubmit={onAdd}>
            <label>...</label>
            <textarea 
                value={formValue}
                onChange={onChange}
                placeholder="Create a task"
            />
            <div>
                <button
                    type="button"
                    onClick={onCancel}
                >Cancel</button>
                <button
                    type="submit"
                >Add</button>
            </div>
        </form>
    );
}
export { ToDoForm };