import express from 'express';
import tarefaRouter from './routes/tarefasRoutes.js';
import usuarioRouter from './routes/usuarioRoutes.js';
import loginRouter from './routes/loginRoute.js';

import swaggerUi from 'swagger-ui-express';
import { createRequire } from "module"
const require = createRequire(import.meta.url);
const outputJson = require("./outputSwagger.json")

const server = express();

server.use(express.json());//ler dados json serrializados 

//rota da view da swagger
server.use("/docs", swaggerUi.serve, swaggerUi.setup(outputJson));

server.use("/tarefa", tarefaRouter);
server.use("/usuario",usuarioRouter);
server.use("/login", loginRouter);

server.listen(5000, function () {
    console.log("servidor web funcionando");
});