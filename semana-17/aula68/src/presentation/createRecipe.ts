import { Request, Response } from 'express'
import { JWTService } from '../service/JWTService';
import { CreateRecipeInput, CreateRecipeUC } from '../business/usecases/createrecipe/CreateRecipeUC';
import { RecipeDatabase } from '../data/RecipeDatabase';
import { generateRandomId } from '../business/utils/generateRandomId';

export async function createRecipe(req: Request, res: Response) {

    const token = <string>req.headers.auth;
    if (!token) {
        res.status(400).send();
        return;
    }
    if (!req.body.title || !req.body.description) {
        res.status(400).send();
        return;
    }
    const userInput: CreateRecipeInput = {
        token: token,
        title: req.body.title,
        description: req.body.description
    }
    try {
        const useCase = new CreateRecipeUC(new RecipeDatabase, new JWTService, new generateRandomId);
        await useCase.execute(userInput);
        res.send({
            message: "Receita criada com sucesso"
        });
    } catch (e) {
        console.log(e)
        res.status(400).send(e.message);
    }
}
