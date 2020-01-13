import knex from 'knex'
import { UserDataGateway } from '../business/gateways/UserDataGateway';
import { User } from '../business/entities/User';

export class UserDatabase implements UserDataGateway {
    private connection: knex;

    constructor() {
        this.connection = knex({
            client: 'mysql',
            connection: {
                host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
                user: 'daniel',
                password: '0b741a51df3eb52305629b5c97960c31',
                database: 'daniel'
            }
        });
    }

    async insertUser(user: User) {
        await this.connection('food_users').insert(
            {
                id: user.getId(),
                email: user.getEmail(),
                userPassword: user.getPassword()
            }
        )
        return;
    }

    async getUser(email: string): Promise<User> {
        const result = await this.connection.raw(`
        SELECT * FROM food_users WHERE email = ${email};
        `);
        console.log("\n\n", result);
        throw new Error("Method not implemented.");
    }
}