import React from 'react';
import generos from '../data/generos'; // Ajusta la ruta según tu estructura de archivos
import './GenerosSection.css';

const GenerosSection = () => {
  return (
    <section className="contenedor-generos-her">
      <h1>Descubre más en:</h1>
      <div className="cards-generos">
        {generos.map((genero, index) => (
          <div key={index}>
            <a href={genero.enlace}>{genero.nombre}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GenerosSection;
