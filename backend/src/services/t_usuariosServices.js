import T_usuario from "../models/T_usuario.js";

export const createUsuario = async (data)=>{
   
    const usuario = await T_usuario.create(data)
    console.log(usuario,"este es en service")
    
    if(usuario){
        return{
            status: 201,
            usuario
        }
    }else {
        return {
            status: 400,
            data: null
        }
    }
};

export const GetAllUsuario = async (filterParams)=>{
    const allUsuario = await T_usuario.findAll({where: filterParams})
     if(allUsuario){
        return{
            status: 201,
            allUsuario
        }
    }else {
        return {
            status: 400,
            data: null
        }
    }
};

export const getUsuarioByIdService = async (id)=>{
    const usuarioFound = await T_usuario.findByPk(id);
    if(usuarioFound){
        return{
            status: 201,
            usuarioFound,
        }
    }else{
        return {
            status: 400,
            data: null
        }
    }
};

export const putUsuarioService = async(id,data)=>{
    const usuarioFound = await T_usuario.findByPk(id)
    const updateUsuario = usuarioFound

    if(usuarioFound){
        for(const params in data){
            updateUsuario[params] = data[params]
        }
        const updateUser = await usuarioFound.save(updateUsuario)
        return ("conseguio y actualizado",data)

    }else{
        return {
            status: 400,
            data: null
        }
    }
};