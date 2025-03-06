import T_orden_detalle from "../models/T_orden_detalle.js";

export const createOrdenDetalle = async (data)=>{
   
    const OrdenDetalle = await T_orden_detalle.create(data)
    console.log(OrdenDetalle,"este es en service")
    
    if(OrdenDetalle){
        return{
            status: 201,
            OrdenDetalle
        }
    }else {
        return {
            status: 400,
            data: null
        }
    }
};

export const GetAllOrdenDetalle = async (filterParams)=>{
    const allOrdenDetalle = await T_orden_detalle.findAll({where: filterParams})
     if(allOrdenDetalle){
        return{
            status: 201,
            allOrdenDetalle
        }
    }else {
        return {
            status: 400,
            data: null
        }
    }
};

export const getOrdenDetalleByIdService = async (id)=>{
    const OrdenDetalleFound = await T_orden_detalle.findByPk(id);
    if(OrdenDetalleFound){
        return{
            status: 201,
            OrdenDetalleFound,
        }
    }else{
        return {
            status: 400,
            data: null
        }
    }
};

export const putOrdenDetalleService = async(id,data)=>{
    const OrdenDetalleFound = await T_orden_detalle.findByPk(id)
    const updateOrdenDetalle = OrdenDetalleFound

    if(OrdenDetalleFound){
        for(const params in data){
            updateOrdenDetalle[params] = data[params]
        }
        const updateOrderDetails = await OrdenDetalleFound.save(updateOrdenDetalle)
        return ("conseguio y actualizado",data)

    }else{
        return {
            status: 400,
            data: null
        }
    }
};