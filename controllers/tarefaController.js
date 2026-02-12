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
        let titulo = req.body.titulo;
        let descricao = req.body.descricao;

        if (!titulo || !descricao) {
            return res.status(400).json({ msg: "Parâmetros incorretos! titulo e descrição são obrigatórios!" })
        } else {
            tarefas.push({
                titulo: titulo,//poderia por novo titulo e nova descricao para efeito didatico!
                descricao: descricao
            });
            return res.status(201).json({ msg: "Tarefa criada com sucesso!" });
        }
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
