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
            return res.status(500).json({ msg: "erro ao processar requisiçao" });
        }
    }


}