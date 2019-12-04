const arr: number[] = [5, 4, 3, 2, 1];

function arrayInfo(array: number[]): { count: number, oddNumberCount: number, totalSum: number } {
    return {
        count: array.length,
        oddNumberCount: array.filter(number => number % 2 != 0).length,
        totalSum: array.reduce((a, b) => a + b)
    }
}

console.log(arrayInfo(arr));