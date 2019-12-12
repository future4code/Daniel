import { Dish } from "./dish";

export class SaltyDish extends Dish {
  constructor(
    name:string,
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number
  ) {
    super(name,price, cost, ingredients, timeToCook);
  }

  public cook(): void {
    console.log("Starting Salty Dish")
  }
}
