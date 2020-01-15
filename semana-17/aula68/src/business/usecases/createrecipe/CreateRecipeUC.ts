import { AuthGateway } from "../../gateways/AuthGateway";
import { IdGeneratorGateway } from '../../gateways/IdGeneratorGateway';
import { RecipeGateway } from "../../gateways/RecipeGateway";
import { Recipe } from '../../entities/Recipe';


export class CreateRecipeUC {
    constructor(
        private database: RecipeGateway,
        private auth: AuthGateway,
        private idGenerator: IdGeneratorGateway
    ) { }

    async execute(recipeInput: CreateRecipeInput) {
        const tokenData = this.auth.verify(recipeInput.token);
        const newRecipe = new Recipe(
            this.idGenerator.generate(),
            recipeInput.title,
            recipeInput.description,
            new Date(),
            tokenData.id
        )
        await this.database.insertRecipe(newRecipe);
    }
}

export interface CreateRecipeInput {
    token: string,
    title: string,
    description: string,
}