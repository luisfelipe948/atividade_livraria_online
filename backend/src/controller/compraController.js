import compraModel from "../models/compraModel.js";

class compraController {
    async listarCompras(req, res) {
        try {
            const compras = await compraModel.showCompras();
            res.status(200).json(compras);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar compras' });
        }
    }

    async buscarCompraPorId(req, res) {
        try {
            const { id } = req.params;
            const compra = await compraModel.getCompraById(id);

            if (!compra) {
                return res.status(404).json({ error: 'Compra não encontrada' });
            }

            res.status(200).json(compra);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar compra' });
        }
    }

    async criarCompra(req, res) {
        try {
            const novaCompra = await compraModel.createCompra(req.body);
            res.status(201).json(novaCompra);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar compra' });
        }
    }

    async atualizarCompra(req, res) {
        try {
            const { id } = req.params;
            const [atualizado] = await compraModel.updateCompra(req.body, { where: { id } });

            if (!atualizado) {
                return res.status(404).json({ error: 'Compra não encontrada' });
            }

            const compraAtualizada = await compraModel.getCompraById(id);
            res.status(200).json(compraAtualizada);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar compra' });
        }
    }

    async deletarCompra(req, res) {
        try {
            const { id } = req.params;
            const deletado = await compraModel.deleteCompra({ where: { id } });

            if (!deletado) {
                return res.status(404).json({ error: 'Compra não encontrada' });
            }

            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar compra' });
        }
    }
};

export default new compraController();