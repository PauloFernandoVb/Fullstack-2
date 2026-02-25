import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'API PFS2',
        description: 'API que esta sendo desenvolvida na disciplina de prog. fullstack II'
    },
    host: 'localhost:5000'
};

const saida = './outputSwagger.json';
const routes = ['./index.js'];

swaggerAutogen({ openapi: '3.0.0'})(saida, routes, doc);