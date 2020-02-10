import { UserDataSource } from '../business/datasources/UserDataSource';
import * as admin from 'firebase-admin';
import { User } from '../business/entities/User';

export class UserFirestoreDatabase implements UserDataSource {

    private static USERS_COLLECTION = 'users';

    private async verifyUserEmail(email: string): Promise<Boolean> {
        const user = await admin.firestore()
            .collection(UserFirestoreDatabase.USERS_COLLECTION)
            .where('email', '==', email)
            .get();
        return user.empty;
    }
    
    async createUser(user: User): Promise<void> {
        const isValidEmail = await this.verifyUserEmail(user.getEmail());
        if (isValidEmail) {
            await admin.firestore().collection(UserFirestoreDatabase.USERS_COLLECTION).doc(user.getId()).set({
                id: user.getId(),
                name: user.getName(),
                birthdate: user.getBirthdate().toISOString(),
                email: user.getEmail(),
                password: user.getPassword(),
                photoUrl: user.getPhotoUrl()
            });
        }
        else {
            throw Error("Já existe usuário com esse email!")
        }
    }
    async fetchUserByEmail(email: string): Promise<User> {
        const query = await admin.firestore()
            .collection(UserFirestoreDatabase.USERS_COLLECTION)
            .where('email', '==', email)
            .get();
        const user = query.docs[0].data();
        return new User(user.id, user.name, 
            user.email, 
            user.password, 
            user.photoUrl, 
            user.birthdate);
    }
    async updateUserPassword(id: string, newPassword: string): Promise<void> {
        const userRef = admin.firestore().collection(UserFirestoreDatabase.USERS_COLLECTION).doc(id);
        await userRef.update({password: newPassword});
    }
}