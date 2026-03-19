
import jwt from 'jsonwebtoken';
const SECRET_KEY = "CHAVE-SECRETA"
export default class authMiddleware {
    //aqui usaremos a jason webtoken para criar o token e validar o token
    token(id, nome, email, perfil) {
        let token = jwt.sign({
            id: id,
            nome: nome,
            email: email,
            perfil: perfil
        }, SECRET_KEY);

        //aqui o token tem a parte do payload que e a parte verde do site e a parte da assinatura que e a parte roxa do site e o segredo para assinar o token e o tempo de expiração do token
        return token;
    }

    async validar(req, res, next) {//intercepta a requisaçao e valida o token que garente o fluxo de autenticaçao e autorizacao ate a proxima etapa
        //usaremos a cookies para ler 
        if (req.cookies.jwt) {
            let token = req.cookies.jwt;

            let valido = jwt.verify(token, SECRET_KEY);

            if (valido) {
                next();
            }
            else {
                return res.status(401).json({ msg: "Nao autorizado!" })
            }
        }
        return res.status(401).json({ msg: "Nao autorizado!" })
    }
}
//ciar um end ponint com valores fixo e retorna para nos