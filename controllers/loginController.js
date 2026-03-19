import authMiddleware from "../middlewares/authMiddleware.js";

export default class loginController {
    async token(req, res) {
        let auth = new authMiddleware();

        let jwt = auth.token(1, "paulo", "paulofervboas@gmail.com", 1);

        return res.status(200).json({ jwt });
    }
}
