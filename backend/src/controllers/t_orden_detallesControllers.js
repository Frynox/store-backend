import { createOrdenDetalle, GetAllOrdenDetalle, getOrdenDetalleByIdService, putOrdenDetalleService } from "../services/t_orden_detalleService.js";
import { calcularTotalOrdenUtils, getOrdenDetallesUtils } from "../utils/ordenDetalle.js";

export const postOrdenDetalleController = async(req,res)=>{
    console.log(req.body,"controller")
    const data = req.body;
    const respuesta = await createOrdenDetalle(data)
    res.json({mensaje: " listo postiao mano ", respuesta});

}
export const getAllOrdenDetalleController = async(req,res)=>{
    const params = req.query 
    const respuesta = await GetAllOrdenDetalle(params)
    console.log(respuesta)
    res.json({mensaje: "obtenido todos los OrdenDetallees mano", respuesta})
}


export const getOrdenDetalleByIdcontroller = async(req,res)=>{
    console.log(req.params)
    const id = req.params.id;
    const respuesta = await getOrdenDetalleByIdService(id)
    res.json({mensaje: "esto ya esta hecho mano ", respuesta})


}

export const putOrdenDetalleController = async(req,res)=>{
    const id= req.params.id
    const data= req.body
    const respuesta = await putOrdenDetalleService(id,data)
    res.json({mensaje: "actualizaaooo mano", respuesta})

};

export const getOrdenDetallesController = async (req, res) => {
    console.log("Obteniendo detalles de orden para ID:", req.body.id_orden);

    const { id_orden } = req.body;

    if (!id_orden) {
        return res.status(400).json({ mensaje: "El id_orden es requerido en el body" });
    }

    try {
        const detalles = await getOrdenDetallesUtils(id_orden);

        if (!detalles.detalles.length) {
            return res.status(404).json({ mensaje: "No hay detalles para esta orden" });
        }

        res.json(detalles);

    } catch (error) {
        console.error("Error en getOrdenDetallesController:", error);
        res.status(500).json({ mensaje: "Error en el servidor", error });
    }
};

export const calcularTotalOrdenController = async (req, res) => {
    console.log("Recibiendo orden con productos:", req.body);

    const { productos } = req.body; // Recibimos un array de productos en el body

    if (!productos || !Array.isArray(productos) || productos.length === 0) {
        return res.status(400).json({ mensaje: "Se requiere una lista de productos en el body" });
    }

    try {
        const totalOrden = await calcularTotalOrdenUtils(productos);
        res.json({ mensaje: "Cálculo exitoso", totalOrden });

    } catch (error) {
        console.error("Error en calcularTotalOrdenController:", error);
        res.status(500).json({ mensaje: "Error en el servidor", error });
    }
};

