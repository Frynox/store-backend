
import { Router } from "express";
import { getAllOrdenDetalleController, getOrdenDetalleByIdcontroller, postOrdenDetalleController, putOrdenDetalleController } from "../controllers/t_orden_detallesControllers.js";
const router = Router();

router.post("/ordenDetalle", postOrdenDetalleController)
router.get("/ordenDetalle", getAllOrdenDetalleController);
router.get("/ordenDetalle/:id", getOrdenDetalleByIdcontroller);
router.put("/ordenDetalle/:id",putOrdenDetalleController);


export default router;
