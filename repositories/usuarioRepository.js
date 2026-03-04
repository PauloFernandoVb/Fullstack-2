
//repositorio recebe e devolve entidades variando os tipos

export default class UsuarioRepository {

    listar() {
        let sql = "select * from tb_usuario";
        //retorna uma lista de entidades(usuarioEntity)

    }

    //vem por um paramentro que vem da entidade tbm
    gravar(usuarioEntity) {
        let sql = "insert into tb_usuario (?,?)";
        let valores = [/*Informaçoes do usario que eu quero persistir */]
        

    }

}