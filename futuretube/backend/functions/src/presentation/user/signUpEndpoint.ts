import { SignUpUCInput, SignUpUC } from "../../business/usecases/user/SignUpUC";
import { UserFirestoreDatabase } from '../../data/UserFirestoreDatabase';
import { BcryptService } from '../../service/crytography/BcryptService';
import { JwtAuthService } from '../../service/auth/JwtAuthService';
import { UuidV4 } from "../../service/uidGenerator/uid";
import { Response, Request } from "express";



export async function signUpEndpoint(req: Request, res: Response) {
    if (!req.body.name || !req.body.email || !req.body.password || !req.body.birthdate || !req.body.photoUrl) {
        res.status(400).send("Requisição inválida!");
        return;
    };

    try {
        const input = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            birthdate: req.body.birthdate,
            photoUrl: req.body.photoUrl
        } as SignUpUCInput;

        const usecase = new SignUpUC(
            new UserFirestoreDatabase(),
            new UuidV4(),
            new BcryptService(),
            new JwtAuthService()
        );
        const token = await usecase.execute(input);
        res.send({ token })
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: err.message });
    }
}