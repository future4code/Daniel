import { Request, Response } from 'express';
import { JwtAuthService } from '../../service/auth/JwtAuthService';
import { GetVideoInfoUCInput, GetVideoInfoUC } from '../../business/usecases/video/GetVideoInfoUC';
import { VideoFirestoreDatabase } from '../../data/VideoFirestoreDatabase';
import { UserFirestoreDatabase } from '../../data/UserFirestoreDatabase';


export async function getVideoInfoEndpoint(req: Request, res: Response) {
    if (!req.headers.auth || !req.query.videoId ) {
        res.status(400).send("Requisição inválida!");
        return;
    }
    try {
        new JwtAuthService().verify(req.headers.auth as string);
        const input: GetVideoInfoUCInput = { videoId: req.query.videoId };
        const usecase = new GetVideoInfoUC(new VideoFirestoreDatabase(),new UserFirestoreDatabase());
        const result = await usecase.execute(input);
        res.send({
            result
        });
    } catch (e) {
        console.log(e);
        res.status(400).send(e.message);
    }
}