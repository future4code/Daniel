import { Request } from 'express';
import { Response } from 'express';
import { JwtAuthService } from '../../service/auth/JwtAuthService';
import { GetUserVideosUC, GetUserVideosUCInput } from '../../business/usecases/video/GetUserVideoUC';
import { VideoFirestoreDatabase } from '../../data/VideoFirestoreDatabase';
import { Video } from '../../business/entities/Video';

export async function getUserVideosEndpoint(req: Request, res: Response) {
    if (!req.headers.auth) {
        res.status(400).send("Requisição inválida!");
        return;
    }
    try {
        const tokenData = new JwtAuthService().verify(req.headers.auth as string);
        const queryId = req.query.id;
        const input: GetUserVideosUCInput = {
            id: queryId || tokenData.id
        };
        const usecase = new GetUserVideosUC(new VideoFirestoreDatabase());
        const videos = await usecase.execute(input);
        const result = videos.map((video: Video) =>{
            return {
                id: video.getId(),
                url: video.getUrl(),
                title: video.getTitle()
            };
        });
        res.send(result);
    } catch (e) {
        console.log(e);
        res.status(400).send(e.message);
    }
}