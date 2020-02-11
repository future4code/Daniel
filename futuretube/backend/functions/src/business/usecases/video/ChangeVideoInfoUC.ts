import { VideoDataSource } from '../../datasources/VideoDataSource';

export class ChangeVideoInfoUC {
    constructor(
        private datasource: VideoDataSource
    ) { }
    private verifyVideoTitle(title: string): void {
        if (title.length < 2 || title.length > 70) {
            throw new Error("Tamanho do título não está dentro do permitido!");
        }
    }
    private verifyVideoDescription(description: string): void {
        if (description.length > 2000) {
            throw new Error("Tamanho da descrição não está dentro da permitida!");
        }
    }
    public async execute(input: ChangeVideoInfoUCInput): Promise<void> {
        if (!input.title && !input.description) {
            throw Error("Sem campos para alterar!");
        }

        const video = await this.datasource.getVideo(input.videoId);
        if (video.getOwnerId() == input.userId) {
            if(input.title == video.getTitle() || input.description == video.getDescription()){
                throw new Error("Campos iguais aos do video!")
            }
            if (input.title) {
                this.verifyVideoTitle(input.title);
                await this.datasource.updateVideoTitle(input.videoId, input.title);
            }
            if (input.description) {
                this.verifyVideoDescription(input.description);
                await this.datasource.updatedVideoDescription(input.videoId, input.description);
            }
        }
        else {
            throw new Error("Não tem permissão para editar o video!");
        }
    }
}

export interface ChangeVideoInfoUCInput {
    videoId: string,
    userId: string,
    title?: string,
    description?: string
}