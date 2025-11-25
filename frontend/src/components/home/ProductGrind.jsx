import './ProductGrid.css';
import { products } from '../../data/ProductData';

// Datos de ejemplo - luego vendrán de una API


const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <div className="product-image">
            <img src={product.image} alt="Peluches Yakky" className="placeholder-image" />
          </div>
          <div className="product-info">
            <h3>{product.name}</h3>
            <p className="product-category">{product.category}</p>
            <p className="product-price">${product.price}</p>
            <button className="add-to-cart-btn">
              Añadir al Carrito
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;