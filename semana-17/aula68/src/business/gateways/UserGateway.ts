import { User } from "../entities/User";

export interface UserGateway {
    updatePassword(id: string, newPassword: string): Promise<void>;
    insertUser(user: User): Promise<void>;
    getUserByEmail(email: string): Promise<User>;
    getUserById(id: string): Promise<User>;
}