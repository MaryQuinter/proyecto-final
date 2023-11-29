import { artistas } from "../data/data.js";
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

export default Artista;