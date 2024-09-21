import React, { useState } from 'react';
import { ToDoContext } from '../ToDoContext/ToDoContext';
import './TodoCategories.css';

function TodoCategories({ setIsVisible, activeCategory, setActiveCategory }) {
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
    if(activeCategory === category){
      setIsVisible(false);
      setTimeout(() => setActiveCategory(null), 450);
    }else{
      setActiveCategory(category);
    }
  };

  return (
    <section className='sectionCategories'>
      <h2 className='TodoCategories'>Categories</h2>
      <p className='titleCategories'>You can add categories in order to better filter tasks, work, home, study, etc.</p>
    <div className='ContainerButtonCategory'>
      <button className='buttonAddCategory' onClick={onAddCategory}>Add category</button>
      <input className='inputCategory' placeholder='Name your category' type="text" value={nameCategory} onChange={handleChange}/>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', width : '80%' }}>
      {categories.map((category) => (
        <button className="buttonCategory" key={category.name} onClick={() => categoryClick(category.name)}>
          {category.name}
        </button>
      ))} 
    </div>
    </section>
  );
}

export { TodoCategories };
