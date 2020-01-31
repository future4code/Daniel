import { UserDatabase } from '../../data/user/UserDatabase';
import { JwtAuthService } from '../../service/auth/JWTAuthService';
import { BcryptService } from '../../service/cryptography/BcryptService';
import { AuthUserInput, AuthUserUC } from '../../business/usecases/UserAuthUC';
import { Request } from '../base/Request';
import { Response } from '../base/Response';

export async function userAuthEndpoint(req: Request): Promise<Response> {
    if (!req.body) {
        throw Error("Requisição inválida!");
    }
    try {
        const userInput: AuthUserInput = {
            email: req.body.email,
            password: req.body.password
        }
        const usecase = new AuthUserUC(new UserDatabase(), new BcryptService(), new JwtAuthService());
        const token = await usecase.execute(userInput);
        return {
            statusCode: 200,
            body: { token }
        }
    } catch (e) {
        console.log(e);
        return {
            statusCode: 400,
            body: { message: e.message }
        }
    }
} 