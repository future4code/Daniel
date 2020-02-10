import { UserDataSource } from "../datasources/UserDataSource";
import { User } from "../entities/User";
import { IdGateway } from "../gateway/IdGateway";
import { CryptoGateway } from "../gateway/CryptoGateway";
import { AuthGateway } from "../gateway/AuthGateway";


export class SignUpUC {
    constructor(
        private userDataSource: UserDataSource,
        private uidInterface: IdGateway,
        private crypto: CryptoGateway,
        private auth: AuthGateway
    ) { };
    //TODO: Validar email e a data de nascimento
    private validateUserInput(input: SignUpUCInput) {
        if (!input.email || !input.password || !input.name || !input.birthdate) {
            throw new Error("Campos inválidos!");
        }
    }
    async execute(input: SignUpUCInput): Promise<string> {
        this.validateUserInput(input);
        const uid = this.uidInterface.generate();
        const password = await this.crypto.hash(input.password);
        const user = new User(uid, input.name, input.email, password, input.photoUrl, new Date(input.birthdate));

        await this.userDataSource.createUser(user);
        const token = this.auth.sign(user.getId(), user.getEmail());

        return token;
    }
}

export interface SignUpUCInput {
    name: string,
    email: string,
    password: string,
    birthdate: string,
    photoUrl: string
}