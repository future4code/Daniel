import knex from 'knex'
import { UserGateway } from '../business/gateways/UserGateway';
import { User } from '../business/entities/User';

export class UserDatabase implements UserGateway {
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
        try{
        await this.connection('food_users').insert(
            {
                id: user.getId(),
                email: user.getEmail(),
                userPassword: user.getPassword()
            }
        );
        }catch(err){
            if(err.errno === 1062){
                throw new Error("Email já está cadastrado!");
            }
            throw new Error("Não foi possível criar o usuário.");
        }
    }

    async getUserByEmail(email: string): Promise<User> {
        const result = await this.connection.raw(`
        SELECT * FROM food_users WHERE email = "${email}";
        `);
        const user = result[0][0];
        return new User(user.id, user.email, user.userPassword);
    }
}