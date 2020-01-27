import { AuthGateway } from "../gateways/AuthGateway";
import { UserGateway } from '../gateways/UserGateway';

export class ToogleRelationsUser {
    constructor(
        private database: UserGateway,
        private auth: AuthGateway
    ) { }

    async execute(input: ToggleUserRelationInput): Promise<void> {
        const user = await this.database.fetchUserByEmail(input.email);
        const relationInput = {
            userId: user.getId(),
            followedId: input.followedId
        };

        const isUserAlreadyFriend = await this.database.getUserRelation(relationInput);

        if (!isUserAlreadyFriend) {
            await this.database.createUserRelation(relationInput);
        }
        else {
            await this.database.deleteUserRelation(relationInput);
        }
    }
}

export interface ToggleUserRelationInput {
    email: string,
    followedId: string,
}