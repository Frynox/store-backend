import { GetAllProducto } from "../services/t_productosServices.js";

export const connectConversationUtils = async (id_categoria) => {
    try {
        const productosByCategoria = await GetAllProducto({ id_categoria });

        return { mensaje: "Categoría encontrada, disfrute la vista", productosByCategoria };

    } catch (error) {
        console.error("Error en connectConversationUtils:", error);
        throw error;
    }
};
