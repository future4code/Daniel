export interface AuthGateway{
    verify(token: string): AuthOutput;
    sign(id: string, email: string): string;
}

export interface AuthOutput{
    id: string,
    email: string
}