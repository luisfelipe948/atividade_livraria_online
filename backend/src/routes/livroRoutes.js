import express from "express";
import livroController from "../controller/livroController.js";

const routeLivro = express.Router();

routeLivro.get("/", livroController.listarLivros);
routeLivro.get("/:id", livroController.buscarLivroPorId);
routeLivro.post("/", livroController.criarLivro);
routeLivro.put("/:id", livroController.atualizarLivro);
routeLivro.delete("/:id", livroController.deletarLivro);

export default routeLivro;
