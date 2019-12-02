const args = process.argv.slice(2);
const path = args[0];
const task = `\n${args[1]}`;
const fs = require('fs');

try {
    fs.appendFileSync(path,task,'utf8');
    console.log("Tarefa adicionada com \x1b[32msucesso\x1b[0m!");
} catch (error) {
    
}