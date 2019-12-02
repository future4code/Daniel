const args = process.argv.slice(2);
const operator = args[0];
const firstOperand = parseInt(args[1]);
const secondOperand = parseInt(args[2]);

switch (operator) {
    case "add":
        console.log("\x1b[36m%s\x1b[0m",`Resposta: ${firstOperand + secondOperand}`);
        break;
    case "sub":
        console.log("\x1b[36m%s\x1b[0m",`Resposta: ${firstOperand - secondOperand}`);
        break;
    case "mult":
        console.log("\x1b[36m%s\x1b[0m",`Resposta: ${firstOperand * secondOperand}`);
        break;
    case "div":
        console.log("\x1b[36m%s\x1b[0m",`Resposta: ${firstOperand / secondOperand}`);
        break;
}