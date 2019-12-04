const args = process.argv.slice(2);
const validOperators = ["add", "mult", "sub", "div"];
if (args.length < 3) {
    console.log("Número de argumentos \x1b[31mmenor\x1b[0m que o esperado.");
}
if (args.length > 3) {
    console.log("Número de argumentos \x1b[31mmaior\x1b[0m que o esperado.");
}
if (args.length === 3) {
    const operator = args[0];
    const operatorIsValid = (validOperators.indexOf(operator) > -1);
    if (operatorIsValid) {
        const firstOperand = parseFloat(args[1]);
        const secondOperand = parseFloat(args[2]);
        switch (operator) {
            case "add":
                console.log("\x1b[36m%s\x1b[0m", `Resposta: ${firstOperand + secondOperand}`);
                break;
            case "sub":
                console.log("\x1b[36m%s\x1b[0m", `Resposta: ${firstOperand - secondOperand}`);
                break;
            case "mult":
                console.log("\x1b[36m%s\x1b[0m", `Resposta: ${firstOperand * secondOperand}`);
                break;
            case "div":
                console.log("\x1b[36m%s\x1b[0m", `Resposta: ${firstOperand / secondOperand}`);
                break;
        }
    }
    else{
        console.log(`Operador \x1b[31m${operator}\x1b[0m não foi reconhecido.`)
    }
}
