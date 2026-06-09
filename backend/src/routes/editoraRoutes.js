import express from "express";
import editoraController from "../controller/editoraController.js";

const routeEditora = express.Router();

routeEditora.get("/", editoraController.listarEditoras);
routeEditora.get("/:id", editoraController.buscarEditoraPorId);
routeEditora.post("/", editoraController.criarEditora);
routeEditora.put("/:id", editoraController.atualizarEditora);
routeEditora.delete("/:id", editoraController.deletarEditora);

export default routeEditora;
