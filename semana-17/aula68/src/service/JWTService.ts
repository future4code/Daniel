import { JWTGateway } from '../business/gateways/JWTGateway';
import * as jwt from 'jsonwebtoken'

export class JWTService implements JWTGateway {
    sign(id: string, secretKey: string, expiresIn: string): string {
        return jwt.sign(id, secretKey, {
            expiresIn: expiresIn
        })
    }

}