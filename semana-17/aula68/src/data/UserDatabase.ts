import knex from 'knex'
import { UserGateway } from '../business/gateways/UserGateway';
import { User } from '../business/entities/User';
import { FeedItem } from '../business/usecases/getuserfeed/GetUserFeedUC';

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
        try {
            await this.connection('food_users').insert(
                {
                    id: user.getId(),
                    email: user.getEmail(),
                    userPassword: user.getPassword()
                }
            );
        } catch (err) {
            if (err.errno === 1062) {
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

    async getUserById(id: string): Promise<User> {
        const result = await this.connection.raw(`
        SELECT * FROM food_users WHERE id = "${id}";
        `);
        const user = result[0][0];
        return new User(user.id, user.email, user.userPassword);
    }
    async updatePassword(id: string, newPassword: string): Promise<void> {
        await this.connection('food_users')
            .where({ id })
            .update({ userPassword: newPassword });
    }
    async followUser(id: string, followId: string): Promise<void> {
        await this.connection('food_user_relations').insert({
            follower_id: id,
            user_id: followId
        });
    }
    async getUserFeed(id: string): Promise<FeedItem[]> {
        const result = await this.connection.raw(`
        SELECT fu.email,fr.* FROM food_user_relations fur
        JOIN food_recipes fr ON fr.owner_id = user_id
        JOIN food_users fu ON fu.id = fr.owner_id
        WHERE follower_id = "${id}";
        `);
        const feed: FeedItem[] = result[0].map((item: FeedItemResult) => {
            return {
                ownerId: item.owner_id,
                ownerEmail: item.email,
                recipeId: item.id,
                title: item.title,
                description: item.description,
                createdDate: new Date(item.creation_date)
            }
        })
        return feed;
    }

}
interface FeedItemResult {
    email: string,
    id: string,
    title: string,
    description: string,
    creation_date: Date,
    owner_id: string
}