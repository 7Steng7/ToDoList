import React, { useState } from 'react';
import './App.css';
import '../ItemComponent/TodoItem.css';
import { TodoCategories } from '../CategoriesComponent/TodoCategories';
import { ToDoContext } from '../ToDoContext/ToDoContext';
import { TodoCounter } from '../CounterComponent/TodoCounter';
import { TodoSearch } from '../SearchComponent/TodoSearch';
import { TodoList } from '../ListComponent/TodoList';
import { TodoItem } from '../ItemComponent/TodoItem';
import { CreateTodoButton } from '../CreateBottonComponent/CreateTodoButton';
import { Modal } from '../Modal/index';
import { ToDoForm } from '../FormComponent/Form';
import { ToDoEmpty } from '../EmptyComponent/ToDoEmpty';
import { ToDoError } from '../ToDoError/Error';
import { ToDoLoader } from '../ToDoLoading/Loader';

function AppUI() {
  //Context Consumer
  const {error, loading, searchedTodos, complete, deleteTodo, changeImportant, changeUrgent, openModal, setOpenModal, categories} = React.useContext(ToDoContext);
  const magnitudeToDo = ['Importante y urgente', 'Importante pero no urgente', 'Urgente pero no importante', 'Ni urgente, ni importante'];
  const quadrants = categories.map(category => {
    return { category: category.name, quadrants: [0, 0, 0, 0] };
  });

  const calculateQuadrants = (quadrants, searchedTodos) => {
    quadrants.forEach(quadrant => {
      searchedTodos.forEach(todo => {
        if (todo.category === quadrant.category) {
          if (todo.important && todo.urgent) {
            quadrant.quadrants[0] += 1;
          } else if (todo.important && !todo.urgent) {
            quadrant.quadrants[1] += 1;
          } else if (!todo.important && todo.urgent) {
            quadrant.quadrants[2] += 1;
          } else if (!todo.important && !todo.urgent) {
            quadrant.quadrants[3] += 1;
          }
        }
      });
    });
  };
  
  const getQuadrantIndex = (todo) => {
    if (todo.important && todo.urgent) return 0;
    if (todo.important && !todo.urgent) return 1;
    if (!todo.important && todo.urgent) return 2;
    return 3; // Ni urgente ni importante
  };
  
  calculateQuadrants(quadrants, searchedTodos);
  const [ activeCategory, setActiveCategory ] = useState();
  // console.log(quadrants[1].quadrants[1])

  return (  
  <React.Fragment>
    <TodoCategories  
    setActiveCategory = {setActiveCategory}/>
    <p style={{textAlign : 'center'}}>{activeCategory}</p>
    {/* Header with general information - Number - Finished tasks - Add news "To Do"*/}
    {/* Parte de arriba de categorias, tareas completas, agregar  */}
    { activeCategory ?
    <div>
    <TodoCounter/>
    <div className='searchAndButton'>
      <TodoSearch/>  
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </div>
    
    {/* Add UI at the component */}
    <section style={{marginTop : '30px' , display : 'flex', flexWrap : 'wrap'}}>
      {magnitudeToDo.map((magnitude, magnitudeIndex) => (
        <div key={magnitudeIndex} style={{width : '50%'}}>
          <p style={{textAlign : 'center'}}>{magnitude}</p>
          <TodoList> 
            {/* If there is an error */}
            {error && <ToDoError />}
            {/* Loading status */}
            {loading && <ToDoLoader />}
            {/* The list is empty */}
            {(!loading && searchedTodos.length === 0) && <ToDoEmpty />}
            {/* Loop each item in the list */}
            {searchedTodos.length > 0 && searchedTodos.map((todo, index) => (
              <TodoItem
                key={index}
                index={magnitudeIndex}
                quadrant={quadrants}
                activeCategory={activeCategory}
                category={todo.category}
                text={todo.text}
                completed={todo.completed}
                urgent={todo.urgent}
                important={todo.important}
                onComplete={() => complete(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                changeUrgent={() => changeUrgent(todo.text)}
                changeImportant={() => changeImportant(todo.text)}
                />
              ))}
           {searchedTodos.filter(todo => {
              const quadrantIndex = getQuadrantIndex(todo);
              return quadrantIndex === magnitudeIndex && todo.category === activeCategory;
            }).length === 0 && <li className="TodoItem">No hay items en este cuadrante :(</li>}
            {/* If there are no items and not loading, show ToDoEmpty */}
            {(!loading && searchedTodos.length === 0) && <ToDoEmpty />}
          </TodoList>
        </div>  
      ))}
    </section>
      {/* Add task modal */}
      {!!openModal && (
        <Modal>
          <ToDoForm category={activeCategory} />
        </Modal>
      )}
      </div> : <div>Elige una categoría</div> 
    }
  </React.Fragment>
  );
}

export { AppUI };
