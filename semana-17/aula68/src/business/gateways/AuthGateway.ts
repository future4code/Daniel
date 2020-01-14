export interface AuthGateway {
    sign(id: string): string;
    verify(token: string): AuthVerifyOutput;
}

export interface AuthVerifyOutput {
    id: string
}