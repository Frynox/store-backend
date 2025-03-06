import React, { useState } from "react";
import { getProductsByCategory } from "../services/api";

const ProductSearch = ({ setProducts }) => {
  const [categoryId, setCategoryId] = useState("");

  const fetchProducts = async (e) => {
    e.preventDefault();
    if (!categoryId) return;
    try {
      const data = await getProductsByCategory(parseInt(categoryId, 10)); 
      console.log("Datos recibidos del backend:", data);
  
      // Accedemos correctamente a productosByCategoria
      if (data.productos && data.productos.productosByCategoria && Array.isArray(data.productos.productosByCategoria)) {
        // Filtramos los productos vacíos antes de enviarlos al estado
        const filteredProducts = data.productos.productosByCategoria.filter(p => p.name);
        setProducts(filteredProducts);
      } else {
        console.error("Error: productosByCategoria no está definido o no es un array", data);
        setProducts([]); // Evitar errores
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    }
  };
  
  
  return (
    <section className="search-section">
      <h2>Buscar categoría</h2>
      <form onSubmit={fetchProducts}>
        <input
          type="number"
          placeholder="Ingrese ID de categoría"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
    </section>
  );
};

export default ProductSearch;