import livroModel from "../models/livroModel.js";

class livroController {
    async listarLivros(req, res) {
        try {
            const livros = await livroModel.showLivros();
            res.status(200).json(livros);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar livros' });
        }
    }

    async buscarLivroPorId(req, res) {
        try {
            const { id } = req.params;
            const livro = await livroModel.getLivroById(id);

            if (!livro) {
                return res.status(404).json({ error: 'Livro não encontrado' });
            }

            res.status(200).json(livro);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar livro' });
        }
    }

    async criarLivro(req, res) {
        try {
            const novoLivro = await livroModel.createLivro(req.body);
            res.status(201).json(novoLivro);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar livro' });
        }
    }

    async atualizarLivro(req, res) {
        try {
            const { id } = req.params;
            const [atualizado] = await livroModel.updateLivro(req.body, { where: { id } });

            if (!atualizado) {
                return res.status(404).json({ error: 'Livro não encontrado' });
            }

            const livroAtualizado = await livroModel.getLivroById(id);
            res.status(200).json(livroAtualizado);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar livro' });
        }
    }

    async deletarLivro(req, res) {
        try {
            const { id } = req.params;
            const deletado = await livroModel.deleteLivro({ where: { id } });

            if (!deletado) {
                return res.status(404).json({ error: 'Livro não encontrado' });
            }

            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar livro' });
        }
    }
};

export default new livroController();