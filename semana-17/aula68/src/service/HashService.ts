import { HashGateway } from '../business/gateways/HashGateway';
import * as bcrypt from 'bcrypt'

export class HashService implements HashGateway{
    static SALT = 10;

    async generate(word: string): Promise<string> {
        const generatedSalt = await bcrypt.genSalt(HashService.SALT);
        const result = await bcrypt.hash(word,generatedSalt);
        return result;
    }    
    
    compare(userHash: string, dbHash: string): boolean {
        throw new Error("Method not implemented.");
    }


}