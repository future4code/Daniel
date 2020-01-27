import { UserGateway } from "../gateways/UserGateway";
import { CryptoGateway } from "../gateways/CryptoGateway";
import { IdGateway } from "../gateways/IdGateway";
import { AuthGateway } from "../gateways/AuthGateway";
import { User } from "../entities/User";

export class UserSignupUC {
    constructor(
        private database: UserGateway,
        private crypto: CryptoGateway,
        private id: IdGateway,
        private auth: AuthGateway
    ) { }

    async execute(input: UserSignupInput): Promise<string> {
        this.validateUserInput(input);
        const id = this.id.generate();
        const password = await this.crypto.hash(input.password)
        const user = new User(id, input.name, password, input.email, input.photoUrl, input.birthdate);

        await this.database.registerUser(user);
        const token = this.auth.sign(user.getId(), user.getEmail());

        return token;
    }

    private validateUserInput(input: UserSignupInput) {
        if (!input.email || !input.password || !input.name || !input.photoUrl) {
            throw new Error("Campos inválidos!");
        }
    }
}

export interface UserSignupInput {
    email: string,
    password: string,
    name: string,
    photoUrl: string,
    birthdate: Date
} 