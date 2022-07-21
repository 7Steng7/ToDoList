import React from 'react';
import { TodoCounter } from '../CounterComponent/TodoCounter';
import { TodoSearch } from '../SearchComponent/TodoSearch';
import { TodoList } from '../ListComponent/TodoList';
import { TodoItem } from '../ItemComponent/TodoItem';
import { CreateTodoButton } from '../CreateBottonComponent/CreateTodoButton';


const defaultTodos = [
  { text: 'Primero', completed: false },
  { text: 'Segundo', completed: false },
  { text: 'Tercero', completed: true },
  { text: 'Cuarto', completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed === true).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  
  const complete = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newListTodo = [...todos];
      if(newListTodo[todoIndex].completed === true){
        newListTodo[todoIndex].completed = false;
      }else{
        newListTodo[todoIndex].completed = true;
      }
      setTodos(newListTodo);
  };
      
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newListTodo = [...todos];
        newListTodo.splice(todoIndex, 1);
        setTodos(newListTodo);
    };
  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />  

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete = {() => complete(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
