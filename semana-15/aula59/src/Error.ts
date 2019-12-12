import * as moment from 'moment'
import { JSONFileManager } from './JSONFileManager';

class Error{
    text:string;
    date: moment.Moment;

    constructor(text:string,date:moment.Moment){
        this.date = date;
        this.text = text;
    }
}
// 1. Crie uma interface `ErrorTracker` que possua um método `onError` que espera receber uma mensagem de erro e uma data relativa a ele.
// 2. Faça com que a `ErrorPrinter` implemente o interface `ErrorTracker`. 
// 3. Altere os códigos das classes de criar post de tal forma que ela receba no construtor a propriedade `ErrorTracker`.
// 4. Crie um classe `ErrorLogger` que implemente a interface `ErroTracker`. O método `onError` deve salvar os erros em array em um arquivo JSON.
// 5. Agora, utilizando a classe `NormalPostCreator` e `ErrorLogger`, tente criar um post com valores inválidos e salvar o erro em um arquivo JSON.

export interface ErrorTracker{
    onError(text:string,date:moment.Moment):void;
}

export class ErrorLogger implements ErrorTracker{
    private fileManager = new JSONFileManager('error.json');

    public onError(text:string,date:moment.Moment):void{
        let allErrors: object[] = [];
        const error = new Error(text,date);
        try {
            allErrors = this.fileManager.getObjectFromFile();

        } catch (err) {
        }
        allErrors.push(error);
        this.fileManager.writeObjetcToFile(allErrors);
    }
}