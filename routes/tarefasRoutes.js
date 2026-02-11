import express from 'express';
import TarefaController from '../controllers/tarefaController.js';

const router = express.Router();
let tarefaController = new TarefaController();

router.get("/", tarefaController.listar);

export default router;