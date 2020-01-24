import { FeedGateway } from "../gateways/FeedGateway";
import { PostTypes } from "../entities/Post";

export class GetUserFeedByTypeUC {
    private static POSTS_BY_PAGE = 10;
    constructor(
        private database: FeedGateway
    ) { }

    async execute(input: GetUserFeedByTypeInput): Promise<GetUserFeedByTypeOutput> {
        const page = input.page <= 0 ? 1 : input.page;
        const offset = GetUserFeedByTypeUC.POSTS_BY_PAGE * (page - 1);

        const postList = await this.database.getUserFeedByType(input.id,input.type, GetUserFeedByTypeUC.POSTS_BY_PAGE, offset);

        return {
            feed: postList.map(post => {
                return {
                    id: post.getId(),
                    photoUrl: post.getPhotoUrl(),
                    creationDate: post.getCreationDate(),
                    description: post.getDescription(),
                    ownerId: post.getOwnerId(),
                    type: post.getType()
                }
            })
        }
    }
}

export interface GetUserFeedByTypeInput {
    id: string,
    page: number,
    type: PostTypes
}

interface GetUserFeedByTypeOutput {
    feed: GetUserFeedByTypeItem[]
}

interface GetUserFeedByTypeItem {
    id: string,
    photoUrl: string,
    creationDate: Date,
    description: string,
    ownerId: string,
}