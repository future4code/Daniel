import { CryptoGateway } from '../../business/gateway/CryptoGateway';
import * as bcrypt from "bcrypt";

export class BcryptService implements CryptoGateway {
    private static SALT = 10;
    async hash(word: any): Promise<string> {
        return await bcrypt.hash(word, BcryptService.SALT);
    }
    
    async compare(userInput: string, dbInput: string): Promise<boolean> {
        return await bcrypt.compare(userInput,dbInput);
    }
}