import { UserGateway, UserGatewayRelationInput } from '../../business/gateways/UserGateway';
import { BaseDatabase } from '../base/baseDatabase';
import { User } from '../../business/entities/User';

interface UserModel {
    id: string,
    name: string,
    pwd: string,
    email: string
}

class EntityMapper {
    modelToEntity(model: any): User {
        return new User(
            model.id,
            model.name,
            model.pwd,
            model.email
        )
    }
    entityToModel(entity: User): UserModel {
        return {
            id: entity.getId(),
            name: entity.getName(),
            pwd: entity.getPassword(),
            email: entity.getEmail()
        }
    }
}
export class UserDatabase extends BaseDatabase implements UserGateway {
    private mapper: EntityMapper

    constructor() {
        super();
        this.mapper = new EntityMapper();
    }

    async registerUser(user: User): Promise<void> {
        try {
            await this.connection('f4book_users').insert(this.mapper.entityToModel(user));
        }
        catch (e) {
            if (e.errno === 1062) {
                throw new Error("Usuário já existe!");
            }
            throw new Error("Erro interno");
        }
    }

    async fetchUserByEmail(email: string): Promise<User> {
        const result = await this.connection('f4book_users').where({ email: `${email}` });
        return this.mapper.modelToEntity(result[0]);
    }

    async getUserRelation(input: UserGatewayRelationInput): Promise<boolean> {
        const queryResult = await this.connection('f4book_users_relations').where({
            follower_id: input.userId,
            followed_id: input.followedId
        });
        return !!queryResult[0];
    }
    async createUserRelation(input: UserGatewayRelationInput): Promise<void> {
        try {
            await this.connection('f4book_users_relations').insert({
                follower_id: input.userId,
                followed_id: input.followedId
            });
        } catch (e) {
            throw new Error("Não foi possível criar relação.");
        }
    }
    async deleteUserRelation(input: UserGatewayRelationInput): Promise<void> {
        await this.connection('f4book_users_relations').where({
            follower_id: input.userId,
            followed_id: input.followedId
        }).del();
    }
}