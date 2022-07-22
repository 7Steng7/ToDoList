import React from 'react';
import { ToDoContext } from '../ToDoContext/ToDoContext';
import './TodoSearch.css';

function TodoSearch() {

  const { searchValue, setSearchValue } = React.useContext(ToDoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Search a TO DO"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
