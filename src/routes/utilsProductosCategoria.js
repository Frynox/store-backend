import { Router } from "express";
import { conectProductCategory } from "../controllers/utilsProductosCategoriaController.js";

const router = Router();


router.get("/productosPorCategoria/:id", conectProductCategory);

export default router;