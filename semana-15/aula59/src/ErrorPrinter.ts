import moment = require("moment");

export class ErrorPrinter{
    public printError(text:string,date:moment.Moment):void{
        console.log(`${text} - ${date.format("DD/MM/YYYY HH:mm")}`)
    }
}