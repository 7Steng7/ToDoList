import React, { useState, useEffect } from 'react';
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
// import { ToDoEmpty } from '../EmptyComponent/ToDoEmpty';
import { ToDoError } from '../ToDoError/Error';
import { ToDoLoader } from '../ToDoLoading/Loader';

function AppUI() {
  //Context Consumer
  const {error, loading, searchedTodos, complete, deleteTodo, changeImportant, changeUrgent, openModal, setOpenModal, categories} = React.useContext(ToDoContext);
  const magnitudeToDo = ['Important and urgent', 'Important but not urgent', 'Urgent but not important', 'Neither urgent nor important'];
  const quadrants = categories.map(category => {
    return { category: category.name, quadrants: [0, 0, 0, 0] };
  });
  const [ activeCategory, setActiveCategory ] = useState(null);
  //Animation
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (activeCategory) {
      setTimeout(() => setIsVisible(true), 500);
    } else {
      setTimeout(() => setIsVisible(false), 500); 
    }
  }, [activeCategory]);

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

  return (  
  <React.Fragment>
    {/* List of categories */}
    <TodoCategories  
      setIsVisible={setIsVisible}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
    />
    <div>
    {/* Header with general information - Number - Finished tasks - Add news "To Do"*/}
    {/* Parte de arriba de categorias, tareas completas, agregar  */}
    { categories.length === 0 && <div className='titleCategories'>You haven't created categories yet</div> }
    { activeCategory ?
    <div className={`transition-container ${isVisible ? 'open' : ''}`}>
    <p className='currentTextCategory'> Current category : {activeCategory} </p>
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
        <div key={magnitudeIndex} className='magnitudeItems'>
          <p style={{textAlign : 'center'}}>{magnitude}</p>
          <TodoList> 
            {/* If there is an error */}
            {error && <ToDoError />}
            {/* Loading status */}
            {loading && <ToDoLoader />}
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
            {/* Loop empty spaces in the list */}
            {searchedTodos.filter(todo => {
                const quadrantIndex = getQuadrantIndex(todo);
                return quadrantIndex === magnitudeIndex && todo.category === activeCategory;
              }).length === 0 && <li className="TodoItem">There are no items :(</li>}
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
      </div> : 
      <></>
    }
    </div>
  </React.Fragment>
  );
}

export { AppUI };
