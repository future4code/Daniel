import { AuthGateway } from '../../gateways/AuthGateway';
import { UserGateway } from '../../gateways/UserGateway';


export class GetUserFeedUC {
    constructor(
        private database: UserGateway,
        private auth: AuthGateway
    ) { }

    async execute(token: string): Promise<FeedItem[]> {
        const tokenData = this.auth.verify(token);
        const user = await this.database.getUserById(tokenData.id);
        const feed: FeedItem[] = await this.database.getUserFeed(user.getId());
        return feed;
    }
}

export interface FeedItem {
    ownerId: string,
    ownerEmail: string,
    recipeId: string,
    title: string,
    description: string,
    createdAt: Date,
}