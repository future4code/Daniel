import { UserSignupInput, UserSignupUC } from '../../business/usecases/UserSignupUC'
import { UserDatabase } from '../../data/user/UserDatabase';
import { Uuid } from '../../service/util/uuid';
import { BcryptService } from '../../service/cryptography/BcryptService';
import { JwtAuthService } from '../../service/auth/JWTAuthService';
import { Request } from '../base/Request';
import { Response } from '../base/Response';


export async function userSignupEndpoint(req: Request): Promise<Response> {
    try {
        if (!req.body) {
            throw Error("Requisição inválida!");
        }
        const input: UserSignupInput = {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            photoUrl: req.body.photoUrl,
            birthdate: new Date(req.body.birthdate)
        }
        const usecase = new UserSignupUC(new UserDatabase(), new BcryptService(), new Uuid(), new JwtAuthService());
        const token = await usecase.execute(input);
        return {
            statusCode: 200,
            body: { token }
        };
    } catch (e) {
        console.log(e);
        return {
            statusCode: 400,
            body: { message: e.message }
        }
    }
} 
