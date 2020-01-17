import { AuthGateway } from '../../gateways/AuthGateway';
import { UserGateway } from '../../gateways/UserGateway';

export class FollowUserUC{
    constructor(
        private database: UserGateway,
        private auth: AuthGateway
    ){}

    async execute(userInput: FollowUserInput){
        const tokenData = this.auth.verify(userInput.token);
        const user = await this.database.getUserById(tokenData.id);
        await this.database.followUser(user.getId(),userInput.followId);
    }
}

export interface FollowUserInput{
    token: string,
    followId: string
}