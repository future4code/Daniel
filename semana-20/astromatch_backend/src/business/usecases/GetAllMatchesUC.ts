import { UserGateway } from '../gateways/UserGateway';

export class GetAllMatchesUc{
    constructor(
        private database: UserGateway
    ){}

    async execute(input: GetAllMatchesInput): Promise<GetAllMatchesOutput>{
        const users = await this.database.fetchAllMatches(input.id);
        const profiles = users.map(user => {
            return {
                name: user.getName(),
                birthdate: user.getbBirthdate().toISOString(),
                photoUrl: user.getPhotoUrl()
            };
        });
        return { profiles };
    }
}

export interface GetAllMatchesInput{
    id: string
}
interface GetAllMatchesOutput{
    profiles: MatchProfile[]
}
interface MatchProfile {
    name: string,
    birthdate: string,
    photoUrl: string
}