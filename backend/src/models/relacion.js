import T_producto from "./T_producto.js";
import T_orden_detalle from "./T_orden_detalle.js";

// Un detalle de orden pertenece a un producto
T_orden_detalle.belongsTo(T_producto, { foreignKey: "id_producto" });

// Un producto puede estar en múltiples detalles de orden
T_producto.hasMany(T_orden_detalle, { foreignKey: "id_producto" });

export { T_producto, T_orden_detalle };
