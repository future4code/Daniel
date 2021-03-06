import Employee from "./employee";
import { Dish } from "../dish/dish";
import { menu } from "..";

export class Chef extends Employee {
    private job: string;

    constructor(name: string, salary: number) {
        super(name, salary);
        this.job = "Chef";
    }

    public removeDishFromMenu(dishName: string): void {
        const index:number = menu.findIndex((dish: Dish) => dish.name !== dishName);
        menu.splice(index,1);
    }
    public sayJob(): void {
        console.log(`${this.name} - ${this.job}`);
    }

    public addDishToMenu(dish: Dish): void {
        menu.push(dish);
    }
}