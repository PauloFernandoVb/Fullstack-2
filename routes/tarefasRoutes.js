import express from 'express';
import TarefaController from '../controllers/tarefaController.js';

const router = express.Router();
let tarefaController = new TarefaController();
//para colocar o nome das tags e sumarios cria-se blocos nas rotas
router.get("/", (req, res) => {
    tarefaController.listar(req, res);
    //#swagger.tags=['Tarefas']
    //#swagger.summary="Retorna uma lista com todas as tarefas"
})
router.post("/", (req, res) => {
    //#swagger.tags=['Tarefas']
    //#swagger.summary="Cadastra uma nova Tarefa"
    tarefaController.cadastrar(req, res);
})
router.put("/", (req, res) => {
    //#swagger.tags=['Tarefas']
    //#swagger.summary="Atualiza uma tarefa existente"
    tarefaController.atualizar(req, res);
});
router.delete("/:id", (req, res) => {
    //#swagger.tags=['Tarefas']
    //#swagger.summary="Deleta uma tarefa especifica"
    tarefaController.deletar(req, res);
});
router.get("/:id", (req, res) => {
    //#swagger.tags=['Tarefas']
    //#swagger.summary="Retorna uma tarefa especifica"
    tarefaController.obter(req, res);
});


export default router;