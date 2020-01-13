export interface JWTGateway {
    sign(id: string,secretKey: string,expiresIn: string): string;
}
