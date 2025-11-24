import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          {/* Sección información */}
          <div className="footer-section">
            <h3>🦄 Peluches Mágicos</h3>
            <p>Los peluches más suaves y adorables para todos los gustos. 
               Envíos a todo el país.</p>
            <div className="social-links">
              <a href="#">📘</a>
              <a href="#">📷</a>
              <a href="#">🐦</a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/productos">Todos los Productos</a></li>
              <li><a href="/ofertas">Ofertas Especiales</a></li>
              <li><a href="/nuevos">Nuevos Lanzamientos</a></li>
            </ul>
          </div>

          {/* Categorías */}
          <div className="footer-section">
            <h4>Categorías</h4>
            <ul>
              <li><a href="/categoria/animales">Animales</a></li>
              <li><a href="/categoria/fantasia">Fantasía</a></li>
              <li><a href="/categoria/personajes">Personajes</a></li>
              <li><a href="/categoria/gigantes">Peluches Gigantes</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="footer-section">
            <h4>Contacto</h4>
            <ul>
              <li>📞 +1 234 567 890</li>
              <li>✉️ info@peluchesmagicos.com</li>
              <li>📍 Dirección: Calle Peluche 123</li>
            </ul>
          </div>

        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Peluches Mágicos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;