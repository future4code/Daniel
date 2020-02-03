import { BaseDatabase } from "../base/BaseDatabase";
import { UserGateway, UserGatewayMatchInput } from '../../business/gateways/UserGateway';
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
            await this.connection(`${BaseDatabase.DB_PREFIX_NAME}_users`).insert(this.mapper.entityToModel(user));
        }
        catch (e) {
            if (e.errno === 1062) {
                throw new Error("Usuário já existe!");
            }
            throw new Error("Erro interno");
        }
    }
    async fetchUserByEmail(email: string): Promise<User> {
        const result = await this.connection(`${BaseDatabase.DB_PREFIX_NAME}_users`).where({ email: `${email}` });
        return this.mapper.modelToEntity(result[0]);
    }
    async fetchUserById(id: string): Promise<User> {
        const result = await this.connection(`${BaseDatabase.DB_PREFIX_NAME}_users`).where({ id: `${id}` });
        return this.mapper.modelToEntity(result[0]);
    }
    async fetchAllUsers(): Promise<User[]> {
        const queryResult = await this.connection(`${BaseDatabase.DB_PREFIX_NAME}_users`).select('*');
        const users = queryResult.map(user => this.mapper.modelToEntity(user));
        return users;
    }
    async updatePassword(id: string, newPassword: string): Promise<void> {
        await this.connection(`${BaseDatabase.DB_PREFIX_NAME}_users`)
            .where({ id })
            .update({ userPassword: newPassword });
    }

    async deleteUserMatch(matchInput: UserGatewayMatchInput): Promise<void> {
        await this.connection(`${BaseDatabase.DB_PREFIX_NAME}_match_users`).where({
            user_id: matchInput.id,
            match_id: matchInput.matchId
        }).del();
    }
    async createUserMatch(matchInput: UserGatewayMatchInput): Promise<void> {
        try {
            await this.connection(`${BaseDatabase.DB_PREFIX_NAME}_match_users`).insert({
                user_id: matchInput.id,
                match_id: matchInput.matchId
            });
            const isAMatch = await this.verifyUserMatch({
                id: matchInput.matchId,
                matchId: matchInput.id
            });
            if (isAMatch) {
                await this.connection.raw(`
                    UPDATE ${BaseDatabase.DB_PREFIX_NAME}_match_users
                    SET is_match = true
                    WHERE (user_id = ${matchInput.id} and match_id = ${matchInput.matchId}) 
                    OR (user_id = ${matchInput.matchId} and match_id = ${matchInput.id});
                `);
            }
        } catch (e) {
            throw new Error("Não foi possível dar match");
        }
    }
    async verifyUserMatch(matchInput: UserGatewayMatchInput): Promise<boolean> {
        const queryResult = await this.connection(`${BaseDatabase.DB_PREFIX_NAME}_match_users`).where({
            user_id: matchInput.id,
            match_id: matchInput.matchId
        });
        return !!queryResult[0];
    }

    async fetchAllMatches(id: string): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
}