import React from "react";
import "./NotMatch.css"; 

const NotMatch = () => {
  return (
    <>
    <div className="not-found-container">
      <img className="not-found-image" src="../src/assets/icons/sonido-de-onda.png" alt="onda" />
      <div>
        <h1><b>Página no encontrada</b></h1>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
      </div>
    </div>
    </>
  );
};

export default NotMatch;
