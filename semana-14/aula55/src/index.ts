import * as moment from 'moment'
import { readFile } from 'fs'

const pathDir = ("./events/events.json");
moment.locale("pt-br");

type CalendarEvent = {
    name: string,
    desc: string,
    startDate: moment.Moment,
    finishDate: moment.Moment,
}

const args: string[] = process.argv.slice(4);
const action: string = args[0];
const parameters = {
    name: args[1],
    desc: args[2],
    date: args[3],
    start: args[4],
    finish: args[5]
}

function newEvent(name: string, date: string, desc: string, startTime: string, finishTime: string): CalendarEvent {
    const startDate = moment(`${date}T${startTime}`, "DD/MM/YYYYTHH:mm");
    const finishDate = moment(`${date}T${finishTime}`, "DD/MM/YYYYTHH:mm");
    return {
        name,
        desc,
        startDate,
        finishDate
    }
}

function readFileJSON(pathDir: string) {
    return new Promise<Array<any>>((resolve, reject) => {
        readFile(pathDir, 'utf8', (err: Error, data: string) => {
            if (err) {
                console.error("Não foi possível encontrar o arquivo.");
                reject(err);
            }
            else {
                resolve(JSON.parse(data));
            }
        });
    });
}

async function getEvents() {
    try {
        const events = await readFileJSON(pathDir);
        printEvent(events);
    }
    catch (err) {
        console.log(err)
    }
}

function printEvent(events: Array<any>): void {
    if (!events) {
        console.log("Nenhum evento marcado.");
        return
    }
    for (let event of events) {
        const start = moment(event.startDate);
        const finish = moment(event.finishDate);
        const diff = start.diff(moment(), "days");
        const timeLeftMsg = diff < 0 ? "EVENTO PASSADO" : `FALTAM ${diff} DIAS PARA O EVENTO`;
        console.log(
            `
_________________________________________
EVENTO MARCADO EM ${start.format("DD/MM/YYYY - HH:mm")} 
NOME: ${event.name}
DESCRIÇÃO: ${event.desc}
DIA DA SEMANA: ${start.format("dddd")}
${timeLeftMsg}
        `);

    }
    return
}
getEvents();
// console.log(newEvent(parameters.name,parameters.date,parameters.desc,parameters.start,parameters.finish));