function fat(number: number): number {
    let result = number === 0 ? 1 : number;
    while (number > 1) {
        number--
        result = result * number;
    }
    return result;
}

function verificaQuantidadeDeAnagramas(anagrama: string): any {
    const uniqueChar = anagrama.match(/^(?:([A-Za-z])(?!.*\1))*$/g) ? true : false;
    if(uniqueChar){
        return fat(anagrama.length);
    }
    return uniqueChar;
}

console.log(verificaQuantidadeDeAnagramas("mesaa"));