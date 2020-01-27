import { Request, Response } from 'express'
import { UserDatabase } from '../data/UserDatabase';
import { JWTService } from '../service/JWTService';
import { GetUserInfoUC } from '../business/usecases/getuserinfo/GetUserInfoUC';

export async function getUserInfoEndpoint(req: Request, res: Response) {

    const token = <string>req.headers.auth;

    if (!token) {
        res.status(400).send();
        return;
    }
    try {
        const useCase = new GetUserInfoUC(new UserDatabase, new JWTService);
        const result = await useCase.execute(token);
        res.send({
            id: result.id,
            email: result.email
        });
    } catch (e) {
        res.status(400).send(e.message);
    }
}
