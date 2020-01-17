import { User } from "../entities/User";
import { FeedItem } from "../usecases/getuserfeed/GetUserFeedUC";

export interface UserGateway {
    followUser(id: string, followId: string): Promise<void>;
    updatePassword(id: string, newPassword: string): Promise<void>;
    insertUser(user: User): Promise<void>;
    getUserByEmail(email: string): Promise<User>;
    getUserById(id: string): Promise<User>;
    getUserFeed(id: string): Promise<FeedItem[]>;
}