export default class Account {
    balance: number = 0;
    name: string;
    cpf: string;
    age: number;
    transactions: Transaction[] = []

    constructor(name: string, cpf: string, age: number, balance: number, transactions: Transaction[]) {
        this.name = name;
        this.cpf = cpf;
        this.age = age;
        this.balance = balance;
        this.transactions = transactions;
    }
    public addBalance(transaction: Transaction): void {
        this.balance += transaction.value;
        this.transactions.push(transaction);
        console.log(`Deposito realizado com sucesso. +R$${transaction.value},00`);
        this.getBalance();
    }
    public getBalance(): void {
        console.log(`Saldo: R$ ${this.balance},00`)
    }

}

export class Transaction {
    cpf: string;
    value: number;
    description: string;

    constructor(cpf: string, value: number, description: string) {
        this.cpf = cpf;
        this.value = value;
        this.description = description;
    }
}