import { VideoDataSource } from '../../datasources/VideoDataSource';
import { Video } from '../../entities/Video';

export class GetUserVideosUC {
    constructor(
        private datasource: VideoDataSource
    ) { }

    async execute(input: GetUserVideosUCInput): Promise<Video[]> {
        const videos = await this.datasource.fetchUserVideos(input.id);
        return videos
    }
}

export interface GetUserVideosUCInput {
    id: string
}