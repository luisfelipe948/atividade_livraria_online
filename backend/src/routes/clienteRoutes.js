import { Router } from "express";
import clientesController from "../controllers/clienteController.js";

const router = Router();

router.get("/",    (req, res) => clientesController.showClientes(req, res));
router.get("/:id", (req, res) => clientesController.getClienteById(req, res));
router.post("/",   (req, res) => clientesController.createCliente(req, res));
router.put("/:id", (req, res) => clientesController.updateCliente(req, res));
router.delete("/:id", (req, res) => clientesController.deleteCliente(req, res));

export default router;