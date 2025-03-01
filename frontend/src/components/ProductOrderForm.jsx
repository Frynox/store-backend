import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function ProductOrderForm({ setOrderData }) {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    // Convertir datos a formato esperado por el backend
    const products = Object.keys(data).map((key) => ({
      id_producto: parseInt(key),
      quantity: parseInt(data[key]),
    })).filter(item => item.quantity > 0);

    try {
      const response = await axios.post("http://localhost:3000/ordenDetalleReal", {
        productos: products
      });

      setOrderData(response.data.totalOrden);
    } catch (error) {
      console.error("Error al enviar orden:", error);
    } finally {
      setLoading(false);
      reset(); // Reiniciar el formulario
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Ingresar Productos</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block mb-2">ID del Producto</label>
        <input
          type="number"
          placeholder="Ejemplo: 1"
          {...register("1")}
          className="border p-2 w-full mb-4"
        />
        
        <label className="block mb-2">Cantidad</label>
        <input
          type="number"
          placeholder="Ejemplo: 2"
          {...register("quantity")}
          className="border p-2 w-full mb-4"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Procesando..." : "Calcular Orden"}
        </button>
      </form>
    </div>
  );
}
