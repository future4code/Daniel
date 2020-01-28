import { Request, Response } from 'express'
import { UserSignupInput, UserSignupUC } from '../../business/usecases/UserSignupUC'
import { UserDatabase } from '../../data/user/UserDatabase';
import { Uuid } from '../../service/util/uuid';
import { BcryptService } from '../../service/cryptography/BcryptService';
import { JwtAuthService } from '../../service/auth/JWTAuthService';

export async function userSignupEndpoint(req: Request, res: Response) {
    try {
        const input: UserSignupInput = {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            photoUrl: req.body.photoUrl,
            birthdate: new Date(req.body.birthdate)
        }

        const usecase = new UserSignupUC(new UserDatabase(), new BcryptService(), new Uuid(), new JwtAuthService());
        const token = await usecase.execute(input);
        res.send({ token });
    } catch (e) {
        console.log(e);
        res.status(400).send({ message: e.message })
    }
} 