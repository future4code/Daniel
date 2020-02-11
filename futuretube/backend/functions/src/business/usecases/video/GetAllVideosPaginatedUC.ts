import { VideoDataSource } from '../../datasources/VideoDataSource';
import { Video } from '../../entities/Video';

export class GetAllVideosPaginatedUC {
    private static VIDEO_BY_PAGE = 10;
    constructor(
        private datasource: VideoDataSource
    ) { }
    private getOffset(page: number): number {
        return GetAllVideosPaginatedUC.VIDEO_BY_PAGE * (page - 1);
    }
    public async execute(input: GetAllVideosPaginatedUCInput): Promise<GetAllVideosPaginatedUCOutput[]> {
        const page = input.page <= 0 ? 1 : input.page;

        const feed = await this.datasource.getAllVideos(GetAllVideosPaginatedUC.VIDEO_BY_PAGE, this.getOffset(page));
        
        return feed.map((video: Video) => {
            return {
                id: video.getId(),
                title: video.getTitle(),
                url: video.getUrl()
            }
        });

    }
}

export interface GetAllVideosPaginatedUCInput {
    page: number
}

interface GetAllVideosPaginatedUCOutput {
    id: string,
    title: string,
    url: string
}