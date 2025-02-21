
import { Router } from "express";
import { getAllOrdenController, getOrdenByIdcontroller, postOrdenController, putOrdenController } from "../controllers/t_ordenControllers.js";
const router = Router();

router.post("/orden", postOrdenController );
router.get("/orden", getAllOrdenController);
router.get("/orden/:id", getOrdenByIdcontroller);
router.put("/orden/:id",putOrdenController);


export default router;
