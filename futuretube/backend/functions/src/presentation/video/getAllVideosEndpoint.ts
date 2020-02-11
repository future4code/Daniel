import { Request, Response } from 'express';
import { GetAllVideosPaginatedUCInput, GetAllVideosPaginatedUC } from '../../business/usecases/video/GetAllVideosPaginatedUC';
import { VideoFirestoreDatabase } from '../../data/VideoFirestoreDatabase';
import { JwtAuthService } from '../../service/auth/JwtAuthService';


export async function getAllVideosEndpoint(req: Request, res: Response) {
    if (!req.headers.auth) {
        res.status(400).send("Requisição inválida!");
        return;
    }
    try {
        new JwtAuthService().verify(req.headers.auth as string);
        const page = req.query.page || 1;
        const input: GetAllVideosPaginatedUCInput = { page };
        const usecase = new GetAllVideosPaginatedUC(new VideoFirestoreDatabase());
        const result = await usecase.execute(input);
        res.send({
            videos: result
        });
    } catch (e) {
        console.log(e);
        res.status(400).send(e.message);
    }
}