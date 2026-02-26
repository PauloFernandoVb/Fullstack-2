import express from "express";
import UsuarioController from '../controllers/usuarioController.js'

const router=express.Router();
let usuarioCOntroller=new UsuarioController();

router.get("/", (req, res) => {
    usuarioCOntroller.listar(req, res);
    //#swagger.tags=['Usuarios']
    //#swagger.summary="Retorna uma lista com todos os Usuarios"
})
router.post("/", (req, res) => {
    //#swagger.tags=['Usuarios']
    //#swagger.summary="Cadastra um novo Usuario"
    usuarioCOntroller.cadastrar(req, res);
})
router.put("/", (req, res) => {
    //#swagger.tags=['Usuarios']
    //#swagger.summary="Atualiza um Usuario existente"
    usuarioCOntroller.atualizar(req, res);
});
router.delete("/:id", (req, res) => {
    //#swagger.tags=['Usuarios']
    //#swagger.summary="Deleta um Usuario especifico"
    usuarioCOntroller.deletar(req, res);
});
router.get("/:id", (req, res) => {
    //#swagger.tags=['Usuarios']
    //#swagger.summary="Retorna um Usuario especifico"
    usuarioCOntroller.obter(req, res);
});


export default router;