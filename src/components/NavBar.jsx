import CartWidget from './CartWidget';
import './css/NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="#home">ZapaShop</a>
            </div>
            <ul className="navbar-links">
                <li><a href="">Novedades</a></li>
                <li><a href="">Hombres</a></li>
                <li><a href="">Mujeres</a></li>
                <li><a href="">Niños</a></li>
            </ul>
            <div className="navbar-cart">
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;