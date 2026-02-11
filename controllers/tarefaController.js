const tarefas = [
    {
        titulo: "Levar a perola para passear",
        descricao: "Não esquecer de levar a sacola (cagona)",
    },
    {
        titulo: "Preparar a prova de PFS1",
        descricao: "Prova facil dessa vez!!"
    }
];

export default class TarefaController {

    cadastrar(req, res) {

    }
    atualizar(req, res) {

    }

    listar(req, res) {
        return res.status(200).json(tarefas);
    }
    obter(req, res) {

    }
    deletar(req, res) {

    }

}
