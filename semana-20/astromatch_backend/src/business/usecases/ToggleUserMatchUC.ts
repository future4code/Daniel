import { UserGateway } from '../gateways/UserGateway';

export class ToggleUserMatchUC {
    constructor(
        private database: UserGateway
    ) { }

    async execute(input: ToggleUserMatchInput): Promise<void> {
        const user = await this.database.fetchUserByEmail(input.email);

        const matchInput = {
            id: user.getId(),
            matchId: input.matchId
        };

        const isUserAlreadyMatched = await this.database.verifyUserMatch(matchInput);

        if (!isUserAlreadyMatched) {
            await this.database.createUserMatch(matchInput);
        }
        else {
            await this.database.deleteUserMatch(matchInput);
        }
    }
}

export interface ToggleUserMatchInput{
    email: string,
    matchId: string
}