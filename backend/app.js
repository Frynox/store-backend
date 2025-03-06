import express from 'express';
import sequelize  from './src/db/db.js';
import cors from 'cors';
import routerUsuarios from './src/routes/t_usuariosRoutes.js'
import routerProducto from './src/routes/t_productosRoutes.js'
import routerOrden from './src/routes/t_ordenRoutes.js'
import routerCategoria from './src/routes/t_categoriaRoutes.js'
import routerOrdenDEtalle from './src/routes/t_orden_detalleRoute.js'
import routerUtilsProductByCategory from './src/routes/utilsProductosCategoria.js'
import './src/models/T_usuario.js'
import './src/models/T_producto.js'
import './src/models/T_orden.js'
import './src/models/T_categoria.js'
import './src/models/T_orden_detalle.js'
import path from "path";
import { fileURLToPath } from "url";


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const Port = process.env.PORT || 3000;

app.use(express.json());

app.listen(Port,()=>{
    console.log('they are listening on ', Port);
    sequelize.authenticate()
    sequelize.sync()
    console.log('the data base R online 4U :D')
});
app.use(cors());
app.use((req, res, next) => {
  if (req.params.id) {
    req.params.id = parseInt(req.params.id, 10);
  }
  next();
});

app.use(routerUsuarios);
app.use(routerProducto);
app.use(routerOrden);
app.use(routerCategoria);
app.use(routerOrdenDEtalle);
app.use(routerUtilsProductByCategory);
// Middleware para servir archivos estáticos desde la carpeta "build"
app.use(express.static(path.join(__dirname, "build")));

// Ruta para servir el frontend en cualquier URL
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
