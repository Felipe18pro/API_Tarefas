import {Schema, model} from "mongoose";

const tarefaSchema = new Schema({
    titulo: { type: String, required: true },
    tarefa: { type: String, required: true },  // Corrigido de 'terefa' para 'tarefa'
    estado: { type: String, enum: ['pendente', 'em progresso', 'concluido'], default: 'pendente' }
});

export default model('Tarefa', tarefaSchema)