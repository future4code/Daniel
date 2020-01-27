import { Request, Response } from 'express';
import { AuthUserInput, AuthUserUC } from '../../business/usecases/AuthUserUC';
import { UserDatabase } from '../../data/user/UserDatabase';
import { BcryptService } from '../../service/crytography/BcryptService';
import { JwtAuthService } from '../../service/auth/JwtAuthService';

export async function authUserEndpoint(req: Request, res: Response) {
    if (!req.body.email || !req.body.password) {
        res.status(400).send();
        return;
    }

    try {
        const userInput: AuthUserInput = {
            email: req.body.email,
            password: req.body.password
        }

        const usecase = new AuthUserUC(new UserDatabase(), new BcryptService(), new JwtAuthService());
        const token = await usecase.execute(userInput);
        res.send({ token });
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
}