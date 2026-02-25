const tarefas = [
    {
        id: Date.now(),
        titulo: "Levar a perola para passear",
        descricao: "Não esquecer de levar a sacola (cagona)",
    },
    {
        id: Date.now(),
        titulo: "Preparar a prova de PFS1",
        descricao: "Prova facil dessa vez!!"
    },
    {
        id: Date.now(),
        titulo: "Estudar aula de pfs2",
        descricao: "A prova esta chegando =( !!"
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
                id: Date.now(),
                titulo: titulo,//poderia por novo titulo e nova descricao para efeito didatico!
                descricao: descricao
            });
            return res.status(201).json({ msg: "Tarefa criada com sucesso!" });
        }
    }
    atualizar(req, res) {
        let { titulo, descricao } = req.body;//funaço de descronstruçao ja montando pelo body dentro das variaveis da chave é igual a linha 1 do cadastrar

        if (!id || !titulo || !descricao) {
            return res.status(400).json({ msg: "Parâmetros incorretos!Id e  titulo e descrição são obrigatórios!" });//ve se as infos vieram certas

        } else {
            //encontrar o recurso para atualizaçao
            let tarefaEcontrada = tarefas.filter(t => t.id == id);//mesma coisa q o obter
            if (tarefaEcontrada.length == 0) {
                return res.status(404).json({ msg: "Tarefa nao encontrada para atualizaçao" });
            }
            else {
                //isso passsa por(parametro) memoria como se fosse no & e no * em C chegando ao lugar do vetor que estamos querendo cehgar
                //lembrando a let tarefaEncontrada virou um vetor por conta do filter 
                tarefaEcontrada[0].titulo = titulo;
                tarefaEcontrada[0].descricao = descricao;
                res.status(200).json({ msg: "Tarefa atualizada!" });
            }
        }
    }

    listar(req, res) {
        return res.status(200).json(tarefas);
    }
    obter(req, res) {//encontrar algo com parametro
        let id = req.params.id;//params pega o id, busca o recurso

        let tarefaEcontrada = tarefas.filter(t => t.id == id);//compara id por id adicionando na lsta da tarefa enconrada; a variavel vira uma lista por conta do filter
        //filtrando as tarefas, pois o vetor e um array de objetos, o filtro faz tipo um for vendo posiçao por posiçao(t na tarefa posiçao 1, posiçao dois ai por diante)

        if (tarefaEcontrada.length > 0) {//a variavel vira uma lista por conta do filter
            return res.status(200).json(tarefaEcontrada[0]);
        }
        return res.status(404).json({ msg: 'nenhuma tarefa encontrada!' });
    }
    deletar(req, res) {
        let id = req.params.id;

        let tarefaEcontrada = tarefas.filter(t => t.id == id);
        if (tarefaEcontrada.length == 0) {
            return res.status(404).json({ msg: "tarefa nao encontrada" });

        } else {
            tarefas = tarefas.filter(t => t.id != tarefaEcontrada[0].id);
            //se eel existe eu sobrescrevo a lista tarefa mesnos aquee q eu quero que seja excluido
            //o filtro joga pro array todos menos aquele que eu quero ai altomaticamente ele é excluido

            return res.status(200).json({msg:"tarefa deletada"});
        }
    }
    

}
