import express from "express";
import compraController from "../controller/compraController.js";

const routeCompra = express.Router();

routeCompra.get("/", compraController.listarCompras);
routeCompra.get("/:id", compraController.buscarCompraPorId);
routeCompra.post("/", compraController.criarCompra);
routeCompra.put("/:id", compraController.atualizarCompra);
routeCompra.delete("/:id", compraController.deletarCompra);

export default routeCompra;
