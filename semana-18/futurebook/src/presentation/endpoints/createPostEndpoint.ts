import { Request, Response } from 'express'
import { verifyToken } from '../auth/verifyToken';
import { CreatePostInput, CreatePostUC } from '../../business/usecases/CreatePostUC';
import { PostDatabase } from '../../data/post/PostDatabase';
import { Uuid } from '../../service/util/uuid';

export async function createPostEndpoint(req: Request, res: Response) {
    if (!req.headers.auth || !req.body.photoUrl || !req.body.description || !req.body.type) {
        res.status(400).send();
        return;
    }
    try {
        const tokenData = verifyToken(req.headers.auth as string);
        const input: CreatePostInput = {
            photoUrl: req.body.photoUrl,
            description: req.body.description,
            type: req.body.type,
            ownerId: tokenData.id
        }
        const usecase = new CreatePostUC(new PostDatabase(), new Uuid());
        await usecase.execute(input);
        res.send({ message: "Post criado com sucesso!" });
    } catch (e) {
        console.log(e);
        res.status(400).send({ message: e.message })
    }
}