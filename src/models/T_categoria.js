import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const T_categoria = sequelize.define('T_categoria',{
    id_categoria:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    name:{
        type: DataTypes.STRING,

    },
    description:{
        type:DataTypes.STRING
    }


});
export default T_categoria;