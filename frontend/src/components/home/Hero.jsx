import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Encuentra tu Peluche Perfecto</h1>
          <p>Descubre nuestra colección de peluches suaves, adorables y llenos de amor. 
             Perfectos para regalar o consentirte.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Ver Colección</button>
            <button className="btn-secondary">Ofertas Especiales</button>
          </div>
        </div>
        <div className="hero-image">
          {/* Aquí iría una imagen de peluches */}
          <div className="placeholder-image">🦁🐻🐰🦊</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;