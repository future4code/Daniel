import { BaseDatabase } from "../base/baseDatabase";
import { PostGateway } from '../../business/gateways/PostGateway';
import { Post } from "../../business/entities/Post";


interface PostModel {
    id: string,
    photo_url: string,
    description: string,
    creation_date: Date,
    post_type: string,
    owner_id: string
}

class PostEntityMapper {
    modelToEntity(model: any): Post {
        return new Post(
            model.id,
            model.photo_url,
            model.description,
            model.creation_date,
            model.post_type,
            model.owner_id
        )
    }
    entityToModel(entity: Post): PostModel {
        return {
            id: entity.getId(),
            photo_url: entity.getPhotoUrl(),
            description: entity.getDescription(),
            creation_date: entity.getCreationDate(),
            post_type: entity.getType(),
            owner_id: entity.getOwnerId()
        }
    }
}
export class PostDatabase extends BaseDatabase implements PostGateway {
    private mapper: PostEntityMapper;
    constructor() {
        super();
        this.mapper = new PostEntityMapper();
    }
    async createPost(post: Post): Promise<void> {
        await this.connection('f4book_posts').insert(this.mapper.entityToModel(post))
    }

}