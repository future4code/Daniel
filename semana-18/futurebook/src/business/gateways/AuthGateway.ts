export interface AuthGateway{
    sign(id: string, email: string): string;
}