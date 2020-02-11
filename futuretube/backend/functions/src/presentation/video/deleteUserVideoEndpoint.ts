import { Request, Response } from 'express';
import { JwtAuthService } from '../../service/auth/JwtAuthService';
import { DeleteVideoUCInput, DeleteVideoUC } from '../../business/usecases/video/DeleteVideoUC';
import { VideoFirestoreDatabase } from '../../data/VideoFirestoreDatabase';

export async function deleteUserVideoEnpoint(req: Request, res: Response){
    if (!req.headers.auth || !req.body.videoId) {
        res.status(400).send("Requisição inválida!");
        return;
    }
    try{
        const tokenData = new JwtAuthService().verify(req.headers.auth as string);
        const input: DeleteVideoUCInput = {
            userId: tokenData.id,
            videoId: req.body.videoId,
        }
        const usecase = new DeleteVideoUC(new VideoFirestoreDatabase());
        await usecase.execute(input);
        res.send({
            message: "Video excluido com sucesso!"
        });
    }catch(e){
        console.log(e);
        res.status(400).send(e.message);
    }

}