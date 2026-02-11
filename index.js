import express from 'express';
import tarefaRouter from './routes/tarefasRoutes.js';

const server = express();

server.use("/tarefa", tarefaRouter);

server.listen(5000, function () {
    console.log("servidor web funcionando");
});