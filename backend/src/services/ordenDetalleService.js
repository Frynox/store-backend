import T_orden_detalle from "../models/T_orden_detalle.js";
import T_producto from "../models/T_producto.js";

export const GetOrdenDetalles = async (id_orden) => {
    try {
        const detalles = await T_orden_detalle.findAll({
            where: { id_orden },
            include: [{
                model: T_producto,
                attributes: ["name", "price"]
            }]
        });

        const detallesConTotal = detalles.map(detalle => ({
            id_orden_detalle: detalle.id_orden_detalle,
            id_orden: detalle.id_orden,
            id_producto: detalle.id_producto,
            nombre_producto: detalle.T_producto.name,
            quantity: detalle.quantity,
            precio_unitario: detalle.T_producto.price,
            precio_total: detalle.quantity * detalle.T_producto.price
        }));

        return detallesConTotal;
    } catch (error) {
        console.error("Error en GetOrdenDetalles:", error);
        throw error;
    }
};


// Función para obtener productos por IDs
export const GetProductosPorIds = async (idsProductos) => {
    try {
        return await T_producto.findAll({
            where: { id_producto: idsProductos },
            attributes: ["id_producto", "name", "price"] // Solo tomamos lo necesario
        });
    } catch (error) {
        console.error("Error en GetProductosPorIds:", error);
        throw error;
    }
};
