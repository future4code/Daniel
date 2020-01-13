import { UserDataGateway } from '../../gateways/UserDataGateway';
import { JWTGateway } from '../../gateways/JWTGateway';
import { HashGateway } from '../../gateways/HashGateway';
import { User } from '../../entities/User';

export class AuthUserUC {
    constructor(
        private database: UserDataGateway,
        private jwt: JWTGateway,
        private hash: HashGateway
    ) { }

    async execute(email: string, password: string): Promise<string> {
        const user = await this.database.getUser(email);
        if (!this.hash.compare(password, user.getPassword())) {
            return "";
        }
        const token = this.jwt.sign(user.getId(), "teste", "1h");
        return token;
    }
}