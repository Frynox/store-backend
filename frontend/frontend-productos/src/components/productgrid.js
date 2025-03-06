// src/components/ProductGrid.js
import React from "react";

const ProductGrid = ({ products }) => {
  if (!Array.isArray(products) || products.length === 0) {
    return <p>No hay productos disponibles.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <h3>{product.name || "Producto sin nombre"}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
