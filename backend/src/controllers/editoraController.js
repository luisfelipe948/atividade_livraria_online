import editorasModel from "../models/editoraModel.js";

class EditorasController {
  async showEditoras(req, res) {
    try {
      const editoras = await editorasModel.showEditoras();
      res.json(editoras);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getEditoraById(req, res) {
    try {
      const { id } = req.params;
      const editora = await editorasModel.getEditoraById(id);
      if (editora.length === 0) {
        return res.status(404).json({ message: "Editora não encontrada." });
      }
      res.json(editora[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createEditora(req, res) {
    try {
      const result = await editorasModel.createEditora(req.body);
      res.status(201).json({ message: "Editora criada com sucesso.", id: result.insertId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateEditora(req, res) {
    try {
      const { id } = req.params;
      await editorasModel.updateEditora(id, req.body);
      res.json({ message: "Editora atualizada com sucesso." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteEditora(req, res) {
    try {
      const { id } = req.params;
      await editorasModel.deleteEditora(id);
      res.json({ message: "Editora deletada com sucesso." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new EditorasController();