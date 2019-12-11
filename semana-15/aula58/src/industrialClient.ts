import { Client } from "./client";
import { Industry } from './industry';

export class IndustrialClient extends Industry implements Client{
    clientName: string;
    clientNumber: number;
    consumedEnergy: number;

    constructor(industryName:string,industryNumber:string,cep:string,clientName:string,clientNumber:number,consumedEnergy:number){
        super(industryName,industryNumber,cep);
        this.clientName = clientName;
        this.clientNumber = clientNumber;
        this.consumedEnergy = consumedEnergy;
    }

    public calculateBill():number{
        return (this.consumedEnergy * 0,45) + 10000;
    }
}