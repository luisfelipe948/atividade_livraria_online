import editoraModel from "../models/editoraModel.js";

class editoraController {
    async listarEditoras(req, res) {
        try {
            const editoras = await editoraModel.showEditora();
            res.status(200).json(editoras);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao listar editoras' });
        }
    }

    async buscarEditoraPorId(req, res) {
        try {
            const { id } = req.params;
            const editora = await editoraModel.getEditoraById(id);

            if (!editora) {
                return res.status(404).json({ error: 'Editora não encontrada' });
            }

            res.status(200).json(editora);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar editora' });
        }
    }

    async criarEditora(req, res) {
        try {
            const novaEditora = await editoraModel.createEditora(req.body);
            res.status(201).json(novaEditora);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar editora' });
        }
    }

    async atualizarEditora(req, res) {
        try {
            const { id } = req.params;
            const [atualizado] = await editoraModel.updateEditora(req.body, { where: { id } });

            if (!atualizado) {
                return res.status(404).json({ error: 'Editora não encontrada' });
            }

            const editoraAtualizada = await editoraModel.getEditoraById(id);
            res.status(200).json(editoraAtualizada);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar editora' });
        }
    }

    async deletarEditora(req, res) {
        try {
            const { id } = req.params;
            const deletado = await editoraModel.deleteEditora({ where: { id } });

            if (!deletado) {
                return res.status(404).json({ error: 'Editora não encontrada' });
            }

            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar editora' });
        }
    }
};

export default new editoraController();