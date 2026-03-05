import express from 'express';
const router = express.Router();

import UsuarioController from '../controllers/usuarioController.js'


let controller = new UsuarioController();

router.get("/", (req, res) => {
    controller.listar(req, res);
    //#swagger.tags=['Usuarios']
    //#swagger.summary="Retorna uma lista com todos os Usuarios"
})

router.post("/", (req, res) => {
    //#swagger.tags=['Usuarios']
    //#swagger.summary="Cadastra um novo Usuário"
    controller.gravar(req, res);
})
router.put("/", (req, res) => {
    //#swagger.tags=['Usuarios']
    //#swagger.summary="Atualiza um Usuario existente"
    controller.atualizar(req, res);
});
router.delete("/:id", (req, res) => {
    //#swagger.tags=['Usuarios']
    //#swagger.summary="Deleta um Usuario especifico"
    controller.deletar(req, res);
});
router.get("/:id", (req, res) => {
    //#swagger.tags=['Usuarios']
    //#swagger.summary="Retorna um Usuario especifico"
    controller.obter(req, res);
});


export default router;