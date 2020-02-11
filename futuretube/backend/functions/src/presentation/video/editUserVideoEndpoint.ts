import { Request, Response } from 'express';
import { JwtAuthService } from '../../service/auth/JwtAuthService';
import { ChangeVideoInfoUC, ChangeVideoInfoUCInput } from '../../business/usecases/video/ChangeVideoInfoUC';
import { VideoFirestoreDatabase } from '../../data/VideoFirestoreDatabase';


export async function editUserVideoEndpoint(req: Request, res: Response) {
    if (!req.headers.auth || !req.body.videoId || (!req.body.title && !req.body.description)) {
        res.status(400).send("Requisição inválida!");
        return;
    }
    try {
        const tokenData = new JwtAuthService().verify(req.headers.auth as string);
        const input: ChangeVideoInfoUCInput = {
            userId: tokenData.id,
            videoId: req.body.videoId,
            title: req.body.title,
            description: req.body.description
        };
        const usecase = new ChangeVideoInfoUC(new VideoFirestoreDatabase());
        await usecase.execute(input);
        res.send({
            message: "Informações atualizadas com sucesso!"
        });
    } catch (e) {
        console.log(e);
        res.status(400).send(e.message);
    }
}