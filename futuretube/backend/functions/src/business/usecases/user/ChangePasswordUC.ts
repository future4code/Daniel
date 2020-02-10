import { CryptoGateway } from '../../gateway/CryptoGateway';
import { UserDataSource } from '../../datasources/UserDataSource';
import { User } from '../../entities/User';

export class ChangePasswordUC {
    constructor(
        private crypto: CryptoGateway,
        private datasource: UserDataSource
    ) { }

    async validatePassword(input: ChangePasswordUCInput, user: User): Promise<void> {
        const isCurrentPasswordValid = await this.crypto.compare(input.currentPassword, user.getPassword());
        if (!isCurrentPasswordValid) {
            throw new Error("A senha atual e a informada não confere!");
        }
        const isNewPasswordValid = !await this.crypto.compare(input.newPassword, user.getPassword());
        if (!isNewPasswordValid) {
            throw new Error("Senha já foi utilizada!");
        }
    }

    async execute(input: ChangePasswordUCInput) {
        const user = await this.datasource.fetchUserByEmail(input.email);
        this.validatePassword(input,user);
        const newPassword = await this.crypto.hash(input.newPassword);
        await this.datasource.updateUserPassword(user.getId(), newPassword);
    }
}

export interface ChangePasswordUCInput {
    email: string,
    currentPassword: string,
    newPassword: string
}