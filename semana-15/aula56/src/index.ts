import Bank from "./Bank";
import Args, { Actions } from "./Args";

const args = new Args();
const bank = new Bank();
switch (args.action) {
    case Actions.New:
        bank.createAccount(args.name, args.cpf, args.age);
        break;
    case Actions.Deposit:
        bank.deposit(args.name, args.cpf, args.value, args.description);
        break;
    case Actions.ShowAll:
        bank.getAllAccounts();
        break;
    case Actions.Balance:
        bank.getAccountByCpf(args.name, args.cpf).getBalance();
        break;
    default:
        console.log("Comando inválido.");
}
