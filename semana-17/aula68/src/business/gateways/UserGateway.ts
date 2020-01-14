import { User } from "../entities/User";

export interface UserGateway {
    insertUser(user: User): Promise<void>;
    getUserByEmail(email: string): Promise<User>;
}