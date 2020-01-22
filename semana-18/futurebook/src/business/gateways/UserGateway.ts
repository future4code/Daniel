import { User } from "../entities/User";

export interface UserGateway {
    registerUser(user: User): Promise<void>;
    fetchUserByEmail(email:string): Promise<User>;
}