import { FeedGateway } from "../gateways/FeedGateway";

export class GetUserFeedUC {
    private static POSTS_BY_PAGE = 10;
    constructor(
        private database: FeedGateway
    ) { }

    async execute(input: GetUserFeedInput): Promise<GetUserFeedOutput> {
        const page = input.page <= 0 ? 1 : input.page;
        console.log(page);
        const offset = GetUserFeedUC.POSTS_BY_PAGE * (page - 1);

        const postList = await this.database.getUserFeed(input.id, GetUserFeedUC.POSTS_BY_PAGE, offset);

        return {
            feed: postList.map(post => {
                return {
                    id: post.getId(),
                    photoUrl: post.getPhotoUrl(),
                    creationDate: post.getCreationDate(),
                    description: post.getDescription(),
                    ownerId: post.getOwnerId()
                }
            })
        }
    }
}

export interface GetUserFeedInput {
    id: string,
    page: number
}

interface GetUserFeedOutput {
    feed: GetUserFeedItem[]
}

interface GetUserFeedItem {
    id: string,
    photoUrl: string,
    creationDate: Date,
    description: string,
    ownerId: string,
}