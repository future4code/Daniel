import { BaseDatabase } from "../base/baseDatabase";
import { FeedGateway } from '../../business/gateways/FeedGateway';
import { Post, PostTypes } from "../../business/entities/Post";

export class FeedDatabase extends BaseDatabase implements FeedGateway {
    async getUserFeed(userId: string, limit: number, offset: number): Promise<Post[]> {
        const queryResult = await this.connection.raw(`
        SELECT p.* FROM f4book_users u
        JOIN f4book_users_relations ur ON ur.follower_id = u.id
        JOIN f4book_posts p ON p.owner_id = ur.followed_id
        WHERE u.id = "${userId}"
        ORDER BY p.creation_date desc
        LIMIT ${limit} OFFSET ${offset};
        `);
        return queryResult[0].map(this.modelDbToEntity);
    }
    async getUserFeedByType(userId: string, type: PostTypes, limit: number, offset: number): Promise<Post[]> {
        const queryResult = await this.connection.raw(`
        SELECT p.* FROM f4book_users u
        JOIN f4book_users_relations ur ON ur.follower_id = u.id
        JOIN f4book_posts p ON p.owner_id = ur.followed_id
        WHERE u.id = "${userId}" and p.post_type = "${type}"
        ORDER BY p.creation_date desc
        LIMIT ${limit} OFFSET ${offset};
        `);
        return queryResult[0].map(this.modelDbToEntity);
    }
    modelDbToEntity(model: any): Post {
        return new Post(
            model.id,
            model.photo_url,
            model.description,
            new Date(model.creation_date),
            model.post_type,
            model.owner_id
        );
    }

}