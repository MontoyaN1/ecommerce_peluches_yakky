import './Footer.css';
import "bootstrap-icons/font/bootstrap-icons.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">

          {/* Sección información */}
          <div className="footer-section">
            <h3>Peluches Yakky</h3>
            <p>Peluches artesanales con varios acabos.</p>
            <a href="https://wa.me/573028116748" className="social-link-item">
              <i className="bi bi-whatsapp"></i>
              <span className="social-platform">WhatsApp</span>
            </a>
          </div>

          {/* Enlaces rápidos */}
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="/productos">Todos los Productos</a></li>
              <li><a href="/ofertas">Ofertas Especiales</a></li>
              <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
            </ul>
          </div>

          {/* Categorías */}
          <div className="footer-section">
            <h4>Categorías</h4>
            <ul>
              <li><a href="/productos">Navidad</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="footer-section">
            <h4>Contacto</h4>
            <ul>
              <li>📞 +57 302 8116748</li>
              <li>✉️ yakkypeluches@gmail.com</li>
              <li>📍 Dirección: Calle 204c #38a-58</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Peluches Yakky. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;