import * as moment from 'moment'
import { JSONFileManager, PostJSONFileManager } from './JSONFileManager';
import { ErrorPrinter } from './ErrorPrinter';
import { ErrorTracker, ErrorLogger } from './Error';

class Post {
    name: string;
    text: string;
    date: moment.Moment;

    constructor(name: string, text: string, date: moment.Moment) {
        this.name = name;
        this.text = text;
        this.date = date;
    }
}

interface PostCreator {
    create(author: string, text: string, error: ErrorTracker): void;
}

class NormalPostCreator implements PostCreator {
    private fileManager = new PostJSONFileManager('posts.json');

    public create(author: string, text: string, error: ErrorTracker): void {
        if (text && author) {
            const newPost = new Post(author, text, moment());
            this.fileManager.writePostToFile(newPost);
        }
        else {
            error.onError("Nome ou texto inválido", moment());
        }
    }
}

class UpperCasePostCreator implements PostCreator {
    private fileManager = new PostJSONFileManager('posts.json');

    public create(author: string, text: string, error: ErrorTracker): void {
        if (text && author) {
            const newPost = new Post(author, text.toUpperCase(), moment());
            this.fileManager.writePostToFile(newPost);
        }
        else {
            error.onError("Nome ou texto inválido", moment());
        }
    }
}

class LowerCasePostCreator implements PostCreator {
    private fileManager = new PostJSONFileManager('posts.json');

    public create(author: string, text: string, error: ErrorTracker): void {
        if (text && author) {
            const newPost = new Post(author, text.toLowerCase(), moment());
            this.fileManager.writePostToFile(newPost);
        }
        else {
            error.onError("Nome ou texto inválido", moment());
        }
    }
}

export class CreatePostHandler {

    public execute(author: string, text: string, error: ErrorTracker) {
        const tag = text[0];
        switch (tag) {
            case "&":
                new UpperCasePostCreator().create(author, text, error);
                break;
            case "%":
                new LowerCasePostCreator().create(author, text, error);
                break;
            default:
                new NormalPostCreator().create(author, text, error);
                break;

        }
    }
}

interface PostReader {
    read(): void;
}

export class PostReaderImp implements PostReader {
    private fileName = new PostJSONFileManager('posts.json');
    read(): void {
        const allPosts = this.fileName.getObjectFromFile();
        for (const post of allPosts) {
            console.log(`Nome: ${post.name}\nPost: ${post.text}\nData: ${post.date}\n`)
        }
    }
}