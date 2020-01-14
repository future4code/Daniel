export interface HashGateway {
    generate(word: string): Promise<string>;
    compare(userHash: string, dbHash: string): Promise<boolean>;
}