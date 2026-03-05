import Database from "../db/database.js";
//repositorio recebe e devolve entidades variando os tipos
import UsuarioEntity from "../entities/usuarioEntity.js";
import PerfilEntity from "../entities/perfilEntity.js";

export default class UsuarioRepository {
    //retorna uma lista de entidades(usuarioEntity)

    async listar() {
        let sql = `select * from tb_usuario u inner join tb_perfil p on u.per_id = p.per_id`;
        let banco = new Database();
        let rows = await banco.ExecutaComando(sql);
        console.log(rows);
        //mapear para listar as entidades
        let entidades = [];

        //cada posiçao da lista usuarios
        for (let row of rows) {
            entidades.push(new UsuarioEntity(row['usu_id'], row['usu_nome'], row['usu_email'], row['usu_ativo'], row['usu_senha'], new PerfilEntity(row['per_id'], row['per_descricao'])));
        }
        return entidades;
    }

    //vem por um paramentro que vem da entidade tbm
    async gravar(entidade) {
        let sql = "insert into tb_usuario (usu_nome, usu_email, usu_ativo, usu_senha, per_id )values (?, ?, ?, ?, ?)";

        let valores = [entidade.nome, entidade.email, entidade.ativo, entidade.senha, entidade.perfil.id];

        let banco = new Database();
        let results = await banco.ExecutaComandoLastInserted(sql,valores);

        //lastinserted ele retorna pro cliente a identificaçao do usuario
        entidade.id=results;
        return true;


    }

}