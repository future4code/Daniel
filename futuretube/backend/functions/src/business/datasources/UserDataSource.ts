import { User } from "../entities/User";

export interface UserDataSource {
    getUserById(id: string): Promise<User>;
    updateUserPassword(id: string, newPassword: string): Promise<void>;
    getUserByEmail(email: string): Promise<User>;
    createUser(user: User): Promise<void>;
}