import React from 'react';
import { Link } from 'react-router-dom';
import iconMas from '../assets/icons/mas.png';
import './MisGrupos.css';

const MisGrupos = () => {
  return (
    <section className="agregar-grupos">
      <Link to="/misfavoritos">
        <p>Mis grupos</p>
      </Link>
      <div>
        <a href="#">
          <img src={iconMas} alt="Signo de adición" />
        </a>
      </div>
    </section>
  );
};

export default MisGrupos;


/* import iconMas from "../assets/icons/mas.png";
import './MisGrupos.css';
import React from 'react';


const MisGrupos = () => {
    return (
        <>
        <section className="agregar-grupos">
            <p>Mis grupos</p>
            <div>
                <a href="#"><img src={iconMas} alt="Signo de adición"/></a>
            </div>
        </section>
        </>
    );
};

export default MisGrupos;  */
