import express from "express";
import categoriaController from "../controller/categoriaController.js";

const routeCategoria = express.Router();

routeCategoria.get("/", categoriaController.listarCategorias);
routeCategoria.get("/:id", categoriaController.buscarCategoriaPorId);
routeCategoria.post("/", categoriaController.criarCategoria);
routeCategoria.put("/:id", categoriaController.atualizarCategoria);
routeCategoria.delete("/:id", categoriaController.deletarCategoria);

export default routeCategoria;
