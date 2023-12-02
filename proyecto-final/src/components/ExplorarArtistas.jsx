import { artistas } from "../data/data.js";
import './ExplorarArtistas.css';
import Artista from "./Artistas.jsx"

const ExplorarArtistas = () => {
    return (
      <>
        <h1 className="title-explora">Explora y sigue el ritmo de tus gustos</h1>
        <article className="genero-container">
          {artistas.map((categoria) => (
            <div key={categoria.genero} className="genero-section">
              <h2>
                <span className="first-letter">{categoria.genero[0]}</span>
                {categoria.genero.slice(1)}
              </h2>
              <ul className="artista-list">
                {categoria.artistas.map((artista) => (
                  <Artista key={artista.id} artista={artista} />
                ))}
              </ul>
            </div>
          ))}
        </article>
      </>
    );
  };

export default ExplorarArtistas;