import React from "react";
import ondaDeSonido from "../assets/icons/sonido-de-onda.png";
import searchIcon from "../assets/icons/search-p.png";
import corazonIcon from "../assets/icons/corazon.png";
import hogarIcon from "../assets/icons/hogar.png";
import bolsaIcon from "../assets/icons/bolsa-shop.png";
import avatarIcon from "../assets/icons/avatar.png";
import './Nav.css';
import { Link } from 'react-router-dom'; 

const Nav = () => {
  return (
    <>
      <nav className="menu">
        <div className="logo-principal">
          <a className="sello-principal" href="index.html">
            <img src={ondaDeSonido} alt="Onda de sonido" />
            <Link to={"/"}><strong>ThumpThump</strong></Link>
          </a>
        </div>

        <div className="search-container">
          <input type="search" id="formulario" placeholder="Buscar artista" />
          <button type="button" id="boton">
            <img className="icono-search" src={searchIcon} alt="Lupa" />
          </button>
        </div>

        <div className="icons-notificaciones">
          <a href="#"><img src={corazonIcon} alt="corazon de notificaciones" /></a>
          <a href="#"><img src={hogarIcon} alt="hogar de inicio" /></a>
          <a href="#"><img src={bolsaIcon} alt="bolsa de tienda" /></a>
          <a href="#"><img src={avatarIcon} alt="" /></a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
