
import { Router } from "express";
import { getAllProductoController, getProductoByIdcontroller, postProductoController, putProductoController } from "../controllers/t_productosControllers.js";
const router = Router();

router.post("/producto", postProductoController );
router.get("/producto", getAllProductoController);
router.get("/producto/:id", getProductoByIdcontroller);
router.put("/producto/:id", putProductoController);


export default router;
