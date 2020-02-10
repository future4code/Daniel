import { Response, Request } from "express";
import { JwtAuthService } from "../../service/auth/JwtAuthService";
import { UploadUCInput, UploadVideoUC } from "../../business/usecases/video/UploadVideoUC";
import { VideoFirestoreDatabase } from '../../data/VideoFirestoreDatabase';
import { UuidV4 } from '../../service/uidGenerator/uid';

export async function uploadVideoEndpoint(req: Request, res: Response) {
    if (!req.headers.auth || !req.body.title || !req.body.description || !req.body.url) {
        res.status(400).send("Requisição inválida!");
        return;
    }

    try {
        const tokenData = new JwtAuthService().verify(req.headers.auth as string);
        const input: UploadUCInput = {
            ownerId: tokenData.id,
            title: req.body.title,
            description: req.body.description,
            url: req.body.url
        };
        const usecase = new UploadVideoUC(new VideoFirestoreDatabase(), new UuidV4());
        await usecase.execute(input);
        res.send({
            message: "Video enviado com sucesso!"
        });
    } catch (e) {
        console.log(e);
        res.status(400).send(e.message);
    }
}