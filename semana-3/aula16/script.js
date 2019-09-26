class Despesa {
    constructor(valor,tipo,desc){
        this.valor = valor;
        this.tipo = tipo;
        this.desc = desc;
    }
}

const todasAsDepesas = [];

function validaDespesa(valor,tipo,desc){
    if(parseInt(valor)<= 0 || valor===""){
        alert("Sem valor não existe despesa! Adicione um valor.");
        return false;
    }
    if(tipo === ""){
        alert("Sem um tipo não poderemos filtrar! Adicione um tipo.");
        return false;
    }
    if(desc === ""){
        alert("Sem uma descrição não saberemos o que pagar! Adicione uma descrição.");
        return false;
    }
    return true;
}

function cadastrarDespesa() {
    const valor = document.getElementById("valor").value;
    const tipo = document.getElementById("tipo").value;
    const desc = document.getElementById("desc").value;

    if(validaDespesa(valor,tipo,desc)){
        todasAsDepesas.push(new Despesa(valor,tipo,desc));
        console.log(todasAsDepesas);
    }
}