import React from 'react';
import './ProductGrid.css';
import { products } from '../../data/ProductData';


const ProductGrid = ({ filters }) => {
  const filteredProducts = products.filter(product => {
    // Filtro por categoría
    if (filters.category && product.category !== filters.category) return false;

    // Filtro por material
    if (filters.material && product.material !== filters.material) return false;

    if (filters.onSale !== undefined && product.onSale !== filters.onSale) return false;

    // Filtro por rango de precio - ¡ESTO ES LO QUE DEBES CORREGIR!
    if (filters.priceRange) {
      const price = product.price; // Asegúrate que product.price es número

      // Convertir el rango a números para comparar
      const [min, max] = filters.priceRange.split('-');

      if (max === '+') {
        // Para el rango "100000+"
        if (price < parseInt(min)) return false;
      } else {
        // Para rangos como "0-30000", "30000-60000", etc.
        if (price < parseInt(min) || price > parseInt(max)) return false;
      }
    }

    return true;
  });


  return (
    <div className="products-grid-container">
      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt="Peluches Yakky" className="placeholder-image" />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-category">{product.category}</p>
              <p className="product-material">{product.material}</p>
              <p className="product-description">{product.description}</p>
              <div className="product-price">${product.price}</div>
              <button className="add-to-cart-btn">
                Añadir al Carrito
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-products">
          <p>No se encontraron productos con los filtros seleccionados.</p>
          <button className="btn-primary">Ver Todos los Productos</button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;