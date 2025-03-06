import { createUsuario,getUsuarioByIdService,GetAllUsuario,putUsuarioService } from "../services/t_usuariosServices.js";

export const postUsuarioController = async(req,res)=>{
    console.log(req.body,"controller")
    const data = req.body;
    const respuesta = await createUsuario(data)
    res.json({mensaje: " listo postiao mano ", respuesta});

}
export const getAllUsuarioController = async(req,res)=>{
    const params = req.query 
    const respuesta = await GetAllUsuario(params)
    console.log(respuesta)
    res.json({mensaje: "obtenido todos los usuarios mano", respuesta})
}


export const getUsuarioByIdcontroller = async(req,res)=>{
    console.log(req.params)
    const id = req.params.id;
    const respuesta = await getUsuarioByIdService(id)
    res.json({mensaje: "esto ya esta hecho mano ", respuesta})


}

export const putUsuarioController = async(req,res)=>{
    const id= req.params.id
    const data= req.body
    const respuesta = await putUsuarioService(id,data)
    res.json({mensaje: "actualizaaooo mano", respuesta})

}