import Database from "../db/database.js";
//repositorio recebe e devolve entidades variando os tipos
import UsuarioEntity from "../entities/usuarioEntity.js";
import PerfilEntity from "../entities/perfilEntity.js";
import Repository from "./repository.js";

export default class UsuarioRepository extends Repository {
    //retorna uma lista de entidades(usuarioEntity)

    constructor() {
        super();
    }

    async listar() {
        let sql = `select * from tb_usuario u inner join tb_perfil p on u.per_id = p.per_id`;

        let rows = await this.banco.ExecutaComando(sql);
        console.log(rows);
        //mapear para listar as entidades
        let entidades = [];

        //cada posiçao da lista usuarios
        for (let row of rows) {
            entidades.push(UsuarioEntity.toMap(row));
        }
        return entidades;
    }

    //vem por um paramentro que vem da entidade tbm
    async gravar(entidade) {
        let sql = "insert into tb_usuario (usu_nome, usu_email, usu_ativo, usu_senha, per_id )values (?, ?, ?, ?, ?)";

        let valores = [entidade.nome, entidade.email, entidade.ativo, entidade.senha, entidade.perfil.id];


        let results = await this.banco.ExecutaComandoLastInserted(sql, valores);

        //lastinserted ele retorna pro cliente a identificaçao do usuario
        entidade.id = results;
        return true;
    }

    async excluir(id) {
        let sql = "delete from tb_usuario where usu_id = ?";

        let valores = [id];

        let result = await this.banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }

    async atualizar(entidadeAtualizada) {
        let sql = "update tb_usuario set usu_nome = ?, usu_email = ?, usu_ativo = ?, usu_senha = ?, per_id = ? where usu_id = ?";

        let valores = [entidadeAtualizada.nome, entidadeAtualizada.email, entidadeAtualizada.ativo, entidadeAtualizada.senha, entidadeAtualizada.perfil.id, entidadeAtualizada.id];

        let result = await this.banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }
    async obter(id) {
        let sql = "select * from tb_usuario where usu_id = ?";

        let valores = [id];

        let rows = await this.banco.ExecutaComando(sql, valores);

        if (rows.length > 0) {
            let usuario = UsuarioEntity.toMap(rows[0]);

            return usuario;
        }
        return null;
    }

}