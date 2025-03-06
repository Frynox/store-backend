import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const T_orden_detalle = sequelize.define('T_orden_detalle',{
    id_orden_detalle:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    id_orden:{
        type: DataTypes.INTEGER,

    },
    id_producto:{
        type:DataTypes.INTEGER,
    },
    quantity:{
        type: DataTypes.INTEGER,
    },
    price:{
        type:DataTypes.INTEGER,
    }


});
export default T_orden_detalle;