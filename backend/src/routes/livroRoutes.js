import { Router } from "express";
import livrosController from "../controllers/livroController.js";

const router = Router();

router.get("/",    (req, res) => livrosController.showLivros(req, res));
router.get("/:id", (req, res) => livrosController.getLivroById(req, res));
router.post("/",   (req, res) => livrosController.createLivro(req, res));
router.put("/:id", (req, res) => livrosController.updateLivro(req, res));
router.delete("/:id", (req, res) => livrosController.deleteLivro(req, res));

export default router;