import { Request, Response } from 'express'
import { verifyToken } from '../auth/verifyToken';
import { FeedDatabase } from '../../data/feed/FeedDatabase';
import { PostTypes } from '../../business/entities/Post';
import { GetUserFeedByTypeInput, GetUserFeedByTypeUC } from '../../business/usecases/GetUserFeedByTypeUC';

export async function getUserFeedByTypeEndpoint(req: Request, res: Response) {
    if (!req.headers.auth || isNaN(req.body.page) || !(req.body.type in PostTypes)) {
        res.status(400).send();
        return;
    }
    try {
        const tokenData = verifyToken(req.headers.auth as string);
        const input: GetUserFeedByTypeInput = {
            id: tokenData.id,
            page: req.body.page || 1,
            type: req.body.type
        }
        const usecase = new GetUserFeedByTypeUC(new FeedDatabase());
        const result = await usecase.execute(input);
        res.send(result);
    } catch (e) {
        console.log(e);
        res.status(400).send({ message: e.message })
    }
}