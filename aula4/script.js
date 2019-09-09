function ex1() {
    const numeroPensado = Number(prompt("Qual número (1-20)?"));
    let acertou = false;
    let chute;
    let tentativas = 0;

    while (!acertou) {
        tentativas++;
        chute = Number(prompt("Chute um número:"));
        if (chute === numeroPensado) {
            console.log("Acertou mizeravi! O número pensado era:", numeroPensado);
            console.log("Número de tentativas:", tentativas);
            acertou = true;
        } else {
            if (chute > numeroPensado) {
                alert("Errou! E o chute foi maior que o número pensado.");
            }
            if (chute < numeroPensado) {
                alert("Errou! E o chute foi menor que o número pensado.");
            }
        }
    }
}

function ex2() {

    const numeroPensado = Math.floor(Math.random() * 100) + 1;
    let acertou = false;
    let chute;
    let tentativas = 0;

    while (!acertou) {
        tentativas++;
        chute = Number(prompt("Chute um número:"));
        if (chute === numeroPensado) {
            console.log("Acertou mizeravi! O número pensado era:", numeroPensado);
            console.log("Número de tentativas:", tentativas);
            acertou = true;
        } else {
            if (chute > numeroPensado) {
                alert("Errou! E o chute foi maior que o número pensado.");
            }
            if (chute < numeroPensado) {
                alert("Errou! E o chute foi menor que o número pensado.");
            }
        }
    }
}

function ex3() {

    const numeroPensado = Math.floor(Math.random() * 100) + 1;
    let acertou = false;
    let chute;
    let tentativas = 0;
    let chuteAnterior = 0;
    let chuteAnteriorFoiMaior = true;
    let maiorChute = 0;
    let menorChute = 0;
    
    while (!acertou) {
        tentativas++;
        if (chuteAnterior === 0) {
            chute = Math.floor(Math.random() * 100) + 1;
            chuteAnterior = chute;
        } else {
            if (chuteAnteriorFoiMaior) {
                if (menorChute > 0) {
                    chute =
                        Math.floor(Math.random() * (chuteAnterior - menorChute)) + menorChute;
                    chuteAnterior = chute;
                } else {
                    chute = Math.floor(Math.random() * (chuteAnterior - 1)) + 1;
                    chuteAnterior = chute;
                }
            } else {
                if (maiorChute > 0) {
                    chute =
                        Math.floor(Math.random() * (maiorChute - (chuteAnterior + 1))) +
                        chuteAnterior +
                        1;
                    chuteAnterior = chute;
                } else {
                    chute =
                        Math.floor(Math.random() * (100 - (chuteAnterior + 1))) +
                        chuteAnterior +
                        1;
                    chuteAnterior = chute;
                }
            }
        }
        if (chute === numeroPensado) {
            console.log("\nAcertou mizeravi! O número pensado era:", numeroPensado);
            console.log("Número de tentativas:", tentativas);
            acertou = true;
        } else {
            if (chute > numeroPensado) {
                console.log(
                "\nCPU errou! E o chute foi maior que o número pensado.",
                    "\nChute:",chute,
                    "- Maior chute:",maiorChute,
                    "- Menor chute:",menorChute,
                    "- Número pensado:",numeroPensado
                );
                maiorChute = chute;
                chuteAnteriorFoiMaior = true;
            }
            if (chute < numeroPensado) {
                console.log(
                "\nCPU errou! E o chute foi menor que o número pensado.",
                    "\nChute:",chute,
                    "- Maior chute:",maiorChute,
                    "- Menor chute:",menorChute,
                    "- Número pensado:",numeroPensado
                );
                menorChute = chute;
                chuteAnteriorFoiMaior = false;
            }
        }
    }
    }

ex3();