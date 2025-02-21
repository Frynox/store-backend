import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const T_orden = sequelize.define('T_orden',{
    id_orden:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    id_usuario:{
        type: DataTypes.INTEGER,

    },
    total:{
        type:DataTypes.INTEGER
    },

    status:{
        type:DataTypes.ENUM("pendiente","pagado","enviado","cancelado"),
        defaultValue: "cancelado"
        
    }


});

export default T_orden;