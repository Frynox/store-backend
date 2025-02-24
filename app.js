import express from 'express';
import sequelize  from './src/db/db.js';
import routerUsuarios from './src/routes/t_usuariosRoutes.js'
import routerProducto from './src/routes/t_productosRoutes.js'
import routerOrden from './src/routes/t_ordenRoutes.js'
import routerCategoria from './src/routes/t_categoriaRoutes.js'
import routerOrdenDEtalle from './src/routes/t_orden_detalleRoute.js'
import './src/models/T_usuario.js'
import './src/models/T_producto.js'
import './src/models/T_orden.js'
import './src/models/T_categoria.js'
import './src/models/T_orden_detalle.js'


const app = express();
const Port = 3000; 

app.use(express.json());

app.listen(Port,()=>{
    // Hacer un trycatch por si la conexión da error
    console.log('they are listening on ', Port);
    sequelize.authenticate()
    sequelize.sync()
    console.log('seconecto la bsae de datos')
});

app.use(routerUsuarios);
app.use(routerProducto);
app.use(routerOrden);
app.use(routerCategoria);
app.use(routerOrdenDEtalle);