import React, { useState } from 'react';
import { ToDoContext } from '../ToDoContext/ToDoContext';
import './TodoCategories.css';

function TodoCategories({ setActiveCategory }) {
  const [ nameCategory, setNameCategory ] = useState('');

  const {
    addCategory,
    categories
} = React.useContext(ToDoContext);

  const onAddCategory = () => {
    if (nameCategory.trim() !== '') {
      addCategory(nameCategory);
      setNameCategory('');
    }
  };

  const handleChange = (event) => {
    setNameCategory(event.target.value);
  };

  const categoryClick = (category) => {
    setActiveCategory(category)
  };

  return (
    <section>
      <h2 className='TodoCategories'>Categorias</h2>
      <p style={{textAlign : 'center'}}>Puedes agregar categorias con el fin de filtrar mejor las tareas, trabajo, casa, estudio, etc.</p>
    <div className='ContainerButtonCategory'>
      <button className='buttonCategory' onClick={onAddCategory}>Agregar</button>
      <input type="text" value={nameCategory} onChange={handleChange}/>
    </div>
    <div style={{display : 'flex', justifyContent : 'space-around'}}>
        {categories.map((category, index) => (
          <button className="buttonCategory" key={category.name} onClick={() => categoryClick(category.name)}>
            {category.name}
          </button>
        ))}
      </div>  
    </section>
  );
}

export { TodoCategories };
