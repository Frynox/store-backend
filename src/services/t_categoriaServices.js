import T_categoria from '../models/T_categoria.js'

export const createCategoria = async (data)=>{
   
    const categoria = await T_categoria.create(data)
    console.log(categoria,"este es en service")
    
    if(categoria){
        return{
            status: 201,
            categoria
        }
    }else {
        return {
            status: 400,
            data: null
        }
    }
};

export const GetAllCategoria = async (filterParams)=>{
    const allcategoria = await T_categoria.findAll({where: filterParams})
     if(allcategoria){
        return{
            status: 201,
            allcategoria
        }
    }else {
        return {
            status: 400,
            data: null
        }
    }
};

export const getCategoriaByIdService = async (id)=>{
    const categoriaFound = await T_categoria.findByPk(id);
    if(categoriaFound){
        return{
            status: 201,
            categoriaFound,
        }
    }else{
        return {
            status: 400,
            data: null
        }
    }
};

export const putCategoriaService = async(id,data)=>{
    const categoriaFound = await T_categoria.findByPk(id)
    const updatecategoria = categoriaFound

    if(categoriaFound){
        for(const params in data){
            updatecategoria[params] = data[params]
        }
        const updateCategory = await categoriaFound.save(updatecategoria)
        return ("conseguio y actualizado",data)

    }else{
        return {
            status: 400,
            data: null
        }
    }
};