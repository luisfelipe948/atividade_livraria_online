import express from "express";
import cors from "cors";
import "dotenv/config";

import clienteRoutes   from "./src/routes/clienteRoutes.js";
import categoriaRoutes from "./src/routes/categoriaRoutes.js";
import editoraRoutes   from "./src/routes/editoraRoutes.js";
import livroRoutes     from "./src/routes/livroRoutes.js";
import compraRoutes    from "./src/routes/compraRoutes.js";

const app  = express();
const PORT = process.env.PORT || 3001 ;

app.use(cors());
app.use(express.json());

app.use("/clientes",   clienteRoutes);
app.use("/categorias", categoriaRoutes);
app.use("/editoras",   editoraRoutes);
app.use("/livros",     livroRoutes);
app.use("/compras",    compraRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
}); 