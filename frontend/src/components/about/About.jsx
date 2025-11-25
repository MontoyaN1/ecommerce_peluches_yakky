import React from 'react';
import Header from '../commons/header/Header';
import Footer from '../commons/footer/Footer';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <Header />

      <main className="about-main">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="container">
            <h1>Nuestra Historia</h1>
            <p>Artesanía que abraza el alma, hecha con amor y materiales naturales</p>
          </div>
        </section>

        {/* Nuestra Historia */}
        <section className="story-section">
          <div className="container">
            <div className="story-content">
              <div className="story-text">
                <h2>El Origen de Nuestra Pasión</h2>
                <p>
                  En el corazón de la tradición artesanal, nace Peluches Mágicos como un
                  tributo a la belleza de lo hecho a mano. Desde 2015, hemos dedicado
                  nuestras manos y corazón a crear peluches únicos que cuentan historias.
                </p>
                <p>
                  Cada pieza es el resultado de horas de dedicación, utilizando maderas
                  seleccionadas de bosques sostenibles y tejidos naturales que respetan
                  el medio ambiente. Creemos en la belleza de la imperfección, en ese
                  detalle único que hace especial a cada creación.
                </p>
                <blockquote>
                  "No creamos simples peluches, creamos compañeros para la vida,
                  testigos de momentos especiales y guardianes de sueños"
                </blockquote>
              </div>
              <div className="story-image">
                <div className="placeholder-artisan">🛠️🌳</div>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="values-section">
          <div className="container">
            <h2>Nuestros Valores</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🌱</div>
                <h3>Sostenibilidad</h3>
                <p>
                  Utilizamos materiales naturales y procesos que respetan
                  el medio ambiente. Cada peluche es eco-amigable.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">👐</div>
                <h3>Artesanía</h3>
                <p>
                  Técnicas tradicionales combinadas con diseño contemporáneo.
                  Cada pieza es 100% hecha a mano.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">💝</div>
                <h3>Calidad</h3>
                <p>
                  Materiales premium y atención al detalle. Creaciones
                  diseñadas para durar generaciones.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Comunidad</h3>
                <p>
                  Apoyamos a artesanos locales y promovemos el comercio
                  justo en cada etapa del proceso.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Proceso Artesanal */}
        <section className="process-section">
          <div className="container">
            <h2>Nuestro Proceso Creativo</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">01</div>
                <h3>Selección de Materiales</h3>
                <p>
                  Elegimos cuidadosamente maderas de cerezo, nogal y roble,
                  junto con tejidos orgánicos de la más alta calidad.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">02</div>
                <h3>Diseño y Planificación</h3>
                <p>
                  Cada peluche comienza con bocetos detallados, considerando
                  la personalidad única que queremos transmitir.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">03</div>
                <h3>Elaboración Artesanal</h3>
                <p>
                  Nuestros artesanos dan vida a cada pieza mediante técnicas
                  tradicionales de tallado y costura.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">04</div>
                <h3>Acabados y Detalles</h3>
                <p>
                  Aplicamos acabados naturales y añadimos esos detalles
                  especiales que hacen única cada creación.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section className="team-section">
          <div className="container">
            <h2>Conoce a Nuestros Artesanos</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-photo">👩‍🎨</div>
                <h3>Martha Valencia</h3>
                <p className="member-role">Maestra Artesana</p>
                <p className="member-bio">
                  Actual administradora y artesana de Peluches Yakky, 
                  con años en experiencia en trabajos en peluche, madera
                   y artesanías en general. Es la mente maestra destras
                   de cada artesanía destacando su creatividad y ingenió
                   único.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="about-cta">
          <div className="container">
            <h2>¿Listo para Encontrar tu Peluche Perfecto?</h2>
            <p>Cada creación tiene una historia esperando ser contada</p>
            <div className="cta-buttons">
              <a href="/productos" className="btn-primary">Ver Colección</a>
              <a href="/contacto" className="btn-secondary">Contactarnos</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;