import { SignUpUCInput, SignUpUC } from "../business/usecases/SignUpUC";
import { UserFirestoreDatabase } from '../data/UserFirestoreDatabase';
import { BcryptService } from '../service/crytography/BcryptService';
import { JwtAuthService } from '../service/auth/JwtAuthService';
import { UuidV4 } from "../service/uidGenerator/uid";



export async function signUpEndpoint(req: any, res: any) {
    if (!req.body) {
        res.status(400).send("Requisição inválida!");
        return;
    };

    const input = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        birthdate: req.body.birthdate,
        photoUrl: req.body.photoUrl
    } as SignUpUCInput

    try {
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