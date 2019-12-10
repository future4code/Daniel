import Account, { Transaction } from './Account';
import FileManager from './JSONFileManager';

export default class Bank {
    fileManager = new FileManager('f4bank.json');
    accounts: Account[];

    constructor() {
        this.accounts = this._loadAllAccounts();

    }
    public createAccount(name: string, cpf: string, age: number): void {
        const sameAccount = this.accounts.find(acc => acc.cpf === cpf && acc.name == name);
        if (!sameAccount) {
            if (age < 18) {
                console.log("Não é permitido criação de contas para menores de idade. :(");
                return;
            }
            const newAccount = new Account(name, cpf, age, 0, []);
            this.accounts.push(newAccount);
            console.log("Conta criada com sucesso");
            this._saveAccounts();
        }
        else {
            console.log("Já existe uma conta com esse CPF. :(");
        }
    }

    public getAllAccounts(): void {
        console.log(this.accounts);
    }

    public getAccountByCpf(name: string, cpf: string): Account {
        return this.accounts.find(acc => acc.cpf === cpf && acc.name == name);
    }

    public deposit(name: string, userCpf: string, value: number, description: string) {
        const transaction = new Transaction(userCpf, value, description);
        const index = this.accounts.findIndex(acc => acc.cpf === userCpf && acc.name == name);
        this.accounts[index].addBalance(transaction);
        this._saveAccounts();
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