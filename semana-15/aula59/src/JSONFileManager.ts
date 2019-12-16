import * as fs from 'fs';

export class JSONFileManager {
    protected fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
    }
    writeObjetcToFile(objectToSave: object) {
        fs.writeFileSync(this.fileName, JSON.stringify(objectToSave, null, 4));
    }
    getObjectFromFile() {
        return JSON.parse(fs.readFileSync(this.fileName).toString());
    }
}

export class PostJSONFileManager extends JSONFileManager {
    writePostToFile(objectToSave: object) {
        let allPosts: object[] = [];
        try {
            allPosts = this.getObjectFromFile();

        } catch (err) {
        }
        allPosts.push(objectToSave);
        this.writeObjetcToFile(allPosts);
    }
}