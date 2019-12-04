import { readFileSync } from "fs";

const fs = require('fs');
const pathDir = "/home/dnn/Projetos/Daniel/semana-14/aula54/textos/";

const readOneFileAsync = (file: string, pathDir: string) => {
    return new Promise((resolve, reject) => {
        fs.readFile(`${pathDir}${file}`, 'utf8', (err: Error, data: Buffer[]) => {
            if (err) {
                console.log("Não foi possível encontrar os arquivos");
                reject(err);
                return;
            }
            resolve(data.toString());
        });
    });
}

const readAllFiles = (path: string) => {
    return new Promise((resolve, reject) => {
        fs.readdir(pathDir, 'utf8', function (err: Error, files: string[]) {
            if (err) {
                console.log("Não foi possível encontrar os arquivos");
                reject(err);
                return;
            }
            resolve(files);
        });
    });
}

const allFiles = readAllFiles(pathDir);

allFiles.then((resolve: string[]) => {
    const text = resolve.map(file => readOneFileAsync(file, pathDir));
    const allTexts = Promise.all(text);
    allTexts.then((values) => {
        console.log(values.join(''))
    })
},
    (reject) => {
        console.log(reject)
    })