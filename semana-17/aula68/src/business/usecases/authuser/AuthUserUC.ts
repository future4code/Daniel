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
        let user: User;
        let token: string;
        try {
            user = await this.database.getUser(email, password);
            if (!this.hash.compare(password, user.getPassword())) {
                return "";
            }
        } catch (err) {
            console.log(err)
        }
        token = this.jwt.sign(user.getId(), "", { expiresIn: "1h" });
        return token;
    }
}