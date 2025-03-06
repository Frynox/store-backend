import React, { useState } from "react";
import { createOrder } from "../services/api.js";

const OrderForm = ({ setOrderResponse }) => {
  const [orderDetail, setOrderDetail] = useState({
    id_orden: "",
    id_producto: "",
    quantity: "",
  });

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    
    if (!orderDetail.id_orden || !orderDetail.id_producto || !orderDetail.quantity) {
      console.error("Faltan datos en la orden");
      return;
    }

    try {
      const response = await createOrder({ productos: [{ 
        id_orden: parseInt(orderDetail.id_orden, 10), 
        id_producto: parseInt(orderDetail.id_producto, 10), 
        quantity: parseInt(orderDetail.quantity, 10)
      }]});
      
      setOrderResponse(response.totalOrden);
    } catch (error) {
      console.error("Error al enviar la orden:", error);
    }
  };

  return (
    <section className="order-form">
      <h2>Crear Orden</h2>
      <form onSubmit={handleOrderSubmit}>
        <input
          type="number"
          placeholder="ID Orden"
          value={orderDetail.id_orden}
          onChange={(e) => setOrderDetail({ ...orderDetail, id_orden: e.target.value })}
        />
        <input
          type="number"
          placeholder="ID Producto"
          value={orderDetail.id_producto}
          onChange={(e) => setOrderDetail({ ...orderDetail, id_producto: e.target.value })}
        />
        <input
          type="number"
          placeholder="Cantidad"
          value={orderDetail.quantity}
          onChange={(e) => setOrderDetail({ ...orderDetail, quantity: e.target.value })}
        />
        <button type="submit">Crear Orden</button>
      </form>
    </section>
  );
};

export default OrderForm;
