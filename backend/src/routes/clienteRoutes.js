import express from "express";
import clienteController from "../controller/clienteController.js";

const routeCliente = express.Router();

routeCliente.get("/", clienteController.getAllClientes);
routeCliente.post("/", clienteController.storeCliente);
routeCliente.put("/:id", clienteController.updateClienteById);
routeCliente.delete("/:id", clienteController.removeCliente);

export default routeCliente;