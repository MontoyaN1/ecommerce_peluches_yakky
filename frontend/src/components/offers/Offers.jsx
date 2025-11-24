import React from 'react';
import Header from '../commons/header/Header';
import Footer from '../commons/footer/Footer';
import ProductGrid from '../products/ProductGrid';
import './Offers.css';

const Offers = () => {
  // Filtro pre-aplicado para productos en oferta
  const offerFilters = {
    onSale: true
  };

  return (
    <div className="offers-page">
      <Header />
      
      <main className="offers-main">
        {/* Hero de ofertas */}
        <section className="offers-hero">
          <div className="container">
            <div className="offer-badge">Hasta 50% OFF</div>
            <h1>Ofertas Especiales</h1>
            <p>Descubre nuestros peluches artesanales con descuentos exclusivos. Ofertas por tiempo limitado.</p>
          </div>
        </section>

        <div className="container">
          {/* Banner de oferta destacada */}
          <div className="featured-offer">
            <div className="offer-content">
              <h2>Oferta de la Semana</h2>
              <h3>Colección Invierno - 30% OFF</h3>
              <p>Hasta agotar existencias</p>
              <button className="btn-primary">Ver Colección</button>
            </div>
          </div>

          {/* Grid de productos en oferta */}
          <section className="offers-section">
            <h2>Productos en Oferta</h2>
            <ProductGrid filters={offerFilters} />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Offers;