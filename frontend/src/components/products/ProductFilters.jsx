import React from 'react';
import './ProductFilters.css';

const ProductFilters = ({ filters, setFilters }) => {
  const categories = [
    'Animales del Bosque',
    'Criaturas Mágicas',
    'Aves',
    'Marinos',
    'Personalizados'
  ];

  const materials = [
    'Algodón Orgánico',
    'Lana Merino',
    'Lino',
    'Madera de Cerezo',
    'Madera de Nogal',
    'Mezclas Especiales'
  ];

  const priceRanges = [
    { label: 'Menos de $30', value: '0-30' },
    { label: '$30 - $60', value: '30-60' },
    { label: '$60 - $100', value: '60-100' },
    { label: 'Más de $100', value: '100+' }
  ];

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value === prev[filterType] ? '' : value
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      priceRange: '',
      material: ''
    });
  };

  return (
    <div className="product-filters">
      <div className="filters-header">
        <h3>Filtrar Productos</h3>
        <button 
          className="clear-filters-btn"
          onClick={clearFilters}
        >
          Limpiar
        </button>
      </div>

      {/* Filtro por Categoría */}
      <div className="filter-group">
        <h4>Categoría</h4>
        <div className="filter-options">
          {categories.map(category => (
            <label key={category} className="filter-option">
              <input
                type="radio"
                name="category"
                checked={filters.category === category}
                onChange={() => handleFilterChange('category', category)}
              />
              <span className="checkmark"></span>
              {category}
            </label>
          ))}
        </div>
      </div>

      {/* Filtro por Precio */}
      <div className="filter-group">
        <h4>Rango de Precio</h4>
        <div className="filter-options">
          {priceRanges.map(range => (
            <label key={range.value} className="filter-option">
              <input
                type="radio"
                name="priceRange"
                checked={filters.priceRange === range.value}
                onChange={() => handleFilterChange('priceRange', range.value)}
              />
              <span className="checkmark"></span>
              {range.label}
            </label>
          ))}
        </div>
      </div>

      {/* Filtro por Material */}
      <div className="filter-group">
        <h4>Material</h4>
        <div className="filter-options">
          {materials.map(material => (
            <label key={material} className="filter-option">
              <input
                type="radio"
                name="material"
                checked={filters.material === material}
                onChange={() => handleFilterChange('material', material)}
              />
              <span className="checkmark"></span>
              {material}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;