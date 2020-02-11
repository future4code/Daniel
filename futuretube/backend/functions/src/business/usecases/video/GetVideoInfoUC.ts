import { VideoFirestoreDatabase } from "../../../data/VideoFirestoreDatabase";
import { UserDataSource } from "../../datasources/UserDataSource";

export class GetVideoInfoUC {
    constructor(
        private datasource: VideoFirestoreDatabase,
        private userDataSource: UserDataSource
    ) { }

    public async execute(input: GetVideoInfoUCInput): Promise<GetVideoInfoUCOutput> {
        const video = await this.datasource.getVideo(input.videoId);
        const user = await this.userDataSource.getUserById(video.getOwnerId());
        return {
            video: {
                id: video.getId(),
                title: video.getTitle(),
                description: video.getDescription(),
                url: video.getUrl()
            },
            user: {
                name: user.getName(),
                photoUrl: user.getPhotoUrl(),
                id: user.getId()
            }
        }
    }
}

export interface GetVideoInfoUCInput {
    videoId: string
}

interface GetVideoInfoUCOutput {
    video: {
        id: string,
        title: string,
        description: string,
        url: string
    },
    user: {
        name: string,
        photoUrl: string
        id: string
    }
}