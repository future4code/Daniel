export interface JWTGateway {
    sign(id: string,
        secretKey: string,
        config: {
            expiresIn: string
        }): string;
}
