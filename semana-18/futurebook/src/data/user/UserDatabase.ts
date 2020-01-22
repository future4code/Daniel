import { UserGateway } from '../../business/gateways/UserGateway';
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
}