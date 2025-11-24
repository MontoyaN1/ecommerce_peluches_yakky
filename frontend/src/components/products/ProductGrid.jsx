import React from 'react';
import './ProductGrid.css';

// Datos de ejemplo ampliados para productos artesanales
const products = [
  {
    id: 1,
    name: "Oso Pardo Artesanal",
    price: 45.99,
    image: "🐻",
    category: "Animales del Bosque",
    material: "Algodón Orgánico",
    description: "Oso pardo elaborado con algodón orgánico y relleno natural"
  },
  {
    id: 2,
    name: "Búho Sabio de Madera",
    price: 62.50,
    image: "🦉",
    category: "Aves",
    material: "Madera de Cerezo",
    description: "Búho tallado en madera de cerezo con detalles artesanales"
  },
  {
    id: 3,
    name: "Unicornio Mágico",
    price: 55.00,
    image: "🦄",
    category: "Criaturas Mágicas",
    material: "Lana Merino",
    description: "Unicornio suave de lana merino con crin sedosa"
  },
  {
    id: 4,
    name: "Zorro del Bosque",
    price: 38.75,
    image: "🦊",
    category: "Animales del Bosque",
    material: "Mezclas Especiales",
    description: "Zorro astuto con cola esponjosa y detalles realistas"
  },
  {
    id: 5,
    name: "Ballena Azul",
    price: 52.00,
    image: "🐋",
    category: "Marinos",
    material: "Algodón Orgánico",
    description: "Ballena azul de algodón orgánico, perfecta para coleccionar"
  },
  {
    id: 6,
    name: "Conejo de Lino",
    price: 34.99,
    image: "🐰",
    category: "Animales del Bosque",
    material: "Lino",
    description: "Conejo elaborado con lino natural, suave y duradero"
  },
  {
    id: 7,
    name: "Dragón Legendario",
    price: 89.99,
    image: "🐲",
    category: "Criaturas Mágicas",
    material: "Madera de Nogal",
    description: "Dragón tallado en madera de nogal con alas detalladas"
  },
  {
    id: 8,
    name: "Pingüino Elegante",
    price: 41.25,
    image: "🐧",
    category: "Aves",
    material: "Lana Merino",
    description: "Pingüino de lana merino con detalles en contraste"
  },
  {
    id: 9,
    name: "Tortuga Marina",
    price: 36.50,
    image: "🐢",
    category: "Marinos",
    material: "Algodón Orgánico",
    description: "Tortuga marina con caparazón texturizado"
  },
  {
    id: 10,
    name: "Lobo Solitario",
    price: 67.80,
    image: "🐺",
    category: "Animales del Bosque",
    material: "Mezclas Especiales",
    description: "Lobo gris con pelaje texturizado y expresión realista"
  },
  {
    id: 11,
    name: "Fénix Renacido",
    price: 95.00,
    image: "🔥",
    category: "Criaturas Mágicas",
    material: "Madera de Cerezo",
    description: "Fénix tallado en madera con detalles dorados"
  },
  {
    id: 12,
    name: "Colibrí Vibrante",
    price: 29.99,
    image: "🐦",
    category: "Aves",
    material: "Lino",
    description: "Colibrí colorido con alas detalladas y pico fino"
  }
];

const ProductGrid = ({ filters }) => {
  const filteredProducts = products.filter(product => {
    if (filters.category && product.category !== filters.category) return false;
    if (filters.material && product.material !== filters.material) return false;
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-');
      if (max === '+') {
        if (product.price < parseInt(min)) return false;
      } else {
        if (product.price < parseInt(min) || product.price > parseInt(max)) return false;
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
              {product.image}
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