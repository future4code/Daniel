const args = process.argv.slice(2);
const path = args[0];
const task = `\n${args[1]}`;
const fs = require('fs');
const greenConsoleLog = "\x1b[32m";
const resetConsoleLog = "\x1b[0m";
const redConsoleLog = "\x1b[31m";

if (args.length > 2) {
    try {
        fs.appendFileSync(path, task, 'utf8');
        console.log(`Tarefa adicionada com ${greenConsoleLog}sucesso${resetConsoleLog}!`);
    } catch (error) {
        console.log(error)
    }
}
else {
    console.log(`É necessário ${redConsoleLog}2${resetConsoleLog} argumentos: `+
    `npm start ${greenConsoleLog}arquivo.txt${resetConsoleLog} "${greenConsoleLog}tarefa${resetConsoleLog}"`)
}