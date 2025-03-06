import React, { useState } from "react";
import Header from "./components/Header.js";
import ProductSearch from "./components/productSearch.js";
import ProductGrid from "./components/productgrid.js";
import OrderForm from "./components/orderForm.js";
import "./styles/app.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [orderResponse, setOrderResponse] = useState(null);

  return (
    <div className="container">
      <Header />
      <div className="main-layout">
        {/* Primera Fila: Formularios */}
        <div className="grid-item">
          <ProductSearch setProducts={setProducts} />
        </div>
        <div className="grid-item">
          <OrderForm setOrderResponse={setOrderResponse} />
        </div>

        {/* Segunda Fila: Resultados */}
        <div className="grid-item">
          <ProductGrid products={products} />
        </div>
        <div className="grid-item">
          {orderResponse && (
            <section className="order-summary">
              <h3>Resumen de Orden</h3>
              {orderResponse.detalles.map((item, index) => (
                <div key={index} className="order-item">
                  <p>
                    <strong>{item.nombre_producto}</strong>: {item.quantity} x ${item.precio_unitario} = <strong>${item.precio_total}</strong>
                  </p>
                </div>
              ))}
              <h3>Total General: <strong>${orderResponse.totalGeneral}</strong></h3>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;