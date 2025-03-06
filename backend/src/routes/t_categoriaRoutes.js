
import { Router } from "express";
import { getAllCategoriaController, getCategoriaByIdcontroller, postCategoriaController, putCategoriaController } from "../controllers/t_categoriaControllers.js";
const router = Router();

router.post("/categoria", postCategoriaController );
router.get("/categoria", getAllCategoriaController );
router.get("/categoria/:id", getCategoriaByIdcontroller );
router.put("/categoria/:id", putCategoriaController );


export default router;
