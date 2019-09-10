
let fahrenheit = prompt("Qual a temperatura (°F) ?");
let celsius = (fahrenheit-32)*5/9;
let kelvin = (fahrenheit-32)*5/9+273.15;


console.log("Temperatura:","\nFahrenheit: "+fahrenheit+"°","\nCelsius: "+celsius+"°","\nKelvin: "+kelvin+"°");


let primeiroNome = prompt("Qual seu primeiro nome ?");
let ultimoNome = prompt("Qual seu sobrenome?");

console.log("\n\n"+primeiroNome+" "+ultimoNome);


let rua = prompt("Qual nome da RUA ?");
let numero = prompt("Qual é NÚMERO da residência ?");
let complemento = prompt("Qual o COMPLEMENTO da residencia?");
let bairro = prompt("Qual o BAIRRO?");
let cidade = prompt("Qual a CIDADE?");

console.log(rua+", "+numero+" - "+complemento+" - "+bairro+", "+cidade);
