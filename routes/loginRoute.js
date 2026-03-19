import express from 'express';
import loginController from '../controllers/loginController.js';

const router = express.Router();


let controller = new loginController();

router.get("/", (req, res) => {

    //swagge.tags = ["Login"];//aqui e para criar a tag do swagger
    //swagger.summary = "Gerar token de autenticação";//aqui e para criar a descrição do endpoint do swagger
    controller.token(req, res);
});


export default router;