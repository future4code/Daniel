
let casaDestrancada = confirm("A Casa está destrancada?");
let chave = confirm("Você tem a chave da casa?");

let consegueEntrar = (!casaDestrancada && chave) || casaDestrancada;

console.log("O usuário consegue entrar na casa?",consegueEntrar)




let estaChovendo = confirm("Está chovendo?");
let temGuardaChuva = confirm("Tem guarda-chuva?");

let vaiSeMolhar = estaChovendo && !temGuardaChuva;

console.log("O usuário vai se molhar?",vaiSeMolhar);