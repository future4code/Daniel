export interface CryptoGateway {
    hash(word: any): Promise<string>;
    compare(userInput: string, dbInput: string): Promise<boolean>;
}