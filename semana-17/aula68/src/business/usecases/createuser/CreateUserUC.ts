import { generateRandomId } from '../../utils/generateRandomId';
import { UserGateway } from '../../gateways/UserGateway';
import { HashGateway } from '../../gateways/HashGateway';
import { User } from '../../entities/User';
import { IdGeneratorGateway } from '../../gateways/IdGeneratorGateway';

export class CreateUserUC {
    constructor(private database: UserGateway, private hash: HashGateway, private idGenerator:IdGeneratorGateway) { }

    async execute(input: CreateUserInput): Promise<void> {
        const id = this.idGenerator.generate();
        const password = await this.hash.generate(input.password);
        const user = new User(id, input.email, password);
        await this.database.insertUser(user);
    }
}

export interface CreateUserInput {
    email: string,
    password: string,
}