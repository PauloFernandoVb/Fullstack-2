import PerfilEntity from "./perfilEntity.js";
export default class UsuarioEntity {

    //atributos do usuario

    #id; #nome; #email;
    #ativo; #senha; #perfil;

    //O get id() vai devolver o valor da propriedade #id (a propriedade privada).
    // O set id(value) permite modificar o valor da propriedade #id. O valor a ser atribuído é passado através do parâmetro value.

    get id() { return this.#id; }
    set id(value) { this.#id = value; }
    get nome() { return this.#nome; }
    set nome(value) { this.#nome = value; }
    get email() { return this.#email; }
    set email(value) { this.#email = value; }
    get ativo() { return this.#ativo; }
    set ativo(value) { this.#ativo = value; }
    get senha() { return this.#senha; }
    set senha(value) { this.#senha = value; }
    get perfil() { return this.#perfil; }
    set perfil(value) { this.#perfil = value; }

    //o construtor serve para quando vou criar um novo objt usuario/ ele inicializa as propriedades do novo usuario
    constructor(id, nome, email, ativo, senha, perfil) {
        this.#id = id;
        this.#nome = nome;
        this.#email = email;
        this.#ativo = ativo;
        this.#senha = senha;
        this.#perfil = perfil;
    }
    static toMap(row) {
        let usuario = new UsuarioEntity(row["usu_id"], row["usu_nome"], row["usu_email"], row["usu_ativo"], row["usu_senha"], new PerfilEntity(row["per_id"]));

        //para junçoes com a tabela de perfil 
        if (row["per_descricao"] != null) {
            usuario.perfil.descricao = row["per_descricao"];
        }
        return usuario;


    }

    validar() {
        if (this.#nome != null && this.#email != null && this.#perfil.id > 0 && this.#email.includes("@")) {
            return true;
        }

        return false;
    }

    toJSON() {
        return {
            id: this.#id,
            nome: this.#nome,
            email: this.#email,
            ativo: this.#ativo,
            perfil: this.#perfil
        }
    }

}