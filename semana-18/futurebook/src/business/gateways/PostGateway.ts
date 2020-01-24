import { Post } from "../entities/Post";

export interface PostGateway{
    createPost(post: Post): Promise<void>;
}