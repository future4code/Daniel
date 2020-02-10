import { LoginUCInput, LoginUC } from "../../business/usecases/user/LoginUC";
import { UserFirestoreDatabase } from '../../data/UserFirestoreDatabase';
import { BcryptService } from '../../service/crytography/BcryptService';
import { JwtAuthService } from '../../service/auth/JwtAuthService';
import { Response, Request } from "express";


export async function loginEndpoint(req: Request, res: Response) {
    if (!req.body.email || !req.body.password) {
        res.status(400).send("Requisição inválida!");
        return;
    }

    try {
        const userInput: LoginUCInput = {
            email: req.body.email,
            password: req.body.password
        }

        const usecase = new LoginUC(new UserFirestoreDatabase(), new BcryptService(), new JwtAuthService());
        const token = await usecase.execute(userInput);
        res.send({ token });
    } catch (e) {
        console.log(e);
        res.status(400).send(e.message);
    }
}