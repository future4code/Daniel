import { IdGateway } from '../gateways/IdGateway';
import { PostTypes, Post } from '../entities/Post';
import { PostGateway } from '../gateways/PostGateway';

export class CreatePostUC {
    constructor(
        private database: PostGateway,
        private idGenerator: IdGateway
    ) { }

    async execute(input: CreatePostInput): Promise<void> {
        const post = new Post(this.idGenerator.generate(),
            input.photoUrl,
            input.description,
            new Date(),
            input.type,
            input.ownerId
        );
        await this.database.createPost(post);
    }
}

export interface CreatePostInput {
    photoUrl: string,
    description: string,
    type: PostTypes,
    ownerId: string,
}