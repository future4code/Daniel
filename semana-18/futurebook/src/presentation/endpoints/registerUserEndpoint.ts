import { Request, Response } from 'express'
import { RegisterUserInput, RegisterUserUC } from '../../business/usecases/RegisterUserUC'
import { UserDatabase } from '../../data/user/UserDatabase';
import { BcryptService } from '../../service/crytography/BcryptService';
import { Uuid } from '../../service/util/uuid';
import { JwtAuthService } from '../../service/auth/JwtAuthService';

export async function registerUserEndpoint(req: Request, res: Response) {
    if (!req.body.name || !req.body.password || !req.body.email) {
        res.status(400).send();
        return;
    }
    try {
        const input: RegisterUserInput = {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email
        }

        const usecase = new RegisterUserUC(new UserDatabase(), new BcryptService(), new Uuid(), new JwtAuthService());
        const token = await usecase.execute(input);
        res.send({ token });
    } catch (e) {
        console.log(e);
        res.status(400).send({ message: e.message })
    }
}