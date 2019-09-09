function ex1() {
    const primeiroNumero = Number(prompt("Digite um número:"));
    const segundoNumero = Number(prompt("Digite um número:"));
    const terceiroNumero = Number(prompt("Digite um número:"));

    if (
        primeiroNumero === segundoNumero ||
        primeiroNumero === terceiroNumero ||
        segundoNumero === terceiroNumero
    ) {
        console.log("ERRO!");
    } else {
        if (primeiroNumero < segundoNumero && primeiroNumero < terceiroNumero) {
            if (segundoNumero < terceiroNumero) {
                console.log(terceiroNumero, segundoNumero, primeiroNumero);
            }
            if (segundoNumero > terceiroNumero) {
                console.log(segundoNumero, terceiroNumero, primeiroNumero);
            }
        }
        if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
            if (segundoNumero < terceiroNumero) {
                console.log(primeiroNumero, terceiroNumero, segundoNumero);
            }
            if (segundoNumero > terceiroNumero) {
                console.log(primeiroNumero, segundoNumero, terceiroNumero);
            }
        }
        if (
            primeiroNumero < segundoNumero &&
            primeiroNumero > terceiroNumero &&
            segundoNumero > terceiroNumero
        ) {
            console.log(segundoNumero, primeiroNumero, terceiroNumero);
        }
        if (
            primeiroNumero > segundoNumero &&
            primeiroNumero < terceiroNumero &&
            segundoNumero < terceiroNumero
        ) {
            console.log(terceiroNumero, primeiroNumero, segundoNumero);
        }
    }
}

function ex2() {
    let ehAnimal = confirm("É um animal ?");
    if (ehAnimal) {
        let temPelo = confirm("Tem pelo?");
        if (temPelo) {
            let late = confirm("Late?");
            if (late) {
                console.log("É um cachorro.");
            } else {
                let mia = confirm("Mia ?");
                if (mia) {
                    console.log("É um gato.");
                } else {
                    console.log("É um rato.");
                }
            }
        } else {
            let voa = confirm("Voa?");
            if (voa) {
                console.log("É um passaro");
            } else {
                let temPata = confirm("Tem pata ?");
                if (temPata) {
                    console.log("É um sapo.");
                } else {
                    console.log("É um peixe.");
                }
            }
        }
    } else {
        let ehVerde = confirm("É verde?");
        if (ehVerde) {
            console.log("É uma planta.");
        } else {
            console.log("É uma pedra.");
        }
    }
}

function ex3() {
    const nome = prompt("Digite o seu nome:");
    let tipoDeJogo = prompt("Digite o tipo de jogo (IN/NA):");
    let etapaDoJogo = prompt("Digite a etapa do jogo (SF/DT/FI):");
    const categoria = Number(prompt("Digite a categoria (1/2/3/4):"));
    const quantidade = Number(prompt("Digite a quantidade desejada:"));
    let valorDoIngresso;
    let valorDoIngressoEmDolar;
    let valorTotal;
    let valorTotalEmDolar;
    let cotacaoDolar = 4.1;

    if (tipoDeJogo === "NA") {
        tipoDeJogo = "Nacional";
        if (etapaDoJogo === "SF") {
            etapaDoJogo = "Semifinais";
            switch (categoria) {
                case 1:
                    valorDoIngresso = 1320;
                    valorTotal = valorDoIngresso * quantidade;
                    break;
                case 2:
                    valorDoIngresso = 880;
                    valorTotal = valorDoIngresso * quantidade;
                    break;
                case 3:
                    valorDoIngresso = 550;
                    valorTotal = valorDoIngresso * quantidade;
                    break;
                case 4:
                    valorDoIngresso = 220;
                    valorTotal = valorDoIngresso * quantidade;
                    break;
            }
        }
        if (etapaDoJogo === "DT") {
            etapaDoJogo = "Decisão do 3 lugar";
            switch (categoria) {
                case 1:
                    valorDoIngresso = 660;
                    valorTotal = valorDoIngresso * quantidade;
                    break;
                case 2:
                    valorDoIngresso = 440;
                    valorTotal = valorDoIngresso * quantidade;
                    break;
                case 3:
                    valorDoIngresso = 330;
                    valorTotal = valorDoIngresso * quantidade;
                    break;
                case 4:
                    valorDoIngresso = 170;
                    valorTotal = valorDoIngresso * quantidade;
                    break;
            }
        }
        if (etapaDoJogo === "FI") {
            etapaDoJogo = "Final";
            switch (categoria) {
                case 1:
                    valorDoIngresso = 1980;
                    valorTotal = valorDoIngresso * quantidade;
                    break;
                case 2:
                    valorDoIngresso = 1320;
                    valorTotal = valorDoIngresso * quantidade;
                    break;
                case 3:
                    valorDoIngresso = 880;
                    valorTotal = valorDoIngresso * quantidade;
                    break;
                case 4:
                    valorDoIngresso = 330;
                    valorTotal = valorDoIngresso * quantidade;
                    break;
            }
        }
        console.log("---Dados da Compra---", "\nNome do Cliente:", nome, "\nTipo de jogo:", tipoDeJogo,
            "\nEtapa do jogo:", etapaDoJogo, "\nCategoria:", categoria, "\nQuantidade de Ingressos:", quantidade);
        console.log("---Valores---", "\nValor do Ingresso:", valorDoIngresso, "\nValor total da compra:", valorTotal);
    }
    if (tipoDeJogo === "IN") {
        tipoDeJogo = "Internacional";
        if (etapaDoJogo === "SF") {
            etapaDoJogo = "Semifinais";
            switch (categoria) {
                case 1:
                    valorDoIngresso = 1320;
                    valorDoIngressoEmDolar = valorDoIngresso / 4.10;
                    valorTotal = valorDoIngresso * quantidade;
                    valorTotalEmDolar = valorDoIngressoEmDolar * quantidade;
                    break;
                case 2:
                    valorDoIngresso = 880;
                    valorDoIngressoEmDolar = valorDoIngresso / 4.10;
                    valorTotal = valorDoIngresso * quantidade;
                    valorTotalEmDolar = valorDoIngressoEmDolar * quantidade;
                    break;
                case 3:
                    valorDoIngresso = 550;
                    valorDoIngressoEmDolar = valorDoIngresso / 4.10;
                    valorTotal = valorDoIngresso * quantidade;
                    valorTotalEmDolar = valorDoIngressoEmDolar * quantidade;
                    break;
                case 4:
                    valorDoIngresso = 220;
                    valorDoIngressoEmDolar = valorDoIngresso / 4.10;
                    valorTotal = valorDoIngresso * quantidade;
                    valorTotalEmDolar = valorDoIngressoEmDolar * quantidade;
                    break;
            }
        }
        if (etapaDoJogo === "DT") {
            etapaDoJogo = "Decisão do 3 lugar";
            switch (categoria) {
                case 1:
                    valorDoIngresso = 660;
                    valorDoIngressoEmDolar = valorDoIngresso / 4.10;
                    valorTotal = valorDoIngresso * quantidade;
                    valorTotalEmDolar = valorDoIngressoEmDolar * quantidade;
                    break;
                case 2:
                    valorDoIngresso = 440;
                    valorDoIngressoEmDolar = valorDoIngresso / 4.10;
                    valorTotal = valorDoIngresso * quantidade;
                    valorTotalEmDolar = valorDoIngressoEmDolar * quantidade;
                    break;
                case 3:
                    valorDoIngresso = 330;
                    valorDoIngressoEmDolar = valorDoIngresso / 4.10;
                    valorTotal = valorDoIngresso * quantidade;
                    valorTotalEmDolar = valorDoIngressoEmDolar * quantidade;
                    break;
                case 4:
                    valorDoIngresso = 170;
                    valorDoIngressoEmDolar = valorDoIngresso / 4.10;
                    valorTotal = valorDoIngresso * quantidade;
                    valorTotalEmDolar = valorDoIngressoEmDolar * quantidade;
                    break;
            }
        }
        if (etapaDoJogo === "FI") {
            etapaDoJogo = "Final";
            switch (categoria) {
                case 1:
                    valorDoIngresso = 1980;
                    valorDoIngressoEmDolar = valorDoIngresso / 4.10;
                    valorTotal = valorDoIngresso * quantidade;
                    valorTotalEmDolar = valorDoIngressoEmDolar * quantidade;
                    break;
                case 2:
                    valorDoIngresso = 1320;
                    valorDoIngressoEmDolar = valorDoIngresso / 4.10;
                    valorTotal = valorDoIngresso * quantidade;
                    valorTotalEmDolar = valorDoIngressoEmDolar * quantidade;
                    break;
                case 3:
                    valorDoIngresso = 880;
                    valorDoIngressoEmDolar = valorDoIngresso / 4.10;
                    valorTotal = valorDoIngresso * quantidade;
                    valorTotalEmDolar = valorDoIngressoEmDolar * quantidade;
                    break;
                case 4:
                    valorDoIngresso = 330;
                    valorDoIngressoEmDolar = valorDoIngresso / 4.10;
                    valorTotal = valorDoIngresso * quantidade;
                    valorTotalEmDolar = valorDoIngressoEmDolar * quantidade;
                    break;
            }
        }
        console.log("---Dados da Compra---", "\nNome do Cliente:", nome, "\nTipo de jogo:", tipoDeJogo,
            "\nEtapa do jogo:", etapaDoJogo, "\nCategoria:", categoria, "\nQuantidade de Ingressos:", quantidade);
        console.log("---Valores---", "\nValor do Ingresso em US$:", valorDoIngressoEmDolar,
            "\nValor do Ingresso em R$:", valorDoIngresso, "\nValor total da compra em US$:", valorTotalEmDolar, "\nValor total da compra em R$:", valorTotal);
    }
}

ex3();