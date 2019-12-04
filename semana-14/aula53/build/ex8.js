function fatorial(number) {
    let result = number === 0 ? 1 : number;
    while (number > 1) {
        number--;
        result = result * number;
    }
    return result;
}
console.log(fatorial(3));
//# sourceMappingURL=ex8.js.map