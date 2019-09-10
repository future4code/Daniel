function comprarCarta() {
    // Cria array de cartas
    const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    // Cria array de naipes
    const naipes = ["♦️", "♥️", "♣️", "♠️"]

    // Sorteia uma carta
    const numero = cartas[Math.floor(Math.random() * 13)]

    // Sorteia um naipe
    const naipe = naipes[Math.floor(Math.random() * 4)]

    let valor

    // Verifica se é uma das letras e coloca o valor correspondente na variável valor
    if (numero === "A") {
        valor = 11
    } else if (numero === "J" || numero === "Q" || numero === "K") {
        valor = 10
    } else { // Se nao for uma das letras, só converte a string para número
        valor = Number(numero)
    }

    // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
    const carta = {
        texto: numero + naipe,
        valor: valor
    }

    return carta
}
function calcularPontuacao(cartas) {
    let pontos = 0;
    for (let i = 0; i < cartas.length; i++) {
        pontos += cartas[i].valor;
    }
    return pontos;
}

function jogar() {
    console.log("Bem vindo ao jogo de Blackjack!");

    let novaRodada = confirm("Quer iniciar uma nova rodada ?");
    let cartasUsuario = [];
    let cartasCpu = [];
    let cartasConfirm = [];
    let cartasConfirmCpu = [];
    let vitoria;
    while (novaRodada) {
        console.log("\n|---NOVA RODADA--------------------------------\n|");
        for (let i = 0; i < 2; i++) {
            cartasUsuario.push(comprarCarta());
            cartasCpu.push(comprarCarta());
        }
        while (calcularPontuacao(cartasUsuario) >= 22 || calcularPontuacao(cartasCpu) >= 22) {
            for (let i = 0; i < 2; i++) {
                cartasUsuario[i] = comprarCarta();
                cartasCpu[i] = comprarCarta();
            }
        }
        for (let i = 0; i < cartasUsuario.length; i++) {
            cartasConfirm.push(cartasUsuario[i].texto);
            cartasConfirmCpu.push(cartasCpu[i].texto);
        }

        let compraMais = confirm("Suas cartas são " + cartasConfirm + ". A carta revelada do computador é " + cartasCpu[0].texto + ". Deseja comprar mais uma carta?");
        while (compraMais) {
            let novaCarta = comprarCarta();
            cartasUsuario.push(novaCarta);
            cartasConfirm.push(novaCarta.texto);
            if (calcularPontuacao(cartasUsuario) > 21) {
                compraMais = false;
                vitoria = "CPU GANHOU!";
            }
            else {

                compraMais = confirm("Suas cartas são " + cartasConfirm + ". A carta revelada do computador é " + cartasCpu[0].texto + ". Deseja comprar mais uma carta?");
            }
        }

        if (!(calcularPontuacao(cartasUsuario) > 21)) {
            while (calcularPontuacao(cartasUsuario) > calcularPontuacao(cartasCpu)) {
                let novaCarta = comprarCarta();
                cartasCpu.push(novaCarta);
                cartasConfirmCpu.push(novaCarta.texto);
            }
            if(calcularPontuacao(cartasCpu) > 21){
              vitoria = "USUÁRIO GANHOU!";
            }
        }
        if (!vitoria) {
            vitoria = calcularPontuacao(cartasUsuario) > calcularPontuacao(cartasCpu) ? "USUÁRIO GANHOU!" :
                calcularPontuacao(cartasUsuario) === calcularPontuacao(cartasCpu) ? "EMPATE!" : "CPU GANHOU!";
        }
        console.log("|Usuário - cartas: " + cartasConfirm + " - pontuação:", calcularPontuacao(cartasUsuario));
        console.log("|Computador - cartas: " + cartasConfirmCpu + " - pontuação:", calcularPontuacao(cartasCpu), "\n|");
        console.log("|---" + vitoria + "--------------------------------");
        alert("Suas cartas são " + cartasConfirm + ". Sua pontuação é " + calcularPontuacao(cartasUsuario) +
            ". As cartas do computador são " + cartasConfirmCpu + "️. A pontuação do computador é " + calcularPontuacao(cartasCpu) + ". " + vitoria)
        cartasCpu.length = 0;
        cartasUsuario.length = 0;
        cartasConfirm.length = 0;
        cartasConfirmCpu.length = 0;
        vitoria = "";
        novaRodada = confirm("Quer iniciar uma nova rodada ?");
        if (!novaRodada) {
            console.log("\n|----------------|");
            console.log("| O JOGO ACABOU! |");
            console.log("|----------------|");
        }

    }

}



jogar();
