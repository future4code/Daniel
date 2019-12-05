var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fs = require('fs');
const pathDir = ("./textos/");
const readAllFilenames = (path) => {
    return new Promise((resolve, reject) => {
        fs.readdir(path, 'utf8', function (err, files) {
            if (err) {
                console.log("Não foi possível encontrar os arquivos na pasta.");
                reject(err);
            }
            else {
                resolve(files);
            }
        });
    });
};
const readFile = (path, file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(`${pathDir}${file}`, 'utf8', (err, data) => {
            if (err) {
                console.error("Não foi possível encontrar o arquivo.");
                reject(err);
            }
            else {
                resolve(data.toString());
            }
        });
    });
};
const concatAllTextFromFiles = (path) => __awaiter(this, void 0, void 0, function* () {
    const allFiles = yield readAllFilenames(path);
    const allPromises = allFiles.map(file => readFile(path, file));
    const allText = yield Promise.all(allPromises);
    console.log(allText.join(''));
});
concatAllTextFromFiles(pathDir);
//# sourceMappingURL=ex1.js.map