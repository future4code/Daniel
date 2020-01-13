import { generateRandomId } from '../../utils/generateRandomId';
import { UserDataGateway } from '../../gateways/UserDataGateway';
import { HashGateway } from '../../gateways/HashGateway';
import { User } from '../../entities/User';

export class CreateUserUC {
    constructor(private database: UserDataGateway, private hash: HashGateway) { }

    async execute(input: CreateUserInput): Promise<void> {
        const id = generateRandomId();
        const password = await this.hash.generate(input.password);
        const user = new User(id, input.email, password);
        await this.database.insertUser(user);
    }
}

export interface CreateUserInput {
    email: string,
    password: string,
}