import iconMas from "../assets/icons/mas.png";
import './MisGrupos.css';

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

export default MisGrupos;
