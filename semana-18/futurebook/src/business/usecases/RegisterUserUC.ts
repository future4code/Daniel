import { User } from "../entities/User";
import { UserGateway } from "../gateways/UserGateway";
import { CryptoGateway } from "../gateways/CryptoGateway";
import { IdGateway } from "../gateways/IdGateway";
import { AuthGateway } from "../gateways/AuthGateway";

export class RegisterUserUC {
    constructor(
        private database: UserGateway,
        private crypto: CryptoGateway,
        private idGenerator: IdGateway,
        private auth: AuthGateway
    ) { }

    async execute(input: RegisterUserInput): Promise<string> {
        this.validateUserInput(input);
        const id = this.idGenerator.generate();
        const password = await this.crypto.hash(input.password)
        const user = new User(id, input.name, password, input.email);

        await this.database.registerUser(user);
        const token = this.auth.sign(user.getId(), user.getEmail());

        return token;
    }

    private validateUserInput(input: RegisterUserInput) {
        if (!input.email || !input.password || !input.name) {
            throw new Error("Campos inválidos!");
        }
    }
}

export interface RegisterUserInput {
    email: string,
    password: string,
    name: string
}