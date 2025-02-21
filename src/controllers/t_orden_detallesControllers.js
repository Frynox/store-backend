import { createOrdenDetalle, GetAllOrdenDetalle, getOrdenDetalleByIdService, putOrdenDetalleService } from "../services/t_orden_detalleService.js";

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

}