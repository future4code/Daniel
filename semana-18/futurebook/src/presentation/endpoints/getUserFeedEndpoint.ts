import { Request, Response } from 'express'
import { verifyToken } from '../auth/verifyToken';
import { GetUserFeedInput, GetUserFeedUC } from '../../business/usecases/GetUserFeedUC';
import { FeedDatabase } from '../../data/feed/FeedDatabase';

export async function getUserFeedEndpoint(req: Request, res: Response) {
    if (!req.headers.auth || isNaN(req.body.page)) {
        res.status(400).send();
        return;
    }
    try {
        const tokenData = verifyToken(req.headers.auth as string);
        const input: GetUserFeedInput = {
            id: tokenData.id,
            page: req.body.page || 1
        }

        const usecase = new GetUserFeedUC(new FeedDatabase());
        const result = await usecase.execute(input);
        res.send(result);
    } catch (e) {
        console.log(e);
        res.status(400).send({ message: e.message })
    }
}