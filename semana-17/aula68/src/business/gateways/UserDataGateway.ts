import { User } from "../entities/User";

export interface UserDataGateway{
    insertUser(user: User): Promise<void>;
}