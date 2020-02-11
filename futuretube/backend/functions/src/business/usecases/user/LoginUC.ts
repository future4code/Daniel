import { UserDataSource } from '../../datasources/UserDataSource';
import { CryptoGateway } from '../../gateway/CryptoGateway';
import { AuthGateway } from '../../gateway/AuthGateway';

export class LoginUC {
    constructor(
        private datasource: UserDataSource,
        private crypto: CryptoGateway,
        private auth: AuthGateway
    ) { }

    public async execute(input: LoginUCInput): Promise<string> {
        const user = await this.datasource.getUserByEmail(input.email);
        const isPasswordValid = await this.crypto.compare(input.password, user.getPassword());

        if (!isPasswordValid) {
            throw new Error("Email ou senha incorretos!")
        }

        const token = this.auth.sign(user.getId(), user.getEmail());
        return token
    }
}

export interface LoginUCInput {
    email: string,
    password: string,
}