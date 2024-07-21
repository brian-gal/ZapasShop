import './css/Portada.css';
import imagen from "../assets/portada.webp"

function Portada() {
    return (
        <div className='portada'>
            <img src={imagen} alt="" />
        </div>
    );
}

export default Portada;