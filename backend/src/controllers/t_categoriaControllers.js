import { createCategoria, GetAllCategoria, getCategoriaByIdService, putCategoriaService } from "../services/t_categoriaServices.js";

export const postCategoriaController = async(req,res)=>{
    console.log(req.body,"controller")
    const data = req.body;
    const respuesta = await createCategoria(data)
    res.json({mensaje: " listo postiao mano ", respuesta});

}
export const getAllCategoriaController = async(req,res)=>{
    const params = req.query 
    const respuesta = await GetAllCategoria(params)
    console.log(respuesta)
    res.json({mensaje: "obtenido todos los Categorias mano", respuesta})
}


export const getCategoriaByIdcontroller = async(req,res)=>{
    console.log(req.params)
    const id = req.params.id;
    const respuesta = await getCategoriaByIdService(id)
    res.json({mensaje: "esto ya esta hecho mano ", respuesta})


}

export const putCategoriaController = async(req,res)=>{
    const id= req.params.id
    const data= req.body
    const respuesta = await putCategoriaService(id,data)
    res.json({mensaje: "actualizaaooo mano", respuesta})

}