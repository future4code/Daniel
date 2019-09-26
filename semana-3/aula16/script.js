class Despesa {
    constructor(valor, tipo, desc) {
        this.valor = valor;
        this.tipo = tipo;
        this.desc = desc;
    }

    getValor() {
        return this.valor;
    }
    getTipo() {
        return this.tipo;
    }
    getDesc() {
        return this.desc;
    }
}

const todasAsDepesas = [];

function validaDespesa(valor, tipo, desc) {
    if (parseInt(valor) <= 0 || valor === "") {
        alert("Sem valor não existe despesa! Adicione um valor.");
        return false;
    }
    if (tipo === "") {
        alert("Sem um tipo não poderemos filtrar! Adicione um tipo.");
        return false;
    }
    if (desc === "") {
        alert("Sem uma descrição não saberemos o que pagar! Adicione uma descrição.");
        return false;
    }
    return true;
}

function cadastrarDespesa() {
    const valor = document.getElementById("valor").value;
    const tipo = document.getElementById("tipo").value;
    const desc = document.getElementById("desc").value;

    if (validaDespesa(valor, tipo, desc)) {
        todasAsDepesas.push(new Despesa(valor, tipo, desc));
        renderizarDespesa(todasAsDepesas,
            document.querySelector(".despesas-list-container"), true);
    }
}

function renderizarDespesa(array, section, novaDespesa) {
    if (!novaDespesa) {
        array.forEach(element => {
            const div = document.createElement("div");
            const valor = document.createElement("p");
            const tipo = document.createElement("p");
            const desc = document.createElement("p");

            div.classList.add("despesas-item-container");

            valor.innerHTML = element.getValor();
            tipo.innerHTML = element.getTipo();
            desc.innerHTML = element.getDesc();

            div.append(valor, tipo, desc);
            section.append(div);
        });
    }
    else {
        const div = document.createElement("div");
        const valor = document.createElement("p");
        const tipo = document.createElement("p");
        const desc = document.createElement("p");

        div.classList.add("despesas-item-container");

        valor.innerHTML = todasAsDepesas[todasAsDepesas.length - 1].getValor();
        tipo.innerHTML = todasAsDepesas[todasAsDepesas.length - 1].getTipo();
        desc.innerHTML = todasAsDepesas[todasAsDepesas.length - 1].getDesc();

        div.append(valor, tipo, desc);
        section.append(div);
    }
}
function minMax(elemento, minimo, maximo) {
    return elemento.valor >= (minimo || 0) && elemento.valor <= (maximo || Number.MAX_SAFE_INTEGER);

}
function filtrarDespesa() {
    const filtroTipo = document.getElementById("detalhe-tipo").value;
    const filtroVmin = Number(document.getElementById("detalhe-vmin").value);
    const filtroVmax = Number(document.getElementById("detalhe-vmax").value);

    console.log(filtroVmin, filtroVmax);
    console.log("array", todasAsDepesas);

    let despesasFiltradas = todasAsDepesas.filter((element) => {
        return minMax(element, filtroVmin, filtroVmax)
    });
    console.log("filtrada", despesasFiltradas);
}