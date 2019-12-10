export default class Args {
    action: string;
    name: string;
    cpf: string;
    age: number;
    value: number;
    description: string;

    constructor() {
        this.action = process.argv[2];
        this.name = process.argv[3];
        this.cpf = process.argv[4];
        switch (this.action) {
            case Actions.New || Actions.Balance:
                this.age = parseInt(process.argv[5]);
                break;
            case Actions.Deposit:
                this.value = parseInt(process.argv[5]);
                this.description = process.argv[6];
        }
    }

}

export enum Actions {
    New = "new",
    ShowAll = "showAll",
    Balance = "balance",
    Deposit = "deposit"
}