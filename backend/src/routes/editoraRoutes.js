import { Router } from "express";
import editorasController from "../controllers/editoraController.js";

const router = Router();

router.get("/",    (req, res) => editorasController.showEditoras(req, res));
router.get("/:id", (req, res) => editorasController.getEditoraById(req, res));
router.post("/",   (req, res) => editorasController.createEditora(req, res));
router.put("/:id", (req, res) => editorasController.updateEditora(req, res));
router.delete("/:id", (req, res) => editorasController.deleteEditora(req, res));

export default router;