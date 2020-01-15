import { UserGateway } from "../../gateways/UserGateway";
import { HashGateway } from "../../gateways/HashGateway";
import { AuthGateway } from "../../gateways/AuthGateway";


export class ChangePasswordUC {
    constructor(
        private database: UserGateway,
        private hash: HashGateway,
        private auth: AuthGateway) { }

    async execute(userInput: ChangePasswordInput): Promise<void> {
        const tokenData = this.auth.verify(userInput.token);
        const user = await this.database.getUserById(tokenData.id);
        const isCurrentPasswordValid = await this.hash.compare(userInput.currentPassword, user.getPassword());
        if (!isCurrentPasswordValid) {
            throw new Error("A senha atual e a informada não confere!");
        }
        const isNewPasswordValid = !await this.hash.compare(userInput.newPassword, user.getPassword());
        if (!isNewPasswordValid) {
            throw new Error("Senha já foi utilizada!");
        }
        const newPassword = await this.hash.generate(userInput.newPassword);
        await this.database.updatePassword(user.getId(), newPassword);
    }
}

export interface ChangePasswordInput {
    token: string,
    currentPassword: string,
    newPassword: string
}