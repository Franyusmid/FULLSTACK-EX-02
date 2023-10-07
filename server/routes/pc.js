import express from "express";
import pcController from "./../controllers/pcController.js";

const router = express.Router();

// OBTENER TODOS LOS CARROS
router.get("/", pcController.readAll);

export default router;
