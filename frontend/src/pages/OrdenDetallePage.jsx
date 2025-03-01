import { useState } from "react";
import ProductOrderForm from "../components/ProductOrderForm.jsx";
import OrderSummary from "../components/orderSumary.jsx";

export default function OrdenDetallePage() {
    const [orderData, setOrderData] = useState(null);

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Orden de Compra</h2>
            <ProductOrderForm setOrderData={setOrderData} />
            <OrderSummary orderData={orderData} />
        </div>
    );
}
