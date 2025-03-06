import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const T_usuario = sequelize.define('t_usuario',{
    id_usuario:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING,
        
    },
    email:{
        type: DataTypes.STRING,
    },
    password:{
        type:DataTypes.STRING,
    },
    rol:{
        type: DataTypes.ENUM("admin","client"),
        defaultValue: "client"

    }

});
export default T_usuario;