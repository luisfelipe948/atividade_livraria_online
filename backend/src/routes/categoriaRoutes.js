import { Router } from "express";
import categoriasController from "../controllers/categoriaController.js";

const router = Router();

router.get("/",    (req, res) => categoriasController.showCategorias(req, res));
router.get("/:id", (req, res) => categoriasController.getCategoriaById(req, res));
router.post("/",   (req, res) => categoriasController.createCategoria(req, res));
router.put("/:id", (req, res) => categoriasController.updateCategoria(req, res));
router.delete("/:id", (req, res) => categoriasController.deleteCategoria(req, res));

export default router;