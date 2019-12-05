const fs = require('fs');
const pathDir = ("./textos/");

const readAllFilenames = (path: string) => {
    return new Promise<string[]>((resolve, reject) => {
        fs.readdir(path, 'utf8', function (err: Error, files: string[]) {
            if (err) {
                console.log("Não foi possível encontrar os arquivos na pasta.");
                reject(err);
            }
            else {
                resolve(files);
            }
        });
    });
}
const readFile = (path: string, file: string) => {
    return new Promise<string>((resolve, reject) => {
        fs.readFile(`${pathDir}${file}`, 'utf8', (err: Error, data: Buffer[]) => {
            if (err) {
                console.error("Não foi possível encontrar o arquivo.");
                reject(err);
            }
            else {
                resolve(data.toString());
            }
        });
    });
}

const concatAllTextFromFiles = async (path: string) => {
    const allFiles = await readAllFilenames(path);
    const allPromises = allFiles.map(file => readFile(path, file));
    const allText = await Promise.all(allPromises);
    console.log(allText.join(''))
}

concatAllTextFromFiles(pathDir);