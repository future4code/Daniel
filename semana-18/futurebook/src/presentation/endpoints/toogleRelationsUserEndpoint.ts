import { Request, Response } from 'express'
import { UserDatabase } from '../../data/user/UserDatabase';
import { JwtAuthService } from '../../service/auth/JwtAuthService';
import { ToggleUserRelationInput, ToogleRelationsUser } from '../../business/usecases/ToogleRelationsUser';

export async function toogleRelationsUserEndpoint(req: Request, res: Response) {
    if (!req.headers.auth || !req.body.userToFollow) {
        res.status(400).send();
        return;
    }
    try {
        const input: ToggleUserRelationInput = {
            token: req.headers.auth as string,
            id: req.body.userToFollow
        }

        const usecase = new ToogleRelationsUser(new UserDatabase(),new JwtAuthService());
        await usecase.execute(input);
        res.send({ message: "Operação concluída com sucesso!" });
    } catch (e) {
        console.log(e);
        res.status(400).send({ message: e.message })
    }
}