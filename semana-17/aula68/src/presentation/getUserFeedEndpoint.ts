import { Request, Response } from 'express'
import { UserDatabase } from '../data/UserDatabase';
import { JWTService } from '../service/JWTService';
import { GetUserFeedUC } from '../business/usecases/getuserfeed/GetUserFeedUC';

export async function getUserFeedEndpoint(req: Request, res: Response) {

    const token = <string>req.headers.auth;

    if (!token) {
        res.status(400).send();
        return;
    }
    try {
        const useCase = new GetUserFeedUC(new UserDatabase, new JWTService);
        const result = await useCase.execute(token);
        res.send({
            feed: result
        });
    } catch (e) {
        res.status(400).send(e.message);
    }
}
