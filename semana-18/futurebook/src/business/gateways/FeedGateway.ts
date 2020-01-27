import { Post, PostTypes } from "../entities/Post";

export interface FeedGateway {
    getUserFeedByType(userId: string,type: PostTypes, limit: number, offset: number): Promise<Post[]>;
    getUserFeed(userId: string, limit: number, offset: number): Promise<Post[]>;
}