import React from 'react';
import { Link } from 'react-router-dom';  // Importa el componente Link
import './Artistas.css';

const Artista = ({ artista }) => (
  <li className="artista-card" key={artista.id}>
    <Link to={`/detallesdeartista/${artista.id}`}>
      <img className="artista-foto" src={artista.foto} alt={artista.nombre} /> 
      <div className="artista-info">
        <img className="artista-logo" src={artista.logo} alt={artista.nombre} />
        <strong>{artista.nombre}</strong>
      </div>
    </Link>
  </li>
);

export default Artista;



/* import { artistas } from "../data/data.js";
import './Artistas.css';

const Artista = ({ artista }) => (
    <li className="artista-card" key={artista.id}>
      <img className="artista-foto" src={artista.foto} alt={artista.nombre} /> 
      <div className="artista-info">
        <a href="#"><img className="artista-logo" src={artista.logo} alt={artista.nombre} /></a>
        <a href="#"><strong>{artista.nombre}</strong></a>
      </div>
    </li>
  );

export default Artista; */