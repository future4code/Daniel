import moment = require("moment");
import { ErrorTracker } from "./Error";

export class ErrorPrinter implements ErrorTracker{
    public onError(text:string,date:moment.Moment):void{
        console.log(`${text} - ${date.format("DD/MM/YYYY HH:mm")}`);
        
    }
}