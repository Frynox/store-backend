import T_orden from "../models/T_orden.js";
export const createOrden = async (data)=>{
   
    const Orden = await T_orden.create(data)
    console.log(Orden,"este es en service")
    
    if(Orden){
        return{
            status: 201,
            Orden
        }
    }else {
        return {
            status: 400,
            data: null
        }
    }
};

export const GetAllOrden = async (filterParams)=>{
    const allOrden = await T_orden.findAll({where: filterParams})
     if(allOrden){
        return{
            status: 201,
            allOrden
        }
    }else {
        return {
            status: 400,
            data: null
        }
    }
};

export const getOrdenByIdService = async (id)=>{
    const OrdenFound = await T_orden.findByPk(id);
    if(OrdenFound){
        return{
            status: 201,
            OrdenFound,
        }
    }else{
        return {
            status: 400,
            data: null
        }
    }
};

export const putOrdenService = async(id,data)=>{
    const OrdenFound = await T_orden.findByPk(id)
    const updateOrden = OrdenFound

    if(OrdenFound){
        for(const params in data){
            updateOrden[params] = data[params]
        }
        const updateOrder = await OrdenFound.save(updateOrden)
        return ("conseguio y actualizado",data)

    }else{
        return {
            status: 400,
            data: null
        }
    }
};