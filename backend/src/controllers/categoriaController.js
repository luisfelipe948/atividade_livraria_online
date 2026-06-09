import categoriasModel from "../models/categoriaModel.js";

class CategoriasController {
  async showCategorias(req, res) {
    try {
      const categorias = await categoriasModel.showCategorias();
      res.json(categorias);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCategoriaById(req, res) {
    try {
      const { id } = req.params;
      const categoria = await categoriasModel.getCategoriaById(id);
      if (categoria.length === 0) {
        return res.status(404).json({ message: "Categoria não encontrada." });
      }
      res.json(categoria[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createCategoria(req, res) {
    try {
      const result = await categoriasModel.createCategoria(req.body);
      res.status(201).json({ message: "Categoria criada com sucesso.", id: result.insertId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCategoria(req, res) {
    try {
      const { id } = req.params;
      await categoriasModel.updateCategoria(id, req.body);
      res.json({ message: "Categoria atualizada com sucesso." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCategoria(req, res) {
    try {
      const { id } = req.params;
      await categoriasModel.deleteCategoria(id);
      res.json({ message: "Categoria deletada com sucesso." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new CategoriasController();