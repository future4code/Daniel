import { User } from "../entities/User";

export interface UserDataGateway {
    insertUser(user: User): Promise<void>;
    getUser(email: string, password: string): Promise<User>;
}