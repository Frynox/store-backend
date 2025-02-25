import { connectConversationUtils } from "../utils/T_productoCT_categoria.js";

export const conectProductCategory = async (req, res) => {
    console.log("Conectando productos y categorías con ID:", req.params.id);
    
    const id_categoria = req.params.id;
    
    try {
        const productos = await connectConversationUtils(id_categoria);

        if (!productos || productos.productosByCategoria.length === 0) {
            return res.status(404).json({ mensaje: "No hay productos en esta categoría" });
        }

        res.json({
            mensaje: "Categoría encontrada, disfrute la vista",
            productos
        });

    } catch (error) {
        console.error("Error al obtener productos por categoría:", error);
        res.status(500).json({ mensaje: "Error en el servidor", error });
    }
};
