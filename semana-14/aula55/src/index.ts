import * as moment from 'moment'
import { readFile, writeFile } from 'fs'

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
if (action === "add" && args.length < 6) {
    console.log(`Por favor, insira os comandos corretamente. Ex: add "Nome" "Descrição do evento" "dd/mm/yyyy" "hh:mm" "hh:mm"`)
}
else {
    function createEvent(name: string, date: string, desc: string, startTime: string, finishTime: string): CalendarEvent {
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
    function writeFileJSON(pathDir: string, data: string) {
        return new Promise<string>((resolve, reject) => {
            writeFile(pathDir, data, 'utf8', (err: Error) => {
                if (err) {
                    console.error("Não foi possível criar o arquivo.");
                    reject(err);
                }
                resolve("Evento marcado com sucesso!");
            });
        });
    }
    async function appendEventJSON(pathDir: string, newEvent: CalendarEvent) {
        try {
            let allEvents = await readFileJSON(pathDir);
            allEvents.push(newEvent);

            const response = await writeFileJSON(pathDir, JSON.stringify(allEvents));
            console.log(response);
        }
        catch (err) {
            console.log(err)
        }
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

    switch (action) {
        case "add":
            const newEvent = createEvent(parameters.name, parameters.date, parameters.desc, parameters.start, parameters.finish);
            appendEventJSON(pathDir, newEvent);
            break;
        case "show":
            getEvents();
            break;
        default:
            console.log("Comando não reconhecido.");
            break;
    }
}