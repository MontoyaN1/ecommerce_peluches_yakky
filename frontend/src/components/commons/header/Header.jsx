import { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="container">
                {/* Logo */}
                <div className="logo">
                    <h1>🦄 Peluches Mágicos</h1>
                </div>

                {/* Navegación */}
                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <ul className="nav-list">
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/productos">Productos</a></li>
                        <li><a href="/ofertas">Ofertas</a></li>
                        <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
                        <li><a href="/contacto">Contacto</a></li>
                    </ul>
                </nav>

                {/* Iconos de acción */}
                <div className="header-actions">


                    {/* Menú móvil */}
                    <button
                        className="menu-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        ☰
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;