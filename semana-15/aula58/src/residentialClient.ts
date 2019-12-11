import { Residence } from "./residence";
import { Client } from "./client";

export class ResidentialClient extends Residence implements Client{
    clientName: string;
    clientNumber: number;
    consumedEnergy: number;

    constructor(name:string,cpf:string,cep:string,clientName:string,clientNumber:number,consumedEnergy:number){
        super(name,cpf,cep);
        this.clientName = clientName;
        this.clientNumber = clientNumber;
        this.consumedEnergy = consumedEnergy;
    }

    public calculateBill():number{
        return this.consumedEnergy * 0.75;
    }
}