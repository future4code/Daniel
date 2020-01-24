import { JwtAuthService } from '../../service/auth/JwtAuthService';

export function verifyToken(token: string) {
    const jwtService = new JwtAuthService();
    return jwtService.verify(token)
}