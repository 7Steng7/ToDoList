import React, { useState } from 'react';
import './TodoCategories.css';

function TodoCategories() {
  const [ categories, setCategories ] = useState([]);
  const [ nameCategory, setNameCategory ] = useState('');

  const addCategory = () => {
    if (nameCategory.trim() !== '') { // Verificar que el nombre no esté vacío
      setCategories([...categories, nameCategory]);
      setNameCategory(''); // Limpiar el input después de agregar la categoría
    }
  };

  const handleChange = (event) => {
    setNameCategory(event.target.value);
  };

  return (
    <section>
      <h2 className='TodoCategories'>Categorias</h2>
    <div className='ContainerButtonCategory'>
      <button className='buttonCategory' onClick={addCategory}>Agregar</button>
      <input type="text" value={nameCategory} onChange={handleChange}/>
    </div>
    <div>
        {categories.map((category, index) => (
          <button className="buttonCategory" key={index}>
            {category}
          </button>
        ))}
      </div>
    </section>

  );
}

export { TodoCategories };
