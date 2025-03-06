import { createOrden, GetAllOrden, getOrdenByIdService, putOrdenService } from "../services/t_ordenServices.js";

export const postOrdenController = async(req,res)=>{
    console.log(req.body,"controller")
    const data = req.body;
    const respuesta = await createOrden(data)
    res.json({mensaje: " listo postiao mano ", respuesta});

}
export const getAllOrdenController = async(req,res)=>{
    const params = req.query 
    const respuesta = await GetAllOrden(params)
    console.log(respuesta)
    res.json({mensaje: "obtenido todos los Ordenes mano", respuesta})
}


export const getOrdenByIdcontroller = async(req,res)=>{
    console.log(req.params)
    const id = req.params.id;
    const respuesta = await getOrdenByIdService(id)
    res.json({mensaje: "esto ya esta hecho mano ", respuesta})


}

export const putOrdenController = async(req,res)=>{
    const id= req.params.id
    const data= req.body
    const respuesta = await putOrdenService(id,data)
    res.json({mensaje: "actualizaaooo mano", respuesta})

}