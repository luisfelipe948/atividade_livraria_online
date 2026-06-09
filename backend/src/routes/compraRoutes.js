import { Router } from "express";
import comprasController from "../controllers/compraController.js";

const router = Router();

router.get("/",    (req, res) => comprasController.showCompras(req, res));
router.get("/:id", (req, res) => comprasController.getCompraById(req, res));
router.post("/",   (req, res) => comprasController.createCompra(req, res));
router.put("/:id", (req, res) => comprasController.updateCompra(req, res));
router.delete("/:id", (req, res) => comprasController.deleteCompra(req, res));

export default router;