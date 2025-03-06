import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const T_producto = sequelize.define('T_producto',{
    id_producto:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    name:{
        type: DataTypes.STRING,

    },
    description:{
        type:DataTypes.STRING
    },
    price:{
        type:DataTypes.STRING
    },
    stock:{
        type:DataTypes.STRING
    },
    id_categoria:{
        type:DataTypes.INTEGER
    }


});

export default T_producto