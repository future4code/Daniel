import { UserGateway } from '../../gateways/UserGateway';
import { AuthGateway } from '../../gateways/AuthGateway';
import { HashGateway } from '../../gateways/HashGateway';

export class AuthUserUC {
    constructor(
        private database: UserGateway,
        private auth: AuthGateway,
        private hash: HashGateway
    ) { }

    async execute(email: string, password: string): Promise<string> {
        const user = await this.database.getUserByEmail(email);
        const isPasswordValid = await this.hash.compare(password, user.getPassword());
        if (!isPasswordValid) {
            throw new Error("Email ou senha inválidos!")
        }
        const token = this.auth.sign(user.getId());
        return token;
    }
}