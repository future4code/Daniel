import { VideoDataSource } from '../../datasources/VideoDataSource';

export class DeleteVideoUC{
    constructor(
        private datasource: VideoDataSource
    ){}

    public async execute(input: DeleteVideoUCInput): Promise<void>{
        const video = await this.datasource.getVideo(input.videoId);
        if(video.getOwnerId() == input.userId){
            await this.datasource.deleteVideo(input.videoId);
        }
        else{
            throw new Error("Não tem permissão para editar o video!");
        }
    }
}

export interface DeleteVideoUCInput{
    userId: string,
    videoId: string
}