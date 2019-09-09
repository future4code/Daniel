const salarioMinimo = prompt("Digite o salário mínimo:");
let consumoKW = prompt("Quantidade de quilowatts consumidos:");

let valorKW = salarioMinimo/5;
let valorDosItens = valorKW * consumoKW;
let desconto = 15;
let valorTotal = valorDosItens - (valorDosItens * (desconto/100));

console.log ("Valor kW:",valorKW,"\nValor s/ desconto:",valorDosItens,"\nValor c/ desconto:",valorTotal);