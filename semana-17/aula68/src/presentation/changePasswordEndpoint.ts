import { Request, Response } from 'express'
import { UserDatabase } from '../data/UserDatabase';
import { JWTService } from '../service/JWTService';
import { ChangePasswordInput, ChangePasswordUC } from '../business/usecases/changePassword/changePasswordUC';
import { HashService } from '../service/HashService';

export async function ChangePasswordEndpoint(req: Request, res: Response) {

    const token = <string>req.headers.auth;
    if (!token) {
        res.status(400).send();
        return;
    }
    if (!req.body.currentPassword || !req.body.newPassword) {
        res.status(400).send();
        return;
    }
    const userInput: ChangePasswordInput = {
        token: token,
        currentPassword: req.body.currentPassword,
        newPassword: req.body.newPassword
    }
    try {
        const useCase = new ChangePasswordUC(new UserDatabase, new HashService, new JWTService);
        await useCase.execute(userInput);
        res.send({
            message: "Senha alterada com sucesso"
        });
    } catch (e) {
        console.log(e)
        res.status(400).send(e.message);
    }
}
