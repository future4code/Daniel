import knex from 'knex'
import { RecipeGateway } from '../business/gateways/RecipeGateway';
import { Recipe } from '../business/entities/Recipe';

export class RecipeDatabase implements RecipeGateway {
    private connection: knex;

    constructor() {
        this.connection = knex({
            client: 'mysql',
            connection: {
                host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
                user: 'daniel',
                password: '0b741a51df3eb52305629b5c97960c31',
                database: 'daniel'
            }
        });
    }

    async insertRecipe(recipe: Recipe) {
        try {
            await this.connection('food_recipes').insert(
                {
                    id: recipe.getId(),
                    title: recipe.getTitle(),
                    description: recipe.getDescription(),
                    creation_date: recipe.getCreationDate(),
                    owner_id: recipe.getOwnerId()
                }
            );
        } catch (err) {
            console.log(err);
            throw new Error("Não foi possível a receita.");
        }
    }

}