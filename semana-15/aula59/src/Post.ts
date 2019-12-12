import * as moment from 'moment'
import { JSONFileManager, PostJSONFileManager } from './JSONFileManager';
import { ErrorPrinter } from './ErrorPrinter';

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
    create(author: string, text: string): void;
}

class NormalPostCreator implements PostCreator {
    private fileManager = new PostJSONFileManager('posts.json');
    private errorPrinter = new ErrorPrinter();

    public create(author: string, text: string): void {
        if (text && author) {
            const newPost = new Post(author, text, moment());
            this.fileManager.writePostToFile(newPost);
        }
        else {
            this.errorPrinter.printError("Nome ou texto inválido", moment());
        }
    }
}

class UpperCasePostCreator implements PostCreator {
    private fileManager = new PostJSONFileManager('posts.json');
    private errorPrinter = new ErrorPrinter();

    public create(author: string, text: string): void {
        if (text && author) {
            const newPost = new Post(author, text.toUpperCase(), moment());
            this.fileManager.writePostToFile(newPost);
        }
        else {
            this.errorPrinter.printError("Nome ou texto inválido", moment());
        }
    }
}

class LowerCasePostCreator implements PostCreator {
    private fileManager = new PostJSONFileManager('posts.json');
    private errorPrinter = new ErrorPrinter();

    public create(author: string, text: string): void {
        if (text && author) {
            const newPost = new Post(author, text.toLowerCase(), moment());
            this.fileManager.writePostToFile(newPost);
        }
        else {
            this.errorPrinter.printError("Nome ou texto inválido", moment());
        }
    }
}

export class CreatePostHandler {

    public execute(author: string, text: string) {
        const tag = text[0];
        switch (tag) {
            case "&":
                new UpperCasePostCreator().create(author, text);
                break;
            case "%":
                new LowerCasePostCreator().create(author, text);
                break;
            default:
                new NormalPostCreator().create(author, text);
                break;

        }
    }
}