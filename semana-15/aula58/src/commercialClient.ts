import { Client } from "./client";
import { Trade } from "./trade";

export class CommercialClient extends Trade implements Client{
    clientName: string;
    clientNumber: number;
    consumedEnergy: number;

    constructor(name:string,cnpj:string,cep:string,clientName:string,clientNumber:number,consumedEnergy:number){
        super(name,cnpj,cep);
        this.clientName = clientName;
        this.clientNumber = clientNumber;
        this.consumedEnergy = consumedEnergy;
    }

    public calculateBill():number{
        return this.consumedEnergy * 0,53;
    }
}