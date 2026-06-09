import clienteModel from "../models/clienteModel.js";

class ClientesController {
    async getAllClientes(req, res) {
        try {
            const allClientes = await clienteModel.showClientes();

            if (allClientes.length === 0) {
                return res.status(404).json();
            }
            return res.json(allClientes);
        } catch (error) {
            res.status(500).json({ error: "Erro ao listar clientes" });
        }
    }

    async storeCliente(req, res) {
        try {
            const { nome, email, telefone, cidade, estado } = req.body;

            if (nome === "" || !email || !telefone || !cidade || !estado) {
                return res.json({ message: "Todos os campos são Obrigatórios" });
            }

            const [findEmail] = await clienteModel.getClienteByEmail(email);

            if (findEmail?.email === email) {
                return res.json({
                    message: "Email já cadastrado!",
                });
            }

            const createCliente = await clienteModel.createCliente(req.body);

            if (createCliente.affectedRows === 0) {
                return res.status(201).json();
            }

            return res.json({
                message: "Cadastro realizado com Sucesso!",
            });
        } catch (error) {
            res.status(500).json({ error: "Erro ao cadastrar cliente" });
        }
    }

    async updateClienteById(req, res) {
        try {
            const id = Number(req.params.id);
            const { nome, email, telefone, cidade, estado } = req.body;

            if (nome === "" || !email || !telefone || !cidade || !estado) {
                return res.json({ message: "Todos os campos são Obrigatórios" });
            }

            const [findEmail] = await clienteModel.getClienteByEmail(email);

            if (findEmail?.email === email) {
                return res.json({
                    message: "Email já cadastrado!",
                });
            }

            const updateCliente = await clienteModel.updateCliente(id, req.body);

            if (updateCliente.affectedRows === 0) {
                return res.json({
                    message: "Não foi possível realizar a Atualização!",
                });
            }

            return res.json({
                message: "Cliente atualizado com sucesso!",
            });
        } catch (error) {
            res.status(500).json({ error: "Erro ao atualizar cliente" });
        }
    }

    async removeCliente(req, res) {
        try {
            const id = Number(req.params.id);

            const deleteCliente = await clienteModel.deleteCliente(id);

            if (deleteCliente.affectedRows === 0) {
                return res.json({
                    message: "Não foi possível Deletar dados do Cliente!",
                });
            }

            return res.json({
                message: "Cliente deletado com sucesso!",
            });
        } catch (error) {
            res.status(500).json({ error: "Erro ao deletar cliente" });
        }
    }
}

export default new ClientesController();
