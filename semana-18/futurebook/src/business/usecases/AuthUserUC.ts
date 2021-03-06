import { UserDatabase } from '../../data/user/UserDatabase';
import { CryptoGateway } from '../gateways/CryptoGateway';
import { AuthGateway } from '../gateways/AuthGateway';

export class AuthUserUC {
    constructor(
        private database: UserDatabase,
        private hash: CryptoGateway,
        private auth: AuthGateway
    ) { }

    async execute(input: AuthUserInput): Promise<string> {
        const user = await this.database.fetchUserByEmail(input.email);
        const isPasswordValid = await this.hash.compare(input.password, user.getPassword());

        if (!isPasswordValid) {
            throw new Error("Email ou senha inválidos!")
        }

        const token = this.auth.sign(user.getId(), user.getEmail());
        return token;
    }
}

export interface AuthUserInput {
    email: string,
    password: string,
}