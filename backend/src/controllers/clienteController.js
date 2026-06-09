import clientesModel from "../models/clienteModel.js";

class ClientesController {
  async showClientes(req, res) {
    try {
      const clientes = await clientesModel.showClientes();
      res.json(clientes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getClienteById(req, res) {
    try {
      const { id } = req.params;
      const cliente = await clientesModel.getClienteById(id);
      if (cliente.length === 0) {
        return res.status(404).json({ message: "Cliente não encontrado." });
      }
      res.json(cliente[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createCliente(req, res) {
    try {
      const result = await clientesModel.createCliente(req.body);
      res.status(201).json({ message: "Cliente criado com sucesso.", id: result.insertId });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCliente(req, res) {
    try {
      const { id } = req.params;
      await clientesModel.updateCliente(id, req.body);
      res.json({ message: "Cliente atualizado com sucesso." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCliente(req, res) {
    try {
      const { id } = req.params;
      await clientesModel.deleteCliente(id);
      res.json({ message: "Cliente deletado com sucesso." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new ClientesController();