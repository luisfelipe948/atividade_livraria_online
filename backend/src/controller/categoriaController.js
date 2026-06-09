import categoriaModel from "../models/categoriaModel.js";

class categoriaController {
    async listarCategorias(req, res) {
        try {
            const categorias = await categoriaModel.showAll();
            res.status(200).json(categorias);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar categorias' });
        }
    }

    async buscarCategoriaPorId(req, res) {
        try {
            const { id } = req.params;
            const categoria = await categoriaModel.getCategoriaById(id);

            if (!categoria) {
                return res.status(404).json({ error: 'Categoria não encontrada' });
            }

            res.status(200).json(categoria);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar categoria' });
        }
    }

    async criarCategoria(req, res) {
        try {
            const novaCategoria = await categoriaModel.createCategoria(req.body);
            res.status(201).json(novaCategoria);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar categoria' });
        }
    }

    async atualizarCategoria(req, res) {
        try {
            const { id } = req.params;
            const [atualizado] = await categoriaModel.updateCategoria(req.body, { where: { id } });

            if (!atualizado) {
                return res.status(404).json({ error: 'Categoria não encontrada' });
            }

            const categoriaAtualizada = await categoriaModel.getCategoriaById(id);
            res.status(200).json(categoriaAtualizada);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar categoria' });
        }
    }

    async deletarCategoria(req, res) {
        try {
            const { id } = req.params;
            const deletado = await categoriaModel.deleteCategoria({ where: { id } });

            if (!deletado) {
                return res.status(404).json({ error: 'Categoria não encontrada' });
            }

            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar categoria' });
        }
    }
};

export default new categoriaController();