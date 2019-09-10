
let produto1 = ["Maça",3.77];
let produto2 = ["TV",2000];
let produto3 = ["Chave de fenda",6.52];

let total = (produto1[1]+produto2[1]+produto3[1]);

console.log(produto1[0]+" - R$"+produto1[1]);
console.log(produto2[0]+" - R$"+produto2[1]);
console.log(produto3[0]+" - R$"+produto3[1]);
console.log("------------------------------------------")
console.log("TOTAL: R$",total);


let fahrenheit = 50;
let celsius = (fahrenheit-32)*5/9;
let kelvin = (fahrenheit-32)*5/9+273.15;

console.log("\n\nTemperatura:","\nFahrenheit: "+fahrenheit+"°","\nCelsius: "+celsius+"°","\nKelvin: "+kelvin+"°");
