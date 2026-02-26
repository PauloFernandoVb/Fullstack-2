
const usuarios = [
    {
        id: Date.now(),
        nome: "Paulo",
        email: "paulofervboas@gmail.com",
        nivelAcesso: "A",
        urlFotoPerfil: "/https://12331",
        celular: "999999999"
    }
];

export default class usuarioController {

    cadastrar(req, res) {
        try {
            let nome = req.body.nome;
            let email = req.body.email;
            let nivelAcesso = req.body.nivelAcesso;
            let urlFotoPerfil = req.body.urlFotoPerfil;
            let celular = req.body.celular;

            if (!nome || !email || !nivelAcesso || !urlFotoPerfil || !celular) {
                return res.status(400).json({ msg: "Parametros incorretos!, todos os dados sao necessarios!" })
            } else {
                usuarios.push({
                    id: Date.now(),
                    nome, email, nivelAcesso, urlFotoPerfil, celular
                });
                return res.status(201).json({ msg: "Usuario criado com sucesso!" });
            }
        }
        catch (ex) {
            console.error(ex.message);
            return res.status(500).json({ msg: "erro ao processar requisiçao" });
        }
    }
    atualizar(req, res) {
        try {
            let { id, nome, email, nivelAcesso, urlFotoPerfil, celular } = req.body;

            if (!id || !nome || !email || !nivelAcesso || !urlFotoPerfil || !celular) {
                return res.status(400).json({ msg: "Parametros incorretos!, todos os dados sao necessarios!" });
            } else {
                let UsuarioEncontrado = usuarios.filter(t => t.id == id);
                if (UsuarioEncontrado.length == 0) {
                    return res.status(404).json({ msg: "Usuario nao encontrado!" })
                } else {
                    UsuarioEncontrado[0].nome = nome;
                    UsuarioEncontrado[0].email = email;
                    UsuarioEncontrado[0].nivelAcesso = nivelAcesso;
                    UsuarioEncontrado[0].urlFotoPerfil = urlFotoPerfil;
                    UsuarioEncontrado[0].celular = celular;
                    res.status(200).json({ msg: "Usuario Atualizado" });
                }
            }
        }
        catch (ex) {
            console.error(ex.message);
            return res.status(500).json({ msg: "erro ao processar requisiçao" });
        }
    }
    listar(req, res) {
        try {
            return res.status(200).json(usuarios);
        }
        catch (ex) {
            console.error(ex.message);
            return res.status(500).json({ msg: "erro ao processar requisiçao" });
        }
    }
    obter(req, res) {
        try {
            let id = req.params.id;
            let UsuarioEncontrado = usuarios.filter(t => t.id == id);

            if (UsuarioEncontrado.length > 0) {
                return res.status(200).json(UsuarioEncontrado[0]);
            }
            return res.status(404).json({ msg: 'nenhum Usuario encontrada!' });
        }
        catch (ex) {
            console.error(ex.message);
            return res.status(500).json({ msg: "erro ao processar requisiçao" });
        }
    }
    deletar(req, res) {
        try {
            let id = req.params.id;
            let UsuarioEncontrado = usuarios.filter(t => t.id == id);
            if (UsuarioEncontrado.length == 0) {
                return res.status(404).json({ msg: "Usuario nao encontrado!" });

            } else {
                usuarios = usuarios.filter(t => t.id != UsuarioEncontrado[0].id);

                return res.status(200).json({ msg: "Usuario deletada" });
            }
        }

        catch (ex) {
            console.error(ex.message);
            return res.status(500).json({ msg: "erro ao processar requisiçao" });
        }
    }
}