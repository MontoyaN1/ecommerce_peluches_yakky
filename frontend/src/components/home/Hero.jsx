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
            <a href="/productos"><button className="btn-primary" >Ver Colección</button></a>
            <a href="/ofertas"><button className="btn-secondary">Ofertas Especiales</button></a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/reno_decoracion.png" alt="Peluches Yakky" className="placeholder-image" />

        </div>
      </div>
    </section>
  );
};

export default Hero;