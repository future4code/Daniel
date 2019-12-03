const arr = [5, 4, 3, 2, 1];
function arrayInfo(array) {
    return {
        count: array.length,
        oddNumberCount: array.filter(number => number % 2 != 0).length,
        totalSum: array.reduce((a, b) => a + b)
    };
}
console.log(arrayInfo(arr));
//# sourceMappingURL=ex1.js.map