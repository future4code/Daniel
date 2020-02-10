import { VideoDataSource } from "../../datasources/VideoDataSource";
import { IdGateway } from "../../gateway/IdGateway";
import { Video } from "../../entities/Video";

export class UploadVideoUC{
    constructor(
        private datasource: VideoDataSource,
        private uidInterface: IdGateway,
    ){}
    private verifyIfFileExists(url: string) {
       console.log("verifyIfFileExists not implemented.");
    }
    private verifyVideoInfo(input: UploadUCInput) {
        if(input.title.length < 2 || input.title.length > 70){
            throw new Error("Tamanho do título não está dentro do permitido!");
        }
        if(input.description.length > 2000){
            throw new Error("Tamanho da descrição não está dentro da permitida!");
        }
    }
    async execute(input: UploadUCInput): Promise<void>{
        this.verifyIfFileExists(input.url);
        this.verifyVideoInfo(input);
        const uid = this.uidInterface.generate();
        const video = new Video(uid,input.title,input.description,input.ownerId,input.url);
        await this.datasource.createVideo(video);
    }


}

export interface UploadUCInput{
    url: string,
    title: string,
    description: string,
    ownerId: string
}