import React from 'react';
import './TodoCategories.css';

function TodoCategories() {

  return (
    <section>
      <h2 className='TodoCategories'>Categorias</h2>
    <div className='ContainerButtonCategory'>
      <button className='buttonCategory'>Agregar</button>
      <button className='buttonCategory'>Universidad</button>
      <button className='buttonCategory'>Trabajo</button>
    </div>
    </section>

  );
}

export { TodoCategories };
