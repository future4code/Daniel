import { VideoDataSource } from '../../datasources/VideoDataSource';
import { Video } from '../../entities/Video';

export class GetUserVideosUC {
    constructor(
        private datasource: VideoDataSource
    ) { }

    public async execute(input: GetUserVideosUCInput): Promise<Video[]> {
        const videos = await this.datasource.getUserVideos(input.id);
        return videos
    }
}

export interface GetUserVideosUCInput {
    id: string
}
