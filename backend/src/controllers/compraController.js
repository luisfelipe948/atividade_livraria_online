import comprasModel from "../models/compraModel.js";

class ComprasController {
  async showCompras(req, res) {
    try {
      const compras = await comprasModel.showCompras();
      res.json(compras);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCompraById(req, res) {
    try {
      const { id } = req.params;
      const compra = await comprasModel.getCompraById(id);
      if (compra.length === 0) {
        return res.status(404).json({ message: "Compra não encontrada." });
      }
      res.json(compra[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createCompra(req, res) {
    try {
      const result = await comprasModel.createCompra(req.body);
      res.status(201).json({ message: "Compra registrada com sucesso.", id: result.insertId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCompra(req, res) {
    try {
      const { id } = req.params;
      await comprasModel.updateCompra(id, req.body);
      res.json({ message: "Compra atualizada com sucesso." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCompra(req, res) {
    try {
      const { id } = req.params;
      await comprasModel.deleteCompra(id);
      res.json({ message: "Compra deletada com sucesso." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new ComprasController();