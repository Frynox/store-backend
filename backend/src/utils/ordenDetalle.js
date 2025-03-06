import { GetOrdenDetalles, GetProductosPorIds } from "../services/ordenDetalleService.js";

export const getOrdenDetallesUtils = async (id_orden) => {
    try {
        const detalles = await GetOrdenDetalles(id_orden);

        if (!detalles.length) {
            return { mensaje: "No hay detalles para esta orden", detalles: [] };
        }

        return { mensaje: "Detalles de orden obtenidos", detalles };
    } catch (error) {
        console.error("Error en getOrdenDetallesUtils:", error);
        throw error;
    }
};


export const calcularTotalOrdenUtils = async (productos) => {
    try {
        // Extraer solo los IDs de los productos
        const idsProductos = productos.map(p => p.id_producto);

        // Obtener información de los productos desde la BD
        const productosBD = await GetProductosPorIds(idsProductos);

        if (productosBD.length === 0) {
            return { mensaje: "No se encontraron productos con los IDs proporcionados", detalles: [] };
        }

        // Crear un array con la información consolidada
        const resultado = productos.map(item => {
            const productoBD = productosBD.find(p => p.id_producto === item.id_producto);

            if (!productoBD) return null; // Si el producto no existe en BD, se omite

            return {
                id_producto: item.id_producto,
                nombre_producto: productoBD.name,
                quantity: item.quantity,
                precio_unitario: parseFloat(productoBD.price), // Convertimos a número
                precio_total: item.quantity * parseFloat(productoBD.price)
            };
        }).filter(Boolean); // Eliminamos productos nulos

        // Calcular el precio total de la orden
        const totalGeneral = resultado.reduce((acc, prod) => acc + prod.precio_total, 0);

        return { detalles: resultado, totalGeneral };

    } catch (error) {
        console.error("Error en calcularTotalOrdenUtils:", error);
        throw error;
    }
};

