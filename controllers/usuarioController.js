import PerfilEntity from "../entities/perfilEntity.js";
import UsuarioEntity from "../entities/usuarioEntity.js";
import UsuarioRepository from "../repositories/usuarioRepository.js";

export default class usuarioController {

    #repo;
    constructor() {
        this.#repo = new UsuarioRepository();
    }

    async listar(req, res) {
        try {
            let entidades = await this.#repo.listar();
            if (entidades.length == 0) {
                return res.status(404).json({ msg: "Nenhuma entidade Encontrada!" });
            }
            return res.status(200).json(entidades);//se der certo retorna a entidade
        }
        catch (erro) {
            console.error(erro);
            return res.status(500).json({ msg: "Erro ao processar requisiçao" });
        }
    }
    async gravar(req, res) {
        try {
            let { nome, email, ativo, senha, perfil } = req.body;
            if (nome && email && ativo && senha && perfil && perfil.id) {
                let entidade = new UsuarioEntity(0, nome, email, ativo, senha, new PerfilEntity(perfil.id));

                if (entidade.validar()) {

                    let result = await this.#repo.gravar(entidade);

                    return res.status(201).json(entidade);
                } 
                else {
                    return res.status(400).json({ msg: "Parametros incorretos. Por favor confira as informaçoes do usuário!" });
                }
            }
        }
        catch (erro) {
            console.error(erro);
            return res.status(500).json({ msg: "Erro ao processar requisiçao" });
        }
    }
    async deletar(req, res) {
        try {
            let { id } = req.params;

            let usuario = await this.#repo.obter(id);

            if (usuario == null) {
                return res.status(400).json({ msg: "Usuario nao encontrado" });
            }
            //se encontrar
            let result = await this.#repo.excluir(id);

            if (result == true) {
                return res.status(200).json({ msg: "usuario deletado!" })
            } else {
                throw new Error("erro ao excluir o usuario no banco");
                //isso faz o codigo cair no catch por algum erro e rota o codigo 500
            }
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "erro ao processar requisiçao!" })
        }
    }
    async obter(req, res) {
        try {
            let { id } = req.params;

            //chama o sql 
            let usuario = await this.#repo.obter(id);
            if (usuario == null) {
                return res.status(404).json({ msg: "usuario nao encontrado!" });
            }
            return res.status(200).json(usuario);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "erro ao processar requisiçao!" })
        }
    }

    async atualizar(req, res) {
        try {
            let { id, nome, email, ativo, senha, perfil } = req.body;//recebemos pelo corpo
            let usuario = new UsuarioEntity(id, nome, email, ativo, senha, new UsuarioEntity(perfil.id));

            //valida se o id veio coreeto se veio ai atualizamos
            if (usuario.validar() && id) {//se esta valido e tem algum id

                let usuarioEncontrado = await this.#repo.obter(id);

                if (usuarioEncontrado != null) {
                    let result = await this.#repo.atualizar(usuario);

                    if (result) {
                        return res.status(200).json({ msg: "usuario atualizado com sucesso!" })
                    }
                    throw new Error("erro ao atualizar usuario no banco de dados")
                }
                else {
                    return res.status(404).json({ msg: "usuario nao encontrado!" })
                }

            } else {
                return res.status(400).json({ msg: "faltam informaçoes para atualizar!" })
            }
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "erro ao processar requisiçao!" })
        }
    }


}