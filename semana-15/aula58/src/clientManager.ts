import { Client } from "./client";

export class ClientManager {
    private clients: Client[] = [];

    public addClient(...client: Client[]): void {
        for(let item of client){
            this.clients.push(item);
            console.log("Cliente adicionado!");
        }

    }
    public getClientsQuantity(): void {
        const plural = this.clients.length > 1;
        console.log(`Existe${plural && "m"} ${this.clients.length} cliente${plural && "s"} cadastrado${plural && "s"} no sistema.`)
    }
    public printClientBills(): void {
        for (let client of this.clients) {
            console.log(`${client.clientNumber} - ${client.clientName} - R$ ${client.calculateBill()}`)
        }
    }
    public calculateAllIncome(): void {
        const total: number[] = this.clients.map(client => client.calculateBill());
        const income = total.reduce((a, b) => a + b)
        console.log(`Total a receber: R$ ${income}`)
    }
}