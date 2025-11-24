import './ProductGrid.css';

// Datos de ejemplo - luego vendrán de una API
const products = [
  {
    id: 1,
    name: "Peluche León Majestuoso",
    price: 29.99,
    image: "🦁",
    category: "Animales"
  },
  {
    id: 2,
    name: "Unicornio Arcoíris",
    price: 34.99,
    image: "🦄",
    category: "Fantasía"
  },
  {
    id: 3,
    name: "Osito Panda Tierno",
    price: 24.99,
    image: "🐼",
    category: "Animales"
  },
  {
    id: 4,
    name: "Dragón Mágico",
    price: 39.99,
    image: "🐲",
    category: "Fantasía"
  }
];

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <div className="product-image">
            {product.image}
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