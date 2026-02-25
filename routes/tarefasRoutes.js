import express from 'express';
import TarefaController from '../controllers/tarefaController.js';

const router = express.Router();
let tarefaController = new TarefaController();

router.get("/", tarefaController.listar);
router.post("/", tarefaController.cadastrar);
router.put("/", tarefaController.atualizar);
router.delete("/:id",tarefaController.deletar);
router.get("/:id", tarefaController.obter);


export default router;