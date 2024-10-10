import express from 'express';
import tarefaController from '../controllers/tarefaController.js';

const { criarTarefa, listarTarefas, removerTarefa, atualizarTarefa } = tarefaController;

const router = express.Router();

router.post('/', criarTarefa);
router.get('/', listarTarefas);
router.put('/:id', atualizarTarefa);
router.delete('/:id', removerTarefa);

export default router;
