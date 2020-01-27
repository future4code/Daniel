import { AuthGateway, AuthOutput } from '../../business/gateways/AuthGateway';
import * as jwt from 'jsonwebtoken';

export class JwtAuthService implements AuthGateway {

    private getSecretKey() {
        if (!process.env.SECRET_KEY) {
            throw new Error("Não existe chave JWT");
        }
        return process.env.SECRET_KEY;
    }
    sign(id: string, email: string): string {
        return jwt.sign({ id, email }, this.getSecretKey(), { expiresIn: "15min" });
    }
    verify(token: string): AuthOutput {
        return jwt.verify(token,this.getSecretKey()) as AuthOutput;
    }
}