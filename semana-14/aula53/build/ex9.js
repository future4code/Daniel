function fat(number) {
    let result = number === 0 ? 1 : number;
    while (number > 1) {
        number--;
        result = result * number;
    }
    return result;
}
function verificaQuantidadeDeAnagramas(anagrama) {
    const uniqueChar = anagrama.match(/^(?:([A-Za-z])(?!.*\1))*$/g) ? true : false;
    return uniqueChar;
}
console.log(verificaQuantidadeDeAnagramas("mesaa"));
//# sourceMappingURL=ex9.js.map