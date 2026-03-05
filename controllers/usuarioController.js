import PerfilEntity from "../entities/perfilEntity.js";
import UsuarioEntity from "../entities/usuarioEntity.js";
import UsuarioRepository from "../repositories/usuarioRepository.js";

export default class usuarioController {

    async listar(req, res) {
        try {
            let repo = new UsuarioRepository();
            let entidades = await repo.listar();
            if (entidades.length == 0) {
                return res.status(404).json({ msg: "Nenhuma entidade Encontrada!" });
            }
            return res.status(200).json(entidades);
        }
        catch (erro) {
            console.error(erro);
            return res.status(500).json({ msg: "Erro ao processar requisiçao" });
        }
    }
    async gravar(req, res) {
        try {
            let { nome, email, ativo, senha, perfil } = req.body;

            let entidade = new UsuarioEntity(0, nome, email, ativo, senha, new PerfilEntity(perfil.id));

            if(entidade.validar()){
                let repo = new UsuarioRepository();
                let result = await repo.gravar(entidade);

            return res.status(201).json(entidade);

            }else{
                return res.status(400).json({msg:"Parametros incorretos. Por favor confira as informaçoes do usuário!"});
            }

        }
        catch (erro) {
            console.error(erro);
            return res.status(500).json({ msg: "Erro ao processar requisiçao" });
        }
    }


}