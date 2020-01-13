import { Request, Response } from 'express'
import { UserDatabase } from '../data/UserDatabase';
import { HashService } from '../service/HashService';
import { AuthUserUC } from '../business/usecases/authuser/AuthUserUC';
import { User } from '../business/entities/User';
import { JWTService } from '../service/JWTService';

export async function signUpEndpoint(req: Request, res: Response) {

    const userInput = {
        email: req.body.email,
        password: req.body.password
    }
    if (!(userInput.email && userInput.password) || userInput.password.length < 6) {
        res.status(400).send();
    }
    try {
        const useCase = new AuthUserUC(new UserDatabase, new JWTService, new HashService);
        const result = await useCase.execute(userInput.email, userInput.password);
        res.send({ token: result });
    } catch (e) {
        console.log(e)
        res.status(400).send();
    }
}
