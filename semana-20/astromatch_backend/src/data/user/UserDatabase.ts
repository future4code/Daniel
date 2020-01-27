import { BaseDatabase } from "../base/BaseDatabase";
import { UserGateway } from '../../business/gateways/UserGateway';
import { User } from "../../business/entities/User";


interface UserModel {
    id: string,
    name: string,
    birthdate: Date,
    pwd: string,
    email: string,
    photo_url: string,
}

class EntityMapper {
    modelToEntity(model: any): User {
        return new User(
            model.id,
            model.name,
            model.pwd,
            model.email,
            model.photo_url,
            model.birthdate
        )
    }
    entityToModel(entity: User): UserModel {
        return {
            id: entity.getId(),
            name: entity.getName(),
            pwd: entity.getPassword(),
            email: entity.getEmail(),
            photo_url: entity.getPhotoUrl(),
            birthdate: entity.getbBirthdate()
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
            await this.connection('astromatch_users').insert(this.mapper.entityToModel(user));
        }
        catch (e) {
            if (e.errno === 1062) {
                throw new Error("Usuário já existe!");
            }
            throw new Error("Erro interno");
        }
    }


}