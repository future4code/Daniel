import { AuthGateway, AuthVerifyOutput } from '../business/gateways/AuthGateway';
import * as jwt from 'jsonwebtoken'

export class JWTService implements AuthGateway {
    private getSecretKey(): string {
        if (!process.env.SECRET_KEY) {
            throw new Error("Não existe chave JWT")
        }
        return process.env.SECRET_KEY
    }

    sign(id: string): string {
        return jwt.sign({ id }, this.getSecretKey())
    }
    verify(token: string): AuthVerifyOutput {
        return jwt.verify(token, this.getSecretKey()) as { id: string };
    }

}