import FileManager from './JSONFileManager';
import Account, { Transaction } from './Account';

export default class Bank {
    fileManager = new FileManager('f4bank.json');
    accounts: Account[];

    constructor() {
        this.accounts = this._loadAllAccounts();

    }
    public createAccount(name: string, cpf: string, age: number) {
        if (age < 18) {
            console.log("Não é permitido criação de contas para menores de idade. :(");
            return;
        }
        const newAccount = new Account(name, cpf, age, 0, []);
        this.accounts.push(newAccount);
        this._saveAccounts;
    }

    public getAllAccounts() {
        console.log(this.accounts);
    }

    public getAccountByCpf(cpf: string): Account {
        return this.accounts.find(acc => acc.cpf === cpf);
    }

    private _saveAccounts() {
        this.fileManager.saveToJSON(this.accounts);
    }
    private _loadAllAccounts(): Account[] {
        const allAccounts: Account[] = this.fileManager.getJSONContent().map((acc: any): Account => {

            const transactions: Transaction[] = (acc.transactions as any[]).map((tr): Transaction => {
                return new Transaction(tr.cpf, tr.value, tr.description);
            });

            return new Account(acc.name, acc.cpf, acc.age, acc.balance, transactions);
        });
        return allAccounts;
    }
}