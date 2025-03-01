import { useState, useEffect } from "react";
import axios from "axios";

export default function CategoryProducts() {
    const [productos, setProductos] = useState([]);
    const [categoria, setCategoria] = useState("1");

    useEffect(() => {
        fetchProductos();
    }, [categoria]);

    const fetchProductos = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/productosPorCategoria/${categoria}`);
            setProductos(response.data.productos.productosByCategoria);
        } catch (error) {
            console.error("Error al obtener productos por categoría:", error);
            setProductos([]);
        }
    };

    return (
        <div className="p-6">
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Selecciona una Categoría:</label>
                <select
                    className="border p-3 rounded w-full"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                >
                    <option value="1">Categoría 1</option>
                    <option value="2">Categoría 2</option>
                    <option value="3">Categoría 3</option>
                </select>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-3">Lista de Productos</h3>
                {productos.length > 0 ? (
                    <ul className="space-y-2">
                        {productos.map((producto, index) => (
                            <li key={index} className="bg-white p-3 rounded shadow flex justify-between items-center">
                                <span className="font-medium text-gray-700">{producto.name}</span>
                                <span className="text-sm text-gray-500">Disponible</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No hay productos en esta categoría.</p>
                )}
            </div>
        </div>
    );
}
