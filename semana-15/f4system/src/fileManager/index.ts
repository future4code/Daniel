import * as fs from 'fs';

export interface FileManager {
    fileName: string;
    writeToFile(data: any): void
    readFromFile(): any
}

export class JSONFileManager implements FileManager {
    public fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
    }
    writeToFile(objectToSave: object): void {
        let array: object[] = [];
        try {
            array = this.readFromFile();

        } catch (err) {
        }
        array.push(objectToSave);
        fs.writeFileSync(this.fileName, JSON.stringify(array, null, 4));

    }
    readFromFile() {
        return JSON.parse(fs.readFileSync(this.fileName).toString());
    }
}