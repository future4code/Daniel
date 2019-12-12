import { Cashier } from './cashier';

export class Manager extends Cashier{
    constructor(name:string,salary:number,job:string){
        super(name,salary,job);
    }


}