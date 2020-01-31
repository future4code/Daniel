import { UserGateway } from '../gateways/UserGateway';
import { CryptoGateway } from '../gateways/CryptoGateway';
import { User } from '../entities/User';

export class UserChangePasswordUC {
    constructor(
        private database: UserGateway,
        private crypto: CryptoGateway
    ) { }
    
    private async verifyUserNewPassword(newPassword: string, realPassword: string): Promise<void> {
        if (newPassword.length < 6) {
            throw new Error("Nova senha deve ter no minímo 6 caracteres.");
        }
        const isNewPasswordValid = await this.crypto.compare(newPassword, realPassword);
        if(isNewPasswordValid){
            throw new Error("Nova senha não pode ser igual a anterior!")
        }
    };
    private async verifyUserPassword(providedPassword: string, realPassword: string): Promise<void> {
        const isPasswordValid = await this.crypto.compare(providedPassword, realPassword);
        if(!isPasswordValid){
            throw new Error("A senha está incorreta!")
        }
    };

    async execute(input: UserChangePasswordInput): Promise<void> {
        const user = await this.database.fetchUserById(input.id);
        this.verifyUserPassword(input.currentPassword, user.getPassword());
        this.verifyUserNewPassword(input.newPassword, user.getPassword());

        const newPassword = await this.crypto.hash(input.newPassword);
        await this.database.updatePassword(user.getId(), newPassword);
    };


}

export interface UserChangePasswordInput {
    id: string,
    currentPassword: string,
    newPassword: string
}