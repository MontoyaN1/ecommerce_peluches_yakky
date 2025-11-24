import React, { useState } from 'react';
import Header from '../commons/header/Header';
import Footer from '../commons/footer/Footer';
import ProductGrid from './ProductGrid';
import ProductFilters from './ProductFilters';
import './Product.css';

const Products = () => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    material: ''
  });

  return (
    <div className="products-page">
      <Header />
      
      <main className="products-main">
        {/* Hero de productos */}
        <section className="products-hero">
          <div className="container">
            <h1>Nuestra Colección</h1>
            <p>Descubre peluches artesanales únicos, elaborados con maderas seleccionadas y materiales premium</p>
          </div>
        </section>

        <div className="container">
          <div className="products-layout">
            {/* Sidebar de filtros */}
            <aside className="filters-sidebar">
              <ProductFilters filters={filters} setFilters={setFilters} />
            </aside>

            {/* Grid de productos */}
            <section className="products-content">
              <div className="products-header">
                <h2>Todos los Productos</h2>
                <div className="products-count">12 productos</div>
              </div>
              <ProductGrid filters={filters} />
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;