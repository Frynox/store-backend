import { Router } from "express";
import { getAllUsuarioController, getUsuarioByIdcontroller, postUsuarioController, putUsuarioController } from "../controllers/t_usuariosControllers.js";
const router = Router();

router.post("/usuario", postUsuarioController);
router.get("/usuario", getAllUsuarioController);
router.get("/usuario/:id",getUsuarioByIdcontroller);
router.put("/usuario/:id",putUsuarioController);


export default router;