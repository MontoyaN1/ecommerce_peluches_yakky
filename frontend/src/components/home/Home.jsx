import React from 'react';
import Header from '../commons/header/Header';
import Footer from '../commons/footer/Footer';
import ProductGrid from './ProductGrind';
import Hero from './Hero';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Productos destacados */}
        <section className="featured-products">
          <div className="container">
            <h2>Peluches Destacados 🎯</h2>
            <ProductGrid />
          </div>
        </section>

        {/* Banner promocional */}
        <section className="promo-banner">
          <div className="container">
            <h3>🎁 Envío Gratis en compras mayores a $50</h3>
            <p>Disfruta de nuestros peluches con envío sin costo adicional</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;