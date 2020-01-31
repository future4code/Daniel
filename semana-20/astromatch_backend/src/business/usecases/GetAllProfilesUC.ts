import { UserGateway } from '../gateways/UserGateway';

export class GetAllProfilesUC {
    constructor(
        private database: UserGateway
    ) { }

    async execute(): Promise<GetAllProfilesOutput> {
        const users = await this.database.fetchAllUsers();
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

interface GetAllProfilesOutput {
    profiles: Profile[]
}

interface Profile {
    name: string,
    birthdate: string,
    photoUrl: string
}