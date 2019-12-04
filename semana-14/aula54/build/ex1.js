"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const pathDir = __dirname + "/../textos/";
const readOneFileAsync = (file, pathDir) => {
    return new Promise((resolve, reject) => {
        fs.readFile(`${pathDir}${file}`, 'utf8', (err, data) => {
            if (err) {
                console.log("Não foi possível encontrar o arquivo.");
                reject(err);
                return;
            }
            resolve(data.toString());
        });
    });
};
const readAllFiles = (path) => {
    return new Promise((resolve, reject) => {
        fs.readdir(pathDir, 'utf8', function (err, files) {
            if (err) {
                console.log("Não foi possível encontrar os arquivos na pasta.");
                reject(err);
                return;
            }
            resolve(files);
        });
    });
};
const allFiles = readAllFiles(pathDir);
allFiles.then((resolve) => {
    const text = resolve.map(file => readOneFileAsync(file, pathDir));
    const allTexts = Promise.all(text);
    allTexts.then((values) => {
        console.log(values.join(''));
    });
}, (reject) => {
    console.log(reject);
});
//# sourceMappingURL=ex1.js.map