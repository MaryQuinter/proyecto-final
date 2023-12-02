// DetallesDeArtista.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { artistas } from "../data/data.js";
import './DetallesDeArtista.css';
import Nav from './Nav.jsx';

const DetallesDeArtista = () => {
  const { id } = useParams();

  // Buscar el artista por ID
  const artista = artistas
    .flatMap((genero) => genero.artistas)
    .find((a) => a.id.toString() === id);

  if (!artista) {
    return <div>No se encontró el artista</div>;
  }

  // Construir rutas completas para las imágenes
  const fotoSrc = `../${artista.foto}`;
  const logoSrc = `../${artista.logo}`;

  return (
    <>
    <Nav/>
    <div className="container">
      
      <img className="artist-image" src={fotoSrc} alt={artista.nombre} />
      
      <article>
        <div>
          <img className="artist-logo" src={logoSrc} alt={artista.nombre} />
          <h2>{artista.nombre}</h2>
        </div>
        <p>{artista.descripcion}</p>
        <div>
          <p>Fecha de Debut: {artista.fechaDebut}</p>
          <p>País de Origen: {artista.paisOrigen}</p>
          <div className='contenedor-boton'>
          <button>Agregar a favoritos</button>
          </div>
        </div>
      </article>
    </div>
    </>
  );
};

export default DetallesDeArtista;


