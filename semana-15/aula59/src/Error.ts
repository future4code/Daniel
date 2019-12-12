import * as moment from 'moment'

export class Error{
    text:string;
    date: moment.Moment;

    constructor(text:string,date:moment.Moment){
        this.date = date;
        this.text = text;
    }
}