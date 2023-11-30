import React from 'react';
import './AnuncioFans.css';

const AnuncioFans = () => {
  return (
    <section className="contenedor-anuncio-fans">
      <div className="anuncio-fans">
        <h2>Para todos los Fans</h2>
        <div>
          <button>Crear cuenta</button>
          <p>¿Ya tienes una?<a href=""> Inicia sesión</a></p>
        </div>
      </div>
    </section>
  );
};

export default AnuncioFans;
