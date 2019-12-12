import Employee from "./employee";
import { Dish } from "../dish/dish";

export class Cashier extends Employee {
    private job: string;

    constructor(name: string, salary: number, job: string) {
        super(name, salary);
        this.job = job;
    }

    public calculateBill(receipt: Dish[]): number {
        const mappedPrices: number[] = receipt.map((dish: Dish): number => { return dish.getPrice(); });
        const bill: number = mappedPrices.reduce((a, b): number => {
            return a + b;
        });
        return bill;
    }
    public sayJob(): void {
        console.log(`${this.name} - ${this.job}`);
    }
}