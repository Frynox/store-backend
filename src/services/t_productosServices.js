import T_producto from "../models/T_producto.js";

export const createProducto = async (data)=>{
   
    const Producto = await T_producto.create(data)
    console.log(Producto,"este es en service")
    
    if(Producto){
        return{
            status: 201,
            Producto
        }
    }else {
        return {
            status: 400,
            data: null
        }
    }
};

export const GetAllProducto = async (filterParams)=>{
    const allProducto = await T_producto.findAll({where: filterParams})
     if(allProducto){
        return{
            status: 201,
            allProducto
        }
    }else {
        return {
            status: 400,
            data: null
        }
    }
};

export const getProductoByIdService = async (id)=>{
    const ProductoFound = await T_producto.findByPk(id);
    if(ProductoFound){
        return{
            status: 201,
            ProductoFound,
        }
    }else{
        return {
            status: 400,
            data: null
        }
    }
};

export const putProductoService = async(id,data)=>{
    const ProductoFound = await T_producto.findByPk(id)
    const updateProducto = ProductoFound

    if(ProductoFound){
        for(const params in data){
            updateProducto[params] = data[params]
        }
        const updateProduct = await ProductoFound.save(updateProducto)
        return ("conseguio y actualizado",data)

    }else{
        return {
            status: 400,
            data: null
        }
    }
};