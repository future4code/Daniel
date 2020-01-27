import { Request, Response } from 'express'
import { CreateUserInput, CreateUserUC } from '../business/usecases/createuser/CreateUserUC'
import { UserDatabase } from '../data/UserDatabase';
import { HashService } from '../service/HashService';
import { generateRandomId } from '../business/utils/generateRandomId';

export async function signUpEndpoint(req: Request, res: Response) {

    const userInput: CreateUserInput = {
        email: req.body.email,
        password: req.body.password
    }
    if (!(userInput.email && userInput.password) || userInput.password.length < 6) {
        res.status(400).send();
    }
    try {
        const useCase = new CreateUserUC(new UserDatabase, new HashService, new generateRandomId);
        await useCase.execute(userInput)
        res.send({ message: 'Usuário criado com sucesso' });
    } catch (e) {
        res.status(400).send(e.message);
    }
}
