export interface HashGateway{
    generateHash(word: string): Promise<string>;
}