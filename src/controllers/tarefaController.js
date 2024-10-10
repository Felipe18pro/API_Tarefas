import Tarefa from "../models/tarefaModel.js";

const tarefaController = {
    async criarTarefa(req, res) {
        try {
            const novaTarefa = new Tarefa(req.body);
            await novaTarefa.save();
            res.status(200).json({ mensagem: 'Tarefa criada com sucesso! : )', tarefa: novaTarefa });
        } catch (error) {
            console.error('Erro ao criar tarefa:', error);  // Log detalhado do erro
            res.status(400).json({ mensagem: 'Erro ao criar tarefa', erro: error.message });  // Retorna a mensagem do erro
        }
    },

    async listarTarefas(req, res) {
        try {
            const tarefas = await Tarefa.find();  // Adicione o await aqui
            res.status(200).json({ mensagem: 'Tarefas encontradas com sucesso', tarefas });
        } catch (error) {
            console.error('Erro ao listar tarefas:', error);
            res.status(404).json({ mensagem: 'Tarefas não encontradas' });
        }
    },

    async removerTarefa(req, res) {
        try {
            const { id } = req.params;
            const tarefaDeletada = await Tarefa.findByIdAndDelete(id);
            if (!tarefaDeletada) {
                return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
            }
            res.status(200).json({ mensagem: 'Tarefa excluída com sucesso', tarefaDeletada });
        } catch (error) {
            console.error('Erro ao remover tarefa:', error);  // Adicionando log para erros
            res.status(400).json({ mensagem: 'Erro ao remover a tarefa' });
        }
    },

    async atualizarTarefa(req, res) {
        const { id } = req.params;
        const { titulo, tarefa, estado } = req.body;

        try {
            const tarefaAtualizada = await Tarefa.findByIdAndUpdate(
                id,
                { titulo, tarefa, estado },
                { new: true, runValidators: true }
            );
            if (!tarefaAtualizada) {
                return res.status(404).json({ mensagem: 'Tarefa não encontrada' });
            }
            res.status(200).json({ mensagem: 'Tarefa atualizada com sucesso', tarefaAtualizada });
        } catch (error) {
            console.error('Erro ao atualizar tarefa:', error);  // Adicionando log para erros
            res.status(400).json({ mensagem: 'Erro ao atualizar tarefa' });
        }
    }
}

export default tarefaController;
