import { ChangePasswordUCInput, ChangePasswordUC } from "../business/usecases/ChangePasswordUC";
import { JwtAuthService } from '../service/auth/JwtAuthService';
import { BcryptService } from '../service/crytography/BcryptService';
import { UserFirestoreDatabase } from '../data/UserFirestoreDatabase';

export async function changePasswordEndpoint(req: any, res: any) {
    if (!req.headers.auth || !req.body.currentPassword || !req.body.newPassword) {
        res.status(400).send();
        return;
    }
    try {
        const tokenData = new JwtAuthService().verify(req.headers.auth as string);
        const input: ChangePasswordUCInput = {
            email: tokenData.email,
            currentPassword: req.body.currentPassword,
            newPassword: req.body.newPassword
        }
        const useCase = new ChangePasswordUC(new BcryptService(), new UserFirestoreDatabase());
        await useCase.execute(input);
        res.send({
            message: "Senha alterada com sucesso"
        });
    } catch (e) {
        res.status(400).send(e.message);
    }
}
