import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// IMPORTANDO AS ROTAS
// import routeClientes from "./src/routes/clienteRoutes.js";
// import routeCategoria from "./src/routes/categoriaRoutes.js";
// import routeEditora from "./src/routes/editoraRoutes.js";
// import routeCompra from "./src/routes/compraRoutes.js";
// import routeLivro from "./src/routes/livroRoutes.js";


// CARREGAR AS VARIAVEIS DE AMBIENTE
dotenv.config()

// GARANTINDO QUE O SERVIDOR TENHA PORTA MESMO QUE NÃO ESTEJA DEFINIDO NO .ENV
const PORT = process.env.PORT || 3000; 

const app = express();

app.use(express.json());
app.use(cors());


// REGISTRANDO AS ROTAS
// app.use("/cliente", routeClientes);
// app.use("/categoria", routeCategoria);
// app.use("/compra", routeCompra);
// app.use("/editora", routeEditora);
// app.use("/livro", routeLivro);


app.listen(PORT, () => {
    return console.log(`Servidor rodando http://localhost:${PORT}`);
  });
  