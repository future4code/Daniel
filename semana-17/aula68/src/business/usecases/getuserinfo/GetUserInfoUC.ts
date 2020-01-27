import { UserGateway } from '../../gateways/UserGateway';
import { AuthGateway } from '../../gateways/AuthGateway';
import { HashGateway } from '../../gateways/HashGateway';

export class GetUserInfoUC {
    constructor(
        private database: UserGateway,
        private auth: AuthGateway
    ) { }

    async execute(token: string): Promise<GetUserInfoOutput> {
        const tokenData = this.auth.verify(token);
        const user = await this.database.getUserById(tokenData.id);
        return {
            email: user.getEmail(),
            id: user.getId()
        }
    }
}

export interface GetUserInfoOutput {
    email: string,
    id: string,
}
