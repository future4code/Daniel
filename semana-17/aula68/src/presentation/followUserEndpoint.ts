import { Request, Response } from 'express'
import { FollowUserInput, FollowUserUC } from '../business/usecases/followuser/FollowUserUC';
import { UserDatabase } from '../data/UserDatabase';
import { JWTService } from '../service/JWTService';

export async function followUserEndpoint(req: Request, res: Response) {
    const token = <string>req.headers["token"];
    const userInput: FollowUserInput = {
        token: token,
        followId: req.body.followId,
    }
    if (!token || !req.body.followId) {
        res.status(400).send();
        return;
    }
    try {
        const usecase = new FollowUserUC(new UserDatabase, new JWTService);
        await usecase.execute(userInput);
        res.send({ message: "Usário seguido com sucesso!" });
    } catch (err) {
        res.status(400).send(err.message);
    }

}