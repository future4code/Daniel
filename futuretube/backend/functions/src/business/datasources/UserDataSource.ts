import { User } from "../entities/User";

export interface UserDataSource{
    updateUserPassword(id: string, newPassword: string): Promise<void>;
    fetchUserByEmail(email: string): Promise<User>;
    createUser(user: User): Promise<void>;
}