export default class Account {
    balance:number = 0;
    name:string;
    cpf:string;
    age:number;
    transactions:Transaction[] = []

    constructor(name:string,cpf:string,age:number,balance:number,transactions:Transaction[]){
        this.name = name;
        this.cpf = cpf;
        this.age = age;
        this.balance = balance;
        this.transactions = transactions;
    }

}

export class Transaction {
    cpf:string;
    value:number;
    description:string;

    constructor(cpf:string,value:number,description:string){
        this.cpf = cpf;
        this.value = value;
        this.description = description;
    }
}