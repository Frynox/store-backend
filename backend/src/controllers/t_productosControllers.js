import { createProducto, GetAllProductos, getProductoByIdService, putProductoService } from "../services/t_productosServices.js";

export const postProductoController = async(req,res)=>{
    console.log(req.body,"controller")
    const data = req.body;
    const respuesta = await createProducto(data)
    res.json({mensaje: " listo postiao mano ", respuesta});

}
export const getAllProductoController = async(req,res)=>{
    const params = req.query 
    const respuesta = await GetAllProductos(params)
    console.log(respuesta)
    res.json({mensaje: "obtenido todos los Productos mano", respuesta})
}


export const getProductoByIdcontroller = async(req,res)=>{
    console.log(req.params)
    const id = req.params.id;
    const respuesta = await getProductoByIdService(id)
    res.json({mensaje: "esto ya esta hecho mano ", respuesta})


}

export const putProductoController = async(req,res)=>{
    const id= req.params.id
    const data= req.body
    const respuesta = await putProductoService(id,data)
    res.json({mensaje: "actualizaaooo mano", respuesta})

}